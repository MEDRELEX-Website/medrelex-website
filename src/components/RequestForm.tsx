"use client";

import { useState, type FormEvent } from "react";
import s from "./RequestForm.module.css";

const ROLES = ["For myself", "For my family", "I'm a physician", "Family office", "Healthcare organisation"];
const PROVIDERS = [
  "Concierge physician",
  "Specialists",
  "Private hospital",
  "Executive health",
  "Longevity programme",
  "Wearables",
  "CGM",
  "International care",
];

export default function RequestForm() {
  const [role, setRole] = useState(ROLES[0]);
  const [providers, setProviders] = useState<string[]>([]);
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  const toggle = (p: string) => setProviders((ps) => (ps.includes(p) ? ps.filter((x) => x !== p) : [...ps, p]));

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setState("sending");
    try {
      const res = await fetch("/api/request-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(form.entries()), role, providers }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  };

  if (state === "done") {
    return (
      <div className={s.done}>
        <span className={s.doneMark} />
        <h2 className="h-feature">Thank you.</h2>
        <p className="lead muted">
          Your request has been received in confidence. A member of our team will contact you personally within two
          business days.
        </p>
      </div>
    );
  }

  return (
    <form className={s.form} onSubmit={submit}>
      <fieldset className={s.group}>
        <legend className={s.legend}>I am enquiring</legend>
        <div className={s.pills}>
          {ROLES.map((r) => (
            <button type="button" key={r} className={r === role ? s.on : ""} onClick={() => setRole(r)} aria-pressed={r === role}>
              {r}
            </button>
          ))}
        </div>
      </fieldset>

      <div className={s.row2}>
        <label className={s.field}>
          <span>Full name</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label className={s.field}>
          <span>Email</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <div className={s.row2}>
        <label className={s.field}>
          <span>Phone (optional)</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label className={s.field}>
          <span>City / region</span>
          <input name="location" autoComplete="address-level2" />
        </label>
      </div>

      <fieldset className={s.group}>
        <legend className={s.legend}>Which are part of your healthcare today?</legend>
        <div className={s.pills}>
          {PROVIDERS.map((p) => (
            <button type="button" key={p} className={providers.includes(p) ? s.on : ""} onClick={() => toggle(p)} aria-pressed={providers.includes(p)}>
              {p}
            </button>
          ))}
        </div>
      </fieldset>

      <label className={s.field}>
        <span>Anything you would like us to know (optional)</span>
        <textarea name="message" rows={4} />
      </label>

      <label className={s.consent}>
        <input type="checkbox" name="consent" required />
        <span>
          I agree to be contacted about MEDRELEX. Please don&apos;t include medical details here. We&apos;ll discuss them
          privately.
        </span>
      </label>

      <button className="btn btn--green" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Request access"} <span className="arrow">→</span>
      </button>
      {state === "error" && <p className={s.error}>Something went wrong. Please try again in a moment.</p>}
    </form>
  );
}
