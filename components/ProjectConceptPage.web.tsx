import { Text, View } from "react-native";
import { Link } from "expo-router";
import type { ProjectPage } from "@/data/project-pages";
import { getProjectEssay, type ProjectEssay } from "@/data/projectEssays";
import { ImageCarousel } from "@/components/ImageCarousel";
import { isPublicLaunchUrl } from "@/lib/projects";

function Links({
  cta,
  links,
}: {
  cta?: { label: string; href: string };
  links?: { label: string; href: string }[];
}) {
  const all = [
    cta && isPublicLaunchUrl(cta.href) ? cta : null,
    ...(links ?? []),
  ].filter(Boolean) as { label: string; href: string }[];
  if (!all.length) return null;
  return (
    <div className="ksm-files">
      <h2 className="ksm-section">Files and links</h2>
      <ul>
        {all.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              {...(/^[a-z]+:/i.test(link.href)
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EssayView({ essay }: { essay: ProjectEssay }) {
  return (
    <article className="ksm-essay">
      <header className="ksm-essay-head">
        <p className="ksm-kicker">Project</p>
        <h1 className="ksm-headline ksm-article-title">{essay.title}</h1>
        <p className="ksm-lede">{essay.tagline}</p>
        {essay.primaryCta && isPublicLaunchUrl(essay.primaryCta.href) ? (
          <a
            className="ksm-essay-cta"
            href={essay.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {essay.primaryCta.label}
          </a>
        ) : null}
      </header>

      <ImageCarousel slides={essay.gallery} />

      {essay.sections.map((section) => (
        <section key={section.title} className="ksm-essay-section">
          <h2 className="ksm-section">{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="ksm-essay-p">
              {paragraph}
            </p>
          ))}
        </section>
      ))}

      <Links cta={essay.primaryCta} links={essay.links} />

      {essay.sources.length ? (
        <section className="ksm-essay-section">
          <h2 className="ksm-section">Sources</h2>
          <ul className="ksm-essay-sources">
            {essay.sources.map((source) => (
              <li key={source.label}>
                {source.date ? <span className="ksm-card-year">{source.date}</span> : null}{" "}
                {source.href ? (
                  <a href={source.href} {...(/^[a-z]+:/i.test(source.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    {source.label}
                  </a>
                ) : (
                  source.label
                )}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <p className="ksm-essay-back">
        <Link href="/projects">
          <Text className="ksm-nav">← All projects</Text>
        </Link>
      </p>
    </article>
  );
}

export function ProjectConceptPage({
  page,
  slug,
}: {
  page?: ProjectPage;
  slug?: string;
}) {
  const essay = getProjectEssay(slug ?? page?.slug ?? "");
  if (essay) return <EssayView essay={essay} />;
  if (!page) return null;

  return (
    <View className="ksm-copy gap-4 py-8" style={{ maxWidth: 720, alignSelf: "center", width: "100%", paddingHorizontal: 20 }}>
      {page.heroImage ? (
        <img className="ksm-banner" src={page.heroImage} alt={`Picture from ${page.title}`} />
      ) : null}
      <Text className="ksm-kicker">Project</Text>
      <Text accessibilityRole="header" className="ksm-headline ksm-article-title">
        {page.title}
      </Text>
      <Text className="ksm-lede">{page.tagline}</Text>
      {page.overview.map((paragraph) => (
        <Text key={paragraph.slice(0, 40)} className="ksm-essay-p">
          {paragraph}
        </Text>
      ))}
      <Links cta={page.primaryCta} links={page.secondaryLinks} />
      <Link href="/projects">
        <Text className="ksm-nav">← All projects</Text>
      </Link>
    </View>
  );
}
