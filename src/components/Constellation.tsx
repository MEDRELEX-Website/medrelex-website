"use client";

import { useEffect, useRef } from "react";

/**
 * A slowly rotating sphere of points that assembles itself from scattered
 * fragments when it enters the viewport: many readings, one understanding.
 */
export default function Constellation({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const N = 1100;
    const golden = Math.PI * (3 - Math.sqrt(5));
    type Pt = { sx: number; sy: number; sz: number; ox: number; oy: number; oz: number; s: number; hue: number };
    const pts: Pt[] = [];
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const rad = Math.sqrt(1 - y * y);
      const th = golden * i;
      const jitter = 1 + (Math.random() - 0.5) * 0.12;
      pts.push({
        sx: Math.cos(th) * rad * jitter,
        sy: y * jitter,
        sz: Math.sin(th) * rad * jitter,
        ox: (Math.random() - 0.5) * 6,
        oy: (Math.random() - 0.5) * 4,
        oz: (Math.random() - 0.5) * 3,
        s: Math.random() * 1.1 + 0.4,
        hue: Math.random(),
      });
    }

    let w = 0,
      h = 0,
      dpr = 1,
      raf = 0,
      visible = false,
      assembled = reduce ? 1 : 0,
      startT = 0,
      rot = 0;

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const ease = (t: number) => 1 - Math.pow(1 - t, 4);

    const frame = (t: number) => {
      if (!visible) return;
      if (!startT) startT = t;
      if (!reduce) {
        assembled = Math.min(1, (t - startT) / 2800);
        rot += 0.0019;
      }
      const k = ease(assembled);
      ctx.clearRect(0, 0, w, h);
      const R = Math.min(w, h) * 0.34;
      const cx = w / 2,
        cy = h / 2;
      const cos = Math.cos(rot),
        sin = Math.sin(rot);
      const tilt = 0.32,
        ct = Math.cos(tilt),
        st = Math.sin(tilt);
      const breathe = 1 + Math.sin(t / 1800) * 0.012;

      for (const p of pts) {
        const x0 = p.ox + (p.sx - p.ox) * k;
        const y0 = p.oy + (p.sy - p.oy) * k;
        const z0 = p.oz + (p.sz - p.oz) * k;
        // rotate around Y then tilt around X
        const x1 = x0 * cos - z0 * sin;
        const z1 = x0 * sin + z0 * cos;
        const y2 = y0 * ct - z1 * st;
        const z2 = y0 * st + z1 * ct;
        const persp = 1 / (1.9 - z2 * 0.55);
        const px = cx + x1 * R * persp * 1.6 * breathe;
        const py = cy + y2 * R * persp * 1.6 * breathe;
        const depth = (z2 + 1) / 2; // 0 back → 1 front
        const a = 0.12 + depth * 0.78;
        const g = p.hue > 0.82 ? "185,224,124" : p.hue > 0.5 ? "141,198,63" : "96,176,150";
        ctx.fillStyle = `rgba(${g},${a})`;
        ctx.beginPath();
        ctx.arc(px, py, p.s * (0.6 + depth * 0.9), 0, Math.PI * 2);
        ctx.fill();
      }

      // soft core glow
      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 1.1);
      grd.addColorStop(0, `rgba(141,198,63,${0.1 * k})`);
      grd.addColorStop(1, "rgba(141,198,63,0)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);

      raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
        if (visible) raf = requestAnimationFrame(frame);
        else cancelAnimationFrame(raf);
      },
      { threshold: 0.15 },
    );

    resize();
    io.observe(canvas);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden style={{ width: "100%", height: "100%" }} />;
}
