---
layout: post
title:  "NodeJS REPL in Production"
date:   2025-03-09 l5:00:00 0000
categories: devops
---

The default REPL is hard to access for a detached NodeJS process.

Even if you gain access to it:
* It can't be accessed by multiple developers at once.
* Hitting `<Ctrl+C>` terminates the process; far from ideal!

But there is a neat solution. We can leverage the built-in `node:repl` and `node:net` modules.
```ts
// repl_server.ts
import repl from "node:repl";
import net, { Socket } from "node:net";

const REPL_PORT = 5001;
const replContextAdditions: Record<string, any> = {};

const server = net.createServer((socket: Socket) => {
  const replServer = repl.start({
    prompt: "> ",
    input: socket,
    output: socket,
    terminal: true,
    preview: false,
    useColors: true,
    useGlobal: false,
  }).on("exit", () => {
    socket.end();
  });

  Object.assign(replServer.context, replContextAdditions);
});

server.on("error", (err: Error) => {
  console.error("Server error:", err);
});

server.listen(REPL_PORT, () => {
  console.log(`REPL server running on port ${REPL_PORT}`);
});

export function addToRepl(obj: Record<string, any>) {
  Object.assign(replContextAdditions, obj);
}
```

Run the `repl_server.ts` and manually add application objects to the context.
```typescript
// main.ts
import { addToRepl } from "./repl_server.ts";

let app = { todo: 'application' };
addToRepl({ app });
```

To connect to the REPL, use the following script:
```typescript
// repl_client.ts
import net from 'node:net'
import process from "node:process";

let sock = net.connect(5001)

process.stdin.pipe(sock)
sock.pipe(process.stdout)

sock.on('connect', function () {
  process.stdin.resume();
  process.stdin.setRawMode(true)
})

sock.on('close', function done () {
  process.stdin.setRawMode(false)
  process.stdin.pause()
  sock.removeListener('close', done)
})

process.stdin.on('end', function () {
  sock.destroy()
  console.log()
})

process.stdin.on('data', function (b) {
  if (b.length === 1 && b[0] === 4) {
    process.stdin.emit('end')
  }
})
```

The `package.json` may look like this:
```json
{
  "type": "module",
  "scripts": {
    "start": "node src/main.ts",
    "repl": "node ./src/repl_client.ts"
  }
}
```

ta-da!

<sub> Credits to [gist.github.com/TooTallNate/2209310](https://gist.github.com/TooTallNate/2209310) </sub>
