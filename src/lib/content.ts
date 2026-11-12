import type { Tier } from "@/components/Blocks";

export const TIERS: Tier[] = [
  {
    id: "individual",
    name: "Individual",
    status: "Founding · open",
    line: "Your complete health record and intelligence",
    gradient: "radial-gradient(140% 140% at 100% 0%, #d9e8c4 0%, #eef2e8 45%, #f6f7f3 75%)",
    features: [
      "Unified longitudinal health record",
      "Wearable & Apple Health integrations",
      "Medical document management",
      "Health timeline with context",
      "AI insights, explained plainly",
      "Permission-based physician sharing",
    ],
    cta: "Apply as a founding member",
    featured: true,
  },
  {
    id: "family",
    name: "Family",
    status: "Coming later",
    line: "Everything in Individual, for the people you look after",
    gradient: "radial-gradient(140% 140% at 100% 0%, #c6dcc9 0%, #e7efe6 50%, #f4f6f1 80%)",
    features: [
      "Individual records for each member",
      "Spouse, parents, children & dependents",
      "Authorised caregiver access",
      "Shared family medical history",
      "Consent-based, granular permissions",
      "Family-level care coordination",
    ],
    cta: "Join the family waitlist",
  },
  {
    id: "office",
    name: "Office",
    status: "By invitation",
    line: "A digital private health office, with people behind it",
    gradient: "radial-gradient(140% 140% at 100% 0%, #b9c7b0 0%, #dfe5da 50%, #f1f3ee 80%)",
    features: [
      "High-touch onboarding & record organisation",
      "Healthcare coordination support",
      "Premium consolidated reporting",
      "Physician communication support",
      "International care continuity",
      "Works alongside your family office",
    ],
    cta: "Request an introduction",
  },
];
