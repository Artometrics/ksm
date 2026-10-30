import { Text, View } from "react-native";
import Head from "expo-router/head";
import { Wrapper } from "@/components/Wrapper";

const ITEMS = [
  {
    date: "2026-10-30",
    text: "Cardinal's reading room is on Firebase Hosting. A commit the same day edits the episode 7 chapter file ep7-02-pong-patents.md.",
    href: "https://github.com/kylesmcauliffe/cardinal/commit/8d267256882110f5f1d5313678ae593954c989f9",
  },
  {
    date: "2026-10-30",
    text: "Dawn is served as a static Firebase export. The village and studio chat call Gemini through Firebase AI Logic in the browser.",
    href: "https://github.com/Artometrics/dawn/commit/0ff2c61",
  },
  {
    date: "2026-10-23",
    text: "Artometrics added a lab log page and magazine issue PDFs.",
    href: "https://github.com/Artometrics/artometrics/commit/ce457b2",
  },
] as const;

export default function NowScreen() {
  return (
    <>
      <Head>
        <title>Now · Kyle McAuliffe</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Wrapper className="gap-4 py-8">
        <Text className="ksm-kicker">Now</Text>
        <Text accessibilityRole="header" className="ksm-headline">
          What the public repos show lately.
        </Text>
        <Text className="ksm-lede">
          Dates below are commit dates, not a diary.
        </Text>
        <View className="gap-4">
          {ITEMS.map((item) => (
            <View key={item.href} className="gap-1">
              <Text className="ksm-card-year">{item.date}</Text>
              <Text className="ksm-lede">{item.text}</Text>
              <a className="ksm-nav" href={item.href}>
                Source commit
              </a>
            </View>
          ))}
        </View>
      </Wrapper>
    </>
  );
}
