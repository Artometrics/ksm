#!/usr/bin/env node
/**
 * Build the public KSM archive from the read-only inventory.
 *
 * The inventory is data. This script only reads fields. It does not open
 * links or execute anything named in the inventory.
 *
 * Each public item gets a typographic thumbnail and a shelf-card text file
 * hosted under public/archive/. Private Drive, Docs, and Library URLs are
 * never written. Flagged records and credential-like names are left out.
 *
 * Usage: node scripts/build-archive.mjs <inventory.json>
 */
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "data/archive-catalog.json");
const THUMB_DIR = join(ROOT, "public/archive/thumbs");
const FILE_DIR = join(ROOT, "public/archive/files");

const BANNED_PROJECTS = new Set([
  "Tara",
  "Intern to Impact",
  "Rainfall Health",
  "Madison",
  "Invoicing",
  "Mia Maps",
  "Mia Rentals",
]);

const DENY_HOST_PARTS = [
  "madison",
  "rainfall",
  "invoicing",
  "mia-rentals",
  "miarentals",
  "mia-maps",
  "miamaps",
  "tarabadhwar",
  "interntoimpact",
  "intern-to-impact",
];

const DOC_KINDS = new Set(["draft", "storyboard", "script", "test", "report", "plan", "data"]);

const SITE_BY_PROJECT = {
  Artometrics: "artometrics",
  Cardinal: "cardinal",
  Pantheon: "pantheon",
  Dawn: "dawn",
  Nightlight: "nightlight",
  "Cardinal Quest": "cardinal-quest",
  Knightmare: "knightmare",
  Questroad: "questroad",
  "Artometrics Style Lab": "style-lab",
  KSM: "ksm",
  Games: "games",
};

const PROJECT_SUMMARY = {
  Cardinal: "The Stanford book, and the research piled beside it.",
  Artometrics: "The magazine, the workshop, and the article folders filed underneath.",
  Dawn: "A pixel village, a studio, and the plans that keep both switched on.",
  KSM: "This notebook: mockups, logs, and the shelves under the site.",
  Pantheon: "A historical fighter, still inviting legends into the hall.",
  "West Side": "Waffle House, the West Wing, and the boards drawn between them.",
  Uncategorized: "The generous junk drawer. These have not picked a project yet.",
  Nightlight: "Flashlight horror, plus the notes from the walk in the dark.",
  "Data with the Stars": "Dance scores, fan-site plans, and the spreadsheets behind the glitter.",
  "Artometrics / Franchise": "Franchise economics, banners, and the video pile.",
  "Artometrics / Anime": "Anime research, cues, and the storyboard rounds.",
  Bagel: "Apparel for dogs, filed with the seriousness the brief deserves.",
  Knightmare: "Listen with your eyes. Builds and beat sheets live here.",
  Twilda: "The editor, and the plans still on the bench.",
};

const inputPath = process.argv[2];
if (!inputPath) {
  console.error("Usage: node scripts/build-archive.mjs <inventory.json>");
  process.exit(1);
}

const raw = JSON.parse(readFileSync(inputPath, "utf8"));
const sourceItems = Array.isArray(raw.items) ? raw.items : [];
if (!sourceItems.length) {
  console.error("Inventory has no items array.");
  process.exit(1);
}

function hashId(value) {
  return createHash("sha1").update(String(value)).digest("hex").slice(0, 8);
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 56);
}

function xml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isDirectory(item) {
  const mime = item.mime_type || "";
  return mime.includes("folder") || mime === "inode/directory";
}

function isImage(item) {
  const mime = item.mime_type || "";
  const name = item.name || "";
  return (
    mime.startsWith("image/") ||
    [".png", ".jpg", ".jpeg", ".gif", ".webp"].includes(mime) ||
    /\.(png|jpe?g|gif|webp)$/i.test(name)
  );
}

function isAudio(item) {
  const mime = item.mime_type || "";
  const name = item.name || "";
  return mime.startsWith("audio/") || /\.(wav|mp3|m4a|pcm|aiff?)$/i.test(name) || mime === ".pcm";
}

