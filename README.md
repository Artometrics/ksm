# Hemingway

Magazine + podcast site built with **Expo** + **Uniwind** (web and native from one codebase). Migrated from the Lexington Hemingway Astro theme; structure follows [Artometrics/artometrics-web](https://github.com/Artometrics/artometrics-web).

## Tech stack

- [Expo](https://expo.dev/) ~57 + [Expo Router](https://docs.expo.dev/router/introduction/)
- React Native / React Native Web (static export via `expo export -p web`)
- [Uniwind](https://uniwind.dev/) + Tailwind CSS v4 (`global.css`)
- Markdown content under `src/content/` → JSON via `npm run content`
- Netlify publishes `dist/` from the web export

## Requirements

- Node.js 20+
- npm

## Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run content` | Build JSON from `src/content/**` |
| `npm run dev` / `npm run web` | Expo web dev server |
| `npm start` | Expo CLI (web / iOS / Android) |
| `npm run build` | Content build + `expo export -p web` → `./dist/` |

## Content

| Collection | Path | Notes |
|------------|------|--------|
| Posts | `src/content/posts/` | Magazine essays → `/blog/posts/<id>` |
| Podcast | `src/content/podcast/` | Episodes → `/podcast/interviews/<id>` |
| Authors | `src/content/authors/` | Profiles → `/authors/<id>` |
| Legal | `src/content/legal/` | → `/legal/<id>` |

Run `npm run content` after editing markdown. Images under `src/images/` are copied to `public/images/` during the content build.

## Expo contact sheet

A Portra-style film contact sheet UI lives in [`expo-contact-sheet/`](./expo-contact-sheet/):

```bash
cd expo-contact-sheet
npm install
npm run web
```

## Links

See [AGENTS.md](./AGENTS.md) for routing, schemas, and contributor guardrails.
