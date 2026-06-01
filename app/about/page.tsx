import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, RevealList, RevealItem } from "@/components/motion/Reveal";
import { LeadershipCard } from "@/components/about/LeadershipCard";
import { CtaBand } from "@/components/home/CtaBand";
import { LEADERSHIP } from "@/lib/content/leadership";
import { AUDIENCES } from "@/lib/content/audiences";
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
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-display-md text-white">Our story</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-5 text-[15px] leading-relaxed text-graphite-200">
                India needs CRO and SMO partners who treat SOP discipline as a product — not as
                paperwork dusted off before an audit. Velnox was built around a written trial
                lifecycle: every step (feasibility, site activation, consent, conduct, monitoring,
                pharmacovigilance, archival) has a documented SOP and a named owner.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-4 text-[15px] leading-relaxed text-graphite-200">
                That discipline shows up in three ways sponsors notice: faster site activation,
                cleaner monitoring visits, and audit findings closed before they escalate.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal direction="left">
              <div className="rounded-2xl bg-graphite-900/60 p-7 ring-1 ring-inset ring-white/5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-300">
                  Vision
                </div>
                <p className="mt-3 font-display text-[19px] leading-snug text-white text-balance">
                  To be India&apos;s most audit-ready CRO/SMO partner — the one sponsors choose
                  when the trial cannot afford a finding.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Reveal>
            <h2 className="font-display text-display-md text-white">Mission</h2>
          </Reveal>
          <RevealList className="mt-8 grid gap-4 md:grid-cols-3">
            {MISSION.map((m, i) => (
              <RevealItem
                key={i}
                className="relative rounded-2xl bg-graphite-900/60 p-6 ring-1 ring-inset ring-white/5"
              >
                <div className="mb-3 font-display tabular text-[12px] font-semibold uppercase tracking-[0.18em] text-graphite-300">
                  M.{String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-[14.5px] leading-relaxed text-graphite-100">{m}</p>
              </RevealItem>
            ))}
          </RevealList>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Reveal>
            <h2 className="font-display text-display-md text-white">Operating principles</h2>
          </Reveal>
          <RevealList className="mt-8 grid gap-4 md:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <RevealItem
                key={p.title}
                className="flex items-start gap-4 rounded-2xl bg-graphite-900/60 p-6 ring-1 ring-inset ring-white/5"
              >
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-teal-400" strokeWidth={1.8} />
                <div>
                  <div className="font-display text-[15.5px] font-semibold text-white">{p.title}</div>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-graphite-200">{p.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealList>
        </Container>
      </section>

      <section id="leadership" className="py-16 scroll-mt-24">
        <Container>
          <Reveal>
            <h2 className="font-display text-display-md text-white">Leadership</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-3 max-w-2xl text-[14.5px] text-graphite-200">
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
                className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-teal-300 hover:text-teal-200"
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
            <h2 className="font-display text-display-md text-white">Who we serve</h2>
          </Reveal>
          <RevealList className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AUDIENCES.filter((a) => a.tier === "primary").map((a) => (
              <RevealItem
                key={a.slug}
                className="rounded-2xl bg-graphite-900/60 p-5 ring-1 ring-inset ring-white/5"
              >
                <div className="text-[12px] uppercase tracking-[0.12em] text-teal-300">{a.title}</div>
                <p className="mt-2 text-[13.5px] leading-relaxed text-graphite-200">{a.short}</p>
              </RevealItem>
            ))}
          </RevealList>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
