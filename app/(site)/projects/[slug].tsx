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
import { getProjectById } from "@/lib/projects";
import { paramString } from "@/lib/params";

export async function generateStaticParams() {
  const concept = CONCEPT_PAGE_SLUGS.map((slug) => ({ slug }));
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
  return (
    <>
      <Head>
        <title>{project.title} · Kyle McAuliffe</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Wrapper className="gap-4 py-8">
        {project.cover ? (
          <img
            className="ksm-launcher-cover ksm-launcher-cover--hero"
            src={project.cover}
            alt=""
          />
        ) : null}
        <Text className="ksm-kicker">{project.year}</Text>
        <Text accessibilityRole="header" className="ksm-headline">
          {project.title}
        </Text>
        <Text className="ksm-lede">{project.line}</Text>
        <Text className="ksm-card-tags">{project.tags.join(" · ")}</Text>
        <a className="ksm-nav" href={project.href} target="_blank" rel="noopener noreferrer">
          Open live site
        </a>
        <a className="ksm-nav" href={project.source}>
          Source note
        </a>
        <Link href="/archive">
          <Text className="ksm-nav">Downloads in archive</Text>
        </Link>
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
  const conceptPage = getConceptPage(slug);
  const project = getProjectById(slug);

  if (conceptPage) {
    return (
      <>
        <Head>
          <title>{`${conceptPage.title} · Kyle McAuliffe`}</title>
          <meta name="robots" content="noindex, nofollow" />
          <meta name="description" content={conceptPage.tagline} />
        </Head>
        <PageSeo
          title={conceptPage.title}
          description={conceptPage.tagline}
          path={`/projects/${conceptPage.slug}`}
          image={conceptPage.heroImage}
        />
        <View className="w-full">
          <ProjectConceptPage page={conceptPage} />
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
