import { Image } from "expo-image";
import { ScrollView, Text, View } from "react-native";
import {
  ABOUT_PORTRAIT,
  ABOUT_STRIP,
  LIFE_GALLERY,
  lifePhotoAspectRatio,
  type LifePhoto,
} from "@/data/lifePhotos";
import { assetUrl } from "@/lib/assets";

function Frame({ photo, className }: { photo: LifePhoto; className?: string }) {
  return (
    <View
      className={[
        "overflow-hidden border-2 border-border bg-bg-elevated",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Image
        source={{ uri: assetUrl(photo.src) ?? photo.src }}
        alt={photo.alt}
        accessibilityLabel={photo.alt}
        style={{
          width: "100%",
          aspectRatio: lifePhotoAspectRatio(photo.aspect),
        }}
        contentFit="cover"
        transition={200}
      />
      {photo.caption ? (
        <Text className="border-t border-border px-2 py-1.5 font-sans text-[11px] uppercase tracking-[0.08em] text-muted">
          {photo.caption}
        </Text>
      ) : null}
    </View>
  );
}

/** About-page portrait, horizontal studio strip, and life gallery. Theme tokens only. */
export function LifePhotosBlock() {
  return (
    <View className="gap-10">
      <View className="items-center gap-3">
        <View className="w-full max-w-[min(320px,100%)]">
          <Frame photo={ABOUT_PORTRAIT} />
        </View>
      </View>

      <View className="gap-2">
        <Text className="font-display text-[13px] uppercase tracking-[0.14em] text-muted">
          Studio strip
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="-mx-1"
          contentContainerClassName="px-1"
        >
          <View className="flex-row gap-3">
            {ABOUT_STRIP.map((p) => (
              <View key={p.slug} style={{ width: 148 }}>
                <Frame photo={p} />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <View className="gap-3">
        <Text className="font-display text-[13px] uppercase tracking-[0.14em] text-muted">
          Family & life
        </Text>
        <View className="flex-row flex-wrap gap-3">
          {LIFE_GALLERY.map((p) => {
            const wide = p.aspect === "16/9";
            return (
              <View
                key={p.slug}
                className={wide ? "w-full" : "min-w-[140px] flex-1 basis-[46%] max-w-[360px]"}
              >
                <Frame photo={p} />
              </View>
            );
          })}
        </View>
        <Text className="font-sans text-[12px] leading-5 text-muted">
          Trial photos from OneDrive. Say the word and any frame comes down — full review log in
          Drive.
        </Text>
      </View>
    </View>
  );
}
