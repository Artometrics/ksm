import { Text, View } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import type { ProjectPage } from "@/data/project-pages";
import { isPublicLaunchUrl } from "@/lib/projects";

const ctaStyle = {
  display: "inline-block" as const,
  padding: "14px 22px",
  backgroundColor: "var(--ink)",
  color: "var(--cta-label, var(--paper))",
  textDecoration: "none" as const,
  fontFamily: "var(--mono)",
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  border: "1px solid var(--rule)",
  boxShadow: "4px 4px 0 #111",
  marginTop: 8,
  marginBottom: 8,
};

const blockStyle = {
  border: "1px solid var(--rule)",
  backgroundColor: "var(--card)",
  boxShadow: "4px 4px 0 #111",
  padding: 16,
  marginBottom: 12,
};

export function ProjectConceptPage({ page }: { page: ProjectPage }) {
  const heroUri = page.heroImage?.trim();
  const inline = page.inlineImage?.src?.trim() ? page.inlineImage : undefined;
  const links = [
    isPublicLaunchUrl(page.primaryCta.href)
      ? { label: page.primaryCta.label, href: page.primaryCta.href }
      : null,
    ...page.secondaryLinks,
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <>
      <View
        className="relative w-full overflow-hidden"
        style={{
          borderBottomWidth: 1,
          borderColor: "var(--rule)",
          backgroundColor: "#f4f4f4",
        }}
      >
        {heroUri ? (
          <Image
            source={{ uri: heroUri }}
            style={{ width: "100%", aspectRatio: 16 / 9, backgroundColor: "#f4f4f4" }}
            contentFit="contain"
            accessibilityLabel={`Screenshot of ${page.title}`}
          />
        ) : null}
        <View style={{ padding: 20, maxWidth: 680 }}>
          <Text className="ksm-kicker">Project</Text>
          <Text
            accessibilityRole="header"
            className="ksm-headline ksm-article-title"
            style={{ fontSize: 32 }}
          >
            {page.title}
          </Text>
          <Text className="ksm-lede">{page.tagline}</Text>
        </View>
      </View>

      <View
        className="ksm-copy gap-4 py-8"
        style={{ maxWidth: 680, alignSelf: "center", width: "100%", paddingHorizontal: 20 }}
      >
        {isPublicLaunchUrl(page.primaryCta.href) ? (
          <a href={page.primaryCta.href} style={ctaStyle} target="_blank" rel="noopener noreferrer">
            {page.primaryCta.label}
          </a>
        ) : (
          <p className="ksm-lede">No public play link yet. This build is not hosted.</p>
        )}

        <View className="ksm-prose gap-3">
          {page.overview.map((paragraph) => (
            <Text key={paragraph.slice(0, 40)} className="ksm-lede" style={{ maxWidth: "100%" }}>
              {paragraph}
            </Text>
          ))}
        </View>

        {inline ? (
          <figure style={{ marginVertical: 16 }}>
            <Image
              source={{ uri: inline.src }}
              style={{
                width: "100%",
                aspectRatio: 16 / 9,
                borderWidth: 1,
                borderColor: "var(--rule)",
                backgroundColor: "#f4f4f4",
              }}
              contentFit="contain"
              accessibilityLabel={inline.alt}
            />
            {inline.caption ? (
              <Text className="ksm-fine" style={{ marginTop: 8 }}>
                {inline.caption}
              </Text>
            ) : null}
          </figure>
        ) : null}

        {links.length ? (
          <div className="ksm-files">
            <h2 className="ksm-section">Files and links</h2>
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

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

        <View style={{ marginTop: 24, paddingTop: 16, borderTopWidth: 1, borderColor: "var(--rule)" }}>
          <Link href="/projects">
            <Text className="ksm-nav">← All projects</Text>
          </Link>
        </View>
      </View>
    </>
  );
}
