import { Text, View } from "react-native";
import { Link } from "expo-router";
import { Wrapper } from "@/components/Wrapper";
import { PageSeo } from "@/components/PageSeo";
import sources from "@/data/sources.json";

type SourceGroup = {
  slug: string;
  title: string;
  urls: string[];
};

const journal = (sources as { journal: SourceGroup[] }).journal;

export default function SourcesScreen() {
  return (
    <>
      <PageSeo
        title="Sources"
        description="Official and public sources cited in the KSM journal, plus links to hosted archive and inventory downloads."
        path="/sources"
      />
      <View className="border-b-2 border-border bg-accent px-0 py-10">
        <Wrapper>
          <Text className="font-[GreatVibes] text-4xl text-black">Sources</Text>
          <Text className="mt-2 max-w-[16ch] font-[Anton] text-5xl uppercase leading-[0.95] tracking-[1px] text-black md:text-7xl">
            Cited, hosted, downloadable
          </Text>
        </Wrapper>
      </View>
      <Wrapper className="gap-8 py-10">
        <Text className="max-w-[62ch] font-sans text-base leading-7 text-muted">
          The journal notes already name their sources. This page gathers those
          official and public links in one place, and points at the archive and
          inventory libraries where hosted files can be downloaded. A machine-
          readable copy is in sources.json.
        </Text>
        <Text className="font-sans text-base leading-7 text-muted">
          <Link href={"/sources/sources.json" as any}>
            <Text className="underline">sources.json</Text>
          </Link>
          {" · "}
          <Link href={"/sources/CREDITS.md" as any}>
            <Text className="underline">CREDITS.md</Text>
          </Link>
        </Text>

        <Text className="font-[Anton] text-3xl uppercase tracking-[1px] text-fg">
          Journal
        </Text>
        {journal.map((item) => (
          <View key={item.slug} className="gap-2">
            <Link href={`/blog/posts/${item.slug}` as any}>
              <Text className="font-sans text-lg text-fg underline">{item.title}</Text>
            </Link>
            {item.urls.map((url) => (
              <Link key={url} href={url as any}>
                <Text className="font-sans text-sm leading-6 text-muted underline">
                  {url}
                </Text>
              </Link>
            ))}
          </View>
        ))}

        <Text className="font-[Anton] text-3xl uppercase tracking-[1px] text-fg">
          Hosted libraries
        </Text>
        <View className="gap-2">
          <Link href={"/archive" as any}>
            <Text className="font-sans text-base text-fg underline">Archive</Text>
          </Link>
          <Text className="font-sans text-sm leading-6 text-muted">
            Studio shelves with hosted downloads.
          </Text>
          <Link href={"/inventory" as any}>
            <Text className="font-sans text-base text-fg underline">Inventory</Text>
          </Link>
          <Text className="font-sans text-sm leading-6 text-muted">
            Inventory library with hosted downloads.
          </Text>
        </View>
      </Wrapper>
    </>
  );
}
