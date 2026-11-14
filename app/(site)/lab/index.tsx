import { Link } from "expo-router";
import Head from "expo-router/head";
import { getLabReports } from "@/lib/content";

export default function LabIndex() {
  const reports = getLabReports();

  return (
    <>
      <Head>
        <title>Lab reports · Kyle McAuliffe</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Records of retired and archived side projects."
        />
      </Head>
      <div className="ksm-page-sheet ksm-journal">
        <header className="ksm-journal-head">
          <h1 className="ksm-headline ksm-sheet-title">Lab reports</h1>
          <h2 className="ksm-headline">What got built, and where it went.</h2>
          <p className="ksm-lede">
            A record of side projects that were retired, archived, or folded
            into Dawn, Bagel, or Pantheon. Each note uses the repo, where one
            still exists, and the 13 Nov 2026 Drive archive index.
          </p>
        </header>
        <section aria-labelledby="lab-reports">
          <h2 id="lab-reports" className="ksm-section">
            Reports
          </h2>
          <div className="ksm-lab-list">
            {reports.map((report) => (
              <article key={report.slug} className="ksm-note">
                <p className="ksm-note-meta">
                  {report.disposition ? report.disposition : "Lab report"}
                </p>
                <h3>
                  <Link href={`/lab/${report.slug}` as "/lab"}>{report.title}</Link>
                </h3>
                {report.description ? <p>{report.description}</p> : null}
                <Link href={`/lab/${report.slug}` as "/lab"}>Read the report</Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
