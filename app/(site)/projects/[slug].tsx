import { Text, View } from "react-native";
import Head from "expo-router/head";
import { Link, useLocalSearchParams } from "expo-router";
import { Wrapper } from "@/components/Wrapper";
import { getProjectById } from "@/lib/projects";

/** Minimal detail page — replace or extend when the dedicated project PR merges. */
export default function ProjectDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const project = getProjectById(typeof slug === "string" ? slug : "");

  if (!project) {
    return (
      <Wrapper className="gap-4 py-8">
        <Head>
          <title>Project · Kyle McAuliffe</title>
        </Head>
        <Text className="ksm-headline">Project not found</Text>
        <Link href="/projects">
          <Text className="ksm-nav">Back to projects</Text>
        </Link>
      </Wrapper>
    );
  }

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
