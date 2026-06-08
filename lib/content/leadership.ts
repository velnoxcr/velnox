export type Leader = {
  name: string;
  role: string;
  shortRole: string;
  initials: string;
  bio: string;
  email?: string;
};

export const FOUNDER: Leader = {
  name: "Mr. Gobinath R",
  role: "Founder & Managing Director",
  shortRole: "Founder · MD",
  initials: "GR",
  bio:
    "Mr. Gobinath R is a Clinical Research Professional with extensive experience in clinical trial operations, site management, patient recruitment, regulatory affairs, ethics committee coordination, and project execution. He has successfully delivered multiple clinical research projects across Oncology, Cardiology, Ophthalmology, Neurology, Endocrinology, Pediatrics, and General Medicine — and founded Velnox with a mission to strengthen India's clinical research ecosystem. At Velnox, he champions opportunities for the next generation of Clinical Research Coordinators through practical training, mentorship, and hands-on learning.",
  email: "info@velnoxresearch.com",
};

export const LEADERSHIP: Leader[] = [
  FOUNDER,
  {
    name: "Mrs. Suruthi Kanagaraj",
    role: "Chief Executive Officer",
    shortRole: "Chief Executive Officer",
    initials: "SK",
    bio:
      "Provides strategic leadership for Velnox — driving organisational growth, sponsor and stakeholder engagement, and business development across our partner network.",
    email: "info@velnoxresearch.com",
  },
  {
    name: "Mr. Selvakumar D",
    role: "Chief Operating Officer",
    shortRole: "Chief Operating Officer",
    initials: "SD",
    bio:
      "Oversees operational excellence across Velnox — project execution, process optimisation and end-to-end clinical research delivery from start-up through close-out.",
    email: "info@velnoxresearch.com",
  },
];
