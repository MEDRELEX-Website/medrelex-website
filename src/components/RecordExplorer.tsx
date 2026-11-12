"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import s from "./RecordExplorer.module.css";

const TABS = [
  {
    k: "History",
    title: "Medical history",
    items: ["Diagnoses & conditions", "Procedures & surgeries", "Allergies", "Family history"],
    image: "/images/aged-profile.jpg",
    position: "70% 30%",
  },
  {
    k: "Medications",
    title: "A complete medication timeline",
    items: ["Current & previous medications", "Dosages", "Every change, dated", "Prescriber & pharmacy"],
    image: "/images/pills.jpg",
  },
  {
    k: "Laboratory",
    title: "Every result, across every lab",
    items: ["Blood work & biomarkers", "Metabolic markers", "Hormonal markers", "Normalised to LOINC"],
    image: "/images/lab-plate.jpg",
  },
  {
    k: "Imaging",
    title: "Imaging, in one place",
    items: ["MRI & CT", "Ultrasound", "X-ray", "Reports linked to events"],
    image: "/images/mri.jpg",
  },
  {
    k: "Wearables",
    title: "Continuous data, in context",
    items: ["Heart rate & HRV", "Sleep & recovery", "Activity, temperature, SpO₂", "Apple Health & Health Connect"],
    image: "/images/watch-dark.jpg",
  },
  {
    k: "Home",
    title: "Measurements you take at home",
    items: ["Blood pressure", "Glucose", "Weight & temperature", "Manual entries"],
    image: "/images/desk-lamp.jpg",
  },
  {
    k: "Events",
    title: "The events that give it meaning",
    items: ["Appointments & hospital visits", "New diagnoses", "Medication changes", "Major health events"],
    image: "/images/stethoscope-case.jpg",
  },
];

export default function RecordExplorer() {
  const [i, setI] = useState(0);
  const t = TABS[i];
  return (
    <div>
      <div className={s.tabs} role="tablist">
        {TABS.map((tab, n) => (
          <button key={tab.k} role="tab" aria-selected={n === i} className={n === i ? s.on : ""} onClick={() => setI(n)}>
            {tab.k}
          </button>
        ))}
      </div>
      <div className={s.panel}>
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            className={s.inner}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.2, 0.7, 0.1, 1] }}
          >
            <div className={`media grain ${s.img}`}>
              <Image src={t.image} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectPosition: t.position ?? "center" }} />
            </div>
            <div className={s.text}>
              <h3 className="h-feature">{t.title}</h3>
              <ol className={s.items}>
                {t.items.map((it, n) => (
                  <li key={it}>
                    <span className="num">0{n + 1}</span>
                    {it}
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
