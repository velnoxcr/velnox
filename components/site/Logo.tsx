import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export function Logo({ className, onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <Link href="/" aria-label="Velnox — home" className={cn("group inline-flex items-center gap-2.5", className)}>
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-ocean-gradient shadow-oceanGlow">
        <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 4l5.5 14h2L16 6" />
          <path d="M14 14h7" />
          <path d="M17.5 10.5l3.5 3.5-3.5 3.5" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn(
          "font-display text-[16px] font-semibold tracking-tightest",
          onDark ? "text-white" : "text-ink-700"
        )}>
          Velnox
        </span>
        <span className={cn(
          "mt-0.5 text-[9.5px] uppercase tracking-[0.24em]",
          onDark ? "text-white/70" : "text-ink-300"
        )}>
          Clinical Research
        </span>
      </span>
    </Link>
  );
}
