import { useEffect, useRef } from "react";
import { View } from "react-native";

const CANVAS = {
  pixelDensity: 1,
  fov: 45,
  lazyLoad: false,
  style: { position: "absolute", inset: "0", width: "100%", height: "100%" },
};

const GRADIENT = {
  control: "props",
  type: "plane",
  animate: "on",
  uSpeed: 0.1,
  uStrength: 3.2,
  uDensity: 1.2,
  uFrequency: 4.2,
  color1: "#E10600",
  color2: "#1A0506",
  color3: "#F4EFE6",
  grain: "on",
  lightType: "3d",
  brightness: 1.25,
  reflection: 0.12,
  cAzimuthAngle: 180,
  cPolarAngle: 90,
  cDistance: 3.4,
  positionX: 0,
  positionY: 0.35,
  positionZ: 0,
  rotationX: 48,
  rotationY: 0,
  rotationZ: 0,
};

/**
 * ShaderGradient as a lazy island. three.js stays out of the first paint
 * and is not mounted when the visitor prefers reduced motion.
 */
export function ShaderGradientIsland() {
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
      const [{ createRoot }, React, gradient] = await Promise.all([
        import("react-dom/client"),
        import("react"),
        import("@shadergradient/react"),
      ]);
      if (cancelled) return;
      root = createRoot(mount);
      root.render(
        React.createElement(
          gradient.ShaderGradientCanvas,
          CANVAS,
          React.createElement(gradient.ShaderGradient, GRADIENT),
        ),
      );
    })();

    return () => {
      cancelled = true;
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
