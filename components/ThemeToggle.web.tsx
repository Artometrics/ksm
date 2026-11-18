import { Moon, Sun } from "lucide-react-native";
import { useTheme } from "@/lib/theme";

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { mode, toggle } = useTheme();
  const dark = mode === "dark";
  return (
    <button
      type="button"
      className={compact ? "ksm-theme-toggle ksm-theme-toggle--compact" : "ksm-theme-toggle"}
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
    >
      {dark ? <Sun size={18} color="currentColor" strokeWidth={1.75} /> : <Moon size={18} color="currentColor" strokeWidth={1.75} />}
    </button>
  );
}
