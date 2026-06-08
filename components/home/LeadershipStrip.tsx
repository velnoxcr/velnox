import Link from "next/link";
import { Container } from "@/components/site/Container";
import { Reveal, RevealList, RevealItem } from "@/components/motion/Reveal";
import { LEADERSHIP } from "@/lib/content/leadership";
import { ArrowUpRight } from "lucide-react";

export function LeadershipStrip() {
  return (
    <section className="relative bg-paper-100 py-24 sm:py-28">
      <Container>
        <div className="mb-12 max-w-3xl">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-ocean-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ocean-800 ring-1 ring-inset ring-ocean-200">
              <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-ocean-600" />
              Leadership
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-display-lg font-semibold tracking-tightest text-ink-700 text-balance">
              Led by experienced clinical research professionals.
            </h2>
          </Reveal>
        </div>

        <RevealList className="grid gap-5 md:grid-cols-3">
          {LEADERSHIP.map((l) => (
            <RevealItem key={l.name}>
              <div className="h-full rounded-2xl bg-white p-6 ring-1 ring-inset ring-ink-100 shadow-card">
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ocean-gradient font-display text-[15.5px] font-bold text-white shadow-oceanGlow">
                    {l.initials}
                  </span>
                  <div>
                    <div className="font-display text-[16px] font-semibold text-ink-700">{l.name}</div>
                    <div className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-ocean-700">
                      {l.shortRole}
                    </div>
                  </div>
                </div>
                <p className="mt-4 line-clamp-4 text-[13.5px] leading-relaxed text-ink-500">{l.bio}</p>
              </div>
            </RevealItem>
          ))}
        </RevealList>

        <Reveal delay={0.15}>
          <div className="mt-8">
            <Link
              href="/about#leadership"
              className="group inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-ocean-700 hover:text-ocean-900"
            >
              Meet the full leadership team
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
