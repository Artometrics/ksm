---
title: "Magazine mockup"
description: "An Artometrics magazine front end archived on November 13. The live magazine stayed."
pubDate: 2026-11-13T23:15:00.000Z
draft: false
tags:
  - Lab reports
  - Sites
author: "Kyle McAuliffe"
---

## What it was

The archive README describes an Artometrics Magazine front end, "103 issues, 5-minute reads," that may overlap the real magazine on artometrics.com. Live URL in that README: https://artometrics-mag-510519.web.app. No git history. The working-tree zip was stored as two parts (94,371,840 bytes and 84,647,555 bytes). The README says the joined zip is 179,019,395 bytes and 599 files, and that `artomag/shots` is about 142 MB.

The source zip was not opened for this report. It is over the size that could be pulled down in one file. No feature below is attributed to a source filename inside that zip.

## Why it was built

The README treats it as a magazine front end beside the real site. It does not give a longer origin. The decision line is to retire the mockup and keep artometrics.com.

## How it worked

From the archive README, not from a `package.json` that was opened: Astro, in `mag-src.zip`, plus a box tree at `/workspace/artomag` (site, public, shots). Firebase Hosting site `artometrics-mag-510519`. The README says to serve `artomag/public` or `artomag/site` with `python3 -m http.server`, or to unzip `mag-src.zip` and run `npm install` and `npm run dev`.

Astro is unverified in a `package.json` because that zip was not opened. A draft count of 488 files in the live-mirror zip is also unverified. Shot names inside `artomag/shots` were not opened.

## Where it lives now

The README says Kyle decided at 6:25 PM PT on November 13, 2026 to archive and then retire the mockup. The package completed at 6:27 PM PT. The real artometrics.com magazine stays. The archive index says the hosting site was deleted at 6:38 PM PT.

## What was learned

The archive does not record a separate lesson. The recorded decision is that the mockup could go and the live magazine stayed.

## Download

https://drive.google.com/drive/folders/1TAzV0K9p1LiE_GFG1iastRJDV6Hd_Wat

The folder listing is `magazine-mockup-live-mirror.zip`, `magazine-mockup-working-tree.zip.part-00`, `magazine-mockup-working-tree.zip.part-01`, `magazine-mockup-working-tree.zip.SHA256`, and `README.md`.
