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

RUN dnf install -y \
    neovim tmux git curl wget \
    gcc gcc-c++ make \
    ripgrep fd-find fzf \
    openssh-clients \
    && dnf clean all

ENV LANG=en_US.UTF-8
ENV TERM=xterm-256color

ARG USERNAME=dev
ARG USER_UID=1000
ARG USER_GID=1000

RUN groupadd --gid ${USER_GID} ${USERNAME} \
    && useradd --uid ${USER_UID} --gid ${USER_GID} -m ${USERNAME} \
    && echo "${USERNAME} ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/${USERNAME}

COPY setup.sh /tmp/setup.sh

USER ${USERNAME}
WORKDIR /home/${USERNAME}
```


**setup.sh**: a bash script to set up the machine after the container is built.

```bash
#!/bin/bash
curl https://mise.run | sh
source ~/.bashrc

mise use -g node@latest
mise use -g python@latest

git config --global user.email "you@example.com"
git config --global user.name "Your Name"

git clone <your dot-files git repository> /home/dev
```

**dev.sh**: a script to build the container, run **setup.sh**, fix ssh forwarding, and put you right into tmux inside the container.

```bash
#!/usr/bin/env bash
set -euo pipefail

IMAGE_NAME="dev"
VM_SOCKET="/tmp/ssh-agent.sock"

setup_linux() {
    run_opts+=(
        -v "/run/user/$(id -u):/run/user/$(id -u)"
        -e "SSH_AUTH_SOCK=${SSH_AUTH_SOCK}"
        --network=host
    )
}

setup_macos() {
    # Forward SSH agent through podman machine's VM
    podman machine ssh -- -R "${VM_SOCKET}:${SSH_AUTH_SOCK}" -N &
    sleep 1
    podman machine ssh -- chmod 777 "$VM_SOCKET"

    run_opts+=(
        -v "${VM_SOCKET}:${VM_SOCKET}"
        -e "SSH_AUTH_SOCK=${VM_SOCKET}"
    )
}

main() {
    podman build -t "${IMAGE_NAME}:latest" .

    declare -a run_opts=(
        --rm -it
        --userns=keep-id
        --security-opt label=disable
    )

    case "$(uname)" in
        Darwin) setup_macos ;;
        *)      setup_linux ;;
    esac

    run_opts+=(-v "${HOME}/projects:/home/dev/projects")

    podman run "${run_opts[@]}" "${IMAGE_NAME}:latest" tmux
}

main "$@"
```

## Key Details

- **[podman](https://podman.io/)**: using podman instead of docker because it runs rootless by default; no privileged daemon required.
- **`--userns=keep-id`**: maps container user to your host UID
- **SSH agent forwarding**: the `-R` flag tunnels the agent socket so private keys never enter the container.
- **Minimal mounts**: only mount your project directory so malware can't access `~/.ssh`, browser cookies, or credentials.
