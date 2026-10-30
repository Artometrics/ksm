/**
 * Download official Cabinet Grotesk woff2 files for self-hosting.
 *
 * ITF Free Font License 2.0 allows self-hosting on our own site and forbids
 * putting the font files in a public repository, subsetting, or converting
 * them. This script copies the woff2 bytes unchanged. The files are gitignored.
 *
 * Source: https://www.fontshare.com/fonts/cabinet-grotesk
 * License: https://www.fontshare.com/licenses/itf-ffl
 */
import { mkdir, writeFile, access } from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve("public/fonts/cabinet-grotesk");
const cssUrl =
  "https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700&display=swap";

async function exists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

const marker = path.join(outDir, "faces.css");
if (await exists(marker)) {
  console.log("[fontshare] Cabinet Grotesk already present");
  process.exit(0);
}

const cssRes = await fetch(cssUrl);
if (!cssRes.ok) {
  throw new Error(`Fontshare CSS failed: ${cssRes.status}`);
}
const css = await cssRes.text();
await mkdir(outDir, { recursive: true });

const faces = [];
for (const block of css.split("@font-face").slice(1)) {
  const weight = /font-weight:\s*(\d+)/.exec(block)?.[1];
  const style = /font-style:\s*([a-z]+)/i.exec(block)?.[1] ?? "normal";
  const rel = /url\('([^']+\.woff2)'\)/.exec(block)?.[1];
  if (!weight || !rel) continue;
  const remote = rel.startsWith("//") ? `https:${rel}` : rel;
  const file = `cabinet-grotesk-${weight}.woff2`;
  const fontRes = await fetch(remote);
  if (!fontRes.ok) {
    throw new Error(`Fontshare file failed: ${fontRes.status} ${remote}`);
  }
  const bytes = Buffer.from(await fontRes.arrayBuffer());
  await writeFile(path.join(outDir, file), bytes);
  faces.push({ weight, style, file, bytes: bytes.length });
  console.log(`[fontshare] ${file} ${bytes.length} bytes`);
}

if (faces.length === 0) {
  throw new Error("Fontshare CSS had no woff2 faces");
}

const local = faces
  .map(
    (face) => `@font-face {
  font-family: "Cabinet Grotesk";
  src: url("/fonts/cabinet-grotesk/${face.file}") format("woff2");
  font-weight: ${face.weight};
  font-style: ${face.style};
  font-display: swap;
}`,
  )
  .join("\n\n");

await writeFile(marker, `${local}\n`);
console.log("[fontshare] wrote faces.css");
