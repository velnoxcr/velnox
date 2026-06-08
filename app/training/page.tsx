import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, RevealList, RevealItem } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/home/CtaBand";
import { ContactForm } from "@/components/forms/ContactForm";
import { TRAINING_LEDE, TRAINING_PILLARS, TRAINING_AUDIENCE, TRAINING_FORMAT } from "@/lib/content/training";
import { Icon } from "@/components/ui/Icon";
import { BookOpen, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Velnox CRC Training & Development — practical mentorship, industry exposure and GCP foundations for the next generation of Clinical Research Coordinators.",
};

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="CRC Training & Development"
        title="Building the next generation of Clinical Research Professionals."
        intro={TRAINING_LEDE}
      />

      <section className="py-12">
        <Container>
          <Reveal>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-ocean-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ocean-800 ring-1 ring-inset ring-ocean-200">
              <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-ocean-600" />
              What we teach
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-display-md font-semibold text-ink-700 text-balance">
              Four foundations every Clinical Research Coordinator needs.
            </h2>
          </Reveal>
          <RevealList className="mt-8 grid gap-5 sm:grid-cols-2">
            {TRAINING_PILLARS.map((p) => (
              <RevealItem
                key={p.title}
                className="flex items-start gap-4 rounded-2xl bg-white p-6 ring-1 ring-inset ring-ink-100 shadow-card"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ocean-gradient text-white shadow-oceanGlow">
                  <Icon name={p.icon} size={20} />
                </span>
                <div>
                  <div className="font-display text-[16px] font-semibold text-ink-700">{p.title}</div>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-500">{p.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealList>
        </Container>
      </section>

      <section className="bg-paper-100 py-16">
        <Container className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl bg-white p-7 ring-1 ring-inset ring-ink-100 shadow-card">
              <div className="flex items-center gap-3">
                <Users size={22} className="text-ocean-700" strokeWidth={2} />
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-700">Who can apply</div>
              </div>
              <ul className="mt-5 grid gap-2.5 text-[14px] text-ink-600">
                {TRAINING_AUDIENCE.map((e) => (
                  <li key={e} className="flex items-start gap-2.5">
                    <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-ocean-600" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="rounded-2xl bg-white p-7 ring-1 ring-inset ring-ink-100 shadow-card">
              <div className="flex items-center gap-3">
                <BookOpen size={22} className="text-ocean-700" strokeWidth={2} />
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-700">How we train</div>
              </div>
              <ul className="mt-5 grid gap-2.5 text-[14px] text-ink-600">
                {TRAINING_FORMAT.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-ocean-600" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ocean-700">
                Express your interest
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 font-display text-display-md font-semibold text-ink-700 text-balance">
                Apply for Velnox CRC Training.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-[14.5px] leading-relaxed text-ink-500">
                Tell us about your background and what brings you to clinical research — the Velnox People Team
                responds to every enquiry within five business days.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="h-64 rounded-2xl bg-white shadow-card ring-1 ring-inset ring-ink-100" />}>
              <ContactForm defaultIntent="training" />
            </Suspense>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
