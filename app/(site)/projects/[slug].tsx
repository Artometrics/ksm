import { Text, View } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import Head from "expo-router/head";
import { Wrapper } from "@/components/Wrapper";
import { PageSeo } from "@/components/PageSeo";
import { ProjectConceptPage } from "@/components/ProjectConceptPage";
import {
  CONCEPT_PAGE_SLUGS,
  getConceptPage,
} from "@/data/project-pages";
import { paramString } from "@/lib/params";

export async function generateStaticParams() {
  return CONCEPT_PAGE_SLUGS.map((slug) => ({ slug }));
}

export default function ProjectConceptScreen() {
  const params = useLocalSearchParams<{ slug: string | string[] }>();
  const slug = paramString(params.slug);
  const page = getConceptPage(slug);

  if (!page) {
    return (
      <>
        <Head>
          <title>Project not found · Kyle McAuliffe</title>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <Wrapper className="gap-3 py-10">
          <Text className="ksm-headline">Project not found</Text>
          <Link href="/">
            <Text className="ksm-nav">Back home</Text>
          </Link>
        </Wrapper>
      </>
    );
  }

  const description = page.tagline;

  return (
    <>
      <Head>
        <title>{`${page.title} · Kyle McAuliffe`}</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content={description} />
      </Head>
      <PageSeo
        title={page.title}
        description={description}
        path={`/projects/${page.slug}`}
        image={page.heroImage}
      />
      <View className="w-full">
        <ProjectConceptPage page={page} />
      </View>
    </>
  );
}
