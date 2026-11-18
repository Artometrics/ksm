import { Text, View } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import Head from "expo-router/head";
import { Wrapper } from "@/components/Wrapper";
import { PageSeo } from "@/components/PageSeo";
import { ProjectConceptPage } from "@/components/ProjectConceptPage";
import projectsJson from "@/data/projects.json";
import {
  CONCEPT_PAGE_SLUGS,
  getConceptPage,
} from "@/data/project-pages";
import { allEssaySlugs, getProjectEssay } from "@/data/projectEssays";
import { archivePathForSiteProject } from "@/lib/archive";
import { getProjectById, isDisplayArt, isPublicLaunchUrl } from "@/lib/projects";
import { paramString } from "@/lib/params";

export async function generateStaticParams() {
  const concept = Array.from(new Set([...CONCEPT_PAGE_SLUGS, ...allEssaySlugs()])).map((slug) => ({ slug }));
  const rest = projectsJson
    .filter((item) => !CONCEPT_PAGE_SLUGS.includes(item.id as (typeof CONCEPT_PAGE_SLUGS)[number]))
    .map((item) => ({ slug: item.id }));
  return [...concept, ...rest];
}

function MinimalProjectDetail({
  project,
}: {
  project: NonNullable<ReturnType<typeof getProjectById>>;
}) {
  const live = isPublicLaunchUrl(project.href) ? project.href : null;
  const internal = project.href?.startsWith("/") ? project.href : null;
  const archiveHref = (archivePathForSiteProject(project.id) ?? "/archive") as "/archive";
  const links: { label: string; href: string }[] = [];
  if (live) links.push({ label: "Live site", href: live });
  if (internal) links.push({ label: "Lab report", href: internal });
  if (project.source && project.source !== live && project.source !== internal) {
    links.push({ label: "Source", href: project.source });
  }
  links.push({ label: "Files in the archive", href: archiveHref });

  return (
    <>
      <Head>
        <title>{project.title} · Kyle McAuliffe</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Wrapper className="gap-4 py-8">
        {isDisplayArt(project.cover) ? (
          <img
            className="ksm-banner"
            src={project.cover}
            alt={`Screenshot of ${project.title}`}
          />
        ) : null}
        <Text className="ksm-kicker">{project.year}</Text>
        <Text accessibilityRole="header" className="ksm-headline ksm-article-title">
          {project.title}
        </Text>
        <Text className="ksm-lede">{project.line}</Text>
        <Text className="ksm-card-tags">{project.tags.join(" · ")}</Text>
        {live ? (
          <a className="ksm-nav" href={live} target="_blank" rel="noopener noreferrer">
            Open live site
          </a>
        ) : internal ? (
          <Link href={internal as "/lab/fernbound"}>
            <Text className="ksm-nav">Read the lab report</Text>
          </Link>
        ) : (
          <Text className="ksm-lede">No public link for this project yet.</Text>
        )}
        <div className="ksm-files">
          <h2 className="ksm-section">Files and links</h2>
          <ul>
            {links.map((link) => (
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
        <Link href="/projects">
          <Text className="ksm-nav">All projects</Text>
        </Link>
      </Wrapper>
    </>
  );
}

export default function ProjectDetailScreen() {
  const params = useLocalSearchParams<{ slug: string | string[] }>();
  const slug = paramString(params.slug);
  const essay = getProjectEssay(slug);
  const conceptPage = getConceptPage(slug);
  const project = getProjectById(slug);
  const heading = essay ?? conceptPage;

  if (heading) {
    return (
      <>
        <Head>
          <title>{`${heading.title} · Kyle McAuliffe`}</title>
          <meta name="robots" content="noindex, nofollow" />
          <meta name="description" content={heading.tagline} />
        </Head>
        <PageSeo
          title={heading.title}
          description={heading.tagline}
          path={`/projects/${slug}`}
          image={essay?.gallery?.[0]?.src ?? conceptPage?.heroImage}
        />
        <View className="w-full">
          <ProjectConceptPage page={conceptPage} slug={slug} />
        </View>
      </>
    );
  }

  if (project) {
    return <MinimalProjectDetail project={project} />;
  }

  return (
    <>
      <Head>
        <title>Project · Kyle McAuliffe</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Wrapper className="gap-4 py-8">
        <Text className="ksm-headline">Project not found</Text>
        <Link href="/projects">
          <Text className="ksm-nav">Back to projects</Text>
        </Link>
      </Wrapper>
    </>
  );
}
