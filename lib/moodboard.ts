import board from "@/src/generated/moodboard.json";

export type MoodItem = {
  id: string;
  date: string;
  month: string;
  title: string;
  type: string;
  project: string;
  credit: string;
  sourceUrl: string;
  notes: string;
  image?: string;
  isOwnWork: boolean;
  file: string;
};

export type MoodMonth = {
  id: string;
  label: string;
  note: string;
  count: number;
};

export type MoodView = "journal" | "library";
export type MoodArrange = "dates" | "types" | "projects";

const data = board as { months: MoodMonth[]; items: MoodItem[] };

export const MOOD_MONTHS: MoodMonth[] = data.months;
export const MOOD_ITEMS: MoodItem[] = data.items;

const TYPE_LABELS: Record<string, string> = {
  typography: "Typography",
  portrait: "Portraits",
  identity: "Identity",
  photography: "Photography",
  characters: "Characters",
  "print-merch": "Print & merch",
  product: "Product",
  posters: "Posters",
  reference: "Reference",
  web: "Web",
  editorial: "Editorial",
  "ui-map": "Maps",
  ungrouped: "Ungrouped",
};

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

export function typeLabel(type: string) {
  return (
    TYPE_LABELS[type] ??
    type.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase())
  );
}

export function projectLabel(project: string) {
  return project.trim() ? project : "No project";
}

export function projectKey(project: string) {
  return project.trim() ? project : "__none";
}

export function monthLabel(month: string) {
  const known = MOOD_MONTHS.find((entry) => entry.id === month);
  if (known) return known.label;
  const [year, index] = month.split("-");
  const name = MONTH_NAMES[Number(index) - 1] ?? month;
  return `${name} ${year}`;
}

/** Capture clock is the timestamp encoded in the screenshot filename, not UTC. */
export function formatCapture(date: string, withTime = false) {
  const [dayPart, timePart] = date.split("T");
  const [year, month, day] = dayPart.split("-");
  const label = `${MONTH_NAMES[Number(month) - 1] ?? month} ${Number(day)}, ${year}`;
  if (!withTime || !timePart) return label;
  const [hourText, minute] = timePart.split(":");
  const hour = Number(hourText);
  const suffix = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;
  return `${label}, ${hour12}:${minute} ${suffix}`;
}

export type MoodFilters = {
  month: string;
  type: string;
  project: string;
};

export function filterItems(items: MoodItem[], filters: MoodFilters) {
  return items.filter((item) => {
    if (filters.month !== "all" && item.month !== filters.month) return false;
    if (filters.type !== "all" && item.type !== filters.type) return false;
    if (filters.project !== "all" && projectKey(item.project) !== filters.project) {
      return false;
    }
    return true;
  });
}

export type MoodGroup = {
  id: string;
  label: string;
  meta: string;
  note: string;
  items: MoodItem[];
};

export function journalGroups(items: MoodItem[], months: MoodMonth[]): MoodGroup[] {
  return months
    .map((month) => ({
      id: month.id,
      label: month.label,
      meta: "",
      note: month.note,
      items: items.filter((item) => item.month === month.id),
    }))
    .filter((group) => group.items.length > 0)
    .map((group) => ({ ...group, meta: String(group.items.length) }));
}

export function libraryGroups(items: MoodItem[], arrange: MoodArrange): MoodGroup[] {
  const buckets = new Map<string, MoodItem[]>();
  const labels = new Map<string, string>();
  for (const item of items) {
    const id =
      arrange === "dates"
        ? item.month
        : arrange === "types"
          ? item.type
          : projectKey(item.project);
    const label =
      arrange === "dates"
        ? monthLabel(item.month)
        : arrange === "types"
          ? typeLabel(item.type)
          : projectLabel(item.project);
    const list = buckets.get(id);
    if (list) list.push(item);
    else buckets.set(id, [item]);
    labels.set(id, label);
  }
  const ids = [...buckets.keys()].sort((a, b) => {
    if (arrange === "dates") return a < b ? -1 : a > b ? 1 : 0;
    if (a === "__none") return 1;
    if (b === "__none") return -1;
    return (labels.get(a) ?? "").localeCompare(labels.get(b) ?? "");
  });
  return ids.map((id) => {
    const groupItems = buckets.get(id) ?? [];
    return {
      id,
      label: labels.get(id) ?? id,
      meta: String(groupItems.length),
      note: "",
      items: groupItems,
    };
  });
}

export type MoodNode = {
  kind: "head" | "note" | "tile";
  key: string;
  id?: string;
  label?: string;
  meta?: string;
  text?: string;
  empty?: boolean;
  item?: MoodItem;
  x: number;
  y: number;
  w: number;
  h: number;
};

function noteHeight(text: string, width: number) {
  const chars = Math.max(22, Math.floor(width / 8.8));
  const lines = Math.min(7, Math.max(1, Math.ceil(text.length / chars)));
  return 8 + lines * 28 + 16;
}

export function layoutMoodboard(options: {
  view: MoodView;
  arrange: MoodArrange;
  items: MoodItem[];
  months: MoodMonth[];
  width: number;
}): { nodes: MoodNode[]; height: number } {
  const width = Math.max(options.width, 280);
  const cols = width < 560 ? 2 : width < 960 ? 3 : 4;
  const gap = 10;
  const tileH = width < 560 ? 228 : 212;
  const tileW = (width - gap * (cols - 1)) / cols;
  const nodes: MoodNode[] = [];
  let y = 12;
  const groups =
    options.view === "journal"
      ? journalGroups(options.items, options.months)
      : libraryGroups(options.items, options.arrange);

  for (const group of groups) {
    nodes.push({
      kind: "head",
      key: `head-${options.view}-${group.id}`,
      id: group.id,
      label: group.label,
      meta: group.meta,
      x: 0,
      y,
      w: width,
      h: 84,
    });
    y += 84;
    if (options.view === "journal") {
      const filled = group.note.trim();
      const text = filled || "This month’s note is still open.";
      const h = noteHeight(text, width);
      nodes.push({
        kind: "note",
        key: `note-${group.id}`,
        text,
        empty: !filled,
        x: 0,
        y,
        w: width,
        h,
      });
      y += h;
    }
    group.items.forEach((item, index) => {
      const col = index % cols;
      const row = Math.floor(index / cols);
      nodes.push({
        kind: "tile",
        key: item.id,
        item,
        x: col * (tileW + gap),
        y: y + row * (tileH + gap),
        w: tileW,
        h: tileH,
      });
    });
    const rows = Math.ceil(group.items.length / cols);
    y += rows > 0 ? rows * (tileH + gap) - gap : 0;
    y += 28;
  }

  return { nodes, height: Math.max(y, 48) };
}

export function sliceVisible(nodes: MoodNode[], top: number, bottom: number) {
  let low = 0;
  let high = nodes.length;
  while (low < high) {
    const mid = (low + high) >> 1;
    if (nodes[mid].y + nodes[mid].h < top) low = mid + 1;
    else high = mid;
  }
  let end = low;
  while (end < nodes.length && nodes[end].y < bottom) end += 1;
  return nodes.slice(low, end);
}
