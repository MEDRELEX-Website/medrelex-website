import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "./Reveal";
import s from "./Blocks.module.css";

/* ------------------------------------------------------------------ */
/* Editorial display heading — one idea per viewport                   */
/* ------------------------------------------------------------------ */
export function DisplayHeading({
  eyebrow,
  title,
  lead,
  cta,
  align = "left",
  size = "xl",
  offsetLead = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  cta?: { label: string; href: string; ghost?: boolean };
  align?: "left" | "center";
  size?: "xl" | "md";
  offsetLead?: boolean;
}) {
  return (
    <div className={`${s.display} ${align === "center" ? s.center : ""} ${offsetLead ? s.offset : ""}`}>
      {eyebrow && (
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal as="h2" className={`h-display ${size === "md" ? "h-display--md" : ""} ${s.displayTitle}`}>
        {title}
      </Reveal>
      {lead && (
        <Reveal delay={0.12} className={s.displayLead}>
          <p className="lead">{lead}</p>
        </Reveal>
      )}
      {cta && (
        <Reveal delay={0.2} className={s.displayCta}>
          <Link href={cta.href} className={`btn ${cta.ghost ? "btn--ghost" : "btn--green"}`}>
            {cta.label} <span className="arrow">→</span>
          </Link>
        </Reveal>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Promo strip — thumbnail | message | action                          */
/* ------------------------------------------------------------------ */
export function PromoStrip({
  image,
  alt,
  title,
  text,
  cta,
  tone = "dark",
}: {
  image: string;
  alt: string;
  title: string;
  text: string;
  cta: { label: string; href: string };
  tone?: "dark" | "light";
}) {
  return (
    <Reveal className={`${s.promo} ${tone === "light" ? s.promoLight : ""}`}>
      <div className={`media ${s.promoMedia}`}>
        <Image src={image} alt={alt} fill sizes="(max-width: 760px) 100vw, 300px" />
      </div>
      <div className={s.promoText}>
        <h3 className="h-card">{title}</h3>
        <p className="body muted">{text}</p>
      </div>
      <Link href={cta.href} className={`btn btn--ghost ${s.promoCta}`}>
        {cta.label}
      </Link>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Image tiles — 2-up square photography with overlaid message         */
/* ------------------------------------------------------------------ */
export function ImageTiles({
  tiles,
}: {
  tiles: { image: string; alt: string; title: string; text: string; position?: string; gray?: boolean }[];
}) {
  return (
    <div className={s.tiles}>
      {tiles.map((t, i) => (
        <Reveal key={t.title} delay={i * 0.1} className={`media grain ${s.tile}`}>
          <Image
            src={t.image}
            alt={t.alt}
            fill
            sizes="(max-width: 860px) 100vw, 50vw"
            style={{ objectPosition: t.position ?? "center", filter: t.gray ? "grayscale(1)" : undefined }}
            className={s.tileImg}
          />
          <div className={s.tileShade} />
          <div className={s.tileText}>
            <h3 className="h-card">{t.title}</h3>
            <p className="body">{t.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Split feature — text beside a large rounded image                   */
/* ------------------------------------------------------------------ */
export function SplitFeature({
  eyebrow,
  title,
  children,
  image,
  alt,
  reverse = false,
  position,
  gray = false,
  overlay,
}: {
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
  image: string;
  alt: string;
  reverse?: boolean;
  position?: string;
  gray?: boolean;
  overlay?: ReactNode;
}) {
  return (
    <div className={`${s.split} ${reverse ? s.splitReverse : ""}`}>
      <Reveal className={s.splitText}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h3 className="h-feature">{title}</h3>
        <div className={s.splitBody}>{children}</div>
      </Reveal>
      <Reveal delay={0.1} className={`media grain ${s.splitMedia}`}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 860px) 100vw, 50vw"
          style={{ objectPosition: position ?? "center", filter: gray ? "grayscale(1)" : undefined }}
        />
        {overlay}
      </Reveal>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Membership cards                                                    */
/* ------------------------------------------------------------------ */
export type Tier = {
  id: string;
  name: string;
  status: string;
  line: string;
  features: string[];
  cta: string;
  gradient: string;
  featured?: boolean;
};

export function MembershipCards({ tiers }: { tiers: Tier[] }) {
  return (
    <div className={s.tiers}>
      {tiers.map((t, i) => (
        <Reveal key={t.id} delay={i * 0.1} className={`${s.tier} ${t.featured ? s.tierFeatured : ""}`}>
          <div id={t.id} className={s.tierHead} style={{ background: t.gradient }}>
            <span className={s.tierStatus}>{t.status}</span>
            <p className={`wordmark ${s.tierName}`}>{t.name}</p>
            <p className={s.tierLine}>{t.line}</p>
            <TierEmblem index={i} />
          </div>
          <ul className={s.tierList}>
            {t.features.map((f) => (
              <li key={f}>
                <svg viewBox="0 0 16 16" aria-hidden>
                  <circle cx="8" cy="8" r="7.25" fill="none" stroke="currentColor" strokeOpacity=".35" />
                  <path d="M4.8 8.2l2.1 2.1 4.3-4.6" fill="none" stroke="currentColor" strokeWidth="1.4" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
          <div className={s.tierActions}>
            <Link href="/request-access" className={`btn ${t.featured ? "btn--green" : "btn--dark"}`}>
              {t.cta}
            </Link>
            <Link href="/membership" className="btn btn--ghost">
              Learn more
            </Link>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function TierEmblem({ index }: { index: number }) {
  // one, two, many: a quiet visual for individual → family → office
  const rings = [1, 3, 6][index] ?? 1;
  return (
    <svg className={s.emblem} viewBox="0 0 200 120" aria-hidden>
      {Array.from({ length: rings }).map((_, i) => {
        const a = (i / rings) * Math.PI * 2;
        const r = rings === 1 ? 0 : 26;
        return (
          <circle
            key={i}
            cx={100 + Math.cos(a) * r}
            cy={60 + Math.sin(a) * r * 0.55}
            r={rings === 1 ? 34 : 22}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.55}
          />
        );
      })}
      <circle cx="100" cy="60" r="3" fill="var(--green)" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Principles wall — replaces testimonials honestly                    */
/* ------------------------------------------------------------------ */
export function Principles({
  items,
}: {
  items: ({ kind: "image"; image: string; alt: string; title: string; text: string; tall?: boolean; position?: string } | { kind: "quote"; quote: string; by: string })[];
}) {
  return (
    <div className={s.wall}>
      {items.map((it, i) =>
        it.kind === "image" ? (
          <Reveal key={i} delay={(i % 3) * 0.08} className={`media grain ${s.wallCard} ${it.tall ? s.wallTall : ""}`}>
            <Image src={it.image} alt={it.alt} fill sizes="(max-width: 860px) 100vw, 33vw" style={{ objectPosition: it.position ?? "center" }} />
            <div className={s.wallShade} />
            <div className={s.wallText}>
              <span className={s.wallTag}>Principle</span>
              <h3 className="h-card">{it.title}</h3>
              <p className="body">{it.text}</p>
            </div>
          </Reveal>
        ) : (
          <Reveal key={i} delay={(i % 3) * 0.08} className={`${s.wallCard} ${s.wallQuote}`}>
            <p className={s.quote}>“{it.quote}”</p>
            <p className={s.quoteBy}>{it.by}</p>
          </Reveal>
        ),
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Manifesto — From / To                                               */
/* ------------------------------------------------------------------ */
export function Manifesto({ rows }: { rows: [string, string][] }) {
  return (
    <div className={s.manifesto}>
      {rows.map(([from, to], i) => (
        <Reveal key={from} delay={i * 0.06} className={s.mRow}>
          <span className={s.mLabel}>From</span>
          <span className={s.mFrom}>{from}</span>
          <span className={s.mLabel}>To</span>
          <span className={s.mTo}>{to}</span>
        </Reveal>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Final call to action                                                */
/* ------------------------------------------------------------------ */
export function FinalCTA({
  title = "Begin with a private conversation.",
  text = "Founding memberships are limited and offered by application. Tell us a little about your healthcare, and a member of our team will be in touch personally.",
  image = "/images/pen-letter.jpg",
}: {
  title?: string;
  text?: string;
  image?: string;
}) {
  return (
    <section className={`${s.final}`} data-theme="dark" data-cta-stop>
      <div className={s.finalMedia}>
        <Image src={image} alt="" fill sizes="100vw" />
      </div>
      <div className={s.finalShade} />
      <div className={`container ${s.finalInner}`}>
        <Reveal>
          <p className="eyebrow">By invitation</p>
          <h2 className="h-display h-display--md">{title}</h2>
          <p className={`lead ${s.finalText}`}>{text}</p>
          <div className="btn-row" style={{ marginTop: 44 }}>
            <Link href="/request-access" className="btn btn--green">
              Request access <span className="arrow">→</span>
            </Link>
            <Link href="/physicians#partner" className="btn btn--ghost">
              I&apos;m a physician
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Roadmap — Today / Next / Future (honest status)                     */
/* ------------------------------------------------------------------ */
export function Roadmap({
  stages,
}: {
  stages: { when: string; title: string; status: string; items: string[] }[];
}) {
  return (
    <div className={s.roadmap}>
      {stages.map((st, i) => (
        <Reveal key={st.title} delay={i * 0.1} className={s.stage}>
          <div className={s.stageTop}>
            <span className={`num ${s.stageIdx}`}>0{i + 1}</span>
            <span className="tag">{st.status}</span>
          </div>
          <p className={s.stageWhen}>{st.when}</p>
          <h3 className="h-card">{st.title}</h3>
          <ul>
            {st.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
          <div className={s.stageBar}>
            <span style={{ width: `${[100, 45, 12][i] ?? 10}%` }} />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
