"use client";

import { createElement, useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: keyof HTMLElementTagNameMap;
  delay?: number;
  className?: string;
  style?: CSSProperties;
};

/** Fade-and-rise on first entry into the viewport. */
export default function Reveal({ children, as = "div", delay = 0, className = "", style }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return createElement(
    as,
    { ref, className: `reveal ${className}`, style: { ...style, "--d": `${delay}s` } as CSSProperties },
    children,
  );
}
