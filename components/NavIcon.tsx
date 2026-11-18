import {
  Archive,
  FlaskConical,
  FolderKanban,
  House,
  Newspaper,
  UserRound,
} from "lucide-react-native";
import type { SiteTab } from "@/lib/nav";

const ICONS: Record<SiteTab["icon"], typeof House> = {
  projects: FolderKanban,
  about: UserRound,
  home: House,
  journal: Newspaper,
  lab: FlaskConical,
  archive: Archive,
};

export function NavIcon({
  name,
  size = 18,
}: {
  name: SiteTab["icon"];
  size?: number;
}) {
  const Icon = ICONS[name];
  return <Icon size={size} color="currentColor" strokeWidth={1.75} />;
}
