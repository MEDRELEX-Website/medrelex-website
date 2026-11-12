"use client";

import { useState, type ReactNode } from "react";
import s from "./Accordion.module.css";

export default function Accordion({
  items,
  numbered = false,
  initial = 0,
  size = "md",
  onChange,
}: {
  items: { title: string; body: ReactNode }[];
  numbered?: boolean;
  initial?: number | null;
  size?: "md" | "lg";
  onChange?: (i: number | null) => void;
}) {
  const [open, setOpen] = useState<number | null>(initial);
  return (
    <div className={`${s.acc} ${size === "lg" ? s.lg : ""}`}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.title} className={`${s.item} ${isOpen ? s.open : ""}`}>
            <button
              className={s.head}
              aria-expanded={isOpen}
              onClick={() => {
                const v = isOpen ? null : i;
                setOpen(v);
                onChange?.(v);
              }}
            >
              {numbered && <span className={`num ${s.num}`}>{String(i + 1).padStart(2, "0")}</span>}
              <span className={s.title}>{it.title}</span>
              <span className={s.chev} aria-hidden />
            </button>
            <div className={s.panel}>
              <div className={s.inner}>
                <div className={s.body}>{it.body}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
