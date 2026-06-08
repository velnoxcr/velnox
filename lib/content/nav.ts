export type NavChild = { label: string; href: string; description?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about#story", description: "Vision and mission" },
      { label: "Leadership", href: "/about#leadership", description: "Founder, CEO, COO" },
      { label: "Our Presence", href: "/about#presence", description: "Pollachi & Mysuru" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Training", href: "/training" },
  { label: "Contact", href: "/contact" },
];

export const PRIMARY_CTA = {
  label: "Partner with Velnox",
  href: "/contact?intent=partnership",
};

export const COMPANY = {
  legalName: "Velnox Clinical Research & Solutions",
  shortName: "Velnox",
  trademark: "Velnox",
  tagline: "Advancing Healthcare Through Research Excellence",
  organisationType: "SMO / CRSO",
  founder: "Mr. Gobinath R",
  ceo: "Mrs. Suruthi Kanagaraj",
  coo: "Mr. Selvakumar D",
  emailGeneral: "info@velnoxresearch.com",
  emailPartnership: "info@velnoxresearch.com",
  emailPv: "info@velnoxresearch.com",
  emailTraining: "info@velnoxresearch.com",
  phoneMain: "+91 75020 46867",
  phonePv: "+91 75020 46867",
  whatsappLink: "https://wa.me/917502046867",
  website: "www.velnoxresearch.com",
  addressHead: {
    label: "Corporate Head Office",
    line1: "Velnox Clinical Research & Solutions",
    city: "Pollachi",
    state: "Tamil Nadu",
    country: "India",
    note: "Near Coimbatore · Gateway to the Western Ghats",
  },
  addressBranch: {
    label: "First Operational Site",
    line1: "Velnox Clinical Research & Solutions",
    city: "Mysuru",
    state: "Karnataka",
    country: "India",
    note: "Karnataka's cultural and healthcare capital",
  },
};
