export type PresenceLocation = {
  city: string;
  state: string;
  country: string;
  label: string;
  description: string;
  highlights: string[];
};

/** Velnox locations as set out in the corporate document. */
export const PRESENCE: PresenceLocation[] = [
  {
    city: "Pollachi",
    state: "Tamil Nadu",
    country: "India",
    label: "Corporate Head Office",
    description:
      "Pollachi serves as the Corporate Head Office of Velnox. Located near Coimbatore and at the gateway to the Western Ghats, Pollachi is a rapidly developing healthcare and educational hub — and Velnox is proud to be one of the first dedicated clinical research service organisations headquartered here.",
    highlights: [
      "Strategic leadership, sponsor relationships and business development",
      "Regulatory and ethics committee coordination",
      "Investigator-network development across South India",
    ],
  },
  {
    city: "Mysuru",
    state: "Karnataka",
    country: "India",
    label: "First Operational Site",
    description:
      "Mysuru is the first operational clinical research site of Velnox. Known as Karnataka's cultural and healthcare capital, Mysuru is home to renowned medical colleges, hospitals and experienced investigators. Our Mysuru operations support study execution, patient recruitment, regulatory coordination and site management.",
    highlights: [
      "Day-to-day study execution and patient recruitment",
      "Site management and CRC coverage",
      "Local regulatory and ethics committee coordination",
    ],
  },
];
