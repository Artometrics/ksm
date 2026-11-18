import { Link } from "expo-router";
import Head from "expo-router/head";
import { getLabReports } from "@/lib/content";
import { labCoverSrc } from "@/lib/labMedia";

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
      <div className="ksm-page-sheet ksm-has-tickets">
        <header className="ksm-journal-head">
          <h1 className="ksm-headline ksm-sheet-title">Lab</h1>
          <p className="ksm-lede">Retired and folded work, on file.</p>
        </header>
        <section aria-labelledby="lab-reports">
          <h2 id="lab-reports" className="ksm-section">
            Reports
          </h2>
          <div className="ksm-ticket-grid ksm-ticket-grid--3">
            {reports.map((report) => (
              <Link
                key={report.slug}
                href={`/lab/${report.slug}` as "/lab"}
                className="ksm-ticket"
              >
                <span className="ksm-ticket-plate">
                  <img src={labCoverSrc(report.slug)} alt="" />
                </span>
                <span className="ksm-ticket-body">
                  <span className="ksm-card-year">
                    {report.disposition || "Lab report"}
                  </span>
                  <span className="ksm-card-title">{report.title}</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
