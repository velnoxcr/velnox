/**
 * CRC Training & Development — sourced from the corporate document.
 * (Replaces the previous /careers SOP-driven content.)
 */

export const TRAINING_LEDE =
  "Velnox is committed to developing the next generation of Clinical Research Professionals. We provide practical guidance, industry exposure and mentorship to aspiring CRCs and research professionals — helping them build strong foundations in Good Clinical Practice (GCP), regulatory compliance, patient management and study co-ordination.";

export const TRAINING_PILLARS = [
  {
    title: "Good Clinical Practice (GCP)",
    body: "Fundamentals of ICH-GCP and patient-safety principles — the non-negotiable baseline every CRC operates from.",
    icon: "ShieldCheck",
  },
  {
    title: "Regulatory Compliance",
    body: "How clinical trials are governed in India — sponsor expectations, ethics committee workflows and documentation discipline.",
    icon: "ScrollText",
  },
  {
    title: "Patient Management",
    body: "Informed consent, subject communication, retention and the soft skills that make a great Clinical Research Coordinator.",
    icon: "HeartHandshake",
  },
  {
    title: "Study Co-ordination",
    body: "Day-to-day study execution — visit scheduling, source documentation, CRF completion and monitor co-ordination.",
    icon: "ClipboardCheck",
  },
];

export const TRAINING_AUDIENCE = [
  "Graduates and post-graduates in Life Sciences, Pharmacy, Nursing or Allied Health Sciences",
  "Medical Sciences candidates — including AYUSH streams (Ayurveda, Siddha, Homoeopathy, Unani)",
  "Working CRCs and Junior Clinical Research Associates seeking structured exposure",
  "Hospitals and academic institutions building in-house clinical research teams",
];

export const TRAINING_FORMAT = [
  "Practical mentorship from senior clinical research professionals",
  "Industry exposure across active Velnox studies and partner sites",
  "Hands-on guidance — not classroom-only theory",
  "Pathways into Velnox CRC, CRA and project officer roles",
];

/** Legacy exports kept so any not-yet-migrated references stay compileable. */
export const ROLES: { title: string; location: string; type: string; summary: string }[] = [];
export const ELIGIBILITY = TRAINING_AUDIENCE;
export const ONBOARDING = TRAINING_FORMAT;
