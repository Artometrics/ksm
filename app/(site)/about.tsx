import { Text, View } from "react-native";
import Head from "expo-router/head";
import { Wrapper } from "@/components/Wrapper";

const LINKS = [
  ["Artometrics about page", "https://artometrics.com/about"],
  ["Artometrics on GitHub", "https://github.com/Artometrics"],
  ["Kyle McAuliffe on GitHub", "https://github.com/kylesmcauliffe"],
] as const;

export default function AboutScreen() {
  return (
    <>
      <Head>
        <title>About · Kyle McAuliffe</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Wrapper className="gap-4 py-8">
        <Text className="ksm-kicker">About</Text>
        <Text accessibilityRole="header" className="ksm-headline">
          A short bio, and where to write.
        </Text>
        <Text className="ksm-lede">
          The Artometrics about page says Kyle McAuliffe founded and edits that
          magazine. Reports there pair a written argument with public datasets.
          This site is the notebook that points at the public work.
        </Text>
        <Text className="ksm-lede">
          No street address and no phone number are published here.
        </Text>
        <View className="gap-2">
          {LINKS.map(([label, href]) => (
            <a key={href} className="ksm-nav" href={href}>
              {label}
            </a>
          ))}
        </View>
      </Wrapper>
    </>
  );
}
