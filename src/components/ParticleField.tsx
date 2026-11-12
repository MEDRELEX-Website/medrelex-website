"use client";

import { useEffect, useRef } from "react";

type Props = {
  density?: number; // particles per 10k px²
  link?: number; // max link distance
  className?: string;
  color?: string; // "r,g,b"
};

/**
 * A quiet field of drifting points that occasionally connect with hairlines.
 * The visual metaphor: separate pieces of information finding each other.
 */
export default function ParticleField({ density = 0.55, link = 130, className = "", color = "141,198,63" }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0,
      h = 0,
      dpr = 1,
      raf = 0,
      running = true;
    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number; tw: number };
    let pts: P[] = [];
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(((w * h) / 10000) * density);
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.12 - 0.04,
        r: Math.random() * 1.3 + 0.35,
        a: Math.random() * 0.55 + 0.2,
        tw: Math.random() * Math.PI * 2,
      }));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        if (!reduce) {
          p.x += p.vx;
          p.y += p.vy;
          const dx = p.x - mouse.x,
            dy = p.y - mouse.y,
            d2 = dx * dx + dy * dy;
          if (d2 < 22000) {
            p.x += (dx / Math.sqrt(d2 + 1)) * 0.35;
            p.y += (dy / Math.sqrt(d2 + 1)) * 0.35;
          }
          if (p.x < -10) p.x = w + 10;
          if (p.x > w + 10) p.x = -10;
          if (p.y < -10) p.y = h + 10;
          if (p.y > h + 10) p.y = -10;
        }
      }
      ctx.lineWidth = 0.6;
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const dx = a.x - b.x,
            dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < link) {
            ctx.strokeStyle = `rgba(${color},${(1 - d / link) * 0.16})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        const tw = 0.65 + 0.35 * Math.sin(t / 900 + p.tw);
        ctx.fillStyle = `rgba(${color},${p.a * tw})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (t: number) => {
      if (!running) return;
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };

    const io = new IntersectionObserver(([e]) => {
      running = e.isIntersecting;
      if (running) raf = requestAnimationFrame(loop);
      else cancelAnimationFrame(raf);
    });

    resize();
    io.observe(canvas);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, [density, link, color]);

  return <canvas ref={ref} className={className} aria-hidden style={{ width: "100%", height: "100%" }} />;
}
