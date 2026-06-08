"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/home/CtaBand";
import { Reveal, RevealList, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { SERVICES, SERVICE_GROUPS } from "@/lib/content/services";
import { CORE_COMPETENCIES } from "@/lib/content/competencies";
import { THERAPEUTIC_EXPERTISE } from "@/lib/content/experience";
import { cn } from "@/lib/utils/cn";

export default function ServicesPage() {
  const [active, setActive] = useState<(typeof SERVICE_GROUPS)[number] | "All">("All");

  const items = useMemo(
    () => (active === "All" ? SERVICES : SERVICES.filter((s) => s.group === active)),
    [active],
  );

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="End-to-end clinical research services."
        intro="Velnox delivers thirteen integrated services covering the full clinical research lifecycle — from feasibility through close-out. Filter by group to see the services that apply to your stage."
      />

      <section className="py-12">
        <Container>
          <div className="sticky top-20 z-30 -mx-1 mb-8 flex flex-wrap items-center gap-2 rounded-2xl bg-white/85 px-2 py-2 ring-1 ring-inset ring-ink-100 backdrop-blur-md shadow-card">
            <Chip label="All services" active={active === "All"} onClick={() => setActive("All")} />
            {SERVICE_GROUPS.map((g) => (
              <Chip key={g} label={g} active={active === g} onClick={() => setActive(g)} />
            ))}
            <div className="ml-auto hidden text-[11.5px] uppercase tracking-[0.12em] text-ink-400 sm:block">
              {items.length} of {SERVICES.length} services
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((s) => (
              <article
                key={s.slug}
                id={s.slug}
                className="group relative scroll-mt-24 overflow-hidden rounded-2xl bg-white ring-1 ring-inset ring-ink-100 shadow-card transition-all duration-300 hover:shadow-cardHover hover:ring-ocean-200 hover:-translate-y-1"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ocean-300/40 to-transparent"
                />
                <div className="p-7">
                  <div className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-ocean-gradient text-white shadow-oceanGlow">
                      <Icon name={s.icon} size={20} />
                    </span>
                    <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ocean-700">
                      {s.group}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-[17px] font-semibold leading-tight text-ink-700">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-400">{s.short}</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-ink-500">{s.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper-100 py-16">
        <Container>
          <Reveal>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-ocean-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ocean-800 ring-1 ring-inset ring-ocean-200">
              <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-ocean-600" />
              Core competencies
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-display-md font-semibold text-ink-700 text-balance">
              The twelve competencies our team operates across.
            </h2>
          </Reveal>
          <RevealList className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_COMPETENCIES.map((c) => (
              <RevealItem
                key={c}
                className="flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-inset ring-ink-100 shadow-card"
              >
                <span aria-hidden className="inline-block h-2 w-2 shrink-0 rounded-full bg-ocean-gradient" />
                <span className="text-[14px] font-medium text-ink-700">{c}</span>
              </RevealItem>
            ))}
          </RevealList>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Reveal>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-ocean-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ocean-800 ring-1 ring-inset ring-ocean-200">
              <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-ocean-600" />
              Therapeutic expertise
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-display-md font-semibold text-ink-700 text-balance">
              Twelve therapeutic areas Velnox is built to handle.
            </h2>
          </Reveal>
          <RevealList className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {THERAPEUTIC_EXPERTISE.map((ta) => (
              <RevealItem
                key={ta}
                className="rounded-2xl bg-white p-5 ring-1 ring-inset ring-ink-100 shadow-card"
              >
                <div className="text-[14.5px] font-semibold text-ink-700">{ta}</div>
              </RevealItem>
            ))}
          </RevealList>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold transition-colors",
        active ? "bg-ocean-gradient text-white shadow-oceanGlow" : "bg-transparent text-ink-500 hover:bg-ocean-50 hover:text-ocean-800",
      )}
    >
      {label}
    </button>
  );
}
