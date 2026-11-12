"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, type ReactNode } from "react";
import ParticleField from "./ParticleField";
import styles from "./Hero.module.css";

type Props = {
  image: string;
  alt: string;
  title: ReactNode;
  sub?: ReactNode;
  eyebrow?: string;
  chip?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  position?: string;
  particles?: boolean;
  short?: boolean;
  grayscale?: boolean;
};

export default function Hero({
  image,
  alt,
  title,
  sub,
  eyebrow,
  chip,
  primary,
  secondary,
  position = "center",
  particles = true,
  short = false,
  grayscale = false,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className={`${styles.hero} ${short ? styles.short : ""}`} data-theme="dark">
      <motion.div className={styles.media} style={{ y: imgY }}>
        <div className={styles.kenburns}>
          <Image
            src={image}
            alt={alt}
            fill
            priority
            sizes="100vw"
            style={{ objectPosition: position, filter: grayscale ? "grayscale(1) contrast(1.05)" : undefined }}
          />
        </div>
      </motion.div>
      <div className={styles.shade} />
      <div className={`${styles.grain} grain`} />
      {particles && <ParticleField className={styles.particles} density={0.42} />}

      <motion.div className={`container ${styles.content}`} style={{ y: textY, opacity: fade }}>
        {eyebrow && <p className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</p>}
        <h1 className={`h-hero ${styles.title}`}>{title}</h1>
        {sub && <p className={`lead ${styles.sub}`}>{sub}</p>}
        {(primary || secondary) && (
          <div className={`btn-row ${styles.ctas}`}>
            {primary && (
              <Link href={primary.href} className="btn btn--green">
                {primary.label} <span className="arrow">→</span>
              </Link>
            )}
            {secondary && (
              <Link href={secondary.href} className="btn btn--ghost">
                {secondary.label}
              </Link>
            )}
          </div>
        )}
        {chip && (
          <span className={`chip ${styles.chip}`}>
            <span className="dot" />
            {chip}
          </span>
        )}
      </motion.div>

      <div className={styles.scrollCue} aria-hidden>
        <span />
      </div>
    </section>
  );
}
