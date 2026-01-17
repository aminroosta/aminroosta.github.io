---
layout: post
title:  "NodeJS REPL in Production"
date:   2025-03-09 l5:00:00 0000
categories: devops
---

> Updated Jan 27, 2025: Now supports Bun.


The default REPL is hard to access for a detached NodeJS process.

Even if you gain access to it:
* It can't be accessed by multiple developers at once.
* Hitting `<Ctrl+C>` terminates the process; far from ideal!

But there is a neat solution. We can leverage the built-in `node:repl` and `node:net` modules.
```ts
import repl from "node:repl";
import net, { Socket } from "node:net";
import readline from "node:readline";
import util from "node:util";
import process from "node:process";

const REPL_PORT = 5001;
const replContextAdditions: Record<string, any> = {};
const isBun = !!(process.versions as any).bun;

const server = net.createServer((socket: Socket) => {
  if (isBun) {
    handleBunRepl(socket);
  } else {
    handleNodeRepl(socket);
  }
});

server.on("error", (err: Error) => {
  console.error("Server error:", err);
});

server.listen(REPL_PORT, () => {
  console.log(`REPL server running on port ${REPL_PORT} (${isBun ? "Bun" : "Node.js"})`);
});

export function addToRepl(obj: Record<string, any>) {
  Object.assign(replContextAdditions, obj);
}

function handleNodeRepl(socket: Socket) {
  const replServer = repl.start({
    prompt: "> ",
    input: socket,
    output: socket,
    terminal: true,
    preview: false,
    useColors: true,
    useGlobal: false,
  });

  replServer.on("exit", () => {
    socket.end();
  });

  Object.assign(replServer.context, replContextAdditions);
}

function handleBunRepl(socket: Socket) {
  const context = { ...replContextAdditions };

  const rl = readline.createInterface({
    input: socket,
    output: socket,
    terminal: true,
    prompt: "> ",
    completer: (line: string) => compl(line, context),
  });

  rl.on("line", (line) => {
    const trimmed = line.trim();
    if (!trimmed) return rl.prompt();

    try {
      // Basic eval implementation for Bun
      const result = new Function("context", `with(context) { return (${trimmed}) }`)(context);
      socket.write(util.inspect(result, { colors: true }) + "\n");
    } catch (err) {
      socket.write(util.inspect(err, { colors: true }) + "\n");
    }
    rl.prompt();
  });

  rl.on("close", () => socket.end());
  socket.on("end", () => rl.close());

  rl.prompt();
}

function compl(line: string, context: any) {
  try {
    const ctx = { ...globalThis, ...context };
    const match = line.match(/^((?:.*[ .(\[])?)([^ .(\[]*)$/);
    if (!match) return [[], line];

    const [, expr, last] = match;
    const query = expr.trim().replace(/[. ]+$/, "");
    const target = query ? new Function("ctx", `with(ctx) { return ${query} }`)(ctx) : ctx;

    if (target == null) return [[], line];

    const keys = new Set<string>();
    for (let o = target; o; o = Object.getPrototypeOf(o)) {
      Object.getOwnPropertyNames(o).forEach(k => keys.add(k));
    }

    const hits = Array.from(keys).filter(k => k.startsWith(last));
    return [hits.map(h => expr + h), line];
  } catch {
    return [[], line];
  }
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
