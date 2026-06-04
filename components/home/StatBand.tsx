"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/motion/Reveal";

const STATS = [
  { value: 80,  suffix: "+", label: "Investigators in network", note: "Across primary and adjacent therapeutic areas." },
  { value: 28,  suffix: "+", label: "Active site partners",      note: "NABL / CAP-aligned laboratory infrastructure." },
  { value: 650, suffix: "+", label: "Patients reached",          note: "Under documented informed-consent workflows." },
  { value: 25,  suffix: "+", label: "SOP modules deployed",      note: "Feasibility through archival — every step." },
];

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setVal(to); return; }

    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return;
      started.current = true;

      const duration = 1500;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(to * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });

    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

export function StatBand() {
  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ocean-gradient p-10 sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-25"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.45) 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            <div aria-hidden className="pointer-events-none absolute -top-32 -right-20 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />

            <div className="relative grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="text-white">
                  <div className="font-display tabular text-[44px] font-bold leading-none sm:text-[56px]">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-3 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-teal-200">
                    {s.label}
                  </div>
                  <div className="mt-2 text-[12.5px] leading-relaxed text-white/75">{s.note}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
