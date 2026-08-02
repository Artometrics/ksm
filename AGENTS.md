# AGENTS.md — KSM (Expo + Uniwind)

This file describes **this repo only** (`ksm-web`).

## What this project is

KSM is a multi-page **magazine + podcast + graphic** product with a high-contrast **black / white / editorial red** Swiss-magazine visual system: newsstand home, blog, posters, podcast, authors, legal, membership flows, and an unlisted `/bio` Instagram page. Legend posters are hyperrealistic Higgsfield stills finished with Kruger-blunt type blocks.

## Tech stack

- **Expo** `~57` + **Expo Router** (`app/`)
- **React Native** / **React Native Web** (static export)
- **Uniwind** + Tailwind v4 (`global.css`, `metro.config.js`)
- **Fonts:** DM Mono (display), DM Sans (body), Chomsky (wordmark only), Anton (poster alternate)
- **Content:** `src/content/*` → `scripts/build-content.mjs` → `src/generated/*.json`
- **Posters:** `data/posters.ts` + `public/images/posters/`
- **Brand images:** `public/images/brand/`

## Folder map

| Area | Path |
|------|------|
| Routes | `app/` |
| Components | `components/` |
| Lib | `lib/` |
| Tokens | `constants/Colors.ts`, `global.css` |
| Bio config | `data/bio.ts` |
| Posters | `data/posters.ts` |
| Content source | `src/content/` |
| Content built | `src/generated/` |
| Brand assets | `public/images/brand/`, `public/images/posters/`, `assets/fonts/` |

Path alias: `@/*` → project root.

## Routing

- `/` home (newsstand)
- `/blog`, `/blog/posts/<slug>`
- `/posters`, `/posters/<id>`
- `/podcast`, `/podcast/interviews/<id>`
- `/authors`, `/authors/<id>`
- `/legal/<id>`
- `/about`, `/pricing`, `/contact`, `/login`, `/signup`
- `/bio` — unlisted link-in-bio (outside `(site)` chrome; do not add to nav)

## Visual system

- Palette: `#000000`, `#FFFFFF`, gray `#F5F5F5` / `#E5E5E5` / `#525252`
- Print accent `#C0392B`, UI accent `#D9251B`
- Display: DM Mono; body: DM Sans; wordmark: Chomsky only
- Hard 2px rules, zero radius, sparse red, grain overlay on web (`ksm-grain`)
- Prefer full-bleed heroes and newsstand covers over card chrome

## Commands

| Command | Action |
|--------|--------|
| `npm run content` | Rebuild JSON + RSS |
| `npm run dev` | Expo web |
| `npm run build` | Export `dist/` |

## Guardrails

- Prefer minimal diffs and `@/` imports.
- Do not add `/bio` to header/footer/nav.
- Regenerating legend posters: Higgsfield `soul_2`, hyperrealistic editorial portraits, no baked-in text.
