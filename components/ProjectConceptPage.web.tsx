import { Text, View } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import type { ProjectPage } from "@/data/project-pages";

const ctaStyle = {
  display: "inline-block" as const,
  padding: "14px 22px",
  backgroundColor: "var(--ink)",
  color: "var(--paper)",
  textDecoration: "none" as const,
  fontFamily: "var(--sans)",
  fontSize: 15,
  fontWeight: 600,
  border: "2px solid var(--rule)",
  marginTop: 8,
  marginBottom: 8,
};

const blockStyle = {
  border: "1px solid var(--rule)",
  backgroundColor: "var(--card)",
  padding: 16,
  marginBottom: 12,
};

export function ProjectConceptPage({ page }: { page: ProjectPage }) {
  return (
    <>
      <View
        className="relative w-full overflow-hidden"
        style={{ borderBottomWidth: 2, borderColor: "var(--rule)", minHeight: 220 }}
      >
        <Image
          source={{ uri: page.heroImage }}
          style={{ width: "100%", height: 280, maxHeight: "42vh" }}
          contentFit="cover"
          accessibilityLabel={`${page.title} concept art`}
        />
        <View
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.35)",
          }}
        />
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: 20,
            maxWidth: 680,
          }}
        >
          <Text className="ksm-kicker" style={{ color: "var(--paper)" }}>
            Concept book
          </Text>
          <Text
            accessibilityRole="header"
            className="ksm-headline"
            style={{ color: "var(--paper)", fontSize: 32, lineHeight: 1.05 }}
          >
            {page.title}
          </Text>
          <Text className="ksm-lede" style={{ color: "var(--paper)", opacity: 0.92 }}>
            {page.tagline}
          </Text>
        </View>
      </View>

      <View className="ksm-copy gap-4 py-8" style={{ maxWidth: 680, alignSelf: "center", width: "100%", paddingHorizontal: 20 }}>
        <a href={page.primaryCta.href} style={ctaStyle} target="_blank" rel="noopener noreferrer">
          {page.primaryCta.label}
        </a>

        <View className="ksm-prose gap-3">
          {page.overview.map((paragraph) => (
            <Text key={paragraph.slice(0, 40)} className="ksm-lede" style={{ maxWidth: "100%" }}>
              {paragraph}
            </Text>
          ))}
        </View>

        <figure style={{ marginVertical: 16 }}>
          <Image
            source={{ uri: page.inlineImage.src }}
            style={{ width: "100%", height: 240, borderWidth: 1, borderColor: "var(--rule)" }}
            contentFit="cover"
            accessibilityLabel={page.inlineImage.alt}
          />
          {page.inlineImage.caption ? (
            <Text className="ksm-fine" style={{ marginTop: 8 }}>
              {page.inlineImage.caption}
            </Text>
          ) : null}
        </figure>

        <Text accessibilityRole="header" className="ksm-section">
          What&apos;s built
        </Text>
        <View style={blockStyle}>
          {page.builtSoFar.map((item) => (
            <Text key={item.slice(0, 48)} className="ksm-fine" style={{ marginBottom: 8, lineHeight: 20 }}>
              · {item}
            </Text>
          ))}
        </View>

        <Text accessibilityRole="header" className="ksm-section">
          Status
        </Text>
        <Text className="ksm-lede">{page.status}</Text>

        <Text accessibilityRole="header" className="ksm-section">
          Sourced notes
        </Text>
        <View className="gap-3">
          {page.excerpts.map((excerpt) => (
            <View key={`${excerpt.date}-${excerpt.source}`} style={blockStyle}>
              <Text className="ksm-kicker">{excerpt.date}</Text>
              <Text className="ksm-fine" style={{ marginBottom: 8 }}>
                Source:{" "}
              </Text>
              {excerpt.sourceHref ? (
                <a className="ksm-nav" href={excerpt.sourceHref} target="_blank" rel="noopener noreferrer">
                  {excerpt.source}
                </a>
              ) : (
                <Text className="ksm-fine">{excerpt.source}</Text>
              )}
              <Text className="ksm-lede" style={{ fontSize: 15 }}>
                {excerpt.text}
              </Text>
            </View>
          ))}
        </View>

        <View className="flex-row flex-wrap gap-3" style={{ marginTop: 8 }}>
          {page.secondaryLinks.map((link) => (
            <a key={link.href} className="ksm-nav" href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </View>

        <View style={{ marginTop: 24, paddingTop: 16, borderTopWidth: 1, borderColor: "var(--rule)" }}>
          <Link href="/">
            <Text className="ksm-nav">← Back to projects</Text>
          </Link>
        </View>
      </View>
    </>
  );
}
