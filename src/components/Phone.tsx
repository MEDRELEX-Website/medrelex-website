import type { ReactNode } from "react";
import s from "./Phone.module.css";

export default function Phone({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`${s.phone} ${className}`}>
      <div className={s.screen}>
        <div className={s.status}>
          <span className="num">9:41</span>
          <span className={s.island} />
          <span className={s.icons}>
            <i />
            <i />
            <i />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

/* ---------- small UI atoms used inside phone screens ---------- */

export function AppBar({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className={s.appbar}>
      <span className={`wordmark ${s.brand}`}>
        MEDRELE<b>X</b>
      </span>
      <p className={s.appTitle}>{title}</p>
      {sub && <p className={s.appSub}>{sub}</p>}
    </div>
  );
}

export function Row({ icon = "dot", label, meta, value, tone }: { icon?: "dot" | "ring" | "doc" | "pill" | "drop"; label: string; meta?: string; value?: string; tone?: "green" | "dim" }) {
  return (
    <div className={s.row}>
      <span className={`${s.ico} ${s[icon]}`} />
      <span className={s.rowText}>
        <span className={s.rowLabel}>{label}</span>
        {meta && <span className={s.rowMeta}>{meta}</span>}
      </span>
      {value && <span className={`num ${s.rowValue} ${tone === "green" ? s.vGreen : tone === "dim" ? s.vDim : ""}`}>{value}</span>}
    </div>
  );
}

export function Card({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return <div className={`${s.card} ${accent ? s.cardAccent : ""}`}>{children}</div>;
}

export function Label({ children }: { children: ReactNode }) {
  return <p className={s.label}>{children}</p>;
}

export function Toggle({ label, on }: { label: string; on: boolean }) {
  return (
    <div className={s.toggleRow}>
      <span>{label}</span>
      <span className={`${s.toggle} ${on ? s.toggleOn : ""}`}>
        <i />
      </span>
    </div>
  );
}

export function MiniChart({ d, marker, band = true }: { d: string; marker?: number; band?: boolean }) {
  return (
    <svg viewBox="0 0 260 90" className={s.chart} aria-hidden>
      {band && <rect x="0" y="40" width="260" height="22" fill="rgba(255,255,255,.05)" />}
      {marker !== undefined && <line x1={marker} x2={marker} y1="6" y2="88" stroke="rgba(255,255,255,.35)" strokeDasharray="3 3" />}
      <path d={d} fill="none" stroke="#8dc63f" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
