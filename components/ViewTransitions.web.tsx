import { useEffect } from "react";
import { useRouter } from "expo-router";

export function ViewTransitions() {
  const router = useRouter();

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest?.("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.hash) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const start = document.startViewTransition?.bind(document);
      if (!start || reduce) return;
      event.preventDefault();
      event.stopPropagation();
      start(() => {
        router.push((url.pathname + url.search + url.hash) as "/");
      });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  return null;
}
