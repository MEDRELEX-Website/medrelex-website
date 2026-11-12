import { DisplayHeading, FinalCTA, ImageTiles, Manifesto, MembershipCards, Principles, PromoStrip } from "@/components/Blocks";
import EcosystemRing from "@/components/EcosystemRing";
import FourQuestions from "@/components/FourQuestions";
import FragmentScene from "@/components/FragmentScene";
import Hero from "@/components/Hero";
import LifeCarousel from "@/components/LifeCarousel";
import LoopShowcase from "@/components/LoopShowcase";
import PhysicianBrief from "@/components/PhysicianBrief";
import Reveal from "@/components/Reveal";
import { TIERS } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* 1 — Desire & composure */}
      <Hero
        image="/images/hero-man.jpg"
        alt="A distinguished man in quiet evening light, looking into the distance"
        position="72% 35%"
        eyebrow="Private health intelligence"
        title={
          <>
            Your entire health.
            <br />
            One private intelligence.
          </>
        }
        sub="MEDRELEX brings your physicians, records, laboratories and wearables into one continuous health record, then helps you, and the doctors you trust, understand what is actually changing."
        primary={{ label: "Request access", href: "/request-access" }}
        secondary={{ label: "How it works", href: "/platform" }}
        chip="Private by design. Your doctors remain your doctors."
      />

      {/* 2 — Lower the effort */}
      <section className="theme-dark section--tight" data-theme="dark">
        <div className="container">
          <PromoStrip
            image="/images/notebook.jpg"
            alt="A black leather notebook with a silver pen"
            title="We organise it for you."
            text="Founding members receive white-glove onboarding. We gather your records, results and devices into one place, so you never have to."
            cta={{ label: "Founding membership", href: "/membership" }}
          />
        </div>
      </section>

      {/* 3 — Recognition */}
      <section className="theme-dark section" data-theme="dark" style={{ paddingTop: 40, paddingBottom: 0 }}>
        <div className="container">
          <DisplayHeading
            title="You have the best doctors. You don't have the whole picture."
            lead="Concierge medicine, specialists, private hospitals, a longevity programme, a smartwatch, a glucose sensor. Each is excellent on its own. But every one of them holds a different piece of your history, and none of them sees the rest."
            offsetLead
          />
        </div>
      </section>

      {/* 4 — Tension → resolution (signature scroll scene) */}
      <FragmentScene />

      {/* 5 — Make it personal */}
      <section className="theme-dark section" data-theme="dark">
        <div className="container" style={{ marginBottom: 64 }}>
          <DisplayHeading
            eyebrow="Built around your life"
            title="Designed for a life that doesn't slow down."
            size="md"
          />
        </div>
        <LifeCarousel
          cards={[
            {
              image: "/images/watch-cuff.jpg",
              alt: "A man in a tailored navy suit adjusting a gold wristwatch",
              title: "Walk into every appointment fully briefed",
              detail:
                "Before you see a specialist, MEDRELEX prepares what matters: relevant history, recent trends, medication changes and the questions you want answered.",
            },
            {
              image: "/images/senior-window.jpg",
              alt: "A senior man in profile beside a window",
              title: "Never retell your medical history again",
              detail: "One record that remembers everything, so a new physician starts with your full story, not a blank form.",
              position: "30% center",
            },
            {
              image: "/images/bw-counter.jpg",
              alt: "A man seated by a bright window in black and white",
              title: "Know what actually changed, and why",
              detail: "Every result is compared with your own history and the events around it, not with a population average.",
              gray: true,
            },
            {
              image: "/images/jet-seats.jpg",
              alt: "Leather seats in a private jet cabin",
              title: "Your record travels with you",
              detail: "Care in New York, a specialist in Zurich, a clinic in London. Your information stays connected wherever you are treated.",
            },
            {
              image: "/images/stethoscope-bw.jpg",
              alt: "A stethoscope resting on linen",
              title: "Physicians, finally on the same page",
              detail: "With your permission, each doctor sees the part of the picture they need, prepared and in context.",
              gray: true,
            },
            {
              image: "/images/sea-dusk.jpg",
              alt: "A man in a dark coat by the sea at dusk",
              title: "Health that keeps pace with your life",
              detail: "Sleep, recovery, activity and stress from the devices you already wear, read alongside your medical history.",
              position: "35% center",
            },
          ]}
        />
      </section>

      {/* 6 — Mechanism */}
      <LoopShowcase />

      {/* 7 — Credibility */}
      <section className="theme-dark section" data-theme="dark">
        <div className="container">
          <ImageTiles
            tiles={[
              {
                image: "/images/vials-bw.jpg",
                alt: "Laboratory sample vials in black and white",
                title: "Built on clinical data standards",
                text: "A FHIR-native health record, with observations normalised to LOINC, the language laboratories and hospitals already speak.",
                gray: true,
              },
              {
                image: "/images/vault.jpg",
                alt: "A heavy circular bank vault door",
                title: "Private by design",
                text: "Granular permissions, controlled sharing and a full record of access. You decide who sees what, and for how long.",
              },
            ]}
          />
        </div>
      </section>

      {/* 8 — Intelligence (the wow moment) */}
      <section className="theme-ink section" data-theme="dark" style={{ overflow: "hidden" }}>
        <div className="container" style={{ marginBottom: 40 }}>
          <DisplayHeading
            eyebrow="Longitudinal intelligence"
            title="Four questions. Asked of your entire history."
            lead="MEDRELEX doesn't show you more numbers. It asks what changed, why it might have changed, whether it matters, and what a sensible next step would be."
            align="center"
            size="md"
          />
        </div>
        <div className="container">
          <FourQuestions />
          <Reveal>
            <p style={{ textAlign: "center", color: "var(--muted)", fontSize: 13.5, marginTop: 40 }}>
              Illustrative example. MEDRELEX does not diagnose or direct treatment. It helps you and your physicians see the
              bigger picture.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 9 — Coordination */}
      <section className="theme-dark section" data-theme="dark">
        <div className="container">
          <PhysicianBrief />
        </div>
      </section>

      {/* 10 — Reassurance */}
      <section className="theme-dark section" data-theme="dark" style={{ paddingTop: 0 }}>
        <div className="container">
          <DisplayHeading
            title="Your doctors remain your doctors."
            lead="MEDRELEX doesn't replace anyone in your healthcare. It is the layer that connects them: the memory they all share, with your permission."
            align="center"
            size="md"
          />
          <div style={{ marginTop: 40 }}>
            <EcosystemRing />
          </div>
        </div>
      </section>

      {/* 11 — Choose */}
      <section className="theme-light sheet section" data-theme="light">
        <div className="container">
          <div style={{ marginBottom: 70 }}>
            <DisplayHeading
              eyebrow="Membership"
              title="Membership, by application."
              lead="MEDRELEX is offered as a private membership. Founding members shape the product with us and receive our most personal level of service."
              offsetLead
            />
          </div>
          <MembershipCards tiers={TIERS} />
        </div>
      </section>

      {/* 12 — Trust, without fabricated testimonials */}
      <section className="theme-dark section" data-theme="dark">
        <div className="container">
          <div style={{ marginBottom: 64 }}>
            <DisplayHeading
              eyebrow="What we believe"
              title="Built on principles, not promises."
              lead="We are early, and we'd rather show you how we think than tell you what others say. These are the standards MEDRELEX is built to."
              offsetLead
            />
          </div>
          <Principles
            items={[
              {
                kind: "image",
                image: "/images/blinds.jpg",
                alt: "A man in a suit silhouetted against window blinds",
                title: "Discretion is the product.",
                text: "Your health information lives in a private environment, never a social one. Nothing is shared without your explicit permission.",
                tall: true,
              },
              { kind: "quote", quote: "Not another dashboard. A system that remembers.", by: "Product principle 01" },
              {
                kind: "image",
                image: "/images/aged-profile.jpg",
                alt: "Portrait of an older man in dramatic light",
                title: "Continuity over snapshots.",
                text: "A single result rarely tells the story. We read every result against the years before it.",
                position: "70% 30%",
              },
              {
                kind: "image",
                image: "/images/desk-vintage.jpg",
                alt: "A wooden writing desk lit by a single lamp",
                title: "Your data, owned by you.",
                text: "You decide who sees it, and you can revoke access at any time. Every access is recorded.",
                tall: true,
              },
              { kind: "quote", quote: "Intelligence with restraint: uncertainty stated plainly, never dressed up as diagnosis.", by: "Product principle 02" },
              {
                kind: "image",
                image: "/images/stethoscope-soft.jpg",
                alt: "A stethoscope resting on a soft fabric surface",
                title: "Physicians first, always.",
                text: "MEDRELEX makes your existing doctors better informed. It never stands between you and them.",
              },
              { kind: "quote", quote: "You shouldn't have to organise your own medical life. That's our job.", by: "Product principle 03" },
            ]}
          />
        </div>
      </section>

      {/* 13 — Vision */}
      <section className="theme-dark section" data-theme="dark" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ marginBottom: 60 }}>
            <DisplayHeading eyebrow="The vision" title="From managing healthcare, to having it managed around you." size="md" />
          </div>
          <Manifesto
            rows={[
              ["Fragmented healthcare", "Connected healthcare"],
              ["Data", "Context"],
              ["Context", "Intelligence"],
              ["Individual providers", "One connected health ecosystem"],
              ["Managing your healthcare", "A system that manages the complexity around you"],
            ]}
          />
        </div>
      </section>

      {/* 14 — Invitation */}
      <FinalCTA />
    </>
  );
}
