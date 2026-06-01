import { Container } from "@/components/site/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ParticleField } from "@/components/motion/ParticleField";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-radial-teal" />
      <ParticleField className="absolute inset-0 h-full w-full" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-teal-400/40 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(11,15,18,0.75)_85%,#0B0F12_100%)]"
      />

      <Container className="relative grid min-h-[78vh] grid-cols-1 items-center gap-12 pb-24 pt-12 lg:grid-cols-12 lg:pb-32 lg:pt-20">
        <div className="lg:col-span-7 xl:col-span-8">
          <Reveal>
            <Badge tone="teal" className="mb-6">
              <span aria-hidden className="inline-block h-1.5 w-1.5 animate-pulse-slow rounded-full bg-teal-300" />
              Now accepting feasibility requests
            </Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display text-display-xl font-semibold tracking-tightest text-white text-balance">
              Precision Clinical Research,
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-teal-200 via-teal-300 to-teal-100 bg-clip-text text-transparent">
                {" "}Engineered for India.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-graphite-100 text-pretty sm:text-[17px]">
              Velnox Clinical Research and Solutions is a next-generation CRO / SMO delivering
              ICH-GCP&nbsp;–&nbsp;compliant trials across therapeutic areas — with audit-ready
              operations from feasibility to archival.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="/contact?intent=feasibility" size="lg">
                Request Feasibility
                <ArrowRight size={16} />
              </Button>
              <Button href="/capabilities" size="lg" variant="secondary">
                Explore Capabilities
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-3 text-[12.5px] uppercase tracking-[0.14em] text-graphite-300 sm:flex sm:flex-wrap sm:items-center">
              {[
                "ICH-GCP",
                "NDCT Rules 2019",
                "NABL / CAP-aligned",
                "5-yr Archival",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <ShieldCheck size={13} className="text-teal-400" strokeWidth={2} />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.25} direction="left" className="lg:col-span-5 xl:col-span-4">
          <HeroPanel />
        </Reveal>
      </Container>
    </section>
  );
}

function HeroPanel() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-px rounded-3xl bg-gradient-to-br from-teal-400/30 via-white/5 to-amber-500/15 opacity-70 blur-[1.5px]"
      />
      <div className="relative overflow-hidden rounded-3xl bg-graphite-900/80 ring-1 ring-inset ring-white/10 shadow-elev backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-teal-400" />
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-graphite-200">
              Trial Lifecycle
            </span>
          </div>
          <span className="text-[11px] tabular text-graphite-300">SOP-mapped</span>
        </div>

        <ol className="divide-y divide-white/5">
          {[
            { n: "01", label: "Feasibility", note: "Confidential · 7 days", sop: "SOP 3" },
            { n: "02", label: "Site Activation", note: "ISF & EC dossier", sop: "SOP 2 · 5" },
            { n: "03", label: "SIV & Enrolment", note: "AV consent · NDCT 2019", sop: "SOP 6 · 9" },
            { n: "04", label: "Conduct & Monitoring", note: "Source-supported", sop: "SOP 11 · 17" },
            { n: "05", label: "Safety", note: "24-hr SAE escalation", sop: "SOP 21", accent: true as const },
            { n: "06", label: "Close-out & Archival", note: "5+ yr retention", sop: "SOP 25" },
          ].map((step) => (
            <li
              key={step.n}
              className="flex items-center gap-4 px-5 py-3.5"
            >
              <span className="font-display tabular text-[12px] text-graphite-300 w-7">{step.n}</span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[13.5px] font-medium text-white">{step.label}</span>
                  {step.accent && (
                    <span className="rounded-full bg-amber-500/15 px-1.5 py-0.5 text-[9.5px] font-semibold uppercase tracking-[0.14em] text-amber-300 ring-1 ring-inset ring-amber-500/30">
                      PV
                    </span>
                  )}
                </div>
                <div className="text-[12px] text-graphite-300">{step.note}</div>
              </div>
              <span className="hidden sm:inline-flex text-[11px] tabular text-graphite-400">{step.sop}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
