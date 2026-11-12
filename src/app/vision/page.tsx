import type { Metadata } from "next";
import { DisplayHeading, FinalCTA, Manifesto, SplitFeature } from "@/components/Blocks";
import { Flow, RequirementGrid } from "@/components/Blocks2";
import EcosystemRing from "@/components/EcosystemRing";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Vision",
  description: "The private intelligence layer for your entire health ecosystem, and eventually your family's.",
};

export default function Vision() {
  return (
    <>
      <Hero
        image="/images/city-dusk.jpg"
        alt="A man silhouetted against a city at dusk"
        position="center 40%"
        eyebrow="Our vision"
        title="One private intelligence for your entire health ecosystem."
        sub="We begin with a simple problem: your healthcare information is fragmented. We are building towards a system that understands, coordinates and connects all of it."
        primary={{ label: "Request access", href: "/request-access" }}
        short
      />

      <section className="theme-dark section" data-theme="dark">
        <div className="container">
          <DisplayHeading
            title="The more sophisticated your care, the more it needs a system."
            lead="The challenge for our members is rarely access to healthcare. It is the difficulty of managing an increasingly complex healthcare ecosystem, one that no single provider sees in full."
            offsetLead
          />
        </div>
      </section>

      <section className="theme-light sheet section" data-theme="light">
        <div className="container">
          <SplitFeature
            eyebrow="The Private Health Office"
            title="Your advisors have an office. Your health deserves one too."
            image="/images/desk-night.jpg"
            alt="A refined desk at night"
          >
            <p>
              Many of our members already rely on financial advisors, lawyers, accountants and a family office, each
              coordinated around one person. Healthcare can be just as complex.
            </p>
            <p className="muted">
              MEDRELEX aims to be the technology layer for that complexity: a digital private health office that doesn&apos;t
              replace the professionals around you, but gives them one shared intelligence.
            </p>
          </SplitFeature>
        </div>
      </section>

      <section className="theme-dark section" data-theme="dark">
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <DisplayHeading eyebrow="How we evolve" title="Connect. Understand. Coordinate. Orchestrate." size="md" />
          </div>
          <RequirementGrid
            items={[
              { title: "Connect", text: "Bring fragmented health information together into one private record." },
              { title: "Understand", text: "Understand the individual's health longitudinally, across years rather than appointments." },
              { title: "Coordinate", text: "Connect that understanding with the physicians and services around the individual." },
              { title: "Orchestrate", text: "Become the intelligence layer around the entire healthcare ecosystem." },
              { title: "Whole person", text: "Extend beyond medical data into mental health, nutrition, fitness, prevention and longevity." },
              { title: "Family", text: "Extend to spouses, parents, children and dependents, built on individual consent." },
            ]}
          />
        </div>
      </section>

      <section className="theme-dark section" data-theme="dark" style={{ paddingTop: 0 }}>
        <div className="container">
          <SplitFeature
            eyebrow="Family health intelligence"
            title="Care that extends to the people you look after."
            image="/images/sunset-walk.jpg"
            alt="A man walking along a hillside above the sea at sunset"
            reverse
          >
            <p>
              Healthcare in a family is rarely individual. In time, MEDRELEX will support individual records for each
              family member, shared family history and authorised caregivers.
            </p>
            <p className="muted">
              Family membership will never mean unrestricted access. Every record remains governed by the individual&apos;s
              consent and appropriate authority.
            </p>
          </SplitFeature>
        </div>
      </section>

      <section className="theme-ink section" data-theme="dark">
        <div className="container">
          <div style={{ marginBottom: 40 }}>
            <DisplayHeading
              eyebrow="The ecosystem"
              title="We don't need to build everything."
              lead="MEDRELEX won't build its own hospital, laboratory, pharmacy or wearable. It connects the best of what already exists, and becomes the layer that holds it together."
              align="center"
              size="md"
            />
          </div>
          <EcosystemRing />
        </div>
      </section>

      <section className="theme-dark section" data-theme="dark">
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <DisplayHeading eyebrow="The flywheel" title="A system that improves as it connects." size="md" />
          </div>
          <Flow
            steps={[
              "More healthcare connections",
              "More health information",
              "A better longitudinal record",
              "Better context and intelligence",
              "Better coordination",
              "More providers willing to connect",
            ]}
          />
        </div>
      </section>

      <section className="theme-dark section" data-theme="dark" style={{ paddingTop: 0 }}>
        <div className="container">
          <Manifesto
            rows={[
              ["Fragmented healthcare", "Connected healthcare"],
              ["Data", "Context"],
              ["Context", "Intelligence"],
              ["Individual providers", "One connected health ecosystem"],
              ["Managing your healthcare", "A system that manages the complexity around you"],
            ]}
          />
          <Reveal>
            <p className="lead" style={{ marginTop: 80, maxWidth: "34ch", fontSize: "clamp(24px, 2.4vw, 34px)", letterSpacing: "-0.03em" }}>
              Your doctors remain your doctors. Your hospitals remain your hospitals.{" "}
              <span className="text-green">MEDRELEX connects what all of them know.</span>
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCTA image="/images/sunrise-beach.jpg" title="Help us build it." />
    </>
  );
}
