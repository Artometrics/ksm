import { useEffect, useMemo } from "react";
import { HOME_CATEGORIES } from "@/data/homeCategories";
import { NOW_UPDATES } from "@/data/now";
import { RasterImage } from "@/components/RasterImage";
import { getBlogPosts } from "@/lib/content";
import { useLaunchQuery } from "@/lib/launchQuery";
import {
  getFeaturedProject,
  launchLabelFor,
  readNowPlaying,
  rememberProjectLaunch,
  writeNowPlaying,
  projectToNowPlaying,
} from "@/lib/nowPlaying";
import {
  isOnPlayShelf,
  projectDetailPath,
  projects,
  publicLaunchHref,
  type ProjectRecord,
} from "@/lib/projects";

function matchesQuery(text: string, query: string) {
  if (!query.trim()) return true;
  return text.toLowerCase().includes(query.trim().toLowerCase());
}

function PlayCard({ project }: { project: ProjectRecord }) {
  const href = publicLaunchHref(project);
  if (!href) return null;
  const label = launchLabelFor(project.tags);
  const launch = () => rememberProjectLaunch(project);

  return (
    <article className="ksm-play-card">
      <a
        className="ksm-play-media"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} ${project.title}`}
        onClick={launch}
      >
        <RasterImage src={project.cover} className="ksm-play-art" />
      </a>
      <div className="ksm-play-body">
        <h3 className="ksm-play-title">{project.title}</h3>
        <a
          className="ksm-home-play-btn"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={launch}
        >
          {label}
        </a>
        <a className="ksm-nav ksm-play-story" href={projectDetailPath(project.id)}>
          Story
        </a>
      </div>
    </article>
  );
}

function ShelfCard({ project }: { project: ProjectRecord }) {
  const href = publicLaunchHref(project);
  const missingPlayLink =
    project.tags.includes("Games") && href == null;

  return (
    <article className="ksm-shelf-card">
      {href ? (
        <a
          className="ksm-shelf-launch"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if (project.kind === "project") rememberProjectLaunch(project);
          }}
        >
          <RasterImage src={project.cover} className="ksm-shelf-art" />
          <span className="ksm-shelf-title">{project.title}</span>
          <span className="ksm-shelf-line">{project.line}</span>
        </a>
      ) : (
        <a className="ksm-shelf-launch" href={projectDetailPath(project.id)}>
          <RasterImage src={project.cover} className="ksm-shelf-art" />
          <span className="ksm-shelf-title">{project.title}</span>
          <span className="ksm-shelf-line">{project.line}</span>
        </a>
      )}
      {missingPlayLink ? (
        <p className="ksm-shelf-note">
          No public play link yet. The prototype is not hosted.
        </p>
      ) : null}
      <a className="ksm-nav ksm-shelf-story" href={projectDetailPath(project.id)}>
        Full story
      </a>
    </article>
  );
}

export function HomeLauncher() {
  const { query, setQuery } = useLaunchQuery();

  useEffect(() => {
    if (!readNowPlaying()) {
      writeNowPlaying(projectToNowPlaying(getFeaturedProject()));
    }
  }, []);

  const featured = getFeaturedProject();
  const featuredHref = publicLaunchHref(featured);
  const journalPosts = getBlogPosts().slice(0, 8);

  const filteredCategories = useMemo(
    () =>
      HOME_CATEGORIES.filter((cat) =>
        matchesQuery(`${cat.label} ${cat.id}`, query),
      ),
    [query],
  );

  const playNow = useMemo(
    () =>
      projects.filter(
        (project) =>
          isOnPlayShelf(project) &&
          matchesQuery(
            `${project.title} ${project.line} ${project.tags.join(" ")}`,
            query,
          ),
      ),
    [query],
  );

  const updates = useMemo(
    () =>
      NOW_UPDATES.filter((item) =>
        matchesQuery(`${item.text} ${item.date}`, query),
      ),
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
      projects.filter(
        (project) =>
          project.id !== featured.id &&
          !isOnPlayShelf(project) &&
          matchesQuery(
            `${project.title} ${project.line} ${project.tags.join(" ")}`,
            query,
          ),
      ),
    [featured.id, query],
  );

  const showFeatured =
    Boolean(featuredHref) &&
    matchesQuery(`${featured.title} ${featured.line}`, query);

  const nothingMatches =
    Boolean(query) &&
    !filteredCategories.length &&
    !showFeatured &&
    !playNow.length &&
    !updates.length &&
    !readRow.length &&
    !moreGrid.length;

  return (
    <div className="ksm-home">
      <h1 className="ksm-home-title">Home</h1>
      <label className="ksm-home-search ksm-home-search--page">
        <span className="visually-hidden">Search projects and posts</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
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
                className={[
                  "ksm-home-cat",
                  `ksm-home-cat--${cat.tone}`,
                  cat.cover ? "" : "ksm-home-cat--text",
                ]
                  .filter(Boolean)
                  .join(" ")}
                href={cat.href}
              >
                <span className="ksm-home-cat-label">{cat.label}</span>
                <RasterImage src={cat.cover} className="ksm-home-cat-art" />
              </a>
            ))}
          </div>
        </section>
      ) : null}

      {showFeatured && featuredHref ? (
        <section className="ksm-home-section">
          <h2 className="ksm-home-section-title">Picked for you</h2>
          <article className="ksm-home-picked">
            <a
              className="ksm-home-picked-media"
              href={featuredHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${launchLabelFor(featured.tags)} ${featured.title}`}
              onClick={() => rememberProjectLaunch(featured)}
            >
              <RasterImage src={featured.cover} className="ksm-home-picked-art" />
            </a>
            <div className="ksm-home-picked-copy">
              <h3 className="ksm-home-picked-title">{featured.title}</h3>
              <p className="ksm-home-picked-line">{featured.line}</p>
              <div className="ksm-home-picked-actions">
                <a
                  className="ksm-home-play-btn"
                  href={featuredHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => rememberProjectLaunch(featured)}
                >
                  {launchLabelFor(featured.tags)}
                </a>
                <a className="ksm-nav" href={projectDetailPath(featured.id)}>
                  Full story
                </a>
              </div>
            </div>
          </article>
        </section>
      ) : null}

      {playNow.length > 0 ? (
        <section className="ksm-home-section">
          <h2 className="ksm-home-section-title">Play now</h2>
          <div className="ksm-home-play-grid">
            {playNow.map((project) => (
              <PlayCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      ) : null}

      {updates.length > 0 ? (
        <section className="ksm-home-section">
          <h2 className="ksm-home-section-title">Latest updates</h2>
          <ul className="ksm-home-updates">
            {updates.map((item) => (
              <li key={item.href} className="ksm-home-update">
                <time dateTime={item.date}>{item.date}</time>
                <p>{item.text}</p>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  Open the note
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {readRow.length > 0 ? (
        <section className="ksm-home-section">
          <h2 className="ksm-home-section-title">Read</h2>
          <ul className="ksm-home-read">
            {readRow.map((post) => (
              <li key={post.slug}>
                <a href={`/blog/posts/${post.slug}`}>
                  <RasterImage
                    src={post.heroImage ?? post.image?.url}
                    className="ksm-home-read-art"
                  />
                  <span className="ksm-home-read-title">{post.title}</span>
                  {post.description ? (
                    <span className="ksm-home-read-line">{post.description}</span>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : !query ? (
        <section className="ksm-home-section">
          <h2 className="ksm-home-section-title">Read</h2>
          <p className="ksm-home-empty">
            No published notes yet.{" "}
            <a className="ksm-nav" href="/blog">
              Open the journal
            </a>
          </p>
        </section>
      ) : null}

      {moreGrid.length > 0 ? (
        <section className="ksm-home-section">
          <h2 className="ksm-home-section-title">More for you</h2>
          <div className="ksm-home-more-grid">
            {moreGrid.map((item) => (
              <ShelfCard key={item.id} project={item} />
            ))}
          </div>
        </section>
      ) : null}

      {nothingMatches ? (
        <p className="ksm-lede">No matches for &ldquo;{query}&rdquo;.</p>
      ) : null}
    </div>
  );
}
