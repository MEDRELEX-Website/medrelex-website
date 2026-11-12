"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./FloatingCTA.module.css";

/** WHOOP-style persistent pill. Inverts on light sections; hides at the final CTA and footer. */
export default function FloatingCTA() {
  const pathname = usePathname();
  const ref = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    let raf = 0;
    const check = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = r.left + r.width / 2;
      const y = r.top + r.height / 2;
      const stack = document.elementsFromPoint(x, y);
      const host = stack.find((n) => n !== el && !el.contains(n) && (n as HTMLElement).closest?.("[data-theme]"));
      const themed = (host as HTMLElement | undefined)?.closest("[data-theme]") as HTMLElement | null;
      const theme = themed?.dataset.theme;
      setLight(theme === "light");
      const nearEnd = !!themed?.closest("[data-cta-stop]");
      setVisible(window.scrollY > window.innerHeight * 0.65 && !nearEnd);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  if (pathname === "/request-access") return null;

  return (
    <Link
      ref={ref}
      href="/request-access"
      className={`${styles.pill} ${visible ? styles.show : ""} ${light ? styles.light : ""}`}
      tabIndex={visible ? 0 : -1}
    >
      <span className={styles.dot} />
      Request access
    </Link>
  );
}
