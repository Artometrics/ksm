# Lab notes

Experiments for the KSM home hero. This repository is Expo Router with a static web export, not Astro. A shader here is a single web-only React island: the static ink wash is in the HTML first, and the shader script loads after paint. Nothing in this file is a Claude Code workflow. Prompts are for Cursor.

The live site stays `noindex`. `app/+html.tsx` sets `meta name="robots" content="noindex, nofollow"`. `public/robots.txt` is `Disallow: /`. There is no sitemap (`expo-router` sitemap is off, and `robots.txt` does not point at one). Firebase Hosting also sends `X-Robots-Tag: noindex, nofollow`. Do not change DNS or custom domains.

Preview a branch with the existing Firebase project (`ksm-510519`), hosting only:

```
npm run build
npx firebase-tools@latest hosting:channel:deploy <channel-name> --expires 14d --only hosting
```

That URL is public but noindex. Do not put API keys, tokens, or passwords in the repo or on a page.

## What to avoid

No purple gradients, pill buttons, bento grids, three identical feature cards, fake reviews, metric counters, emoji icons, em dashes, vague hero lines, AI stock photos, custom cursors, or heavy scroll effects. Keep the square zine buttons and the existing sections. One shader component is enough.

## 1. Paper Shaders

Source: https://shaders.paper.design and https://github.com/paper-design/shaders

Package: `@paper-design/shaders-react`

Cursor steps:

1. Branch from `lab`.
2. `npm install @paper-design/shaders-react`
3. Add `components/hero/HeroInkWash.tsx` (static SVG, always rendered).
4. Add `components/hero/PaperMeshIsland.web.tsx` and a native stub that returns null.
5. In the island, `import()` the package inside `useEffect`. If `matchMedia("(prefers-reduced-motion: reduce)")` matches, do not load it.
6. Point the home hero at the ink wash, then the island, then a dark scrim, then the existing type. Remove the cover photo from the hero only.

Cursor prompt:

```
On the home hero only, add one slow MeshGradient from @paper-design/shaders-react as a web-only island. Load it with import() after mount. Colors #1A0506, #E60000, #3D0008, #F3E6D4, #070707. distortion 0.38, swirl 0.1, speed 0.14, grainOverlay 0.2. Cap maxPixelCount near 900000. Under it, render an inline SVG ink wash in the same colors so the hero is visible with JavaScript disabled. If prefers-reduced-motion is set, do not mount the shader. Keep the current headline, square buttons, and the rest of the page. No new sections.
```

## 2. ShaderGradient

Source: https://www.shadergradient.co

Packages: `@shadergradient/react`, `@react-three/fiber`, `three`

This is an alternative to Paper Shaders, not an addition. Branch from `lab`, not from the Paper branch.

Cursor prompt:

```
Replace the home hero photo with the same ink-wash fallback used for the Paper experiment, and lazy-load one ShaderGradient plane on top. Dynamic-import @shadergradient/react only after mount, and skip it entirely when prefers-reduced-motion matches. Use type plane, animate on, uSpeed 0.08, lightType 3d, grain on, colors #100E0C, #B10F24, #F3E6D4. pixelDensity 1. Do not fetch environment maps. Keep the island out of the server render. No three.js on the reduced-motion or no-JS paths.
```

Compare Lighthouse mobile (performance, accessibility, LCP, CLS, TBT) with the Paper build and with `main` before these experiments. INP is field data; TBT is the lab stand-in.

## 3. Static ink wash

Haikei and Cool Backgrounds need a GUI, so the wash is hand-built SVG in `components/hero/HeroInkWash.tsx`. It is the zero-JS hero: no canvas, no animation. Branch from `lab` if you want this alone.

Cursor prompt:

```
Replace the home hero photograph with components/hero/HeroInkWash.tsx only. Inline SVG, preserveAspectRatio slice, colors black #070707, crimson #E60000, dried blood #5C0008, paper #F3E6D4. Add a scrim behind the white headline so contrast stays above 4.5:1. No JavaScript, no canvas, no animation. Leave every section below the hero as it is.
```

## 4. Fontshare: Cabinet Grotesk

License: ITF Free Font License, version 2.0 (17 Aug 2026), https://www.fontshare.com/licenses/itf-ffl

Cabinet Grotesk, General Sans, and Satoshi are closed-source Fontshare families. The license allows self-hosting on our own site with CSS `@font-face`, including `font-display`. It does not allow uploading the font files to a public repository, subsetting, or converting them. This repo is public, so the woff2 files are downloaded at build time by `scripts/fetch-fontshare.mjs` and gitignored. The shipped site serves them from `/fonts/cabinet-grotesk/`. Cabinet Grotesk is the body face. Anton stays the display face. Satoshi and General Sans were skipped because they are the usual AI-startup pair.

Cursor prompt:

```
Self-host Cabinet Grotesk for body text. Run scripts/fetch-fontshare.mjs so it downloads the official woff2 files from the Fontshare CSS API and writes public/fonts/cabinet-grotesk/faces.css with font-display: swap. Do not commit the woff2 files. Do not subset or rename glyphs. Point --font-sans and the body font-family at "Cabinet Grotesk", then Inter. Keep Anton, UnifrakturCook, and GreatVibes.
```

