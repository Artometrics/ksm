# KSM

Magazine + podcast site built with **Expo** + **Uniwind** — crimson / black / white zine aesthetic, KSM Soul imagery from Higgsfield.

## Tech stack

- [Expo](https://expo.dev/) ~57 + [Expo Router](https://docs.expo.dev/router/introduction/)
- React Native / React Native Web (`expo export -p web`)
- [Uniwind](https://uniwind.dev/) + Tailwind CSS v4
- Markdown → JSON via `npm run content`
- Brand assets in `public/images/brand/` (KSM Soul generations)

## Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run content` | Build JSON from `src/content/**` |
| `npm run dev` / `npm run web` | Expo web |
| `npm run build` | Static export → `./dist/` |

## Link in bio

Unlisted page at **`/bio`**. Edit `data/bio.ts`.

## Content

| Collection | Path |
|------------|------|
| Posts | `src/content/posts/` |
| Podcast | `src/content/podcast/` |
| Authors | `src/content/authors/` |
| Legal | `src/content/legal/` |

See [AGENTS.md](./AGENTS.md) for routing and guardrails.
