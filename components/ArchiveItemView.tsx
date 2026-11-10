import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import {
  categoryLabel,
  formatArchiveDate,
  getArchiveItem,
  getArchiveProject,
  type ArchiveItem,
} from "@/lib/archive";

export function ArchiveItemView({ item }: { item: ArchiveItem }) {
  const project = getArchiveProject(item.projectId);
  const article = item.articleId ? getArchiveItem(item.articleId) : undefined;
  const [shown, setShown] = useState(8);

  return (
    <View className="ksm-shelves">
      <Text className="ksm-shelves-kicker">{categoryLabel(item.category)}</Text>
      <View className="ksm-shelves-detail">
        <img src={item.thumb} alt="" />
        <View>
          <Text accessibilityRole="header" className="ksm-shelves-title ksm-shelves-title--piece">
            {item.title}
          </Text>
          <Text className="ksm-shelves-intro">{item.summary}</Text>
          <Text className="ksm-shelves-meta">
            {formatArchiveDate(item.date)}
            {project ? ` · ${project.title}` : ""}
          </Text>
        </View>
      </View>

      <a className="ksm-shelves-download" href={item.download} download={item.downloadName}>
        Download
      </a>
      <Text className="ksm-shelves-note">Hosted on this site. Not a private Drive link.</Text>

      <View className="ksm-shelves-links">
        {project ? (
          <Link href={{ pathname: "/archive/projects/[slug]", params: { slug: project.id } }}>
            <Text className="ksm-shelves-textlink">Shelf · {project.title}</Text>
          </Link>
        ) : null}
        {project?.siteProjectId ? (
          <Link href={{ pathname: "/projects/[slug]", params: { slug: project.siteProjectId } }}>
            <Text className="ksm-shelves-textlink">Project page</Text>
          </Link>
        ) : null}
        {article ? (
          <Link href={{ pathname: "/archive/items/[slug]", params: { slug: article.id } }}>
            <Text className="ksm-shelves-textlink">Article · {article.title}</Text>
          </Link>
        ) : null}
        {item.publicUrl ? (
          <a className="ksm-shelves-textlink" href={item.publicUrl} target="_blank" rel="noopener noreferrer">
            Open public page
          </a>
        ) : null}
        <Link href="/archive">
          <Text className="ksm-shelves-textlink">All shelves</Text>
        </Link>
      </View>

      {item.children.length ? (
        <View className="ksm-shelf">
          <View className="ksm-shelf-head">
            <Text className="ksm-shelf-name">Rolled in</Text>
            <Text className="ksm-shelf-count">{item.children.length}</Text>
          </View>
          {item.children.slice(0, shown).map((child, index) => (
            <View key={`${child.title}-${index}`} className="ksm-rolled">
              <Text className="ksm-shelf-kind">{categoryLabel(child.category)}</Text>
              <Text className="ksm-shelf-piece">{child.title}</Text>
            </View>
          ))}
          {shown < item.children.length ? (
            <Pressable onPress={() => setShown((count) => count + 12)}>
              <Text className="ksm-shelves-textlink">Show the rest</Text>
            </Pressable>
          ) : null}
        </View>
      ) : null}
    </View>
  );
}
