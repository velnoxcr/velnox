export type ProcessStep = {
  step: number;
  title: string;
  note: string;
  sop: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Feasibility",
    note: "Confidential protocol review, recruitment realism, site fit. Typical turnaround: 7 working days.",
    sop: "SOP 3",
  },
  {
    step: 2,
    title: "Site Activation",
    note: "Site readiness audit, ISF setup, equipment calibration, EC dossier preparation.",
    sop: "SOP 2 · 5",
  },
  {
    step: 3,
    title: "SIV & Enrollment",
    note: "Study team delegation, signature logs, EC-approved recruitment, AV consent under NDCT 2019.",
    sop: "SOP 6 · 8 · 9",
  },
  {
    step: 4,
    title: "Conduct & Monitoring",
    note: "Source-supported study conduct, IP accountability, specimen cold chain, monitor visits.",
    sop: "SOP 11 · 13 · 14 · 17",
  },
  {
    step: 5,
    title: "Safety & Reporting",
    note: "24-hour SAE escalation to Sponsor/CRO, EC and DCGI. AE follow-up to resolution.",
    sop: "SOP 21 · 22",
  },
  {
    step: 6,
    title: "Close-out & Archival",
    note: "Final CSR, payments settled, boxed archival with chain-of-custody log for the retention period.",
    sop: "SOP 18 · 25",
  },
];
