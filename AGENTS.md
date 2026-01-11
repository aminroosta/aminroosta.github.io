# Writing conventions for this blog repo

This repo is a Jekyll blog. Posts live in `_posts/` and are Markdown with YAML front matter. The posts read like “notes to future self”: short setup/context, then concrete commands/snippets, then a compact “key details / options” section.

## Post file layout

- Location + naming: `_posts/YYYY-MM-DD-some-slug.md`.
- Front matter: YAML `---` block at the top.
  - Common keys:
    - `layout: post`
    - `title: "..."` (titles are usually quoted)
    - `date: ...` (seen as `YYYY-MM-DD` and as full timestamps like `YYYY-MM-DD HH:MM:SS +TZ`)
    - `categories: ...` (optional; a short word like `tools`, `graphviz`)

## Content structure patterns

- Opening: 1–3 short paragraphs stating the problem and why the approach exists.
- Sections are often separated by a horizontal rule (`---`) to break the narrative into phases.
- Headings are used when it helps scanning:
  - `## ...` for a “Key Details” style summary section.
  - `### ...` for a small option list (“Other Options”).

## Formatting + tone (what shows up repeatedly)

- Information density: paragraphs are short; most of the “how” is carried by code blocks and lists.
- Labels for artifacts are commonly bolded, then followed by a colon:
  - Example pattern: `**Dockerfile**: ...`, `**setup.sh**: ...`, `**dev.sh**: ...`
- Lists are compact `- ...` bullets; bullets often include inline code and links.
- Inline code (backticks) is used for flags, file paths, and identifiers.

## Code snippets

- Fenced code blocks almost always include a language tag:
  - `bash`, `dockerfile`, `patch`, `json`, `js`.
- bash blocks often include small comments explaining intent.
- When describing a change, a `patch` fenced block is used to show diffs.

## Links + media

- Links are mostly Markdown links (`[text](url)`), with occasional raw HTML anchors when useful (e.g. download links).
- Images are referenced with raw HTML `img` tags:
  - `src` values are typically site-rooted, e.g. `/assets/images/<file>.png`.
  - `<br/>` and trailing double-spaces are used for line breaks around images.

## Jekyll/Liquid usage

- Graphviz is supported via a Liquid block. It’s used to show relationships (components, flows, dependencies) when text or bullets would be too linear.
- Some posts include both: a fenced code block for copy/paste, and a `{% graphviz %} ... {% endgraphviz %}` block for rendering.

```liquid
{% graphviz %}
digraph {
  client -> api;
  api -> postgres;
  api -> redis;
}
{% endgraphviz %}
```

## Repo assets referenced by posts

- Images: `assets/images/` (referenced from posts as `/assets/images/...`).
- Downloads: `assets/download/` (sometimes linked directly from posts).
