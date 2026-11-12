"use client";

import { useState } from "react";
import s from "./PermissionsPanel.module.css";

const PEOPLE = [
  { id: "cardio", name: "Dr. A. Reyes", role: "Cardiologist", expires: "Until 14 Mar" },
  { id: "pcp", name: "Dr. M. Klein", role: "Concierge physician", expires: "Ongoing" },
  { id: "spouse", name: "Spouse", role: "Family member", expires: "Ongoing" },
  { id: "office", name: "Family office", role: "Administrative only", expires: "Ongoing" },
];

const DATA = ["Cardiovascular history", "Medication timeline", "Laboratory results", "Wearable trends", "Imaging", "Mental-health notes"];

const DEFAULTS: Record<string, boolean[]> = {
  cardio: [true, true, true, true, false, false],
  pcp: [true, true, true, true, true, false],
  spouse: [false, true, false, false, false, false],
  office: [false, false, false, false, false, false],
};

export default function PermissionsPanel() {
  const [who, setWho] = useState("cardio");
  const [grants, setGrants] = useState(DEFAULTS);
  const [log, setLog] = useState<string[]>([
    "Dr. A. Reyes viewed Wearable trends · 09:14",
    "You granted Dr. A. Reyes access to Medication timeline · Yesterday",
    "Dr. M. Klein viewed Laboratory results · Mon",
  ]);

  const person = PEOPLE.find((p) => p.id === who)!;

  const toggle = (n: number) => {
    setGrants((g) => {
      const next = { ...g, [who]: g[who].map((v, i) => (i === n ? !v : v)) };
      const on = next[who][n];
      setLog((l) => [`You ${on ? "granted" : "revoked"} ${person.name} access to ${DATA[n]} · Just now`, ...l].slice(0, 5));
      return next;
    });
  };

  const count = grants[who].filter(Boolean).length;

  return (
    <div className={`glass ${s.panel}`}>
      <div className={s.people}>
        <p className={s.kicker}>Who can see your record</p>
        {PEOPLE.map((p) => (
          <button key={p.id} className={`${s.person} ${p.id === who ? s.on : ""}`} onClick={() => setWho(p.id)}>
            <span className={s.avatar}>{p.name.replace("Dr. ", "").slice(0, 1)}</span>
            <span className={s.pText}>
              <span className={s.pName}>{p.name}</span>
              <span className={s.pRole}>{p.role}</span>
            </span>
            <span className={`num ${s.pCount}`}>{grants[p.id].filter(Boolean).length}</span>
          </button>
        ))}
      </div>

      <div className={s.detail}>
        <div className={s.detailHead}>
          <div>
            <p className={s.kicker}>Access for</p>
            <p className={s.dName}>{person.name}</p>
          </div>
          <span className={s.expires}>{person.expires}</span>
        </div>
        <div>
          {DATA.map((d, n) => (
            <div key={d} className={s.row}>
              <span>{d}</span>
              <button
                role="switch"
                aria-checked={grants[who][n]}
                aria-label={`${d} for ${person.name}`}
                className={`${s.switch} ${grants[who][n] ? s.switchOn : ""}`}
                onClick={() => toggle(n)}
              >
                <i />
              </button>
            </div>
          ))}
        </div>
        <p className={s.summary}>
          {count === 0 ? `${person.name} cannot see any of your health information.` : `${person.name} can see ${count} of ${DATA.length} categories.`}
        </p>
      </div>

      <div className={s.audit}>
        <p className={s.kicker}>Access log</p>
        <ul>
          {log.map((l, i) => (
            <li key={l + i}>
              <span className={s.logDot} />
              {l}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
