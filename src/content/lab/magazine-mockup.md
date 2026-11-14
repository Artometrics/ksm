---
title: "Magazine mockup"
description: "An Artometrics magazine front end on its own host. The mockup was retired. artometrics.com stayed."
pubDate: 2026-11-14
order: 12
disposition: "Retired"
tags:
  - Lab report
author: "Kyle McAuliffe"
---

The magazine mockup was an Artometrics Magazine front end on [artometrics-mag-510519.web.app](https://artometrics-mag-510519.web.app). The Drive README describes it as 103 issues and 5-minute reads, and says it may overlap the real magazine on artometrics.com. No GitHub remote is listed. Sources were `/workspace/mag-src.zip` and the box tree `/workspace/artomag`.

## What it was

A mock of the magazine, not the magazine. The decision, recorded at 6:25 PM PT on 13 Nov 2026, was to retire the mockup and leave artometrics.com up.

## Why it was built

The README frames it as a front end for the issues. A separate host let the mock move without touching the live magazine. Once the real site was the magazine, the mock host was a second copy.

## How it worked

Astro, from `mag-src.zip`, plus a larger box tree at `/workspace/artomag` (site, public, shots). Firebase Hosting site `artometrics-mag-510519`. Offline, serve `artomag/public` or `artomag/site`, or unzip `mag-src.zip` and run `npm install` and `npm run dev`. Shots were included. The README says `artomag/shots` is about 142 MB.

The working-tree zip is 599 files and 179,019,395 bytes, split for Drive's upload limit. Restore with `cat magazine-mockup-working-tree.zip.part-*` and check `magazine-mockup-working-tree.zip.SHA256`. The index says the working tree is stored as two parts plus the checksum, and that the host was deleted at 6:38 PM PT.

## What I learned

A mock on its own Firebase site starts to look like a product. The decision at 6:25 PM was to keep one magazine. The shots are large, and they belong in the zip, not on a second public host.

## Where it went

Retired. artometrics.com stayed. The mock was not folded into Dawn, Bagel, or Pantheon.

## Download the archive

Folder: [Magazine mockup](https://drive.google.com/drive/folders/1TAzV0K9p1LiE_GFG1iastRJDV6Hd_Wat).

- [magazine-mockup-working-tree.zip.part-00](https://drive.google.com/file/d/1m3LAUbJF7q5eawRDm-y-f8HIwAiMeuil/view)
- [magazine-mockup-working-tree.zip.part-01](https://drive.google.com/file/d/1u7pjmovrHcwA-Emn-FJ0nwChyJ03wPgQ/view)
- [magazine-mockup-working-tree.zip.SHA256](https://drive.google.com/file/d/1PL0x2Xi3iGDMyYRi6p5SemKfO55pVvw6/view)
- [magazine-mockup-live-mirror.zip](https://drive.google.com/file/d/1q6L_s2hFWIsh2xHVr3nRU_RUMlnCUSPs/view)
- [README](https://drive.google.com/file/d/1nZxXgNraGcXXS-o3pZhLy1gBwexqTPiv/view)

## Sources

- Artometrics Archive Index, Magazine mockup row
- Drive README in the Magazine mockup folder
