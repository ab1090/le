# Competency Lesson Library

A lightweight lesson catalog that renders JSON-authored competency lessons entirely in the browser. Serve the repository statically and the client will fetch metadata and render detail views on demand.

## Getting Started

No build step is required for the static catalog:

1. Serve the root directory with any static web server (for example `python -m http.server 4173`).
2. Open [`index.html`](./index.html) to browse lessons grouped by tag.
3. Select a lesson to load [`lesson.html`](./lesson.html) with the full competency breakdown.

## Project Structure

```
├── index.html                 # Catalog view that fetches the lesson manifest and renders cards grouped by tag
├── lesson.html                # Lesson detail template that resolves a lesson slug from the query string
├── lesson.css                 # Shared styling for both catalog and lesson detail pages
├── lessons/
│   ├── manifest.json          # Registers available lessons and metadata
│   └── profile-service-lesson.json
└── README.md
```

## Authoring New Lessons

1. Duplicate the sample JSON in `lessons/` and adjust the metadata and content.
2. Add the new lesson to `lessons/manifest.json` with a unique `slug`, `title`, and `path`.
3. Reload the catalog—your lesson will appear under each tag you specify.

Each lesson JSON supports the following top-level fields:

- `title`, `summary`, `audience`, `duration`
- `prerequisites`: array of `{ title, description }`
- `learningModel`: keys for `framing`, `coreActivity`, `feedback`, and `transfer`
- `competencyPillars`: array of `{ name, description, outcomes[] }`
- `integrationProject`: `overview` plus ordered `iterations[]`
- `reflection`: optional `description` and reflection `prompts[]`

The static pages provide graceful fallbacks when sections are omitted, so you can start small and expand over time.
