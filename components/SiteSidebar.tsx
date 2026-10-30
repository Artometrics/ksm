import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { DeskSearch } from "@/components/DeskSearch";
import { StylePicker } from "@/components/StylePicker";
import { CrtToggle } from "@/components/CrtToggle";

const LINKS = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/#projects", label: "Projects", icon: "flag" },
  { href: "/blog", label: "Journal", icon: "book" },
  { href: "/about", label: "About", icon: "face" },
  { href: "/now", label: "Now", icon: "clock" },
] as const;

function PixelIcon({ name }: { name: string }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    "aria-hidden": true as const,
    shapeRendering: "crispEdges" as const,
  };
  if (name === "home") {
    return (
      <svg {...common}>
        <rect x="2" y="7" width="12" height="7" fill="#2D3561" />
        <rect x="6" y="10" width="4" height="4" fill="#FFB961" />
        <rect x="1" y="7" width="14" height="2" fill="#C05C7E" />
        <rect x="3" y="5" width="10" height="2" fill="#C05C7E" />
        <rect x="6" y="3" width="4" height="2" fill="#F3826F" />
      </svg>
    );
  }
  if (name === "flag") {
    return (
      <svg {...common}>
        <rect x="3" y="2" width="2" height="12" fill="#2D3561" />
        <rect x="5" y="3" width="8" height="5" fill="#6BAA75" />
      </svg>
    );
  }
  if (name === "book") {
    return (
      <svg {...common}>
        <rect x="3" y="2" width="10" height="12" fill="#2D3561" />
        <rect x="5" y="4" width="6" height="2" fill="#FFB961" />
        <rect x="5" y="8" width="6" height="1" fill="#F3826F" />
      </svg>
    );
  }
  if (name === "face") {
    return (
      <svg {...common}>
        <rect x="4" y="3" width="8" height="8" fill="#FFB961" />
        <rect x="6" y="6" width="1" height="1" fill="#2D3561" />
        <rect x="9" y="6" width="1" height="1" fill="#2D3561" />
        <rect x="6" y="9" width="4" height="1" fill="#C05C7E" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="7" y="2" width="2" height="6" fill="#2D3561" />
      <rect x="7" y="7" width="6" height="2" fill="#F3826F" />
      <rect x="3" y="3" width="10" height="10" fill="none" stroke="#2D3561" strokeWidth="2" />
    </svg>
  );
}

function Links({ tab }: { tab?: boolean }) {
  return (
    <>
      {LINKS.map((item) => (
        <Link key={item.href} href={item.href} asChild>
          <Pressable className={tab ? "ksm-tab" : "ksm-side-link"}>
            <PixelIcon name={item.icon} />
            <Text>{item.label}</Text>
          </Pressable>
        </Link>
      ))}
    </>
  );
}

export function SiteSidebar() {
  return (
    <>
      <View className="ksm-side" accessibilityRole="none">
        <Text className="ksm-wordmark">KSM</Text>
        <View className="ksm-side-links">
          <Links />
        </View>
        <View className="ksm-side-foot">
          <DeskSearch />
          <StylePicker />
          <CrtToggle />
        </View>
      </View>
      <View className="ksm-tabs">
        <Links tab />
      </View>
    </>
  );
}