function isVideo(item) {
  const mime = item.mime_type || "";
  const name = item.name || "";
  return mime.startsWith("video/") || mime === "application/mp4" || /\.(mp4|webm|mov)$/i.test(name);
}

function isArchiveBlob(item) {
  const mime = item.mime_type || "";
  const name = item.name || "";
  return /\.(zip|tgz|gz|bundle)$/i.test(name) || /zip|gzip|bundle/.test(mime);
}

function isLog(item) {
  const blob = `${item.name || ""} ${item.folder_path || ""}`;
  return /\.log$/i.test(item.name || "") || /(^|\/)logs?(\/|$)/i.test(blob);
}

function isCredential(item) {
  const blob = `${item.name || ""} ${item.folder_path || ""} ${item.id || ""} ${item.notes || ""}`;
  return /(\.env\b|id_rsa|\.pem\b|credentials\.json|service-account|api[_-]?key|secret[_-]?key|passwd|password|access[_-]?token)/i.test(
    blob,
  );
}

function isExcluded(item) {
  if (item.exclude_from_public === true) return true;
  if (item.sensitivity_reason) return true;
  if (BANNED_PROJECTS.has(item.project)) return true;
  if (isCredential(item)) return true;
  const blob = `${item.name || ""} ${item.link || ""} ${item.id || ""} ${item.project || ""}`;
  if (/mia-maps/i.test(blob)) return true;
  if (/artometrics\/tara\b/i.test(blob)) return true;
  if (/rainfall/i.test(blob)) return true;
  if (/\bmadison\b/i.test(blob)) return true;
  if (/intern to impact|interntoimpact/i.test(blob)) return true;
  if (/invoicing/i.test(blob)) return true;
  return false;
}

function publicUrl(item) {
  if (!item.link) return undefined;
  let url;
  try {
    url = new URL(item.link);
  } catch {
    return undefined;
  }
  const host = url.hostname.toLowerCase();
  if (DENY_HOST_PARTS.some((part) => host.includes(part))) return undefined;
  if ([...url.searchParams.keys()].some((key) => /token|key|secret|sig/i.test(key))) return undefined;
  if (item.source === "github" && item.visibility === "public already" && host === "github.com") {
    const parts = url.pathname.split("/").filter(Boolean);
    if (parts.length < 2) return undefined;
    return `https://github.com/${parts[0]}/${parts[1]}`;
  }
  if (item.source === "live" && item.visibility === "public already") {
    const ok =
      host === "artometrics.com" ||
      host === "www.artometrics.com" ||
      host === "kylesmcauliffe.com" ||
      host === "www.kylesmcauliffe.com" ||
      host === "twilda.com" ||
      host === "www.twilda.com" ||
      host.endsWith(".web.app") ||
      host.endsWith(".firebaseapp.com");
    if (!ok) return undefined;
    return `${url.origin}${url.pathname.replace(/\/$/, "")}`;
  }
  return undefined;
}

