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
| Moodboard | `content/moodboard/` |

See [AGENTS.md](./AGENTS.md) for routing and guardrails.

## Moodboard

`/moodboard` is Kyle’s 2025 reference board: a journal of months and a library of the same pieces. The page reads `src/generated/moodboard.json`, which `npm run content` rebuilds from the CSVs.

### Add a month

1. Drop a CSV in `content/moodboard/`. Name it however you like. The capture date comes from the screenshot filename (`20250801_224702639_iOS.png`), not the CSV name.
2. Columns can be `n,file,on_board,kept,group,credit,verdict`. `kept` is the title and `group` is the type. A file with no `verdict` column is treated as an already-kept list. When `verdict` is present, only `KEEP` rows are included.
3. Run `npm run content`.

Stray spaces and wrapping quotes on a cell are stripped. The type labels on the page (Portraits, Typography, Identity, and the rest) are mapped in `lib/moodboard.ts`.

### Notes, project, and source

Hand edits live in `content/moodboard/edits.json` and are kept across rebuilds.

- **Month note.** `months["2025-08"]` is the sentence for that month’s journal entry: what caught your eye. Leave it `""` until you write it.
- **A piece.** Add an object under `items`, keyed by the screenshot id (the filename without `.png`):

```json
{
  "months": { "2025-08": "Marks, mostly." },
  "items": {
    "20250801_224702639_iOS": {
      "project": "Artometrics",
      "notes": "The lockup I kept redrawing.",
      "sourceUrl": "https://example.com/original",
      "image": "/images/moodboard/items/20250801_224702639_iOS.jpg"
    }
  }
}
```

`project` is blank unless you set it. Pieces whose credit contains `Artometrics / KSM` default to `Artometrics`. Set `"project": ""` on that id if one of them should stay blank.

`sourceUrl` and `notes` start blank. `image` is optional. Your own pieces (`isOwnWork`) use the picture as the tile. Anyone else’s picture stays a small thumbnail, and it links out only when `sourceUrl` is set. With no picture, the tile is the type, title, date, and credit.

Put image files in `public/images/moodboard/` and point `image` at the public path. Then run `npm run content`.
