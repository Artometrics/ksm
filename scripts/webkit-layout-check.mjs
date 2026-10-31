import { webkit } from "playwright";
import { mkdirSync, writeFileSync } from "node:fs";

const BASE = process.env.BASE_URL ?? "http://127.0.0.1:3458";
const OUT = "/opt/cursor/artifacts/screenshots/webkit-layout";
const STYLES = [
  "pixel",
  "notebook",
  "desk",
  "magazine",
  "newsprint",
  "neon",
  "y2k",
  "rpg",
  "gothic",
  "minimal",
  "futurism",
];

mkdirSync(OUT, { recursive: true });

const browser = await webkit.launch();
const failures = [];

for (const style of STYLES) {
  for (const path of ["/", "/projects/cardinal"]) {
    const page = await browser.newPage({
      viewport: { width: 393, height: 852 },
    });
    await page.goto(`${BASE}${path}`, { waitUntil: "networkidle" });
    await page.evaluate((id) => {
      document.documentElement.setAttribute("data-style", id);
      localStorage.setItem("ksm-style", id);
    }, style);
    await page.waitForTimeout(350);

    const metrics = await page.evaluate(() => {
      const main = document.querySelector(".ksm-main");
      const side = document.querySelector(".ksm-side");
      const chrome = document.querySelector(".ksm-mobile-chrome");
      const mainRect = main?.getBoundingClientRect();
      const sideRect = side?.getBoundingClientRect();
      const chromeRect = chrome?.getBoundingClientRect();
      const mainText = main?.textContent?.trim().slice(0, 80) ?? "";
      const chromeStyle = chrome ? getComputedStyle(chrome) : null;
      return {
        mainHeight: mainRect?.height ?? 0,
        mainWidth: mainRect?.width ?? 0,
        mainTextLen: mainText.length,
        sideWidth: sideRect?.width ?? 0,
        chromeBottom: chromeRect?.bottom ?? 0,
        chromePosition: chromeStyle?.position ?? "",
        viewportH: window.innerHeight,
        viewportW: window.innerWidth,
      };
    });

    const slug = path === "/" ? "home" : "cardinal";
    const file = `${OUT}/${style}-${slug}.png`;
    await page.screenshot({ path: file, fullPage: false });

    const ok =
      metrics.mainHeight > 200 &&
      metrics.mainWidth > 300 &&
      metrics.mainTextLen > 40 &&
      metrics.sideWidth < 2 &&
      metrics.chromePosition === "fixed" &&
      metrics.chromeBottom >= metrics.viewportH - 4;

    if (!ok) {
      failures.push({ style, path, metrics, file });
    }

    await page.close();
  }
}

await browser.close();

writeFileSync(`${OUT}/results.json`, JSON.stringify({ failures, styles: STYLES }, null, 2));
if (failures.length) {
  console.error("FAILURES", JSON.stringify(failures, null, 2));
  process.exit(1);
}
console.log("All WebKit layout checks passed.", OUT);
