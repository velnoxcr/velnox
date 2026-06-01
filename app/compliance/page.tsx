import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { TocRail } from "@/components/compliance/TocRail";
import { COMPLIANCE_ANCHORS, STANDARDS } from "@/lib/content/compliance";
import { CtaBand } from "@/components/home/CtaBand";
import { Download, ShieldCheck, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Compliance & Quality",
  description:
    "How Velnox stays audit-ready — ICH-GCP, NDCT Rules 2019, NABL/CAP-aligned labs, 24-hour SAE workflow, controlled archival.",
};

export default function CompliancePage() {
  const tocItems = COMPLIANCE_ANCHORS.map((a) => ({ id: a.id, title: a.title }));
  return (
    <>
      <PageHero
        eyebrow="Compliance & Quality"
        title="How Velnox stays audit-ready."
        intro="The standards we operate under, and the policies we live by. This page consolidates Velnox's compliance posture — sponsor procurement teams can read top to bottom, or jump to the anchor they need."
      />

      <section className="py-12">
        <Container>
          <Reveal>
            <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-300">
              Standards we operate under
            </div>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {STANDARDS.map((s) => (
              <div
                key={s.label}
                className="flex items-start gap-3 rounded-xl bg-graphite-900/60 p-4 ring-1 ring-inset ring-white/5"
              >
                <ShieldCheck size={18} className="mt-0.5 shrink-0 text-teal-400" strokeWidth={1.8} />
                <div>
                  <div className="text-[13.5px] font-medium text-white">{s.label}</div>
                  <div className="mt-1 text-[12px] leading-snug text-graphite-300">{s.note}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-10 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <TocRail items={tocItems} />
          </aside>

          <div className="lg:col-span-9">
            {COMPLIANCE_ANCHORS.map((a) => (
              <article
                key={a.id}
                id={a.id}
                className="scroll-mt-24 border-b border-white/5 py-10 first:pt-0 last:border-b-0"
              >
                <Reveal>
                  <div className="flex flex-wrap items-center gap-3">
                    {a.id === "sae-workflow" && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-amber-300 ring-1 ring-inset ring-amber-500/30">
                        <AlertTriangle size={11} /> Pharmacovigilance
                      </span>
                    )}
                    {a.sopRef && !a.id.startsWith("sae") && (
                      <span className="text-[10.5px] uppercase tracking-[0.14em] text-graphite-300">
                        {a.sopRef}
                      </span>
                    )}
                  </div>
                </Reveal>
                <Reveal delay={0.04}>
                  <h2 className="mt-3 font-display text-display-md text-white text-balance">
                    {a.title}
                  </h2>
                </Reveal>
                <Reveal delay={0.08}>
                  <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-graphite-100">{a.lede}</p>
                </Reveal>
                <Reveal delay={0.12}>
                  <ul className="mt-5 grid gap-2 text-[14px] text-graphite-200">
                    {a.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400/80" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
                {a.id === "sae-workflow" && a.sopRef && (
                  <Reveal delay={0.18}>
                    <div className="mt-6 rounded-xl bg-amber-500/[0.06] p-4 ring-1 ring-inset ring-amber-500/25">
                      <div className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-amber-300">
                        {a.sopRef}
                      </div>
                      <p className="mt-1 text-[13px] leading-relaxed text-graphite-100">
                        Velnox&apos;s PV hotline is a real number staffed 24×7 by the
                        pharmacovigilance team. Sponsors and investigators can verify the line at
                        the start of every engagement.
                      </p>
                    </div>
                  </Reveal>
                )}
              </article>
            ))}

            <Reveal>
              <div className="mt-10 flex flex-wrap items-center gap-3 rounded-2xl bg-graphite-900/60 p-6 ring-1 ring-inset ring-white/5">
                <Download size={18} className="text-teal-300" strokeWidth={1.8} />
                <div className="flex-1">
                  <div className="text-[14px] font-medium text-white">Compliance One-Pager</div>
                  <div className="text-[12.5px] text-graphite-300">
                    For sponsor procurement teams to forward internally. PDF download — available on request.
                  </div>
                </div>
                <Button href="/contact?intent=compliance-pdf" variant="secondary" size="sm">
                  Request PDF
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Get started"
        headline="Sponsor procurement evaluating Velnox? We&apos;ll walk you through the audit pack."
        sub="Confidentiality SOP, SAE workflow, archival policy, and laboratory accreditation — under NDA where required."
      />
    </>
  );
}
