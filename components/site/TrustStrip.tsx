import { Container } from "./Container";
import { ShieldCheck, MapPin, Phone } from "lucide-react";
import { COMPANY } from "@/lib/content/nav";

const ITEMS = [
  "GCP-trained team",
  "Phase I–IV coverage",
  "Pollachi · Mysuru",
  "Pan-India investigator network",
];

export function TrustStrip() {
  return (
    <div className="hidden border-b border-ink-50 bg-ocean-gradient text-white md:block">
      <Container className="flex h-9 items-center justify-between gap-6 text-[11px] uppercase tracking-[0.18em]">
        <ul className="flex items-center gap-5">
          {ITEMS.map((t, i) => (
            <li key={t} className="flex items-center gap-1.5 text-white/90">
              {i === 0 && <ShieldCheck size={12} strokeWidth={2.2} className="text-teal-300" />}
              {i === 2 && <MapPin size={12} strokeWidth={2.2} className="text-teal-300" />}
              {i !== 0 && i !== 2 && <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-teal-300" />}
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <a
          href={`tel:${COMPANY.phoneMain.replace(/\s/g, "")}`}
          className="hidden lg:inline-flex items-center gap-1.5 text-white/95 hover:text-white"
        >
          <Phone size={11} strokeWidth={2.2} />
          <span className="tabular">{COMPANY.phoneMain}</span>
        </a>
      </Container>
    </div>
  );
}
