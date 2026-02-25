---
layout: post
title: "Sandboxing OpenCode on macOS"
date: 2026-02-25
categories: [tools, llm, security, macos]
---

This post shows how I run the `opencode` CLI inside a macOS sandbox using [sandbox-exec](https://reverse.put.as/wp-content/uploads/2011/09/Apple-Sandbox-Guide-v1.0.pdf), with a tight file/process allowlist and a clean environment.

Repo (the exact files I use):

- https://github.com/aminroosta/opencode-sandbox


## What This Gives You

- deny home directory reads/writes by default; allow only `~/dev` (and a few app state dirs).
- deny `process-exec` by default; allow only known toolchain paths.
- start with an empty environment (`env -i`) and forward only a small set of env variables.


## How It Works

There are three layers:

1) `opencode-sandbox` (a tiny wrapper script)
2) `opencode-dev-only.sb` (a sandbox profile)
3) `~/.config/opencode/opencode.json` (OpenCode config defaults)


## The Wrapper Script

The wrapper does two important things:

- runs OpenCode under `sandbox-exec -f opencode-dev-only.sb`
- clears the environment with `/usr/bin/env -i` and opts out of some features via `OPENCODE_DISABLE_*`

```bash
#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname $(realpath "$0"))" && pwd)"
PROFILE="$SCRIPT_DIR/opencode-dev-only.sb"

OPENCODE_BIN="$(command -v opencode || true)"

exec /usr/bin/env -i \
  HOME="${HOME:-}" \
  PATH="${PATH:-}" \
  EDITOR="${EDITOR:-}" \
  VISUAL="${VISUAL:-}" \
  TERM="${TERM:-}" \
  TMPDIR="${TMPDIR:-}" \
  COLORTERM="${COLORTERM:-}" \
  OPENCODE_DISABLE_AUTOCOMPACT=true \
  OPENCODE_DISABLE_PRUNE=true \
  OPENCODE_DISABLE_LSP_DOWNLOAD=true \
  OPENCODE_DISABLE_DEFAULT_PLUGINS=true \
  OPENCODE_DISABLE_MODELS_FETCH=true \
  OPENCODE_DISABLE_SHARE=true \
  OPENCODE_DISABLE_CLAUDE_CODE_PROMPT=true \
  OPENCODE_DISABLE_CLAUDE_CODE_SKILLS=true \
  OPENCODE_DISABLE_EXTERNAL_SKILLS=true \
  OPENCODE_EXPERIMENTAL_DISABLE_FILEWATCHER=true \
  OPENCODE_DISABLE_TERMINAL_TITLE=true \
  OPENCODE_DISABLE_FILETIME_CHECK=true \
  /usr/bin/sandbox-exec -f "$PROFILE" "$OPENCODE_BIN" "$@"

  # If your OpenCode auth relies on environment variables (for example `OPENAI_API_KEY`), you need to explicitly forward them too.
```

That `OPENCODE_DISABLE_*` list is intentional: fewer downloads and fewer background features means fewer sandbox allowances (and fewer surprises).


## The Sandbox Profile

Two important rules:

1) **Deny writes globally** (then allow writes only where needed)
2) **Deny reads of your home directory** (then allow reads only where needed)

Key lines (trimmed):

```lisp
(allow default)

; Put broad denies first, then carve out explicit allows.
(deny file-write*)
(deny file-read* (subpath "/Users/<you>"))

; Default-deny subprocess execution.
(deny process-exec)

; Allow system binaries + your toolchain.
(allow process-exec (subpath "/bin"))
(allow process-exec (subpath "/usr/bin"))
(allow process-exec (subpath "/opt/homebrew"))

; Re-block high-risk launcher helpers.
(deny process-exec (literal "/bin/launchctl"))
(deny process-exec (literal "/usr/bin/open"))
(deny process-exec (literal "/usr/bin/osascript"))

; Workspace: allow read/write only here.
(allow file-read* (subpath "/Users/<you>/dev"))
(allow file-write* (subpath "/Users/<you>/dev"))
```

The full profile in the repo includes the practical stuff you tend to need in a real dev session:

- temp dirs: `/private/tmp`, `/private/var/folders`
- OpenCode state: `~/.config/opencode`, `~/.local/share/opencode`, `~/.cache/opencode`, etc.
- tool managers: `mise`, `uv`, language runtimes, homebrew
- minimal metadata reads (`file-read-metadata`) so path traversal works

## Recommended OpenCode Settings

The OS sandbox is the hard boundary.  
OpenCode config is the "seatbelt" that still helps even when you forget to use the wrapper.

From `~/.config/opencode/opencode.json`, the settings I recommend for a sandboxed setup:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "share": "disabled",
  "autoupdate": false,
  "server": { "mdns": false },

  "lsp": false,
  "formatter": false,
  "snapshot": false,
  "disabled_providers": ["opencode"],

  "permission": {
    "*": "ask",
    "external_directory": {
      "*": "ask",
      "$HOME/dev/*": "allow",
      "/tmp/*": "allow"
    }
  },

  "agent": {
     "build": {
       "mode": "primary",
       "tools": {
         "*": false,
         "apply_patch": true,
         "batch": true,
         "glob": true,
         "grep": true,
         "invalid": true,
         "ls": true,
         "read": true,
         "task": true,
         "webfetch": true,
         "external_directory": true,
         "bash": true
       }
     },
   }
}
```

- `share: disabled`: reduces accidental data leak.
- `autoupdate: false`: avoids auto-downloading and executing new binaries.
- `server.mdns: false`: avoids broadcasting a local service via mDNS.
- `permission`: prompts before doing anything that touches the filesystem / shell / external dirs.
- `tools`: enable only what you need.


## Limitations

- This setup does **not** restrict outbound network by default.
- Sandboxing reduces blast radius; it does not make prompt injection "go away".
