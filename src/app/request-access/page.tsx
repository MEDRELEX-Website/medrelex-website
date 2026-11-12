import type { Metadata } from "next";
import Image from "next/image";
import RequestForm from "@/components/RequestForm";
import s from "./request.module.css";

export const metadata: Metadata = {
  title: "Request access",
  description: "Apply for founding membership of MEDRELEX.",
};

export default function RequestAccess() {
  return (
    <section className={s.page} data-theme="dark" data-cta-stop>
      <div className={s.visual}>
        <Image src="/images/pen-letter.jpg" alt="A fountain pen resting on a handwritten letter" fill priority sizes="(max-width: 960px) 100vw, 45vw" />
        <div className={s.shade} />
        <div className={s.quote}>
          <p className="eyebrow">By invitation</p>
          <p className={s.q}>“Put my health life together.”</p>
          <p className={s.qBy}>The need MEDRELEX exists to meet</p>
        </div>
      </div>
      <div className={s.formCol}>
        <p className="eyebrow">Founding membership</p>
        <h1 className="h-display h-display--md">Request access.</h1>
        <p className={`lead muted ${s.lead}`}>
          Founding memberships are limited. Tell us a little about yourself and a member of our team will contact you
          personally, in confidence.
        </p>
        <RequestForm />
      </div>
    </section>
  );
}
