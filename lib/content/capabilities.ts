export type CapabilityCategory = "Start-up" | "Conduct" | "Safety & Data" | "Close-out";

export type Capability = {
  slug: string;
  title: string;
  short: string;
  category: CapabilityCategory;
  icon: string; // lucide name
  sopRef: string;
  details: string[];
  deliverables?: string[];
};

export const CAPABILITY_CATEGORIES: CapabilityCategory[] = [
  "Start-up",
  "Conduct",
  "Safety & Data",
  "Close-out",
];

export const CAPABILITIES: Capability[] = [
  {
    slug: "site-readiness",
    title: "Site Readiness & Activation",
    short:
      "Pre-study assessments, document binders and calibrated equipment audits — sites are inspection-ready on day one.",
    category: "Start-up",
    icon: "ClipboardCheck",
    sopRef: "SOP 2 · Site Readiness",
    details: [
      "Investigator and study-team CV/MRC/GCP-certificate filing under our Quality Manual.",
      "NABL/CAP/ISO-accredited laboratory partners with documented reference ranges.",
      "Equipment calibration log for BP apparatus, ECG, refrigerators, centrifuges, deep freezers.",
      "Ethics Committee dossier readiness — SOPs, members list, DCGI registration certificate.",
    ],
  },
  {
    slug: "study-feasibility",
    title: "Study Feasibility",
    short:
      "Honest, confidential feasibility — protocol review, recruitment realism, staff and equipment fit.",
    category: "Start-up",
    icon: "Telescope",
    sopRef: "SOP 3 · Assessing Study Feasibility",
    details: [
      "Protocol review against study objectives, design and subject-risk profile.",
      "Realistic recruitment projection against eligibility criteria and patient pool.",
      "Competing-trial scan and resource-conflict check before commitment.",
      "Feasibility questionnaire completed in the Sponsor/CRO's own template.",
    ],
  },
  {
    slug: "budget-contracts",
    title: "Budget & Contracts",
    short:
      "Transparent budgeting with EC fees, lab costs, archival, SAE reimbursements and milestone payments documented.",
    category: "Start-up",
    icon: "ScrollText",
    sopRef: "SOP 4 · Budget & Contracts",
    details: [
      "Tetra-partite agreements (Sponsor/CRO, Investigator, Institution, SMO).",
      "Line-itemed grants: EC fees, lab costs, PI/CRC/nurse charges, 25% overhead, ₹50,000/yr archival.",
      "SAE reimbursement and publication/data-ownership clauses negotiated up front.",
      "Monthly invoicing with payment-receipt filing per study.",
    ],
  },
  {
    slug: "ec-interactions",
    title: "Ethics Committee Submissions",
    short:
      "Dossier preparation, submission and follow-up with the EC — before, during and after the study.",
    category: "Start-up",
    icon: "ShieldCheck",
    sopRef: "SOP 5 & 16 · EC Interactions",
    details: [
      "Initial dossier cross-checked against current EC SOP before submission.",
      "Investigator-led presentation of the protocol at EC review.",
      "Amendment, deviation and SAE notifications routed per EC SOP timelines.",
      "Final CSR submission and approval-letter reconciliation at study end.",
    ],
  },
  {
    slug: "siv-and-startup",
    title: "Site Initiation Visit (SIV)",
    short:
      "Study team delegation, signature logs and protocol-question prep — every SIV closes with the binder up to date.",
    category: "Start-up",
    icon: "Rocket",
    sopRef: "SOP 6 · Study Initiation Visit",
    details: [
      "Co-Investigator, CRC, Study Nurse, Phlebotomist and Pharmacist allotted with backup CRC.",
      "Delegation-of-responsibilities log in the Sponsor/CRO template.",
      "Site Visitor's Log opened and signed by the sponsor monitor.",
      "EC approval and applicable regulatory clearances verified before any study activity.",
    ],
  },
  {
    slug: "isf-maintenance",
    title: "Investigator Site File (ISF) Maintenance",
    short:
      "Audit-ready ISF maintained from SIV through close-out and into archival, mapped to the sponsor's Table of Contents.",
    category: "Conduct",
    icon: "FolderLock",
    sopRef: "SOP 7 · ISF Set-up & Maintenance",
    details: [
      "Sponsor-supplied Table of Contents used as the binder index.",
      "Single delegated owner per ISF, with cross-cover during leave.",
      "Continuous updates as the trial progresses — no batch backfill before audit.",
      "Internal QA review before every monitoring visit.",
    ],
  },
  {
    slug: "subject-recruitment",
    title: "Subject Recruitment & Retention",
    short:
      "Investigator-led recruitment from OPD, referrals and EC-approved advertising — with retention plans built in.",
    category: "Conduct",
    icon: "Users",
    sopRef: "SOP 8 · Recruiting Study Subjects",
    details: [
      "Eligibility criteria card placed in the Investigator's clinic.",
      "EC-approved advertising material and camp content where applicable.",
      "Per-subject visit calendar with allowed window, issued at randomisation.",
      "Reminder-call workflow ahead of every scheduled visit.",
    ],
  },
  {
    slug: "informed-consent-av",
    title: "GCP-Compliant Informed Consent",
    short:
      "Including audio-video recording of the consent process per New Drugs & CT Rules 2019, stored with access control.",
    category: "Conduct",
    icon: "Mic",
    sopRef: "SOP 9 · Informed Consent (AV)",
    details: [
      "Subject / LAR / Impartial Witness in coverage; camera fixed only with EC approval.",
      "All 'Table 3' elements (NDCT Rules 2019) walked through in the subject's chosen language.",
      "Video saved as <ProtocolID><Initials><ScreeningNo> in access-restricted folder.",
      "Assent workflow for minors and signature procedure for illiterate subjects/LAR.",
    ],
  },
  {
    slug: "study-conduct-source-data",
    title: "Study Conduct & Source Data",
    short:
      "Documented, source-supported study conduct with deviations captured the day they happen — never reconstructed.",
    category: "Conduct",
    icon: "FileCheck2",
    sopRef: "SOP 11 & 12 · Conduct & Source Data Management",
    details: [
      "Source documentation kept in locked storage (aluminium / steel — never cardboard).",
      "Direct sponsor / monitor / regulator access guaranteed via the informed consent.",
      "Protocol deviations logged in source + CRF + Deviation Log on detection.",
      "Subject ID list and PI-attested MRD cross-reference for every trial patient.",
    ],
  },
  {
    slug: "ip-storage-accountability",
    title: "Investigational Product Storage & Accountability",
    short:
      "Locked, calibrated IP storage with daily temperature logs and per-subject dosing reconciliation.",
    category: "Safety & Data",
    icon: "Thermometer",
    sopRef: "SOP 13 · IP Storage & Accountability",
    details: [
      "Receipt review: quantity, batch, expiry, breakage and cold-chain check on arrival.",
      "Daily storage-temperature log with calibrated thermometer.",
      "Per-subject dose calculation reviewed by PI before dispensing.",
      "Used-vial retention and end-of-trial return / destruction documented.",
    ],
  },
  {
    slug: "specimen-handling-shipping",
    title: "Specimen Collection, Handling & Shipping",
    short:
      "Labelled at draw, processed to protocol, stored to spec — with data-logger cold chain on every shipment.",
    category: "Safety & Data",
    icon: "TestTubes",
    sopRef: "SOP 14 · Specimen Handling",
    details: [
      "Tube labels include Subject ID, initials, date/time and sample number.",
      "Plasma / serum processing per protocol, with documented centrifugation parameters.",
      "Storage at protocol-specified temperature with calibrated-thermometer log.",
      "Data-loggered shipments; any cold-chain deviation logged as a protocol deviation.",
    ],
  },
  {
    slug: "monitoring-closeout-archival",
    title: "Monitoring, SAE Reporting & Archival",
    short:
      "Monitor-ready CRFs, 24-hour SAE escalation per NDCT Rules 2019, and 5+ year archival with controlled access.",
    category: "Close-out",
    icon: "Archive",
    sopRef: "SOP 17, 18, 21, 22, 25",
    details: [
      "Monitoring visit prep: ICFs available, CRFs signed, ISF current, area sanitised.",
      "SAE initial report to Sponsor/CRO, EC and DCGI within 24 hours; detailed report within 14 days.",
      "Close-out only after all DCFs resolved, payments settled and IP returned/destroyed.",
      "Boxed archival with chain-of-custody log, retained for the contracted retention period.",
    ],
  },
];
