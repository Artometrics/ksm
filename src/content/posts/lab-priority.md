---
title: "Priority"
description: "A static priority command center: local tasks, a top-three list, and a markdown export."
pubDate: 2026-11-13T23:20:00.000Z
draft: false
tags:
  - Lab reports
  - Desks
author: "Kyle McAuliffe"
---

## What it was

The document title in `index.html` is "Kyle McAuliffe — Priority Command Center & Dashboard." The archive README calls the project the Priority dashboard. It is three static files: `index.html`, `app.js`, and `style.css`. There is no `package.json` and no GitHub repo in the archive. Firebase project `priority-510519`, site https://priority-510519.web.app.

The working-tree copies of those three files match the live-mirror copies by SHA-256.

## Why it was built

The page is a command center for a task list, a short list of top priorities, and a markdown export. A longer origin story is not in the three files.

## How it worked

`index.html` loads `style.css` and `app.js` as an ES module. Google Fonts on the page are Plus Jakarta Sans and JetBrains Mono. `app.js` is a browser class `PriorityDashboard`. It imports `./data.js`. That file is not in the working tree or the live mirror.

`PriorityDashboard` loads state from `localStorage` key `kyle_priority_dashboard_state_v1`. If nothing is saved, it clones `INITIAL_DATA` from the missing `data.js`. `renderPriorities` draws `state.topPriorities` as numbered cards with impact, title, subtitle, and a progress percent. `renderTasks` filters `state.tasks` by the active tab and a search box over title, description, and tags. Tabs in `index.html` are All Items (`all`), Today & Operations (`action`), Side Projects (`side`), and Musings & People (`musings`).

The new-task form writes a task with id `t_` plus a timestamp, a category, title, description, priority (`high`, `medium`, or `low`), status `todo`, dueDate `Active`, and a tag. `toggleTaskStatus` flips `todo` and `completed`. `updateStats` fills Active, Completed, and a progress percent. `renderMusings` lists tasks whose category is `musings`. `renderFeats` lists `state.recentFeats`. `exportMarkdownSummary` downloads `kyle-priority-report-YYYY-MM-DD.md`.

Theme pills set `document.body.dataset.theme` to `magma`, `aurora`, `sunset`, or `nebula`. The page starts at `data-theme="magma"`. Maximize and minimize toggle the class `mac-window-mode` on `#appContainer`. The close control calls `alert`. `initClock` writes the local date and time into `#liveClock` every 10 seconds. `style.css` is 1093 lines.

No images were in the zip.

## Where it lives now

Archived November 13, 2026, about 8:09 PM PT. A later index row says the site was deleted the same evening and the Firebase project delete was requested at 8:22 PM PT. The index says there was no Firestore. Zip SHA-256 `dc056996a49546dac133d554faae06024299d741100d81cf79bb5a544f0c0548`. The archive index says this board was not a Dawn feature.

## What was learned

The archive does not record a separate lesson. The recorded outcome is that the static board was archived and the hosting project was deleted.

## Download

- Zip: https://drive.google.com/file/d/1cCclEPQbz4SsJaCpmiYDj0TLNyLJGSzQ/view
- Also listed in: https://drive.google.com/drive/folders/1wDiQIMnNhlBACtIRokeRQXPku_wD6Ljw

The index says to open `index.html` from the zip over HTTP. Without `data.js`, the first load has no `INITIAL_DATA` to clone.
