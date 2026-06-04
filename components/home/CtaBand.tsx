import { Container } from "@/components/site/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowRight, ShieldCheck } from "lucide-react";

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
          <div className="relative overflow-hidden rounded-3xl bg-ink-900 ring-1 ring-inset ring-white/5 shadow-cardHover">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_85%_0%,rgba(45,212,191,0.22),transparent_70%),radial-gradient(50%_60%_at_10%_100%,rgba(30,64,175,0.32),transparent_70%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
                backgroundSize: "26px 26px",
              }}
            />
            <div className="relative grid gap-8 p-10 sm:p-14 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white ring-1 ring-inset ring-white/25">
                  <ShieldCheck size={11} strokeWidth={2.2} className="text-teal-300" />
                  {eyebrow}
                </div>
                <h2 className="font-display text-display-lg font-semibold tracking-tightest text-white text-balance">
                  {headline}
                </h2>
                <p className="mt-5 max-w-2xl text-[15px] text-white/75">{sub}</p>
              </div>
              <div className="flex flex-col items-start gap-3 lg:col-span-4 lg:items-end">
                <Button href={primary.href} size="lg" variant="white" className="w-full sm:w-auto">
                  {primary.label}
                  <ArrowRight size={16} />
                </Button>
                <Button href={secondary.href} size="lg" variant="ghost" className="w-full text-white hover:bg-white/10 hover:text-white ring-1 ring-inset ring-white/30 sm:w-auto">
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
