import { Container } from "@/components/site/Container";
import { Reveal, RevealList, RevealItem } from "@/components/motion/Reveal";
import { PROCESS_STEPS } from "@/lib/content/process";

export function ProcessStripe() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(30,64,175,0.06),transparent_70%)]" />
      <Container>
        <div className="mb-14 grid items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-ocean-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ocean-800 ring-1 ring-inset ring-ocean-200">
                <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-ocean-600" />
                The Velnox Process
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-display-lg font-semibold tracking-tightest text-ink-700 text-balance">
                Simple steps to get our services.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={0.1} direction="left">
              <p className="text-[14.5px] text-ink-400">
                Six clearly-defined steps from confidential feasibility to controlled archival —
                each owned by a documented SOP.
              </p>
            </Reveal>
          </div>
        </div>

        <RevealList className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
          {PROCESS_STEPS.map((s, i) => (
            <RevealItem key={s.step}>
              <div className="group relative h-full rounded-2xl bg-white p-5 ring-1 ring-inset ring-ink-100 shadow-card transition-all duration-300 hover:shadow-cardHover hover:ring-ocean-200 hover:-translate-y-1">
                {/* Hexagon-style step number */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="relative grid h-12 w-12 place-items-center">
                    <span aria-hidden className="absolute inset-0 rounded-2xl bg-ocean-gradient opacity-10" />
                    <span aria-hidden className="absolute inset-0 rounded-2xl bg-ocean-gradient opacity-100" />
                    <span className="relative font-display tabular text-[15px] font-bold text-white">
                      {String(s.step).padStart(2, "0")}
                    </span>
                  </span>
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em] tabular text-ink-300">{s.sop}</span>
                </div>
                <div className="font-display text-[15.5px] font-semibold leading-tight text-ink-700">{s.title}</div>
                <div className="mt-2 text-[12.5px] leading-relaxed text-ink-400">{s.note}</div>

                {/* Connecting line on large screens */}
                {i < PROCESS_STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-[-20px] top-9 hidden h-[2px] w-5 bg-gradient-to-r from-ocean-300/70 to-transparent lg:block"
                  />
                )}
              </div>
            </RevealItem>
          ))}
        </RevealList>
      </Container>
    </section>
  );
}
