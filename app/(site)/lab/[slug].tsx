import { Link, useLocalSearchParams } from "expo-router";
import Head from "expo-router/head";
import { ArticleBody } from "@/components/ArticleBody";
import { ImageCarousel } from "@/components/ImageCarousel";
import { formatAuthorName, formatDate, getLabReport, getLabReports } from "@/lib/content";
import { labCoverSrc, labShots } from "@/lib/labMedia";
import { paramString } from "@/lib/params";

export async function generateStaticParams() {
  return getLabReports().map((report) => ({ slug: report.slug }));
}

export default function LabReportScreen() {
  const params = useLocalSearchParams<{ slug: string | string[] }>();
  const slug = paramString(params.slug);
  const report = getLabReport(slug);

  if (!report) {
    return (
      <>
        <Head>
          <title>Report not found · Kyle McAuliffe</title>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <div className="ksm-page-sheet ksm-journal">
          <h1 className="ksm-headline ksm-sheet-title">Report not found</h1>
          <p className="ksm-lede">
            <Link href="/lab">Back to lab reports</Link>
          </p>
        </div>
      </>
    );
  }

  const author = report.author
    ? formatAuthorName(String(report.author))
    : "Kyle McAuliffe";
  const shots = labShots(report.slug);

  return (
    <>
      <Head>
        <title>{`${report.title} · Kyle McAuliffe`}</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content={report.description} />
        <meta property="og:title" content={report.title} />
        <meta property="og:description" content={report.description} />
        <meta property="og:type" content="article" />
      </Head>
      <div className="ksm-page-sheet ksm-journal">
        <header className="ksm-journal-head">
          <p className="ksm-note-meta">
            <Link href="/lab">Lab</Link>
            {report.disposition ? ` · ${report.disposition}` : ""}
            {report.pubDate ? ` · ${formatDate(report.pubDate)}` : ""}
            {` · ${author}`}
          </p>
          <h1 className="ksm-headline ksm-sheet-title ksm-article-title">{report.title}</h1>
        </header>
        <img
          className="ksm-ticket-hero"
          src={labCoverSrc(report.slug)}
          alt=""
        />
        {shots.length ? <ImageCarousel slides={shots} /> : null}
        <ArticleBody html={report.body} />
        <p className="ksm-lede">
          <Link href="/lab">All lab reports</Link>
        </p>
      </div>
    </>
  );
}
