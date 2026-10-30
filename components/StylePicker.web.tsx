import { useEffect, useState } from "react";
import { View } from "react-native";

const STYLES = [
  { id: "notebook", label: "Notebook" },
  { id: "desk", label: "Desk" },
  { id: "magazine", label: "Magazine" },
] as const;

type StyleId = (typeof STYLES)[number]["id"];
const KEY = "ksm-style";

function readStyle(): StyleId {
  if (typeof document === "undefined") return "notebook";
  const current = document.documentElement.getAttribute("data-style");
  if (current === "desk" || current === "magazine" || current === "notebook") {
    return current;
  }
  return "notebook";
}

export function StylePicker() {
  const [active, setActive] = useState<StyleId>("notebook");

  useEffect(() => {
    setActive(readStyle());
  }, []);

  const choose = (id: StyleId) => {
    setActive(id);
    document.documentElement.setAttribute("data-style", id);
    try {
      localStorage.setItem(KEY, id);
    } catch {
      /* private mode */
    }
  };

  return (
    <View className="ksm-picker" style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
      {STYLES.map((item) => {
        const on = active === item.id;
        return (
          <button
            key={item.id}
            type="button"
            aria-pressed={on}
            onClick={() => choose(item.id)}
            className="ksm-picker-btn"
            style={{
              borderWidth: on ? 2 : 1,
              borderStyle: "solid",
              borderColor: "var(--ink)",
              backgroundColor: on ? "var(--ink)" : "transparent",
              color: on ? "var(--paper)" : "var(--ink)",
              padding: "4px 8px",
              borderRadius: 0,
              fontSize: 12,
              fontFamily: "var(--sans)",
              cursor: "pointer",
            }}
          >
            {item.label}
          </button>
        );
      })}
    </View>
  );
}
