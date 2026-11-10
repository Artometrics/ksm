import { Text, View } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import Head from "expo-router/head";
import { Wrapper } from "@/components/Wrapper";
import { ArchiveProjectView } from "@/components/ArchiveProjectView";
import { getArchiveProject, getArchiveProjects } from "@/lib/archive";
import { paramString } from "@/lib/params";

export async function generateStaticParams() {
  return getArchiveProjects().map((project) => ({ slug: project.id }));
}

export default function ArchiveProjectScreen() {
  const params = useLocalSearchParams<{ slug: string | string[] }>();
  const slug = paramString(params.slug);
  const project = slug ? getArchiveProject(slug) : undefined;

  if (!project) {
    return (
      <>
        <Head>
          <title>Archive · Kyle McAuliffe</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="stylesheet" href="/archive.css" />
      </Head>
      <Wrapper className="gap-4 py-8">
          <Text className="ksm-headline">That shelf is not on the archive.</Text>
          <Link href="/archive">
            <Text className="ksm-nav">Back to the archive</Text>
          </Link>
        </Wrapper>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{`${project.title} · Archive · Kyle McAuliffe`}</title>
        <meta name="description" content={project.summary} />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="stylesheet" href="/archive.css" />
      </Head>
      <Wrapper className="gap-6 py-8">
        <ArchiveProjectView project={project} />
      </Wrapper>
    </>
  );
}
