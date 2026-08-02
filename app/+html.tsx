import { ScrollViewStyleReset } from "expo-router/html";
import type { PropsWithChildren } from "react";

/**
 * Root HTML shell for static web export.
 */
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
          content="Hemingway — design conversations, magazine essays, and podcast interviews."
        />
        <meta property="og:site_name" content="Hemingway" />
        <meta property="og:type" content="website" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Hemingway Magazine"
          href="/rss.xml"
        />
        <meta name="theme-color" content="#FAFAFA" />
        <meta name="color-scheme" content="light" />
        <ScrollViewStyleReset />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=STIX+Two+Text:ital,wght@0,300;0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html, body, #root { min-height: 100%; }
              body {
                margin: 0;
                background: #FAFAFA;
                font-family: Inter, Helvetica Neue, Helvetica, Arial, system-ui, sans-serif;
                color: #171717;
              }
              html[data-theme="light"] body,
              html[data-theme="light"] #root {
                background: #FAFAFA !important;
                color: #171717 !important;
              }
              html[data-theme="dark"] body,
              html[data-theme="dark"] #root {
                background: #0A0A0A !important;
                color: #FAFAFA !important;
              }
              a { color: inherit; text-decoration: none; }
              .hemingway-prose {
                font-family: "STIX Two Text", Georgia, serif;
                font-size: 1.125rem;
                line-height: 1.75;
                color: inherit;
              }
              .hemingway-prose p { margin: 0 0 1rem; }
              .hemingway-prose h2 {
                font-weight: 300;
                font-size: 1.75rem;
                margin: 1.75rem 0 0.75rem;
              }
              .hemingway-prose h3 {
                font-weight: 400;
                font-size: 1.35rem;
                margin: 1.4rem 0 0.6rem;
              }
              .hemingway-prose a { color: #D4A017; text-decoration: underline; }
              .hemingway-prose blockquote {
                border-left: 2px solid #D4A017;
                margin: 1rem 0;
                padding-left: 1rem;
                font-style: italic;
                opacity: 0.9;
              }
              .hemingway-prose ul, .hemingway-prose ol {
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
                  var saved = localStorage.getItem("hemingway-theme");
                  var mode = "light";
                  if (saved === "dark") mode = "dark";
                  else if (saved === "system") {
                    mode = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)
                      ? "dark" : "light";
                  }
                  var bg = mode === "dark" ? "#0A0A0A" : "#FAFAFA";
                  var fg = mode === "dark" ? "#FAFAFA" : "#171717";
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
      <body>{children}</body>
    </html>
  );
}
