import { ScrollViewStyleReset } from "expo-router/html";
import type { PropsWithChildren } from "react";

export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="KSM — independent magazine and creative platform. Essays, posters, signal."
        />
        <meta property="og:site_name" content="KSM" />
        <meta property="og:type" content="website" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="KSM Magazine"
          href="/rss.xml"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        <ScrollViewStyleReset />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @font-face {
                font-family: "DMSans";
                src: url("/fonts/DMSans-Regular.ttf") format("truetype");
                font-weight: 400;
                font-style: normal;
                font-display: swap;
              }
              @font-face {
                font-family: "DMSans";
                src: url("/fonts/DMSans-Medium.ttf") format("truetype");
                font-weight: 500;
                font-style: normal;
                font-display: swap;
              }
              @font-face {
                font-family: "DMSans";
                src: url("/fonts/DMSans-Bold.ttf") format("truetype");
                font-weight: 700;
                font-style: normal;
                font-display: swap;
              }
              @font-face {
                font-family: "DMMono";
                src: url("/fonts/DMMono-Regular.ttf") format("truetype");
                font-weight: 400;
                font-style: normal;
                font-display: swap;
              }
              @font-face {
                font-family: "DMMono";
                src: url("/fonts/DMMono-Medium.ttf") format("truetype");
                font-weight: 500;
                font-style: normal;
                font-display: swap;
              }
              @font-face {
                font-family: "Chomsky";
                src: url("/fonts/Chomsky.otf") format("opentype");
                font-weight: 400;
                font-style: normal;
                font-display: swap;
              }
              @font-face {
                font-family: "Anton";
                src: url("/fonts/Anton-Regular.ttf") format("truetype");
                font-weight: 400;
                font-style: normal;
                font-display: swap;
              }
              html, body, #root { min-height: 100%; }
              body {
                margin: 0;
                background: #000000;
                font-family: DMSans, Helvetica Neue, Helvetica, Arial, system-ui, sans-serif;
                color: #FFFFFF;
                -webkit-font-smoothing: antialiased;
              }
              html[data-theme="light"] body,
              html[data-theme="light"] #root {
                background: #FFFFFF !important;
                color: #000000 !important;
              }
              html[data-theme="dark"] body,
              html[data-theme="dark"] #root {
                background: #000000 !important;
                color: #FFFFFF !important;
              }
              a { color: inherit; text-decoration: none; }
              .ksm-grain {
                pointer-events: none;
                position: fixed;
                inset: 0;
                z-index: 60;
                opacity: 0.05;
                mix-blend-mode: overlay;
                background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
              }
              .ksm-prose {
                font-family: DMSans, Helvetica Neue, Helvetica, Arial, sans-serif;
                font-size: 1.0625rem;
                line-height: 1.65;
                max-width: 600px;
                color: inherit;
              }
              .ksm-prose p { margin: 0 0 1rem; }
              .ksm-prose h2 {
                font-family: DMMono, ui-monospace, monospace;
                font-weight: 500;
                letter-spacing: -0.01em;
                text-transform: uppercase;
                font-size: 1.75rem;
                margin: 1.75rem 0 0.75rem;
                color: #C0392B;
              }
              .ksm-prose h3 {
                font-family: DMMono, ui-monospace, monospace;
                font-weight: 500;
                letter-spacing: -0.01em;
                text-transform: uppercase;
                font-size: 1.25rem;
                margin: 1.4rem 0 0.6rem;
              }
              .ksm-prose a { color: #D9251B; text-decoration: underline; }
              .ksm-prose blockquote {
                border-left: 2px solid #C0392B;
                margin: 1rem 0;
                padding-left: 1.25rem;
                font-family: DMMono, ui-monospace, monospace;
                font-weight: 500;
                font-style: normal;
              }
              .ksm-prose ul, .ksm-prose ol {
                padding-left: 1.25rem;
                margin: 0 0 1rem;
              }
              @keyframes ksm-fade-up {
                from { opacity: 0; transform: translateY(12px); }
                to { opacity: 1; transform: translateY(0); }
              }
              @keyframes ksm-rule-in {
                from { transform: scaleX(0); }
                to { transform: scaleX(1); }
              }
              .ksm-fade-up {
                animation: ksm-fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
              }
              .ksm-fade-up-delay {
                animation: ksm-fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.12s both;
              }
              .ksm-rule-in {
                transform-origin: left;
                animation: ksm-rule-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
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
                  var saved = localStorage.getItem("ksm-theme");
                  var mode = "dark";
                  if (saved === "light") mode = "light";
                  else if (saved === "system") {
                    mode = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)
                      ? "dark" : "light";
                  } else if (saved === "dark") mode = "dark";
                  var bg = mode === "dark" ? "#000000" : "#FFFFFF";
                  var fg = mode === "dark" ? "#FFFFFF" : "#000000";
                  var root = document.documentElement;
                  root.setAttribute("data-theme", mode);
                  root.style.backgroundColor = bg;
                  document.addEventListener("DOMContentLoaded", function () {
                    document.body.style.backgroundColor = bg;
                    document.body.style.color = fg;
                  });
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <div class="ksm-grain" aria-hidden="true"></div>
        {children}
      </body>
    </html>
  );
}
