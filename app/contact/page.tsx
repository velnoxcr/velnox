import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { COMPANY } from "@/lib/content/nav";
import { AlertTriangle, MapPin, Phone, Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Velnox — feasibility requests, sponsor enquiries, site partnerships, careers. Dedicated 24×7 PV hotline for SAE notifications.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Velnox."
        intro="Feasibility requests, sponsor enquiries, site partnerships, careers — one form, the right person responds within one business day."
      />

      <section className="py-12">
        <Container className="grid gap-5 md:grid-cols-3">
          <Reveal>
            <ContactCard
              title="Head Office"
              lines={[
                COMPANY.addressHead.line1,
                COMPANY.addressHead.line2,
                `${COMPANY.addressHead.city}, ${COMPANY.addressHead.state} ${COMPANY.addressHead.pin}`,
                COMPANY.addressHead.country,
              ]}
            />
          </Reveal>
          <Reveal delay={0.05}>
            <ContactCard
              title="Site Network"
              lines={[
                COMPANY.addressBranch.line1,
                COMPANY.addressBranch.line2,
                `${COMPANY.addressBranch.city}, ${COMPANY.addressBranch.state} ${COMPANY.addressBranch.pin}`,
                COMPANY.addressBranch.country,
              ]}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl bg-graphite-900/60 p-6 ring-1 ring-inset ring-white/5">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-300">Direct channels</div>
              <ul className="mt-4 grid gap-3 text-[13.5px]">
                <li className="flex items-start gap-2.5 text-graphite-100">
                  <Mail size={15} className="mt-0.5 text-teal-300" />
                  <div>
                    <div>{COMPANY.emailGeneral}</div>
                    <div className="text-[12px] text-graphite-300">General enquiries</div>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 text-graphite-100">
                  <Mail size={15} className="mt-0.5 text-teal-300" />
                  <div>
                    <div>{COMPANY.emailFeasibility}</div>
                    <div className="text-[12px] text-graphite-300">Sponsor / feasibility</div>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 text-graphite-100">
                  <Phone size={15} className="mt-0.5 text-teal-300" />
                  <div>
                    <div className="tabular">{COMPANY.phoneMain}</div>
                    <div className="text-[12px] text-graphite-300">Main line</div>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 text-graphite-100">
                  <MessageSquare size={15} className="mt-0.5 text-teal-300" />
                  <div>
                    <a
                      href={COMPANY.whatsappLink}
                      target="_blank"
                      rel="noopener"
                      className="hover:text-teal-200"
                    >
                      WhatsApp · text us
                    </a>
                    <div className="text-[12px] text-graphite-300">Non-urgent enquiries only</div>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-4 rounded-2xl bg-amber-500/[0.08] p-5 ring-1 ring-inset ring-amber-500/30 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle size={22} className="mt-0.5 shrink-0 text-amber-300" strokeWidth={1.8} />
                <div>
                  <div className="font-display text-[15.5px] font-semibold text-white">
                    Serious Adverse Event (SAE) notification?
                  </div>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-amber-100/90">
                    Please call the Velnox PV Hotline directly — do not use the form below. SAEs are reportable
                    within 24 hours per New Drugs &amp; Clinical Trials Rules 2019.
                  </p>
                </div>
              </div>
              <a
                href={`tel:${COMPANY.phonePv24x7.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-[13.5px] font-semibold text-graphite-950 hover:bg-amber-400"
              >
                <Phone size={14} /> {COMPANY.phonePv24x7}
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-300">
                One form · intent-routed
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 font-display text-display-md text-white text-balance">
                Tell us what you&apos;re working on. We&apos;ll route it.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-[14.5px] leading-relaxed text-graphite-200">
                Feasibility enquiries reach the operations team. Sponsor RFPs reach the MD. Careers reach the
                People Team. Compliance requests reach Quality. One form, the right inbox.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="h-64 rounded-2xl bg-graphite-900/60 ring-1 ring-inset ring-white/5" />}>
              <ContactForm />
            </Suspense>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactCard({
  title,
  lines,
}: {
  title: string;
  lines: string[];
}) {
  return (
    <div className="h-full rounded-2xl bg-graphite-900/60 p-6 ring-1 ring-inset ring-white/5">
      <div className="flex items-center gap-3">
        <MapPin size={18} className="text-teal-300" strokeWidth={1.8} />
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-300">{title}</div>
      </div>
      <address className="mt-4 not-italic text-[13.5px] leading-relaxed text-graphite-100">
        {lines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </address>
    </div>
  );
}
