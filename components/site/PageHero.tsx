import { Container } from "./Container";
import { Reveal } from "@/components/motion/Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ocean-soft">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-radial-ocean"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_-10%,rgba(13,148,136,0.12),transparent_55%)]"
      />
      <Container className="relative pb-20 pt-16 sm:pt-24 lg:pt-28">
        <Reveal>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-ocean-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-800 ring-1 ring-inset ring-ocean-200">
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-ocean-600" />
            {eyebrow}
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-display-xl font-semibold tracking-tightest text-ink-700 text-balance max-w-4xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-3xl text-[16.5px] leading-relaxed text-ink-400 text-pretty">
              {intro}
            </p>
          </Reveal>
        )}
      </Container>
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ocean-200 to-transparent" />
    </section>
  );
}
