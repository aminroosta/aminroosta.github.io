---
layout: post
title: "Python REPL in Production"
date: 2026-03-13
categories: devops
---

I found myself needing the `python` REPL in production, with access to the real config and objects of a running Flask application.
Here is a minimal approach using the builtin `code.InteractiveConsole` to expose the REPL over a Unix socket.

```python
# repl_socket.py
from __future__ import annotations

import code
import io
import os
import socketserver
import threading
from contextlib import redirect_stderr, redirect_stdout, suppress
from typing import Any


def start_repl_socket(
    app: Any,
    *,
    namespace: dict[str, Any],
) -> str | None:
    class Handler(socketserver.StreamRequestHandler):
        def handle(self) -> None:
            locals_ = {**namespace, "app": app}

            text_rfile = io.TextIOWrapper(
                self.rfile,
                encoding="utf-8",
                errors="replace",
                newline=None,
            )
            text_wfile = io.TextIOWrapper(
                self.wfile,
                encoding="utf-8",
                line_buffering=True,
                write_through=True,
            )

            with suppress(Exception):
                with (
                    app.app_context(),
                    redirect_stdout(text_wfile),
                    redirect_stderr(text_wfile),
                ):
                    console = code.InteractiveConsole(locals=locals_)

                    print(f"{app.name} REPL (pid={os.getpid()})\n")

                    more = False
                    while True:
                        text_wfile.write("... " if more else ">>> ")
                        text_wfile.flush()

                        if not (line := text_rfile.readline()):
                            break

                        more = console.push(line.rstrip("\r\n"))

    socket_path = f"/tmp/api-repl.{os.getpid()}.sock"
    server = socketserver.ThreadingUnixStreamServer(socket_path, Handler)
    os.chmod(socket_path, 0o600)

    threading.Thread(target=server.serve_forever, daemon=True).start()
    return socket_path
```

The nice thing about `console.push(...)` is that it behaves like a real Python REPL:

- multi-line blocks work
- bare expressions print their values
- tracebacks show up correctly

The rest is just plumbing:

- `TextIOWrapper` turns the socket into normal text streams
- `redirect_stdout(...)` and `redirect_stderr(...)` make `print()` and errors show up in the client
- `app.app_context()` makes Flask globals such as `current_app` work immediately

Then wire it into your app and expose whatever objects you want in the session:

```python
# main.py
from flask import Flask

from repl_socket import start_repl_socket


app = Flask(__name__)


@app.get("/")
def healthcheck():
    return {"status": "ok"}


if __name__ == "__main__":
    socket_path = start_repl_socket(
        app,
        namespace={"config": app.config, "db": None},
    )
    if socket_path:
        print(f"production REPL listening on {socket_path}")
    app.run()
```

Start the app, then attach with `nc`:

```bash
uv run python main.py
nc -U /tmp/api-repl.<pid>.sock
```

An example session looks like this:

```python
main REPL (pid=63503)

>>> 1 + 1
2
>>> from flask import current_app
>>> current_app.name
'main'
>>> with app.test_request_context("/"):
...     from flask import request
...     print(request.path)
...
/
```

A few nice details:

- the transport is local-only; no TCP debug port needed
- `chmod 600` keeps the socket owner-only
- each worker process gets its own `/tmp/api-repl.<pid>.sock`

For request-bound objects such as `request` or `session`, create a request context manually:

```python
with app.test_request_context("/"):
    ...
```

That is it. No extra dependency, and no need to build your own `eval()` loop.
