import { Container } from "@/components/site/Container";
import { Reveal, RevealList, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { WHY_VELNOX } from "@/lib/content/whyVelnox";

export function WhyVelnox() {
  return (
    <section className="relative py-24 sm:py-28">
      <Container>
        <div className="mb-12 max-w-3xl">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-ocean-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ocean-800 ring-1 ring-inset ring-ocean-200">
              <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-ocean-600" />
              Why choose Velnox
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-display-lg font-semibold tracking-tightest text-ink-700 text-balance">
              Eight reasons sponsors choose <span className="ocean-text-gradient">Velnox</span>.
            </h2>
          </Reveal>
        </div>

        <RevealList className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_VELNOX.map((w) => (
            <RevealItem key={w.title}>
              <div className="group relative h-full rounded-2xl bg-white p-6 ring-1 ring-inset ring-ink-100 shadow-card transition-all duration-300 hover:shadow-cardHover hover:ring-ocean-200 hover:-translate-y-1">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-ocean-gradient text-white shadow-oceanGlow">
                  <Icon name={w.icon} size={20} />
                </span>
                <div className="mt-5 font-display text-[15.5px] font-semibold leading-tight text-ink-700">
                  {w.title}
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-400">{w.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealList>
      </Container>
    </section>
  );
}
