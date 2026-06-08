import Link from "next/link";
import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/motion/Reveal";
import { TRAINING_LEDE, TRAINING_PILLARS } from "@/lib/content/training";
import { Icon } from "@/components/ui/Icon";
import { SECTION_IMAGERY } from "@/lib/content/assets";
import { ArrowRight, GraduationCap } from "lucide-react";

export function TrainingPreview() {
  return (
    <section className="relative py-24 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <Reveal direction="right" className="lg:col-span-5">
          <div className="relative">
            <div aria-hidden className="absolute -inset-3 rounded-3xl bg-ocean-gradient opacity-10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-cardHover ring-1 ring-inset ring-ink-100">
              <div className="relative aspect-[5/4] w-full overflow-hidden">
                <img
                  src={SECTION_IMAGERY.careers}
                  alt="Clinical research training and mentorship"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ocean-800 backdrop-blur">
                    <GraduationCap size={12} strokeWidth={2.2} />
                    CRC Training & Development
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-ocean-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ocean-800 ring-1 ring-inset ring-ocean-200">
              <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-ocean-600" />
              CRC Training
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-display-lg font-semibold tracking-tightest text-ink-700 text-balance">
              Building the next generation of <span className="ocean-text-gradient">Clinical Research Professionals</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-500">
              {TRAINING_LEDE}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {TRAINING_PILLARS.map((p) => (
                <li key={p.title} className="flex items-start gap-3 rounded-xl bg-paper-100 p-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-ocean-700 ring-1 ring-inset ring-ocean-200">
                    <Icon name={p.icon} size={16} />
                  </span>
                  <div>
                    <div className="text-[13.5px] font-semibold text-ink-700">{p.title}</div>
                    <div className="mt-0.5 text-[12px] leading-snug text-ink-400">{p.body}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8">
              <Link
                href="/training"
                className="group inline-flex items-center gap-1.5 rounded-full bg-ocean-gradient px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-oceanGlow hover:brightness-110"
              >
                Explore CRC Training
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
