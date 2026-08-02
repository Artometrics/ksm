import { Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Wrapper } from "@/components/Wrapper";
import { WorkCard } from "@/components/WorkCard";
import { PageSeo } from "@/components/PageSeo";
import { getHomeWork } from "@/data/work";

const HERO = "/images/brand/hero-cover.jpg";
const STRIP = "/images/brand/eyes-strip.png";

export default function HomeScreen() {
  const { featured, grid, list } = getHomeWork();

  return (
    <>
      <PageSeo
        title="KSM"
        description="KSM portfolio — brand, editorial, and identity work with an edge."
        path="/"
        image={HERO}
      />

      {/* Full-bleed hero — same structure, portfolio copy */}
      <View className="relative min-h-[88vh] w-full overflow-hidden bg-black">
        <Image
          source={{ uri: HERO }}
          className="absolute inset-0 h-full w-full"
          contentFit="cover"
          transition={250}
        />
        <View className="absolute inset-0 bg-black/45" />
        <Wrapper className="relative z-10 min-h-[88vh] justify-end gap-4 pb-12 pt-24">
          <Text className="font-[UnifrakturCook] text-5xl text-accent md:text-6xl">
            ksm
          </Text>
          <Text className="max-w-[16ch] font-[Anton] text-5xl uppercase leading-[0.92] tracking-[1px] text-white md:text-7xl">
            Killing boys of comfort
          </Text>
          <Text className="max-w-[36ch] font-sans text-[15px] leading-6 text-white/80">
            Portfolio for brand systems, editorial stills, and identity work —
            high contrast on purpose.
          </Text>
          <View className="mt-2 flex-row flex-wrap gap-3">
            <Link href="/gallery" asChild>
              <Pressable className="bg-accent px-5 py-3">
                <Text className="font-[Anton] text-[13px] uppercase tracking-[2px] text-white">
                  View work
                </Text>
              </Pressable>
            </Link>
            <Link href="/contact" asChild>
              <Pressable className="border-2 border-white px-5 py-3">
                <Text className="font-[Anton] text-[13px] uppercase tracking-[2px] text-white">
                  Contact
                </Text>
              </Pressable>
            </Link>
          </View>
        </Wrapper>
      </View>

      {/* Signal strip */}
      <View className="relative h-[180px] w-full overflow-hidden border-y-2 border-border bg-accent md:h-[240px]">
        <Image
          source={{ uri: STRIP }}
          className="absolute inset-0 h-full w-full opacity-80"
          contentFit="cover"
        />
        <View className="absolute inset-0 items-center justify-center">
          <Text className="font-[Anton] text-4xl uppercase tracking-[6px] text-white md:text-6xl">
            Selected work
          </Text>
        </View>
      </View>

      {/* Featured + 3-up grid — same magazine structure */}
      <Wrapper className="gap-6 py-10">
        <View className="flex-row items-end justify-between gap-4">
          <View>
            <Text className="font-[GreatVibes] text-3xl text-accent">
              Portfolio
            </Text>
            <Text className="font-[Anton] text-4xl uppercase tracking-[2px] text-fg">
              From the work
            </Text>
          </View>
          <Link href="/gallery" asChild>
            <Pressable>
              <Text className="font-[Anton] text-[12px] uppercase tracking-[2px] text-accent">
                Archive →
              </Text>
            </Pressable>
          </Link>
        </View>

        <WorkCard item={featured} variant="cover" />

        <View className="flex-row flex-wrap gap-4">
          {grid.map((item) => (
            <View key={item.id} className="min-w-[260px] flex-1">
              <WorkCard item={item} variant="stack" />
            </View>
          ))}
        </View>
      </Wrapper>

      {/* List rail — same interviews structure */}
      <View className="border-t-2 border-border bg-black py-10">
        <Wrapper className="gap-4">
          <View className="flex-row items-end justify-between">
            <Text className="font-[Anton] text-4xl uppercase tracking-[2px] text-white">
              More work
            </Text>
            <Link href="/gallery" asChild>
              <Pressable>
                <Text className="font-[Anton] text-[12px] uppercase tracking-[2px] text-accent">
                  All pieces →
                </Text>
              </Pressable>
            </Link>
          </View>
          <View className="border-2 border-white">
            {list.map((item) => (
              <View key={item.id} className="bg-black">
                <WorkCard item={item} variant="row" />
              </View>
            ))}
          </View>
        </Wrapper>
      </View>
    </>
  );
}
