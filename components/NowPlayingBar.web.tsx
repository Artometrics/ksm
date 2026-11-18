import { useEffect, useState } from "react";
import { readNowPlaying, type NowPlaying } from "@/lib/nowPlaying";
import { isPublicLaunchUrl } from "@/lib/projects";

type Playing = NowPlaying & { audioUrl?: string };

/** Hidden unless something is actually playing audio. Nothing plays on the site today. */
export function NowPlayingBar() {
  const [entry, setEntry] = useState<Playing | null>(null);

  useEffect(() => {
    const sync = () => {
      const current = readNowPlaying() as Playing | null;
      setEntry(current?.audioUrl ? current : null);
    };
    sync();
    window.addEventListener("ksm-now-playing", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("ksm-now-playing", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  if (!entry?.audioUrl) return null;

  const external = isPublicLaunchUrl(entry.href);
  return (
    <a
      className="ksm-now-playing"
      href={entry.href}
      aria-label={`Now playing: ${entry.title}`}
      {...(external ? { target: "_blank" as const, rel: "noopener noreferrer" } : {})}
    >
      <div className="ksm-now-playing-copy">
        <span className="ksm-now-playing-label">Now playing</span>
        <span className="ksm-now-playing-title">{entry.title}</span>
      </div>
      <audio src={entry.audioUrl} autoPlay controls />
    </a>
  );
}
