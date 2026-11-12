"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import s from "./PatternChart.module.css";

// 30 days, event on day 12. Values are illustrative.
const SERIES = [
  { k: "Sleep", unit: "h", change: "↓ 48 min", d: "M0 22 C40 20 80 24 120 21 S160 22 190 23 S220 40 250 44 S320 47 360 46 S430 48 470 45 S560 47 600 46" },
  { k: "HRV", unit: "ms", change: "↓ 14%", d: "M0 18 C40 22 80 16 120 20 S170 18 200 21 S230 36 260 40 S330 43 370 44 S440 42 480 45 S560 44 600 43" },
  { k: "Resting HR", unit: "bpm", change: "↑ 6 bpm", d: "M0 46 C40 44 80 47 120 45 S170 46 200 44 S230 30 260 26 S330 22 370 21 S440 23 480 20 S560 21 600 22" },
  { k: "Activity", unit: "steps", change: "↓ 22%", d: "M0 20 C40 24 80 18 120 22 S170 20 200 24 S240 36 270 38 S330 40 370 36 S440 40 480 39 S560 38 600 40" },
  { k: "Stress", unit: "", change: "↑ elevated", d: "M0 44 C40 42 80 46 120 43 S170 44 200 42 S240 30 270 28 S330 26 370 29 S440 25 480 27 S560 26 600 28" },
];

export default function PatternChart() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const eventX = 200;

  return (
    <div ref={ref} className={`glass ${s.chart}`}>
      <div className={s.head}>
        <div>
          <p className={s.kicker}>Multi-signal pattern · last 30 days</p>
          <p className={s.title}>Five measures changed together.</p>
        </div>
        <span className="tag" style={{ color: "var(--green)" }}>
          Illustrative
        </span>
      </div>

      <div className={s.rows}>
        {SERIES.map((r, i) => (
          <div key={r.k} className={s.row}>
            <span className={s.label}>{r.k}</span>
            <svg viewBox="0 0 600 64" preserveAspectRatio="none" className={s.svg} aria-hidden>
              <rect x="0" y="14" width="600" height="20" fill="rgba(255,255,255,.035)" />
              <motion.path
                d={r.d}
                fill="none"
                stroke={i === 2 ? "#b9e07c" : "#8dc63f"}
                strokeWidth="1.6"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: inView ? 1 : 0 }}
                transition={{ duration: 1.6, delay: 0.2 + i * 0.12, ease: [0.2, 0.7, 0.1, 1] }}
              />
            </svg>
            <motion.span
              className={`num ${s.change}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ delay: 1.2 + i * 0.12 }}
            >
              {r.change}
            </motion.span>
          </div>
        ))}
        <motion.div
          className={s.event}
          style={{ left: `calc(var(--label-w) + (100% - var(--label-w) - var(--change-w)) * ${eventX / 600})` }}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: inView ? 1 : 0, scaleY: inView ? 1 : 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <span>Medication changed</span>
        </motion.div>
      </div>

      <motion.div
        className={s.insight}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 14 }}
        transition={{ delay: 1.9, duration: 0.7 }}
      >
        <span className={s.dot} />
        <p>
          MEDRELEX recognises a potentially meaningful pattern that began shortly after a medication change. Confidence is
          moderate. Prepared for discussion with your cardiologist.
        </p>
      </motion.div>
    </div>
  );
}
