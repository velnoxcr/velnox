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
              <h2 className="font-display text-display-md text-white">Open roles</h2>
              <span className="text-[12.5px] uppercase tracking-[0.12em] text-graphite-300">
                Always hiring · {ROLES.length} role catalogue
              </span>
            </div>
          </Reveal>
          <RevealList className="grid gap-4 md:grid-cols-2">
            {ROLES.map((r) => (
              <RevealItem
                key={r.title}
                className="rounded-2xl bg-graphite-900/60 p-6 ring-1 ring-inset ring-white/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-display text-[16.5px] font-semibold text-white">{r.title}</div>
                    <div className="mt-1 inline-flex items-center gap-1.5 text-[12.5px] text-graphite-300">
                      <MapPin size={12} /> {r.location}
                    </div>
                  </div>
                  <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.12em] text-graphite-100 ring-1 ring-inset ring-white/10">
                    {r.type}
                  </span>
                </div>
                <p className="mt-3 text-[13.5px] leading-relaxed text-graphite-200">{r.summary}</p>
              </RevealItem>
            ))}
          </RevealList>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl bg-graphite-900/60 p-7 ring-1 ring-inset ring-white/5">
              <div className="flex items-center gap-3">
                <GraduationCap size={20} className="text-teal-300" strokeWidth={1.8} />
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-300">
                  Eligibility & skills
                </div>
              </div>
              <ul className="mt-5 grid gap-2.5 text-[14px] text-graphite-100">
                {ELIGIBILITY.map((e) => (
                  <li key={e} className="flex items-start gap-2.5">
                    <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400/80" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="rounded-2xl bg-graphite-900/60 p-7 ring-1 ring-inset ring-white/5">
              <div className="flex items-center gap-3">
                <BookOpen size={20} className="text-teal-300" strokeWidth={1.8} />
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-300">
                  How we train
                </div>
              </div>
              <ol className="mt-5 grid gap-2.5 text-[14px] text-graphite-100">
                {ONBOARDING.map((o, i) => (
                  <li key={o} className="flex items-start gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal-400/10 font-display tabular text-[11.5px] font-semibold text-teal-300 ring-1 ring-inset ring-teal-400/30">
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
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-300">
                Application
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 font-display text-display-md text-white text-balance">
                Apply to Velnox.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-[14.5px] leading-relaxed text-graphite-200">
                Submissions are reviewed by the People Team within five business days. Shortlisted
                applicants are invited to a structured interview that covers SOP awareness, GCP
                literacy and a short scenario discussion.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-6 flex items-start gap-3 rounded-xl bg-graphite-900/60 p-4 ring-1 ring-inset ring-white/5">
                <BriefcaseBusiness size={18} className="mt-0.5 shrink-0 text-teal-300" strokeWidth={1.8} />
                <p className="text-[13px] leading-relaxed text-graphite-200">
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
