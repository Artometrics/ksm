import { useEffect, useState } from "react";

export function CrtToggle() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    setOn(document.documentElement.getAttribute("data-crt") === "on");
  }, []);

  const toggle = () => {
    const next = !on;
    setOn(next);
    if (next) document.documentElement.setAttribute("data-crt", "on");
    else document.documentElement.removeAttribute("data-crt");
    try {
      localStorage.setItem("ksm-crt", next ? "on" : "off");
    } catch {
      /* ignore */
    }
  };

  return (
    <button type="button" className="ksm-pixel-btn" aria-pressed={on} onClick={toggle}>
      {on ? "CRT on" : "CRT off"}
    </button>
  );
}
