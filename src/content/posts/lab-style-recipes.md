---
title: "Style Recipes"
description: "A style board of palettes, fonts, textures, and layouts. Not a food app."
pubDate: 2026-11-13T23:19:00.000Z
draft: false
tags:
  - Lab reports
  - Desks
author: "Kyle McAuliffe"
---

## What it was

`public/index.html` is titled "Style Recipes." `public/recipes.js` starts with the comment "Style Recipes data: palettes, fonts, textures, layouts, recipes. Pure CSS/SVG." A search of that file finds no `food`, `cook`, `ingredient`, or `meal`. The word recipe is the product name.

Firebase hosting site `recipes-510519`, public dir `public`, `X-Robots-Tag: noindex, nofollow`. Live URL recorded in the archive: https://recipes-510519.web.app. `robots.txt` is `Disallow: /`. No git history was in the archive README. The box path recorded there is `/workspace/recipes`.

## Why it was built

The file is a board for mixing a visual recipe: palette, type, texture, and layout, then exporting a snippet. The archive README says the standalone site could be retired because the board was already inside Dawn. None of the opened source files name Dawn. That sentence is the archive README.

## How it worked

Static files only: `index.html`, `app.css`, `app.js`, `recipes.js`. No backend in the opened files. `app.js` renders in the browser from `recipes.js`.

`index.html` has a chip nav `#chips`, a board `#board`, a mixer button `#mixBtn`, and a sheet `#sheet`. `PALETTES` has 15 entries, including Ultraviolet, Swiss, Riso, Concrete, Chrome, Ink & Paper, Newsprint, Frost, Cel Sky, Sepia Kindle, KSM House, Acid, Sunset, Forest, and Terminal. KSM House colors in that object are `#ffffff`, `#111111`, `#E0242B`, `#ffffff`, and `#0047FF`. `FONTS` has 13 pairs. `TEXTURES` has 13. `LAYOUTS` has 10. `RECIPES` has 21 ids, from `pixel-billboard` and `swiss-grid` through `chrome-glass`.

Chip categories in `app.js` are All, Styles, Textures, Palettes, and Type. A pin opens a sheet with swatches, Google Fonts links, and export actions Code, Word/Docs, Theme spec, and `.html`. `#mixBtn` and "Remix this" call `openMixer()`, which edits layout, texture, palette, and type and rewrites a CSS snippet. Hash `#mix` opens the mixer.

![Style Recipes board, from recipes/shots/01-board.png](/images/lab-reports/style-recipes-board.png)

The working tree also has `02-board-scroll.png`, `03-recipe-pixel.png`, `04-mixer.png`, and `05-filter-textures.png`. Separate files named `recipes-510519_web_app_desktop.png` and `recipes-510519_web_app_mobile.png` were named in a draft and were not in the Drive folder listing.

## Where it lives now

Packaged November 13, 2026, 6:21 PM PT. The archive index says the hosting site was deleted at 6:38 PM PT. The decision line is retire the standalone site because it was already inside Dawn.

## What was learned

The archive does not record a separate lesson. The recorded decision is that the board already had a home in Dawn, so the standalone host could go.

## Download

https://drive.google.com/drive/folders/1E9fo6M4T6hVJB0Pltu4TO9g_afGmPlIM

The folder holds `README.md`, `style-recipes-live-mirror.zip` (13,336 bytes), and `style-recipes-working-tree.zip` (1,998,137 bytes). Serve `public/` over HTTP.
