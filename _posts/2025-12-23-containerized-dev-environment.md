---
layout: post
title: "Containing Malware in a Container"
date: 2025-12-23
---

There is no escape from malware being constantly published to npm or pypi. Every `npm install` is a gamble.
Here is my attempt at moving my entire development setup to a container! This works well for me since I'm too addicted to tmux and neovim.


**Dockerfile**: build a basic docker image with your typical development tools.

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


**setup.sh**: a bash script to set up the machine after the container is built.

```bash
#!/bin/bash

readonly GITHUB_REPO="your-username/dot-files-repo"

git clone \
  -c core.sshCommand="ssh -o StrictHostKeyChecking=no" \
  git@github.com:${GITHUB_REPO}.git \
  && mv dot-files/.git . \
  && git checkout -- . \
  && rm -rf dot-files

curl https://mise.run | sh
curl -LsSf https://astral.sh/uv/install.sh | sh

source ~/.bashrc

mise use -g node@latest
mise use -g bun@latest

curl -sfL https://direnv.net/install.sh | bash

nvim --headless "+Lazy! sync" +qa

git config --global user.email "your-email@example.com"
git config --global user.name "your name"
```

**dev.sh**: a script to build the container, run **setup.sh**, fix ssh forwarding, and put you right into tmux inside the container.

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

setup_macos() {
    podman machine ssh -- -R "${VM_SOCKET}:${SSH_AUTH_SOCK}" -N &
    ssh_tunnel_pid=$!
    sleep 1
    podman machine ssh -- chmod 777 "$VM_SOCKET"

    run_opts+=(
        -v "${VM_SOCKET}:${VM_SOCKET}"
        -e "SSH_AUTH_SOCK=${VM_SOCKET}"
    )
}

setup_linux() {
    local socket_dir="/run/user/$(id -u)"

    run_opts+=(
        -v "${socket_dir}:${socket_dir}"
        -e "SSH_AUTH_SOCK=${SSH_AUTH_SOCK}"
        --network=host
        --ulimit=host
    )
}

main() {
    trap cleanup EXIT

    podman build -t "${IMAGE_NAME}:latest" .

    declare -a run_opts=(
        --replace
        -it
        --detach-keys="ctrl-@"
        --name "${IMAGE_NAME}-temp"
        --userns=keep-id
        --security-opt label=disable
    )

    case "$(uname)" in
        Darwin) setup_macos ;;
        *)      setup_linux ;;
    esac

    podman run "${run_opts[@]}" "${IMAGE_NAME}:latest" /tmp/setup.sh
    podman commit "${IMAGE_NAME}-temp" "${IMAGE_NAME}:updated"

    run_opts=(
        --rm
        -it
        --detach-keys="ctrl-@"
        --userns=keep-id
        --security-opt label=disable
    )

    case "$(uname)" in
        Darwin) setup_macos ;;
        *)      setup_linux ;;
    esac

    run_opts+=(-v "${HOME}/dev:/home/amin/dev")

    podman run "${run_opts[@]}" "${IMAGE_NAME}:updated" tmux
}

main "$@"
```

## Key Details

- **[podman](https://podman.io/)**: using podman instead of docker because it runs rootless by default; no privileged daemon required.
- **`--userns=keep-id`**: maps container user to your host UID
- **SSH agent forwarding**: the `-R` flag tunnels the agent socket so private keys never enter the container.
- **Minimal mounts**: only mount your project directory so malware can't access `~/.ssh`, browser cookies, or credentials.
