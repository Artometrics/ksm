import { Text } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import Head from "expo-router/head";
import { Wrapper } from "@/components/Wrapper";
import { InventoryItemView } from "@/components/InventoryItemView";
import { getInventoryItem, getInventoryItems } from "@/lib/inventory";
import { paramString } from "@/lib/params";

export async function generateStaticParams() {
  return getInventoryItems()
    .filter((item) => !item.titleOnly)
    .map((item) => ({ slug: item.id }));
}

export default function InventoryItemScreen() {
  const params = useLocalSearchParams<{ slug: string | string[] }>();
  const slug = paramString(params.slug);
  const item = slug ? getInventoryItem(slug) : undefined;

  if (!item || item.titleOnly) {
    return (
      <>
        <Head>
          <title>Inventory · Kyle McAuliffe</title>
          <meta name="robots" content="noindex, nofollow" />
          <link rel="stylesheet" href="/inventory.css" />
        </Head>
        <Wrapper className="gap-4 py-8">
          <Text className="ksm-headline">That piece is not on the shelf.</Text>
          <Link href="/inventory">
            <Text className="ksm-nav">Back to the inventory</Text>
          </Link>
        </Wrapper>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{`${item.title} · Inventory · Kyle McAuliffe`}</title>
        <meta name="description" content={item.summary || item.title} />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="stylesheet" href="/inventory.css" />
      </Head>
      <Wrapper className="gap-6 py-8">
        <InventoryItemView item={item} />
      </Wrapper>
    </>
  );
}
