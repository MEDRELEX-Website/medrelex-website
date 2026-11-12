"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import s from "./FeatureStepper.module.css";

export type Step = { title: string; body: string; image: string; alt: string; position?: string; gray?: boolean };

/** Vertical list on the left; the active item's image on the right. */
export default function FeatureStepper({ steps, light = false }: { steps: Step[]; light?: boolean }) {
  const [i, setI] = useState(0);
  return (
    <div className={`${s.grid} ${light ? s.light : ""}`}>
      <ol className={s.list}>
        {steps.map((st, n) => (
          <li key={st.title} className={n === i ? s.on : ""}>
            <button onClick={() => setI(n)} onMouseEnter={() => setI(n)} aria-expanded={n === i}>
              <span className={`num ${s.n}`}>0{n + 1}</span>
              <span className={s.t}>{st.title}</span>
            </button>
            <div className={s.bodyWrap}>
              <p className={s.body}>{st.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className={`media grain ${s.visual}`}>
        <AnimatePresence initial={false}>
          <motion.div
            key={i}
            className={s.imgWrap}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.7, 0.1, 1] }}
          >
            <Image
              src={steps[i].image}
              alt={steps[i].alt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectPosition: steps[i].position ?? "center", filter: steps[i].gray ? "grayscale(1)" : undefined }}
            />
          </motion.div>
        </AnimatePresence>
        <div className={s.counter}>
          <span className="num">0{i + 1}</span> / <span className="num">0{steps.length}</span>
        </div>
      </div>
    </div>
  );
}
