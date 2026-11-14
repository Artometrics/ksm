---
title: "Carrie"
description: "Carrie's suite: PageMatch for books, PawCert for pets, and a portal. Books were filed for Dawn. Pets were filed for Bagel. The repo was still up."
pubDate: 2026-11-14
order: 20
disposition: "Dawn and Bagel"
tags:
  - Lab report
author: "Kyle McAuliffe"
---

Carrie is a web suite Carrie made, hosted as three Firebase sites in the Artometrics org. The README on `Artometrics/carrie` names them: PageMatch at [carrie-books.web.app](https://carrie-books.web.app), PawCert Studio at [carrie-pets.web.app](https://carrie-pets.web.app), and a portal at [carrie-510519.web.app](https://carrie-510519.web.app). The repo was still readable on 14 Nov 2026. The latest commit on main that day, `a7345400`, adds `noindex` for all three sites (an `X-Robots-Tag` header and `robots.txt`).

This Carrie is the suite. Carrie Scott's portfolio is a different site, `carrie-scott-portfolio.web.app`, and the archive index says to keep that one. It is not this report.

## What it was

Two apps and a front door.

PageMatch is a book quiz. The README describes five questions (reading vibe, genre, pacing and length, tropes, and what you want out of the book), a score against a library it calls "35+ acclaimed bestsellers," match reasons, Amazon affiliate buttons (default tag `carrie-20`, changeable in settings), a shelf in local storage, search, genre filters, and a dark and light theme.

PawCert Studio makes pet certificates: birth, gotcha day or adoption, a milestone birthday, a "100% good pet" honor, and a royal-companion joke. Fields are the pet's name, species, breed, dates, pronouns, guardian names, hometown, a registration number, a motto, and a photo in a round frame or a species silhouette. Four themes are named: classic gold, sage ivy, birthday confetti, and royal midnight. Export is a canvas PNG at 2400 by 1700, plus print CSS for US Letter or A4 landscape. Sample presets are a golden retriever, a calico, a French bulldog, and a beagle.

The portal is `portal/index.html`, a landing page between the two.

A commit on 6 Oct 2026, `8835e4f6`, says it adds Literary Tarot, a Gutenberg press vault, CliffNotes capsules, and a one-screen PawCert studio. The README on main, read 14 Nov 2026, describes PageMatch and PawCert and does not repeat those names. I am not inventing how the tarot or the vault behaved beyond that commit message.

## Why it was built

The README says Carrie made it: a book matchmaker and a certificate for a pet. The archive index's later plan is about where the pieces live, not about replacing that. Books go to Dawn. Pets go to Bagel. The repo is retired only after both merges. The index also says to ask Carrie before taking the live sites down.

## How it worked

Vite, one app per folder: `apps/books`, `apps/pets`, and `portal`. `package.json` name is `carrie-suite`. Scripts are `dev:books` on port 3000, `dev:pets` on 3001, `dev:portal` on 3002. The production dependency list in that file is `vite` and `canvas-confetti`. Deploy is `firebase-tools` against project `carrie-510519`, with hosting targets `books`, `pets`, and `portal`. `npm run deploy` builds all three and deploys them together.

The first commit, 6 Oct 2026, `5715938e`, is the initial PageMatch and PawCert release.

## What I learned

The suite was already split, which makes the archive plan literal. Books and pets do not have to move together. They already deploy as different Hosting sites. The open question is the one the index wrote down: do not delete the repo, and do not take Carrie's sites down, until Dawn has the books and Bagel has the pets. The code search on 14 Nov 2026 did not show those landings, and GitHub marked it incomplete.

## Where it went

Books into Dawn, pets into Bagel, as the recorded plan. On 14 Nov 2026 a code search of `Artometrics/dawn` for PageMatch, and of `Artometrics/bagel` for PawCert, pets, and carrie, returned no matches. GitHub marked those searches incomplete. The Carrie repo was still its own repo. The Drive folder is the copy for when that retire happens. It has not happened.

## Download the archive

Folder: [Carrie](https://drive.google.com/drive/folders/1W4tnGH_653YJboRw-yIUf28LRnO2l475).

The index says four files matched local sizes on 13 Nov 2026 at 8:29 PM PT, and that `Artometrics--carrie.bundle` in the GitHub remainder set covers the repo again. The live repo is [Artometrics/carrie](https://github.com/Artometrics/carrie).

## Sources

- `Artometrics/carrie` README and `package.json`, read 14 Nov 2026
- Commits `5715938e`, `8835e4f6`, and `a7345400` (PR #1, noindex)
- Artometrics Archive Index, "Carrie (Books, Pets, hub)" row
- Code search of Artometrics/dawn and Artometrics/bagel on 14 Nov 2026