## 5. Palette

Test on Realtime Colors:

https://www.realtimecolors.com/?colors=161311-F4EFE6-B10F24-E6DDD0-100E0C

Order is text, background, primary, secondary, accent.

| Role | Hex | Use |
| --- | --- | --- |
| Text | `#161311` | Ink on paper |
| Background | `#F4EFE6` | Warm paper, light theme |
| Primary | `#B10F24` | Crimson fills and links on paper. White on this red is about 6.2:1 |
| Secondary | `#E6DDD0` | Bone rules and quiet fills |
| Accent | `#100E0C` | Warm black, dark theme background |
| Small type on black | `#FF5C54` | The header ticker. `#E60000` on `#000000` is about 4.4:1 at 10px, which fails AA |

Dark theme text is `#F4EFE6` on `#100E0C` (about 16.8:1). Do not introduce purple, blue glow, or a second bright accent.

Cursor prompt:

```
Apply the Realtime Colors palette https://www.realtimecolors.com/?colors=161311-F4EFE6-B10F24-E6DDD0-100E0C to constants/Colors.ts and global.css. Light background #F4EFE6, light text #161311, primary #B10F24. Dark background #100E0C, dark text #F4EFE6. Keep square corners and the zine borders. Bump the 10px header ticker off #E60000 so it clears 4.5:1 on black. Do not restyle the page into cards.
```

## 6. References for Cursor

Give Cursor one of these at a time, and say what to borrow (type scale, crop, or grid). Do not paste a whole page into the hero.

- Pedro Duarte, dark personal portfolio, large type: https://godly.website/website/pedro-duarte-990
- Yung Studio, black and white studio site: https://godly.website/website/yung-studio-899
- Ana Cuna, typographic personal site: https://godly.website/website/ana-cuna-765
- Huy Phan, quiet light portfolio: https://godly.website/website/huy-phan-854
- The New York Times web section index (editorial rows, not a product hero): https://mobbin.com/screens/13bdc89d-8497-4ed4-83b9-d6e851d75870

Skip Godly entries that use a custom cursor or scroll hijacking. Skip Mobbin marketing pages with a centered headline, a pill button, and a product screenshot. That is the look this lab is trying to leave.

## 7. Cursor rules

Impeccable (Apache-2.0, Paul Bakaus): https://github.com/pbakaus/impeccable

Taste Skill (MIT, Copyright 2026 Leonxlnx): https://github.com/Leonxlnx/taste-skill

Both licenses allow copying into this repo if the license notice stays with the files. They are under `.cursor/rules/` with source links. They are reference rules, not always-on, so they do not silently restyle every task.

## Measurements

Lighthouse mobile, simulated throttling, local static export of `/`. INP is field data, so TBT is the blocking-time number. Accessibility on every lab build includes the ticker contrast fix, image names, and the menu button role. The baseline score is `main` before those fixes.

| Build | Perf | A11y | LCP | CLS | TBT | JS gzip |
| --- | --- | --- | --- | --- | --- | --- |
| Baseline main | 85 | 84 | 2.0 s | 0.016 | 500 ms | 823111 |
| Paper Shaders | 51 | 100 | 10.5 s | 0.015 | 390 ms | 899271 |
| ShaderGradient | 30 | 100 | 10.5 s | 0 | 148150 ms | 1096793 |
| Static ink wash | 55 | 100 | 10.5 s | 0 | 260 ms | 811247 |

Paper adds one async chunk of 85477 bytes gzip (about 85 KB). The main bundle did not grow by that full amount, so total JS is 76160 bytes gzip above baseline.

ShaderGradient, with `three@0.169.0`, adds one async chunk of 282922 bytes gzip (about 283 KB). Total JS is 273682 bytes gzip above baseline. `three@0.187` failed to compile the bundled shader (`cube_uv_reflection_fragment`). The plane draws, and it is the slow one: time to interactive was 232 s in the same run.

The static wash is 11864 bytes gzip under baseline because the hero photograph left the page. FCP on the three lab heroes was about 2.9 s. LCP moved from 2.0 s to about 10.5 s on all three because the cover photo is no longer the largest paint. The headline then waits on Anton.

## Recommendation

Ship the static ink wash, Cabinet Grotesk, and the warm ink palette. Do not ship either WebGL hero.

The wash is in the first HTML, so it is the page with JavaScript off and with reduced motion. It adds no script. Paper is the better animation: one MeshGradient, brand crimson, about 85 KB gzip, TBT near the baseline. Its canvas still holds the main thread often enough that the performance score stays in the 50s, next to the static page, so the motion is not worth the script. ShaderGradient is the one to leave: a dithered plane, a quarter megabyte of gzip, and a blocking time two orders of magnitude worse.

The original black and white cover still wins LCP. This pick is the experiment that stays fast enough to put on the site.
