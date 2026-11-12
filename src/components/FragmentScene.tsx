"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import s from "./FragmentScene.module.css";

type Src = { label: string; meta: string; x: number; y: number; r: number; kind: "clinic" | "data" | "life" };

const SOURCES: Src[] = [
  { label: "Concierge physician", meta: "Visit notes · 2011 – today", x: 52, y: 12, r: -4, kind: "clinic" },
  { label: "Cardiologist", meta: "Echo report · Mar 2024", x: 78, y: 16, r: 3, kind: "clinic" },
  { label: "Lab results", meta: "41 panels · 3 laboratories", x: 64, y: 31, r: -2, kind: "data" },
  { label: "Private hospital", meta: "Discharge summary · 2019", x: 88, y: 37, r: 5, kind: "clinic" },
  { label: "Apple Watch", meta: "HRV · sleep · resting HR", x: 47, y: 44, r: 2, kind: "data" },
  { label: "Endocrinologist", meta: "Thyroid follow-up", x: 72, y: 52, r: -5, kind: "clinic" },
  { label: "Pharmacy", meta: "4 active prescriptions", x: 92, y: 60, r: 3, kind: "data" },
  { label: "Imaging · MRI", meta: "Lumbar spine · 2022", x: 56, y: 63, r: -3, kind: "data" },
  { label: "Continuous glucose", meta: "CGM · 14-day sensor", x: 80, y: 74, r: 4, kind: "data" },
  { label: "Longevity clinic", meta: "Biomarker programme", x: 38, y: 24, r: 4, kind: "life" },
  { label: "Nutritionist", meta: "Dietary plan · v3", x: 63, y: 84, r: -2, kind: "life" },
  { label: "Personal trainer", meta: "Training log", x: 94, y: 87, r: -4, kind: "life" },
  { label: "Family history", meta: "Father · cardiac event", x: 42, y: 78, r: 3, kind: "life" },
  { label: "International care", meta: "Specialist · Zurich", x: 22, y: 7, r: -3, kind: "clinic" },
];

const YEARS = ["2011", "2014", "2017", "2019", "2022", "2024", "Today"];

