import catalogJson from "@/data/inventory-catalog.json";

export type InventoryItem = {
  id: string;
  title: string;
  tab: string;
  tabId: string;
  category: string;
  status: string;
  summary: string;
  lastActivity: string;
  titleOnly: boolean;
  thumb: string;
  thumbKind: "screenshot" | "type";
  publicUrl?: string;
  download?: string;
  downloadName?: string;
};

export type InventoryTab = {
  id: string;
  title: string;
  count: number;
};

export type InventoryMeta = {
  generated: string;
  source: string;
  sourceRows: number;
  shown: number;
  shownFull: number;
  shownTitleOnly: number;
  omittedEmployerTab: number;
  omittedFlaggedOrHeldBack: number;
  omittedSensitive: number;
  omittedEmptyTitle: number;
  omittedTotal: number;
  screenshotThumbs: number;
  typographicThumbs: number;
  tabs: number;
  rule: string;
};

type Catalog = {
  meta: InventoryMeta;
  tabs: InventoryTab[];
  items: InventoryItem[];
};

const catalog = catalogJson as Catalog;
const itemById = new Map(catalog.items.map((item) => [item.id, item]));

export function getInventoryMeta() {
  return catalog.meta;
}

export function getInventoryTabs() {
  return catalog.tabs;
}

export function getInventoryItems() {
  return catalog.items;
}

export function getInventoryItem(id: string) {
  return itemById.get(id);
}

export function getItemsForTab(tabId: string) {
  return catalog.items.filter((item) => item.tabId === tabId);
}

export function formatStatus(status: string) {
  if (!status) return "";
  if (status === "test/scratch") return "Test";
  return status.charAt(0).toUpperCase() + status.slice(1);
}
