import type { Metadata } from "next";
import { DisplayHeading, FinalCTA, SplitFeature } from "@/components/Blocks";
import { RequirementGrid } from "@/components/Blocks2";
import Hero from "@/components/Hero";
import PermissionsPanel from "@/components/PermissionsPanel";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy & Discretion",
  description: "MEDRELEX is designed as a private health environment: granular permissions, controlled sharing, patient ownership and auditability.",
};

export default function Privacy() {
  return (
    <>
      <Hero
        image="/images/blinds.jpg"
        alt="A man in a dark suit silhouetted against window blinds"
        position="40% center"
        eyebrow="Privacy & discretion"
        title="Discretion, by design."
        sub="Your health information is among the most sensitive you hold. MEDRELEX is designed as a private environment, never a social one."
        primary={{ label: "Request access", href: "/request-access" }}
        particles={false}
        short
      />

      <section className="theme-dark section" data-theme="dark">
        <div className="container">
          <DisplayHeading
            title="A private health environment. Not a mass-market health app."
            lead="Nothing in MEDRELEX is public, social or shared by default. Every person who sees any part of your record does so because you decided they should."
            offsetLead
          />
        </div>
      </section>

      <section className="theme-dark section" data-theme="dark" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <DisplayHeading eyebrow="You decide" title="Who sees what. And for how long." size="md" />
          </div>
          <Reveal>
            <PermissionsPanel />
          </Reveal>
          <Reveal>
            <p style={{ color: "var(--muted)", fontSize: 13.5, marginTop: 20 }}>Interactive illustration. Try changing access above.</p>
          </Reveal>
        </div>
      </section>

      <section className="theme-ink section" data-theme="dark">
        <div className="container">
          <div style={{ marginBottom: 64 }}>
            <DisplayHeading
              eyebrow="Our requirements"
              title="The standards we hold ourselves to."
              lead="These are the design requirements MEDRELEX is being built against. They describe intent and direction, not certifications."
              offsetLead
              size="md"
            />
          </div>
          <RequirementGrid
            items={[
              { title: "Patient data isolation", text: "Each member's record is isolated, with access controls enforced at the data layer." },
              { title: "Granular permissions", text: "Share a single category with a single physician, for a single appointment." },
              { title: "Patient ownership", text: "Your record is yours. You authorise every recipient, and you can revoke access." },
              { title: "Family & caregiver consent", text: "Family access is built on individual consent and appropriate authority, never on assumption." },
              { title: "Auditability", text: "Every view and every change in access is recorded, and visible to you." },
              { title: "Secure storage", text: "Documents and health data are stored in secure infrastructure, with reliable authentication." },
              { title: "Provenance", text: "Every item carries its source and time, so information can be traced and trusted." },
              { title: "Data quality", text: "Units, time zones and duplicates are checked, because bad data makes bad context." },
              { title: "Market-by-market review", text: "Privacy, security and regulatory requirements are assessed for each launch market." },
            ]}
          />
        </div>
      </section>

      <section id="ownership" className="theme-dark section" data-theme="dark">
        <div className="container">
          <SplitFeature
            eyebrow="Ownership"
            title="Your data, owned by you."
            image="/images/vault.jpg"
            alt="A heavy circular vault door"
          >
            <p>
              MEDRELEX holds your health record on your behalf. Physicians see it with your authorisation, family members
              with your consent, and administrative staff only what you allow.
            </p>
            <p className="muted">
              We make no compliance or certification claims we cannot evidence. As MEDRELEX moves towards handling real
              patient data, the appropriate controls, agreements and expert assessments come first.
            </p>
          </SplitFeature>
        </div>
      </section>

      <FinalCTA image="/images/marble.jpg" title="Privacy is where it begins." />
    </>
  );
}
