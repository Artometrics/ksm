import { useEffect, useRef } from "react";
import { View } from "react-native";

const MESH = {
  colors: ["#1A0506", "#E60000", "#3D0008", "#F3E6D4", "#070707"],
  distortion: 0.38,
  swirl: 0.1,
  speed: 0.14,
  grainMixer: 0.12,
  grainOverlay: 0.2,
  scale: 1.15,
  maxPixelCount: 180000,
  minPixelRatio: 1,
  width: "100%",
  height: "100%",
  style: { width: "100%", height: "100%", display: "block" },
};

/**
 * One Paper MeshGradient, mounted in its own React root so the canvas
 * is not reconciled by React Native. Loaded after paint. Skipped when
 * the visitor asks for reduced motion.
 */
export function PaperMeshIsland() {
  const hostRef = useRef<View>(null);

  useEffect(() => {
    const host = hostRef.current as unknown as HTMLElement | null;
    if (!host || typeof window === "undefined") return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let cancelled = false;
    let root: { unmount: () => void } | null = null;
    const mount = document.createElement("div");
    mount.setAttribute("aria-hidden", "true");
    mount.style.cssText = "position:absolute;inset:0;width:100%;height:100%;";
    host.appendChild(mount);

    void (async () => {
      const [{ createRoot }, React, shaders] = await Promise.all([
        import("react-dom/client"),
        import("react"),
        import("@paper-design/shaders-react"),
      ]);
      if (cancelled) return;
      root = createRoot(mount);
      root.render(React.createElement(shaders.MeshGradient, MESH));
    })();

    const onChange = () => {
      if (media.matches) {
        root?.unmount();
        root = null;
      }
    };
    media.addEventListener("change", onChange);

    return () => {
      cancelled = true;
      media.removeEventListener("change", onChange);
      root?.unmount();
      mount.remove();
    };
  }, []);

  return (
    <View
      ref={hostRef}
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      className="ksm-hero-shader absolute inset-0"
      collapsable={false}
    />
  );
}
