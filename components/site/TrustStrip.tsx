import { Container } from "./Container";

const ITEMS = [
  "ICH-GCP E6(R2)",
  "New Drugs & CT Rules 2019",
  "NABL / CAP-aligned labs",
  "5-year archival",
];

export function TrustStrip() {
  return (
    <div className="hidden border-b border-white/5 bg-graphite-950/80 backdrop-blur-md md:block">
      <Container className="flex h-9 items-center justify-between gap-6 text-[11px] uppercase tracking-[0.18em] text-graphite-300">
        <ul className="flex items-center gap-5">
          {ITEMS.map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-teal-400/80" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <span className="hidden lg:inline-flex items-center gap-2 text-graphite-300">
          <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
          24×7 PV Hotline
        </span>
      </Container>
    </div>
  );
}
