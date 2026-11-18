---
title: "Fernbound"
description: "A Godot wildkin-binding game with no source repo. It was folded into Dawn, then retired on 17 November 2026."
pubDate: 2026-11-17
order: 18
disposition: "Retired"
tags:
  - Lab report
author: "Kyle McAuliffe"
---

Fernbound was a small browser game: a 2D wildkin-binding story set on a made-up map called The Fern Marches. You chose a partner, walked the tall grass, and faced a trial at Bramblehold. It ran entirely in the client. It did not use your location, and it did not call a server.

The early product note said something more ambitious. A 13 November 2026 archive README described a Pokémon-style hunt for "real monsters and spirits from history near you," to be folded into Dawn. That GPS and history-hunt design was never in the shipped build. A search of the compiled package found no geolocation string. What you could actually play was the story on The Fern Marches.

This report replaces the 14 November note, which was written after the box archive and before the Dawn merge was confirmed. The merge happened. The standalone host is gone. On 17 November 2026 the game was taken out of Dawn and filed as a retired lab piece.

<figure>
<img src="/images/lab/fernbound/title-screen-1280.jpg" alt="Fernbound title screen: A Wildkin Binding Tale, three pixel creatures, and buttons for New Journey, Continue, and Credits.">
<figcaption>The published title screen, captured from the Godot web export on 17 November 2026. The word Fernbound sits at the top right and is cropped in this frame.</figcaption>
</figure>

## What it was

The only complete copy is a Godot 4.7 HTML5 export (GL Compatibility, no threads): `index.html`, `index.js`, a 1.9 MB `index.pck`, and a 37.7 MB `index.wasm`. There was no GitHub repository named Fernbound in the Artometrics or kylesmcauliffe accounts. No `project.godot` file and no `.gd` sources were in the box tree or the Drive package. Gameplay changes would have required decompiling the package or finding a project tree that was never archived.

The compiled project name is Fernbound. The description in the export is “An original wildkin-binding story.” The main scene is `scenes/title.tscn`. Autoloads are `Game`, `Audio`, and `Touch`. From the package you can still read the maps and NPC dialogue in `data/maps.json`. Species, moves, and battle rules live in compiled `scripts/data/database.gd` and could not be extracted as a readable roster.

The walk, reconstructed from that map data:

1. Title screen, then the overworld: Mossgate, on The Fern Marches (64×30 tiles, 16 px each).
2. Elowen’s Study, to choose a partner before “the marches can wait.”
3. Nia, in town, gives five capture orbs once. Tall grass hides wild encounters.
4. Lumen’s Rest House heals the party and never charges.
5. Scout Mara blocks the eastern path until you beat her. Echo Hollow is an optional cave with stronger kin. Ivo, inside, gives two super items once.
6. Warden Bram at the Bramblehold Trial Gym. A win scene and credits follow.

Controls on the title screen, and later on the Dawn landing, are the same: arrow keys to move, Z (or A on a phone pad) to confirm or speak, X (or B) for the menu. A sign on the path reads, “Speak with A. Run with care.”

The title screen that actually shipped shows three pixel creatures — an owl-like figure, a fish, and a leafy partner — above New Journey, Continue, and Credits. Their official species names are inside the compiled database, not in the archived text.

## How it was built

