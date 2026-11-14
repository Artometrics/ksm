---
title: "Skins"
description: "Three magazine skins, fourteen style directions, and a switcher over sample issues."
pubDate: 2026-11-13T23:17:00.000Z
draft: false
tags:
  - Lab reports
  - Desks
author: "Kyle McAuliffe"
---

## What it was

The live page title is "Artometrics — magazine skins & style board." The dek on that page is "Fourteen style directions. Three reusable open skins. Five sample issues with a live skin switcher. Sources catalogue for all 103."

No dedicated GitHub repo was found. The archive README names the likely source as `/workspace/artomag/styles-board`. The box folder `/workspace/skins` only had `spec.md`. Live URL: https://artometrics-skins-510519.web.app.

## Why it was built

`generate.py` and `plan.html` are a preview of skins for the magazine. The live footer says "Does not change artometrics.com or main. Preview only." `plan.html` says wiring skins into the main magazine page-flip for all 103 issues is "Planned (not this pass)."

## How it worked

Static site. `styles-board/firebase.json` hosts `dist` on site `artometrics-skins-510519` with `X-Robots-Tag: noindex, nofollow, noarchive`. The Firebase project in `.firebaserc` is `artometrics-510519`. `generate.py` reads `issues.json`, `catalog.json`, and `credits/images.json`, and writes `dist`. Its docstring says "Generate Artometrics magazine skins preview site (noindex)."

`generate.py` defines three skins: Quiet Luxury (`quiet-luxury`, closing "Colophon"), Guilloché (`guilloche`, closing "Provenance"), and Pictogram (`pictogram`, closing "Pictogram Key"). `DIRECTIONS` has 14 entries: Quiet Luxury, Monocle Briefing, Maison Orange, Guilloché Bank, Gilded Crest, Letterpress Folio, Apartamento Loft, Swiss Grid, Bauhaus, Aicher Pictograms, Japanese Mon, Saul Bass Cutout, 70s Supergraphics, and Blueprint. A comment above that list says "12 style directions." The list itself has 14.

The live `index.html` repeats those 14 direction cards, five page-flip editions (Anime, Padres, Franchise, YouTube, Readmitted), and five demo articles each labeled "3 skins · Quiet Luxury · Guilloche · Pictogram." Links on the page are "Sources Catalogue," "Rollout plan," and "Skin packages."

`js/skin-switch.js` sets `data-skin` on the document element, stores the id in `localStorage` key `am-skin`, defaults to `quiet-luxury`, and updates `[data-skin-btn]` and `.closing-title`.

`issues.json` has 103 issue objects. Word counts in that file run from 260 to 756. `catalog.json` is also a list of 103. `plan.html` is titled "Skin rollout plan — 103 issues" and names five template families: Arts/Culture, Sports, Science, Civics, and Humanities.

`skins-spec/spec.md` is a separate proposal, "Artometrics Magazine Skins — Spec v0.1 (Franchise issue pilot)," dated in the file October 29, 2026, and marked draft. It describes three proposed skins, Ledger, Back of the Box, and Trade Paper. Those names are not the three skin ids in `generate.py` or the live switcher.

![Skins mobile mockup home-a.png from the working tree](/images/lab-reports/skins-home.png)

The working tree also has `home-b.png`, `inner-a.png`, and `inner-b.png`. The Drive folder listing has no separate desktop and mobile capture PNGs.

## Where it lives now

The archive README says Kyle decided at 6:25 PM PT on November 13, 2026 to archive and then retire it. Packaged 6:26 PM PT. The archive index says the hosting site was deleted at 6:38 PM PT.

## What was learned

The archive does not record a separate lesson. The recorded decision is that the preview could be retired. The spec and the live switcher were not the same set of skins, and the rollout plan still said the main magazine had not been wired.

## Download

https://drive.google.com/drive/folders/12rvO8-4cTWHN-hE95UlnYW9jiLGLHD50

The folder holds `README.md`, `skins-live-mirror.zip` (1,411,687 bytes), and `skins-working-tree.zip` (8,370,260 bytes). The index says to serve `styles-board` or the live mirror.
