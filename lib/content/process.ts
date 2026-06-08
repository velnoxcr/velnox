export type ProcessStep = {
  step: number;
  title: string;
  note: string;
};

/**
 * Velnox engagement lifecycle — high-level, no internal SOP references.
 */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Feasibility",
    note: "Confidential protocol review, recruitment realism and site-fit assessment.",
  },
  {
    step: 2,
    title: "Site Activation",
    note: "Site readiness, ethics committee dossier preparation and document set-up.",
  },
  {
    step: 3,
    title: "Initiation & Enrolment",
    note: "Study team training, investigator initiation and informed-consent execution.",
  },
  {
    step: 4,
    title: "Conduct & Monitoring",
    note: "Source-supported study execution with documented monitoring visits.",
  },
  {
    step: 5,
    title: "Safety & Reporting",
    note: "Adverse event intake, causality assessment and reportable-event routing.",
  },
  {
    step: 6,
    title: "Close-out & Archival",
    note: "Final reporting, close-out activities and controlled-access archival.",
  },
];
