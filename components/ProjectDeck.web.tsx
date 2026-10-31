import { useState } from "react";
import { hasConceptPage } from "@/data/project-pages";
import { projects as enriched } from "@/lib/projects";

export function ProjectDeck() {
  const [openId, setOpenId] = useState<string | null>(null);
  const open = enriched.find((item) => item.id === openId) ?? null;

  return (
    <>
      <div className="ksm-grid ksm-project-grid">
        {enriched.map((item) => (
          <a
            key={item.id}
            className="ksm-card ksm-project-card"
            data-tags={item.tags.join(" ").toLowerCase()}
            href={hasConceptPage(item.id) ? `/projects/${item.id}` : item.href}
            onClick={(event) => {
              if (hasConceptPage(item.id)) return;
              event.preventDefault();
              setOpenId(item.id);
            }}
          >
            <img
              className="ksm-project-cover"
              src={item.cover ?? item.thumbnail}
              alt=""
              width={260}
              height={160}
              loading="lazy"
              decoding="async"
            />
            <span className="ksm-card-year">{item.year}</span>
            <span className="ksm-card-title">{item.title}</span>
            <span className="ksm-card-line">{item.line}</span>
            <span className="ksm-card-tags">{item.tags.join(" · ")}</span>
          </a>
        ))}
      </div>
      {open ? (
        <>
          <button
            type="button"
            className="ksm-sheet-back"
            aria-label="Close project details"
            onClick={() => setOpenId(null)}
          />
          <aside className="ksm-sheet" role="dialog" aria-modal="true" aria-label={open.title}>
            <p className="ksm-stage">{open.title}</p>
            <h2 className="ksm-section">{open.title}</h2>
            <p className="ksm-lede">{open.line}</p>
            <p className="ksm-card-tags">
              {open.tags.join(" · ")} · {open.year}
            </p>
            {hasConceptPage(open.id) ? (
              <p>
                <a className="ksm-nav" href={`/projects/${open.id}`}>
                  Read the concept book
                </a>
              </p>
            ) : null}
            <p>
              <a className="ksm-nav" href={open.href}>
                Open the live page
              </a>
            </p>
            <p>
              <a className="ksm-nav" href={open.source}>
                Source note
              </a>
            </p>
            <button type="button" className="ksm-pixel-btn" onClick={() => setOpenId(null)}>
              Close
            </button>
          </aside>
        </>
      ) : null}
    </>
  );
}
