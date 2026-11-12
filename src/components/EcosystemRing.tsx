import Image from "next/image";
import s from "./EcosystemRing.module.css";

const OUTER = [
  "Concierge physician",
  "Cardiology",
  "Endocrinology",
  "Private hospitals",
  "Laboratories",
  "Imaging centres",
  "Pharmacies",
  "Longevity programmes",
  "Nutrition",
  "Personal training",
  "Mental health",
  "International care",
];
const INNER = ["Apple Health", "Health Connect", "Smart rings", "CGM", "Blood pressure", "Documents", "Family office"];

/** Two counter-rotating rings of the people and services MEDRELEX connects. */
export default function EcosystemRing() {
  return (
    <div className={s.ring} aria-label="The healthcare ecosystem MEDRELEX connects">
      <svg className={s.orbits} viewBox="0 0 1000 1000" aria-hidden>
        <circle cx="500" cy="500" r="470" />
        <circle cx="500" cy="500" r="330" />
        <circle cx="500" cy="500" r="190" className={s.inner} />
      </svg>

      <div className={`${s.track} ${s.outer}`}>
        {OUTER.map((t, i) => (
          <span key={t} className={s.node} style={{ "--a": `${(i / OUTER.length) * 360}deg`, "--r": "47cqw" } as React.CSSProperties}>
            <span className={s.label}>{t}</span>
          </span>
        ))}
      </div>
      <div className={`${s.track} ${s.innerTrack}`}>
        {INNER.map((t, i) => (
          <span key={t} className={`${s.node} ${s.small}`} style={{ "--a": `${(i / INNER.length) * 360 + 20}deg`, "--r": "33cqw" } as React.CSSProperties}>
            <span className={s.label}>{t}</span>
          </span>
        ))}
      </div>

      <div className={s.center}>
        <Image src="/images/mark.png" alt="" width={86} height={76} />
        <p className={`wordmark ${s.centerWord}`}>
          MEDRELE<b>X</b>
        </p>
        <p className={s.centerSub}>The layer between</p>
      </div>
    </div>
  );
}
