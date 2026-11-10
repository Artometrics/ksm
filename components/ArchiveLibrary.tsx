import { Text, View } from "react-native";
import { Link } from "expo-router";
import { categoryLabel, getArchiveItems, getArchiveMeta } from "@/lib/archive";

/** Native fallback. Search and category filters live on the web archive. */
export function ArchiveLibrary() {
  const meta = getArchiveMeta();
  const items = getArchiveItems();

  return (
    <View className="gap-3">
      <Text className="ksm-lede">
        {meta.itemPages.toLocaleString()} pieces, each with a thumbnail and a download hosted
        here. {meta.rolledFiles.toLocaleString()} loose files are rolled into their parents.
      </Text>
      {items.map((item) => (
        <Link key={item.id} href={{ pathname: "/archive/items/[slug]", params: { slug: item.id } }}>
          <View className="ksm-slot gap-1">
            <Text className="ksm-kicker">{categoryLabel(item.category)}</Text>
            <Text className="ksm-card-title">{item.title}</Text>
            <Text className="ksm-card-line">{item.summary}</Text>
          </View>
        </Link>
      ))}
    </View>
  );
}
