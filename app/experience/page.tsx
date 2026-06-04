import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, RevealList, RevealItem } from "@/components/motion/Reveal";
import {
  STUDY_TYPES,
  THERAPEUTIC_AREAS,
  STUDY_PHASES,
  PRODUCT_CATEGORIES,
} from "@/lib/content/experience";
import { CtaBand } from "@/components/home/CtaBand";
import { Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Therapeutic areas, study phases and product categories Velnox is built to handle.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="Therapeutic depth, study designs and product categories Velnox is built to handle."
        intro="A standing operating range — what our SOPs, training and partner labs cover today. Specific portfolios are shared under sponsor NDA."
      />

      <section className="py-12">
        <Container>
          <Reveal>
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ocean-700">
              Regulatory study types
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <ul className="flex flex-wrap gap-2.5">
              {STUDY_TYPES.map((t) => (
                <li
                  key={t}
                  className="rounded-full bg-white px-3.5 py-1.5 text-[13px] font-medium text-ink-600 ring-1 ring-inset ring-ink-100 shadow-card"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper-100 py-16">
        <Container className="grid gap-6 lg:grid-cols-3">
          <Column title="Therapeutic Areas" items={THERAPEUTIC_AREAS} />
          <Column title="Study Phases & Designs" items={STUDY_PHASES} />
          <Column title="Product Categories" items={PRODUCT_CATEGORIES} />
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Reveal>
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ocean-700">
              Selected case snapshots
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-display-md font-semibold text-ink-700 text-balance">
              Anonymised per the Velnox Confidentiality SOP.
            </h2>
          </Reveal>

          <RevealList className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { phase: "Phase III", ta: "Cardiology", sites: 12, metric: "98% data clean within 21 days of LPLV" },
              { phase: "BA / BE", ta: "Endocrinology", sites: 1, metric: "Zero protocol deviations; PK profile within sponsor envelope" },
              { phase: "Phase IV / PMS", ta: "Infectious Disease", sites: 8, metric: "24-hr SAE reportable rate held at 100% across 14 events" },
            ].map((c, i) => (
              <RevealItem
                key={i}
                className="relative rounded-2xl bg-white p-6 ring-1 ring-inset ring-ink-100 shadow-card"
              >
                <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-400">
                  <span className="text-ocean-700">{c.phase}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Lock size={11} /> NDA
                  </span>
                </div>
                <div className="mt-3 font-display text-[17px] font-semibold text-ink-700">{c.ta}</div>
                <div className="mt-1 text-[12.5px] text-ink-400">{c.sites} sites · India</div>
                <p className="mt-4 text-[13.5px] leading-relaxed text-ink-500">{c.metric}</p>
              </RevealItem>
            ))}
          </RevealList>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-3xl text-[12.5px] italic text-ink-400">
              Case snapshots are illustrative of Velnox&apos;s operating envelope. Sponsor-specific
              outcomes are shared only under NDA.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl bg-white p-7 ring-1 ring-inset ring-ink-100 shadow-card">
      <Reveal>
        <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-700">
          {title}
        </div>
      </Reveal>
      <ul className="grid gap-2 text-[13.5px] text-ink-600">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span aria-hidden className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-ocean-600" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
