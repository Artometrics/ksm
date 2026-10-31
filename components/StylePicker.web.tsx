import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { View } from "react-native";

const STYLES = [
  { id: "pixel", label: "Pixel" },
  { id: "notebook", label: "Notebook" },
  { id: "desk", label: "Desk" },
  { id: "magazine", label: "Magazine" },
  { id: "newsprint", label: "Newsprint" },
  { id: "neon", label: "Neon night" },
  { id: "y2k", label: "Y2K" },
  { id: "rpg", label: "Retro RPG" },
  { id: "gothic", label: "Gothic" },
  { id: "minimal", label: "Minimal" },
  { id: "futurism", label: "Futurism" },
] as const;

type StyleId = (typeof STYLES)[number]["id"];
const KEY = "ksm-style";

function readStyle(): StyleId {
  if (typeof document === "undefined") return "pixel";
  const current = document.documentElement.getAttribute("data-style");
  if (STYLES.some((item) => item.id === current)) {
    return current as StyleId;
  }
  return "pixel";
}

export function StylePicker() {
  const [active, setActive] = useState<StyleId>("pixel");
  const buttonRefs = useRef<Partial<Record<StyleId, HTMLButtonElement>>>({});

  useEffect(() => {
    setActive(readStyle());
  }, []);

  useLayoutEffect(() => {
    const node = buttonRefs.current[active];
    node?.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
  }, [active]);

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
    <View className="ksm-picker">
      {STYLES.map((item) => {
        const on = active === item.id;
        return (
          <button
            key={item.id}
            ref={(el) => {
              if (el) buttonRefs.current[item.id] = el;
            }}
            type="button"
            aria-pressed={on}
            onClick={() => choose(item.id)}
            className="ksm-picker-btn"
            style={{
              borderWidth: on ? 2 : 1,
              borderStyle: "solid",
              borderColor: "var(--ink)",
              backgroundColor: on ? "var(--ink)" : "transparent",
              color: on ? "#F6F1E7" : "var(--ink)",
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
