---
layout: post
title: "Containing Malware in a Container"
date: 2025-12-23
---

There is no escape from malware being constantly published to npm or pypi. Every `npm install` is a gamble.

Here is my attempt at moving my entire development setup to a container. This works well if you use tmux and neovim. The goal: isolate untrusted code from the host while keeping a comfortable dev experience.

## How It Works

The setup uses three files that work together:

```
dev.sh (orchestrator)
   │
   ├─► Builds image from Dockerfile (base OS + tools)
   │
   ├─► Runs setup.sh inside container (configures dotfiles, mise, nvim plugins etc.)
   │
   ├─► Commits the result (so setup only runs once)
   │
   └─► Launches tmux in a fresh container from the committed image
```

- Isolated: `~/.ssh`, browser data, credentials, everything outside the project
- Shared: the `~/dev` directory (mounted read-write)

---

## 1. Dockerfile: The Base Image

This builds a minimal Fedora image with core dev tools.

```dockerfile
FROM fedora:latest

# Install core tools
RUN dnf install -y \
    neovim \
    tmux \
    git \
    curl \
    wget \
    gcc \
    gcc-c++ \
    make \
    ripgrep \
    fd-find \
    fzf \
    openssh-clients \
    ca-certificates \
    sudo \
    glibc-langpack-en \
    the_silver_searcher \
    ncdu \
    btop \
    && dnf clean all

ENV LANG=en_US.UTF-8
ENV LANGUAGE=en_US:en
ENV LC_ALL=en_US.UTF-8
ENV TERM=xterm-256color
ENV COLORTERM=truecolor

ARG USERNAME=amin
ARG USER_UID=1000
ARG USER_GID=1000

RUN groupadd --gid ${USER_GID} ${USERNAME} \
    && useradd --uid ${USER_UID} --gid ${USER_GID} -m ${USERNAME} \
    && echo "${USERNAME} ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/${USERNAME} \
    && chmod 0440 /etc/sudoers.d/${USERNAME}

COPY setup.sh /tmp/setup.sh

USER ${USERNAME}
WORKDIR /home/${USERNAME}
```

**Notes:**
- The user creation matches the host UID/GID so mounted files have correct permissions
- `sudo` is passwordless for convenience

---

## 2. setup.sh: Personal Environment Setup

This script runs once inside the container to set up the dotfiles and tools.

```bash
#!/bin/bash

readonly GITHUB_REPO="your-username/dot-files-repo"

# Clone dotfiles using SSH (agent forwarded from host)
git clone \
  -c core.sshCommand="ssh -o StrictHostKeyChecking=no" \
  git@github.com:${GITHUB_REPO}.git \
  && mv dot-files/.git . \
  && git checkout -- . \
  && rm -rf dot-files

# Install mise (manages node, python, etc.)
curl https://mise.run | sh

# Install uv (fast Python package manager)
curl -LsSf https://astral.sh/uv/install.sh | sh

source ~/.bashrc

# Install language runtimes via mise
mise use -g node@latest
mise use -g bun@latest

# Install direnv for per-project env vars
curl -sfL https://direnv.net/install.sh | bash

# Install neovim plugins
nvim --headless "+Lazy! sync" +qa

git config --global user.email "your-email@example.com"
git config --global user.name "your name"
```

---

## 3. dev.sh: The Orchestrator

It handles SSH agent forwarding (different on macOS vs Linux) and the build-setup-commit flow.


```bash
#!/usr/bin/env bash
set -euo pipefail

readonly IMAGE_NAME="dev"
readonly VM_SOCKET="/tmp/ssh-agent.sock"

ssh_tunnel_pid=""

cleanup() {
    if [[ -n "$ssh_tunnel_pid" ]]; then
        kill "$ssh_tunnel_pid" 2>/dev/null || true
    fi
}

### SSH Agent Forwarding

# SSH keys stay on the host, but the container can use them.
# macOS runs containers in a Linux VM, so we tunnel the socket through:
setup_macos() {
    # Forward host's SSH agent socket into the Podman VM
    podman machine ssh -- -R "${VM_SOCKET}:${SSH_AUTH_SOCK}" -N &
    ssh_tunnel_pid=$!
    sleep 1
    podman machine ssh -- chmod 777 "$VM_SOCKET"

    run_opts+=(
        -v "${VM_SOCKET}:${VM_SOCKET}"
        -e "SSH_AUTH_SOCK=${VM_SOCKET}"
    )
}

# Linux can mount the socket directly:
setup_linux() {
    local socket_dir="/run/user/$(id -u)"

    run_opts+=(
        -v "${socket_dir}:${socket_dir}"
        -e "SSH_AUTH_SOCK=${SSH_AUTH_SOCK}"
        --network=host
        --ulimit=host
    )
}

### Build, Setup, and Commit

main() {
    trap cleanup EXIT

    # Build the base image from Dockerfile
    podman build -t "${IMAGE_NAME}:latest" .

    declare -a run_opts=(
        --replace
        -it
        --detach-keys="ctrl-@"
        --name "${IMAGE_NAME}-temp"
        --userns=keep-id        # Maps container UID to your host UID
        --security-opt label=disable
    )

    case "$(uname)" in
        Darwin) setup_macos ;;
        *)      setup_linux ;;
    esac

    # Run setup.sh and commit the result
    podman run "${run_opts[@]}" "${IMAGE_NAME}:latest" /tmp/setup.sh
    podman commit "${IMAGE_NAME}-temp" "${IMAGE_NAME}:updated"

    ### Launch the Dev Environment

    # Fresh options for the final container
    run_opts=(
        --rm                    # Delete container on exit
        -it
        --detach-keys="ctrl-@"
        --userns=keep-id
        --security-opt label=disable
    )

    case "$(uname)" in
        Darwin) setup_macos ;;
        *)      setup_linux ;;
    esac

    # Mount ONLY the project(s) directory - nothing else
    run_opts+=(-v "${HOME}/dev:/home/amin/dev")

    podman run "${run_opts[@]}" "${IMAGE_NAME}:updated" tmux
}

main "$@"
```

- `--userns=keep-id`: The host UID maps to the container user, so file permissions work correctly on mounted volumes
- `--security-opt label=disable`: Disables SELinux labeling (avoids permission issues with mounts)
- `--detach-keys="ctrl-@"`: Changes the detach sequence from `ctrl-p ctrl-q` (conflicts with tmux)

---

## Why Podman?

I'm using [podman](https://podman.io/) instead of Docker because it runs rootless by default.
