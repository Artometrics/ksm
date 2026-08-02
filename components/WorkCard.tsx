import { Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import type { WorkItem } from "@/data/work";

export function WorkCard({
  item,
  variant = "stack",
}: {
  item: WorkItem;
  variant?: "stack" | "row" | "cover";
}) {
  const href = item.href as `/gallery`;

  if (variant === "cover") {
    return (
      <Link href={href} asChild>
        <Pressable className="relative min-h-[420px] w-full overflow-hidden border-2 border-border bg-black">
          <Image
            source={{ uri: item.image }}
            className="absolute inset-0 h-full w-full"
            contentFit="cover"
            transition={200}
          />
          <View className="absolute inset-0 bg-black/35" />
          <View className="absolute inset-0 justify-end gap-2 p-5">
            <Text className="font-[Anton] text-[12px] uppercase tracking-[2px] text-accent">
              {item.category}
            </Text>
            <Text className="font-[Anton] text-4xl uppercase leading-[0.95] tracking-[1px] text-white">
              {item.title}
            </Text>
            <Text className="text-[11px] uppercase tracking-[1.4px] text-white/70">
              {[item.meta, item.year].filter(Boolean).join(" · ")}
            </Text>
          </View>
        </Pressable>
      </Link>
    );
  }

  if (variant === "stack") {
    return (
      <Link href={href} asChild>
        <Pressable className="min-w-[260px] flex-1 gap-3 overflow-hidden border-2 border-border">
          <Image
            source={{ uri: item.image }}
            className="aspect-[4/5] w-full"
            contentFit="cover"
            transition={200}
            accessibilityLabel={item.title}
          />
          <View className="gap-2 p-3">
            <Text className="font-[Anton] text-[11px] uppercase tracking-[2px] text-accent">
              {item.category}
            </Text>
            <Text className="font-[Anton] text-[22px] uppercase leading-6 tracking-[1px] text-fg">
              {item.title}
            </Text>
            <Text
              className="font-sans text-[14px] leading-[20px] text-muted"
              numberOfLines={3}
            >
              {item.summary}
            </Text>
          </View>
        </Pressable>
      </Link>
    );
  }

  return (
    <Link href={href} asChild>
      <Pressable className="flex-row items-stretch gap-0 border-b-2 border-border">
        <Image
          source={{ uri: item.image }}
          className="h-[110px] w-[110px]"
          contentFit="cover"
          transition={200}
          accessibilityLabel={item.title}
        />
        <View className="flex-1 justify-center gap-1 px-4 py-4">
          <Text className="font-[Anton] text-[11px] uppercase tracking-[2px] text-accent">
            {item.category}
            {item.meta ? ` · ${item.meta}` : ""}
          </Text>
          <Text className="font-[Anton] text-xl uppercase leading-6 tracking-[1px] text-fg">
            {item.title}
          </Text>
          <Text
            className="font-sans text-[14px] leading-[20px] text-muted"
            numberOfLines={2}
          >
            {item.summary}
          </Text>
          {item.year ? (
            <Text className="text-[11px] uppercase tracking-[1.2px] text-subtle">
              {item.year}
            </Text>
          ) : null}
        </View>
      </Pressable>
    </Link>
  );
}
