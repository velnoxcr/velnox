import { Container } from "@/components/site/Container";
import { Marquee } from "@/components/motion/Marquee";
import { MARQUEE_CHIPS } from "@/lib/content/experience";
import { Reveal } from "@/components/motion/Reveal";

export function MarqueeChips() {
  const items = MARQUEE_CHIPS.map((label, i) => (
    <span
      key={`${label}-${i}`}
      className="inline-flex items-center gap-2 rounded-full bg-graphite-800/70 px-4 py-2 text-[13px] text-graphite-100 ring-1 ring-inset ring-white/10"
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-400/80" />
      {label}
    </span>
  ));

  return (
    <section className="relative py-12">
      <Container>
        <Reveal>
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-graphite-300">
              Therapeutic & Study-Type Coverage
            </div>
            <div className="hidden text-[12px] text-graphite-300 sm:block">paused on hover</div>
          </div>
        </Reveal>
      </Container>
      <Marquee items={items} className="px-0" />
    </section>
  );
}