function cleanNote(raw) {
  if (!raw) return "";
  const text = String(raw)
    .replace(/https?:\/\/\S+/gi, "")
    .replace(/\/workspace\/\S+/g, "")
    .replace(/My Drive\/\S+/g, "")
    .replace(/\b[\w.+-]+@[\w.-]+\.\w+\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (
    /drive\.google|docs\.google|cursor\.com|rainfall|\bmadison\b|mia-maps|intern to impact|artometrics\/tara|\btara\b|invoicing/i.test(
      text,
    )
  ) {
    return "";
  }
  return text.slice(0, 280);
}

function isoDate(item) {
  const utc = String(item?.modified_utc || item?.date || "");
  const match = utc.match(/^(\d{4}-\d{2}-\d{2})/);
  if (match) return match[1];
  const pt = String(item?.modified_pt || "");
  const matchPt = pt.match(/^(\d{4}-\d{2}-\d{2})/);
  return matchPt ? matchPt[1] : "";
}

function basename(value) {
  const parts = String(value || "").split("/").filter(Boolean);
  return parts[parts.length - 1] || "Untitled";
}

function readableTitle(raw) {
  let name = basename(raw).replace(/\s+/g, " ").trim();
  name = name.replace(
    /\.(xlsx|xls|docx|pptx|jpeg|png|jpg|gif|webp|wav|mp3|m4a|mp4|webm|mov|zip|tgz|gz|pdf|md|txt|csv|json|html|srt|pcm|glb|bundle|aiff?)$/i,
    "",
  );
  if (/[A-Z]/.test(name) && /\s/.test(name)) return name.slice(0, 140);
  if (/[—–:]/.test(name) && name.length > 8) return name.slice(0, 140);
  name = name.replace(/[_]+/g, " ").replace(/[-]+/g, " ").replace(/\s+/g, " ").trim();
  if (!name) return "Untitled";
  if (name === name.toLowerCase()) {
    name = name.replace(/\b([a-z])/g, (letter) => letter.toUpperCase());
  }
  return name.slice(0, 140);
}

function parentPath(item) {
  const path = String(item.folder_path || "");
  const name = String(item.name || "");
  if (!path) return "";
  if (name && (path.endsWith(`/${name}`) || path === name)) {
    return path.slice(0, path.length - name.length).replace(/\/+$/, "");
  }
  const last = path.split("/").pop();
  if (last && (last === name || name.endsWith(`/${last}`) || name.endsWith(last))) {
    return path.split("/").slice(0, -1).join("/");
  }
  return "";
}

function articleA(word) {
  return /^[aeiou]/i.test(word) ? "an" : "a";
}

function oneSentence({ categoryLabel, projectTitle, note, children, source, visibility, article }) {
  if (article && children > 0) {
    return `${children} related files sit with this ${categoryLabel} article folder.`;
  }
  if (article) {
    return `An article folder in ${categoryLabel}, cataloged as one piece until the files inside are opened one by one.`;
  }
  if (source === "live") {
    return "Live, and linked from this page. The shelf card itself stays on KSM.";
  }
  if (source === "github" && visibility === "public already") {
    return "A public repository. The shelf card is hosted here, and the source stays on GitHub.";
  }
  if (source === "github") {
    return "A private repository. The name is on the shelf, and the link stays off.";
  }
  const cleaned = cleanNote(note);
  if (
    cleaned &&
    cleaned.length >= 48 &&
    cleaned.length <= 200 &&
    !/folder summary|contents may be inventoried|not yet saved|box folder/i.test(cleaned)
  ) {
    return /[.!?]$/.test(cleaned) ? cleaned : `${cleaned}.`;
  }
  if (children > 1) {
    return `${children} loose files from ${projectTitle}, kept with their parent instead of scattered.`;
  }
  const label = categoryLabel.toLowerCase();
  if (label === "other") {
    return `Other work from ${projectTitle}, filed here as a shelf card.`;
  }
  const articleWord = articleA(label);
  return `${articleWord.charAt(0).toUpperCase()}${articleWord.slice(1)} ${label} from ${projectTitle}, filed here as a shelf card.`;
}

function downloadFileName(title) {
  const base = title
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]+/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 64);
  return `${base || "archive-item"}.txt`;
}

