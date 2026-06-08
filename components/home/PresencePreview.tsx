import Link from "next/link";
import { Container } from "@/components/site/Container";
import { Reveal, RevealList, RevealItem } from "@/components/motion/Reveal";
import { PRESENCE } from "@/lib/content/presence";
import { MapPin, ArrowUpRight } from "lucide-react";

export function PresencePreview() {
  return (
    <section className="relative bg-paper-100 py-24 sm:py-28">
      <Container>
        <div className="mb-12 max-w-3xl">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-ocean-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ocean-800 ring-1 ring-inset ring-ocean-200">
              <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-ocean-600" />
              Our Presence
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-display-lg font-semibold tracking-tightest text-ink-700 text-balance">
              <span className="ocean-text-gradient">Pollachi</span> & <span className="ocean-text-gradient">Mysuru</span> — head office and operational site.
            </h2>
          </Reveal>
        </div>

        <RevealList className="grid gap-6 md:grid-cols-2">
          {PRESENCE.map((p) => (
            <RevealItem key={p.city}>
              <div className="relative h-full overflow-hidden rounded-3xl bg-white p-7 ring-1 ring-inset ring-ink-100 shadow-card transition-all duration-300 hover:shadow-cardHover hover:ring-ocean-200">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ocean-gradient text-white shadow-oceanGlow">
                    <MapPin size={20} strokeWidth={1.8} />
                  </span>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-700">{p.label}</div>
                    <div className="mt-1 font-display text-[22px] font-semibold text-ink-700">{p.city}, {p.state}</div>
                    <div className="text-[12.5px] text-ink-400">{p.country}</div>
                  </div>
                </div>
                <p className="mt-5 text-[14px] leading-relaxed text-ink-500">{p.description}</p>
                <ul className="mt-5 grid gap-2 text-[13px] text-ink-600">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5">
                      <span aria-hidden className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-ocean-600" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealList>

        <Reveal delay={0.15}>
          <div className="mt-8 text-center">
            <Link
              href="/about#presence"
              className="group inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-ocean-700 hover:text-ocean-900"
            >
              Read about our presence
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
