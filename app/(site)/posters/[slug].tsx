import { Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import { Link, useLocalSearchParams } from "expo-router";
import { Wrapper } from "@/components/Wrapper";
import { PosterCard } from "@/components/PosterCard";
import { PageSeo } from "@/components/PageSeo";
import { paramString } from "@/lib/params";
import { getPoster, getPosters } from "@/data/posters";

export async function generateStaticParams() {
  return getPosters().map((poster) => ({ slug: poster.id }));
}

export default function PosterDetail() {
  const params = useLocalSearchParams<{ slug: string | string[] }>();
  const slug = paramString(params.slug);
  const poster = getPoster(slug);
  const others = getPosters().filter((p) => p.id !== slug).slice(0, 3);

  if (!poster) {
    return (
      <Wrapper className="gap-4 py-16">
        <Text className="font-[DMMono] text-2xl uppercase text-fg">
          Poster not found
        </Text>
        <Link href="/posters" asChild>
          <Pressable>
            <Text className="font-[DMMono] text-[12px] uppercase tracking-[0.08em] text-accent">
              ← Gallery
            </Text>
          </Pressable>
        </Link>
      </Wrapper>
    );
  }

  const src = poster.image;

  return (
    <>
      <PageSeo
        title={poster.subject}
        description={poster.dek}
        path={`/posters/${poster.id}`}
        image={poster.image}
      />

      <View className="bg-black">
        <Wrapper className="py-6">
          <Link href="/posters" asChild>
            <Pressable>
              <Text className="font-[DMMono] text-[12px] uppercase tracking-[0.08em] text-accent">
                ← Posters
              </Text>
            </Pressable>
          </Link>
        </Wrapper>

        <View className="relative mx-auto w-full max-w-[720px] px-4">
          <View className="relative aspect-[3/4] w-full overflow-hidden border border-[#222]">
            <Image
              source={{ uri: src }}
              className="absolute inset-0 h-full w-full"
              contentFit="cover"
              transition={300}
            />
            <View className="absolute bottom-0 left-0 right-0 bg-accent-print px-5 py-4">
              <Text className="font-[DMMono] text-[11px] uppercase tracking-[0.1em] text-white/80">
                KSM · Legend
              </Text>
              <Text className="font-[DMMono] text-3xl font-medium uppercase tracking-[-0.01em] text-white md:text-4xl">
                {poster.title}
              </Text>
            </View>
          </View>
        </View>

        <Wrapper className="gap-4 py-12">
          <Text className="font-[DMMono] text-[12px] uppercase tracking-[0.1em] text-subtle">
            {poster.era}
          </Text>
          <Text className="max-w-[40ch] border-l-2 border-accent-print pl-5 font-[DMMono] text-xl font-medium leading-snug text-white md:text-2xl">
            {poster.dek}
          </Text>
          <Text className="max-w-[48ch] font-sans text-[16px] leading-7 text-subtle">
            Hyperrealistic editorial portrait finished in the KSM graphic
            system — black field, crimson type block, flush-left mono name.
          </Text>
        </Wrapper>
      </View>

      {others.length ? (
        <Wrapper className="gap-6 py-12">
          <Text className="border-b-2 border-border pb-4 font-[DMMono] text-xl font-medium uppercase tracking-[0.02em] text-fg">
            More legends
          </Text>
          <View className="flex-row flex-wrap gap-4">
            {others.map((p) => (
              <View key={p.id} className="min-w-[200px] flex-1">
                <PosterCard poster={p} />
              </View>
            ))}
          </View>
        </Wrapper>
      ) : null}
    </>
  );
}
