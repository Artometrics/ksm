import { Menu } from "lucide-react-native";
import { useChrome } from "@/lib/chrome";
import { ThemeToggle } from "@/components/ThemeToggle";

/** Thin mobile masthead: one menu button, the Chomsky wordmark, a theme toggle. */
export function SiteHeader() {
  const { setMenuOpen } = useChrome();
  return (
    <header className="ksm-topbar">
      <button
        type="button"
        className="ksm-topbar-btn"
        aria-label="Open menu"
        onClick={() => setMenuOpen(true)}
      >
        <Menu size={22} color="currentColor" strokeWidth={1.75} />
      </button>
      <a href="/" className="ksm-wordmark ksm-wordmark--masthead" aria-label="KSM home">
        KSM
      </a>
      <ThemeToggle compact />
    </header>
  );
}
