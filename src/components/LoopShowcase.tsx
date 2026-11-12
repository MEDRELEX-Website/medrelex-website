"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import Phone, { AppBar, Card, Label, MiniChart, Row, Toggle } from "./Phone";
import s from "./LoopShowcase.module.css";

const STEPS = [
  {
    k: "Data",
    q: "What happened?",
    body: "Results, records, prescriptions and wearable readings arrive from every source and land in one place, attributed, time-stamped and normalised.",
  },
  {
    k: "Context",
    q: "What happened around it?",
    body: "Every reading is placed on your timeline beside the events that surround it: a new medication, a poor week of sleep, a long-haul flight.",
  },
  {
    k: "Intelligence",
    q: "What might it mean?",
    body: "Changes are measured against your own history, not population averages, and explained with honest uncertainty.",
  },
  {
    k: "Coordination",
    q: "Who needs to know?",
    body: "With your permission, the relevant part of the picture is shared with the right physician, and nothing more.",
  },
  {
    k: "Action",
    q: "What should happen next?",
    body: "A sensible next step: keep monitoring, gather one more result, or bring a prepared question to your next appointment.",
  },
  {
    k: "Feedback",
    q: "What happened afterwards?",
    body: "MEDRELEX follows the outcome of each intervention, so you and your doctors can see whether it worked.",
  },
  {
    k: "Learning",
    q: "How does this change your story?",
    body: "Every loop adds context. Your record becomes a health memory that grows more useful every year.",
  },
];

export default function LoopShowcase() {
  const ref = useRef<HTMLElement>(null);
  const [i, setI] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setI(Math.min(STEPS.length - 1, Math.max(0, Math.floor(v * STEPS.length * 0.999))));
  });

  return (
    <section ref={ref} className={`theme-light sheet ${s.section}`} data-theme="light" style={{ height: `${STEPS.length * 62 + 60}vh` }}>
      <div className={s.sticky}>
        <div className={`container ${s.grid}`}>
          <div className={s.left}>
            <p className="eyebrow">The MEDRELEX principle</p>
            <h2 className={`h-feature ${s.heading}`}>From data to understanding. Continuously.</h2>
            <ol className={s.steps}>
              {STEPS.map((st, n) => (
                <li key={st.k} className={n === i ? s.on : n < i ? s.done : ""}>
                  <span className={`num ${s.n}`}>0{n + 1}</span>
                  <span className={s.k}>{st.k}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className={s.center}>
            <div className={s.halo} />
            <Phone className={s.phone}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.45, ease: [0.2, 0.7, 0.1, 1] }}
                >
                  <Screen i={i} />
                </motion.div>
              </AnimatePresence>
            </Phone>
          </div>

          <div className={s.right}>
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.2, 0.7, 0.1, 1] }}
              >
                <p className={s.q}>{STEPS[i].q}</p>
                <p className={s.body}>{STEPS[i].body}</p>
              </motion.div>
            </AnimatePresence>
            <div className={s.progress}>
              <span style={{ width: `${((i + 1) / STEPS.length) * 100}%` }} />
            </div>
          </div>
        </div>
        <p className={s.note}>Illustrative interface</p>
      </div>
    </section>
  );
}

