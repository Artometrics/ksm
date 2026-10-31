import { useEffect, useMemo, useState } from "react";
import { HOME_CATEGORIES } from "@/data/homeCategories";
import { NOW_UPDATES } from "@/data/now";
import { getBlogPosts } from "@/lib/content";
import {
  getLaunchProjects,
  projectDetailPath,
  projects,
} from "@/lib/projects";
import {
  getFeaturedProject,
  launchLabelFor,
  readNowPlaying,
  rememberProjectLaunch,
  writeNowPlaying,
  projectToNowPlaying,
} from "@/lib/nowPlaying";

function matchesQuery(text: string, query: string) {
  if (!query.trim()) return true;
  return text.toLowerCase().includes(query.trim().toLowerCase());
}

function onLaunchProject(project: ReturnType<typeof getLaunchProjects>[number]) {
  rememberProjectLaunch(project);
}

function TallTile({
  title,
  subtitle,
  cover,
  href,
  external,
  launchProject,
  badge,
}: {
  title: string;
  subtitle: string;
  cover: string;
  href: string;
  external?: boolean;
  launchProject?: ReturnType<typeof getLaunchProjects>[number];
  badge?: string;
}) {
  const linkProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <a
      className="ksm-home-tall-tile"
      href={href}
      {...linkProps}
      onClick={() => {
        if (launchProject) onLaunchProject(launchProject);
      }}
    >
      <img className="ksm-home-tall-cover" src={cover} alt="" loading="lazy" />
      <span className="ksm-home-tall-shade" aria-hidden="true" />
      {badge ? <span className="ksm-home-tile-badge">{badge}</span> : null}
      <span className="ksm-home-tall-title">{title}</span>
      <span className="ksm-home-tall-sub">{subtitle}</span>
    </a>
  );
}

export function HomeLauncher() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!readNowPlaying()) {
      writeNowPlaying(projectToNowPlaying(getFeaturedProject()));
    }
  }, []);

  const launchProjects = getLaunchProjects();
  const featured = getFeaturedProject();
  const journalPosts = getBlogPosts().slice(0, 8);
  const moreItems = projects.filter((p) => p.id !== featured.id);

  const filteredCategories = useMemo(
    () =>
      HOME_CATEGORIES.filter((cat) =>
        matchesQuery(`${cat.label} ${cat.id}`, query),
      ),
    [query],
  );

  const playNow = useMemo(
    () =>
      launchProjects.filter((p) =>
        matchesQuery(`${p.title} ${p.line} ${p.tags.join(" ")}`, query),
      ),
    [launchProjects, query],
  );

  const updates = useMemo(
    () =>
      NOW_UPDATES.filter((u) => matchesQuery(`${u.text} ${u.date}`, query)),
    [query],
  );

  const readRow = useMemo(
    () =>
      journalPosts.filter((post) =>
        matchesQuery(`${post.title} ${post.description ?? ""}`, query),
      ),
    [journalPosts, query],
  );

  const moreGrid = useMemo(
    () =>
      moreItems.filter((p) =>
        matchesQuery(`${p.title} ${p.line} ${p.tags.join(" ")}`, query),
      ),
    [moreItems, query],
  );

  const showFeatured = matchesQuery(
    `${featured.title} ${featured.line}`,
    query,
  );

  return (
    <div className="ksm-home">
      <label className="ksm-home-search">
        <span className="visually-hidden">Search projects and posts</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What do you want to launch?"
          enterKeyHint="search"
        />
      </label>

      {filteredCategories.length > 0 ? (
        <section className="ksm-home-section">
          <h2 className="ksm-home-section-title">Browse all</h2>
          <div className="ksm-home-cat-grid">
            {filteredCategories.map((cat) => (
              <a
                key={cat.id}
                className={`ksm-home-cat ksm-home-cat--${cat.tone}`}
                href={cat.href}
              >
                <span className="ksm-home-cat-label">{cat.label}</span>
                <img
                  className="ksm-home-cat-art"
                  src={cat.cover}
                  alt=""
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </section>
      ) : null}

      {showFeatured ? (
        <section className="ksm-home-section">
          <h2 className="ksm-home-section-title">Picked for you</h2>
          <article className="ksm-home-picked">
            <div className="ksm-home-picked-copy">
              <p className="ksm-kicker">Featured</p>
              <h3 className="ksm-home-picked-title">{featured.title}</h3>
              <p className="ksm-home-picked-line">{featured.line}</p>
              <div className="ksm-home-picked-actions">
                <a
                  className="ksm-home-play-btn"
                  href={featured.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onLaunchProject(featured)}
                >
                  {launchLabelFor(featured.tags)}
                </a>
                <a className="ksm-nav" href={projectDetailPath(featured.id)}>
                  Full story
                </a>
              </div>
            </div>
            <img
              className="ksm-home-picked-art"
              src={featured.cover ?? featured.thumbnail}
              alt=""
            />
          </article>
        </section>
      ) : null}

      {playNow.length > 0 ? (
        <section className="ksm-home-section">
          <h2 className="ksm-home-section-title">Play now</h2>
          <div className="ksm-home-rail">
            {playNow.map((project) => (
              <TallTile
                key={project.id}
                title={project.title}
                subtitle={project.tags.join(" · ")}
                cover={project.cover ?? project.thumbnail}
                href={project.href}
                external
                launchProject={project}
                badge={launchLabelFor(project.tags)}
              />
            ))}
          </div>
        </section>
      ) : null}

      {updates.length > 0 ? (
        <section className="ksm-home-section">
          <h2 className="ksm-home-section-title">Latest updates</h2>
          <div className="ksm-home-rail">
            {updates.map((item) => (
              <TallTile
                key={item.href}
                title={item.date}
                subtitle={item.text}
                cover="/images/thumbnails/placeholder.png"
                href={item.href}
                external
                badge="Update"
              />
            ))}
          </div>
        </section>
      ) : null}

      {readRow.length > 0 ? (
        <section className="ksm-home-section">
          <h2 className="ksm-home-section-title">Read</h2>
          <div className="ksm-home-rail">
            {readRow.map((post) => (
              <TallTile
                key={post.slug}
                title={post.title}
                subtitle={post.description ?? "Journal"}
                cover={post.heroImage ?? post.image?.url ?? "/images/thumbnails/placeholder.png"}
                href={`/blog/posts/${post.slug}`}
                badge="Essay"
              />
            ))}
          </div>
        </section>
      ) : null}

      {moreGrid.length > 0 ? (
        <section className="ksm-home-section">
          <h2 className="ksm-home-section-title">More for you</h2>
          <div className="ksm-home-more-grid">
            {moreGrid.map((item) => (
              <div key={item.id} className="ksm-home-more-card">
                <a
                  className="ksm-home-more-launch"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (item.kind === "project") rememberProjectLaunch(item);
                  }}
                >
                  <img
                    src={item.cover ?? item.thumbnail}
                    alt=""
                    className="ksm-home-more-art"
                  />
                  <span className="ksm-home-more-title">{item.title}</span>
                  <span className="ksm-home-more-line">{item.line}</span>
                </a>
                <a className="ksm-nav ksm-home-more-link" href={projectDetailPath(item.id)}>
                  Story
                </a>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {query &&
      !filteredCategories.length &&
      !showFeatured &&
      !playNow.length &&
      !updates.length &&
      !readRow.length &&
      !moreGrid.length ? (
        <p className="ksm-lede">No matches for &ldquo;{query}&rdquo;.</p>
      ) : null}
    </div>
  );
}
