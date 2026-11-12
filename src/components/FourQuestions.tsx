import Constellation from "./Constellation";
import Reveal from "./Reveal";
import s from "./FourQuestions.module.css";

const QS = [
  {
    n: "01",
    q: "What changed?",
    a: "Resting heart rate has risen 6 bpm over 21 days, above your three-year range.",
    metric: "+6",
    unit: "bpm",
    pos: "tl",
  },
  {
    n: "02",
    q: "Why might it have changed?",
    a: "It began four days after a new prescription. Sleep fell by 48 minutes over the same period.",
    metric: "2",
    unit: "factors",
    pos: "tr",
  },
  {
    n: "03",
    q: "Should I care?",
    a: "Worth discussing, not a cause for alarm. Confidence is moderate, and we say so.",
    metric: "Moderate",
    unit: "",
    pos: "bl",
  },
  {
    n: "04",
    q: "What is the next sensible step?",
    a: "Bring it to your cardiology review on 14 March. Two questions have been prepared.",
    metric: "14",
    unit: "Mar",
    pos: "br",
  },
];

export default function FourQuestions() {
  return (
    <div className={s.wrap}>
      <div className={s.orb}>
        <Constellation />
        <div className={s.core}>
          <span className={s.coreLabel}>Your baseline</span>
          <span className={`num ${s.coreValue}`}>15 yrs</span>
          <span className={s.coreSub}>compared with you, not the average</span>
        </div>
      </div>
      {QS.map((q, i) => (
        <Reveal key={q.n} delay={0.2 + i * 0.15} className={`glass ${s.card} ${s[q.pos]}`}>
          <div className={s.cardTop}>
            <span className={`num ${s.n}`}>{q.n}</span>
            <span className={s.metric}>
              <span className="num">{q.metric}</span> <small>{q.unit}</small>
            </span>
          </div>
          <p className={s.q}>{q.q}</p>
          <p className={s.a}>{q.a}</p>
        </Reveal>
      ))}
    </div>
  );
}
