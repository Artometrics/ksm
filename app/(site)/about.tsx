import { Text, View } from "react-native";
import Head from "expo-router/head";
import { Link } from "expo-router";
import { Wrapper } from "@/components/Wrapper";
import { LatestUpdates } from "@/components/LatestUpdates";
import projects from "@/data/projects.json";

const LINKS = [
  ["Artometrics about page", "https://artometrics.com/about"],
  ["Artometrics on GitHub", "https://github.com/Artometrics"],
  ["Kyle McAuliffe on GitHub", "https://github.com/kylesmcauliffe"],
] as const;

export default function AboutScreen() {
  const projectRows = projects.filter((item) => item.kind === "project");

  return (
    <>
      <Head>
        <title>About · Kyle McAuliffe</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Wrapper className="gap-8 py-8">
        <View className="ksm-copy gap-3">
          <Text className="ksm-kicker">About</Text>
          <Text accessibilityRole="header" className="ksm-headline">
            Kyle McAuliffe
          </Text>
          <Text className="ksm-lede">
            The Artometrics about page says Kyle McAuliffe founded and edits that
            magazine. Reports there pair a written argument with public datasets.
            This site is the notebook that points at the public work.
          </Text>
          <Text className="ksm-lede">
            No street address and no phone number are published here.
          </Text>
        </View>

        <View className="gap-3">
          <Text accessibilityRole="header" className="ksm-section">
            CV
          </Text>
          <Text className="ksm-lede">
            A PDF can live at public/cv.pdf. No file is in the site yet.
          </Text>
          <Link href="/cv">
            <Text className="ksm-nav">Open CV page</Text>
          </Link>
        </View>

        <View className="gap-3">
          <Text accessibilityRole="header" className="ksm-section">
            Projects
          </Text>
          {projectRows.map((item) => (
            <View key={item.id} className="ksm-slot gap-2">
              <Text className="ksm-card-title">{item.title}</Text>
              <Text className="ksm-card-line">{item.line}</Text>
              <Link href={`/projects/${item.id}` as "/projects"}>
                <Text className="ksm-nav">Project page</Text>
              </Link>
              <a className="ksm-nav" href={item.href}>
                Live site
              </a>
            </View>
          ))}
        </View>

        <View className="gap-2">
          <Text accessibilityRole="header" className="ksm-section">
            Contact and social
          </Text>
          {LINKS.map(([label, href]) => (
            <a key={href} className="ksm-nav" href={href}>
              {label}
            </a>
          ))}
          <Text className="ksm-fine">
            TODO: add email or other contact channels when they are published in this repo.
          </Text>
        </View>

        <LatestUpdates limit={3} />
      </Wrapper>
    </>
  );
}
