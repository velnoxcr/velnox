import { Hero } from "@/components/home/Hero";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { CapabilityGrid } from "@/components/home/CapabilityGrid";
import { MarqueeChips } from "@/components/home/MarqueeChips";
import { ProcessStripe } from "@/components/home/ProcessStripe";
import { AudienceTiles } from "@/components/home/AudienceTiles";
import { StatBand } from "@/components/home/StatBand";
import { CtaBand } from "@/components/home/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <CapabilityGrid />
      <MarqueeChips />
      <ProcessStripe />
      <AudienceTiles />
      <StatBand />
      <CtaBand />
    </>
  );
}
