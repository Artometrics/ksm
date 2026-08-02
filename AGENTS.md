# AGENTS.md — Hemingway (Expo + Uniwind)

This file describes **this repo only** (`ksm-web` / Hemingway).

## What this project is

Hemingway is a multi-page **magazine + podcast** product: landing home with blog and podcast previews, full **blog** and **podcast** sections, **authors** profiles, **legal** pages, and membership-style **login/signup/contact/pricing** flows. Primary use case: content-led media brands that publish articles and interview-style podcast episodes — on **web and native** from one Expo codebase.

Structure and tooling mirror [Artometrics/artometrics-web](https://github.com/Artometrics/artometrics-web) (Expo Router + Uniwind + markdown → JSON), without Artometrics-specific Studio/Supabase/CMS features.

## Tech stack

From `package.json` and `app.json`:

- **Expo** `~57` + **Expo Router** (file-based routes in `app/`)
- **React Native** / **React Native Web** (static web export via `expo export -p web`)
- **Uniwind** + **Tailwind CSS** v4 (`global.css`, `metro.config.js` via `withUniwindConfig`)
- **Content:** markdown in `src/content/*` → `scripts/build-content.mjs` → `src/generated/*.json`
- **SEO:** `components/PageSeo.tsx` (document head on web)
- **Site URL:** `EXPO_PUBLIC_SITE_URL` / `app.config.js` (default placeholder `https://kylesmcauliffe.com`)

## Folder map

| Area | Path | Notes |
|------|------|--------|
| Routes | `app/` | Expo Router (`(site)` chrome + screens) |
| Components | `components/` | Header, footer, cards, article body |
| Lib | `lib/` | Content accessors, theme, chrome, assets |
| Brand tokens | `constants/Colors.ts` + `global.css` | Warm gold accent + Inter / STIX Two Text |
| Content (source) | `src/content/` | Markdown per collection (`posts`, `podcast`, `authors`, `legal`) |
| Content (built) | `src/generated/` | JSON consumed by the app |
| Images (source) | `src/images/` | Copied to `public/images/` by content build |
| Public assets | `public/` | Audios, robots, built images |
| Native assets | `assets/images/` | Icons, splash, favicon |
| Scripts | `scripts/` | Content build + ensure hook |
| Contact sheet demo | `expo-contact-sheet/` | Standalone Expo UI experiment |

Path alias: `@/*` → project root (`tsconfig.json`).

## Content collections

Schemas are enforced by `scripts/build-content.mjs` (not Astro Zod).

### `posts` — `src/content/posts/`

- Required frontmatter: `title`, `pubDate`, `description`, `author`, `image: { url, alt }`, `tags`
- Optional: `isRecent`, `isPopular`, `isLocked`, `draft`, `slug`
- Template: `src/content/posts/1.md`
- Routes: listing `/blog`, post `/blog/posts/<slug>`

### `authors` — `src/content/authors/`

- Required: `name`, `image: { url, alt }`
- Optional: `role`, `bio`, `socials`
- Template: `src/content/authors/juliet-ramos.md`

### `podcast` — `src/content/podcast/`

- Required: `title`, `pubDate`, `description`, `author`, `image`, `guestAvatar`, `tags`
- Optional: `episodeNumber`, `duration`, `audioSrc`, `isRecent`, `isPopular`, `isLocked`
- Template: `src/content/podcast/1.md` (`audioSrc` under `/audios/...` → `public/audios/`)

### `legal` — `src/content/legal/`

- Required: `page`, `pubDate`
- Template: `src/content/legal/privacy.md`

## Routing conventions

- **Home:** `app/(site)/index.tsx` → `/`
- **Blog listing:** `/blog`
- **Blog post:** `/blog/posts/<slug>`
- **Podcast:** `/podcast`, episodes `/podcast/interviews/<id>`
- **Authors:** `/authors`, `/authors/<id>`
- **Legal:** `/legal/<id>`
- **Marketing:** `/about`, `/pricing`, `/contact`, `/login`, `/signup`

Chrome: `app/(site)/_layout.tsx` mounts `SiteHeader`, `SiteFooter`, `SiteNavOverlay`, theme + scroll chrome.

## Customization

- **Site URL:** `EXPO_PUBLIC_SITE_URL` or `app.config.js`
- **Colors & type:** `global.css` `@theme` + `constants/Colors.ts`
- **Nav / footer:** `components/SiteHeader.tsx`, `components/SiteFooter.tsx`

## Commands

| Command | Action |
|--------|--------|
| `npm install` | Install dependencies |
| `npm run content` | Rebuild `src/generated/*` |
| `npm run dev` | Expo web |
| `npm start` | Expo CLI |
| `npm run build` | Static web export → `dist/` |

## Guardrails

- Prefer **minimal diffs** and `@/` imports from the project root.
- Do **not** reintroduce Astro without an explicit request.
- Changing content frontmatter shape requires updating `scripts/build-content.mjs` and `lib/content.ts` consumers.
- Keep `expo-contact-sheet/` isolated (its own `package.json`).
