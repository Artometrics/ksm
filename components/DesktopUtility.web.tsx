import { usePathname } from "expo-router";
import { useLaunchQuery } from "@/lib/launchQuery";
import { sectionLabel } from "@/lib/nav";

export function DesktopUtility() {
  const pathname = usePathname();
  const { query, setQuery } = useLaunchQuery();
  const section = sectionLabel(pathname);
  const isHome = pathname === "/" || pathname === "/index";

  return (
    <header className="ksm-utility">
      <h1 className="ksm-utility-title">{section}</h1>
      {isHome ? (
        <label className="ksm-home-search ksm-utility-search">
          <span className="visually-hidden">Search projects and posts</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="What do you want to launch?"
            enterKeyHint="search"
          />
        </label>
      ) : null}
    </header>
  );
}