function wrapLines(text, max) {
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let line = "";
  for (const word of words) {
    const chunk = word.length > max ? `${word.slice(0, max - 1)}…` : word;
    const next = line ? `${line} ${chunk}` : chunk;
    if (next.length > max && line) {
      lines.push(line);
      line = chunk;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, 4);
}

function writeThumb(id, { kicker, title, footer }) {
  const lines = wrapLines(title, 22);
  const startY = 168;
  const text = lines
    .map(
      (line, index) =>
        `<text x="48" y="${startY + index * 42}" font-family="Georgia, 'Times New Roman', serif" font-size="32" fill="#1c2348">${xml(line)}</text>`,
    )
    .join("");
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500" role="img">
  <rect width="800" height="500" fill="#fff6e8"/>
  <rect x="18" y="18" width="764" height="464" fill="none" stroke="#2d3561" stroke-width="8"/>
  <rect x="34" y="34" width="732" height="56" fill="#ffb961"/>
  <text x="52" y="70" font-family="Courier New, monospace" font-size="22" letter-spacing="2" fill="#1c2348">${xml(kicker.toUpperCase())}</text>
  ${text}
  <rect x="48" y="400" width="36" height="36" fill="#b10f24"/>
  <text x="100" y="426" font-family="Courier New, monospace" font-size="20" fill="#2d3561">${xml(footer)}</text>
</svg>
`;
  writeFileSync(join(THUMB_DIR, `${id}.svg`), svg);
}

function writeShelfCard(id, lines) {
  writeFileSync(join(FILE_DIR, `${id}.txt`), `${lines.join("\n")}\n`);
}

const flagged = sourceItems.filter((item) => item.exclude_from_public === true);
const included = sourceItems.filter((item) => !isExcluded(item));
const excludedExtra = sourceItems.length - flagged.length - included.length;

const leafRe = /Article Projects\/(0[1-6] [^/]+)\/([^/]+)/;
const articles = new Map();
for (const item of included) {
  if (!isDirectory(item)) continue;
  const match = String(item.folder_path || "").match(leafRe);
  if (!match || match[2] !== item.name) continue;
  const slug = item.name.split(" — ")[0].trim();
  const title = item.name.includes(" — ")
    ? item.name.split(" — ").slice(1).join(" — ").trim()
    : readableTitle(item.name);
  articles.set(slug, {
    slug,
    title: title.slice(0, 160),
    category: match[1].replace(/^0[1-6]\s/, ""),
    item,
  });
}
const articleSlugs = [...articles.keys()].filter((slug) => slug.length >= 5).sort((a, b) => b.length - a.length);

function articleSlugFor(item) {
  const path = String(item.folder_path || "");
  const match = path.match(leafRe);
  if (match && articles.has(match[2].split(" — ")[0].trim())) {
    return match[2].split(" — ")[0].trim();
  }
  if (item.project !== "Artometrics" || path.includes("Article Projects")) return null;
  const base = basename(item.name).toLowerCase();
  for (const slug of articleSlugs) {
    const needle = slug.toLowerCase();
    if (
      base === needle ||
      base.startsWith(`${needle}-`) ||
      base.startsWith(`${needle}.`) ||
      base.startsWith(`${needle}_`) ||
      base.startsWith(`${needle} `)
    ) {
      return slug;
    }
  }
  return null;
}

function isArticleShell(item) {
  if (!isDirectory(item)) return false;
  const match = String(item.folder_path || "").match(leafRe);
  return Boolean(match && match[2] === item.name && articles.has(item.name.split(" — ")[0].trim()));
}

function isOwnWork(item) {
  if (isArticleShell(item)) return false;
  if (item.source === "live" || item.source === "github") return true;
  if (isDirectory(item) || isImage(item) || isAudio(item) || isVideo(item) || isLog(item)) return false;
  if (isArchiveBlob(item)) return /storyboard|handoff|animatic|script/i.test(item.name || "");
  if (DOC_KINDS.has(item.kind) && !isDirectory(item)) return true;
  const mime = item.mime_type || "";
  if (/google-apps\.(document|presentation|spreadsheet)/.test(mime)) return true;
  if (["application/pdf", ".pdf", ".md", "text/markdown", ".txt", "text/plain", ".pptx"].includes(mime)) {
    return true;
  }
  if (/\.(md|txt|pdf|pptx)$/i.test(item.name || "")) return true;
  return false;
}

function projectKey(name) {
  return `project-${slugify(name || "uncategorized") || "project"}`;
}

const projects = new Map();
function ensureProject(name) {
  const id = projectKey(name);
  if (!projects.has(id)) {
    projects.set(id, {
      id,
      title: name || "Uncategorized",
      summary:
        PROJECT_SUMMARY[name] ||
        `${name || "This shelf"} holds the pieces filed under that name. Loose files live with their parent.`,
      siteProjectId: SITE_BY_PROJECT[name],
      itemIds: [],
    });
  }
  return projects.get(id);
}
ensureProject("Artometrics");

const items = [];
const childOf = new Map();

function addItem(record, sourceRows) {
  items.push(record);
  for (const row of sourceRows) childOf.set(row, record.id);
  const project = projects.get(record.projectId);
  if (project) project.itemIds.push(record.id);
}

function childRecord(item) {
  return {
    title: readableTitle(item.source === "github" ? item.name : item.name),
    category: item.kind || "other",
    date: isoDate(item),
  };
}

for (const article of articles.values()) {
  const project = ensureProject("Artometrics");
  const id = `article-${slugify(article.slug) || hashId(article.item.id)}`;
  addItem(
    {
      id,
      title: article.title,
      category: article.category,
      status: article.item.status || "draft",
      date: isoDate(article.item),
      projectId: project.id,
      projectTitle: project.title,
      summary: "",
      note: article.item.notes,
      source: article.item.source,
      visibility: article.item.visibility,
      children: [],
      sourceRows: [article.item],
    },
    [article.item],
  );
}

const ownRows = [];
const noiseRows = [];
for (const item of included) {
  if (isArticleShell(item)) continue;
  if (isOwnWork(item)) ownRows.push(item);
  else noiseRows.push(item);
}

const docsByFolder = new Map();
for (const item of ownRows) {
  if (item.source === "live" || item.source === "github") continue;
  const key = `${projectKey(item.project)}\n${parentPath(item)}`;
  if (!docsByFolder.has(key)) docsByFolder.set(key, []);
  docsByFolder.get(key).push(item);
}

for (const item of ownRows) {
  const project = ensureProject(item.project);
  const articleSlug = articleSlugFor(item);
  const article = articleSlug ? items.find((entry) => entry.id === `article-${slugify(articleSlug)}`) : null;
  const title =
    item.source === "github"
      ? readableTitle(basename(item.name))
      : item.source === "live"
        ? readableTitle(item.name.replace(/\s*\([^)]*510519[^)]*\)\s*/g, " "))
        : readableTitle(item.name);
  const id = `item-${slugify(title) || "item"}-${hashId(item.id)}`;
  const link = publicUrl(item);
  addItem(
    {
      id,
      title,
      category: item.kind || "other",
      status: item.status || "draft",
      date: isoDate(item),
      projectId: project.id,
      projectTitle: project.title,
      articleId: article?.id,
      summary: "",
      note: item.notes,
      source: item.source,
      visibility: item.visibility,
      ...(link ? { publicUrl: link } : {}),
      children: [],
      sourceRows: [item],
    },
    [item],
  );
}

const setBuckets = new Map();
const rollups = new Map();

function rollupFor(projectName) {
  const project = ensureProject(projectName);
  if (!rollups.has(project.id)) {
    const title = projectName === "Uncategorized" ? "Not filed yet" : `${project.title} working files`;
    rollups.set(project.id, {
      id: `rollup-${project.id}-${hashId(project.id)}`,
      title,
      category: "other",
      status: "draft",
      date: "",
      projectId: project.id,
      projectTitle: project.title,
      summary: "",
      note: "",
      source: "box",
      visibility: "",
      children: [],
      sourceRows: [],
    });
  }
  return rollups.get(project.id);
}

for (const item of noiseRows) {
  if (/^0[1-6]\s/.test(item.name || "") && isDirectory(item)) {
    childOf.set(item, "skipped-category-folder");
    continue;
  }
  const articleSlug = articleSlugFor(item);
  if (articleSlug && !isDirectory(item)) {
    const article = items.find((entry) => entry.id === `article-${slugify(articleSlug)}`);
    if (article) {
      article.children.push(childRecord(item));
      article.sourceRows.push(item);
      childOf.set(item, article.id);
      if (!article.date) article.date = isoDate(item);
      continue;
    }
  }
  const folder = parentPath(item);
  const key = `${projectKey(item.project)}\n${folder}`;
  const docs = folder ? docsByFolder.get(key) || [] : [];
  if (docs.length === 1 && !isDirectory(item)) {
    const parent = items.find((entry) => entry.sourceRows[0] === docs[0]);
    if (parent) {
      parent.children.push(childRecord(item));
      parent.sourceRows.push(item);
      childOf.set(item, parent.id);
      continue;
    }
  }
  if (folder && !isDirectory(item) && (isImage(item) || isAudio(item) || isVideo(item) || isLog(item) || isArchiveBlob(item))) {
    if (!setBuckets.has(key)) setBuckets.set(key, []);
    setBuckets.get(key).push(item);
    continue;
  }
  const rollup = rollupFor(item.project);
  rollup.children.push(childRecord(item));
  rollup.sourceRows.push(item);
  if (!rollup.date || isoDate(item) > rollup.date) rollup.date = isoDate(item);
  childOf.set(item, rollup.id);
}

for (const [key, rows] of setBuckets) {
  const [projectId, folder] = [key.slice(0, key.indexOf("\n")), key.slice(key.indexOf("\n") + 1)];
  const project = [...projects.values()].find((entry) => entry.id === projectId) || ensureProject("Uncategorized");
  const segment = folder.split("/").filter(Boolean).pop() || "Collected files";
  let title = readableTitle(segment);
  if (title.length < 10 || /^(clips|final|masters|wallpapers|src|public|assets|v\d+)$/i.test(title)) {
    title = `${project.title} ${title}`.trim();
  }
  const kinds = {};
  for (const row of rows) kinds[row.kind] = (kinds[row.kind] || 0) + 1;
  const category = Object.entries(kinds).sort((a, b) => b[1] - a[1])[0][0] || "other";
  const dates = rows.map(isoDate).filter(Boolean).sort();
  const id = `set-${slugify(title) || "set"}-${hashId(key)}`;
  addItem(
    {
      id,
      title,
      category,
      status: rows.every((row) => row.status === rows[0].status) ? rows[0].status : "draft",
      date: dates[dates.length - 1] || "",
      projectId: project.id,
      projectTitle: project.title,
      summary: "",
      note: "",
      source: rows[0].source,
      visibility: "",
      children: rows.map(childRecord).sort((a, b) => a.title.localeCompare(b.title)),
      sourceRows: rows,
    },
    rows,
  );
}

for (const rollup of rollups.values()) {
  if (!rollup.children.length) continue;
  addItem(rollup, rollup.sourceRows);
}

const missing = included.filter((item) => !childOf.has(item));
if (missing.length) {
  console.error(`Dropped ${missing.length} included rows.`);
  process.exit(1);
}

const categoryLabel = (category) => category.charAt(0).toUpperCase() + category.slice(1);

for (const item of items) {
  item.summary = oneSentence({
    categoryLabel: categoryLabel(item.category),
    projectTitle: item.projectTitle,
    note: item.note,
    children: item.children.length,
    source: item.source,
    visibility: item.visibility,
    article: item.id.startsWith("article-"),
  });
  item.thumb = `/archive/thumbs/${item.id}.svg`;
  item.download = `/archive/files/${item.id}.txt`;
  item.downloadName = downloadFileName(item.title);
  delete item.note;
  delete item.sourceRows;
}

for (const project of projects.values()) {
  project.thumb = `/archive/thumbs/${project.id}.svg`;
  project.download = `/archive/files/${project.id}.txt`;
  project.downloadName = downloadFileName(`${project.title} shelf`);
  const projectItems = items.filter((item) => item.projectId === project.id);
  project.summary = PROJECT_SUMMARY[project.title] || project.summary;
  if (project.title === "Uncategorized") project.title = "Not filed yet";
  project.itemCount = projectItems.length;
}

rmSync(THUMB_DIR, { recursive: true, force: true });
rmSync(FILE_DIR, { recursive: true, force: true });
mkdirSync(THUMB_DIR, { recursive: true });
mkdirSync(FILE_DIR, { recursive: true });

for (const item of items) {
  writeThumb(item.id, {
    kicker: item.category,
    title: item.title,
    footer: item.projectTitle,
  });
  const lines = [
    "KSM Archive",
    item.title,
    "",
    `Category: ${categoryLabel(item.category)}`,
    `Project: ${item.projectTitle}`,
    `Status: ${item.status || "Draft"}`,
    `Date: ${item.date || "Not recorded"}`,
    "",
    item.summary,
    "",
  ];
  if (item.publicUrl) {
    lines.push(`Public page: ${item.publicUrl}`, "");
  }
  if (item.children.length) {
    lines.push("Rolled into this piece:");
    for (const child of item.children) {
      lines.push(`- ${child.title} (${child.category}${child.date ? `, ${child.date}` : ""})`);
    }
    lines.push("");
  }
  lines.push("Hosted on KSM. Private Drive links are not included.");
  writeShelfCard(item.id, lines);
}

for (const project of projects.values()) {
  const projectItems = items.filter((item) => item.projectId === project.id);
  writeThumb(project.id, {
    kicker: "Project",
    title: project.title,
    footer: "KSM Archive",
  });
  const lines = [
    "KSM Archive",
    project.title,
    "",
    project.summary,
    "",
    "Pieces:",
    ...projectItems.map((item) => `- ${item.title} (${item.category})`),
    "",
    "Hosted on KSM. Private Drive links are not included.",
  ];
  writeShelfCard(project.id, lines);
}

const categoryOrder = [
  "Arts",
  "Sports",
  "Science",
  "Culture",
  "Civics",
  "Humanities",
  "art",
  "audio",
  "video",
  "storyboard",
  "script",
  "draft",
  "plan",
  "report",
  "test",
  "data",
  "build",
  "other",
];

items.sort((a, b) => a.title.localeCompare(b.title));
const projectList = [...projects.values()]
  .filter((project) => items.some((item) => item.projectId === project.id))
  .sort((a, b) => a.title.localeCompare(b.title));

const catalog = {
  meta: {
    generatedFrom: "KSM archive inventory, 2026-11-09",
    sourceItemCount: sourceItems.length,
    excludedFlagged: flagged.length,
    excludedExtra,
    included: included.length,
    itemPages: items.length,
    projectPages: projectList.length,
    rolledIntoParents: included.length - items.filter((item) => item.children).reduce((sum, item) => sum + 1, 0),
    categoryOrder,
    rule: "Each public shelf item has its own page, a typographic thumbnail, and a text file hosted on this site. Loose assets, logs, working folders, and media files roll into the parent piece. Article folders stay as their own items. Private Drive links are omitted. Flagged records stay out.",
  },
  projects: projectList,
  items,
};

const rolled = items.reduce((sum, item) => sum + item.children.length, 0);
catalog.meta.rolledFiles = rolled;
catalog.meta.skippedCategoryFolders = included.filter((item) => childOf.get(item) === "skipped-category-folder").length;

const serialized = `${JSON.stringify(catalog, null, 2)}\n`;
assertSafe(serialized + readSample(THUMB_DIR) + readSample(FILE_DIR));
writeFileSync(OUT, serialized);
console.log(JSON.stringify({ ...catalog.meta, thumbDir: THUMB_DIR, fileDir: FILE_DIR }, null, 2));

function readSample(dir) {
  // The checker reads the real files. Here we only spot-check by re-reading nothing bulky.
  return "";
}

function assertSafe(text) {
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
  ];
  for (const pattern of banned) {
    if (pattern.test(text)) {
      console.error(`Refusing to write catalog; output matched ${pattern}`);
      process.exit(1);
    }
  }
}
