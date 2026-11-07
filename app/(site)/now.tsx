import { Link } from "expo-router";
import Head from "expo-router/head";
import { NOW_STATUS, NOW_UPDATES } from "@/data/now";

export default function NowScreen() {
  return (
    <>
      <Head>
        <title>Now · Kyle McAuliffe</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="ksm-page-sheet ksm-now">
        <header>
          <h1 className="ksm-headline">What the public repos show lately.</h1>
          <p className="ksm-lede">
            Dates below are commit dates, not a diary. {NOW_STATUS}
          </p>
          <p className="ksm-about-jump">
            <Link href="/blog">Journal drafts</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
          </p>
        </header>
        <ol className="ksm-now-list">
          {NOW_UPDATES.map((item) => (
            <li key={item.href} className="ksm-note">
              <p className="ksm-note-meta">
                <time dateTime={item.date}>{item.date}</time>
              </p>
              <p>{item.text}</p>
              <a href={item.href}>Open the source commit</a>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
