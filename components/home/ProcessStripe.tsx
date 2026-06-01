import { Container } from "@/components/site/Container";
import { Reveal, RevealList, RevealItem } from "@/components/motion/Reveal";
import { PROCESS_STEPS } from "@/lib/content/process";

export function ProcessStripe() {
  return (
    <section className="relative py-24 sm:py-28">
      <Container>
        <div className="mb-12 grid items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-300">
                The Velnox Process
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-display-lg text-white text-balance">
                A documented lifecycle from feasibility to archival.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={0.1} direction="left">
              <p className="text-[14.5px] text-graphite-200">
                Six steps, each backed by a SOP and an accountable owner. No ad-hoc, no
                undocumented hand-offs.
              </p>
            </Reveal>
          </div>
        </div>

        <RevealList className="relative grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-6">
          {PROCESS_STEPS.map((s, i) => (
            <RevealItem key={s.step}>
              <div className="group relative h-full overflow-hidden rounded-2xl bg-graphite-900/60 p-5 ring-1 ring-inset ring-white/5 transition-all duration-300 hover:bg-graphite-900 hover:ring-teal-400/30">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-display text-[10.5px] font-semibold uppercase tracking-[0.18em] text-graphite-300">
                    Step {String(s.step).padStart(2, "0")}
                  </span>
                  <span className="text-[10.5px] tabular text-graphite-400">{s.sop}</span>
                </div>
                <div className="text-[15px] font-semibold leading-tight text-white">{s.title}</div>
                <div className="mt-2 text-[12.5px] leading-relaxed text-graphite-200">{s.note}</div>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                {i < PROCESS_STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-0 top-1/2 hidden h-[1px] w-3 -translate-y-1/2 translate-x-3 bg-gradient-to-r from-white/20 to-transparent lg:block"
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
