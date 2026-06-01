import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { CapabilityFilter } from "@/components/capabilities/CapabilityFilter";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Velnox's 12-capability operating set, mapped one-to-one to our SOPs — from Site Readiness through Archival.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="What we actually do — mapped to the SOPs that govern each step."
        intro="This isn&apos;t a marketing list. Every capability below corresponds to a numbered Velnox SOP with an accountable owner. Filter by lifecycle phase to see what applies to your stage."
      />
      <section className="py-12">
        <Container>
          <CapabilityFilter />
        </Container>
      </section>
      <CtaBand
        eyebrow="Engage Velnox"
        headline="Need a capability under a confidential brief? Bring us your protocol."
        sub="We&apos;ll respond within one business day with the right scope and the right owner."
      />
    </>
  );
}
