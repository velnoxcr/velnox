export type Audience = {
  slug: string;
  title: string;
  short: string;
  icon: string;
};

/**
 * Who Velnox partners with — drawn from the corporate document's
 * "Partnership Message" and home-page audience list.
 */
export const AUDIENCES: Audience[] = [
  {
    slug: "sponsors",
    title: "Sponsors & Pharma",
    short:
      "Phase I–IV trials, post-marketing studies and end-to-end clinical research delivery.",
    icon: "Beaker",
  },
  {
    slug: "cros",
    title: "Contract Research Organisations",
    short:
      "Site network, monitoring capacity and operational support for sponsor-led CRO programmes.",
    icon: "Network",
  },
  {
    slug: "hospitals",
    title: "Hospitals & Investigators",
    short:
      "Site activation, ethics committee support, CRC coverage and SOP development for hospital sites.",
    icon: "Building2",
  },
  {
    slug: "medical-devices",
    title: "Medical Device Companies",
    short:
      "Device studies, investigator coordination and post-market surveillance support.",
    icon: "Stethoscope",
  },
  {
    slug: "academic",
    title: "Academic Researchers & Institutions",
    short:
      "Investigator-initiated studies, research methodology support and student CRC training.",
    icon: "GraduationCap",
  },
  {
    slug: "healthcare-orgs",
    title: "Healthcare Organisations",
    short:
      "Cross-functional partnerships that connect care delivery with clinical research.",
    icon: "HeartHandshake",
  },
];
