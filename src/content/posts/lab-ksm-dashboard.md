---
title: "KSM dashboard"
description: "A private noindex link board, plus a generated public skeleton. Retired because this site already covers it."
pubDate: 2026-11-13T23:16:00.000Z
draft: false
tags:
  - Lab reports
  - Sites
author: "Kyle McAuliffe"
---

## What it was

A private noindex link board, plus a generated public skeleton (home, blog, projects, updates). The archive README calls the public pages a stub with placeholder text, not the real kylesmcauliffe.com. The board title in `public/dashboard/index.html` is "Dashboard · KSM." Robots on that page are `noindex, nofollow`. Theme color is `#0047FF`.

Live URL recorded in the archive: https://ksm-dashboard-510519.web.app. Local git, no remote. The hosting site in `firebase.json` is `ksm-dashboard-510519` on project `artometrics-510519`, with `X-Robots-Tag: noindex, nofollow`.

## Why it was built

The first commit message is "Add private /dashboard (noindex); deployed to ksm-dashboard-510519." The archive README's retire line is that kylesmcauliffe.com already covers it. A longer brief is not in the three commits.

## How it worked

Static HTML. `build.py` writes the public home, blog, projects, and updates pages. It does not write `public/dashboard/index.html`. The public pages include noindex meta and `[Kyle: …]` prompts. Nav labels generated there are KSM, Blog, Projects, and Updates. The updates list in the tree is dated October 21, 2026, with the lines "Search indexing is off until launch" and "Site rebuilt on Firebase."

The git bundle has three commits, all by Grok Bot on October 26, 2026, Pacific time:

- 1:53 PM PT, `f962e953a7` — add the private dashboard.
- 1:57 PM PT, `f188a03376` — "Dashboard: add Docs + Comics/boards; remove Webfall."
- 2:01 PM PT, `97eeae264e` — "Dashboard: 3D blockout to AI boards." HEAD of the bundle.

At HEAD the board groups links under Artometrics, Games, Films, Apps, Books, Sites, Comics & boards, and Docs. Labels in source include Artometrics, Franchise, Anime, Desk, Letter, Vault, Godot test, Pantheon, Lineage: Waterloo, Questroad, Cardinal Quest, Spider Mom, West Side, Loom, Markup, Mint, Dawn, Relay, Scam Shield, Nightlight, MP8, Cardinal, Apocrypha, KSM, and Fernbound. Many later tiles are marked private and point at Drive. This report does not quote those private URLs. One link label from the first commit is omitted here. The third commit adds a label "3D → AI board." It does not, in the diff that was checked, delete an older label, so a "retitled" reading of that commit was not verified.

Named desktop and mobile captures were not separate files in the Drive folder listing when it was read for this report.

## Where it lives now

Packaged November 13, 2026. The archive README for the package says nothing was deleted from Firebase or GitHub as part of that package step. The archive index package status says the hosting site was deleted at 6:38 PM PT. The retire reason on both is that kylesmcauliffe.com already covers the board.

## What was learned

The archive does not record a separate lesson. The recorded decision is to retire the private board because this site already holds the public face of the work.

## Download

https://drive.google.com/drive/folders/1teofuvOwveIfquoWb537KRvD0DO4q58V

The folder listing read for this report is `README.md`, `ksm-dashboard.bundle` (7,384,017 bytes), `ksm-dashboard-working-tree.zip`, and `ksm-dashboard-live-mirror.zip`. Serve the site root or `public/` over HTTP. The bundle restores the three-commit history with `git clone`.
