import { Hero } from "@/components/home/Hero";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { MarqueeChips } from "@/components/home/MarqueeChips";
import { ProcessStripe } from "@/components/home/ProcessStripe";
import { WhyVelnox } from "@/components/home/WhyVelnox";
import { LeadershipStrip } from "@/components/home/LeadershipStrip";
import { PresencePreview } from "@/components/home/PresencePreview";
import { TrainingPreview } from "@/components/home/TrainingPreview";
import { AudienceTiles } from "@/components/home/AudienceTiles";
import { StatBand } from "@/components/home/StatBand";
import { CtaBand } from "@/components/home/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <ServicesPreview />
      <MarqueeChips />
      <ProcessStripe />
      <WhyVelnox />
      <PresencePreview />
      <LeadershipStrip />
      <TrainingPreview />
      <AudienceTiles />
      <StatBand />
      <CtaBand />
    </>
  );
}
