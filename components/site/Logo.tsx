import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export function Logo({ className, dim = false }: { className?: string; dim?: boolean }) {
  return (
    <Link href="/" aria-label="Velnox — home" className={cn("group inline-flex items-center gap-2.5", className)}>
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-teal-400/90 via-teal-500/80 to-teal-700/80 ring-1 ring-inset ring-white/15 shadow-[0_4px_14px_-6px_rgba(45,212,191,0.7)]">
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-graphite-950" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 4l5.5 14h2L16 6" />
          <path d="M14 14h7" />
          <path d="M17.5 10.5l3.5 3.5-3.5 3.5" />
        </svg>
        <span aria-hidden className="absolute inset-0 rounded-lg ring-1 ring-teal-300/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-[15px] font-semibold tracking-tightest", dim ? "text-graphite-100" : "text-white")}>
          Velnox
        </span>
        <span className="mt-0.5 text-[10px] uppercase tracking-[0.22em] text-graphite-300">
          Clinical Research
        </span>
      </span>
    </Link>
  );
}
