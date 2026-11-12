import Reveal from "./Reveal";
import s from "./Blocks2.module.css";

/* ------------------------------------------------------------------ */
/* Compare table — highlighted column                                  */
/* ------------------------------------------------------------------ */
export function CompareTable({
  cols,
  rows,
  highlight = 0,
}: {
  cols: string[];
  rows: { label: string; values: (boolean | string)[] }[];
  highlight?: number;
}) {
  return (
    <Reveal className={s.compareWrap}>
      <table className={s.compare}>
        <thead>
          <tr>
            <th />
            {cols.map((c, i) => (
              <th key={c} className={i === highlight ? s.hl : ""}>
                <span className="wordmark">{c}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label}>
              <th scope="row">{r.label}</th>
              {r.values.map((v, i) => (
                <td key={i} className={i === highlight ? s.hl : ""}>
                  {v === true ? (
                    <svg viewBox="0 0 20 20" className={s.check} aria-label="Included">
                      <circle cx="10" cy="10" r="9" />
                      <path d="M6 10.3l2.7 2.7L14.2 7.4" />
                    </svg>
                  ) : v === false ? (
                    <span className={s.dash} aria-label="Not included">
                      –
                    </span>
                  ) : (
                    <span className={s.text}>{v}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Flow — a numbered loop of steps                                     */
/* ------------------------------------------------------------------ */
export function Flow({ steps, loop = true }: { steps: string[]; loop?: boolean }) {
  return (
    <div className={s.flow}>
      {steps.map((st, i) => (
        <Reveal key={st} delay={i * 0.08} className={s.flowStep}>
          <span className={`num ${s.flowN}`}>{String(i + 1).padStart(2, "0")}</span>
          <p>{st}</p>
          <span className={s.flowArrow} aria-hidden>
            {i === steps.length - 1 ? (loop ? "↺" : "") : "→"}
          </span>
        </Reveal>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Source grid — honest status per integration                         */
/* ------------------------------------------------------------------ */
export function SourceGrid({ sources }: { sources: { name: string; detail: string; status: "In development" | "Planned" | "Phase 2" }[] }) {
  return (
    <div className={s.sources}>
      {sources.map((src, i) => (
        <Reveal key={src.name} delay={(i % 4) * 0.06} className={s.source}>
          <span className={`${s.status} ${src.status === "In development" ? s.live : ""}`}>
            <i />
            {src.status}
          </span>
          <p className={s.sName}>{src.name}</p>
          <p className={s.sDetail}>{src.detail}</p>
        </Reveal>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Requirement grid — numbered principle cards                         */
/* ------------------------------------------------------------------ */
export function RequirementGrid({ items, light = false }: { items: { title: string; text: string }[]; light?: boolean }) {
  return (
    <div className={`${s.reqs} ${light ? s.reqsLight : ""}`}>
      {items.map((it, i) => (
        <Reveal key={it.title} delay={(i % 3) * 0.08} className={s.req}>
          <span className={`num ${s.reqN}`}>{String(i + 1).padStart(2, "0")}</span>
          <h3 className={s.reqT}>{it.title}</h3>
          <p className={s.reqP}>{it.text}</p>
        </Reveal>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Chips cloud                                                         */
/* ------------------------------------------------------------------ */
export function ChipCloud({ items }: { items: string[] }) {
  return (
    <Reveal className={s.cloud}>
      {items.map((it) => (
        <span key={it}>{it}</span>
      ))}
    </Reveal>
  );
}
