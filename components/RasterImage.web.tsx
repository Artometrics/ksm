import { useState } from "react";
import { isDisplayArt } from "@/lib/projects";

/** Renders a project picture. Mark icons and failed loads render nothing. */
export function RasterImage({
  src,
  className,
}: {
  src?: string | null;
  className?: string;
}) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  if (!isDisplayArt(src) || failedSrc === src) return null;
  return (
    <img
      className={className}
      src={src}
      alt=""
      decoding="async"
      onError={() => setFailedSrc(src)}
    />
  );
}
