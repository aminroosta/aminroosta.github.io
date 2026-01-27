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
