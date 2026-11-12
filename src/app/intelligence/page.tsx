import type { Metadata } from "next";
import Accordion from "@/components/Accordion";
import { DisplayHeading, FinalCTA, SplitFeature } from "@/components/Blocks";
import { RequirementGrid } from "@/components/Blocks2";
import FourQuestions from "@/components/FourQuestions";
import Hero from "@/components/Hero";
import PatternChart from "@/components/PatternChart";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Intelligence",
  description: "Longitudinal health intelligence that compares you with you, explains uncertainty, and never replaces your physician.",
};

export default function Intelligence() {
  return (
    <>
      <Hero
        image="/images/leaves-dark.jpg"
        alt="Deep green leaves in low light"
        eyebrow="Intelligence"
        title="Intelligence, with restraint."
        sub="Not more numbers. A clearer understanding of how the different parts of your health are changing together, explained plainly and with honest uncertainty."
        primary={{ label: "Request access", href: "/request-access" }}
        secondary={{ label: "The clinical boundary", href: "#boundary" }}
        short
      />

      <section className="theme-dark section" data-theme="dark">
        <div className="container">
          <DisplayHeading
            title="Compared with you. Not with the average person."
            lead="A result that is ‘normal’ for the population can still be a meaningful change for you. MEDRELEX measures every reading against your own baseline, built from years of history."
            offsetLead
          />
        </div>
      </section>

      <section className="theme-ink section" data-theme="dark" style={{ overflow: "hidden" }}>
        <div className="container">
          <FourQuestions />
        </div>
      </section>

      <section className="theme-dark section" data-theme="dark">
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <DisplayHeading
              eyebrow="Patterns, not readings"
              title="When several things change together."
              lead="Sleep shortens. HRV falls. Resting heart rate rises. Activity drops, stress climbs, and a medication changed recently. Each alone might mean little. Together, they may be worth a conversation."
              offsetLead
              size="md"
            />
          </div>
          <Reveal>
            <PatternChart />
          </Reveal>
        </div>
      </section>

      <section className="theme-light sheet section" data-theme="light">
        <div className="container">
          <SplitFeature
            eyebrow="How an insight is formed"
            title="Four questions behind every insight."
            image="/images/aged-profile.jpg"
            alt="An older man in profile, lit dramatically against a dark background"
            position="70% 30%"
            reverse
          >
            <Accordion
              numbered
              items={[
                { title: "What changed?", body: "Meaningful changes relative to your own history, not just values outside a reference range." },
                { title: "Why might it have changed?", body: "The context in your record: medication changes, sleep, activity, illness, lifestyle and previous trends." },
                { title: "Should I care?", body: "The potential significance, with the uncertainty stated plainly. Some changes deserve attention; many don't." },
                { title: "What is the next sensible step?", body: "Continue monitoring, gather more information, prepare a question, or discuss it with your physician." },
              ]}
            />
          </SplitFeature>
        </div>
      </section>

      <section id="boundary" className="theme-dark section" data-theme="dark">
        <div className="container">
          <div style={{ marginBottom: 64 }}>
            <DisplayHeading
              eyebrow="The clinical boundary"
              title="An intelligence that knows its place."
              lead="MEDRELEX is designed to help you and your healthcare team understand the longitudinal picture. It does not diagnose conditions, and it does not direct treatment."
              offsetLead
              size="md"
            />
          </div>
          <RequirementGrid
            items={[
              { title: "Physicians decide", text: "Insights are prepared for discussion with your physician, never as a substitute for their judgement." },
              { title: "Uncertainty, stated", text: "Every insight carries an honest indication of confidence and its limitations." },
              { title: "Explainable", text: "You can always see which data and which events an insight is based on." },
              { title: "Personal baselines", text: "Changes are measured against your own history before anyone else's." },
              { title: "Quiet by default", text: "No alarms for the sake of engagement. If something deserves attention, it is said once, clearly." },
              { title: "Earned, not claimed", text: "‘Medical grade’ is a validation objective for us, not a marketing label." },
            ]}
          />
        </div>
      </section>

      <section className="theme-ink section" data-theme="dark">
        <div className="container">
          <SplitFeature
            eyebrow="The long road"
            title="Clinical-grade intelligence is earned."
            image="/images/vials-bw.jpg"
            alt="Laboratory vials in black and white"
            gray
          >
            <p>
              Increasingly sophisticated clinical use is a long-term objective, and it will be pursued properly: with
              clinical validation, medical experts, evidence-based systems, safety mechanisms and data-quality controls.
            </p>
            <p className="muted">
              The regulatory pathway will depend on the functions MEDRELEX ultimately performs, and will be assessed
              before any such claim is made.
            </p>
          </SplitFeature>
        </div>
      </section>

      <FinalCTA image="/images/car-night.jpg" title="Understand the whole picture." />
    </>
  );
}
