export type Audience = {
  slug: string;
  title: string;
  short: string;
  icon: string;
  tier: "primary" | "secondary";
  bullets: string[];
};

export const AUDIENCES: Audience[] = [
  {
    slug: "sponsors-pharma",
    title: "Sponsors & Pharma",
    short: "Phase I–IV, BA/BE and global studies executed under ICH-GCP and NDCT Rules 2019.",
    icon: "Beaker",
    tier: "primary",
    bullets: [
      "Confidential feasibility with honest go/no-go",
      "Tetra-partite contracts with documented deliverables",
      "24-hour SAE reporting workflow",
      "Audit-ready ISF and 5+ year archival",
    ],
  },
  {
    slug: "hospitals-investigators",
    title: "Hospitals & Investigators",
    short: "Site activation, ISF setup, EC support and CRC deployment.",
    icon: "Building2",
    tier: "primary",
    bullets: [
      "Pre-study readiness audit and gap closure",
      "EC dossier preparation and submission",
      "Trained CRCs and study nurses on assignment",
      "Investigator training on protocol-specific procedures",
    ],
  },
  {
    slug: "medical-devices",
    title: "Medical Devices & Diagnostics",
    short: "Device studies under India's Medical Device Rules with post-market surveillance.",
    icon: "Stethoscope",
    tier: "primary",
    bullets: [
      "Critical and non-critical device study design",
      "Investigator and site appraisals",
      "Adverse-event / device-deficiency reporting",
      "Post-market surveillance documentation",
    ],
  },
  {
    slug: "ayush-consumer",
    title: "AYUSH, Nutraceutical & Consumer Health",
    short: "Efficacy and safety studies aligned to AYUSH and FSSAI frameworks.",
    icon: "Leaf",
    tier: "primary",
    bullets: [
      "Ayurveda, Siddha, Homeopathy and Unani formulation studies",
      "Nutraceutical efficacy and safety claims",
      "FSSAI-aligned documentation",
      "Consumer-perception and tolerability studies",
    ],
  },
  {
    slug: "cosmetics-fmcg",
    title: "Cosmetics & FMCG",
    short: "Efficacy and safety substantiation for claim-bearing products.",
    icon: "Sparkles",
    tier: "secondary",
    bullets: [
      "Dermatological efficacy and tolerability studies",
      "Claim-substantiation protocol design",
    ],
  },
  {
    slug: "agri-food",
    title: "Agri & Food Processing",
    short: "Applied research in food and agricultural products.",
    icon: "Wheat",
    tier: "secondary",
    bullets: [
      "Applied food-science studies",
      "Functional-food tolerability work",
    ],
  },
  {
    slug: "doctors",
    title: "Investigators & Doctors",
    short: "Career-path and site-partnership engagements for clinicians.",
    icon: "UserRound",
    tier: "secondary",
    bullets: [
      "Site-partnership programmes",
      "Investigator training and certification",
    ],
  },
  {
    slug: "academia",
    title: "Academia & Students",
    short: "Internships and HR for Clinical Research (HR4CR) pipelines.",
    icon: "GraduationCap",
    tier: "secondary",
    bullets: [
      "Internship pathways into CRO/SMO operations",
      "HR4CR training and certification",
    ],
  },
];
