import { Text, View } from "react-native";
import { Link } from "expo-router";
import { formatStatus, type InventoryItem } from "@/lib/inventory";

export function InventoryItemView({ item }: { item: InventoryItem }) {
  return (
    <View className="ksm-shelves">
      <Text className="ksm-shelves-kicker">{item.category || item.tab}</Text>
      <View className="ksm-shelves-detail">
        <img src={item.thumb} alt="" />
        <View>
          <Text accessibilityRole="header" className="ksm-shelves-title ksm-shelves-title--piece">
            {item.title}
          </Text>
          {item.summary ? <Text className="ksm-shelves-intro">{item.summary}</Text> : null}
          <Text className="ksm-shelves-meta">
            {[formatStatus(item.status), item.tab, item.lastActivity].filter(Boolean).join(" · ")}
          </Text>
        </View>
      </View>

      {item.publicUrl ? (
        <a className="ksm-shelves-download" href={item.publicUrl} target="_blank" rel="noopener noreferrer">
          Open
        </a>
      ) : null}
      {item.download ? (
        <a className="ksm-shelves-download" href={item.download} download={item.downloadName}>
          Download
        </a>
      ) : null}
      {item.download ? (
        <Text className="ksm-shelves-note">Hosted on this site. Not a private Drive link.</Text>
      ) : null}

      <View className="ksm-shelves-links">
        <Link href="/inventory">
          <Text className="ksm-shelves-textlink">All shelves</Text>
        </Link>
      </View>
    </View>
  );
}
