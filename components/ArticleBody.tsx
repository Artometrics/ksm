import { useWindowDimensions } from "react-native";
import RenderHTML from "react-native-render-html";
import { useTheme } from "@/lib/theme";

export function ArticleBody({ html }: { html: string }) {
  const { width } = useWindowDimensions();
  const { colors, fonts } = useTheme();
  const contentWidth = Math.min(width - 40, 680);

  return (
    <RenderHTML
      contentWidth={contentWidth}
      source={{ html }}
      baseStyle={{
        color: colors.text,
        fontFamily: fonts.serif,
        fontSize: 18,
        lineHeight: 30,
      }}
      tagsStyles={{
        p: { marginBottom: 16 },
        h2: {
          fontFamily: fonts.serif,
          fontSize: 28,
          fontWeight: "300",
          marginTop: 28,
          marginBottom: 12,
          color: colors.text,
        },
        h3: {
          fontFamily: fonts.serif,
          fontSize: 22,
          fontWeight: "400",
          marginTop: 22,
          marginBottom: 10,
          color: colors.text,
        },
        a: { color: colors.accent },
        blockquote: {
          borderLeftWidth: 2,
          borderLeftColor: colors.accent,
          paddingLeft: 16,
          marginVertical: 16,
          color: colors.textMuted,
          fontStyle: "italic",
        },
        li: { marginBottom: 6 },
      }}
    />
  );
}
