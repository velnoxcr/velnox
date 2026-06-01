import { Container } from "@/components/site/Container";
import { Reveal, RevealList, RevealItem } from "@/components/motion/Reveal";
import { TRUST_STATS } from "@/lib/content/stats";

export function StatBand() {
  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <RevealList className="grid gap-px overflow-hidden rounded-2xl bg-white/5 ring-1 ring-inset ring-white/10 sm:grid-cols-3">
          {TRUST_STATS.map((s) => (
            <RevealItem key={s.label} className="bg-graphite-900/80">
              <div className="p-7 sm:p-8">
                <div className="font-display tabular text-[28px] font-semibold text-white sm:text-[32px]">
                  {s.value}
                </div>
                <div className="mt-1 text-[13.5px] uppercase tracking-[0.12em] text-graphite-100">
                  {s.label}
                </div>
                <div className="mt-3 text-[13px] leading-relaxed text-graphite-200">
                  {s.note}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealList>
      </Container>
    </section>
  );
}
