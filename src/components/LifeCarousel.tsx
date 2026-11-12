"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import s from "./LifeCarousel.module.css";

export type LifeCard = { image: string; alt: string; title: string; detail: string; position?: string; gray?: boolean };

export default function LifeCarousel({ cards }: { cards: LifeCard[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const card = el.querySelector<HTMLElement>("[data-card]");
      const w = card ? card.offsetWidth + 18 : 1;
      setActive(Math.round(el.scrollLeft / w));
      setEdges({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 });
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const go = (dir: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 400) + 18), behavior: "smooth" });
  };

  const dots = Math.max(1, cards.length - 2);

  return (
    <div className={s.wrap}>
      <div className={s.track} ref={track}>
        {cards.map((c, i) => (
          <article key={c.title} data-card className={`media grain ${s.card} ${open === i ? s.open : ""}`}>
            <Image
              src={c.image}
              alt={c.alt}
              fill
              sizes="(max-width: 700px) 82vw, 400px"
              style={{ objectPosition: c.position ?? "center", filter: c.gray ? "grayscale(1)" : undefined }}
              className={s.img}
            />
            <div className={s.shade} />
            <h3 className={`h-card ${s.title}`}>{c.title}</h3>
            <div className={s.detail}>
              <p>{c.detail}</p>
            </div>
            <button
              className={s.plus}
              aria-label={open === i ? `Close: ${c.title}` : `More: ${c.title}`}
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span />
              <span />
            </button>
          </article>
        ))}
      </div>

      <button className={`${s.arrow} ${s.prev} ${edges.start ? s.hide : ""}`} onClick={() => go(-1)} aria-label="Previous">
        <svg viewBox="0 0 24 24">
          <path d="M15 5l-7 7 7 7" />
        </svg>
      </button>
      <button className={`${s.arrow} ${s.next} ${edges.end ? s.hide : ""}`} onClick={() => go(1)} aria-label="Next">
        <svg viewBox="0 0 24 24">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className={s.dots} aria-hidden>
        {Array.from({ length: dots }).map((_, i) => (
          <span key={i} className={i === Math.min(active, dots - 1) ? s.dotOn : ""} />
        ))}
      </div>
    </div>
  );
}
