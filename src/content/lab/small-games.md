---
title: "Nightlight and the other small games"
description: "Nightlight, Questroad, Cardinal Quest, Knightmare, and the Godot toys. Archived 13 Nov 2026, then the repos and hosts were deleted."
pubDate: 2026-11-14
order: 16
disposition: "Retired"
tags:
  - Lab report
author: "Kyle McAuliffe"
---

This note covers the small games packed on 13 Nov 2026 and then removed as standalone sites. Nightlight is the one the archive uses as the example. The others were in the same pass: the Godot port of the Artometrics site, Questroad, Spidermom rooftops, Cardinal Quest, Ashmere, Lampwick, Voltspire, Knightmare, and a 28 KB Godot test. Fernbound and Lineage have their own reports. Pantheon stayed.

On 14 Nov 2026, `Artometrics/nightlight` was not visible from this account. The archive index says these repos were deleted at 6:35 PM PT and the Hosting sites at 6:38 PM PT, after the Drive copies were uploaded. I am using that index and the Nightlight folder README, not a live checkout.

## What they were

Nightlight was a flashlight horror walk. The folder README says "flashlight horror walk-around," web plus 3D assets, on Firebase Hosting at nightlight-510519.web.app. The bundle has 10 commits, HEAD `c5b73e7f26c2` on `main`. Kyle used it as the example that does not fold into Dawn.

Questroad was the GPS quest on the real map, host questroad-510519.web.app, repo `Artometrics/questroad`. A box copy also sat at `/workspace/games/waze`. The index says map, GPS, and Firestore are limited offline.

Cardinal Quest was the Stanford landmark hunt, host cardinal-quest-510519.web.app, repo `Artometrics/cardinal-quest`. A box copy also sat at `/workspace/games/stanford`. The index says it is not the Cardinal book site. Live GPS was required for campus unlocks.

Knightmare was a greybox prototype. Hosts were artometrics-knightmare.web.app and knightmare-ksm.web.app, and the index says the KSM URL was a lock page only. The password was not used or recorded. Serve `deploy/export` over HTTP.

Spidermom rooftops was filed as far-out original IP, host spidermom-rooftops.web.app, repo `Artometrics/spider-mom-rooftops`. Serve the `game/export` folder over HTTP.

Ashmere, Lampwick, and Voltspire were Godot web exports, each with two hosts (a `-510519` site and an `artometrics-` site). Ashmere is described as a CYOA or story-walk, with an optional fold of that idea into Dawn and a retire for the Godot build. Lampwick is filed as first-person horror, same class as Nightlight. Voltspire is filed as a retro-futurist FPS. Their Firebase projects were deleted about 6:39 PM PT.

The Godot game page was a Godot port of the Artometrics site, host artometrics-godot-510519.web.app, repo `Artometrics/artometrics-godot`. The index says it is not a Dawn game loop. Serve the web export over HTTP, not `file://`.

The Godot test was a 28 KB scratch project with no live site. Open `project.godot` in Godot 4.

## Why they were built

The index sorts them by whether the idea could live inside something else. Questroad's GPS quests and Cardinal Quest's landmark hunt were written down as Dawn or Cardinal material. Nightlight, Lampwick, Voltspire, Spidermom, Knightmare, and the Godot site port were written down as toys that stay toys. The Godot test was a scratch file.

## How they worked

Nightlight: serve `site/` over HTTP. The README names a web game and 3D assets.

Questroad and Cardinal Quest: serve `public/`. Questroad's map and Firestore do not fully work offline. Cardinal Quest's unlocks need live GPS.

The Godot games: serve the web export over HTTP.

Knightmare: serve `deploy/export`.

Each deleted repo's folder holds a bundle or a working-tree zip, a live mirror where there was a site, and, for several of them, a `screenshots.zip` added at 8:24 PM PT. This report does not describe those pictures.

## What I learned

A flashlight game is a clean test of scope. If it does not fit Dawn, the horror cousins do not fit either. The index applies that test to Lampwick in those words. The other lesson is clerical: two hosts per Godot repo, a lock page that was not the game, and a password that was never written down. The archive is the copy. The hosts are gone.

## Where it went

Retired as standalone sites. Questroad's idea was filed as a fold into Dawn. Cardinal Quest's idea was filed as a Dawn location hunt or as material for the Cardinal rebuild. Ashmere's story-walk was optional for Dawn. The index does not say those folds were done. Nightlight and the horror and FPS toys were retired outright. Pantheon was not part of this delete.

## Download the archive

Each link is the Drive folder from the archive index. The index says the files in these folders matched local sizes on 13 Nov 2026 at 8:29 PM PT.

- [Nightlight](https://drive.google.com/drive/folders/1aUzM6Nj6QCX1FbVrtSlqXo2Mylfgxac1). Bundle: [nightlight.bundle](https://drive.google.com/file/d/1msK9uujx7V-tw5K5i7ZGkKxb-KrNyXXe/view). Working tree: [nightlight-working-tree.zip](https://drive.google.com/file/d/1jxZG05gfenjG3OQFrbrBsr_o5AEV-0pG/view) (27,287,761 bytes, 263 files).
- [Questroad](https://drive.google.com/drive/folders/1ugpj1946MfvEp_1zpQwW8ErZJKh0f9VN)
- [Cardinal Quest](https://drive.google.com/drive/folders/1o4S_O7xvWrCM_7__6xPJZJIuOyIU6C5f)
- [Knightmare](https://drive.google.com/drive/folders/1dqPGnKW6PxP3JkKEHx0pa1auIfPlwQ_9)
- [Spidermom rooftops](https://drive.google.com/drive/folders/1aIRszIv6lmJXtiJo2OHFcHM5AIHxc531)
- [Ashmere](https://drive.google.com/drive/folders/1N7j74cFb-l85G641xf2nQDqExrUES6ph)
- [Lampwick](https://drive.google.com/drive/folders/1QstnMgBPoVeTMacCfCGf1mpgshYCRmM8)
- [Voltspire](https://drive.google.com/drive/folders/195wGn8hFuSG2O7l59Hi0l7mi3XhduoNJ)
- [Godot game page](https://drive.google.com/drive/folders/1kGUV0AK0CO3Fcffof1ZyDPjCKZjXDCmV)
- [Godot test](https://drive.google.com/drive/folders/1GoQd0osrLA3sMQC-Bey8AmfbeKe8XRmG)

## Sources

- Artometrics Archive Index, Games rows for 13 Nov 2026
- Nightlight folder README
- `Artometrics/nightlight` was not readable on 14 Nov 2026
