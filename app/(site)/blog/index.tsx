import { Link } from "expo-router";
import Head from "expo-router/head";
import { formatDate, getAllBlogPosts, getBlogPosts } from "@/lib/content";

function postThumb(post: {
  heroImage?: string;
  image?: unknown;
}): string | undefined {
  if (post.heroImage) return post.heroImage;
  if (typeof post.image === "object" && post.image && "url" in post.image) {
    return String((post.image as { url?: string }).url);
  }
  return undefined;
}

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
      <div className="ksm-page-sheet ksm-has-tickets">
        <header className="ksm-journal-head">
          <h1 className="ksm-headline ksm-sheet-title">Journal</h1>
          <p className="ksm-lede">Notes, when they are ready.</p>
        </header>

        {published.length > 0 ? (
          <section aria-labelledby="journal-published">
            <h2 id="journal-published" className="ksm-section">
              Published
            </h2>
            <div className="ksm-ticket-grid ksm-ticket-grid--3">
              {published.map((post) => {
                const thumb = postThumb(post);
                const contain = Boolean(thumb && thumb.endsWith(".svg"));
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/posts/${post.slug}` as "/blog"}
                    className="ksm-ticket"
                  >
                    <span
                      className={
                        contain
                          ? "ksm-ticket-plate ksm-ticket-plate--contain"
                          : "ksm-ticket-plate"
                      }
                    >
                      {thumb ? <img src={thumb} alt="" /> : null}
                    </span>
                    <span className="ksm-ticket-body">
                      <span className="ksm-card-year">
                        {post.pubDate ? formatDate(post.pubDate) : "Published"}
                      </span>
                      <span className="ksm-card-title">{post.title}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        ) : null}

        <section aria-labelledby="drafts">
          <h2 id="drafts" className="ksm-section">
            Drafts
          </h2>
          <div className="ksm-ticket-grid">
            {drafts.map((post) => {
              const thumb = postThumb(post);
              const contain = Boolean(thumb && thumb.endsWith(".svg"));
              return (
                <a
                  key={post.slug}
                  className="ksm-ticket"
                  href={`/blog/posts/${post.slug}`}
                >
                  <span
                    className={
                      contain
                        ? "ksm-ticket-plate ksm-ticket-plate--contain"
                        : "ksm-ticket-plate"
                    }
                  >
                    {thumb ? <img src={thumb} alt="" /> : null}
                  </span>
                  <span className="ksm-ticket-body">
                    <span className="ksm-card-year">
                      Draft{post.pubDate ? ` · ${formatDate(post.pubDate)}` : ""}
                    </span>
                    <span className="ksm-card-title">{post.title}</span>
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