export default function FragmentScene() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const t1 = useTransform(p, [0, 0.22, 0.3], [1, 1, 0]);
  const t2 = useTransform(p, [0.3, 0.38, 0.58, 0.64], [0, 1, 1, 0]);
  const t3 = useTransform(p, [0.66, 0.74], [0, 1]);
  const y1 = useTransform(p, [0.22, 0.3], [0, -30]);
  const y2 = useTransform(p, [0.3, 0.38, 0.58, 0.64], [30, 0, 0, -30]);
  const y3 = useTransform(p, [0.66, 0.74], [30, 0]);

  const line = useTransform(p, [0.5, 0.72], [0, 1]);
  const yearsO = useTransform(p, [0.62, 0.72], [0, 1]);
  const recordO = useTransform(p, [0.74, 0.86], [0, 1]);
  const recordY = useTransform(p, [0.74, 0.86], [40, 0]);
  const draw = useTransform(p, [0.78, 0.98], [0, 1]);
  const glow = useTransform(p, [0.55, 0.8], [0, 1]);
  const count = useTransform(p, [0.3, 0.6], [14, 1]);

  return (
    <section ref={ref} className={s.scene} data-theme="dark" aria-label="From fragmented to connected">
      <div className={s.sticky}>
        <motion.div className={s.glow} style={{ opacity: glow }} />

        <div className={`container ${s.copy}`}>
          <motion.div className={s.state} style={{ opacity: t1, y: y1 }}>
            <p className="eyebrow">The reality</p>
            <h2 className="h-display h-display--md">
              Today, your health lives in <em className={s.em}>fourteen</em> different places.
            </h2>
            <p className={`lead ${s.lead}`}>Each provider keeps an excellent record. None of them keeps yours.</p>
          </motion.div>
          <motion.div className={s.state} style={{ opacity: t2, y: y2 }} aria-hidden>
            <p className="eyebrow">MEDRELEX</p>
            <h2 className="h-display h-display--md">Brings every source into one place.</h2>
            <p className={`lead ${s.lead}`}>
              Records, results, prescriptions and continuous data, gathered and normalised to clinical standards.
            </p>
          </motion.div>
          <motion.div className={s.state} style={{ opacity: t3, y: y3 }} aria-hidden>
            <p className="eyebrow">Continuity</p>
            <h2 className="h-display h-display--md">And keeps it in order. For life.</h2>
            <p className={`lead ${s.lead}`}>
              One longitudinal record that grows with you, so every new result is read against everything before it.
            </p>
          </motion.div>
        </div>

        <div className={s.stage} aria-hidden>
          {SOURCES.map((src, i) => (
            <Fragment key={src.label} src={src} i={i} p={p} />
          ))}

          <div className={s.timeline}>
            <motion.div className={s.line} style={{ scaleX: line }} />
            <motion.div className={s.years} style={{ opacity: yearsO }}>
              {YEARS.map((y) => (
                <span key={y}>{y}</span>
              ))}
            </motion.div>
          </div>

          <motion.div className={`glass ${s.record}`} style={{ opacity: recordO, y: recordY }}>
            <div className={s.recordHead}>
              <span className={s.recordDot} />
              <span>One longitudinal record</span>
              <span className={`num ${s.recordMeta}`}>14 sources · 15 years</span>
            </div>
            <svg viewBox="0 0 400 90" className={s.recordChart}>
              <defs>
                <linearGradient id="fs-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#8dc63f" stopOpacity=".28" />
                  <stop offset="1" stopColor="#8dc63f" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0 62 C30 58 50 66 80 60 S130 48 160 54 S210 70 240 58 S290 36 320 42 S370 30 400 26"
                fill="none"
                stroke="#8dc63f"
                strokeWidth="1.6"
                style={{ pathLength: draw }}
              />
              <motion.path
                d="M0 62 C30 58 50 66 80 60 S130 48 160 54 S210 70 240 58 S290 36 320 42 S370 30 400 26 L400 90 L0 90Z"
                fill="url(#fs-fill)"
                style={{ opacity: draw }}
              />
            </svg>
            <div className={s.recordRows}>
              <span>History</span>
              <span>Medications</span>
              <span>Labs</span>
              <span>Imaging</span>
              <span>Wearables</span>
              <span>Events</span>
            </div>
          </motion.div>
        </div>

        <motion.div className={s.counter} aria-hidden>
          <motion.span className="num">{useRounded(count)}</motion.span>
          <span>sources</span>
        </motion.div>
      </div>
    </section>
  );
}

function useRounded(v: MotionValue<number>) {
  return useTransform(v, (n) => Math.round(n).toString().padStart(2, "0"));
}

function Fragment({ src, i, p }: { src: Src; i: number; p: MotionValue<number> }) {
  const n = SOURCES.length;
  const targetX = 6 + (i / (n - 1)) * 88; // spread along the timeline
  const start = 0.28 + (i % 5) * 0.012;
  const end = 0.6 + (i % 4) * 0.012;

  const left = useTransform(p, [start, end], [`${src.x}%`, `${targetX}%`]);
  const top = useTransform(p, [start, end], [`${src.y}%`, `86%`]);
  const rotate = useTransform(p, [0, start, end], [src.r, src.r * 0.6, 0]);
  const scale = useTransform(p, [start, end], [1, 0.16]);
  const cardO = useTransform(p, [0, 0.04, end - 0.06, end], [0.6, 1, 1, 0]);
  const drift = useTransform(p, [0, start], [0, (i % 2 ? -1 : 1) * 16]);
  const dotO = useTransform(p, [end - 0.04, end + 0.02], [0, 1]);

  return (
    <>
      <motion.div className={`${s.card} ${s[src.kind]}`} style={{ left, top, rotate, scale, opacity: cardO, y: drift }}>
        <span className={s.cardKind} />
        <span className={s.cardLabel}>{src.label}</span>
        <span className={s.cardMeta}>{src.meta}</span>
      </motion.div>
      <motion.span className={s.node} style={{ left: `${targetX}%`, opacity: dotO }} />
    </>
  );
}
