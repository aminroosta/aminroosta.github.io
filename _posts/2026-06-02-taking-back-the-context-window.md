---
layout: post
title: "Taking Back the Context Window"
date: 2026-06-02
categories: [tools, llm]
---

I made a small <a href="https://github.com/aminroosta/aminroosta.github.io/raw/refs/heads/gh-pages/assets/download/dump-codex-context.sh?download=">script</a> to dump the first codex request. It points codex at a fake local server and captures the JSON.

```sh
chmod +x dump-codex-context.sh
./dump-codex-context.sh
```

The first request contains the user prompt as well as:

- top-level instructions
- AGENTS.md / project instructions, when present
- environment context
- skills instructions
- plugin instructions
- full tool declarations, including parameter docs

The default setup has:

```txt
top-level instructions: 21,335 chars
developer input block:   7,092 chars
environment context:       431 chars
tools:                  15 JSON schemas (81,575 chars)
```

## Codex Internals

In [`codex-rs/core/src/session/mod.rs`](https://github.com/openai/codex/blob/main/codex-rs/core/src/session/mod.rs),
codex builds the initial context roughly like this:

```txt
initial context =
  base model instructions
  + permissions instructions
  + collaboration-mode instructions
  + apps instructions
  + skills instructions
  + plugin instructions
  + environment context
  + tool schemas
```

In [`codex-rs/core/src/config/mod.rs`](https://github.com/openai/codex/blob/main/codex-rs/core/src/config/mod.rs),
most of those context blocks default to on:

```txt
include_permissions_instructions = true
include_apps_instructions = true
include_collaboration_mode_instructions = true
include_skill_instructions = true
include_environment_context = true
```

So unless you turn them off, codex adds them.

`model_instructions_file` is the other important knob. It replaces the base model instructions:

```toml
model_instructions_file = "/Users/amin/.codex/system.md"
```

That means I can replace the giant generic prompt with one that is written for how I actually want the agent to work.

## My Minimal Config

```toml
model_instructions_file = "/Users/amin/.codex/system.md"

include_permissions_instructions = true
include_apps_instructions = false
include_collaboration_mode_instructions = false
include_environment_context = true

[skills]
include_instructions = true

[skills.bundled]
enabled = false

[features]
plugins = false
browser_use = false
computer_use = false
enable_mcp_apps = false
in_app_browser = false
memories = false
```


And this is the kind of `~/.codex/system.md` I want:

```md
You are Codex, a coding agent.

Optimize for correctness, small diffs, and repo-local conventions.
Read the code before editing; use fast cli tools such as rg.
Do not invent abstractions unless they remove real complexity.
Verify changes with the narrowest useful test. Preserve user changes.
```

That is enough, the model already knows how to write code!
