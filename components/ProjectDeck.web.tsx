import { useState } from "react";
import projects from "@/data/projects.json";

const ICONS: Record<string, string> = {
  artometrics: "stairs",
  cardinal: "bird",
  pantheon: "temple",
};

function StageIcon({ id }: { id: string }) {
  const kind = ICONS[id] ?? "mark";
  if (kind === "stairs") {
    return (
      <svg width="32" height="32" viewBox="0 0 16 16" aria-hidden="true" shapeRendering="crispEdges">
        <rect x="1" y="12" width="4" height="3" fill="#2D3561" />
        <rect x="5" y="8" width="4" height="3" fill="#2D3561" />
        <rect x="9" y="4" width="4" height="3" fill="#C05C7E" />
        <rect x="2" y="11" width="3" height="1" fill="#FFB961" />
        <rect x="6" y="7" width="3" height="1" fill="#FFB961" />
      </svg>
    );
  }
  if (kind === "bird") {
    return (
      <svg width="32" height="32" viewBox="0 0 16 16" aria-hidden="true" shapeRendering="crispEdges">
        <rect x="3" y="7" width="7" height="3" fill="#C05C7E" />
        <rect x="9" y="6" width="4" height="2" fill="#FFB961" />
        <rect x="2" y="6" width="3" height="2" fill="#2D3561" />
        <rect x="6" y="10" width="2" height="2" fill="#2D3561" />
      </svg>
    );
  }
  if (kind === "temple") {
    return (
      <svg width="32" height="32" viewBox="0 0 16 16" aria-hidden="true" shapeRendering="crispEdges">
        <rect x="2" y="5" width="12" height="2" fill="#FFB961" />
        <rect x="1" y="4" width="14" height="1" fill="#F3826F" />
        <rect x="4" y="7" width="2" height="5" fill="#2D3561" />
        <rect x="7" y="7" width="2" height="5" fill="#2D3561" />
        <rect x="10" y="7" width="2" height="5" fill="#2D3561" />
        <rect x="3" y="12" width="10" height="2" fill="#6BAA75" />
      </svg>
    );
  }
  return (
    <svg width="32" height="32" viewBox="0 0 16 16" aria-hidden="true" shapeRendering="crispEdges">
      <rect x="3" y="3" width="10" height="10" fill="#6BAA75" />
      <rect x="6" y="6" width="4" height="4" fill="#FFB961" />
    </svg>
  );
}

export function ProjectDeck() {
  const [openId, setOpenId] = useState<string | null>(null);
  const open = projects.find((item) => item.id === openId) ?? null;

  return (
    <>
      <div className="ksm-grid">
        {projects.map((item, index) => (
          <a
            key={item.id}
            className="ksm-card"
            data-tags={item.tags.join(" ").toLowerCase()}
            href={item.href}
            onClick={(event) => {
              event.preventDefault();
              setOpenId(item.id);
            }}
          >
            <span className="ksm-stage">STAGE {index + 1}</span>
            <StageIcon id={item.id} />
            <img
              className="ksm-thumb ksm-live"
              src={item.id === "cardinal" ? "/images/pixel/bird.webp" : "/images/pixel/sunset.webp"}
              alt=""
              width={96}
              height={64}
              loading="lazy"
              decoding="async"
            />
            <img
              className="ksm-thumb ksm-still"
              src={item.id === "cardinal" ? "/images/pixel/poster-bird.png" : "/images/pixel/poster-sunset.png"}
              alt=""
              width={96}
              height={64}
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
          <button type="button" className="ksm-sheet-back" aria-label="Close project details" onClick={() => setOpenId(null)} />
          <aside className="ksm-sheet" role="dialog" aria-modal="true" aria-label={open.title}>
            <p className="ksm-stage">{open.title}</p>
            <h2 className="ksm-section">{open.title}</h2>
            <p className="ksm-lede">{open.line}</p>
            <p className="ksm-card-tags">{open.tags.join(" · ")} · {open.year}</p>
            <p>
              <a className="ksm-nav" href={open.href}>Open the live page</a>
            </p>
            <p>
              <a className="ksm-nav" href={open.source}>Source note</a>
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
