import type { Metadata } from "next";
import Link from "next/link";
import { DisplayHeading, FinalCTA, ImageTiles, SplitFeature } from "@/components/Blocks";
import { Flow, RequirementGrid } from "@/components/Blocks2";
import Hero from "@/components/Hero";
import PhysicianBrief from "@/components/PhysicianBrief";

export const metadata: Metadata = {
  title: "For Physicians",
  description: "A structured, permission-based longitudinal view of your patient, prepared before every appointment.",
};

export default function Physicians() {
  return (
    <>
      <Hero
        image="/images/stethoscope-soft.jpg"
        alt="A stethoscope resting on soft fabric in black and white"
        eyebrow="For physicians"
        title="Better-informed care. With your patient's permission."
        sub="MEDRELEX gives concierge physicians and specialists a structured, longitudinal view of the patient in front of them, prepared before the appointment begins."
        primary={{ label: "Partner with us", href: "#partner" }}
        grayscale
        short
      />

      <section className="theme-dark section" data-theme="dark">
        <div className="container">
          <DisplayHeading
            title="Your patient's health memory. Shared when it matters."
            lead="Your relationship with your patient stays exactly as it is. MEDRELEX makes it better informed: every result in context, every change in medication dated, every question prepared."
            offsetLead
          />
        </div>
      </section>

      <section className="theme-dark section" data-theme="dark" style={{ paddingTop: 0 }}>
        <div className="container">
          <PhysicianBrief image="/images/desk-lamp.jpg" />
        </div>
      </section>

      <section className="theme-ink section" data-theme="dark">
        <div className="container">
          <div style={{ marginBottom: 64 }}>
            <DisplayHeading eyebrow="What you receive" title="A structured view, not another inbox." size="md" />
          </div>
          <RequirementGrid
            items={[
              { title: "Relevant history", text: "The history that matters to your specialty, without wading through every unrelated document." },
              { title: "Recent trends", text: "Wearable and home-measurement trends since the last visit, summarised against the patient's baseline." },
              { title: "Medication timeline", text: "Starts, stops and dosage changes from every prescriber, aligned with the readings around them." },
              { title: "Laboratory results", text: "Results from different laboratories in one consistent, coded view." },
              { title: "Important events", text: "Hospital visits, procedures and diagnoses from elsewhere in the patient's care." },
              { title: "Prepared questions", text: "What your patient wants to discuss, so short appointments are spent where they matter." },
            ]}
          />
        </div>
      </section>

      <section className="theme-dark section" data-theme="dark">
        <div className="container">
          <ImageTiles
            tiles={[
              {
                image: "/images/blinds.jpg",
                alt: "A man in a suit silhouetted against window blinds",
                title: "Permission-based, always",
                text: "Access is granted by the patient, scoped to what's relevant, and can expire after the appointment.",
              },
              {
                image: "/images/mri.jpg",
                alt: "A modern imaging machine in a clinical room",
                title: "Clinical standards",
                text: "A FHIR-native record with LOINC-coded observations, designed to sit alongside clinical workflows.",
              },
            ]}
          />
        </div>
      </section>

      <section className="theme-dark section" data-theme="dark" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <DisplayHeading
              eyebrow="Why it compounds"
              title="Better context, for everyone involved."
              lead="The more context a patient's record holds, the more useful it becomes, to them and to every physician they choose to share it with."
              offsetLead
              size="md"
            />
          </div>
          <Flow
            steps={[
              "MEDRELEX gives you richer patient context",
              "Appointments become more informed",
              "You introduce MEDRELEX to suitable patients",
              "Their longitudinal record grows",
              "The record becomes more useful",
              "You receive better information",
            ]}
          />
        </div>
      </section>

      <section id="partner" className="theme-light sheet section" data-theme="light">
        <div className="container">
          <SplitFeature
            eyebrow="Partnerships"
            title="For concierge practices and premium healthcare groups."
            image="/images/study-classic.jpg"
            alt="A classic private study with a leather armchair and wooden desk"
          >
            <p>
              We are working with a small number of physicians and practices to shape how MEDRELEX fits into real clinical
              relationships. If you care for patients with complex, multi-provider healthcare, we would value your perspective.
            </p>
            <div className="btn-row" style={{ marginTop: 16 }}>
              <Link href="/request-access" className="btn btn--dark">
                Start a conversation <span className="arrow">→</span>
              </Link>
            </div>
          </SplitFeature>
        </div>
      </section>

      <FinalCTA image="/images/stethoscope-bw.jpg" title="Shape it with us." text="Founding physician partners help define how MEDRELEX supports clinical relationships. Tell us about your practice." />
    </>
  );
}
