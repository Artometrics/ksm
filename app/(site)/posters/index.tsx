import { Text, View } from "react-native";
import { Wrapper } from "@/components/Wrapper";
import { PosterCard } from "@/components/PosterCard";
import { PageSeo } from "@/components/PageSeo";
import { getPosters } from "@/data/posters";

export default function PostersIndex() {
  const posters = getPosters();
  const hero = posters[0];
  const rest = posters.slice(1);

  return (
    <>
      <PageSeo
        title="Posters"
        description="Hyperrealistic legend posters — Cleopatra, Caesar, Napoleon, and more. KSM graphic series."
        path="/posters"
        image={hero?.image}
      />

      <View className="border-b border-border bg-black py-12">
        <Wrapper className="gap-3">
          <Text className="font-[DMMono] text-[12px] uppercase tracking-[0.1em] text-accent">
            Graphic · Series 01
          </Text>
          <Text className="font-[Chomsky] text-5xl text-white md:text-7xl">
            Posters
          </Text>
          <View className="h-0.5 w-[120px] bg-accent-print" />
          <Text className="mt-2 max-w-[44ch] font-sans text-[17px] leading-7 text-subtle">
            Hyperrealistic portraits of legends — printed as Kruger-blunt
            editorial posters. No ornament. One face. One claim.
          </Text>
        </Wrapper>
      </View>

      {hero ? <PosterCard poster={hero} variant="hero" /> : null}

      <Wrapper className="gap-6 py-12">
        <Text className="border-b-2 border-border pb-4 font-[DMMono] text-xl font-medium uppercase tracking-[0.02em] text-fg">
          The series
        </Text>
        <View className="flex-row flex-wrap gap-4">
          {rest.map((poster) => (
            <View
              key={poster.id}
              className="min-w-[220px] w-[47%] flex-grow md:w-[30%]"
            >
              <PosterCard poster={poster} />
            </View>
          ))}
        </View>
      </Wrapper>

      <View className="border-t border-border bg-black py-14">
        <Wrapper className="gap-4">
          <Text className="font-[DMMono] text-[12px] uppercase tracking-[0.1em] text-accent">
            Method
          </Text>
          <Text className="max-w-[36ch] font-[DMMono] text-2xl font-medium uppercase leading-snug text-white">
            Photoreal legends. Hard red blocks. Zero fluff.
          </Text>
          <Text className="max-w-[48ch] font-sans text-[16px] leading-7 text-subtle">
            Portraits generated as hyperrealistic editorial stills, finished
            with KSM typography — crimson bars, DM Mono names, Chomsky
            wordmark.
          </Text>
        </Wrapper>
      </View>
    </>
  );
}
