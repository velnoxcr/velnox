"use client";

import { useMemo, useState } from "react";
import { CAPABILITIES, CAPABILITY_CATEGORIES, type CapabilityCategory } from "@/lib/content/capabilities";
import { CAPABILITY_IMAGERY } from "@/lib/content/assets";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils/cn";

export function CapabilityFilter() {
  const [active, setActive] = useState<CapabilityCategory | "All">("All");

  const items = useMemo(
    () => (active === "All" ? CAPABILITIES : CAPABILITIES.filter((c) => c.category === active)),
    [active],
  );

  return (
    <div>
      <div className="sticky top-20 z-30 -mx-1 mb-8 flex flex-wrap items-center gap-2 rounded-2xl bg-white/85 px-2 py-2 ring-1 ring-inset ring-ink-100 backdrop-blur-md shadow-card">
        <Chip label="All" active={active === "All"} onClick={() => setActive("All")} />
        {CAPABILITY_CATEGORIES.map((c) => (
          <Chip key={c} label={c} active={active === c} onClick={() => setActive(c)} />
        ))}
        <div className="ml-auto hidden text-[11.5px] uppercase tracking-[0.12em] text-ink-400 sm:block">
          {items.length} of {CAPABILITIES.length} capabilities
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c) => (
          <article
            key={c.slug}
            id={c.slug}
            className="group relative scroll-mt-24 overflow-hidden rounded-2xl bg-white ring-1 ring-inset ring-ink-100 shadow-card transition-all duration-300 hover:shadow-cardHover hover:ring-ocean-200 hover:-translate-y-1"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img
                src={CAPABILITY_IMAGERY[c.slug]}
                alt={c.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-900/65 via-ink-900/15 to-transparent" />
              <div className="absolute left-4 top-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ocean-800 backdrop-blur">
                  {c.category}
                </span>
              </div>
              <div className="absolute left-4 bottom-4 flex items-center gap-2">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-ocean-gradient text-white shadow-oceanGlow">
                  <Icon name={c.icon} size={18} />
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-[16.5px] font-semibold leading-tight text-ink-700">
                {c.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-400">{c.short}</p>
              <ul className="mt-4 space-y-1.5 text-[12.5px] text-ink-500">
                {c.details.slice(0, 3).map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span aria-hidden className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-ocean-600" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4 text-[11.5px] uppercase tracking-[0.12em] text-ink-300">
                <span className="font-semibold tabular text-ocean-700">{c.sopRef}</span>
                <span>{c.details.length} touchpoints</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold transition-colors",
        active
          ? "bg-ocean-gradient text-white shadow-oceanGlow"
          : "bg-transparent text-ink-500 hover:bg-ocean-50 hover:text-ocean-800",
      )}
    >
      {label}
    </button>
  );
}
