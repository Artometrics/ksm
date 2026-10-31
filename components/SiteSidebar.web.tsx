import { useEffect, useState } from "react";
import { SiteSidebarPanel } from "@/components/SiteSidebar";

export function SiteSidebar() {
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  if (!desktop) {
    return null;
  }

  return <SiteSidebarPanel />;
}
