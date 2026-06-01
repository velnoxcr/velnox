export type NavChild = { label: string; href: string; description?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Leadership", href: "/about#leadership", description: "CEO and Managing Director" },
      { label: "Advisory Committee", href: "/about/advisory", description: "Scientific oversight" },
      { label: "Careers", href: "/careers", description: "Build a career in clinical research" },
    ],
  },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Experience", href: "/experience" },
  { label: "Who We Serve", href: "/services" },
  { label: "Compliance", href: "/compliance" },
  { label: "Contact", href: "/contact" },
];

export const PRIMARY_CTA = {
  label: "Request Feasibility",
  href: "/contact?intent=feasibility",
};

export const COMPANY = {
  legalName: "Velnox Clinical Research and Solutions Pvt. Ltd.",
  shortName: "Velnox",
  trademark: "Velnox RSCRO",
  founded: 2026,
  ceo: "Mrs. Suruthi Kanagaraj",
  md: "Mr. Gobinath R",
  emailGeneral: "contact@velnoxcr.com",
  emailFeasibility: "feasibility@velnoxcr.com",
  emailPv: "pv@velnoxcr.com",
  phoneMain: "+91 00000 00000", // TODO: Velnox to supply
  phonePv24x7: "+91 00000 00000", // TODO: Velnox to supply — 24x7 SAE hotline
  whatsappLink: "https://wa.me/910000000000", // TODO: Velnox to supply
  addressHead: {
    line1: "Velnox Head Office", // TODO: Velnox to supply
    line2: "Address line 2",
    city: "Chennai",
    state: "Tamil Nadu",
    pin: "600 000",
    country: "India",
  },
  addressBranch: {
    line1: "Velnox Branch / Site Network Office", // TODO: Velnox to supply
    line2: "Address line 2",
    city: "Bengaluru",
    state: "Karnataka",
    pin: "560 000",
    country: "India",
  },
};
