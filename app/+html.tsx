import { ScrollViewStyleReset } from "expo-router/html";
import type { PropsWithChildren } from "react";
import { CSS_VERSION } from "@/constants/CssVersion";

const css = (href: string) => `${href}?v=${encodeURIComponent(CSS_VERSION)}`;

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
        <meta name="theme-color" content="#111111" />
        <meta name="color-scheme" content="light" />
        <link
          rel="preload"
          href="/fonts/dm-mono-medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/source-serif-4-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={css("/layout.css")} />
        <link rel="stylesheet" href={css("/pixel.css")} />
        <link rel="stylesheet" href={css("/app.css")} />
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
                  width: 256px !important;
                  max-width: 256px !important;
                  flex: 0 0 256px !important;
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
                .ksm-main { padding-bottom: calc(96px + env(safe-area-inset-bottom)); }
              }
              .ksm-home { display: flex; flex-direction: column; gap: 22px; min-width: 0; width: 100%; }
              .ksm-home-cat-grid {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 12px;
              }
              @media (min-width: 720px) {
                .ksm-home-cat-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
              }
              @media (min-width: 1180px) {
                .ksm-home-cat-grid { grid-template-columns: repeat(6, minmax(0, 1fr)); }
              }
              .ksm-home-rail {
                display: flex;
                gap: 12px;
                overflow-x: auto;
                scroll-snap-type: x mandatory;
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
      </head>
      <body>{children}</body>
    </html>
  );
}
