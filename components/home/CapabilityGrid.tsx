import Link from "next/link";
import { Container } from "@/components/site/Container";
import { Card, CardBody } from "@/components/ui/Card";
import { Reveal, RevealList, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { CAPABILITIES } from "@/lib/content/capabilities";
import { CAPABILITY_IMAGERY } from "@/lib/content/assets";
import { ArrowUpRight } from "lucide-react";

export function CapabilityGrid() {
  const featured = [
    "site-readiness",
    "study-feasibility",
    "informed-consent-av",
    "study-conduct-source-data",
    "monitoring-closeout-archival",
    "specimen-handling-shipping",
  ]
    .map((slug) => CAPABILITIES.find((c) => c.slug === slug))
    .filter(Boolean) as typeof CAPABILITIES;

  return (
    <section className="relative bg-paper-100 py-24 sm:py-28">
      <Container>
        <div className="mb-14 grid items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-ocean-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ocean-800 ring-1 ring-inset ring-ocean-200">
                <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-ocean-600" />
                Our Capabilities
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-display-lg font-semibold tracking-tightest text-ink-700 text-balance">
                Operating capabilities, mapped <span className="ocean-text-gradient">one-to-one</span> to our SOPs.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={0.1} direction="left">
              <p className="text-[14.5px] text-ink-400">
                Every capability below is the marketing version of a documented procedure — not
                aspirational. See the full set on the{" "}
                <Link href="/capabilities" className="font-semibold text-ocean-700 hover:text-ocean-900 underline-offset-4 hover:underline">
                  Capabilities page
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </div>

        <RevealList className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((c) => (
            <RevealItem key={c.slug}>
              <Card as="article" className="h-full">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={CAPABILITY_IMAGERY[c.slug]}
                    alt={c.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-ink-900/15 to-transparent" />
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ocean-800 backdrop-blur">
                      {c.sopRef}
                    </span>
                  </div>
                  <div className="absolute left-4 bottom-4">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-ocean-gradient text-white shadow-oceanGlow">
                      <Icon name={c.icon} size={18} />
                    </span>
                  </div>
                </div>
                <CardBody className="flex flex-col gap-4">
                  <h3 className="font-display text-[18px] font-semibold leading-tight text-ink-700">
                    {c.title}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-ink-400">{c.short}</p>
                  <div className="mt-auto pt-1">
                    <Link
                      href={`/capabilities#${c.slug}`}
                      className="group/link inline-flex items-center gap-1.5 text-[13px] font-semibold text-ocean-700 hover:text-ocean-900"
                    >
                      Read more
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
