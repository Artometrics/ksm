import { Text, View } from "react-native";
import Head from "expo-router/head";
import { Wrapper } from "@/components/Wrapper";
import { ProjectDeck } from "@/components/ProjectDeck";
import projects from "@/data/projects.json";

const FILTERS = [
  { id: "filter-all", label: "All" },
  { id: "filter-research", label: "Research" },
  { id: "filter-writing", label: "Writing" },
  { id: "filter-games", label: "Games" },
  { id: "filter-apps", label: "Apps" },
  { id: "filter-art", label: "Art" },
] as const;

export default function ProjectsScreen() {
  const papers = projects.filter((item) => item.kind === "paper");

  return (
    <>
      <Head>
        <title>Projects · Kyle McAuliffe</title>
        <meta
          name="description"
          content="Research, writing, apps, and working papers from Kyle McAuliffe."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Wrapper className="gap-8 py-8">
        <View className="ksm-copy gap-3">
          <Text className="ksm-kicker ksm-type">Projects</Text>
          <Text accessibilityRole="header" className="ksm-headline">
            Research, writing, and the tools around them.
          </Text>
          <Text className="ksm-lede">
            Artometrics is the public magazine. Cardinal is the book. Dawn is the
            studio. Unpublished drafts stay off this index.
          </Text>
        </View>

        <View className="gap-3">
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
          <ProjectDeck />
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
      </Wrapper>
    </>
  );
}
