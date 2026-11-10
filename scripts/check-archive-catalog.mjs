#!/usr/bin/env node
/**
 * Fail the build if the public archive leaks private URLs, excluded names,
 * or items that are missing a hosted thumbnail and download.
 */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const catalog = JSON.parse(readFileSync(join(ROOT, "data/archive-catalog.json"), "utf8"));

const banned = [
  /drive\.google\.com/i,
  /docs\.google\.com/i,
  /cursor\.com\/canvas/i,
  /\/workspace\//i,
  /my drive\//i,
  /exclude_from_public/i,
  /sensitivity_reason/i,
  /rainfall/i,
  /\bmadison\b/i,
  /mia-maps/i,
  /mia maps/i,
  /intern to impact/i,
  /interntoimpact/i,
  /artometrics\/tara/i,
  /\btara\b/i,
  /invoicing/i,
  /tarabadhwar/i,
  /service-account/i,
  /id_rsa/i,
  /credentials\.json/i,
  /\.env\b/i,
  /password/i,
  /api[_-]?key/i,
];

const textExts = new Set([".txt", ".svg", ".md", ".csv", ".json", ".html", ".htm", ".css", ".xml", ".tsv", ".vtt"]);

let failed = false;
function fail(message) {
  failed = true;
  console.error(message);
}

function scanText(text, where) {
  for (const pattern of banned) {
    if (pattern.test(text)) fail(`${where} matched ${pattern}`);
  }
}

function isTextAsset(filePath) {
  return textExts.has(extname(filePath).toLowerCase());
}

function scanAsset(filePath, where) {
  if (!existsSync(filePath)) {
    fail(`Missing file ${where}`);
    return;
  }
  if (!isTextAsset(filePath)) return;
  scanText(readFileSync(filePath, "utf8"), where);
}

scanText(JSON.stringify(catalog), "catalog");

const { meta, projects, items } = catalog;
if (meta.included + meta.excludedFlagged + meta.excludedExtra !== meta.sourceItemCount) {
  fail("Included + excluded counts do not add up to the source inventory.");
}
if (meta.excludedFlagged !== 54) fail(`Expected 54 flagged exclusions, found ${meta.excludedFlagged}.`);
if (meta.excludedExtra < 3) fail("Expected the extra held-back records to stay out.");
if (meta.itemPages !== items.length) fail("itemPages does not match items.");
if (meta.projectPages !== projects.length) fail("projectPages does not match projects.");

const projectIds = new Set(projects.map((project) => project.id));
const itemIds = new Set(items.map((item) => item.id));
if (itemIds.size !== items.length) fail("Duplicate item ids.");

const deny = ["madison", "rainfall", "invoicing", "mia-rentals", "mia-maps", "tarabadhwar", "interntoimpact"];

function checkUrl(href, where) {
  let url;
  try {
    url = new URL(href);
  } catch {
    fail(`Bad URL in ${where}: ${href}`);
    return;
  }
  const host = url.hostname.toLowerCase();
  const allowed =
    host === "github.com" ||
    host === "artometrics.com" ||
    host === "www.artometrics.com" ||
    host === "kylesmcauliffe.com" ||
    host === "www.kylesmcauliffe.com" ||
    host === "twilda.com" ||
    host === "www.twilda.com" ||
    host.endsWith(".web.app") ||
    host.endsWith(".firebaseapp.com");
  if (!allowed || deny.some((part) => host.includes(part))) fail(`Disallowed public URL in ${where}: ${href}`);
}

function publicPath(href, where, kind) {
  const prefix = kind === "thumb" ? "/archive/thumbs/" : "/archive/files/";
  if (!href?.startsWith(prefix)) {
    fail(`${where} is missing a hosted ${kind}.`);
    return null;
  }
  return join(ROOT, "public", href.replace(/^\//, ""));
}

for (const item of items) {
  if (!projectIds.has(item.projectId)) fail(`Item ${item.id} has no project.`);
  if (item.articleId && !itemIds.has(item.articleId)) fail(`Item ${item.id} has a missing article.`);
  if (!item.summary || !item.title || !item.category) fail(`Item ${item.id} is missing title, summary, or category.`);
  const thumbPath = publicPath(item.thumb, item.id, "thumb");
  const filePath = publicPath(item.download, item.id, "file");
  if (thumbPath) scanAsset(thumbPath, item.thumb);
  if (filePath) scanAsset(filePath, item.download);
  if (item.publicUrl) checkUrl(item.publicUrl, item.id);
  for (const file of item.files || []) {
    const extraPath = publicPath(file.download, `${item.id} file ${file.name}`, "file");
    if (extraPath) scanAsset(extraPath, file.download);
  }
  for (const child of item.children || []) {
    if (child.download) {
      const childPath = publicPath(child.download, `${item.id} child ${child.title}`, "file");
      if (childPath) scanAsset(childPath, child.download);
    }
  }
}

for (const project of projects) {
  const thumbPath = publicPath(project.thumb, project.id, "thumb");
  const filePath = publicPath(project.download, project.id, "file");
  if (thumbPath) scanAsset(thumbPath, project.thumb);
  if (filePath) scanAsset(filePath, project.download);
}

const hosted = readdirSync(join(ROOT, "public/archive/files")).length;
if (hosted < items.length) fail("Not enough hosted download files.");
const thumbBytes = statSync(join(ROOT, "public", items[0].thumb.replace(/^\//, ""))).size;
if (thumbBytes < 200) fail("Thumbnail looks empty.");

if (failed) process.exit(1);
const realThumbs = items.filter((item) => item.thumb.endsWith(".webp")).length;
const realFiles = items.filter((item) => !item.download.endsWith(".txt")).length;
console.log(
  `Archive catalog ok: ${meta.included} included, ${meta.itemPages} item pages, ${meta.rolledFiles} files rolled into parents, ${realThumbs} real thumbs, ${realFiles} real primary downloads.`,
);
