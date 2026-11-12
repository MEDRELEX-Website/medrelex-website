import type { Metadata } from "next";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import { DisplayHeading, FinalCTA, MembershipCards } from "@/components/Blocks";
import { ChipCloud, CompareTable } from "@/components/Blocks2";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { TIERS } from "@/lib/content";
import s from "./membership.module.css";

export const metadata: Metadata = {
  title: "Membership",
  description: "MEDRELEX is offered as a private membership, by application: Individual, Family and Office.",
};

const BENEFITS = [
  {
    image: "/images/notebook.jpg",
    alt: "A black leather notebook with a silver pen",
    title: "White-glove onboarding",
    text: "We gather your records, results and devices with you, so your record is useful from the first day.",
  },
  {
    image: "/images/jet-cabin.jpg",
    alt: "The cabin of a private jet",
    title: "Care across borders",
    text: "Your record stays connected when your care spans cities and countries.",
  },
  {
    image: "/images/stethoscope-case.jpg",
    alt: "A stethoscope on a leather case",
    title: "Physician communication",
    text: "Support preparing and sharing what each of your physicians needs to see.",
  },
];

export default function Membership() {
  return (
    <>
      <Hero
        image="/images/study-classic.jpg"
        alt="A classic private study with leather armchair and mahogany desk"
        eyebrow="Membership"
        title="A membership built around one person."
        sub="MEDRELEX is offered privately and by application. Founding members receive our most personal level of service and help shape the product with us."
        primary={{ label: "Apply", href: "/request-access" }}
        particles={false}
        short
      />

      <section className="theme-light section" data-theme="light">
        <div className="container">
          <div style={{ marginBottom: 70 }}>
            <DisplayHeading title="Choose your membership." lead="Membership details are confirmed during a private consultation." offsetLead size="md" />
          </div>
          <MembershipCards tiers={TIERS} />
        </div>
      </section>

      <section className="theme-dark section" data-theme="dark">
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <DisplayHeading eyebrow="Compare" title="Compare memberships." size="md" />
          </div>
          <CompareTable
            cols={["Individual", "Family", "Office"]}
            rows={[
              { label: "Unified longitudinal health record", values: [true, true, true] },
              { label: "Wearable & Apple Health integrations", values: [true, true, true] },
              { label: "Medical document management", values: [true, true, true] },
              { label: "Health timeline & AI insights", values: [true, true, true] },
              { label: "Permission-based physician sharing", values: [true, true, true] },
              { label: "Members covered", values: ["One", "Household", "Household"] },
              { label: "Authorised caregiver access", values: [false, true, true] },
              { label: "Shared family medical history", values: [false, true, true] },
              { label: "High-touch onboarding", values: ["Founding members", "Founding members", true] },
              { label: "Healthcare coordination support", values: [false, false, true] },
              { label: "Premium consolidated reporting", values: [false, false, true] },
              { label: "Works alongside your family office", values: [false, false, true] },
            ]}
          />
          <Reveal>
            <p style={{ color: "var(--muted)", fontSize: 13.5, marginTop: 22 }}>
              Membership components are being finalised with our founding members and may change.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="theme-dark section" data-theme="dark" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <DisplayHeading eyebrow="Included" title="The benefits of membership." size="md" />
          </div>
          <div className={s.benefits}>
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.1} className={s.benefit}>
                <div className={`media grain ${s.bImg}`}>
                  <Image src={b.image} alt={b.alt} fill sizes="(max-width: 860px) 100vw, 33vw" />
                </div>
                <h3 className="h-card">{b.title}</h3>
                <p className="body muted">{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="theme-ink section" data-theme="dark">
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <DisplayHeading
              eyebrow="Who it's for"
              title="For healthcare lives that have become complex."
              lead="MEDRELEX is built first for individuals aged 45 and over whose care already involves many people and places. It's for those who have access to excellent care, but not to the whole picture."
              offsetLead
              size="md"
            />
          </div>
          <ChipCloud
            items={[
              "Concierge physicians",
              "Several specialists",
              "Private hospitals",
              "Executive health programmes",
              "Premium laboratories",
              "Longevity programmes",
              "Advanced diagnostics",
              "Wearables & CGMs",
              "Nutritionists & trainers",
              "International care",
              "Personal assistants",
              "Family offices",
            ]}
          />
        </div>
      </section>

      <section className="theme-light sheet section" data-theme="light">
        <div className="container">
          <div className={s.faq}>
            <Reveal>
              <h2 className="h-display h-display--md">Questions.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Accordion
                size="lg"
                items={[
                  {
                    title: "Does MEDRELEX replace my doctors?",
                    body: "No. Your doctors remain your doctors. MEDRELEX connects the information they generate and, with your permission, helps them see more of the picture.",
                  },
                  {
                    title: "Is MEDRELEX available today?",
                    body: "MEDRELEX is in active development. We are accepting applications for founding membership; features become available progressively.",
                  },
                  {
                    title: "Does it diagnose conditions?",
                    body: "No. MEDRELEX helps you and your physicians understand changes in your health over time. Diagnosis and treatment remain with your physicians.",
                  },
                  {
                    title: "Who can see my information?",
                    body: "Only the people you authorise, for the categories you choose. Access can be time-limited, revoked at any time, and every access is recorded.",
                  },
                  {
                    title: "Which devices and providers can I connect?",
                    body: "Apple Health and Health Connect come first, followed by laboratories, records, pharmacies and other devices. Connections are added progressively and depend on each provider.",
                  },
                  {
                    title: "How much does membership cost?",
                    body: "Membership terms are shared privately during your consultation and depend on the level of service you choose.",
                  },
                ]}
                initial={null}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
