import { Text, View } from "react-native";
import Head from "expo-router/head";
import { Wrapper } from "@/components/Wrapper";
import { ProjectDeck } from "@/components/ProjectDeck";
import projects from "@/data/projects.json";

const FILTERS = [
  { id: "filter-all", label: "All" },
  { id: "filter-games", label: "Games" },
  { id: "filter-writing", label: "Writing / Books" },
  { id: "filter-research", label: "Research" },
  { id: "filter-tools", label: "Tools" },
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
          <div className="ksm-filters" role="radiogroup" aria-label="Filter projects">
            {FILTERS.map((filter, index) => (
              <label key={filter.id} className="ksm-filter-chip" htmlFor={filter.id}>
                <input
                  type="radio"
                  name="project-filter"
                  id={filter.id}
                  defaultChecked={index === 0}
                />
                <span>{filter.label}</span>
              </label>
            ))}
          </div>
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
