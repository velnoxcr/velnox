export type Leader = {
  name: string;
  role: string;
  initials: string;
  bio: string;
  email?: string;
};

export const LEADERSHIP: Leader[] = [
  {
    name: "Mrs. Suruthi Kanagaraj",
    role: "Chief Executive Officer",
    initials: "SK",
    bio: "Leads Velnox's clinical-research operations end-to-end — from feasibility and site activation through pharmacovigilance and archival. Author of Velnox's operating SOPs and signatory on the company's quality framework. {/* TODO: Velnox to supply — career history, academic credentials, regulatory bodies served. */}",
    email: "ceo@velnoxcr.com",
  },
  {
    name: "Mr. Gobinath R",
    role: "Managing Director",
    initials: "GR",
    bio: "Owns Velnox's commercial direction, sponsor relationships and regulatory posture. Reviewing and approving authority on Velnox's SOP framework. {/* TODO: Velnox to supply — career history, sponsor portfolio, industry affiliations. */}",
    email: "md@velnoxcr.com",
  },
];

export type Advisor = {
  name: string;
  role: string;
  specialty: string;
  bio: string;
};

// TODO: Velnox to supply — Advisory Committee roster. Placeholder structure shown below.
export const ADVISORY_COMMITTEE: Advisor[] = [
  {
    name: "Advisor name 1",
    role: "Chair, Scientific & Advisory Committee",
    specialty: "Regulatory Affairs",
    bio: "TODO: Velnox to supply — biography emphasising regulatory experience, academic affiliation and CR leadership.",
  },
  {
    name: "Advisor name 2",
    role: "Member, Scientific & Advisory Committee",
    specialty: "Oncology",
    bio: "TODO: Velnox to supply.",
  },
  {
    name: "Advisor name 3",
    role: "Member, Scientific & Advisory Committee",
    specialty: "Pharmacovigilance",
    bio: "TODO: Velnox to supply.",
  },
  {
    name: "Advisor name 4",
    role: "Member, Scientific & Advisory Committee",
    specialty: "Biostatistics",
    bio: "TODO: Velnox to supply.",
  },
];
