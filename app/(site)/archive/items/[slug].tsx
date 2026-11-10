import { Text } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import Head from "expo-router/head";
import { Wrapper } from "@/components/Wrapper";
import { ArchiveItemView } from "@/components/ArchiveItemView";
import { getArchiveItem, getArchiveItems } from "@/lib/archive";
import { paramString } from "@/lib/params";

export async function generateStaticParams() {
  return getArchiveItems().map((item) => ({ slug: item.id }));
}

export default function ArchiveItemScreen() {
  const params = useLocalSearchParams<{ slug: string | string[] }>();
  const slug = paramString(params.slug);
  const item = slug ? getArchiveItem(slug) : undefined;

  if (!item) {
    return (
      <>
        <Head>
          <title>Archive · Kyle McAuliffe</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="stylesheet" href="/archive.css" />
      </Head>
      <Wrapper className="gap-4 py-8">
          <Text className="ksm-headline">That piece is not on the shelf.</Text>
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
        <title>{`${item.title} · Archive · Kyle McAuliffe`}</title>
        <meta name="description" content={item.summary} />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="stylesheet" href="/archive.css" />
      </Head>
      <Wrapper className="gap-6 py-8">
        <ArchiveItemView item={item} />
      </Wrapper>
    </>
  );
}
