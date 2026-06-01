import Link from "next/link";
import { Container } from "@/components/site/Container";
import { Card, CardBody } from "@/components/ui/Card";
import { Reveal, RevealList, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { CAPABILITIES } from "@/lib/content/capabilities";
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
    <section className="relative py-24 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
      <Container>
        <div className="mb-14 grid items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-300">
                Capabilities
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-display-lg text-white text-balance">
                Operating capabilities, mapped one-to-one to our SOPs.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={0.1} direction="left">
              <p className="text-[14.5px] text-graphite-200">
                Every capability below is the marketing version of a documented procedure — not
                aspirational. See the full set on the{" "}
                <Link href="/capabilities" className="text-teal-300 hover:text-teal-200">
                  Capabilities page
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </div>

        <RevealList className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((c) => (
            <RevealItem key={c.slug}>
              <Card as="article" className="h-full">
                <CardBody className="flex h-full flex-col gap-5">
                  <div className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-400/10 text-teal-300 ring-1 ring-inset ring-teal-400/30">
                      <Icon name={c.icon} size={20} />
                    </span>
                    <span className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-graphite-300">
                      {c.sopRef}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-[18px] font-semibold leading-tight text-white">
                      {c.title}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-graphite-200">
                      {c.short}
                    </p>
                  </div>
                  <div className="mt-auto pt-2">
                    <Link
                      href={`/capabilities#${c.slug}`}
                      className="group/link inline-flex items-center gap-1.5 text-[13px] font-medium text-teal-300 hover:text-teal-200"
                    >
                      Read more
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
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
