import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, RevealList, RevealItem } from "@/components/motion/Reveal";
import { Card, CardBody } from "@/components/ui/Card";
import { ADVISORY_COMMITTEE } from "@/lib/content/leadership";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata: Metadata = {
  title: "Scientific & Advisory Committee",
  description:
    "The senior clinicians, regulatory experts and operations veterans who guide Velnox's scientific direction.",
};

export default function AdvisoryPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Scientific & Advisory Committee"
        intro="Senior clinicians, regulatory experts and operations veterans who guide Velnox's policy and scientific direction. The committee advises on scientific quality, regulatory posture and ethical conduct — and does not have access to sponsor-confidential trial data unless explicitly engaged under NDA per Velnox's Confidentiality SOP."
      />

      <section className="py-16">
        <Container>
          <RevealList className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ADVISORY_COMMITTEE.map((a) => (
              <RevealItem key={a.name}>
                <Card>
                  <CardBody>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-700">
                      {a.specialty}
                    </div>
                    <div className="mt-3 font-display text-[17px] font-semibold text-ink-700">{a.name}</div>
                    <div className="mt-0.5 text-[12.5px] uppercase tracking-[0.1em] text-ink-400">
                      {a.role}
                    </div>
                    <p className="mt-4 text-[13.5px] leading-relaxed text-ink-500">{a.bio}</p>
                  </CardBody>
                </Card>
              </RevealItem>
            ))}
          </RevealList>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-[13px] italic text-ink-400">
              Committee roster shown above is a placeholder — Velnox to confirm and supply
              official bios before publication.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        eyebrow="Get started"
        headline="Engage Velnox under a confidential brief — we&apos;ll route it to the right team."
        sub="Sponsors, hospitals, devices and consumer-health teams receive a response within one business day."
      />
    </>
  );
}
