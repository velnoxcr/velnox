import Link from "next/link";
import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/motion/Reveal";
import { LEADERSHIP } from "@/lib/content/leadership";
import { SECTION_IMAGERY } from "@/lib/content/assets";
import { ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export function WhoWeAre() {
  return (
    <section className="relative py-24 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-ocean-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ocean-800 ring-1 ring-inset ring-ocean-200">
              <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-ocean-600" />
              About Velnox
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-display-lg font-semibold tracking-tightest text-ink-700 text-balance">
              Transformative research, <span className="ocean-text-gradient">modern operations.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-ink-400">
              <span className="font-semibold text-ink-700">Velnox Clinical Research and Solutions</span> is a
              CRO / SMO built around a single discipline — running GCP-compliant clinical research that withstands
              sponsor audit, regulatory inspection, and the patient&apos;s trust.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Documented or it didn't happen",
                "Subject first, always",
                "Audit-ready by default",
                "Honest feasibility",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[14px] text-ink-500">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-teal-600" strokeWidth={2} />
                  <span className="font-medium text-ink-700">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                href="/about"
                className="group inline-flex items-center gap-1.5 rounded-full bg-ocean-gradient px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-oceanGlow hover:brightness-110"
              >
                Read the Velnox story
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <div className="flex items-center gap-3 text-[12.5px] text-ink-400">
                <ShieldCheck size={14} className="text-ocean-700" />
                Reviewed under ICH-GCP E6(R2)
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal direction="left" className="lg:col-span-5">
          <div className="relative">
            <div aria-hidden className="absolute -inset-3 rounded-3xl bg-ocean-gradient opacity-10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-cardHover ring-1 ring-inset ring-ink-100">
              <div className="relative aspect-[5/4] w-full overflow-hidden">
                <img
                  src={SECTION_IMAGERY.whoWeAre}
                  alt="Velnox researcher conducting pipette work in a controlled laboratory environment"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-900/35 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ocean-800 backdrop-blur">
                    <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-teal-500" />
                    Research-grade Operations
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 divide-x divide-ink-100 bg-paper-100">
                {[
                  { label: "Leadership", value: LEADERSHIP.length.toString() },
                  { label: "SOP modules", value: "25+" },
                  { label: "Lifecycle steps", value: "06" },
                ].map((s) => (
                  <div key={s.label} className="px-4 py-4 text-center">
                    <div className="font-display tabular text-[22px] font-bold text-ink-700">{s.value}</div>
                    <div className="mt-0.5 text-[10.5px] uppercase tracking-[0.16em] text-ink-300">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
