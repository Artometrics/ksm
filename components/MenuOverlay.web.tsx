import { useEffect } from "react";
import { X } from "lucide-react-native";
import { usePathname } from "expo-router";
import { useChrome } from "@/lib/chrome";
import { DeskSearch } from "@/components/DeskSearch";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ALL_DIALS } from "@/data/dials";

export function MenuOverlay() {
  const { menuOpen, setMenuOpen } = useChrome();
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, setMenuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen, setMenuOpen]);

  if (!menuOpen) return null;

  return (
    <div className="ksm-menu" role="dialog" aria-modal="true" aria-label="Menu">
      <button
        type="button"
        className="ksm-menu-backdrop"
        aria-label="Close menu"
        onClick={() => setMenuOpen(false)}
      />
      <div className="ksm-lava-grain" aria-hidden="true" />
      <div className="ksm-menu-panel">
        <div className="ksm-menu-head">
          <p className="ksm-wordmark ksm-wordmark--masthead">KSM</p>
          <div className="ksm-menu-head-actions">
            <ThemeToggle compact />
            <button
              type="button"
              className="ksm-topbar-btn"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <X size={22} color="currentColor" strokeWidth={1.75} />
            </button>
          </div>
        </div>
        <div className="ksm-menu-search">
          <DeskSearch placeholder="Search" />
        </div>
        <p className="ksm-menu-label">Go to</p>
        <nav className="ksm-menu-grid" aria-label="Destinations">
          {ALL_DIALS.map((item) => (
            <a
              key={item.id}
              className="ksm-dial"
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              <span className="ksm-dial-art">
                {item.art ? <img src={item.art} alt="" /> : <span className="ksm-dial-fallback">{item.title[0]}</span>}
              </span>
              <span className="ksm-dial-title">{item.title}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
