import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { COMPANY } from "@/lib/content/nav";
import { MapPin, Phone, Mail, MessageSquare, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Velnox Clinical Research & Solutions — Pollachi (Head Office) and Mysuru (First Operational Site).",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get in touch with Velnox."
        intro="Partnership requests, sponsor enquiries, site collaborations, training enrolments — one form, the right person responds within one business day."
      />

      <section className="py-12">
        <Container className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <ContactCard
              title={COMPANY.addressHead.label}
              city={`${COMPANY.addressHead.city}, ${COMPANY.addressHead.state}`}
              country={COMPANY.addressHead.country}
              note={COMPANY.addressHead.note}
            />
          </Reveal>
          <Reveal delay={0.06}>
            <ContactCard
              title={COMPANY.addressBranch.label}
              city={`${COMPANY.addressBranch.city}, ${COMPANY.addressBranch.state}`}
              country={COMPANY.addressBranch.country}
              note={COMPANY.addressBranch.note}
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <Reveal>
            <div className="rounded-2xl bg-ocean-gradient p-6 text-white shadow-cardHover sm:p-7">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-200">
                Direct channels
              </div>
              <div className="mt-4 grid gap-5 sm:grid-cols-3">
                <a
                  href={`tel:${COMPANY.phoneMain.replace(/\s/g, "")}`}
                  className="group flex items-start gap-3 hover:text-white"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/15 ring-1 ring-inset ring-white/25">
                    <Phone size={18} strokeWidth={2} />
                  </span>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70">Call us</div>
                    <div className="tabular mt-0.5 font-display text-[16px] font-semibold">{COMPANY.phoneMain}</div>
                  </div>
                </a>
                <a
                  href={`mailto:${COMPANY.emailGeneral}`}
                  className="group flex items-start gap-3 hover:text-white"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/15 ring-1 ring-inset ring-white/25">
                    <Mail size={18} strokeWidth={2} />
                  </span>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70">Email us</div>
                    <div className="mt-0.5 font-display text-[16px] font-semibold">{COMPANY.emailGeneral}</div>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/15 ring-1 ring-inset ring-white/25">
                    <Globe size={18} strokeWidth={2} />
                  </span>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70">Website</div>
                    <div className="mt-0.5 font-display text-[16px] font-semibold">{COMPANY.website}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-white/15 pt-5 text-[12.5px] text-white/80">
                <MessageSquare size={14} strokeWidth={2} />
                <a href={COMPANY.whatsappLink} target="_blank" rel="noopener" className="font-semibold underline-offset-4 hover:underline">
                  WhatsApp us
                </a>
                <span>· for quick, non-urgent enquiries.</span>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ocean-700">
                One form · intent-routed
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 font-display text-display-md font-semibold text-ink-700 text-balance">
                Tell us what you&apos;re working on. We&apos;ll route it.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-[14.5px] leading-relaxed text-ink-500">
                Partnership and sponsor enquiries reach the leadership team. Site collaborations reach Operations.
                Training enrolments reach the People Team. General enquiries reach the right inbox.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="h-64 rounded-2xl bg-white shadow-card ring-1 ring-inset ring-ink-100" />}>
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
  city,
  country,
  note,
}: {
  title: string;
  city: string;
  country: string;
  note?: string;
}) {
  return (
    <div className="h-full rounded-2xl bg-white p-7 ring-1 ring-inset ring-ink-100 shadow-card">
      <div className="flex items-start gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ocean-gradient text-white shadow-oceanGlow">
          <MapPin size={20} strokeWidth={1.8} />
        </span>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-700">{title}</div>
          <div className="mt-1 font-display text-[20px] font-semibold text-ink-700">{city}</div>
          <div className="text-[12.5px] text-ink-400">{country}</div>
          {note && <div className="mt-3 text-[13px] leading-relaxed text-ink-500">{note}</div>}
        </div>
      </div>
    </div>
  );
}
