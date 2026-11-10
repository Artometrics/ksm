import { useMemo, useState } from "react";
import { Link } from "expo-router";
import { getArchiveItems, getArchiveMeta, getArchiveProjects, type ArchiveItem } from "@/lib/archive";

const LEAD_SHELVES = [
  "Cardinal",
  "Artometrics",
  "Artometrics / Franchise",
  "Artometrics / Anime",
  "West Side",
  "KSM",
  "Pantheon",
  "Dawn",
];

export function ArchiveLibrary() {
  const meta = getArchiveMeta();
  const items = getArchiveItems();
  const projects = getArchiveProjects();
  const [query, setQuery] = useState("");
  const needle = query.trim().toLowerCase();

  const shelves = useMemo(() => {
    return projects
      .map((project) => ({
        project,
        items: items.filter((item) => {
          if (item.projectId !== project.id) return false;
          if (!needle) return true;
          return [item.title, item.summary, item.category, item.projectTitle, project.title]
            .join(" ")
            .toLowerCase()
            .includes(needle);
        }),
      }))
      .filter((shelf) => shelf.items.length > 0)
      .sort((a, b) => {
        const aLead = LEAD_SHELVES.indexOf(a.project.title);
        const bLead = LEAD_SHELVES.indexOf(b.project.title);
        if (aLead >= 0 && bLead >= 0) return aLead - bLead;
        if (aLead >= 0) return -1;
        if (bLead >= 0) return 1;
        if (a.project.title === "Not filed yet") return 1;
        if (b.project.title === "Not filed yet") return -1;
        return b.items.length - a.items.length || a.project.title.localeCompare(b.project.title);
      });
  }, [items, needle, projects]);

  return (
    <div className="ksm-shelves">
      <h1 className="ksm-shelves-title">Archive</h1>
      <p className="ksm-shelves-intro">
        {meta.itemPages.toLocaleString()} pieces on {meta.projectPages} shelves.{" "}
        {meta.rolledFiles.toLocaleString()} loose files stay with their parent.
      </p>
      <input
        className="ksm-shelves-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search the shelves"
        aria-label="Search the shelves"
      />

      {shelves.length === 0 ? (
        <p className="ksm-shelves-intro">Nothing on the shelves matches that.</p>
      ) : (
        shelves.map(({ project, items: pieces }) => (
          <section key={project.id} className="ksm-shelf" aria-labelledby={`shelf-${project.id}`}>
            <div className="ksm-shelf-head">
              <h2 id={`shelf-${project.id}`} className="ksm-shelf-name">
                <Link href={{ pathname: "/archive/projects/[slug]", params: { slug: project.id } }}>
                  {project.title}
                </Link>
              </h2>
              <span className="ksm-shelf-count">{pieces.length}</span>
            </div>
            <ul className="ksm-shelf-rows">
              {pieces.map((item) => (
                <ShelfRow key={item.id} item={item} />
              ))}
            </ul>
          </section>
        ))
      )}
    </div>
  );
}

function ShelfRow({ item }: { item: ArchiveItem }) {
  return (
    <li className="ksm-shelf-row">
      <Link
        href={{ pathname: "/archive/items/[slug]", params: { slug: item.id } }}
        className="ksm-shelf-link"
      >
        <img src={item.thumb} alt="" />
        <span className="ksm-shelf-kind">{item.category}</span>
        <span className="ksm-shelf-piece">{item.title}</span>
      </Link>
      <a className="ksm-shelf-dl" href={item.download} download={item.downloadName}>
        Download
      </a>
    </li>
  );
}
