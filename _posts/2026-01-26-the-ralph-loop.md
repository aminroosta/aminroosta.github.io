---
layout: post
title: "The Ralph Loop"
date: 2026-01-26
categories: [tools, llm]
---

The [Ralph Loop](https://ghuntley.com/loop/) has completely changed how I write software. For over a decade, my workflow for implementing a feature looked like this:

- Step 1: write a tech spec (maybe informal; maybe just a Markdown file in [Vimwiki](https://github.com/vimwiki/vimwiki)).
- Step 2: add a few TODO tasks (obvious, low-hanging fruit that I should pick up next).

```md
# Implement 2FA with SMS

- links to third-party SMS provider |
- links to Figma designs            |<- my understanding on day 1
- functional requirement 1          |
- functional requirement 2          |


# TODO
- [ ] Add a `user_sms` table + migration |
- [ ] Add a `POST /v1/sms/pin` API       |<- low-hanging fruit
```

- Step 3: implement the **TODO** items.
- Step 4: think about what to do next.

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

Here is the full prompt `ralph.md`:

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

Here is the full `ralph.ts` <a href="https://github.com/aminroosta/aminroosta.github.io/raw/refs/heads/gh-pages/assets/download/ralph.ts?download=">click to download</a>.

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
