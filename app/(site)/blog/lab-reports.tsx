import { Link } from "expo-router";
import Head from "expo-router/head";
import { formatDate, getLabReports } from "@/lib/content";

const GROUPS: { id: string; title: string; note: string; slugs: string[] }[] = [
  {
    id: "desks",
    title: "Desks and tools",
    note: "Apps archived on November 13, 2026.",
    slugs: [
      "lab-mia-maps",
      "lab-crm",
      "lab-vault",
      "lab-storefront",
      "lab-style-lab",
      "lab-loom",
      "lab-newsletter",
      "lab-relay",
      "lab-priority",
      "lab-style-recipes",
      "lab-mint",
      "lab-skins",
    ],
  },
  {
    id: "sites",
    title: "Sites",
    note: "Hosts that were not the live magazine or this site.",
    slugs: ["lab-ksm-dashboard", "lab-magazine-mockup", "lab-webfall"],
  },
  {
    id: "games",
    title: "Small games",
    note: "Nightlight and the other small games retired the same day.",
    slugs: [
      "lab-nightlight",
      "lab-ashmere",
      "lab-lampwick",
      "lab-voltspire",
      "lab-knightmare",
      "lab-godot-game-page",
      "lab-questroad",
      "lab-spider-mom",
      "lab-cardinal-quest",
      "lab-godot-test",
    ],
  },
  {
    id: "merged",
    title: "Merged",
    note: "Copies kept so they can land in Pantheon, Dawn, or Bagel.",
    slugs: ["lab-lineage", "lab-fernbound", "lab-aftercare", "lab-carrie"],
  },
];

export default function LabReportsIndex() {
  const posts = getLabReports();
  const bySlug = new Map(posts.map((post) => [post.slug, post]));

  return (
    <>
      <Head>
        <title>Lab reports · Kyle McAuliffe</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Lab reports on side projects archived November 13, 2026. Each note stays inside the code and the archive README."
        />
      </Head>
      <div className="ksm-page-sheet ksm-journal">
        <header className="ksm-journal-head">
          <p className="ksm-note-meta">Journal · Lab reports</p>
          <h1 className="ksm-headline ksm-sheet-title">Lab reports</h1>
          <p className="ksm-lede">
            Side projects archived on November 13, 2026. Each note says what the
            code and the archive README actually contain, where that project
            lives now, and where the zip is.
          </p>
          <p className="ksm-about-jump">
            <Link href="/blog">Journal</Link>
            <a href="#games">Small games</a>
            <a href="#merged">Merged</a>
          </p>
        </header>

        {GROUPS.map((group) => (
          <section key={group.id} aria-labelledby={group.id}>
            <h2 id={group.id} className="ksm-section">
              {group.title}
            </h2>
            <p className="ksm-lede">{group.note}</p>
            <div className="ksm-journal-drafts">
              {group.slugs.map((slug) => {
                const post = bySlug.get(slug);
                if (!post) return null;
                return (
                  <article key={slug} className="ksm-note">
                    <p className="ksm-note-meta">
                      Lab report
                      {post.pubDate ? ` · ${formatDate(post.pubDate)}` : ""}
                    </p>
                    <h3>
                      <Link href={`/blog/posts/${post.slug}` as "/blog"}>
                        {post.title}
                      </Link>
                    </h3>
                    {post.description ? <p>{post.description}</p> : null}
                    <Link href={`/blog/posts/${post.slug}` as "/blog"}>
                      Read the report
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