function Screen({ i }: { i: number }) {
  switch (i) {
    case 0:
      return (
        <>
          <AppBar title="Today" sub="4 new items added to your record" />
          <Card>
            <Label>Arrived this morning</Label>
            <Row icon="drop" label="Lipid & metabolic panel" meta="Laboratory · 18 markers" value="New" tone="green" />
            <Row icon="dot" label="Resting heart rate" meta="Apple Watch · overnight" value="64" />
            <Row icon="pill" label="Prescription updated" meta="Pharmacy · dosage change" value="Rx" tone="dim" />
            <Row icon="doc" label="Cardiology letter" meta="Scanned document" value="PDF" tone="dim" />
          </Card>
          <Card>
            <Label>Sources connected</Label>
            <Row icon="ring" label="11 of 14 sources" meta="3 awaiting authorisation" />
          </Card>
        </>
      );
    case 1:
      return (
        <>
          <AppBar title="Timeline" sub="Resting heart rate · last 60 days" />
          <Card>
            <MiniChart d="M0 60 C25 62 45 58 70 61 S100 59 120 60 S140 44 160 40 S200 36 220 38 S245 37 260 36" marker={120} />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#8a9088" }}>
              <span className="num">Jan 12</span>
              <span className="num">Mar 12</span>
            </div>
          </Card>
          <Card>
            <Label>Around the change</Label>
            <Row icon="pill" label="New medication started" meta="Feb 21 · prescribed by Dr. K." />
            <Row icon="ring" label="Sleep duration" meta="Down 48 min on average" value="−11%" tone="dim" />
            <Row icon="dot" label="Long-haul travel" meta="Feb 24 – Mar 2" />
          </Card>
        </>
      );
    case 2:
      return (
        <>
          <AppBar title="Insight" sub="Measured against your own baseline" />
          <Card accent>
            <Label>What changed</Label>
            <p style={{ fontSize: 17, margin: "0 0 6px", letterSpacing: "-0.02em" }}>
              Resting heart rate is <span style={{ color: "#8dc63f" }}>6 bpm above</span> your three-year range.
            </p>
            <MiniChart d="M0 62 C40 60 80 63 110 61 S150 48 180 42 S230 38 260 37" marker={110} />
          </Card>
          <Card>
            <Label>Should I care?</Label>
            <p style={{ margin: 0, color: "#c9cec7", lineHeight: 1.45 }}>Worth discussing, not alarming. Confidence: moderate. Two contributing factors identified.</p>
          </Card>
        </>
      );
    case 3:
      return (
        <>
          <AppBar title="Share" sub="Dr. A. Reyes · Cardiology" />
          <Card>
            <Label>Grant access to</Label>
            <Toggle label="Cardiovascular history" on />
            <Toggle label="Medication timeline" on />
            <Toggle label="Wearable trends · 90 days" on />
            <Toggle label="Recent lab results" on />
            <Toggle label="Mental-health notes" on={false} />
          </Card>
          <Card>
            <Row icon="ring" label="Access expires" meta="After your appointment" value="14 Mar" tone="dim" />
          </Card>
        </>
      );
    case 4:
      return (
        <>
          <AppBar title="Next step" sub="Suggested, never prescribed" />
          <Card accent>
            <Label>Recommended</Label>
            <p style={{ fontSize: 16, margin: 0, letterSpacing: "-0.02em", lineHeight: 1.35 }}>Raise this at your cardiology review on 14 March.</p>
          </Card>
          <Card>
            <Label>Added to your agenda</Label>
            <Row icon="doc" label="Could the new medication affect resting HR?" />
            <Row icon="doc" label="Should we review the dosage?" />
            <Row icon="ring" label="Continue monitoring overnight HR" meta="Automatic" />
          </Card>
        </>
      );
    case 5:
      return (
        <>
          <AppBar title="Outcome" sub="After the 14 March review" />
          <Card>
            <Label>Resting heart rate</Label>
            <MiniChart d="M0 38 C30 36 60 40 90 38 S120 40 140 46 S175 58 200 60 S235 61 260 60" marker={110} />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#8a9088" }}>
              <span>Dosage adjusted</span>
              <span>Back within range</span>
            </div>
          </Card>
          <Card accent>
            <Row icon="dot" label="Returned to baseline" meta="12 days after adjustment" value="58" tone="green" />
          </Card>
        </>
      );
    default:
      return (
        <>
          <AppBar title="Your health story" sub="15 years · 14 sources" />
          <Card>
            <Label>Recorded in your history</Label>
            <Row icon="pill" label="Medication response noted" meta="Linked to resting HR" />
            <Row icon="doc" label="Specialist outcome saved" meta="Cardiology · 14 Mar" />
            <Row icon="ring" label="Baseline refined" meta="Used for future comparisons" />
          </Card>
          <Card accent>
            <p style={{ margin: 0, lineHeight: 1.45 }}>Next time something changes, MEDRELEX will already know what happened before.</p>
          </Card>
        </>
      );
  }
}
