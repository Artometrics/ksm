import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react-native";
import {
  MOOD_ITEMS,
  MOOD_MONTHS,
  filterItems,
  formatCapture,
  layoutMoodboard,
  projectKey,
  projectLabel,
  sliceVisible,
  typeLabel,
  type MoodArrange,
  type MoodItem,
  type MoodView,
} from "@/lib/moodboard";
import { measureMoodTiles, runMoodFlight } from "@/lib/moodboardFlight";

const TYPE_OPTIONS = [...new Set(MOOD_ITEMS.map((item) => item.type))]
  .map((type) => ({ id: type, label: typeLabel(type) }))
  .sort((a, b) => a.label.localeCompare(b.label));

const PROJECT_OPTIONS = [...new Set(MOOD_ITEMS.map((item) => projectKey(item.project)))]
  .map((id) => ({
    id,
    label: id === "__none" ? "No project" : id,
  }))
  .sort((a, b) => {
    if (a.id === "__none") return 1;
    if (b.id === "__none") return -1;
    return a.label.localeCompare(b.label);
  });

function isElementScroller(scroller: HTMLElement | Window): scroller is HTMLElement {
  return scroller !== window;
}

function findScroller(node: HTMLElement): HTMLElement | Window {
  let el: HTMLElement | null = node.parentElement;
  while (el && el !== document.body && el !== document.documentElement) {
    const overflow = getComputedStyle(el).overflowY;
    if (
      (overflow === "auto" || overflow === "scroll") &&
      el.clientHeight > 0 &&
      el.scrollHeight > el.clientHeight + 4
    ) {
      return el;
    }
    el = el.parentElement;
  }
  return window;
}

function scrollCanvasTo(canvas: HTMLElement, y: number) {
  const scroller = findScroller(canvas);
  if (!isElementScroller(scroller)) {
    const top = canvas.getBoundingClientRect().top + window.scrollY + y - 8;
    window.scrollTo({ top, behavior: "auto" });
    return;
  }
  const delta = canvas.getBoundingClientRect().top - scroller.getBoundingClientRect().top;
  scroller.scrollTo({ top: scroller.scrollTop + delta + y - 8, behavior: "auto" });
}

function canvasOffset(canvas: HTMLElement, scroller: HTMLElement | Window) {
  const canvasTop = canvas.getBoundingClientRect().top;
  if (!isElementScroller(scroller)) {
    return { offset: -canvasTop, view: window.innerHeight };
  }
  return {
    offset: scroller.getBoundingClientRect().top - canvasTop,
    view: scroller.clientHeight,
  };
}

function Chip({
  name,
  checked,
  label,
  onSelect,
}: {
  name: string;
  checked: boolean;
  label: string;
  onSelect: () => void;
}) {
  return (
    <label className="ksm-filter-chip">
      <input type="radio" name={name} checked={checked} onChange={onSelect} />
      <span>{label}</span>
    </label>
  );
}

function TileFace({ item }: { item: MoodItem }) {
  return (
    <>
      {item.image && item.isOwnWork ? (
        <img className="ksm-mood-photo" src={item.image} alt="" />
      ) : null}
      <span className="ksm-mood-kicker">{typeLabel(item.type)}</span>
      <span className="ksm-mood-title">{item.title}</span>
      <span className="ksm-mood-meta">
        <time dateTime={item.date}>{formatCapture(item.date)}</time>
        <span className="ksm-mood-credit-line">{item.credit}</span>
      </span>
    </>
  );
}

