import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, RevealList, RevealItem } from "@/components/motion/Reveal";
import { LeadershipCard } from "@/components/about/LeadershipCard";
import { CtaBand } from "@/components/home/CtaBand";
import { LEADERSHIP, FOUNDER } from "@/lib/content/leadership";
import { PRESENCE } from "@/lib/content/presence";
import { COMPANY } from "@/lib/content/nav";
import { MapPin, Compass, Target, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "About Velnox",
  description:
    "Velnox Clinical Research & Solutions is a Clinical Research Service Organisation (SMO/CRSO) founded to strengthen India's clinical research ecosystem.",
};

export default function AboutPage() {
  const others = LEADERSHIP.filter((l) => l.name !== FOUNDER.name);

  return (
    <>
      <PageHero
        eyebrow="About Velnox"
        title="A Clinical Research Service Organisation built to strengthen India's research ecosystem."
        intro={`${COMPANY.legalName} is a Clinical Research Service Organisation (${COMPANY.organisationType}) dedicated to supporting Sponsors, CROs, Hospitals, Investigators, Pharmaceutical and Medical Device companies, and Academic Researchers — with end-to-end clinical research solutions across India.`}
      />

      <section id="story" className="scroll-mt-24 py-16">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-display-md font-semibold text-ink-700">Our story</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-5 text-[15.5px] leading-relaxed text-ink-500">
                Velnox was founded with a vision to strengthen clinical research infrastructure and create a
                collaborative ecosystem connecting sponsors, CROs, investigators, hospitals and patients. We provide
                ethical, compliant and quality-focused clinical research services while supporting innovation in
                healthcare.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-4 text-[15.5px] leading-relaxed text-ink-500">
                From our head office in Pollachi and operational site in Mysuru, Velnox supports trials across Phase
                I through Phase IV — and post-marketing studies — for sponsors who need a disciplined, accountable
                clinical research partner in India.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal direction="left">
              <div className="grid gap-4">
                <div className="rounded-2xl bg-white p-6 ring-1 ring-inset ring-ink-100 shadow-card">
                  <div className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ocean-700">
                    <Compass size={14} strokeWidth={2.2} /> Vision
                  </div>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500">
                    To become a trusted and leading clinical research partner delivering innovative, ethical and
                    high-quality research solutions across India and beyond.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-6 ring-1 ring-inset ring-ink-100 shadow-card">
                  <div className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ocean-700">
                    <Target size={14} strokeWidth={2.2} /> Mission
                  </div>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500">
                    To accelerate clinical research by connecting sponsors, CROs, investigators, healthcare
                    institutions and patients through excellence, integrity, innovation, collaboration and quality.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="presence" className="scroll-mt-24 bg-paper-100 py-16">
        <Container>
          <Reveal>
            <h2 className="font-display text-display-md font-semibold text-ink-700">Our presence — Pollachi & Mysuru</h2>
          </Reveal>
          <RevealList className="mt-8 grid gap-6 md:grid-cols-2">
            {PRESENCE.map((p) => (
              <RevealItem key={p.city}>
                <div className="relative h-full overflow-hidden rounded-3xl bg-white p-7 ring-1 ring-inset ring-ink-100 shadow-card">
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ocean-gradient text-white shadow-oceanGlow">
                      <MapPin size={20} strokeWidth={1.8} />
                    </span>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-700">{p.label}</div>
                      <div className="mt-1 font-display text-[22px] font-semibold text-ink-700">{p.city}, {p.state}</div>
                      <div className="text-[12.5px] text-ink-400">{p.country}</div>
                    </div>
                  </div>
                  <p className="mt-5 text-[14px] leading-relaxed text-ink-500">{p.description}</p>
                  <ul className="mt-5 grid gap-2 text-[13.5px] text-ink-600">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5">
                        <span aria-hidden className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-ocean-600" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            ))}
          </RevealList>
        </Container>
      </section>

      <section id="leadership" className="scroll-mt-24 py-16">
        <Container>
          <Reveal>
            <h2 className="font-display text-display-md font-semibold text-ink-700">Founder & Managing Director</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-3 max-w-3xl text-[14.5px] text-ink-400">
              Velnox is founded and led by a Clinical Research Professional with extensive operational and
              regulatory experience across multiple therapeutic areas.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 max-w-3xl">
              <LeadershipCard leader={FOUNDER} featured />
            </div>
          </Reveal>

          <Reveal>
            <h3 className="mt-16 font-display text-display-md font-semibold text-ink-700">Leadership team</h3>
          </Reveal>
          <RevealList className="mt-8 grid gap-5 md:grid-cols-2">
            {others.map((l) => (
              <RevealItem key={l.name}>
                <LeadershipCard leader={l} />
              </RevealItem>
            ))}
          </RevealList>
        </Container>
      </section>

      <section className="bg-paper-100 py-16">
        <Container>
          <Reveal>
            <div className="rounded-3xl bg-white p-8 ring-1 ring-inset ring-ink-100 shadow-card lg:p-10">
              <div className="flex items-center gap-3">
                <HeartHandshake size={22} className="text-ocean-700" strokeWidth={2} />
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-700">
                  Partnership message
                </div>
              </div>
              <p className="mt-4 max-w-3xl text-[15.5px] leading-relaxed text-ink-500">
                Velnox is happy to collaborate with Sponsors, CROs, Hospitals, Investigators, Academic Institutions
                and Healthcare Organisations across India and globally. We believe that strong partnerships are the
                foundation of successful clinical research and improved patient outcomes.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
