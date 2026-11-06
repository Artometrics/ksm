import { SiteSidebarPanel } from "@/components/SiteSidebarPanel";

export { SiteSidebarPanel };

/** Native sidebar. Web uses SiteSidebar.web.tsx and mounts this panel only at desktop width. */
export function SiteSidebar() {
  return <SiteSidebarPanel />;
}
