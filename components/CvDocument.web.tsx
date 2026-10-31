import projects from "@/data/projects.json";

const PROJECT_ROWS = projects.filter((item) => item.kind === "project");
const PAPER_ROWS = projects.filter((item) => item.kind === "paper");

export function CvDocument() {
  return (
    <article className="ksm-cv">
      <header className="ksm-cv-header">
        <p className="ksm-kicker">Curriculum vitae</p>
        <h1 className="ksm-cv-name">Kyle McAuliffe</h1>
        <p className="ksm-cv-lede">
          Founder and editor of Artometrics (public data journalism). This page lists only facts
          recorded in this repository and linked dossiers; gaps are marked explicitly.
        </p>
        <ul className="ksm-cv-contact">
          <li>
            <a href="https://github.com/kylesmcauliffe">github.com/kylesmcauliffe</a>
          </li>
          <li>
            <a href="https://github.com/Artometrics">github.com/Artometrics</a>
          </li>
          <li>
            <a href="https://artometrics.com/about">artometrics.com/about</a>
          </li>
        </ul>
      </header>

      <section className="ksm-cv-section">
        <h2>Summary</h2>
        <p>
          Kyle McAuliffe builds public research and writing projects: Artometrics (magazine and
          datasets), Cardinal (Stanford corridor history book and reading room), Dawn (agent studio),
          and supporting tools listed on this site.
        </p>
      </section>

      <section className="ksm-cv-section">
        <h2>Selected projects</h2>
        <ul className="ksm-cv-list">
          {PROJECT_ROWS.map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong>
              <span className="ksm-cv-meta"> · {item.year}</span>
              <p>{item.line}</p>
              <p className="ksm-cv-links">
                <a href={item.href}>Live site</a>
                {" · "}
                <a href={`/projects/${item.id}`}>Project page</a>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="ksm-cv-section">
        <h2>Working papers &amp; reports</h2>
        <ul className="ksm-cv-list">
          {PAPER_ROWS.map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong>
              <span className="ksm-cv-meta"> · {item.year}</span>
              <p>{item.line}</p>
              <p className="ksm-cv-links">
                <a href={item.href}>Open report</a>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="ksm-cv-section">
        <h2>Employment</h2>
        <p className="ksm-cv-todo">to add — no employer list is checked into this repo yet.</p>
      </section>

      <section className="ksm-cv-section">
        <h2>Education</h2>
        <p className="ksm-cv-todo">to add — no degree list is checked into this repo yet.</p>
      </section>

      <section className="ksm-cv-section">
        <h2>Skills</h2>
        <p className="ksm-cv-todo">to add — optional skills section not yet sourced here.</p>
      </section>

      <section className="ksm-cv-section ksm-slot">
        <h2>CV PDF</h2>
        <p>
          A PDF can live at <code>public/cv.pdf</code>. No file is in the site yet, so this slot
          stays empty instead of linking a missing document.
        </p>
      </section>
    </article>
  );
}
