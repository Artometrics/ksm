import { useEffect, useState } from "react";
import {
  getDefaultNowPlaying,
  readNowPlaying,
  type NowPlaying,
} from "@/lib/nowPlaying";
import { isDisplayArt, isPublicLaunchUrl } from "@/lib/projects";

export function NowPlayingBar() {
  const [entry, setEntry] = useState<NowPlaying | null>(null);

  useEffect(() => {
    const sync = () => setEntry(readNowPlaying() ?? getDefaultNowPlaying());
    sync();
    window.addEventListener("ksm-now-playing", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("ksm-now-playing", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  if (!entry) return null;

  const external = isPublicLaunchUrl(entry.href);

  return (
    <div className="ksm-now-playing" role="region" aria-label="Now playing">
      {isDisplayArt(entry.cover) ? (
        <img className="ksm-now-playing-art" src={entry.cover} alt="" />
      ) : null}
      <div className="ksm-now-playing-copy">
        <span className="ksm-now-playing-label">Now playing</span>
        <span className="ksm-now-playing-title">{entry.title}</span>
      </div>
      <a
        className="ksm-now-playing-open"
        href={entry.href}
        {...(external
          ? { target: "_blank" as const, rel: "noopener noreferrer" }
          : {})}
      >
        {external ? "Open" : "Story"}
      </a>
    </div>
  );
}
