import { ScrollViewStyleReset } from "expo-router/html";
import type { PropsWithChildren } from "react";
import { CSS_VERSION } from "@/constants/CssVersion";

const css = (href: string) => `${href}?v=${encodeURIComponent(CSS_VERSION)}`;

export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en" data-style="pixel">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Research, writing, and tools from Kyle McAuliffe."
        />
        <meta property="og:site_name" content="KSM" />
        <meta property="og:type" content="website" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="KSM Magazine"
          href="/rss.xml"
        />
        <meta name="theme-color" content="#2D3561" />
        <meta name="color-scheme" content="light" />
        <link
          rel="preload"
          href="/fonts/VT323-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/PressStart2P-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={css("/layout.css")} />
        <link rel="stylesheet" href={css("/pixel.css")} />
        <link rel="stylesheet" href={css("/notebook.css")} />
        <link rel="stylesheet" href={css("/desk.css")} />
        <link rel="stylesheet" href={css("/newsprint.css")} />
        <link rel="stylesheet" href={css("/neon.css")} />
        <link rel="stylesheet" href={css("/y2k.css")} />
        <link rel="stylesheet" href={css("/rpg.css")} />
        <link rel="stylesheet" href={css("/gothic.css")} />
        <link rel="stylesheet" href={css("/minimal.css")} />
        <link rel="stylesheet" href={css("/futurism.css")} />
        <link rel="icon" href="/images/brand/sun-cross.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/brand/sun-cross.png" />
        <ScrollViewStyleReset />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .ksm-frame { display: flex; flex-direction: column; flex: 1; width: 100%; min-height: 100%; }
              @media (min-width: 1024px) { .ksm-frame { flex-direction: row; } }
              .ksm-side {
                display: none !important;
                width: 0 !important;
                max-width: 0 !important;
                flex: 0 0 0 !important;
                overflow: hidden !important;
                padding: 0 !important;
                margin: 0 !important;
              }
              @media (min-width: 1024px) {
                .ksm-side {
                  display: flex !important;
                  width: 210px !important;
                  max-width: 210px !important;
                  flex: 0 0 210px !important;
                  overflow: visible !important;
                }
                .ksm-mobile-chrome { display: none !important; }
              }
              .ksm-main { flex: 1; min-width: 0; width: 100%; max-width: 100%; }
              .ksm-mobile-chrome {
                position: fixed;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 40;
                pointer-events: none;
              }
              .ksm-mobile-chrome > * { pointer-events: auto; }
              @media (max-width: 1023px) {
                .ksm-main { padding-bottom: calc(112px + env(safe-area-inset-bottom)); }
              }
              .ksm-home { display: flex; flex-direction: column; gap: 22px; min-width: 0; width: 100%; }
              .ksm-home-cat-grid {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 10px;
              }
              .ksm-home-rail {
                display: flex;
                gap: 12px;
                overflow-x: auto;
                scroll-snap-type: x mandatory;
              }
              html[data-style="notebook"] {
                --paper: #F6F1E7;
                --ink: #2A241C;
                --muted: #5C5348;
                --rule: #D5CBBC;
                --card: #FFFDF8;
                --accent: #6B4A32;
                --serif: Georgia, "Iowan Old Style", Palatino, "Palatino Linotype", serif;
                --sans: Helvetica, Arial, sans-serif;
              }
              html[data-style="desk"] {
                --paper: #FFFFFF;
                --ink: #1C1C1C;
                --muted: #4A4A4A;
                --rule: #E2E2E2;
                --card: #FAFAFA;
                --accent: #1F4E79;
                --serif: Georgia, "Times New Roman", serif;
                --sans: Helvetica, Arial, sans-serif;
              }
              html[data-style="magazine"] {
                --paper: #F4EFE4;
                --ink: #161412;
                --muted: #3E3832;
                --rule: #161412;
                --card: #FFFCF6;
                --accent: #8E2F2F;
                --serif: Georgia, "Iowan Old Style", Palatino, serif;
                --sans: Helvetica, Arial, sans-serif;
              }
              html[data-style="newsprint"] {
                --paper: #F2EBDD;
                --ink: #12110F;
                --muted: #4A443C;
                --rule: #C9BFB0;
                --card: #FAF6EE;
                --accent: #5C4A32;
                --serif: "Times New Roman", Times, Georgia, serif;
                --sans: Helvetica, Arial, sans-serif;
              }
              html[data-style="neon"] {
                --paper: #1A1816;
                --ink: #EDE6DC;
                --muted: #A89F94;
                --rule: #3D3834;
                --card: #242120;
                --accent: #38E8FF;
                --neon-cyan: #38E8FF;
                --neon-magenta: #FF4FD8;
                --serif: Georgia, "Iowan Old Style", Palatino, serif;
                --sans: Helvetica, Arial, sans-serif;
              }
              html[data-style="y2k"] {
                --paper: #EEF6FF;
                --ink: #2A2A4A;
                --muted: #4A4A6A;
                --rule: #B8C8E8;
                --card: #FFFFFF;
                --accent: #FF6EC7;
                --y2k-sky: #C8E4FF;
                --serif: Comfortaa, "Segoe UI", sans-serif;
                --sans: Comfortaa, "Segoe UI", sans-serif;
              }
              html[data-style="rpg"] {
                --paper: #0F1A3A;
                --ink: #E8ECFF;
                --muted: #A8B8D8;
                --rule: #5A7AB8;
                --card: #1A2850;
                --accent: #F8D878;
                --serif: "Press Start 2P", "Courier New", monospace;
                --sans: VT323, "Courier New", monospace;
              }
              html[data-style="gothic"] {
                --paper: #100E0E;
                --ink: #F2EBE4;
                --muted: #C4B4AA;
                --rule: #5C3040;
                --card: #181416;
                --accent: #8B2942;
                --display: UnifrakturCook, Georgia, serif;
                --serif: Georgia, "Times New Roman", serif;
                --sans: Inter, Helvetica, Arial, sans-serif;
              }
              html[data-style="minimal"] {
                --paper: #FFFFFF;
                --ink: #111111;
                --muted: #5C5C5C;
                --rule: #E8E8E8;
                --card: #FAFAFA;
                --accent: #111111;
                --serif: Inter, Helvetica, Arial, sans-serif;
                --sans: Inter, Helvetica, Arial, sans-serif;
              }
              html[data-style="futurism"] {
                --paper: #1A1F26;
                --ink: #E8ECF0;
                --muted: #9AA3AD;
                --rule: #2D3540;
                --card: #222830;
                --accent: #00E5FF;
                --serif: "Exo 2", Helvetica, Arial, sans-serif;
                --sans: "Exo 2", Helvetica, Arial, sans-serif;
              }
              .ksm-picker {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                align-items: center;
                gap: 6px;
                max-width: 100%;
                overflow-x: auto;
                overflow-y: hidden;
                -webkit-overflow-scrolling: touch;
                scrollbar-width: thin;
                padding-bottom: 2px;
              }
              .ksm-picker-btn {
                flex-shrink: 0;
                white-space: nowrap;
              }
              body, .ksm-page, #root {
                background: var(--paper);
                color: var(--ink);
              }
              .ksm-header, .ksm-footer {
                background: var(--paper);
                color: var(--ink);
                border-color: var(--rule);
              }
              .ksm-header { border-bottom: 1px solid var(--rule); }
              .ksm-footer { border-top: 1px solid var(--rule); }
              .ksm-wordmark, .ksm-headline, .ksm-section, .ksm-card-title {
                font-family: var(--serif);
                color: var(--ink);
              }
              .ksm-wordmark { font-size: 22px; }
              .ksm-headline {
                font-size: 40px;
                line-height: 1.15;
                max-width: 18ch;
                margin: 0;
              }
              .ksm-section { font-size: 28px; margin: 0; }
              .ksm-kicker, .ksm-nav, .ksm-fine, .ksm-lede, .ksm-card-line, .ksm-card-tags, .ksm-card-year {
                font-family: var(--sans);
                color: var(--ink);
              }
              .ksm-kicker { font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); }
              .ksm-lede { font-size: 17px; line-height: 1.5; max-width: 62ch; color: var(--muted); margin: 0; }
              .ksm-nav { font-size: 15px; color: var(--ink); text-decoration: underline; text-underline-offset: 3px; }
              .ksm-fine { font-size: 13px; color: var(--muted); }
              .ksm-grid { display: flex; flex-wrap: wrap; gap: 16px; }
              .ksm-card, .ksm-paper, .ksm-slot {
                display: flex;
                flex-direction: column;
                gap: 6px;
                width: 260px;
                min-height: 180px;
                padding: 14px;
                background: var(--card);
                color: var(--ink);
                border: 1px solid var(--rule);
                text-decoration: none;
              }
              .ksm-paper, .ksm-slot { width: 100%; max-width: 640px; min-height: 0; }
              html[data-style="magazine"] .ksm-card,
              html[data-style="magazine"] .ksm-paper,
              html[data-style="magazine"] .ksm-header {
                border-width: 2px;
              }
              html[data-style="desk"] .ksm-headline { font-weight: 500; }
              html[data-style="newsprint"] .ksm-card,
              html[data-style="newsprint"] .ksm-paper {
                border-width: 2px;
              }
              html[data-style="neon"] .ksm-kicker { color: var(--neon-cyan); }
              .ksm-card-title { font-size: 22px; }
              .ksm-card-line, .ksm-card-tags, .ksm-card-year { font-size: 14px; color: var(--muted); }
              .ksm-filters { display: flex; flex-wrap: wrap; gap: 8px; }
              .ksm-filters input { position: absolute; width: 1px; height: 1px; opacity: 0; }
              .ksm-filters label {
                display: inline-block;
                border: 1px solid var(--rule);
                color: var(--ink);
                background: transparent;
                padding: 6px 10px;
                font-family: var(--sans);
                font-size: 14px;
                border-radius: 0;
                cursor: pointer;
              }
              .ksm-filters input:focus-visible + label { outline: 2px solid var(--ink); outline-offset: 2px; }
              .ksm-filters input:checked + label { background: var(--ink); color: var(--paper); }
              html:has(#filter-research:checked) .ksm-card:not([data-tags~="research"]) { display: none; }
              html:has(#filter-writing:checked) .ksm-card:not([data-tags~="writing"]) { display: none; }
              html:has(#filter-games:checked) .ksm-card:not([data-tags~="games"]) { display: none; }
              html:has(#filter-apps:checked) .ksm-card:not([data-tags~="apps"]) { display: none; }
              html:has(#filter-art:checked) .ksm-card { display: none; }
              .ksm-empty-art { display: none; font-family: var(--sans); color: var(--muted); }
              html:has(#filter-art:checked) .ksm-empty-art { display: block; }
              .ksm-menu {
                position: absolute;
                inset: 0;
                z-index: 50;
                background: var(--paper);
                color: var(--ink);
              }
              .ksm-menu-link { border-bottom: 1px solid var(--rule); padding: 16px 0; }
              .ksm-menu-label { font-family: var(--serif); font-size: 32px; color: var(--ink); }
              a:focus-visible, button:focus-visible, input:focus-visible, label:focus-visible {
                outline: 2px solid var(--ink);
                outline-offset: 3px;
              }
              @media (prefers-reduced-motion: reduce) {
                *, *::before, *::after {
                  animation: none !important;
                  transition: none !important;
                }
              }
              @font-face {
                font-family: "Anton Fallback";
                src: local("Impact"), local("Arial Narrow"), local("Haettenschweiler");
                size-adjust: 92%;
                ascent-override: 118%;
                descent-override: 33%;
                line-gap-override: 0%;
              }
              @font-face {
                font-family: "Anton";
                src: url("/fonts/Anton-latin.woff2") format("woff2");
                font-weight: 400;
                font-style: normal;
                font-display: optional;
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+20AC, U+2122;
              }
              @font-face {
                font-family: "UnifrakturCook";
                src: url("/fonts/UnifrakturCook-Bold.ttf") format("truetype");
                font-weight: 700;
                font-style: normal;
                font-display: optional;
              }
              @font-face {
                font-family: "GreatVibes";
                src: url("/fonts/GreatVibes-latin.woff2") format("woff2");
                font-weight: 400;
                font-style: normal;
                font-display: optional;
              }
              .font-\[Anton\] {
                font-family: Anton, "Anton Fallback", Impact, sans-serif !important;
              }
              .font-\[UnifrakturCook\] {
                font-family: UnifrakturCook, "Times New Roman", serif !important;
              }
              .font-\[GreatVibes\] {
                font-family: GreatVibes, "Palatino Linotype", Palatino, serif !important;
              }
              html, body, #root { min-height: 100%; }
              body {
                margin: 0;
                background: var(--paper);
                font-family: var(--sans);
                color: var(--ink);
              }
              html[data-theme="light"] body,
              html[data-theme="light"] #root {
                background: #F4EFE6 !important;
                color: #161311 !important;
              }
              html[data-theme="dark"] body,
              html[data-theme="dark"] #root {
                background: #100E0C !important;
                color: #F4EFE6 !important;
              }
              a { color: inherit; text-decoration: none; }
              :focus-visible {
                outline: 2px solid #ffffff;
                outline-offset: 3px;
              }
              html[data-theme="light"] :focus-visible {
                outline-color: #9e0e1e;
              }
              @media (prefers-reduced-motion: reduce) {
                .ksm-hero-shader { display: none !important; }
              }
              .ksm-grain {
                pointer-events: none;
                position: fixed;
                inset: 0;
                z-index: 60;
                opacity: 0.07;
                mix-blend-mode: overlay;
                background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
              }
              .ksm-prose {
                font-family: "Cabinet Grotesk", Inter, Helvetica Neue, Helvetica, Arial, sans-serif;
                font-size: 1.05rem;
                line-height: 1.7;
                color: inherit;
              }
              .ksm-prose p { margin: 0 0 1rem; }
              .ksm-prose h2 {
                font-family: Anton, Impact, sans-serif;
                font-weight: 400;
                letter-spacing: 0.04em;
                text-transform: uppercase;
                font-size: 2rem;
                margin: 1.75rem 0 0.75rem;
                color: #B10F24;
              }
              .ksm-prose h3 {
                font-family: Anton, Impact, sans-serif;
                font-weight: 400;
                letter-spacing: 0.03em;
                text-transform: uppercase;
                font-size: 1.35rem;
                margin: 1.4rem 0 0.6rem;
              }
              .ksm-prose a { color: #B10F24; text-decoration: underline; }
              .ksm-prose blockquote {
                border-left: 3px solid #B10F24;
                margin: 1rem 0;
                padding-left: 1rem;
                font-style: italic;
              }
              .ksm-prose ul, .ksm-prose ol {
                padding-left: 1.25rem;
                margin: 0 0 1rem;
              }
              .lg\\:flex { display: none; }
              .lg\\:hidden { display: flex; }
              @media (min-width: 1024px) {
                .lg\\:flex { display: flex !important; }
                .lg\\:hidden { display: none !important; }
              }
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var saved = localStorage.getItem("ksm-style");
                  var next = "pixel";
                  if (
                    saved === "desk" ||
                    saved === "magazine" ||
                    saved === "notebook" ||
                    saved === "pixel" ||
                    saved === "newsprint" ||
                    saved === "neon" ||
                    saved === "y2k" ||
                    saved === "rpg" ||
                    saved === "gothic" ||
                    saved === "minimal" ||
                    saved === "futurism"
                  ) {
                    next = saved;
                  }
                  document.documentElement.setAttribute("data-style", next);
                  if (localStorage.getItem("ksm-crt") === "on") {
                    document.documentElement.setAttribute("data-crt", "on");
                  }
                } catch (e) {
                  document.documentElement.setAttribute("data-style", "pixel");
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <div class="pixel-world" aria-hidden="true">
          <div class="pixel-sky-shift"></div>
          <div class="pixel-stars"></div>
          <div class="pixel-clouds"></div>
          <div class="pixel-sun"></div>
          <div class="pixel-hills"></div>
          <div class="pixel-halftone"></div>
          <div class="pixel-grain"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
