export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string; // lucide icon name
  group: "Operations" | "Regulatory & Quality" | "Scientific & Data" | "Capability Building";
};

export const SERVICES: Service[] = [
  {
    slug: "site-management",
    title: "Clinical Trial Site Management",
    short:
      "End-to-end site management — staffing, oversight and study delivery from initiation to close-out.",
    description:
      "Velnox runs investigator sites as an extension of the sponsor's team — managing CRC staffing, day-to-day site operations, monitoring readiness and timeline accountability through every trial visit.",
    icon: "ClipboardCheck",
    group: "Operations",
  },
  {
    slug: "site-identification",
    title: "Site Identification & Feasibility",
    short:
      "Honest feasibility assessments backed by an investigator network across India.",
    description:
      "Protocol review, recruitment realism, equipment fit and timeline assessment — delivered as a written feasibility report your operations team can act on.",
    icon: "Telescope",
    group: "Operations",
  },
  {
    slug: "patient-recruitment",
    title: "Patient Recruitment & Retention",
    short:
      "Investigator-led recruitment plus retention programmes that protect enrolment timelines.",
    description:
      "EC-approved outreach, structured screening flow, retention reminders and dropout-prevention rituals — built around each protocol's eligibility criteria.",
    icon: "Users",
    group: "Operations",
  },
  {
    slug: "regulatory-ec-support",
    title: "Regulatory & Ethics Committee Support",
    short:
      "Dossier preparation, EC submission and regulatory liaison across India.",
    description:
      "Velnox handles the regulatory and ethics workflow end-to-end — initial submission packs, amendment routing, deviation notifications, and EC follow-up until approval.",
    icon: "ShieldCheck",
    group: "Regulatory & Quality",
  },
  {
    slug: "project-management",
    title: "Clinical Trial Project Management (Phase I–IV)",
    short:
      "Cross-functional project leadership across the full phase spectrum.",
    description:
      "Dedicated project officers own timeline, budget, sponsor reporting and risk escalation — across Phase I through Phase IV / post-marketing studies.",
    icon: "Rocket",
    group: "Operations",
  },
  {
    slug: "clinical-monitoring",
    title: "Clinical Monitoring Services",
    short:
      "Risk-based monitoring with source data verification and query resolution.",
    description:
      "On-site and remote monitoring engagements with documented visit reports, SDV, query follow-through and trip-report turnaround that respects sponsor timelines.",
    icon: "Activity",
    group: "Operations",
  },
  {
    slug: "medical-writing",
    title: "Medical Writing",
    short:
      "Protocols, CRFs, ICDs, CSRs and regulatory documents written to GCP standards.",
    description:
      "Scientific writing support across the trial lifecycle — protocol drafting, informed consent documents, case report forms, clinical study reports and patient-facing materials.",
    icon: "FileText",
    group: "Scientific & Data",
  },
  {
    slug: "clinical-data-management",
    title: "Clinical Data Management",
    short:
      "EDC builds, edit-check design, query management and database lock.",
    description:
      "End-to-end data management — database design, validation, ongoing data cleaning, discrepancy management and timely database lock against sponsor specifications.",
    icon: "Database",
    group: "Scientific & Data",
  },
  {
    slug: "pharmacovigilance",
    title: "Pharmacovigilance",
    short:
      "Safety intake, causality assessment and reportable-event management.",
    description:
      "Adverse event and SAE intake, narrative generation, causality assessment and reportable-event routing to sponsor, EC and regulators within applicable timelines.",
    icon: "AlertTriangle",
    group: "Regulatory & Quality",
  },
  {
    slug: "quality-assurance",
    title: "Quality Assurance & Audit Readiness",
    short:
      "Internal QA programmes that keep sites inspection-ready continuously.",
    description:
      "Site-level QA reviews, mock audits, CAPA cycles and audit-trail readiness — so sponsor audits and regulatory inspections find a site that's already in order.",
    icon: "BadgeCheck",
    group: "Regulatory & Quality",
  },
  {
    slug: "sop-development",
    title: "SOP Development",
    short:
      "Custom SOP authoring for sites, hospitals and partner institutions.",
    description:
      "Velnox authors and reviews standard operating procedures for hospitals, investigator sites and partner organisations — calibrated to GCP and the institution's operating model.",
    icon: "FileCog",
    group: "Capability Building",
  },
  {
    slug: "archival",
    title: "Archival of Clinical Study Records",
    short:
      "Controlled-access archival of essential documents with chain-of-custody logs.",
    description:
      "Boxed, indexed and chain-of-custody-logged archival of trial essential documents for the contracted retention period — with controlled access for sponsor, monitor and regulator review.",
    icon: "Archive",
    group: "Regulatory & Quality",
  },
  {
    slug: "investigator-network",
    title: "Investigator Network Development",
    short:
      "Building and maintaining a vetted investigator network across India.",
    description:
      "Investigator identification, site appraisals, GCP-training co-ordination and ongoing network management — so sponsors have ready access to credentialed investigators when a study needs them.",
    icon: "Network",
    group: "Capability Building",
  },
];

export const SERVICE_GROUPS = [
  "Operations",
  "Regulatory & Quality",
  "Scientific & Data",
  "Capability Building",
] as const;
