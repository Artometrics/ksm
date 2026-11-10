import { useMemo, useState } from "react";
import { Link } from "expo-router";
import {
  formatStatus,
  getInventoryItems,
  getInventoryMeta,
  getInventoryTabs,
  type InventoryItem,
} from "@/lib/inventory";

export function InventoryLibrary() {
  const meta = getInventoryMeta();
  const tabs = getInventoryTabs();
  const items = getInventoryItems();
  const [query, setQuery] = useState("");
  const [tabId, setTabId] = useState("all");
  const [status, setStatus] = useState("all");
  const [category, setCategory] = useState("all");
  const needle = query.trim().toLowerCase();

  const statuses = useMemo(() => {
    const values = Array.from(
      new Set(items.filter((item) => !item.titleOnly && item.status).map((item) => item.status)),
    ).sort();
    return values;
  }, [items]);

  const categories = useMemo(() => {
    const values = Array.from(
      new Set(items.filter((item) => !item.titleOnly && item.category).map((item) => item.category)),
    ).sort((a, b) => a.localeCompare(b));
    return values;
  }, [items]);

  const filtered = useMemo(() => {
    return items.filter((item) => {
      if (tabId !== "all" && item.tabId !== tabId) return false;
      if (status !== "all") {
        if (item.titleOnly || item.status !== status) return false;
      }
      if (category !== "all") {
        if (item.titleOnly || item.category !== category) return false;
      }
      if (!needle) return true;
      const hay = item.titleOnly
        ? item.title
        : [item.title, item.summary, item.category, item.status, item.tab].join(" ");
      return hay.toLowerCase().includes(needle);
    });
  }, [category, items, needle, status, tabId]);

  const shelves = useMemo(() => {
    return tabs
      .map((tab) => ({
        tab,
        items: filtered.filter((item) => item.tabId === tab.id),
      }))
      .filter((shelf) => shelf.items.length > 0);
  }, [filtered, tabs]);

  return (
    <div className="ksm-shelves">
      <h1 className="ksm-shelves-title">Inventory</h1>
      <p className="ksm-shelves-intro">
        {meta.shown.toLocaleString()} items on {meta.tabs} shelves.{" "}
        {meta.screenshotThumbs.toLocaleString()} have a live-site preview. The rest use a typographic
        card. {meta.omittedTotal.toLocaleString()} records stay off this page.
      </p>

      <input
        className="ksm-shelves-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search the shelves"
        aria-label="Search the inventory"
      />

      <div className="ksm-shelves-filters">
        <div className="ksm-shelves-filter-group" role="group" aria-label="Filter by tab">
          <FilterChip label="All tabs" on={tabId === "all"} onClick={() => setTabId("all")} />
          {tabs.map((tab) => (
            <FilterChip
              key={tab.id}
              label={tab.title}
              on={tabId === tab.id}
              onClick={() => setTabId(tab.id)}
            />
          ))}
        </div>
        <div className="ksm-shelves-filter-group" role="group" aria-label="Filter by status">
          <FilterChip label="All statuses" on={status === "all"} onClick={() => setStatus("all")} />
          {statuses.map((value) => (
            <FilterChip
              key={value}
              label={formatStatus(value)}
              on={status === value}
              onClick={() => setStatus(value)}
            />
          ))}
        </div>
        <div className="ksm-shelves-filter-group" role="group" aria-label="Filter by type">
          <label className="ksm-shelves-select">
            <span>Type</span>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              aria-label="Filter by type"
            >
              <option value="all">All types</option>
              {categories.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {shelves.length === 0 ? (
        <p className="ksm-shelves-intro">Nothing on the shelves matches that.</p>
      ) : (
        shelves.map(({ tab, items: pieces }) => (
          <section key={tab.id} className="ksm-shelf" aria-labelledby={`shelf-${tab.id}`}>
            <div className="ksm-shelf-head">
              <h2 id={`shelf-${tab.id}`} className="ksm-shelf-name">
                {tab.title}
              </h2>
              <span className="ksm-shelf-count">{pieces.length}</span>
            </div>
            <ul className="ksm-shelf-rows">
              {pieces.map((item) => (
                <ShelfRow key={item.id} item={item} />
              ))}
            </ul>
          </section>
        ))
      )}
    </div>
  );
}

function FilterChip({
  label,
  on,
  onClick,
}: {
  label: string;
  on: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={on ? "ksm-shelves-filter is-on" : "ksm-shelves-filter"}
      aria-pressed={on}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function ShelfRow({ item }: { item: InventoryItem }) {
  const kind = item.titleOnly ? "Private" : item.category || item.tab;
  const body = (
    <>
      <img src={item.thumb} alt="" />
      <span className="ksm-shelf-kind">{kind}</span>
      <span className="ksm-shelf-piece">{item.title}</span>
    </>
  );

  return (
    <li className={item.titleOnly ? "ksm-shelf-row is-title-only" : "ksm-shelf-row"}>
      {item.titleOnly ? (
        <div className="ksm-shelf-link">{body}</div>
      ) : (
        <Link
          href={{ pathname: "/inventory/items/[slug]", params: { slug: item.id } }}
          className="ksm-shelf-link"
        >
          {body}
        </Link>
      )}
      {item.publicUrl ? (
        <a className="ksm-shelf-dl" href={item.publicUrl} target="_blank" rel="noopener noreferrer">
          Open
        </a>
      ) : item.download ? (
        <a className="ksm-shelf-dl" href={item.download} download={item.downloadName}>
          Download
        </a>
      ) : null}
    </li>
  );
}
