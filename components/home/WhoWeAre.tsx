import Link from "next/link";
import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/motion/Reveal";
import { LEADERSHIP } from "@/lib/content/leadership";
import { ArrowUpRight } from "lucide-react";

export function WhoWeAre() {
  return (
    <section className="relative py-24 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-300">
              Who we are
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="font-display text-display-md text-white text-balance">
              Velnox is a CRO / SMO built around a single discipline — running GCP-compliant
              clinical research that withstands sponsor audit, regulatory inspection and the
              patient&apos;s trust.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-graphite-200">
              Every step in our operating model — from confidential feasibility to 5-year
              archival — is governed by a documented SOP with a named owner. We don&apos;t
              reconstruct compliance before audit. We document as we work.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-7">
              <Link
                href="/about"
                className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-teal-300 hover:text-teal-200"
              >
                Read the Velnox story
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal direction="left">
            <div className="rounded-2xl bg-graphite-900/60 p-6 ring-1 ring-inset ring-white/5 shadow-elev">
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-graphite-300">
                Leadership
              </div>
              <ul className="space-y-5">
                {LEADERSHIP.map((l) => (
                  <li key={l.name} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-teal-500/30 to-teal-700/10 font-display text-[13px] font-semibold text-teal-200 ring-1 ring-inset ring-teal-400/30">
                      {l.initials}
                    </span>
                    <div className="min-w-0">
                      <div className="text-[14.5px] font-medium text-white">{l.name}</div>
                      <div className="text-[12.5px] uppercase tracking-[0.12em] text-graphite-300">{l.role}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
