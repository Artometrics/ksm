---
title: "Lineage"
description: "A browser battle sim. Austerlitz and Waterloo play. The archive says merge it into Pantheon."
pubDate: 2026-11-13T23:03:00.000Z
draft: false
tags:
  - Lab reports
  - Merged
author: "Kyle McAuliffe"
---

## What it was

The project README inside the working tree says "Lineage — Napoleonic battle sim." The tagline in `public/index.html` is "Play the great commanders. Give the real orders." The page is marked `noindex`.

Live site at archive time: https://lineage-waterloo.web.app. Repo named in the archive README: https://github.com/Artometrics/lineage. Firebase Hosting site `lineage-waterloo` on project `artometrics-510519`.

## Why it was built

The tagline is the brief on the page. The archive README's decision is to merge Waterloo and the rest of the repo into Pantheon, not into Dawn. The suggested landing, which the README marks as not a completed move, is a folder such as `site/lineage/` or `tools/lineage/` inside https://github.com/Artometrics/pantheon. The live Pantheon host named there is https://pantheon-game-ksm.web.app. The README also says Napoleon is already in Pantheon as `models/napoleon.glb`, and not to treat the Unreal roadmap as the Pantheon path.

## How it worked

Vanilla HTML, CSS, and JS, and Three.js r111 (`public/three.module.js`). `public/game.js` and `public/austerlitz.js` both import that module. Hosting root is `public/`. A future Unreal Engine 5 slice is only in `docs/ROADMAP_UNREAL.md`.

Chapter list in the working-tree `public/index.html`:

- Alexander at Gaugamela, 331 BC: button `#bAlex` is `disabled` and class `lock`. No Alexander HTML or JS file was in the working tree or the live mirror.
- Caesar at Alesia, 52 BC: button `#bCaes` is `disabled` and class `lock`. No Alesia file was in either tree.
- Napoleon at Austerlitz, 1805: link to `./austerlitz.html`. `public/austerlitz.js` header says "Chapter III web prototype. three.js r111." Spec: `docs/AUSTERLITZ_SPEC.md`.
- Napoleon at Waterloo, 1815: button `#bNap`, logic in `public/game.js` ("Waterloo — v2"). Named places in `game.js` include Hougoumont, La Haye Sainte, La Belle Alliance, Plancenoit, and Mont-St-Jean. The end screen heading is "What really happened."

Play instructions in the project README: pick Waterloo or Austerlitz. Controls in `public/index.html`: WASD or arrows, E or Space to act, M for the map.

Cannae is not in the working tree. The archive README says Cannae appears only in the Unreal roadmap. `docs/ROADMAP_UNREAL.md` lists it there. The live mirror disagrees: the wget log from November 13, 2026, 6:21 PM saved `cannae.html` and `cannae.js`. The live `index.html` links "Hannibal — Cannae, 216 BC." `cannae.js` calls itself a Hannibal web prototype on Three.js r111. The spec files it cites were not in the working-tree zip. The wget set did not include `three.module.js`.

The git bundle is split into parts of about 90 MB and was not cloned. The archive README states, and this report did not re-count, 7 commits, HEAD `f03cb9f7d9c0` on `main`.

![Lineage title screen, shot1_title.png from the working tree](/images/lab-reports/lineage-title.png)

Other loose QA images in the working tree are `shot2_tent.png`, `shot3_field.png`, `shot4_map.png`, and `shot5_end.png`. There is no `screenshots.zip`. The archive notes say larger `shots-v2` and `shots-v3` folders were left out of the zip.

## Where it lives now

Archived November 13, 2026, 6:21 PM PT. The archive README says do not delete the Artometrics/lineage repo or the live site. Nothing was deleted from Firebase or GitHub as part of this archive. The merge into Pantheon is the recorded destination. It is not described as finished.

## What was learned

The archive does not record a separate lesson. The recorded decision is that Lineage joins Pantheon, and that the repo and the live site stay until that lands.

## Download

https://drive.google.com/drive/folders/13jIB8WmZ9r1PZomNeP2MP9qJsQDhfant

The folder holds two README copies, `lineage-working-tree.zip` (4,393,434 bytes), `lineage-live-mirror.zip`, `lineage.bundle.SHA256`, and `lineage.bundle.part-00` through `part-02`. A second copy of the split bundle is in the GitHub remainder folder https://drive.google.com/drive/folders/14gKU2icG_Sj9bjaqPloizht771U_qC0T. Serve `public/` over HTTP. Rejoin the bundle with `cat` before `git clone`, then check the SHA-256 file.
