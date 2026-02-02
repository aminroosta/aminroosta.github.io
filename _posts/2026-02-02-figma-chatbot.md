---
layout: post
title: "Figma Chatbot"
date: 2026-02-02
categories: [tools, llm, figma]
---

The [Figma MCP server](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server) is decent **read-only** way to integrate Figma with Claude code. It's good for frontend development, but it make changes inside Figma.

I wanted something for small, repetitive chores: rename layers, nudge spacing normalize corner radius, etc. So I built [figma-chatbot](https://github.com/aminroosta/figma-chatbot): a local bridge that lets Claude execute JavaScript inside a running Figma Desktop document, using the Figma plugin API. That makes prompts like "change the button color to red" possible.


## How It Works

There are two parts, both running locally:

- a tiny Figma plugin window that stays open in Figma
- a localhost bridge that forwards requests from Claude to that plugin

The bridge is only there to connect Claude to the Figma plugin runtime.

{% graphviz %}
digraph FigmaChatbot {
  graph [ fontname="Helvetica,Arial,sans-serif", nodesep=0.4, ranksep=0.6, bgcolor=transparent]
  node  [fontname="Helvetica,Arial,sans-serif", fontsize=11, margin="0.16,0.1", penwidth=1.2]
  edge  [fontname="Helvetica,Arial,sans-serif", fontsize=9, color="#0b122055", fontcolor="#0b1220cc", arrowsize=0.7]

  you    [label="You", shape=box, style="filled,rounded", fillcolor="#fdfbfb", color="#0f172a33"]
  claude [label="Claude Code\n(/fig:go)", shape=box, style="filled,rounded", fillcolor="#fdfbfb", color="#0f172a33"]


    bridge [label="Local bridge\n(ws://127.0.0.1:7017)", shape=box, style="filled,rounded", fillcolor="#a1c4fd:#c2e9fb", color="#0284c733"]
    ui     [label="Figma plugin UI\n(WebSocket client)", shape=box, style="filled,rounded", fillcolor="#fdfbfb", color="#0f172a33"]
    main   [label="Figma plugin main\n(runs JS with figma.*)", shape=box, style="filled,rounded", fillcolor="#fdfbfb", color="#0f172a33"]
    doc    [label="Your Figma file\n(actual edits)", shape=box, style="filled,rounded", fillcolor="#c2e59c", color="#16653433"]

    bridge -> ui   [label="eval_request"]
    ui -> main     [label="postMessage"]
    main -> doc    [label="apply"]
    doc -> main    [label="result"]
    main -> ui     [label="eval_response"]
    ui -> bridge   [label="response"]
 

  you -> claude    [label="describe the change"]
  claude -> bridge [label="send JS"]
  bridge -> claude [label="logs + result"]
  
  {rank=same; you; claude}
  {rank=same; bridge; ui}
  {rank=same; main; doc}
}
{% endgraphviz %}

Edits happen inside the Figma plugin, where the document is writable.

## Setup

`figma-chatbot` is local-first by design: it runs on your machine and talks to your Figma Desktop app over localhost.

It uses [Bun](https://bun.sh) as the runtime for the local bridge.

What the setup looks like:

1) Claude Code side (install + sanity check)

```sh
/plugin marketplace add aminroosta/figma-chatbot
/plugin install fig@fig

/fig:setup
```

2) Figma Desktop side (import the dev plugin)

- Plugins -> Development -> Import plugin from manifest
- select `~/.claude/plugins/marketplaces/fig/chatbot/` (it contains `manifest.json`)
- run the plugin (Figma command palette: `Cmd+/`, search "chatbot") and keep its window open

3) Back in Claude Code (start the bridge)

```sh
/fig:go
# This uses the bridge under the hood to evaluate JS snippets.
```

The plugin window shows connection state. When it says "Connected", Claude can send edits.

<img src="/assets/images/figma-chatbot-help.png" width="720" alt="figma-chatbot in action" />  

## Using It

Once the bridge is running, prompts like this become possible:

- "Find every instance of Button, make the fill red, and align the padding across variants."
- "Prefix everything on this page with Marketing/, except frames that already have a prefix."
- "Rename these layers with a clean scheme, then center the viewport on them."

<br/>
If you want to try it, the repo is here: [https://github.com/aminroosta/figma-chatbot](https://github.com/aminroosta/figma-chatbo)
