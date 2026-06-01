import { cn } from "@/lib/utils/cn";

type Tone = "neutral" | "teal" | "amber";

const TONE: Record<Tone, string> = {
  neutral: "bg-white/5 text-graphite-100 ring-1 ring-inset ring-white/10",
  teal: "bg-teal-400/10 text-teal-300 ring-1 ring-inset ring-teal-400/30",
  amber: "bg-amber-500/10 text-amber-300 ring-1 ring-inset ring-amber-500/30",
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
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em]",
        TONE[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
