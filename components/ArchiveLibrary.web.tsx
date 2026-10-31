import { useMemo, useState } from "react";
import {
  ARCHIVE_ITEMS,
  ARCHIVE_KIND_FILTERS,
  getProjectArchives,
  type ArchiveItem,
} from "@/data/archive";

function downloadAsset(href: string) {
  const anchor = document.createElement("a");
  anchor.href = href;
  anchor.download = href.split("/").pop() ?? "download";
  anchor.rel = "noopener";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

function bulkDownload(assets: { href: string }[]) {
  assets.forEach((asset, index) => {
    window.setTimeout(() => downloadAsset(asset.href), index * 320);
  });
}

function matchesQuery(item: ArchiveItem, query: string) {
  if (!query.trim()) return true;
  const q = query.trim().toLowerCase();
  const hay = [
    item.title,
    item.line,
    item.kind,
    item.projectId ?? "",
    ...item.tags,
  ]
    .join(" ")
    .toLowerCase();
  return hay.includes(q);
}

export function ArchiveLibrary() {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState<(typeof ARCHIVE_KIND_FILTERS)[number]["id"]>("all");
  const projectBundles = useMemo(() => getProjectArchives(), []);

  const filtered = useMemo(() => {
    return ARCHIVE_ITEMS.filter((item) => {
      if (kind !== "all" && item.kind !== kind) return false;
      return matchesQuery(item, query);
    }).sort((a, b) => b.addedAt.localeCompare(a.addedAt));
  }, [kind, query]);

  return (
    <div className="ksm-archive">
      <p className="ksm-lede">
        Notes, files, and on-site assets. Working links and shared docs live on the{" "}
        <a className="ksm-nav" href="/desk">
          desk
        </a>
        .
      </p>

      <div className="ksm-archive-toolbar">
        <label className="ksm-archive-search">
          <span className="ksm-kicker">Search</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Title, tag, project…"
            aria-label="Search archive"
          />
        </label>
        <div className="ksm-filters" role="group" aria-label="Filter by kind">
          {ARCHIVE_KIND_FILTERS.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={kind === filter.id ? "ksm-filter-btn is-active" : "ksm-filter-btn"}
              aria-pressed={kind === filter.id}
              onClick={() => setKind(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <section className="ksm-archive-section">
        <h2 className="ksm-section">Index</h2>
        {filtered.length === 0 ? (
          <p className="ksm-lede">No entries match this search.</p>
        ) : (
          <ul className="ksm-archive-list">
            {filtered.map((item) => (
              <li key={item.id} className="ksm-archive-row">
                <div className="ksm-archive-row-main">
                  <span className="ksm-kicker">{item.kind}</span>
                  <span className="ksm-card-title">{item.title}</span>
                  <span className="ksm-card-line">{item.line}</span>
                  <span className="ksm-card-tags">
                    {item.addedAt}
                    {item.projectId ? ` · ${item.projectId}` : ""}
                    {item.tags.length ? ` · ${item.tags.join(" · ")}` : ""}
                  </span>
                </div>
                <div className="ksm-archive-row-actions">
                  {item.href ? (
                    <a className="ksm-nav" href={item.href}>
                      Open note
                    </a>
                  ) : null}
                  {item.assets?.map((asset) => (
                    <button
                      key={asset.id}
                      type="button"
                      className="ksm-pixel-btn"
                      onClick={() => downloadAsset(asset.href)}
                    >
                      {asset.title}
                    </button>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="ksm-archive-section">
        <h2 className="ksm-section">By project</h2>
        <div className="ksm-grid">
          {projectBundles.map((bundle) => (
            <article key={bundle.projectId} className="ksm-card ksm-archive-project">
              <span className="ksm-kicker">Project</span>
              <h3 className="ksm-card-title">{bundle.title}</h3>
              <p className="ksm-card-line">{bundle.line}</p>
              <p>
                <a className="ksm-nav" href={`/projects/${bundle.slug}`}>
                  Project page
                </a>
              </p>
              {bundle.assets.length === 0 ? (
                <p className="ksm-lede">No downloadable assets filed here yet.</p>
              ) : (
                <>
                  <ul className="ksm-archive-asset-list">
                    {bundle.assets.map((asset) => (
                      <li key={asset.id}>
                        <button
                          type="button"
                          className="ksm-nav"
                          style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                          onClick={() => downloadAsset(asset.href)}
                        >
                          {asset.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                  {bundle.assets.length > 1 ? (
                    <button
                      type="button"
                      className="ksm-pixel-btn"
                      onClick={() => bulkDownload(bundle.assets)}
                    >
                      Download all ({bundle.assets.length})
                    </button>
                  ) : null}
                </>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
