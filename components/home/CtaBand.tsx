import { Container } from "@/components/site/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowRight } from "lucide-react";

export function CtaBand({
  eyebrow = "Get started",
  headline = "Bring us your protocol. We will tell you if India is the right site — honestly.",
  sub = "Confidential feasibility assessment. Typical turnaround: 7 working days.",
  primary = { label: "Request Feasibility", href: "/contact?intent=feasibility" },
  secondary = { label: "Speak to the MD", href: "/contact?intent=md" },
}: {
  eyebrow?: string;
  headline?: string;
  sub?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-graphite-900/70 ring-1 ring-inset ring-white/10 shadow-elev">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_85%_0%,rgba(45,212,191,0.18),transparent_70%),radial-gradient(50%_60%_at_10%_100%,rgba(245,158,11,0.08),transparent_70%)]"
            />
            <div className="relative grid gap-8 p-10 sm:p-14 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-300">
                  {eyebrow}
                </div>
                <h2 className="font-display text-display-lg text-white text-balance">
                  {headline}
                </h2>
                <p className="mt-5 max-w-2xl text-[15px] text-graphite-200">{sub}</p>
              </div>
              <div className="flex flex-col items-start gap-3 lg:col-span-4 lg:items-end">
                <Button href={primary.href} size="lg" className="w-full sm:w-auto">
                  {primary.label}
                  <ArrowRight size={16} />
                </Button>
                <Button href={secondary.href} size="lg" variant="secondary" className="w-full sm:w-auto">
                  {secondary.label}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
