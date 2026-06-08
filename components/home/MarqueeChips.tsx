import { Container } from "@/components/site/Container";
import { Marquee } from "@/components/motion/Marquee";
import { MARQUEE_CHIPS } from "@/lib/content/experience";
import { Reveal } from "@/components/motion/Reveal";

export function MarqueeChips() {
  const items = MARQUEE_CHIPS.map((label, i) => (
    <span
      key={`${label}-${i}`}
      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-medium text-ink-700 ring-1 ring-inset ring-ink-100 shadow-card"
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-ocean-600" />
      {label}
    </span>
  ));

  return (
    <section className="relative py-12">
      <Container>
        <Reveal>
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-ocean-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ocean-800 ring-1 ring-inset ring-ocean-200">
              <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-ocean-600" />
              Therapeutic Expertise
            </div>
            <div className="hidden text-[12px] text-ink-300 sm:block">paused on hover</div>
          </div>
        </Reveal>
      </Container>
      <Marquee items={items} className="px-0" />
    </section>
  );
}
