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
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(45,212,191,0.10),transparent_70%)]"
      />
      <Container className="relative pb-16 pt-12 sm:pt-20 lg:pt-24">
        <Reveal>
          <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-300">
            {eyebrow}
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-display-xl font-semibold tracking-tightest text-white text-balance max-w-4xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-3xl text-[16.5px] leading-relaxed text-graphite-200 text-pretty">
              {intro}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
