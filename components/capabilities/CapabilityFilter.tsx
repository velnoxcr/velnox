"use client";

import { useMemo, useState } from "react";
import { CAPABILITIES, CAPABILITY_CATEGORIES, type CapabilityCategory } from "@/lib/content/capabilities";
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
      <div className="sticky top-16 z-30 -mx-1 mb-8 flex flex-wrap items-center gap-2 rounded-2xl bg-graphite-900/70 px-2 py-2 ring-1 ring-inset ring-white/5 backdrop-blur-md sm:top-20">
        <Chip label="All" active={active === "All"} onClick={() => setActive("All")} />
        {CAPABILITY_CATEGORIES.map((c) => (
          <Chip key={c} label={c} active={active === c} onClick={() => setActive(c)} />
        ))}
        <div className="ml-auto hidden text-[11.5px] uppercase tracking-[0.12em] text-graphite-300 sm:block">
          {items.length} of {CAPABILITIES.length} capabilities
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c) => (
          <article
            key={c.slug}
            id={c.slug}
            className="group relative scroll-mt-24 overflow-hidden rounded-2xl bg-graphite-900/60 p-6 ring-1 ring-inset ring-white/5 transition-all duration-300 hover:bg-graphite-900 hover:ring-teal-400/30 hover:-translate-y-0.5"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="flex items-start justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-400/10 text-teal-300 ring-1 ring-inset ring-teal-400/30">
                <Icon name={c.icon} size={20} />
              </span>
              <span className="text-[10.5px] uppercase tracking-[0.14em] text-graphite-300">
                {c.category}
              </span>
            </div>
            <h3 className="mt-5 font-display text-[17px] font-semibold leading-tight text-white">
              {c.title}
            </h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-graphite-200">{c.short}</p>
            <ul className="mt-4 space-y-1.5 text-[12.5px] text-graphite-200">
              {c.details.slice(0, 3).map((d) => (
                <li key={d} className="flex items-start gap-2">
                  <span aria-hidden className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-teal-400/70" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4 text-[11.5px] uppercase tracking-[0.12em] text-graphite-300">
              <span>{c.sopRef}</span>
              <span className="text-teal-300">{c.details.length} touchpoints</span>
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
        "rounded-full px-3.5 py-1.5 text-[12.5px] font-medium transition-colors",
        active
          ? "bg-teal-400 text-graphite-950"
          : "bg-transparent text-graphite-200 hover:bg-white/5 hover:text-white",
      )}
    >
      {label}
    </button>
  );
}
