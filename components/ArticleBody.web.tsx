import { createElement, useEffect, useRef } from "react";

/**
 * Web article body — inject HTML directly for proper typography & links.
 */
export function ArticleBody({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) ref.current.innerHTML = html;
  }, [html]);

  return createElement("div", {
    ref,
    className: "hemingway-prose",
  });
}
