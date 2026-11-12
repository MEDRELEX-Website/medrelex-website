import type { Metadata } from "next";
import Accordion from "@/components/Accordion";
import { DisplayHeading, FinalCTA, Roadmap, SplitFeature } from "@/components/Blocks";
import { SourceGrid } from "@/components/Blocks2";
import FeatureStepper from "@/components/FeatureStepper";
import Hero from "@/components/Hero";
import RecordExplorer from "@/components/RecordExplorer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "How it works",
  description: "How MEDRELEX connects, organises and understands your health information over time.",
};

export default function Platform() {
  return (
    <>
      <Hero
        image="/images/train.jpg"
        alt="A man seated alone in a softly lit train compartment at night"
        position="65% center"
        eyebrow="The platform"
        title="How MEDRELEX works."
        sub="A private layer above your existing healthcare: it connects what you already have, keeps it in order, and helps everyone involved understand it."
        primary={{ label: "Request access", href: "/request-access" }}
        short
      />

      <section className="theme-dark section" data-theme="dark">
        <div className="container">
          <DisplayHeading
            title="A record that understands your health over time."
            lead="Most health technology shows you today's numbers. MEDRELEX is built around a single, continuously growing record, so every reading is understood in the context of your history."
            offsetLead
          />
        </div>
      </section>

      <section className="theme-dark section" data-theme="dark" style={{ paddingTop: 0 }}>
        <div className="container">
          <FeatureStepper
            steps={[
              {
                title: "Connect",
                body: "Bring information together from wearables, Apple Health, Health Connect, laboratory reports, records, prescriptions, home measurements and the documents in your drawer.",
                image: "/images/jet-cabin.jpg",
                alt: "The quiet cabin of a private jet",
              },
              {
                title: "Organise",
                body: "Structure history, medications, results, imaging, wearable data and healthcare events into one record, attributed to its source and placed in time.",
                image: "/images/desk-night.jpg",
                alt: "An orderly desk at night with a laptop and notebooks",
              },
              {
                title: "Understand",
                body: "Compare new information with your own history and highlight what has meaningfully changed, rather than what is merely outside a population range.",
                image: "/images/leaf-veins.jpg",
                alt: "Macro detail of dark leaf veins forming a network",
              },
              {
                title: "Contextualise",
                body: "Consider what was happening around a change: medication adjustments, sleep, travel, illness, training and stress.",
                image: "/images/watch-dark.jpg",
                alt: "A chronograph wristwatch on a man's wrist in low light",
              },
              {
                title: "Coordinate",
                body: "Make the relevant part of the picture available to your authorised physicians and healthcare professionals, and nothing more.",
                image: "/images/stethoscope-case.jpg",
                alt: "A stethoscope resting on a leather case",
              },
              {
                title: "Learn",
                body: "Follow what happens after an intervention, and add the outcome to your longitudinal health story.",
                image: "/images/sunrise-beach.jpg",
                alt: "A lone man walking along a beach at sunrise",
              },
            ]}
          />
        </div>
      </section>

      <section id="record" className="theme-ink section" data-theme="dark">
        <div className="container">
          <div style={{ marginBottom: 64 }}>
            <DisplayHeading eyebrow="The longitudinal record" title="Everything, in one record." size="md" />
          </div>
          <RecordExplorer />
        </div>
      </section>

      <section className="theme-dark section" data-theme="dark">
        <div className="container">
          <div style={{ marginBottom: 64 }}>
            <DisplayHeading
              eyebrow="Sources"
              title="Connect what you already use."
              lead="We say plainly what is being built today and what comes next. Integrations are added progressively and depend on each provider."
              offsetLead
              size="md"
            />
          </div>
          <SourceGrid
            sources={[
              { name: "Apple Health", detail: "HealthKit observations, normalised to the record", status: "In development" },
              { name: "Health Connect", detail: "Android health data, normalised to the record", status: "In development" },
              { name: "Document scanning", detail: "Letters and reports, captured and indexed", status: "In development" },
              { name: "Clinical standards", detail: "FHIR-native record with LOINC-coded observations", status: "In development" },
              { name: "Laboratory reports", detail: "Results from the laboratories you already use", status: "Planned" },
              { name: "Medical records", detail: "Records from physicians and hospitals", status: "Planned" },
              { name: "Smart rings & CGMs", detail: "Continuous glucose and ring-based sensors", status: "Planned" },
              { name: "Pharmacies", detail: "Prescriptions and medication changes", status: "Planned" },
            ]}
          />
        </div>
      </section>

      <section className="theme-light sheet section" data-theme="light">
        <div className="container">
          <SplitFeature
            eyebrow="Your first months"
            title="What membership looks like in practice."
            image="/images/senior-window.jpg"
            alt="A senior man looking out of a window, lost in thought"
            position="30% center"
          >
            <Accordion
              numbered
              items={[
                { title: "We connect your existing information", body: "Records, results and devices are gathered with your authorisation. Founding members are guided by a person, not a form." },
                { title: "Your longitudinal record takes shape", body: "History, medications and results are organised in time, so the first view you see already tells a story." },
                { title: "Continuous data joins the picture", body: "Wearables and home measurements are added and read alongside your medical history." },
                { title: "Your physicians are connected", body: "With your permission, the physicians you choose can see the parts of the record that matter to them." },
                { title: "Intelligence begins to compound", body: "As context grows, changes are easier to spot and to explain. MEDRELEX remembers what happened, so you don't have to." },
              ]}
            />
          </SplitFeature>
        </div>
      </section>

      <section id="roadmap" className="theme-dark section" data-theme="dark">
        <div className="container">
          <div style={{ marginBottom: 64 }}>
            <DisplayHeading
              eyebrow="Roadmap"
              title="Built in the right order."
              lead="We are proving the core data workflow first, then building intelligence and connectivity on top of it."
              offsetLead
              size="md"
            />
          </div>
          <Roadmap
            stages={[
              {
                when: "Today",
                title: "The foundation",
                status: "In development",
                items: [
                  "FHIR-native health record",
                  "Apple Health & Health Connect ingestion",
                  "LOINC normalisation",
                  "Document scanning & indexing",
                  "A quiet, monochrome interface for members",
                ],
              },
              {
                when: "Phase 1",
                title: "Health intelligence",
                status: "Planned",
                items: [
                  "Unified longitudinal record",
                  "AI intelligence with plain explanations",
                  "Timeline & contextual pattern detection",
                  "Permission-based physician sharing",
                  "Hospital, laboratory & pharmacy connectivity",
                ],
              },
              {
                when: "Phase 2",
                title: "The complete ecosystem",
                status: "Long-term",
                items: [
                  "Mental health, nutrition & fitness",
                  "Preventive health & longevity",
                  "Family health intelligence",
                  "Multi-signal pattern recognition",
                  "Validated, clinically-graded intelligence",
                ],
              },
            ]}
          />
          <Reveal>
            <p style={{ color: "var(--muted)", fontSize: 14, marginTop: 28 }}>
              &ldquo;In development&rdquo; means being built and tested; it is not yet available to members.
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCTA image="/images/desk-vintage.jpg" />
    </>
  );
}
