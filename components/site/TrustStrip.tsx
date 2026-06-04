import { Container } from "./Container";
import { ShieldCheck, AlertTriangle, Phone } from "lucide-react";

const ITEMS = [
  "ICH-GCP E6(R2)",
  "NDCT Rules 2019",
  "NABL / CAP-aligned labs",
  "5-year archival",
];

export function TrustStrip() {
  return (
    <div className="hidden border-b border-ink-50 bg-ocean-gradient text-white md:block">
      <Container className="flex h-9 items-center justify-between gap-6 text-[11px] uppercase tracking-[0.18em]">
        <ul className="flex items-center gap-5">
          {ITEMS.map((t) => (
            <li key={t} className="flex items-center gap-1.5 text-white/90">
              <ShieldCheck size={12} strokeWidth={2.2} className="text-teal-300" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <a
          href="tel:+910000000000"
          className="hidden lg:inline-flex items-center gap-1.5 text-white/95 hover:text-white"
        >
          <AlertTriangle size={12} className="text-amber-300" strokeWidth={2.2} />
          <span>PV Hotline 24×7</span>
          <Phone size={11} strokeWidth={2.2} className="ml-1" />
        </a>
      </Container>
    </div>
  );
}