On 9 November 2026, around 11:51 PM PT, a thin design doc recorded that [fernbound-510519.web.app](https://fernbound-510519.web.app) returned HTTP 200 with the title Fernbound, `robots.txt` disallowed crawlers, and no repo had been confirmed. The stack beyond a Firebase-hosted web build was listed as unknown.

The box copy that later became the archive is `/workspace/fernbound-deploy`: a Firebase Hosting tree for the site `fernbound-510519`, with `public/` containing the Godot export. `robots.txt` is `User-agent: *` / `Disallow: /`. The hosting headers set `X-Robots-Tag: noindex, nofollow`. SharedArrayBuffer isolation was off (`ensureCrossOriginIsolationHeaders: false`). `experimentalVK` was on.

On 13 November 2026 at 6:21 PM PT, that tree was zipped into a Drive folder, [Fernbound](https://drive.google.com/drive/folders/1xtMxmPjFzBpJqs45PllaseDVljyPsWFW): a working-tree zip (11,981,445 bytes, SHA256 `cbda1407e0d5d40ba12320121ca614d731312f1408c9c9305f29ffbde433901b`) and a much smaller live wget mirror (95,381 bytes). The wasm was omitted from some later reference copies for size; the byte-identical file (SHA256 `fc74679e3b97f76878947fcd4fbe1268cbfa6188182a2e33bbc3f5dc9bfa57d0`) remained in the working-tree zip and, after the merge, at `public/play/fernbound/index.wasm` on Dawn.

There is still no standalone git history to bundle. The 17 November retirement archive adds the full deploy tree (wasm included), a git bundle of Dawn at the moment of removal, and fresh screenshots of every live state. That set is in the [Artometrics HQ Box Archive Nov 17 / Fernbound](https://drive.google.com/drive/folders/1v7lZPg_ZyXas_j7hHVuZ5EJb_jiZdb0f) folder.

## The Dawn merge

The fold into Dawn landed in three steps, all on the evening of 13 November 2026 in America/Los_Angeles:

- [Dawn PR #40](https://github.com/Artometrics/dawn/pull/40), merged 9:27 PM PT, put the export at `public/play/fernbound/` and added a noindex desk at `/fernbound`, plus a Games desk that could open it. The field loaded only after a button.
- [Dawn PR #45](https://github.com/Artometrics/dawn/pull/45), merged 10:40 PM PT, gave that desk a real landing: the walk, the controls, and a Play the marches button that framed the unchanged export in an iframe. The games desk got a Fernbound tab with the same landing.
- [Dawn PR #47](https://github.com/Artometrics/dawn/pull/47), merged 10:57 PM PT, fixed a boot bug. Firebase `cleanUrls` could serve `/play/fernbound` without a trailing slash, so relative `index.js` and `index.png` resolved under `/play/` and the engine threw `Engine is not defined`. The iframe was pinned to `/play/fernbound/index.html`, and a `<base href="/play/fernbound/">` was added.

The landing was honest about what the game was. It said the story ran on a made-up map, did not use your location, and did not call a server. Dawn only framed the original field. The story source stayed the compiled export.

<figure>
<img src="/images/lab/fernbound/dawn-landing-1280.jpg" alt="Dawn desktop landing for Fernbound, with the walk from Elowen’s Study to the east path, and keyboard and pad controls.">
<figcaption>The Dawn desk at 1280 pixels, 17 November 2026, after the landing from PR #45. The Play the marches button sits under the controls, just below this crop.</figcaption>
</figure>

<figure>
<img src="/images/lab/fernbound/dawn-landing-390.jpg" alt="The same Fernbound landing on a 390-pixel phone, with Dawn’s top bar and the walk and controls stacked in one column.">
<figcaption>The same landing at 390 pixels. On Dawn’s fill-height shell, Play the marches sits below the first screen.</figcaption>
</figure>

<figure>
<img src="/images/lab/fernbound/dawn-play-1280.jpg" alt="Fernbound running inside Dawn on desktop: Leave the field in the corner, and the title screen in the game frame.">
<figcaption>Play the marches, at 1280 pixels. The Godot field is an iframe. Leave the field unloads it.</figcaption>
</figure>

<figure>
<img src="/images/lab/fernbound/dawn-play-390.jpg" alt="Fernbound’s title screen inside Dawn on a phone, with the title cropped to FERNE at the right edge.">
<figcaption>The same play state at 390 pixels. The title is cropped harder in the narrow frame, and the menu stack sits in a tall green field.</figcaption>
</figure>

<figure>
<img src="/images/lab/fernbound/games-tab-1280.jpg" alt="Dawn’s Games desk with the Fernbound tab selected, showing the same landing beside Dilemma and Towers.">
<figcaption>The Games desk, Fernbound tab, at 1280 pixels. Dilemma and Towers stay on that desk after this retirement; only Fernbound is removed.</figcaption>
</figure>

## What worked

The export booted in a current browser once the asset paths were corrected. The title screen, the three starter creatures, and the New Journey / Continue / Credits menu all rendered, both in Dawn’s iframe and from the raw `/play/fernbound/index.html` export. The 37.7 MB wasm in the box deploy tree and the copy on Dawn `main` were byte-identical. The landing copy on Dawn matched the map data: Elowen, Mossgate, the Rest House, the east path, and the pad-and-keyboard controls. Nothing in the shipped game called a backend or asked for a location permission.

The 13 November archive decision was also right, as far as it went: do not throw out the only copy before Dawn has the hunt. Dawn did get the playable field. The missing piece, which that archive already admitted, was the editable Godot project.

## What did not

The field never became the near-you spirit hunt in the README. Without `.gd` sources, Dawn could frame the export and not change the story. In the live frame, the title word Fernbound is clipped at the right edge — “FERNE” — at both 1280 and 390 pixels; the export is a wide canvas sitting in a shorter, narrower box. On a phone, the Dawn landing is a fill-height shell, so Play the marches sits under the first screen. Those are limits of the wrapper and the compiled layout, not of a second design pass that never happened.

The standalone Firebase site, `fernbound-510519`, already answers “Site Not Found.” It is not in the `artometrics-510519` hosting site list. There was never a GitHub repository to archive.

## Why it was retired

On 17 November 2026, Kyle asked to get rid of Fernbound: archive it completely, write the article, then take it out of Dawn. The retirement archive — source tree, Dawn git bundle, desktop and mobile screenshots of the landing, the play state, the Games tab, and the raw export, plus a short screen recording — is in [Box Archive Nov 17 / Fernbound](https://drive.google.com/drive/folders/1v7lZPg_ZyXas_j7hHVuZ5EJb_jiZdb0f).

After that copy was verified, Fernbound was removed from Dawn’s route, sidebar, Games tab, preview list, and the published `/play/fernbound` export. `/fernbound` should no longer serve the desk. Dilemma and Towers remain on `/games`. The compiled original stays in Drive, and this report stays on the lab shelf.

The earlier 13 November zips and README remain at [the original Fernbound Drive folder](https://drive.google.com/drive/folders/1xtMxmPjFzBpJqs45PllaseDVljyPsWFW). They are the first archive, not the retirement set.

## Sources

- Dawn, `_reference/originals/fernbound/FEATURES.md` and `NOTES.md`, and `src/components/desks/fernbound-desk.tsx` on `main` before removal
- [Dawn PR #40](https://github.com/Artometrics/dawn/pull/40), [#45](https://github.com/Artometrics/dawn/pull/45), and [#47](https://github.com/Artometrics/dawn/pull/47)
- Drive design doc, “Fernbound — Design Doc,” 9 November 2026, about 11:51 PM PT
- 13 November 2026 archive README in the Fernbound Drive folder
- Live captures of `https://dawn.artometrics.com/fernbound`, `/games`, and `/play/fernbound/index.html` on 17 November 2026, plus the box deploy tree at `/workspace/fernbound-deploy`
- HTTP check of `https://fernbound-510519.web.app` on 17 November 2026, which returned Firebase’s “Site Not Found” page
