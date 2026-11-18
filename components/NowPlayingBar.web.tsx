import { useEffect, useState } from "react";
import {
  getDefaultNowPlaying,
  readNowPlaying,
  type NowPlaying,
} from "@/lib/nowPlaying";
import { isPublicLaunchUrl } from "@/lib/projects";

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
    <a
      className="ksm-now-playing"
      href={entry.href}
      aria-label={`Now playing: ${entry.title}`}
      {...(external
        ? { target: "_blank" as const, rel: "noopener noreferrer" }
        : {})}
    >
      <div className="ksm-now-playing-copy">
        <span className="ksm-now-playing-label">Now playing</span>
        <span className="ksm-now-playing-title">{entry.title}</span>
      </div>
      <span className="ksm-now-playing-open">Open</span>
    </a>
  );
}
