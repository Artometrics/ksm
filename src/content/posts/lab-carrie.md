---
title: "Carrie"
description: "Three sites in one repo: a book oracle, pet certificates, and a hub. Pets toward Bagel, books toward Dawn."
pubDate: 2026-11-13T23:00:00.000Z
draft: false
tags:
  - Lab reports
  - Merged
author: "Kyle McAuliffe"
---

## What it was

The repo README title is "Carrie — Web Suite." This is the books, pets, and hub repo, not a portfolio site. One Firebase project, `carrie-510519`, three hosting sites, from `README.md`, `.firebaserc`, and `firebase.json`:

- Books, PageMatch and Literary Tarot: https://carrie-books.web.app, public dir `apps/books/dist`.
- Pets, PawCert: https://carrie-pets.web.app, public dir `apps/pets/dist`.
- Hub: https://carrie-510519.web.app, public dir `portal/dist`.

Repo: https://github.com/Artometrics/carrie.

## Why it was built

The two apps are a book oracle and a pet-certificate studio, with a landing page that links them. The archive README says archive the whole repo, then split pet features into Bagel and book features into Dawn. Retire the Carrie repo only after those merges exist, and ask Carrie before taking the live sites down.

## How it worked

`package.json` name `carrie-suite`, version 1.0.0. Vite and `canvas-confetti` are dev dependencies. Scripts are `dev:books` (port 3000), `dev:pets` (3001), `dev:portal` (3002), and a Firebase deploy to project `carrie-510519`. App source is HTML, CSS, and JS. `apps/pets/main.js` imports `canvas-confetti`. There is no React or Next app in the tree.

Books, from `apps/books/index.html` and `apps/books/main.js`. The title is "PageMatch & The Literary Tarot — Book Oracle & Recommendation Studio." Tabs are oracle, quiz, and Gutenberg.

- Literary Tarot draws three cards, labeled The Querent, The Crucible, and The Grimoire. `setupTarot` / `drawTarotCards` flip `tarotCard1` through `tarotCard3`. The third card is filled from `BOOKS_CATALOG`.
- Each catalog entry has a `capsule` (themes, quote, characters, discussion). The button text is "CliffNotes Study Capsule."
- `QUIZ_QUESTIONS` has three prompts, keys `vibe`, `genre`, and `pacing`. The static HTML placeholder says "Question 1 of 5," and the repo README says a 5-question quiz. The array in `main.js` has three questions.
- `BOOKS_CATALOG` has eight entries: Piranesi, Project Hail Mary, The Silent Patient, The House in the Cerulean Sea, Tomorrow, and Tomorrow, and Tomorrow, Fourth Wing, Yellowface, and Atomic Habits. The README's "35+ acclaimed bestsellers" is not the count in this file.
- Library search and a genre filter live in `setupLibrary` / `filterLibrary`. Shelf and an Amazon tag use `localStorage` keys `carrie_reading_shelf` and `carrie_amazon_tag` (default `carrie-20`).
- `CURATED_GUTENBERG` has six titles (Frankenstein, Pride and Prejudice, Dracula, The Picture of Dorian Gray, The Adventures of Sherlock Holmes, and Alice's Adventures in Wonderland) with Gutenberg HTML and EPUB URLs. `executeGutenbergSearch` fetches `https://gutendex.com/books/?search=` and shows up to 12 results.

Pets, from `apps/pets/main.js`. The title is "PawCert Studio — Official Pet Birth & Birthday Certificate Studio." `CERT_TYPES` are birth, gotcha, birthday, goodboy, and citizen. Themes in the HTML are gold, emerald, party, and royal. Species icons in `main.js` are Dog, Cat, Bunny, Bird, Hamster, Horse, Ferret, and Reptile. The export canvas is `#exportCanvas` at 2400×1700.

The hub, `portal/index.html`, is a landing page only. It links the books and pets sites. `portal/style.css` is the only other portal file.

Two commits, HEAD `8835e4f68b8b`, both by Kyle S McAuliffe on October 6, 2026. 3:08 AM PT: initial release of the quiz, PawCert, and Firebase multi-site hosting. 10:34 AM PT: Literary Tarot, Gutenberg search, capsules, and the PawCert studio commit. There is no `screenshots.zip`.

## Where it lives now

Archived November 13, 2026, 6:26 PM PT. The archive README says nothing was deleted from Firebase or GitHub as part of this archive. Pets are marked for Bagel. Books are marked for Dawn. The repo stays until both merges exist. The live sites stay until Carrie is asked.

## What was learned

The archive does not record a separate lesson. The recorded decision is a split, not a shutdown: certificates toward Bagel, the book desk toward Dawn, and the three hosts left up. The README's quiz length and catalog size do not match the arrays in `main.js`.

## Download

https://drive.google.com/drive/folders/1W4tnGH_653YJboRw-yIUf28LRnO2l475

The folder holds `README.md`, `carrie.bundle` (76,548 bytes), `carrie-working-tree.zip`, and `carrie-live-mirror.zip`. The same bundle is also in the GitHub remainder folder. `git clone` the bundle, then `npm run dev:books` or `dev:pets`.
