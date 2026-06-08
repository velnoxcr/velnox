import Link from "next/link";
import { Container } from "@/components/site/Container";
import { Card, CardBody } from "@/components/ui/Card";
import { Reveal, RevealList, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { SERVICES } from "@/lib/content/services";
import { CAPABILITY_IMAGERY } from "@/lib/content/assets";
import { ArrowUpRight } from "lucide-react";

const FEATURED_SLUGS = [
  "site-management",
  "site-identification",
  "patient-recruitment",
  "regulatory-ec-support",
  "clinical-monitoring",
  "pharmacovigilance",
];

// Reuse the existing imagery registry — map service slugs to image keys.
const IMAGE_FOR_SERVICE: Record<string, string> = {
  "site-management": "site-readiness",
  "site-identification": "study-feasibility",
  "patient-recruitment": "subject-recruitment",
  "regulatory-ec-support": "ec-interactions",
  "clinical-monitoring": "monitoring-closeout-archival",
  "pharmacovigilance": "specimen-handling-shipping",
  "project-management": "siv-and-startup",
  "medical-writing": "isf-maintenance",
  "clinical-data-management": "study-conduct-source-data",
  "quality-assurance": "ip-storage-accountability",
  "sop-development": "budget-contracts",
  "archival": "monitoring-closeout-archival",
  "investigator-network": "ec-interactions",
};

export function ServicesPreview() {
  const featured = FEATURED_SLUGS
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter(Boolean) as typeof SERVICES;

  return (
    <section className="relative bg-paper-100 py-24 sm:py-28">
      <Container>
        <div className="mb-14 grid items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-ocean-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ocean-800 ring-1 ring-inset ring-ocean-200">
                <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-ocean-600" />
                Our Services
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-display-lg font-semibold tracking-tightest text-ink-700 text-balance">
                End-to-end clinical research <span className="ocean-text-gradient">services</span>.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={0.1} direction="left">
              <p className="text-[14.5px] text-ink-400">
                A previewed selection from the {SERVICES.length} services Velnox delivers. See the full list on the{" "}
                <Link href="/services" className="font-semibold text-ocean-700 hover:text-ocean-900 underline-offset-4 hover:underline">
                  Services page
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </div>

        <RevealList className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s) => (
            <RevealItem key={s.slug}>
              <Card as="article" className="h-full">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={CAPABILITY_IMAGERY[IMAGE_FOR_SERVICE[s.slug]] ?? ""}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-ink-900/15 to-transparent" />
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ocean-800 backdrop-blur">
                      {s.group}
                    </span>
                  </div>
                  <div className="absolute left-4 bottom-4">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-ocean-gradient text-white shadow-oceanGlow">
                      <Icon name={s.icon} size={18} />
                    </span>
                  </div>
                </div>
                <CardBody className="flex flex-col gap-4">
                  <h3 className="font-display text-[18px] font-semibold leading-tight text-ink-700">
                    {s.title}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-ink-400">{s.short}</p>
                  <div className="mt-auto pt-1">
                    <Link
                      href={`/services#${s.slug}`}
                      className="group/link inline-flex items-center gap-1.5 text-[13px] font-semibold text-ocean-700 hover:text-ocean-900"
                    >
                      Learn more
                      <ArrowUpRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </RevealItem>
          ))}
        </RevealList>
      </Container>
    </section>
  );
}
