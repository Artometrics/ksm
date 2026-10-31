import { projects as enriched } from "@/lib/projects";

export function ProjectDeck() {
  return (
    <>
      <div className="ksm-grid ksm-project-grid">
        {enriched.map((item) => (
          <a
            key={item.id}
            className="ksm-card ksm-project-card"
            data-tags={item.tags.join(" ").toLowerCase()}
            href={item.href}
          >
            <img
              className="ksm-project-cover"
              src={item.cover ?? item.thumbnail}
              alt=""
              width={260}
              height={160}
              loading="lazy"
              decoding="async"
            />
            <span className="ksm-card-year">{item.year}</span>
            <span className="ksm-card-title">{item.title}</span>
            <span className="ksm-card-line">{item.line}</span>
            <span className="ksm-card-tags">{item.tags.join(" · ")}</span>
          </a>
        ))}
      </div>
    </>
  );
}
