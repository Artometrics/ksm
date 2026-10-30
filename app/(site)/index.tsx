import { Text, View } from "react-native";
import { Link } from "expo-router";
import Head from "expo-router/head";
import { Wrapper } from "@/components/Wrapper";
import projects from "@/data/projects.json";

const FILTERS = [
  { id: "filter-all", label: "All" },
  { id: "filter-research", label: "Research" },
  { id: "filter-writing", label: "Writing" },
  { id: "filter-games", label: "Games" },
  { id: "filter-apps", label: "Apps" },
  { id: "filter-art", label: "Art" },
] as const;

export default function HomeScreen() {
  const papers = projects.filter((item) => item.kind === "paper");

  return (
    <>
      <Head>
        <title>Kyle McAuliffe</title>
        <meta
          name="description"
          content="Research, writing, and tools from Kyle McAuliffe."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Wrapper className="gap-8 py-8">
        <View className="gap-3">
          <Text className="ksm-kicker">Notebook</Text>
          <Text accessibilityRole="header" className="ksm-headline">
            Research, writing, and the tools around them.
          </Text>
          <Text className="ksm-lede">
            Kyle McAuliffe. Artometrics is the public magazine. Cardinal is the
            book. Dawn is the studio. Unpublished drafts stay off this page.
          </Text>
        </View>

        <View className="gap-3" nativeID="projects">
          <Text accessibilityRole="header" className="ksm-section">
            Projects
          </Text>
          <View
            className="ksm-filters"
            style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}
          >
            {FILTERS.map((filter, index) => (
              <View key={filter.id} style={{ flexDirection: "row" }}>
                <input
                  type="radio"
                  name="project-filter"
                  id={filter.id}
                  defaultChecked={index === 0}
                />
                <label htmlFor={filter.id}>{filter.label}</label>
              </View>
            ))}
          </View>
          <View className="ksm-grid">
            {projects.map((item) => (
              <a
                key={item.id}
                className="ksm-card"
                data-tags={item.tags.join(" ").toLowerCase()}
                href={item.href}
              >
                <img src={item.thumbnail} alt="" width={48} height={48} />
                <span className="ksm-card-year">{item.year}</span>
                <span className="ksm-card-title">{item.title}</span>
                <span className="ksm-card-line">{item.line}</span>
                <span className="ksm-card-tags">{item.tags.join(" · ")}</span>
              </a>
            ))}
          </View>
          <Text className="ksm-empty-art">Nothing filed under Art yet.</Text>
        </View>

        <View className="gap-3" nativeID="papers">
          <Text accessibilityRole="header" className="ksm-section">
            Working papers
          </Text>
          {papers.map((item) => (
            <a key={item.id} className="ksm-paper" href={item.href}>
              <span className="ksm-card-title">{item.title}</span>
              <span className="ksm-card-line">{item.line}</span>
            </a>
          ))}
        </View>

        <View className="flex-row flex-wrap gap-4">
          <Link href="/about">
            <Text className="ksm-nav">About</Text>
          </Link>
          <Link href="/cv">
            <Text className="ksm-nav">CV</Text>
          </Link>
          <Link href="/now">
            <Text className="ksm-nav">Now</Text>
          </Link>
          <Link href="/blog">
            <Text className="ksm-nav">Journal</Text>
          </Link>
        </View>
      </Wrapper>
    </>
  );
}
