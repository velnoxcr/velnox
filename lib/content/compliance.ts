export type ComplianceAnchor = {
  id: string;
  title: string;
  lede: string;
  bullets: string[];
  sopRef?: string;
};

export const STANDARDS = [
  { label: "ICH-GCP E6(R2)", note: "International Conference on Harmonisation — Good Clinical Practice." },
  { label: "New Drugs & Clinical Trials Rules 2019", note: "Indian regulatory framework governing trial conduct." },
  { label: "Schedule Y", note: "Drugs & Cosmetics Rules — clinical trial requirements." },
  { label: "CDSCO / DCGI", note: "Central Drugs Standard Control Organisation registration norms." },
  { label: "NABL / CAP", note: "Laboratory accreditation for reference ranges and reporting." },
  { label: "ISO 9001 — aligned QMS", note: "Quality management discipline across operations." },
  { label: "DPDP Act 2023", note: "Digital Personal Data Protection — subject data handling." },
];

export const COMPLIANCE_ANCHORS: ComplianceAnchor[] = [
  {
    id: "business-ethics",
    title: "Business Ethics",
    lede:
      "Velnox holds itself to a non-negotiable ethical baseline — for sponsors, investigators and subjects alike.",
    bullets: [
      "Full compliance with applicable Indian and international clinical-research regulation.",
      "No misrepresentation of trial data, capabilities, capacity or qualifications.",
      "No acceptance of inducements that could compromise scientific independence.",
      "Intellectual honesty in study design, analysis and reporting — including disagreements.",
      "Prompt, transparent disclosure of human errors to the sponsor and EC.",
      "Protection of investigator and subject independence at every step.",
      "Cutting corners is itself a misconduct under Velnox policy.",
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality & Data Privacy",
    lede:
      "Controlled access to sponsor protocols, subject data and source documents — by design, not by promise.",
    bullets: [
      "Access-controlled folders for AV-recorded consents and source data.",
      "Sponsor protocols, audit findings and trial designs disclosed only with explicit authorisation.",
      "Alignment with the Indian DPDP Act 2023 and ICH-GCP data-protection requirements.",
      "Confidentiality survives the study — extends through and beyond archival.",
    ],
    sopRef: "SOP 12 · Source Data Management",
  },
  {
    id: "conflict-of-interest",
    title: "Conflict of Interest",
    lede:
      "Disclosed up front, in writing, before any assignment is accepted.",
    bullets: [
      "Disclosure of team-member COIs before engagement and on every protocol.",
      "Disclosure of any relationship with sponsor competitors.",
      "Willingness to bring in independent monitors or auditors when bias is plausible.",
      "Recusal where a clean disclosure is not possible.",
    ],
  },
  {
    id: "quality",
    title: "Quality Policy",
    lede:
      "Right the first time. Quality assurance is built into the unit cost — it is never a line item billed separately.",
    bullets: [
      "Preventive measures and CAPA loops drive performance, not blame.",
      "Calibrated equipment and validated systems across every site.",
      "Documented training records for every staff member on every SOP.",
      "Internal QA review before every monitoring visit.",
    ],
  },
  {
    id: "zero-tolerance",
    title: "Zero Tolerance to Scientific Misconduct",
    lede:
      "Tracked, reported and scrutinised — within Velnox and across every site we operate.",
    bullets: [
      "Protected channel for staff to flag suspected misconduct without retaliation.",
      "Immediate sponsor notification upon credible evidence of misconduct.",
      "Investigation and CAPA documented and shared with the sponsor / EC.",
      "Cutting corners is itself classified as misconduct.",
    ],
  },
  {
    id: "sae-workflow",
    title: "SAE & Safety Reporting Workflow",
    lede:
      "Velnox's pharmacovigilance workflow is a published operating procedure, not a promise.",
    bullets: [
      "Initial SAE report to Sponsor/CRO, EC and DCGI within 24 hours of occurrence.",
      "Detailed written SAE report to all parties within 14 calendar days.",
      "Causality assessed by the Principal Investigator at detailed-report stage.",
      "Site-to-site safety reports notified to the EC; correspondence filed in the ISF.",
    ],
    sopRef: "SOP 21 · 22 · Pharmacovigilance",
  },
  {
    id: "records-archival",
    title: "Records & Archival",
    lede:
      "Retention of essential documents for the contracted period — typically 5+ years post-completion — with chain-of-custody.",
    bullets: [
      "Numbered boxes labelled per sponsor archival template (X of Y).",
      "Controlled access; archival register tracks every in-between access.",
      "Pest-management checks and damage prevention per hospital policy.",
      "Destruction (paper shred / incineration / sponsor-specified) only on sponsor instruction.",
    ],
    sopRef: "SOP 25 · Archival",
  },
];
