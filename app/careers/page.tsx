import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, RevealList, RevealItem } from "@/components/motion/Reveal";
import { CareersForm } from "@/components/forms/CareersForm";
import { ROLES, ELIGIBILITY, ONBOARDING } from "@/lib/content/careers";
import { MapPin, BriefcaseBusiness, GraduationCap, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build a career in clinical research that audits cleanly. Velnox hires for SOP discipline, scientific curiosity and patient-first ethics.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build a career in clinical research that audits cleanly."
        intro="Velnox hires for SOP discipline, scientific curiosity and patient-first ethics — in that order. We run a structured onboarding programme and an internal training file that grows with you."
      />

      <section className="py-12">
        <Container>
          <Reveal>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <h2 className="font-display text-display-md font-semibold text-ink-700">Open roles</h2>
              <span className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-ocean-700">
                Always hiring · {ROLES.length} role catalogue
              </span>
            </div>
          </Reveal>
          <RevealList className="grid gap-4 md:grid-cols-2">
            {ROLES.map((r) => (
              <RevealItem
                key={r.title}
                className="rounded-2xl bg-white p-6 ring-1 ring-inset ring-ink-100 shadow-card transition-all duration-300 hover:shadow-cardHover hover:ring-ocean-200 hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-display text-[16.5px] font-semibold text-ink-700">{r.title}</div>
                    <div className="mt-1 inline-flex items-center gap-1.5 text-[12.5px] text-ink-400">
                      <MapPin size={12} /> {r.location}
                    </div>
                  </div>
                  <span className="rounded-full bg-ocean-50 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-ocean-800 ring-1 ring-inset ring-ocean-200">
                    {r.type}
                  </span>
                </div>
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink-500">{r.summary}</p>
              </RevealItem>
            ))}
          </RevealList>
        </Container>
      </section>

      <section className="bg-paper-100 py-12">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl bg-white p-7 ring-1 ring-inset ring-ink-100 shadow-card">
              <div className="flex items-center gap-3">
                <GraduationCap size={22} className="text-ocean-700" strokeWidth={2} />
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-700">
                  Eligibility & skills
                </div>
              </div>
              <ul className="mt-5 grid gap-2.5 text-[14px] text-ink-600">
                {ELIGIBILITY.map((e) => (
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
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-700">
                  How we train
                </div>
              </div>
              <ol className="mt-5 grid gap-2.5 text-[14px] text-ink-600">
                {ONBOARDING.map((o, i) => (
                  <li key={o} className="flex items-start gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ocean-gradient font-display tabular text-[11px] font-bold text-white">
                      {i + 1}
                    </span>
                    {o}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ocean-700">
                Application
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 font-display text-display-md font-semibold text-ink-700 text-balance">
                Apply to Velnox.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-[14.5px] leading-relaxed text-ink-500">
                Submissions are reviewed by the People Team within five business days. Shortlisted
                applicants are invited to a structured interview that covers SOP awareness, GCP
                literacy and a short scenario discussion.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-6 flex items-start gap-3 rounded-xl bg-ocean-50 p-4 ring-1 ring-inset ring-ocean-200">
                <BriefcaseBusiness size={18} className="mt-0.5 shrink-0 text-ocean-700" strokeWidth={2} />
                <p className="text-[13px] leading-relaxed text-ink-600">
                  Internships and HR4CR pathways are open to final-year and recent-graduate
                  candidates from Life Sciences, Pharmacy, Nursing and AYUSH streams.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <CareersForm />
          </div>
        </Container>
      </section>
    </>
  );
}
