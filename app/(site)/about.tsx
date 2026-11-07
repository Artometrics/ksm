import Head from "expo-router/head";
import { Link } from "expo-router";
import { ABOUT_PORTRAIT, LIFE_GALLERY } from "@/data/lifePhotos";
import { NOW_STATUS } from "@/data/now";
import {
  getProjectById,
  isDisplayArt,
  publicLaunchHref,
  type ProjectRecord,
} from "@/lib/projects";

const LINKS = [
  ["Artometrics about page", "https://artometrics.com/about"],
  ["Artometrics on GitHub", "https://github.com/Artometrics"],
  ["Kyle McAuliffe on GitHub", "https://github.com/kylesmcauliffe"],
] as const;

const GROUPS: { label: string; ids: string[] }[] = [
  { label: "Writing", ids: ["cardinal"] },
  { label: "Research", ids: ["artometrics", "lab-log", "games"] },
  { label: "Games", ids: ["pantheon", "nightlight", "cardinal-quest", "questroad", "knightmare"] },
  { label: "Apps", ids: ["dawn", "style-lab", "ksm"] },
];

function rowsFor(ids: string[]) {
  return ids
    .map((id) => getProjectById(id))
    .filter((item): item is ProjectRecord => Boolean(item));
}

export default function AboutScreen() {
  return (
    <>
      <Head>
        <title>About · Kyle McAuliffe</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="ksm-page-sheet ksm-about">
        <header className="ksm-about-intro">
          <img
            className="ksm-about-portrait"
            src={ABOUT_PORTRAIT.src}
            alt={ABOUT_PORTRAIT.alt}
          />
          <div className="ksm-about-intro-copy">
            <h1 className="ksm-headline">Kyle McAuliffe</h1>
            <p className="ksm-lede">
              The Artometrics about page says Kyle McAuliffe founded and edits that magazine.
              Reports there pair a written argument with public datasets. This site is the notebook
              that points at the public work.
            </p>
            <p className="ksm-lede">No street address and no phone number are published here.</p>
            <p className="ksm-about-jump">
              <a href="#work">Work on file</a>
              <a href="#record">Record</a>
              <a href="#reach">Reach</a>
            </p>
          </div>
        </header>

        <section className="ksm-about-life" aria-labelledby="about-pictures">
          <h2 id="about-pictures" className="ksm-section">
            Pictures on file
          </h2>
          <div className="ksm-about-life-grid">
            {LIFE_GALLERY.map((photo) => (
              <figure key={photo.slug} className="ksm-about-figure">
                <img src={photo.src} alt={photo.alt} />
                {photo.caption ? <figcaption>{photo.caption}</figcaption> : null}
              </figure>
            ))}
          </div>
        </section>

        <section id="work" className="ksm-about-work" aria-labelledby="about-work">
          <h2 id="about-work" className="ksm-section">
            Work on file
          </h2>
          <p className="ksm-lede">
            {NOW_STATUS} Each row uses the project record in this repo.
          </p>
          {GROUPS.map((group) => (
            <div key={group.label} className="ksm-about-group">
              <h3 className="ksm-about-group-title">{group.label}</h3>
              <div className="ksm-about-directory">
                {rowsFor(group.ids).map((item) => {
                  const launch = publicLaunchHref(item);
                  return (
                    <article key={item.id} className="ksm-about-row">
                      {isDisplayArt(item.cover) ? (
                        <img className="ksm-about-thumb" src={item.cover} alt="" />
                      ) : (
                        <span className="ksm-about-thumb ksm-about-thumb--empty">No art on file</span>
                      )}
                      <div className="ksm-about-row-copy">
                        <h4 className="ksm-about-row-title">{item.title}</h4>
                        <p className="ksm-about-row-line">{item.line}</p>
                        <p className="ksm-about-row-links">
                          <Link href={`/projects/${item.id}` as "/projects"}>Project page</Link>
                          {launch ? (
                            <a href={launch} target="_blank" rel="noopener noreferrer">
                              Open live
                            </a>
                          ) : (
                            <span>No public play link</span>
                          )}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        <section id="record" className="ksm-about-record" aria-labelledby="about-record">
          <h2 id="about-record" className="ksm-section">
            Record
          </h2>
          <div className="ksm-about-record-grid">
            <article className="ksm-note">
              <h3>CV</h3>
              <p>A PDF can live at public/cv.pdf. No file is in the site yet.</p>
              <Link href="/cv">Open the CV page</Link>
            </article>
            <article className="ksm-note">
              <h3>Journal</h3>
              <p>Reviewed notes only. Three drafts are in the repo and labeled as drafts.</p>
              <Link href="/blog">Open the journal</Link>
            </article>
            <article className="ksm-note">
              <h3>Now</h3>
              <p>Commit dates from the public repos, not a diary.</p>
              <Link href="/now">Open the dated notes</Link>
            </article>
          </div>
        </section>

        <section id="reach" aria-labelledby="about-reach">
          <h2 id="about-reach" className="ksm-section">
            Reach
          </h2>
          <ul className="ksm-about-reach">
            {LINKS.map(([label, href]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
          <p className="ksm-fine">
            TODO: add email or other contact channels when they are published in this repo.
          </p>
        </section>
      </div>
    </>
  );
}
