---
title: "How I build with AI agents"
description: "What the Dawn README and the 30 October 2026 hosting commit actually say."
pubDate: 2026-10-30
draft: true
tags:
  - Apps
  - Dawn
author: "kyle-mcauliffe"
image:
  url: "/images/og/how-i-build-with-ai-agents.svg"
  alt: "Draft title card for How I build with AI agents"
---

This note is a draft. It only repeats what is written in the Dawn repository.

The Dawn README calls Dawn a pixel-art village of agents, plus a studio and model gateway for the Artometrics ecosystem. It names three agents you can tap: Trinity, Kali, and Nimbus. It says they can draft a send, spend, hire, or post, and that nothing leaves until you tap Approve.

A commit on 30 October 2026, `0ff2c61`, says Dawn is served as a static Firebase export. The message says the village and Studio chat call Gemini through Firebase AI Logic in the browser, and that the old `/api/chat` handler stays under `src/lib/studio` for a possible later Cloud Function. Pull request #3 on Artometrics/dawn is the merge that brought that hosting change in (`fb33451`).

The README also says the Map tab uses OpenStreetMap, quests are short goals, and an older studio UI is at `/studio`. Hosting is described as Firebase Hosting of the static export in `out/`.

## Sources

- README: https://github.com/Artometrics/dawn/blob/main/README.md
- Commit `0ff2c61`: https://github.com/Artometrics/dawn/commit/0ff2c61
- Pull request #3: https://github.com/Artometrics/dawn/pull/3
- Hosted app checked on 30 October 2026: https://dawn-510519.web.app
