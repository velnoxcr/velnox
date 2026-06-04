import Link from "next/link";
import { Container } from "@/components/site/Container";
import { Reveal, RevealList, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { AUDIENCES } from "@/lib/content/audiences";
import { ArrowUpRight } from "lucide-react";

export function AudienceTiles() {
  const primary = AUDIENCES.filter((a) => a.tier === "primary");
  return (
    <section className="relative bg-paper-100 py-24 sm:py-28">
      <Container>
        <div className="mb-12 max-w-3xl">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-ocean-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ocean-800 ring-1 ring-inset ring-ocean-200">
              <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-ocean-600" />
              Who we serve
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-display-lg font-semibold tracking-tightest text-ink-700 text-balance">
              Sponsors, sites, devices, and consumer-health teams that demand documented SOPs.
            </h2>
          </Reveal>
        </div>

        <RevealList className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {primary.map((a) => (
            <RevealItem key={a.slug}>
              <Link
                href={`/services#${a.slug}`}
                className="group relative block h-full overflow-hidden rounded-2xl bg-white p-7 ring-1 ring-inset ring-ink-100 shadow-card transition-all duration-300 hover:shadow-cardHover hover:ring-ocean-200 hover:-translate-y-1"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-ocean-gradient text-white shadow-oceanGlow">
                  <Icon name={a.icon} size={22} />
                </span>
                <div className="mt-5 font-display text-[17px] font-semibold leading-tight text-ink-700">
                  {a.title}
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-400">{a.short}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-[12.5px] font-semibold text-ocean-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more <ArrowUpRight size={13} />
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealList>
      </Container>
    </section>
  );
}
