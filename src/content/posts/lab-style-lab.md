---
title: "Style Lab"
description: "A gallery for choosing the Artometrics visual system: type, charts, maps, and saved picks."
pubDate: 2026-11-13T23:24:00.000Z
draft: false
tags:
  - Lab reports
  - Desks
author: "Kyle McAuliffe"
---

## What it was

The page title is "Artometrics Style Lab." The README calls it a static gallery for choosing the visual system of Artometrics, a data-journalism magazine about the anime industry. Package name `artometrics-style-lab`. Firebase project `stylelab-510519`, site https://stylelab-510519.web.app. No GitHub remote was in the archive.

## Why it was built

The README states the job: compare visual options for the magazine and keep the picks. The archive index later calls it a design reference, not a Dawn feature.

## How it worked

Vite 8, React 19, TypeScript, React Router 7, Firebase 12, D3 7, topojson-client, and world-atlas. The font list in `package.json` includes Anton, Atkinson Hyperlegible, Barlow Condensed, Big Shoulders Display, Bodoni Moda, Bricolage Grotesque, Commissioner, Fragment Mono, IBM Plex Sans, Inter Tight, Literata, Newsreader, Public Sans, Source Sans 3, Source Serif 4, and Unbounded. Functions are `style-lab-functions` with entry `functions/index.js`.

`src/App.tsx` uses hash routes: `/`, `/c/:slug`, `/picks`, `/guide`, `/account`, `/history`, and `/sources`. `src/catalog.ts` includes sheets titled Wordmarks, Color palettes, Display type, Body type, Navigation, Article heroes, Kickers and labels, Bar charts, Line charts, Scatter, Small multiples, Maps, and Tables. `functions/index.js` lists 28 sheet slugs from `logos` through `voices`. `Overview.tsx` renders every category with a thumbnail and a "none" control.

`src/picks.tsx` stores picks in `localStorage` under `artometrics-style-lab-picks-v2`. When someone is signed in, it also writes Firestore `users/{uid}/board/current` and `users/{uid}/sessions`. `exports.regenerate` is a POST function. It checks a bearer token, rate-limits 12 calls per minute per uid, and either calls Gemini or returns `mockOptions` labeled "Mock. The Gemini key is not set."

The README says cited market figures come from the Association of Japanese Animations, invented figures are stamped EXAMPLE DATA, and Chomsky is the OFL blackletter in `public/licenses/Chomsky-OFL.txt`. A Firestore export in the same Drive folder has collection `users` and 3 documents. Field values are not copied here.

![Style Lab desktop review capture from the archived tree](/images/lab-reports/style-lab-desktop.png)

That file is `.impeccable/review/desktop.png` inside the working tree. It is a review capture stored with the source, not a separate `screenshots.zip`.

## Where it lives now

Archived November 13, 2026, about 8:09 PM PT. A later index row says Kyle deleted it at 8:17 PM PT, and the Firebase project delete was requested at 8:22 PM PT. Zip SHA-256 `740045582b742bf6ee66888d8075e96404cd1caa627a4f55a233087e1c6ce9a9`.

## What was learned

The archive does not record a separate lesson. The recorded outcome is that the gallery was archived and the Firebase project was deleted the same evening.

## Download

- Folder: https://drive.google.com/drive/folders/1wDiQIMnNhlBACtIRokeRQXPku_wD6Ljw
- Zip: https://drive.google.com/file/d/1RZNr5lHj0WxdFRl8f4NH_lnr_ONnn9jB/view
- Firestore export: https://drive.google.com/file/d/1zHw90Ym1tAbuz6NDy2_Q_imTHIdxNEPw/view

The index says `npm install && npm run dev` in the `sl-dep` tree. Picks also work from the static live mirror in the zip.
