import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, RevealList, RevealItem } from "@/components/motion/Reveal";
import { AUDIENCES } from "@/lib/content/audiences";
import { Icon } from "@/components/ui/Icon";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Sponsors, hospitals, investigators, devices, AYUSH and consumer-health teams that need a CRO/SMO with documented SOPs.",
};

const HOW_WE_START = [
  { n: "01", title: "Confidential feasibility", body: "Protocol review, recruitment realism, site-fit check. Typical turnaround: 7 working days." },
  { n: "02", title: "Scope, budget & contract", body: "Line-itemed grant with EC fees, labs, archival, SAE reimbursement and milestone payments — tetra-partite where applicable." },
  { n: "03", title: "Site activation under SOP", body: "ISF set-up, EC dossier, calibration audit, study-team delegation — concluded with a documented SIV." },
];

export default function ServicesPage() {
  const primary = AUDIENCES.filter((a) => a.tier === "primary");
  const secondary = AUDIENCES.filter((a) => a.tier === "secondary");
  return (
    <>
      <PageHero
        eyebrow="Who We Serve"
        title="Sponsors, sites, devices and consumer-health teams that need documented SOPs."
        intro="Velnox partners with organisations that take execution discipline seriously. We don't shadow a sponsor's team — we own the lifecycle, with named accountabilities at every step."
      />

      <section className="py-12">
        <Container>
          <RevealList className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {primary.map((a) => (
              <RevealItem
                key={a.slug}
                id={a.slug}
                className="group relative scroll-mt-24 overflow-hidden rounded-2xl bg-graphite-900/60 p-7 ring-1 ring-inset ring-white/5 transition-all duration-300 hover:bg-graphite-900 hover:ring-teal-400/30"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-teal-400/10 text-teal-300 ring-1 ring-inset ring-teal-400/30">
                    <Icon name={a.icon} size={22} />
                  </span>
                  <span className="text-[10.5px] uppercase tracking-[0.14em] text-graphite-300">
                    Primary segment
                  </span>
                </div>
                <h3 className="mt-5 font-display text-[19px] font-semibold leading-tight text-white">
                  {a.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-graphite-200">{a.short}</p>
                <ul className="mt-4 grid gap-1.5 text-[13px] text-graphite-200">
                  {a.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span aria-hidden className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-teal-400/80" />
                      {b}
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </RevealList>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Reveal>
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-graphite-300">
              Adjacent segments
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-display-md text-white text-balance">
              Cosmetics, agri-food, doctors, academia — where SOP discipline still earns its keep.
            </h2>
          </Reveal>
          <RevealList className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {secondary.map((a) => (
              <RevealItem
                key={a.slug}
                id={a.slug}
                className="rounded-2xl bg-graphite-900/60 p-5 ring-1 ring-inset ring-white/5"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-400/10 text-teal-300 ring-1 ring-inset ring-teal-400/30">
                  <Icon name={a.icon} size={18} />
                </span>
                <div className="mt-4 font-display text-[15px] font-semibold leading-tight text-white">
                  {a.title}
                </div>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-graphite-200">{a.short}</p>
              </RevealItem>
            ))}
          </RevealList>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Reveal>
            <h2 className="font-display text-display-md text-white">How engagements start</h2>
          </Reveal>
          <RevealList className="mt-8 grid gap-4 md:grid-cols-3">
            {HOW_WE_START.map((s) => (
              <RevealItem
                key={s.n}
                className="rounded-2xl bg-graphite-900/60 p-6 ring-1 ring-inset ring-white/5"
              >
                <div className="font-display tabular text-[12px] font-semibold uppercase tracking-[0.2em] text-teal-300">
                  Step {s.n}
                </div>
                <div className="mt-2 font-display text-[16px] font-semibold text-white">{s.title}</div>
                <p className="mt-2 text-[13.5px] leading-relaxed text-graphite-200">{s.body}</p>
              </RevealItem>
            ))}
          </RevealList>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
