#!/usr/bin/env node
import { readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const CATALOG = join(ROOT, "data/inventory-catalog.json");
const FILE_DIR = join(ROOT, "public/inventory/files");
const THUMB_DIR = join(ROOT, "public/inventory/thumbs");

const BANNED = [
  /drive\.google\.com/i,
  /docs\.google\.com/i,
  /cursor\.com\/canvas/i,
  /\/workspace\//i,
  /my drive\//i,
  /rainfall/i,
  /\bmadison\b/i,
  /flower\.thief/i,
  /mia-?maps/i,
  /mia maps/i,
  /mia rentals/i,
  /intern to impact/i,
  /interntoimpact/i,
  /artometrics\/tara/i,
  /tarabadhwar/i,
  /invoicing/i,
  /service-account/i,
  /id_rsa/i,
  /credentials\.json/i,
  /\.env\b/i,
  /@rainfallhealth/i,
  /kmcauliffe@/i,
  /\bcarrie-510519\b/i,
];

function fail(message) {
  console.error(message);
  process.exit(1);
}

function assertSafe(text, where) {
  for (const pattern of BANNED) {
    if (pattern.test(text)) {
      fail(`Inventory catalog check failed in ${where}; matched ${pattern}`);
    }
  }
}

const catalog = JSON.parse(readFileSync(CATALOG, "utf8"));
assertSafe(JSON.stringify(catalog), "data/inventory-catalog.json");

if (!catalog.meta || !Array.isArray(catalog.items) || !Array.isArray(catalog.tabs)) {
  fail("Catalog is missing meta, tabs, or items.");
}

const ids = new Set();
for (const item of catalog.items) {
  if (!item.id || !item.title || !item.tabId || !item.thumb) {
    fail(`Incomplete inventory item: ${item.id || item.title}`);
  }
  if (ids.has(item.id)) fail(`Duplicate inventory id: ${item.id}`);
  ids.add(item.id);
  if (item.titleOnly) {
    if (item.summary || item.publicUrl || item.download) {
      fail(`Title-only item leaked fields: ${item.id}`);
    }
  } else if (!item.download || !item.downloadName) {
    fail(`Full item missing download: ${item.id}`);
  }
  const thumbPath = join(ROOT, "public", item.thumb.replace(/^\//, ""));
  try {
    readFileSync(thumbPath);
  } catch {
    fail(`Missing thumb for ${item.id}: ${item.thumb}`);
  }
  if (item.download) {
    const filePath = join(ROOT, "public", item.download.replace(/^\//, ""));
    try {
      readFileSync(filePath);
    } catch {
      fail(`Missing download for ${item.id}: ${item.download}`);
    }
  }
  if (item.publicUrl) {
    let url;
    try {
      url = new URL(item.publicUrl);
    } catch {
      fail(`Bad publicUrl on ${item.id}`);
    }
    const host = url.hostname.toLowerCase();
    const ok =
      host === "github.com" ||
      host === "artometrics.com" ||
      host === "www.artometrics.com" ||
      host === "twilda.com" ||
      host === "www.twilda.com" ||
      host === "kylesmcauliffe.com" ||
      host === "www.kylesmcauliffe.com" ||
      host.endsWith(".web.app") ||
      host.endsWith(".firebaseapp.com");
    if (!ok) fail(`Disallowed publicUrl host on ${item.id}: ${host}`);
    const blocked = [
      "madison-510519.web.app",
      "invoicing-510519.web.app",
      "interntoimpact-510519.web.app",
      "tarabadhwar-510519.web.app",
      "mia-rentals-510519.web.app",
      "stratus-510519.web.app",
      "webfall.web.app",
      "crm-510519.web.app",
      "vault-510519.web.app",
      "mint-510519.web.app",
      "relay-510519.web.app",
      "loom-510519.web.app",
      "newsletter-510519.web.app",
      "priority-510519.web.app",
    ];
    if (blocked.includes(host)) fail(`Blocked host published on ${item.id}: ${host}`);
  }
}

for (const name of readdirSync(FILE_DIR)) {
  assertSafe(readFileSync(join(FILE_DIR, name), "utf8"), `files/${name}`);
}
for (const name of readdirSync(THUMB_DIR)) {
  if (name.endsWith(".svg")) {
    assertSafe(readFileSync(join(THUMB_DIR, name), "utf8"), `thumbs/${name}`);
  }
}

console.log(
  JSON.stringify(
    {
      ok: true,
      items: catalog.items.length,
      tabs: catalog.tabs.length,
      shownFull: catalog.meta.shownFull,
      shownTitleOnly: catalog.meta.shownTitleOnly,
      omittedTotal: catalog.meta.omittedTotal,
    },
    null,
    2,
  ),
);
