import { Text, View } from "react-native";
import Head from "expo-router/head";
import { Wrapper } from "@/components/Wrapper";
import desk from "@/data/desk.json";

/**
 * Working list for Kyle. To add a Drive doc (Spider Mom, comics, and so on),
 * append an object to `docs` in data/desk.json. Do not add Webfall, Stratus,
 * or Rainfall material, and do not put keys or passwords in this file.
 */

type DeskItem = {
  id: string;
  title: string;
  line: string;
  href: string;
};

export default function DeskScreen() {
  const projects = desk.projects as DeskItem[];
  const docs = desk.docs as DeskItem[];

  return (
    <>
      <Head>
        <title>Desk · Kyle McAuliffe</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Working links for Kyle's projects and docs." />
      </Head>
      <Wrapper className="gap-8 py-8">
        <View className="ksm-copy gap-3">
          <Text className="ksm-kicker">Desk</Text>
          <Text accessibilityRole="header" className="ksm-headline">
            Project desk
          </Text>
          <Text className="ksm-lede">
            Live project links and shared docs. This page is noindex.
          </Text>
        </View>

        <View className="gap-3">
          <Text accessibilityRole="header" className="ksm-section">
            Projects
          </Text>
          <View className="ksm-grid">
            {projects.map((item) => (
              <a key={item.id} className="ksm-card" href={item.href}>
                <span className="ksm-card-title">{item.title}</span>
                <span className="ksm-card-line">{item.line}</span>
              </a>
            ))}
          </View>
        </View>

        <View className="gap-3">
          <Text accessibilityRole="header" className="ksm-section">
            Docs
          </Text>
          {docs.map((item) => (
            <a key={item.id} className="ksm-paper" href={item.href}>
              <span className="ksm-card-title">{item.title}</span>
              <span className="ksm-card-line">{item.line}</span>
            </a>
          ))}
        </View>
      </Wrapper>
    </>
  );
}
