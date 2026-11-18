import { Link, useLocalSearchParams } from "expo-router";
import Head from "expo-router/head";
import { ArticleBody } from "@/components/ArticleBody";
import { PageSeo } from "@/components/PageSeo";
import { assetUrl } from "@/lib/assets";
import {
  formatAuthorName,
  formatDate,
  getAdjacentPosts,
  getAllBlogPosts,
  getBlogPost,
} from "@/lib/content";
import { paramString } from "@/lib/params";

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export default function BlogPostScreen() {
  const params = useLocalSearchParams<{ slug: string | string[] }>();
  const slug = paramString(params.slug);
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <>
        <Head>
          <title>Post not found · Kyle McAuliffe</title>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <div className="ksm-page-sheet ksm-journal">
          <h1 className="ksm-headline ksm-sheet-title">Post not found</h1>
          <p className="ksm-lede">
            <Link href="/blog">Back to journal</Link>
          </p>
        </div>
      </>
    );
  }

  const hero = assetUrl(post.heroImage);
  const adjacent = getAdjacentPosts(post.slug);
  const author = post.author
    ? formatAuthorName(String(post.author))
    : "Staff";
  const tag = post.tags?.[0];
  const og = post.heroImage || `/images/og/${post.slug}.svg`;

  return (
    <>
      <Head>
        <title>{`${post.title} · Kyle McAuliffe`}</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`https://kylesmcauliffe.com${og}`} />
      </Head>
      <PageSeo
        title={post.title}
        description={post.description}
        path={`/blog/posts/${post.slug}`}
        image={og}
        type="article"
      />
      <div className="ksm-page-sheet ksm-journal">
        <header className="ksm-journal-head">
          <p className="ksm-note-meta">
            <Link href="/blog">Journal</Link>
            {tag ? ` · ${tag}` : ""}
            {post.pubDate ? ` · ${formatDate(post.pubDate)}` : ""}
            {` · ${author}`}
            {post.isLocked ? " · Members" : ""}
          </p>
          <h1 className="ksm-headline ksm-sheet-title ksm-article-title">{post.title}</h1>
          {post.draft ? (
            <p className="ksm-lede">Draft. Not published.</p>
          ) : null}
        </header>
        {hero ? (
          <img className="ksm-ticket-hero" src={hero} alt={post.title} />
        ) : null}
        <ArticleBody html={post.body} />
        <nav className="ksm-adjacent" aria-label="Adjacent notes">
          {adjacent.previous ? (
            <Link href={adjacent.previous.href as `/blog/posts/${string}`}>
              ← {adjacent.previous.title}
            </Link>
          ) : (
            <span />
          )}
          {adjacent.next ? (
            <Link href={adjacent.next.href as `/blog/posts/${string}`}>
              {adjacent.next.title} →
            </Link>
          ) : null}
        </nav>
      </div>
    </>
  );
}
