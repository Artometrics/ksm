import { Link } from "expo-router";
import { Text, View } from "react-native";
import { LifePhotosBlock } from "@/components/LifePhotosBlock";
import { PageSeo } from "@/components/PageSeo";
import { Wrapper } from "@/components/Wrapper";

const LINKS = [
  ["Artometrics about page", "https://artometrics.com/about"],
  ["Artometrics on GitHub", "https://github.com/Artometrics"],
  ["Kyle McAuliffe on GitHub", "https://github.com/kylesmcauliffe"],
] as const;

export default function AboutPage() {
  return (
    <>
      <PageSeo
        title="About · Kyle S. McAuliffe"
        description="Writer, builder, and Artometrics founder. Notes on games, magazines, and the work in progress."
        path="/about"
      />
      <Wrapper variant="narrow" className="gap-10 py-10">
        <View className="gap-3">
          <Text className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            About
          </Text>
          <Text
            accessibilityRole="header"
            className="font-display text-[34px] leading-10 text-fg"
          >
            Kyle S. McAuliffe
          </Text>
          <Text className="font-sans text-[17px] leading-7 text-muted">
            Writer and builder. I run Artometrics — games, magazines, and long-form work that
            tries to make history and myth feel close. This site is the notebook that points at
            the public work.
          </Text>
        </View>

        <LifePhotosBlock />

        <View className="gap-4 border-t-2 border-border pt-8">
          <Text className="font-sans text-[16px] leading-7 text-fg">
            Day to day I ship Cardinal, Pantheon, Knightmare, Kore, Dawn, and the Artometrics
            magazine — plus this personal site as a desk for notes and launches.
          </Text>
          <Text className="font-sans text-[16px] leading-7 text-fg">
            Looking for the work? Start on{" "}
            <Link href="/#projects" className="text-accent underline">
              Projects
            </Link>
            , or read the{" "}
            <Link href="/blog" className="text-accent underline">
              Journal
            </Link>
            .
          </Text>
          <Text className="font-sans text-[15px] leading-7 text-muted">
            No street address and no phone number are published here.
          </Text>
          <View className="gap-2 pt-2">
            {LINKS.map(([label, href]) => (
              <a key={href} className="font-sans text-[15px] text-fg underline underline-offset-2" href={href}>
                {label}
              </a>
            ))}
          </View>
        </View>
      </Wrapper>
    </>
  );
}
