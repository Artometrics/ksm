import { Link } from "expo-router";
import Head from "expo-router/head";
import { formatDate, getAllBlogPosts, getBlogPosts } from "@/lib/content";

export default function BlogIndex() {
  const published = getBlogPosts();
  const drafts = getAllBlogPosts()
    .filter((post) => post.draft && post.pubDate)
    .sort(
      (a, b) =>
        new Date(b.pubDate!).getTime() - new Date(a.pubDate!).getTime(),
    );

  return (
    <>
      <Head>
        <title>Journal · Kyle McAuliffe</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="ksm-page-sheet ksm-journal">
        <header className="ksm-journal-head">
          <h1 className="ksm-headline ksm-sheet-title">Journal</h1>
          <h2 className="ksm-headline">Notes, when they are ready.</h2>
          <p className="ksm-lede">
            Writing from the projects, published when a note is ready.
          </p>
          <p className="ksm-about-jump">
            <a href="#drafts">Drafts</a>
            <Link href="/now">October notes</Link>
            <Link href="/about">About</Link>
          </p>
        </header>

        <section aria-labelledby="journal-published">
          <h2 id="journal-published" className="ksm-section">
            Published
          </h2>
          {published.length === 0 ? (
            <p className="ksm-lede">No published notes yet.</p>
          ) : (
            <ul className="ksm-journal-list">
              {published.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/posts/${post.slug}` as "/blog"}>{post.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section aria-labelledby="drafts">
          <h2 id="drafts" className="ksm-section">
            Drafts
          </h2>
          <p className="ksm-lede">Still drafts. Not the published journal.</p>
          <div className="ksm-journal-grid">
            {drafts.map((post) => {
              const thumb =
                post.heroImage ||
                (typeof post.image === "object" && post.image && "url" in post.image
                  ? String(post.image.url)
                  : undefined);
              return (
                <a
                  key={post.slug}
                  className="ksm-journal-card"
                  href={`/blog/posts/${post.slug}`}
                >
                  <span className="ksm-journal-card-art">
                    {thumb ? <img src={thumb} alt="" /> : null}
                  </span>
                  <span className="ksm-journal-card-body">
                    <span className="ksm-card-year">
                      Draft{post.pubDate ? ` · ${formatDate(post.pubDate)}` : ""}
                    </span>
                    <span className="ksm-card-title">{post.title}</span>
                    {post.description ? (
                      <span className="ksm-card-line">{post.description}</span>
                    ) : null}
                  </span>
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
