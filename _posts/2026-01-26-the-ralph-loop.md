---
layout: post
title: "The Ralph Loop"
date: 2026-01-26
categories: [tools, llm]
---

The [Ralph Loop](https://ghuntley.com/loop/) has completely changed how I write software. For over a decade, my workflow for implementing a feature looked like this:
Step 1: write a tech spec (maybe informal; maybe just a Markdown file in [Vimwiki](https://github.com/vimwiki/vimwiki)).
Step 2: add a few TODO tasks (obvious, low-hanging fruit that I should pick up next).


```md
# Implement 2FA with SMS

- links to third-party SMS provider |
- links to Figma designs          |<- my understanding on day 1
- functional requirement 1        |
- functional requirement 2        |


# TODO
- [ ] Add a `user_sms` table + migration |
- [ ] Add a `POST /v1/sms/pin` API       |<- low-hanging fruit
```

Step 3: implement the **TODO** items
Step 4: think about what to do next
Go back to step 3 and repeat until the project is complete.

The way I use the Ralph Loop now isn't too different from that approach; the key difference is that the **TODO**s are done by LLMs (GPT-5.2 (xhigh) or Opus 4.5 (max)).

{% graphviz %}
digraph RalphLoop {
  graph [rankdir=TB, fontname="Helvetica,Arial,sans-serif", nodesep=0.4, ranksep=0.6, bgcolor=transparent]
  node  [fontname="Helvetica,Arial,sans-serif", fontsize=11, margin="0.15,0.08", penwidth=1.2]
  edge  [fontname="Helvetica,Arial,sans-serif", fontsize=9, color="#0b122066", fontcolor="#0b1220cc", arrowsize=0.7]

  start [label="Start", shape=circle, style=filled, fillcolor="#c2e59c", color="#166534", width=0.5, fixedsize=true]

  prd [label="Write PRD\n(tech-spec)", shape=box, style="filled,rounded", fillcolor="#fdfbfb:#ebedee", fontcolor="#0f172a", color="#0f172a33"]
  todos [label="Add TODO tasks\n(low-hanging fruit)", shape=box, style="filled,rounded", fillcolor="#fdfbfb:#ebedee", fontcolor="#0f172a", color="#0f172a33"]

  llm [label="LLM implements\nTODO item", shape=box, style="filled,rounded", fillcolor="#7b4397:#dc2430", fontcolor="white", color="#7b439755", penwidth=2]

  more [label="More\nsteps?", shape=diamond, style="filled", fillcolor="#fde68a", color="#a16207", fontcolor="#3b2f1a"]

  think [label="Think about\nnext steps", shape=box, style="filled,rounded", fillcolor="#a1c4fd:#c2e9fb", fontcolor="#0f172a", color="#0284c733"]

  done [label="Done", shape=doublecircle, style=filled, fillcolor="#c2e59c", color="#166534", width=0.5, fixedsize=true]

  start -> prd
  prd -> todos
  todos -> llm
  llm -> more
  more -> think [label="yes"]
  think -> todos [constraint=false]
  more -> done [label="no"]

  {rank=same; think; llm}
  {rank=same; start; prd}
  {rank=same; more; done}
}
{% endgraphviz %}

I use [OpenCode](https://opencode.ai/) with a script to automate most of step 3 (implementing the **TODO** items).

```sh
ralph.ts    # it's somewhere on my PATH
ralph.md    # the system prompt for the Ralph Loop

# <current project files>
.opencode/
├── opencode.json # OpenCode permission/settings
├── log-sms.md    # append-only log for the LLM
└── prd-sms.md    # the PRD file
```

The setup is dead simple. I run `ralph.ts <iterations> .opencode/prd-<name>.md`. The script takes the `ralph.md` system prompt, inlines the paths to `.opencode/prd-<name>.md` and `.opencode/log-<name>.md`, and runs a new OpenCode session.
It's basically a for loop. The system prompt (`ralph.md`) instructs the LLM to mark the TODO item as complete, append progress to `.opencode/log-<name>.md`, and commit the changes.

<details><summary> full system prompt (click to expand) </summary>

```md
# Ralph Agent Instructions

You are an autonomous coding agent responsible for executing tasks within a software project.

## Your Task Pipeline

1.  **Contextual Review:**
    * Read the PRD at `RALPH_PRD_PATH`.
    * Read the progress log at `RALPH_LOG_PATH`.
2.  **Incremental Planning:**
    * Decide on a single, granular step to move the project closer to the full PRD implementation.
    * Steps need not be sequential, pick the one that feels right as the next step.
3.  **Execution:**
    * Implement that single step -- this is where you will spend most of your time.
4.  **Validation:**
    * Do everything that is available to verify that the changes are correct.
5.  **Version Control:**
    * Commit code changes with the message: `feat: [Item Title]`.
    * *Note: Skip `.opencode/` folder changes and any existing untracked files.*

## Progress Log Format
*Append-only. Information density is key.*

\`\`\`md
[short commit hash]
- informative (not prescriptive) notes to future self;
  such as learnings, patterns, gotchas, and/or useful snippets.
\`\`\`

> **Note:** The "Learnings" section is vital for helping future iterations pick up the next steps effectively.

---

## After Completing the Step

* Mark the step as complete in the `# Suggested Next Steps` section of `RALPH_PRD_PATH`.
* If there aren't enough steps left, add a new step to find more steps.
    * The goal is to include a dedicated step where you act as a slow, deliberate, and analytical thinker: an experienced architect and a rigorous QA specialist, to identify future steps.
* Improve existing steps, remove those that no longer apply (if any), and sort them by readiness to be picked up.

## Core Principles

* **Atomic Progress:** Work on **ONE** step at a time and commit frequently.
* **Excellence:** Strive for high-quality implementation in every iteration.
```

</details>

{% graphviz %}
digraph RalphInternal {
  graph [rankdir=TB, fontname="Helvetica,Arial,sans-serif", nodesep=0.35, ranksep=0.5, bgcolor=transparent]
  node  [fontname="Helvetica,Arial,sans-serif", fontsize=10, margin="0.12,0.06", penwidth=1.2]
  edge  [fontname="Helvetica,Arial,sans-serif", fontsize=9, color="#0b122055", arrowsize=0.6]

  subgraph cluster_inputs {
    label="Inputs"
    style="rounded,dashed"
    color="#0f172a33"
    fontcolor="#0f172a99"
    prd [label="prd-*.md", shape=note, style=filled, fillcolor="#fdfbfb", color="#0f172a33"]
    log [label="log-*.md", shape=note, style=filled, fillcolor="#fdfbfb", color="#0f172a33"]
  }

  prompt [label="ralph.md\nprompt template", shape=box, style="filled,rounded", fillcolor="#a1c4fd:#c2e9fb", fontcolor="#0f172a", color="#0284c733"]

  subgraph cluster_iteration {
    label="One Iteration"
    style="rounded,filled"
    fillcolor="#f8fafc"
    color="#0f172a22"
    fontcolor="#0f172a99"
    
    pick [label="Pick one\nTODO step", shape=box, style="filled,rounded", fillcolor="#fdfbfb", color="#0f172a33"]
    implement [label="Implement", shape=box, style="filled,rounded", fillcolor="#7b4397:#dc2430", fontcolor="white", color="#7b439755", penwidth=1.5]
    validate [label="Validate", shape=box, style="filled,rounded", fillcolor="#fdfbfb", color="#0f172a33"]
    commit [label="git commit", shape=box, style="filled,rounded", fillcolor="#fdfbfb", color="#0f172a33"]
  }

  update [label="Update PRD +\nProgress Log", shape=box, style="filled,rounded", fillcolor="#fde68a", color="#a1620755"]

  check [label="All done?", shape=diamond, style=filled, fillcolor="#fdfbfb", color="#0f172a33", fontsize=9]
  
  complete [label="COMPLETE", shape=doublecircle, style=filled, fillcolor="#c2e59c", color="#166534", width=0.6, fixedsize=true, fontsize=9]

  prd -> prompt
  log -> prompt
  prompt -> pick
  pick -> implement -> validate -> commit
  commit -> update
  update -> check
  check -> prompt [label="no", constraint=true]
  check -> complete [label="yes"]

  {rank=same;prompt; update}
}
{% endgraphviz %}


The `.opencode/prd-sms.md` might look something like this:
```md
We are building SMS authentication with provider XYZ.
You can read the docs at http://xyz.com/docs/sms/api

Use the Figma MCP to inspect these node IDs: 110-5501 110-5729 290-8616

# Suggested Next Steps

- [ ] Add a `user_sms` table + migration
- [ ] Add a `POST /v1/sms/pin` API
- [ ] Study what needs to be done next and add a few more suggested steps.
```

And the `ralph.ts` script is the glue that runs the loop, plus a few extra niceties like opening the OpenCode web UI so I can inspect progress more easily.

<details> <summary> full ralph.ts (click to expand) </summary>


```ts
#!/usr/bin/env bun
import { spawn, spawnSync } from "node:child_process";
import {
  closeSync,
  existsSync,
  mkdirSync,
  openSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const USAGE = "Usage: ./ralph.ts [--port 4096] [max_iterations] <prd_file>";

const OPENCODE_OPTIONS = [
  "openai/gpt-5.2-codex (medium)",
  "openai/gpt-5.2-codex (high)",
  "openai/gpt-5.2-codex (xhigh)",
  "openai/gpt-5.2 (medium)",
  "openai/gpt-5.2 (high)",
  "openai/gpt-5.2 (xhigh)",
  "anthropic/claude-opus-4-5 (high)",
  "anthropic/claude-opus-4-5 (max)",
];

const OPENCODE_CONFIG_TEMPLATE = `{
  "$schema": "https://opencode.ai/config.json",
  "permission": {
    "edit": "allow",
    "external_directory": {
      "*": "ask",
      "$HOME/dev/*": "allow",
      "/tmp/*": "allow"
    },
    "bash": {
      "*": "ask",
      "*.claude/skills/*/scripts/*": "allow",
      "git branch *": "allow",
      "git status *": "allow",
      "git diff *": "allow",
      "git log *": "allow",
      "git add *": "allow",
      "git commit *": "allow",
      "npm run lint *": "allow",
      "npx tsc *": "allow",
      "mkdir *": "allow",
      "date *": "allow"
    }
  },
  "provider": {
    "openai": {
      "models": {
        "gpt-5.2": {
          "options": {
            "reasoningSummary": "auto"
          }
        },
        "gpt-5.2-codex": {
          "options": {
            "reasoningSummary": "auto"
          }
        }
      }
    }
  }
}
`;

const scriptDir = path.dirname(fileURLToPath(import.meta.url));

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const commandExists = (command: string) => {
  const result = spawnSync("which", [command], { stdio: "ignore" });
  return result.status === 0;
};

const openInDefaultBrowser = (url: string) => {
  try {
    if (process.platform === "darwin") {
      const child = spawn("open", [url], { stdio: "ignore", detached: true });
      child.unref();
      return true;
    }
    if (process.platform === "win32") {
      const child = spawn("cmd", ["/c", "start", "", url], {
        stdio: "ignore",
        detached: true,
      });
      child.unref();
      return true;
    }
    if (commandExists("xdg-open")) {
      const child = spawn("xdg-open", [url], { stdio: "ignore", detached: true });
      child.unref();
      return true;
    }
  } catch {
    return false;
  }

  return false;
};

const fail = (message: string, code = 1): never => {
  console.error(message);
  process.exit(code);
};

const parseArgs = () => {
  const args = process.argv.slice(2);
  let maxIterations = 10;
  let opencodePort = "";
  let prdPath = "";

  let index = 0;
  while (index < args.length) {
    const arg = args[index];
    if (arg === "--port") {
      if (index + 1 >= args.length) {
        fail("Error: --port requires a value.");
      }
      opencodePort = args[index + 1];
      index += 2;
      continue;
    }
    if (arg.startsWith("--port=")) {
      opencodePort = arg.slice("--port=".length);
      index += 1;
      continue;
    }

    if (/^\d+$/.test(arg)) {
      maxIterations = Number.parseInt(arg, 10);
    } else if (!prdPath) {
      prdPath = arg;
    } else {
      fail(`Error: Unexpected argument '${arg}'.`);
    }
    index += 1;
  }

  return { maxIterations, opencodePort, prdPath };
};

const ensureFile = (filePath: string, errorMessage: string) => {
  if (!existsSync(filePath)) {
    fail(errorMessage);
  }
  const stat = statSync(filePath);
  if (!stat.isFile()) {
    fail(errorMessage);
  }
};

const writeLog = (logFile: string) => {
  const content = `# Ralph Log\nStarted: ${new Date().toString()}\n---\n`;
  writeFileSync(logFile, content, "utf8");
};

const runTool = (
  command: string,
  args: string[],
  input?: string,
  env?: NodeJS.ProcessEnv,
): Promise<string> =>
  new Promise((resolve, reject) => {
    const stdinMode: "inherit" | "pipe" = input ? "pipe" : "inherit";
    const child = spawn(command, args, {
      env,
      stdio: [stdinMode, "pipe", "pipe"],
    });
    let output = "";
    const forward = (data: Buffer, target: NodeJS.WriteStream) => {
      const text = data.toString("utf8");
      output += text;
      target.write(text);
    };

    if (child.stdout) {
      child.stdout.on("data", (data) => forward(data, process.stdout));
    }
    if (child.stderr) {
      child.stderr.on("data", (data) => forward(data, process.stderr));
    }

    child.on("error", (error) => reject(error));
    child.on("close", () => resolve(output));

    if (input && child.stdin) {
      child.stdin.write(input);
      child.stdin.end();
    }
  });

const selectOpencodeModel = () => {
  const selection = spawnSync("fzf", ["--prompt=model (variant) > ", "--exact"], {
    input: `${OPENCODE_OPTIONS.join("\n")}\n`,
    encoding: "utf8",
    stdio: ["pipe", "pipe", "inherit"],
  });

  const selected = (selection.stdout ?? "").trim();
  if (!selected) {
    fail("Error: No model selected.");
  }

  const model = selected.split(" ")[0];
  const thinkingMatch = selected.match(/\(([^)]+)\)/);
  const thinking = thinkingMatch ? thinkingMatch[1] : "";
  return { model, thinking };
};

const createSession = async (serverUrl: string, title: string) => {
  try {
    const response = await fetch(`${serverUrl}/session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    if (!response.ok) {
      return "";
    }
    const payload = (await response.json()) as { id?: string } | null;
    if (payload && typeof payload.id === "string") {
      return payload.id;
    }
    return "";
  } catch {
    return "";
  }
};

const main = async () => {
  const { maxIterations, opencodePort, prdPath } = parseArgs();

  if (!prdPath) {
    console.error("Error: PRD markdown file path is required.");
    console.error(USAGE);
    process.exit(1);
  }

  const resolvedPrdPath = path.resolve(prdPath);
  ensureFile(resolvedPrdPath, `Error: PRD file not found: ${resolvedPrdPath}`);
  process.env.RALPH_PRD_PATH = resolvedPrdPath;

  const prdBasename = path.basename(resolvedPrdPath);
  const prdName = prdBasename.replace(/\.md$/, "");
  const prdSlug = prdName.replace(/^prd-/, "");

  let opencodeModel = "";
  let opencodeThinking = "";

  if (!commandExists("opencode")) {
    fail("Error: opencode not found in PATH.");
  }
  if (!commandExists("fzf")) {
    fail("Error: fzf not found in PATH.");
  }
  ({ model: opencodeModel, thinking: opencodeThinking } = selectOpencodeModel());

  const baseDir = path.join(process.cwd(), ".opencode");
  mkdirSync(baseDir, { recursive: true });
  const logFile = path.join(baseDir, `log-${prdSlug}.md`);
  const opencodeConfigFile = path.join(baseDir, "opencode.json");
  const opencodeHost = "0.0.0.0";
  const opencodePortFinal = opencodePort || "4096";
  const opencodeServerUrl = `http://${opencodeHost}:${opencodePortFinal}`;
  const opencodeWebLog = path.join(baseDir, "opencode-web.log");
  let opencodeWebStarted = false;
  let opencodeWebProcess: ReturnType<typeof spawn> | null = null;

  if (!existsSync(opencodeConfigFile)) {
    writeFileSync(opencodeConfigFile, OPENCODE_CONFIG_TEMPLATE, "utf8");
  }

  console.log(`Starting opencode web server at ${opencodeServerUrl}`);
  const logFd = openSync(opencodeWebLog, "w");
  opencodeWebProcess = spawn(
    "opencode",
    ["web", "--port", opencodePortFinal, "--hostname", opencodeHost],
    {
      env: { ...process.env, OPENCODE_CONFIG: opencodeConfigFile },
      stdio: ["ignore", logFd, logFd],
    },
  );
  closeSync(logFd);
  opencodeWebStarted = true;
  await sleep(1500);
  if (opencodeWebProcess.exitCode !== null) {
    console.error(
      `Warning: opencode web exited early (code ${opencodeWebProcess.exitCode}). ` +
        `Check ${opencodeWebLog} and ensure a server is running at ${opencodeServerUrl}.`,
    );
    opencodeWebStarted = false;
    opencodeWebProcess = null;
  }

  const cleanupWeb = () => {
    if (opencodeWebStarted && opencodeWebProcess) {
      console.log("Stopping opencode web server");
      opencodeWebProcess.kill();
    }
  };

  process.on("exit", cleanupWeb);
  process.on("SIGINT", () => {
    cleanupWeb();
    process.exit(1);
  });
  process.on("SIGTERM", () => {
    cleanupWeb();
    process.exit(1);
  });


  if (!existsSync(logFile)) {
    writeLog(logFile);
  }

  console.log(`Starting Ralph - Tool: opencode - Max iterations: ${maxIterations}`);
  console.log(`PRD: ${resolvedPrdPath}`);

  for (let iteration = 1; iteration <= maxIterations; iteration += 1) {
    console.log("");
    console.log("===============================================================");
    console.log(`  Ralph Iteration ${iteration} of ${maxIterations} (opencode)`);
    console.log("===============================================================");

    let output = "";
    const sessionTitle = `Ralph Iteration ${iteration}`;
    const sessionId = await createSession(opencodeServerUrl, sessionTitle);
    const encodedPath = Buffer.from(process.cwd()).toString("base64").replace(/=+/g, "");

    if (sessionId) {
      const sessionUrl = `${opencodeServerUrl}/${encodedPath}/session/${sessionId}`;
      console.log(`OpenCode session: ${sessionUrl}`);
      if (!openInDefaultBrowser(sessionUrl)) {
        console.log(`Warning: Could not open browser for ${sessionUrl}`);
      }
    } else {
      console.log("Warning: Could not create session; running without session id");
    }

    const opencodePrompt = readFileSync(path.join(scriptDir, "ralph.md"), "utf8")
      .replace(/RALPH_PRD_PATH/g, resolvedPrdPath)
      .replace(/RALPH_LOG_PATH/g, logFile);

    const runArgs = [
      "run",
      "--attach",
      opencodeServerUrl,
      "--model",
      opencodeModel,
      "--variant",
      `thinking=${opencodeThinking}`,
      "--title",
      sessionTitle,
    ];
    if (sessionId) {
      runArgs.push("--session", sessionId);
    }
    runArgs.push(opencodePrompt);
    output = await runTool("opencode", runArgs, undefined, {
      ...process.env,
      OPENCODE_CONFIG: opencodeConfigFile,
    });

    if (output.includes("<promise>COMPLETE</promise>")) {
      console.log("");
      console.log("Ralph completed all tasks!");
      console.log(`Completed at iteration ${iteration} of ${maxIterations}`);
      process.exit(0);
    }

    console.log(`Iteration ${iteration} complete. Continuing...`);
    await sleep(2000);
  }

  console.log("");
  console.log(`Ralph reached max iterations (${maxIterations}) without completing all tasks.`);
  console.log(`Check ${logFile} for status.`);
  process.exit(1);
};

await main();
```

</details>


{% graphviz %}
digraph RalphRunner {
  graph [rankdir=TB, fontname="Helvetica,Arial,sans-serif", nodesep=0.3, ranksep=0.45, bgcolor=transparent]
  node  [fontname="Helvetica,Arial,sans-serif", fontsize=10, margin="0.1,0.05", penwidth=1.2]
  edge  [fontname="Helvetica,Arial,sans-serif", fontsize=8, color="#0b122055", arrowsize=0.6]

  start [label="ralph.ts", shape=circle, style=filled, fillcolor="#7b4397:#dc2430", fontcolor="white", width=0.6, fixedsize=true]

  parse [label="Parse args\n(port, iterations, PRD)", shape=box, style="filled,rounded", fillcolor="#fdfbfb", color="#0f172a33"]
  
  fzf [label="fzf: select model\n(GPT-5.2 / Opus 4.5)", shape=box, style="filled,rounded", fillcolor="#a1c4fd:#c2e9fb", color="#0284c733"]
  
  web [label="Start opencode\nweb server", shape=box, style="filled,rounded", fillcolor="#fdfbfb", color="#0f172a33"]

  subgraph cluster_loop {
    label="Loop (max N iterations)"
    style="rounded,dashed"
    color="#a1620755"
    fontcolor="#a16207"
    bgcolor="#fffbeb22"

    session [label="Create session\n+ open browser", shape=box, style="filled,rounded", fillcolor="#fdfbfb", color="#0f172a33"]
    inject [label="Inject PRD/log paths\ninto ralph.md", shape=box, style="filled,rounded", fillcolor="#fdfbfb", color="#0f172a33"]
    run [label="opencode run", shape=box, style="filled,rounded", fillcolor="#7b4397:#dc2430", fontcolor="white", penwidth=1.5]
    check [label="COMPLETE?", shape=diamond, style=filled, fillcolor="#fde68a", color="#a16207", fontsize=9]
  }

  done [label="Done", shape=doublecircle, style=filled, fillcolor="#c2e59c", color="#166534", width=0.5, fixedsize=true]
  maxed [label="Max iterations\nreached", shape=box, style="filled,rounded", fillcolor="#fecaca", color="#b91c1c55", fontcolor="#7f1d1d"]

  start -> parse -> fzf -> web -> session
  session -> inject -> run -> check
  check -> done [label="yes"]
  check -> session [label="no", constraint=true]
  check -> maxed [label="limit", style=dashed, color="#b91c1c55"]
  
  {rank=same; parse; web; maxed}
}
{% endgraphviz %}


I hope you find this useful. This has significantly changed how I write code in 2026.  
The PRD becomes of utmost importance: I spend a lot of time manually editing it to make sure it's solid. I gave a short example above, but usually instead of instructions like "read this URL" or "use the Figma MCP", I do those ahead of time and put the materials somewhere on the filesystem so they're easily accessible to the LLM. We want to avoid extra cognitive overhead for the LLM (this is called context rot).

Of course, not everything is sunshine and rainbows after the loops are done. I find myself adding a few more TODO items just to clean the slop; or, at worst, manually editing the code. I'd say slop cleanup takes about 60% of my time, but it's still worth it because I'm 2x to 3x faster and much less mentally exhausted at the end of the day.
