---
title: "CRM"
description: "A private contacts and deal board for Artometrics. The plan was to fold it into Dawn and keep the Firebase project."
pubDate: 2026-11-14
order: 2
disposition: "Dawn"
tags:
  - Lab report
author: "Kyle McAuliffe"
---

CRM was a private Artometrics desk for people, companies, deals, notes, and follow-ups. There was no GitHub remote. The archive index points at the box tree `/workspace/crm-dep`, and the live host was [crm-510519.web.app](https://crm-510519.web.app).

## What it was

An internal pipeline, not a public product. The 13 Nov 2026 inventory calls the code solid: rules tests, emulators, and a PWA, with no web API key baked into the client.

## Why it was built

The inventory's reason is the feature list. I wanted one place for contacts and a deal board, with a Today view for tasks, instead of another spreadsheet.

## How it worked

React, Vite, and TypeScript, on Firebase project `crm-510519`. The inventory lists contacts, companies, a kanban with Lead, Contacted, Proposal, Won, and Lost, notes, Today tasks, global search, CSV import and export, phone quick-add, offline persistence, allowlisted Google and Apple sign-in, and Storage attachments. Firestore (default) was present. Secrets were left out of the zip.

Offline: `npm install && npm run build`, then serve `dist/`. Auth and Firestore need the emulators.

## What I learned

A small CRM with emulator tests and rules tests was further along than several louder apps. The inventory's recommendation was to merge it into Dawn as a contacts and pipeline desk, disable Hosting only, and keep the Firebase project because Firestore was there. The index does not record that the project was deleted.

## Where it went

The recorded destination is Dawn, as a contacts and pipeline desk. Dawn itself was not changed on 13 Nov 2026. The inventory says so in its first paragraph. The standalone source is the Drive zip.

## Download the archive

[crm-archive.zip](https://drive.google.com/file/d/1CRJwhCt20Zj7znBZ9r7321W7lqDudFXB/view) (590,771 bytes, SHA-256 `be7b189c47dc0401ad110783fe216d75b3e860376c8fa5c7619bc9cbcdacb5b8`). The same folder holds the working-tree zip and the live mirror as separate files, listed in `SUMMARY.json`.

Folder: [Unlisted sites 2026-11-13](https://drive.google.com/drive/folders/1wDiQIMnNhlBACtIRokeRQXPku_wD6Ljw).

## Sources

- Artometrics Archive Index, CRM row
- Dawn feature inventory, 13 Nov 2026
- Unlisted sites `SUMMARY.json`
