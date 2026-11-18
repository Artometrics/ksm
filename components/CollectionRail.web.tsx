import { COLLECTION, type Collectible } from "@/data/collection";

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

function Tile({ item, compact }: { item: Collectible; compact?: boolean }) {
  const external = isExternal(item.href);
  return (
    <a
      className={compact ? "ksm-mini-card" : "ksm-mini-card ksm-mini-card--roomy"}
      href={item.href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className="ksm-mini-card-art">
        <img src={item.art} alt="" />
      </span>
      <span className="ksm-mini-card-title">{item.title}</span>
    </a>
  );
}

/** Desktop sidebar grid, or a horizontal rail on the phone. */
export function CollectionRail({
  variant = "sidebar",
}: {
  variant?: "sidebar" | "mobile";
}) {
  return (
    <nav
      className={
        variant === "mobile" ? "ksm-collection ksm-collection--mobile" : "ksm-collection"
      }
      aria-label="Featured projects"
    >
      <p className="ksm-collection-label">Collection</p>
      <div className="ksm-collection-grid">
        {COLLECTION.map((item) => (
          <Tile key={item.id} item={item} compact={variant === "sidebar"} />
        ))}
      </div>
    </nav>
  );
}
