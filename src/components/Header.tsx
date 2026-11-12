"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import styles from "./Header.module.css";

export const NAV = [
  { href: "/platform", label: "Platform" },
  { href: "/intelligence", label: "Intelligence" },
  { href: "/physicians", label: "For Physicians" },
  { href: "/privacy", label: "Privacy" },
  { href: "/membership", label: "Membership" },
  { href: "/vision", label: "Vision" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 420);
        last = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${hidden && !open ? styles.hidden : ""}`}
      >
        <div className={styles.bar}>
          <p>
            Founding memberships are now open, by invitation.
            <Link href="/request-access">Request access</Link>
          </p>
        </div>
        <div className={styles.nav}>
          <Logo />
          <nav className={styles.links} aria-label="Primary">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={pathname === n.href ? styles.active : ""}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className={styles.right}>
            <Link href="/request-access" className={`btn btn--green btn--sm ${styles.cta}`}>
              Request access
            </Link>
            <button
              className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`} aria-hidden={!open}>
        <nav>
          {NAV.map((n, i) => (
            <Link key={n.href} href={n.href} style={{ transitionDelay: `${open ? 0.08 + i * 0.05 : 0}s` }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link href="/request-access" className="btn btn--green">
          Request access <span className="arrow">→</span>
        </Link>
      </div>
    </>
  );
}
