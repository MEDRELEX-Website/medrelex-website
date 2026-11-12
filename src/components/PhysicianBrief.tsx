"use client";

import Image from "next/image";
import { useState } from "react";
import Accordion from "./Accordion";
import Reveal from "./Reveal";
import s from "./PhysicianBrief.module.css";

const SECTIONS = [
  {
    title: "Relevant history",
    body: "Cardiovascular history, prior procedures, family history and the events that matter for this specialist, and none that don't.",
  },
  {
    title: "Changes since your last visit",
    body: "What has moved since the previous appointment, measured against your personal baseline rather than population ranges.",
  },
  {
    title: "Medication timeline",
    body: "Every start, stop and dosage change, aligned with the readings around it, so cause and coincidence can be told apart.",
  },
  {
    title: "Questions to discuss",
    body: "The questions you want answered, prepared in advance, so a short appointment covers what matters most.",
  },
];

export default function PhysicianBrief({ image = "/images/stethoscope-case.jpg" }: { image?: string }) {
  const [active, setActive] = useState<number | null>(0);

  return (
    <div className={s.grid}>
      <div className={s.text}>
        <Reveal>
          <p className="eyebrow">Before every appointment</p>
          <h2 className="h-feature">Walk in with the whole story already told.</h2>
          <p className={`body muted ${s.intro}`}>
            With your permission, MEDRELEX prepares a structured brief for each specialist, so the conversation starts
            where it matters.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion items={SECTIONS} numbered onChange={setActive} />
        </Reveal>
      </div>

      <Reveal delay={0.15} className={`media grain ${s.visual}`}>
        <Image src={image} alt="A physician's stethoscope resting on a leather case" fill sizes="(max-width: 900px) 100vw, 50vw" className={s.bg} />
        <div className={s.shade} />
        <div className={s.doc}>
          <div className={s.docHead}>
            <div>
              <p className={s.docKicker}>Pre-consultation brief</p>
              <p className={s.docTitle}>Cardiology review</p>
            </div>
            <div className={s.docMeta}>
              <span className="num">14 Mar</span>
              <span>Dr. A. Reyes</span>
            </div>
          </div>
          <div className={`${s.docRow} ${active === 0 ? s.hl : ""}`}>
            <span className={s.docLabel}>History</span>
            <span>Father: cardiac event at 61 · Stress echo 2024 normal</span>
          </div>
          <div className={`${s.docRow} ${active === 1 ? s.hl : ""}`}>
            <span className={s.docLabel}>Changes</span>
            <span>
              Resting HR <b className="num">+6 bpm</b> over 21 days · HRV <b className="num">−14%</b>
            </span>
          </div>
          <div className={`${s.docRow} ${active === 2 ? s.hl : ""}`}>
            <span className={s.docLabel}>Medication</span>
            <span className={s.medline}>
              <i style={{ left: "8%", width: "84%" }} />
              <i className={s.new} style={{ left: "58%", width: "34%" }} />
              <em style={{ left: "58%" }}>Feb 21</em>
            </span>
          </div>
          <div className={`${s.docRow} ${active === 3 ? s.hl : ""}`}>
            <span className={s.docLabel}>Questions</span>
            <span>Could the new prescription affect resting HR? · Review dosage?</span>
          </div>
          <p className={s.docFoot}>Shared by the member · access expires after appointment · Illustrative</p>
        </div>
      </Reveal>
    </div>
  );
}
