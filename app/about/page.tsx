import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, RevealList, RevealItem } from "@/components/motion/Reveal";
import { LeadershipCard } from "@/components/about/LeadershipCard";
import { CtaBand } from "@/components/home/CtaBand";
import { LEADERSHIP } from "@/lib/content/leadership";
import { AUDIENCES } from "@/lib/content/audiences";
import { SECTION_IMAGERY } from "@/lib/content/assets";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Velnox Clinical Research and Solutions — an India-based CRO/SMO operating under ICH-GCP and NDCT Rules 2019.",
};

const PRINCIPLES = [
  {
    title: "Documented or it didn't happen",
    body: "Source-data discipline is non-negotiable. Every observation, deviation and decision is captured the day it happens.",
  },
  {
    title: "Subject first, always",
    body: "Consent, safety and confidentiality outrank every commercial consideration — for every subject, every visit.",
  },
  {
    title: "Audit-ready by default",
    body: "Our ISFs, archives and access controls don't get reconstructed before an audit. They're inspection-ready continuously.",
  },
  {
    title: "Honest feasibility",
    body: "We say no when India isn't the right site, or when our team can't ethically commit. Honesty preserves the relationship.",
  },
];

const MISSION = [
  "Run every trial under ICH-GCP and NDCT Rules 2019 with documented SOP coverage end-to-end.",
  "Build investigator sites that are inspection-ready on day one — calibrated equipment, NABL / CAP-aligned labs, controlled IP storage.",
  "Protect subjects through rigorous informed consent (incl. AV recording where mandated), 24-hour SAE escalation, and lifelong confidentiality of personal data.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Velnox"
        title="A CRO/SMO built around a documented trial lifecycle."
        intro="Velnox Clinical Research and Solutions (Velnox RSCRO) is an India-based CRO/SMO operating under ICH-GCP and the New Drugs & Clinical Trials Rules, 2019. We exist to give sponsors a single accountable partner — site readiness, conduct, safety reporting and archival, without the hand-off gaps that compromise data integrity."
      />

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-display-md font-semibold text-ink-700">Our story</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
                India needs CRO and SMO partners who treat SOP discipline as a product — not as
                paperwork dusted off before an audit. Velnox was built around a written trial
                lifecycle: every step (feasibility, site activation, consent, conduct, monitoring,
                pharmacovigilance, archival) has a documented SOP and a named owner.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                That discipline shows up in three ways sponsors notice: faster site activation,
                cleaner monitoring visits, and audit findings closed before they escalate.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal direction="left">
              <div className="relative overflow-hidden rounded-3xl bg-ocean-gradient p-8 text-white shadow-cardHover">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-25"
                  style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
                    backgroundSize: "22px 22px",
                  }}
                />
                <div className="relative">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-200">
                    Vision
                  </div>
                  <p className="mt-3 font-display text-[20px] leading-snug text-balance">
                    To be India&apos;s most audit-ready CRO/SMO partner — the one sponsors choose
                    when the trial cannot afford a finding.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-paper-100 py-16">
        <Container>
          <Reveal>
            <h2 className="font-display text-display-md font-semibold text-ink-700">Mission</h2>
          </Reveal>
          <RevealList className="mt-8 grid gap-4 md:grid-cols-3">
            {MISSION.map((m, i) => (
              <RevealItem
                key={i}
                className="relative rounded-2xl bg-white p-6 ring-1 ring-inset ring-ink-100 shadow-card"
              >
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-ocean-gradient font-display tabular text-[12.5px] font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-[14.5px] leading-relaxed text-ink-500">{m}</p>
              </RevealItem>
            ))}
          </RevealList>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Reveal>
            <h2 className="font-display text-display-md font-semibold text-ink-700">Operating principles</h2>
          </Reveal>
          <RevealList className="mt-8 grid gap-4 md:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <RevealItem
                key={p.title}
                className="flex items-start gap-4 rounded-2xl bg-white p-6 ring-1 ring-inset ring-ink-100 shadow-card"
              >
                <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-teal-600" strokeWidth={2} />
                <div>
                  <div className="font-display text-[15.5px] font-semibold text-ink-700">{p.title}</div>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-400">{p.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealList>
        </Container>
      </section>

      <section id="leadership" className="bg-paper-100 py-16 scroll-mt-24">
        <Container>
          <Reveal>
            <h2 className="font-display text-display-md font-semibold text-ink-700">Leadership</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-3 max-w-2xl text-[14.5px] text-ink-400">
              The two officers who sign off on every Velnox SOP and own the company&apos;s posture
              with sponsors and regulators.
            </p>
          </Reveal>
          <RevealList className="mt-8 grid gap-5 md:grid-cols-2">
            {LEADERSHIP.map((l) => (
              <RevealItem key={l.name}>
                <LeadershipCard leader={l} />
              </RevealItem>
            ))}
          </RevealList>
          <Reveal delay={0.15}>
            <div className="mt-6">
              <Link
                href="/about/advisory"
                className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-ocean-700 hover:text-ocean-900"
              >
                See the Scientific & Advisory Committee
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Reveal>
            <h2 className="font-display text-display-md font-semibold text-ink-700">Who we serve</h2>
          </Reveal>
          <RevealList className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AUDIENCES.filter((a) => a.tier === "primary").map((a) => (
              <RevealItem
                key={a.slug}
                className="rounded-2xl bg-white p-5 ring-1 ring-inset ring-ink-100 shadow-card"
              >
                <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ocean-700">{a.title}</div>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-400">{a.short}</p>
              </RevealItem>
            ))}
          </RevealList>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
