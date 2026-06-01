export type Role = {
  title: string;
  location: string;
  type: string;
  summary: string;
};

// TODO: Velnox to supply — actual open roles. Defaults are the standing role catalogue.
export const ROLES: Role[] = [
  {
    title: "Clinical Research Coordinator (CRC)",
    location: "Chennai · Bengaluru · Hyderabad",
    type: "Full-time",
    summary:
      "Owns day-to-day study conduct at a site — informed consent, source documentation, CRF completion, monitor coordination.",
  },
  {
    title: "Clinical Research Associate (CRA)",
    location: "Travel-based, India",
    type: "Full-time",
    summary:
      "Monitors sponsor studies across Velnox sites — SDV, query resolution, ISF and IP-accountability review.",
  },
  {
    title: "Project Officer",
    location: "Chennai",
    type: "Full-time",
    summary:
      "Owns multi-site study delivery — timeline, budget, sponsor reporting and risk escalation.",
  },
  {
    title: "Pharmacovigilance Associate",
    location: "Chennai",
    type: "Full-time",
    summary:
      "Manages SAE / AE intake, 24-hour reportable workflows and causality narratives.",
  },
  {
    title: "Regulatory Associate",
    location: "Chennai",
    type: "Full-time",
    summary:
      "Prepares EC dossiers, amendments and CDSCO / DCGI submissions.",
  },
  {
    title: "Data Manager",
    location: "Chennai · Remote-eligible",
    type: "Full-time",
    summary:
      "Builds EDC databases, monitors data quality and drives query resolution to lock.",
  },
  {
    title: "Site QA Lead",
    location: "Chennai · Bengaluru",
    type: "Full-time",
    summary:
      "Owns internal QA reviews, CAPA loops and audit-readiness across the Velnox site network.",
  },
];

export const ELIGIBILITY = [
  "Graduate or Post-Graduate in Life Sciences, Pharmacy, Nursing or Allied Health Sciences.",
  "Medical Sciences — including AYUSH streams (Ayurveda, Siddha, Homeopathy, Unani).",
  "Written and verbal communication in English plus Hindi or a regional language.",
  "MS Office literacy; willingness to train into Velnox SOPs.",
  "Basic biostatistics literacy preferred for data and PV roles.",
];

export const ONBOARDING = [
  "ICH-GCP refresher on day one.",
  "Velnox SOP module training — Site Readiness through Archival.",
  "Supervised first 90 days on a live site with documented coverage.",
  "Training file maintained per SOP, continuously, for the life of the role.",
];
