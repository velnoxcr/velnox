import Link from "next/link";
import { Container } from "@/components/site/Container";
import { Reveal, RevealList, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { AUDIENCES } from "@/lib/content/audiences";

export function AudienceTiles() {
  const primary = AUDIENCES.filter((a) => a.tier === "primary");
  return (
    <section className="relative py-24 sm:py-28">
      <Container>
        <div className="mb-12 max-w-3xl">
          <Reveal>
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-300">
              Who we serve
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-display-lg text-white text-balance">
              Sponsors, sites, devices, and consumer-health teams that need a CRO with documented SOPs.
            </h2>
          </Reveal>
        </div>

        <RevealList className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {primary.map((a) => (
            <RevealItem key={a.slug}>
              <Link
                href={`/services#${a.slug}`}
                className="group relative block h-full overflow-hidden rounded-2xl bg-graphite-900/60 p-6 ring-1 ring-inset ring-white/5 transition-all duration-300 hover:bg-graphite-900 hover:ring-teal-400/30 hover:-translate-y-0.5"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-400/10 text-teal-300 ring-1 ring-inset ring-teal-400/30">
                  <Icon name={a.icon} size={20} />
                </span>
                <div className="mt-5 font-display text-[16.5px] font-semibold leading-tight text-white">
                  {a.title}
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-graphite-200">{a.short}</p>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </Link>
            </RevealItem>
          ))}
        </RevealList>
      </Container>
    </section>
  );
}
