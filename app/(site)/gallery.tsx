import { Text, View } from "react-native";
import { Image } from "expo-image";
import { Wrapper } from "@/components/Wrapper";
import { PageSeo } from "@/components/PageSeo";
import { galleryItems } from "@/data/gallery";

export default function GalleryScreen() {
  return (
    <>
      <PageSeo
        title="Gallery"
        description="KSM Soul work — editorial generations from moodboard references."
        path="/gallery"
      />
      <View className="border-b-2 border-border bg-black py-10">
        <Wrapper>
          <Text className="font-[GreatVibes] text-3xl text-accent">Work</Text>
          <Text className="font-[Anton] text-5xl uppercase tracking-[2px] text-white md:text-7xl">
            Gallery
          </Text>
          <Text className="mt-3 max-w-[42ch] font-sans text-[15px] leading-6 text-white/70">
            KSM Soul generations from your dropped references — keepers for
            covers, posters, and signal.
          </Text>
        </Wrapper>
      </View>
      <View className="border-b-2 border-border bg-accent px-0 py-2">
        <Wrapper>
          <Text className="font-[Anton] text-[11px] uppercase tracking-[2px] text-black">
            {galleryItems.length} pieces · Soul V2 · Crimson / black / grain
          </Text>
        </Wrapper>
      </View>
      <Wrapper className="py-8">
        <View className="flex-row flex-wrap gap-4">
          {galleryItems.map((item) => (
            <View
              key={item.id}
              className="w-full gap-2 md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)]"
            >
              <Image
                source={{ uri: item.src }}
                className="w-full border-2 border-border"
                style={{
                  aspectRatio: item.aspect === "1/1" ? 1 : 3 / 4,
                  width: "100%",
                }}
                contentFit="cover"
                accessibilityLabel={item.title}
              />
              <Text className="font-[Anton] text-[15px] uppercase tracking-[1.5px] text-fg">
                {item.title}
              </Text>
              <Text className="font-sans text-[13px] leading-5 text-muted">
                {item.mood}
              </Text>
            </View>
          ))}
        </View>
      </Wrapper>
    </>
  );
}
