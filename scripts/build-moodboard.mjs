#!/usr/bin/env node
/**
 * Build src/generated/moodboard.json from content/moodboard/*.csv.
 *
 * Drop a new month in as another CSV. Rows with a verdict column are kept
 * only when the verdict is KEEP. A file with no verdict column (May 2025)
 * is already the kept list, so every row is included.
 *
 * Hand edits live in content/moodboard/edits.json and are reapplied on
 * every build: month notes, and per-item project / notes / sourceUrl / image.
 * Own work (credit contains "Artometrics / KSM") defaults project to
 * "Artometrics" until an edit sets project, including an explicit empty string.
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join, basename } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "content/moodboard");
const OUT = join(ROOT, "src/generated/moodboard.json");
const EDITS = join(SRC, "edits.json");

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  const source = text.replace(/^\uFEFF/, "");
  for (let i = 0; i < source.length; i += 1) {
    const char = source[i];
    if (quoted) {
      if (char === '"') {
        if (source[i + 1] === '"') {
          cell += '"';
          i += 1;
        } else {
          quoted = false;
        }
      } else {
        cell += char;
      }
      continue;
    }
    if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(cell);
      cell = "";
    } else if (char === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else if (char !== "\r") {
      cell += char;
    }
  }
  if (cell.length || row.length) {
    row.push(cell);
    rows.push(row);
  }
  return rows.filter((entry) => entry.some((value) => value.trim() !== ""));
}

function clean(value) {
  let text = String(value ?? "")
    .replace(/\u00a0/g, " ")
    .replace(/[\u200b\u200c\u200d]/g, "")
    .trim();
  if (
    text.length >= 2 &&
    ((text.startsWith('"') && text.endsWith('"')) ||
      (text.startsWith("'") && text.endsWith("'")))
  ) {
    text = text.slice(1, -1).trim();
  }
  return text.replace(/\s+/g, " ");
}

function monthLabel(month) {
  const [year, index] = month.split("-");
  const name = MONTH_NAMES[Number(index) - 1] ?? month;
  return `${name} ${year}`;
}

function captureFromFile(file) {
  const match = file.match(/^(\d{4})(\d{2})(\d{2})_(\d{2})(\d{2})(\d{2})(\d{3})/);
  if (!match) return null;
  const [, year, month, day, hour, minute, second, ms] = match;
  return {
    date: `${year}-${month}-${day}T${hour}:${minute}:${second}.${ms}`,
    month: `${year}-${month}`,
  };
}

function loadEdits() {
  if (!existsSync(EDITS)) {
    return { months: {}, items: {} };
  }
  const parsed = JSON.parse(readFileSync(EDITS, "utf8"));
  return {
    months: parsed.months && typeof parsed.months === "object" ? parsed.months : {},
    items: parsed.items && typeof parsed.items === "object" ? parsed.items : {},
  };
}

function rowObject(headers, cells) {
  const record = {};
  headers.forEach((header, index) => {
    record[header] = clean(cells[index] ?? "");
  });
  return record;
}

function titleOf(record) {
  return record.kept || record.what_kept || record.title || "";
}

function creditOf(record) {
  if (record.credit) return record.credit;
  return [record.creator_or_work, record.source_as_seen, record.license_note]
    .map((part) => clean(part))
    .filter(Boolean)
    .join("; ");
}

function typeOf(record) {
  const group = clean(record.group || "").toLowerCase();
  return group || "ungrouped";
}

const edits = loadEdits();
const files = readdirSync(SRC)
  .filter((name) => name.endsWith(".csv"))
  .sort();

if (!files.length) {
  console.error("[moodboard] no CSVs in content/moodboard");
  process.exit(1);
}

const items = [];
const seen = new Set();

for (const name of files) {
  const table = parseCsv(readFileSync(join(SRC, name), "utf8"));
  if (!table.length) continue;
  const headers = table[0].map((header) => clean(header).toLowerCase());
  const hasVerdict = headers.includes("verdict");
  let kept = 0;
  let skipped = 0;
  for (const cells of table.slice(1)) {
    const record = rowObject(headers, cells);
    if (hasVerdict && record.verdict.toUpperCase() !== "KEEP") {
      skipped += 1;
      continue;
    }
    const file = record.file;
    const capture = captureFromFile(file);
    const title = titleOf(record);
    const credit = creditOf(record);
    if (!file || !capture || !title || !credit) {
      console.error(`[moodboard] ${name} skipped a row missing file, date, title, or credit:`, record);
      process.exit(1);
    }
    let id = basename(file, ".png");
    if (seen.has(id)) {
      id = `${id}-${items.length}`;
    }
    seen.add(id);
    const isOwnWork = credit.includes("Artometrics / KSM");
    const patch = edits.items[id] && typeof edits.items[id] === "object" ? edits.items[id] : {};
    const project = Object.prototype.hasOwnProperty.call(patch, "project")
      ? clean(patch.project)
      : isOwnWork
        ? "Artometrics"
        : "";
    items.push({
      id,
      date: capture.date,
      month: capture.month,
      title,
      type: typeOf(record),
      project,
      credit,
      sourceUrl: clean(patch.sourceUrl ?? ""),
      notes: clean(patch.notes ?? ""),
      image: clean(patch.image ?? ""),
      isOwnWork,
      file,
    });
    kept += 1;
  }
  console.log(
    `[moodboard] ${name}: ${kept} kept${hasVerdict ? `, ${skipped} skipped` : " (no verdict column)"}`,
  );
}

items.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : a.id.localeCompare(b.id)));

const monthIds = [...new Set(items.map((item) => item.month))];
const months = monthIds.map((id) => ({
  id,
  label: monthLabel(id),
  note: clean(edits.months[id] ?? ""),
  count: items.filter((item) => item.month === id).length,
}));

const payload = {
  generatedFrom: "content/moodboard",
  months,
  items,
};

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JSON.stringify(payload));

const own = items.filter((item) => item.isOwnWork).length;
console.log(
  `[moodboard] wrote ${items.length} items, ${months.length} months, ${own} Artometrics / KSM pieces → src/generated/moodboard.json`,
);
