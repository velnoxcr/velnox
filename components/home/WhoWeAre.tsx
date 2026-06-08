import Link from "next/link";
import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SECTION_IMAGERY } from "@/lib/content/assets";
import { COMPANY } from "@/lib/content/nav";
import { ArrowUpRight, Target, Compass } from "lucide-react";

export function WhoWeAre() {
  return (
    <section className="relative py-24 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-ocean-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ocean-800 ring-1 ring-inset ring-ocean-200">
              <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-ocean-600" />
              About {COMPANY.shortName}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-display-lg font-semibold tracking-tightest text-ink-700 text-balance">
              A collaborative ecosystem for <span className="ocean-text-gradient">clinical research</span> in India.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-ink-400">
              Velnox was founded with a vision to strengthen clinical research infrastructure and create a
              collaborative ecosystem connecting sponsors, CROs, investigators, hospitals and patients. We provide
              ethical, compliant and quality-focused clinical research services while supporting innovation in
              healthcare.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 ring-1 ring-inset ring-ink-100 shadow-card">
                <div className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ocean-700">
                  <Compass size={14} strokeWidth={2.2} />
                  Vision
                </div>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-500">
                  To become a trusted and leading clinical research partner delivering innovative, ethical and
                  high-quality research solutions across India and beyond.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 ring-1 ring-inset ring-ink-100 shadow-card">
                <div className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ocean-700">
                  <Target size={14} strokeWidth={2.2} />
                  Mission
                </div>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-500">
                  To accelerate clinical research by connecting sponsors, CROs, investigators, healthcare
                  institutions and patients through excellence, integrity, innovation, collaboration and quality.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-1.5 rounded-full bg-ocean-gradient px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-oceanGlow hover:brightness-110"
              >
                Read the Velnox story
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
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
                  alt="Clinical research workflow in a controlled environment"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-900/35 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ocean-800 backdrop-blur">
                    <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-teal-500" />
                    End-to-end clinical research
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 divide-x divide-ink-100 bg-paper-100">
                <Stat value="2" label="Cities" />
                <Stat value="13+" label="Services" />
                <Stat value="12+" label="TAs" />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-4 py-4 text-center">
      <div className="font-display tabular text-[22px] font-bold text-ink-700">{value}</div>
      <div className="mt-0.5 text-[10.5px] uppercase tracking-[0.16em] text-ink-300">{label}</div>
    </div>
  );
}
