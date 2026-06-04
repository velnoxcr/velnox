import { cn } from "@/lib/utils/cn";

type Tone = "neutral" | "ocean" | "teal" | "amber" | "white";

const TONE: Record<Tone, string> = {
  neutral: "bg-ink-50 text-ink-500 ring-1 ring-inset ring-ink-100",
  ocean:   "bg-ocean-50 text-ocean-800 ring-1 ring-inset ring-ocean-200",
  teal:    "bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-200",
  amber:   "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200",
  white:   "bg-white/15 text-white ring-1 ring-inset ring-white/25",
};

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em]",
        TONE[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
