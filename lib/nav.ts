/** Primary site navigation — five tabs on mobile, sidebar on desktop. */

export type SiteTab = {
  href: string;
  label: string;
  icon: "projects" | "about" | "home" | "journal" | "archive";
  /** Center tab in the mobile bar */
  center?: boolean;
};

export const SITE_TABS: SiteTab[] = [
  { href: "/projects", label: "Projects", icon: "projects" },
  { href: "/about", label: "About", icon: "about" },
  { href: "/", label: "Home", icon: "home", center: true },
  { href: "/blog", label: "Journal", icon: "journal" },
  { href: "/archive", label: "Archive", icon: "archive" },
];

export function sectionLabel(pathname: string) {
  if (pathname === "/" || pathname === "/index") return "Home";
  const tab = SITE_TABS.find(
    (item) => item.href !== "/" && isTabActive(pathname, item.href),
  );
  if (tab) return tab.label;
  if (pathname.startsWith("/cv")) return "CV";
  if (pathname.startsWith("/gallery")) return "Gallery";
  if (pathname.startsWith("/desk")) return "Desk";
  if (pathname.startsWith("/legal")) return "Legal";
  if (pathname.startsWith("/now")) return "Now";
  return "KSM";
}

export function isTabActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/" || pathname === "/index";
  if (href === "/blog") {
    return pathname === "/blog" || pathname.startsWith("/blog/");
  }
  if (href === "/projects") {
    return pathname === "/projects" || pathname.startsWith("/projects/");
  }
  if (href === "/about") {
    return pathname === "/about" || pathname === "/cv";
  }
  if (href === "/archive") {
    return pathname === "/archive" || pathname.startsWith("/archive/");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}