export function MoodboardBoard() {
  const [view, setView] = useState<MoodView>("journal");
  const [arrange, setArrange] = useState<MoodArrange>("dates");
  const [month, setMonth] = useState("all");
  const [type, setType] = useState("all");
  const [project, setProject] = useState("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const [width, setWidth] = useState(360);
  const [windowRange, setWindowRange] = useState({ offset: 0, view: 800 });
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const snaps = useRef(new Map<string, { id: string; rect: DOMRect; type: string; title: string }>());
  const signatureRef = useRef("");
  const flightRef = useRef<{ stop: () => void } | null>(null);
  const generation = useRef(0);
  const hashScrolled = useRef(false);
  const scrollLock = useRef(0);

  const rememberScroll = () => {
    const scroller = rootRef.current ? findScroller(rootRef.current) : window;
    scrollLock.current = isElementScroller(scroller) ? scroller.scrollTop : window.scrollY;
    return scroller;
  };

  const openTile = (id: string) => {
    rememberScroll();
    setOpenId(id);
  };

  const filtered = useMemo(
    () => filterItems(MOOD_ITEMS, { month, type, project }),
    [month, type, project],
  );

  const layout = useMemo(
    () =>
      layoutMoodboard({
        view,
        arrange,
        items: filtered,
        months: MOOD_MONTHS,
        width,
      }),
    [view, arrange, filtered, width],
  );

  const visible = useMemo(
    () =>
      sliceVisible(
        layout.nodes,
        windowRange.offset - 280,
        windowRange.offset + windowRange.view + 420,
      ),
    [layout.nodes, windowRange],
  );

  const visibleKey = visible
    .filter((node) => node.kind === "tile")
    .map((node) => node.key)
    .join("|");

  const flightKey =
    view === "journal"
      ? `journal|${month}|${type}|${project}`
      : `library|${arrange}|${month}|${type}|${project}`;

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;
    let scroller: HTMLElement | Window = window;
    let frame = 0;
    const read = () => {
      frame = 0;
      const nextScroller = findScroller(root);
      if (nextScroller !== scroller) {
        scroller.removeEventListener("scroll", onScroll);
        scroller = nextScroller;
        scroller.addEventListener("scroll", onScroll, { passive: true });
      }
      const nextWidth = Math.round(canvas.getBoundingClientRect().width);
      const range = canvasOffset(canvas, scroller);
      setWidth((current) => (Math.abs(current - nextWidth) > 1 ? nextWidth : current));
      setWindowRange((current) =>
        Math.abs(current.offset - range.offset) > 24 || current.view !== range.view
          ? range
          : current,
      );
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(read);
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const observer = new ResizeObserver(onScroll);
    observer.observe(canvas);
    read();
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [layout.height]);

  useEffect(() => {
    if (hashScrolled.current) return;
    const id = window.location.hash.replace("#", "");
    if (!id || !canvasRef.current) return;
    const head = layout.nodes.find((node) => node.kind === "head" && node.id === id);
    if (!head) return;
    hashScrolled.current = true;
    scrollCanvasTo(canvasRef.current, head.y);
  }, [layout.nodes]);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const tiles = [...canvas.querySelectorAll<HTMLElement>("[data-mood-id]")];
    if (!signatureRef.current) {
      snaps.current = measureMoodTiles(tiles);
      signatureRef.current = flightKey;
      return;
    }
    if (signatureRef.current === flightKey) {
      if (!flightRef.current) snaps.current = measureMoodTiles(tiles);
      return;
    }
    const token = ++generation.current;
    flightRef.current?.stop();
    const previous = snaps.current;
    snaps.current = measureMoodTiles(tiles);
    signatureRef.current = flightKey;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    flightRef.current = runMoodFlight({
      previous,
      tiles,
      reduced,
      onDone: () => {
        if (generation.current === token) flightRef.current = null;
      },
    });
  }, [flightKey, visibleKey, width]);

  useLayoutEffect(() => {
    if (!openId) return;
    const dialog = dialogRef.current;
    const previous = document.activeElement as HTMLElement | null;
    const scroller = rootRef.current ? findScroller(rootRef.current) : window;
    dialog?.querySelector<HTMLElement>("[data-close]")?.focus({ preventScroll: true });
    const restore = () => {
      if (isElementScroller(scroller)) scroller.scrollTop = scrollLock.current;
      else window.scrollTo(0, scrollLock.current);
    };
    restore();
    const frame = requestAnimationFrame(restore);

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenId(null);
        return;
      }
      if (event.key !== "Tab" || !dialog) return;
      const focusable = [
        ...dialog.querySelectorAll<HTMLElement>("a[href], button, input, textarea"),
      ];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKey);
      restore();
      previous?.focus?.({ preventScroll: true });
    };
  }, [openId]);

  const openItem = MOOD_ITEMS.find((item) => item.id === openId) ?? null;

  return (
    <div className="ksm-mood-root" ref={rootRef}>
      <header className="ksm-mood-intro">
        <h1 className="ksm-headline ksm-sheet-title">Moodboard</h1>
        <p className="ksm-lede">
          References Kyle kept in 2025. Read them as a journal, month by month,
          or open the library of {MOOD_ITEMS.length.toLocaleString("en-US")} pieces.
        </p>
        <p className="ksm-mood-rights">
          Third-party work belongs to its creators. It is shown here for reference,
          with credit, and never at full size.
        </p>
      </header>

      <div className="ksm-mood-controls">
        <div className="ksm-filters" role="radiogroup" aria-label="View">
          <Chip name="mood-view" checked={view === "journal"} label="Journal" onSelect={() => setView("journal")} />
          <Chip name="mood-view" checked={view === "library"} label="Library" onSelect={() => setView("library")} />
        </div>
        {view === "library" ? (
          <div className="ksm-filters" role="radiogroup" aria-label="Arrange">
            <Chip name="mood-arrange" checked={arrange === "dates"} label="Dates" onSelect={() => setArrange("dates")} />
            <Chip name="mood-arrange" checked={arrange === "types"} label="Types" onSelect={() => setArrange("types")} />
            <Chip name="mood-arrange" checked={arrange === "projects"} label="Projects" onSelect={() => setArrange("projects")} />
          </div>
        ) : null}
        <div className="ksm-filters" role="radiogroup" aria-label="Dates">
          <Chip name="mood-month" checked={month === "all"} label="All dates" onSelect={() => setMonth("all")} />
          {MOOD_MONTHS.map((entry) => (
            <Chip
              key={entry.id}
              name="mood-month"
              checked={month === entry.id}
              label={entry.label}
              onSelect={() => setMonth(entry.id)}
            />
          ))}
        </div>
        <div className="ksm-filters" role="radiogroup" aria-label="Types">
          <Chip name="mood-type" checked={type === "all"} label="All types" onSelect={() => setType("all")} />
          {TYPE_OPTIONS.map((entry) => (
            <Chip
              key={entry.id}
              name="mood-type"
              checked={type === entry.id}
              label={entry.label}
              onSelect={() => setType(entry.id)}
            />
          ))}
        </div>
        <div className="ksm-filters" role="radiogroup" aria-label="Projects">
          <Chip name="mood-project" checked={project === "all"} label="All projects" onSelect={() => setProject("all")} />
          {PROJECT_OPTIONS.map((entry) => (
            <Chip
              key={entry.id}
              name="mood-project"
              checked={project === entry.id}
              label={entry.label}
              onSelect={() => setProject(entry.id)}
            />
          ))}
        </div>
        <p className="ksm-mood-count" aria-live="polite">
          Showing {filtered.length.toLocaleString("en-US")} of {MOOD_ITEMS.length.toLocaleString("en-US")}.
        </p>
      </div>

      {layout.nodes.length === 0 ? (
        <p className="ksm-lede">Nothing matches these filters.</p>
      ) : (
        <div className="ksm-mood-canvas" ref={canvasRef} style={{ height: layout.height }}>
          {visible.map((node) => {
            const style = {
              position: "absolute" as const,
              left: node.x,
              top: node.y,
              width: node.w,
              height: node.h,
            };
            if (node.kind === "head") {
              return (
                <header key={node.key} id={node.id} className="ksm-mood-month" style={style}>
                  <h2>{node.label}</h2>
                  <p>
                    {node.meta} {node.meta === "1" ? "piece" : "pieces"}
                  </p>
                </header>
              );
            }
            if (node.kind === "note") {
              return (
                <p
                  key={node.key}
                  className={node.empty ? "ksm-mood-note is-open" : "ksm-mood-note"}
                  style={style}
                >
                  {node.text}
                </p>
              );
            }
            const item = node.item;
            if (!item) return null;
            const referenceShot = Boolean(item.image) && !item.isOwnWork;
            return (
              <article
                key={node.key}
                className="ksm-mood-tile"
                data-mood-id={item.id}
                data-type={item.type}
                data-title={item.title}
                style={style}
              >
                {referenceShot ? (
                  item.sourceUrl ? (
                    <a
                      className="ksm-mood-thumb"
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={item.image} alt="" />
                      <span className="visually-hidden">Source for {item.title}</span>
                    </a>
                  ) : (
                    <span className="ksm-mood-thumb">
                      <img src={item.image} alt="" />
                    </span>
                  )
                ) : null}
                <button
                  type="button"
                  className="ksm-mood-hit"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => openTile(item.id)}
                >
                  <TileFace item={item} />
                </button>
              </article>
            );
          })}
        </div>
      )}

      {openItem && typeof document !== "undefined"
        ? createPortal(
        <div className="ksm-mood-shade">
          <button
            type="button"
            className="ksm-mood-shade-hit"
            aria-label="Close details"
            onClick={() => setOpenId(null)}
          />
          <div
            className="ksm-mood-dialog"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mood-dialog-title"
          >
            <button
              type="button"
              className="ksm-mood-close"
              data-close=""
              aria-label="Close"
              onClick={() => setOpenId(null)}
            >
              <X size={20} color="currentColor" strokeWidth={1.75} />
            </button>
            {openItem.image && openItem.isOwnWork ? (
              <img className="ksm-mood-dialog-photo" src={openItem.image} alt="" />
            ) : null}
            {openItem.image && !openItem.isOwnWork ? (
              openItem.sourceUrl ? (
                <a
                  className="ksm-mood-dialog-thumb"
                  href={openItem.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={openItem.image} alt="" />
                  <span>Open the source</span>
                </a>
              ) : (
                <span className="ksm-mood-dialog-thumb">
                  <img src={openItem.image} alt="" />
                </span>
              )
            ) : null}
            <h2 id="mood-dialog-title">{openItem.title}</h2>
            <dl className="ksm-mood-facts">
              <div>
                <dt>Date</dt>
                <dd>
                  <time dateTime={openItem.date}>{formatCapture(openItem.date, true)}</time>
                </dd>
              </div>
              <div>
                <dt>Type</dt>
                <dd>{typeLabel(openItem.type)}</dd>
              </div>
              <div>
                <dt>Project</dt>
                <dd>{openItem.project.trim() ? projectLabel(openItem.project) : "No project yet"}</dd>
              </div>
              <div>
                <dt>Credit</dt>
                <dd>{openItem.credit}</dd>
              </div>
              <div>
                <dt>Source</dt>
                <dd>
                  {openItem.sourceUrl ? (
                    <a href={openItem.sourceUrl} target="_blank" rel="noopener noreferrer">
                      Open the source
                    </a>
                  ) : (
                    "No source link yet"
                  )}
                </dd>
              </div>
              <div>
                <dt>Notes</dt>
                <dd>{openItem.notes.trim() ? openItem.notes : "No note on this piece yet."}</dd>
              </div>
            </dl>
            <p className="ksm-mood-rights">
              Third-party work belongs to its creators and is shown for reference, with credit.
            </p>
          </div>
        </div>,
        document.body,
      )
        : null}
    </div>
  );
}
