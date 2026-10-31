import { Text, View } from "react-native";
import { Link } from "expo-router";
import { Wrapper } from "@/components/Wrapper";

const LINKS = [
  ["/projects", "Projects"],
  ["/", "Home"],
  ["/blog", "Journal"],
  ["/archive", "Archive"],
  ["/about", "About"],
  ["/cv", "CV"],
  ["/desk", "Desk"],
  ["/legal/privacy", "Privacy"],
] as const;

export function SiteFooter() {
  return (
    <View className="ksm-footer">
      <Wrapper className="gap-4 py-8">
        <View className="flex-row flex-wrap gap-4">
          {LINKS.map(([href, label]) => (
            <Link key={href} href={href as "/"}>
              <Text className="ksm-nav">{label}</Text>
            </Link>
          ))}
        </View>
        <Text className="ksm-fine">
          © {new Date().getFullYear()} Kyle McAuliffe. Placeholder magazine files stay in the repo and off this index.
        </Text>
      </Wrapper>
    </View>
  );
}
