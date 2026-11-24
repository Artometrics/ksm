import { animate } from "motion";

type Snap = {
  id: string;
  rect: DOMRect;
  type: string;
  title: string;
};

type FlightOptions = {
  previous: Map<string, Snap>;
  tiles: HTMLElement[];
  reduced: boolean;
  onDone?: () => void;
};

const EASE = [0.16, 1, 0.3, 1] as const;
const MAX_TILES = 32;
const MAX_GHOSTS = 24;

function hash(id: string) {
  let value = 0;
  for (let index = 0; index < id.length; index += 1) {
    value = (value * 33 + id.charCodeAt(index)) >>> 0;
  }
  return value;
}

function delayOf(id: string) {
  return (hash(id) % 8) * 0.028;
}

function rotOf(id: string) {
  return (hash(id) % 48) - 24;
}

function liftOf(id: string) {
  return 34 + (hash(id) % 78);
}

function sideOf(id: string) {
  return ((hash(id) >> 4) % 90) - 45;
}

function inView(rect: DOMRect) {
  const height = window.innerHeight || 800;
  return rect.bottom > -40 && rect.top < height + 40;
}

function distanceToCenter(rect: DOMRect) {
  const cx = rect.left + rect.width / 2 - window.innerWidth / 2;
  const cy = rect.top + rect.height / 2 - window.innerHeight / 2;
  return cx * cx + cy * cy;
}

function measure(tiles: HTMLElement[]) {
  const next = new Map<string, Snap>();
  for (const tile of tiles) {
    const id = tile.dataset.moodId;
    if (!id) continue;
    next.set(id, {
      id,
      rect: tile.getBoundingClientRect(),
      type: tile.dataset.type ?? "",
      title: tile.dataset.title ?? "",
    });
  }
  return next;
}

export function measureMoodTiles(tiles: HTMLElement[]) {
  return measure(tiles);
}

export function runMoodFlight({ previous, tiles, reduced, onDone }: FlightOptions) {
  const controls: Array<{ stop: () => void; finished?: Promise<unknown> }> = [];
  const layer = document.createElement("div");
  layer.className = "ksm-mood-flock";
  let removed = false;

  const finish = () => {
    if (removed) return;
    removed = true;
    for (const tile of tiles) {
      tile.style.transform = "";
      tile.style.opacity = "";
      tile.style.zIndex = "";
    }
    layer.remove();
    onDone?.();
  };

  if (reduced) {
    for (const tile of tiles) {
      if (!inView(tile.getBoundingClientRect())) continue;
      tile.style.opacity = "0";
      controls.push(
        animate(tile, { opacity: [0, 1] }, { duration: 0.22, ease: "easeOut" }),
      );
    }
  } else {
    const ranked = tiles
      .map((tile) => ({ tile, dist: distanceToCenter(tile.getBoundingClientRect()) }))
      .sort((a, b) => a.dist - b.dist);
    const allowed = new Set(
      ranked.slice(0, MAX_TILES).map((entry) => entry.tile.dataset.moodId),
    );
    const destinations = measure(tiles);
    const present = new Set(destinations.keys());

    for (const tile of tiles) {
      const id = tile.dataset.moodId;
      if (!id || !allowed.has(id)) continue;
      const dest = destinations.get(id);
      const prev = previous.get(id);
      if (!dest) continue;
      tile.style.zIndex = String(2 + (hash(id) % 6));
      if (!prev) {
        const start = `translate(${sideOf(id)}px, ${-liftOf(id)}px) rotate(${rotOf(id)}deg) scale(0.9)`;
        const mid = `translate(${Math.round(sideOf(id) * 0.35)}px, ${Math.round(-liftOf(id) * 0.28)}px) rotate(${Math.round(rotOf(id) * -0.4)}deg) scale(1.03)`;
        tile.style.transform = start;
        controls.push(
          animate(
            tile,
            { transform: [start, mid, "translate(0px, 0px) rotate(0deg) scale(1)"] },
            { duration: 0.72, delay: delayOf(id), ease: EASE },
          ),
        );
        continue;
      }
      const dx = prev.rect.left - dest.rect.left;
      const dy = prev.rect.top - dest.rect.top;
      if (Math.abs(dx) < 1.5 && Math.abs(dy) < 1.5) {
        tile.style.zIndex = "";
        continue;
      }
      const rot = rotOf(id);
      const start = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px) rotate(${rot}deg)`;
      const mid = `translate(${(dx * 0.42 + sideOf(id)).toFixed(1)}px, ${(dy * 0.42 - liftOf(id)).toFixed(1)}px) rotate(${(-rot * 0.55).toFixed(1)}deg) scale(0.94)`;
      tile.style.transform = start;
      controls.push(
        animate(
          tile,
          { transform: [start, mid, "translate(0px, 0px) rotate(0deg) scale(1)"] },
          { duration: 0.76, delay: delayOf(id), ease: EASE },
        ),
      );
    }

    document.body.appendChild(layer);
    let ghosts = 0;
    for (const [id, snap] of previous) {
      if (present.has(id) || ghosts >= MAX_GHOSTS || !inView(snap.rect)) continue;
      ghosts += 1;
      const ghost = document.createElement("div");
      ghost.className = "ksm-mood-ghost";
      ghost.dataset.type = snap.type;
      ghost.style.left = `${snap.rect.left}px`;
      ghost.style.top = `${snap.rect.top}px`;
      ghost.style.width = `${snap.rect.width}px`;
      ghost.style.height = `${snap.rect.height}px`;
      const title = document.createElement("span");
      title.textContent = snap.title;
      ghost.appendChild(title);
      layer.appendChild(ghost);
      const end = `translate(${sideOf(id)}px, ${-liftOf(id) - 36}px) rotate(${rotOf(id)}deg) scale(0.84)`;
      controls.push(
        animate(
          ghost,
          {
            transform: ["translate(0px, 0px) rotate(0deg) scale(1)", end],
            opacity: [1, 0],
          },
          { duration: 0.58, delay: delayOf(id) * 0.45, ease: EASE },
        ),
      );
    }
  }

  const done = Promise.all(
    controls.map((control) => control.finished ?? Promise.resolve()),
  ).then(finish, finish);

  return {
    stop() {
      for (const control of controls) control.stop();
      done.then(finish).catch(() => finish());
      finish();
    },
  };
}
