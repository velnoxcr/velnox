import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { COMPANY } from "@/lib/content/nav";
import { SERVICES } from "@/lib/content/services";
import { Phone, Mail, ArrowRight, MapPin, Globe } from "lucide-react";

const ABOUT_LINKS = [
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/about#leadership" },
  { label: "Our Presence", href: "/about#presence" },
  { label: "Training", href: "/training" },
  { label: "Contact", href: "/contact" },
];

const PARTNERS = [
  "Sponsors & Pharma",
  "CROs",
  "Hospitals & Investigators",
  "Medical Device Companies",
  "Academic Institutions",
  "Healthcare Organisations",
];

export function SiteFooter() {
  const topServices = SERVICES.slice(0, 6);
  return (
    <footer className="relative mt-24 border-t border-ink-100 bg-paper-100">
      <Container className="grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-ink-400">
            <span className="font-semibold text-ink-700">{COMPANY.legalName}</span> — a Clinical
            Research Service Organisation supporting Sponsors, CROs, Hospitals, Investigators,
            Pharmaceutical and Medical Device companies and Academic Researchers across India.
          </p>

          <div className="mt-6 grid gap-2.5 text-[13px] text-ink-500">
            <div className="flex items-start gap-2.5">
              <MapPin size={14} className="mt-0.5 shrink-0 text-ocean-700" strokeWidth={2} />
              <div>
                <div className="font-medium text-ink-700">{COMPANY.addressHead.label}</div>
                <div>
                  {COMPANY.addressHead.city}, {COMPANY.addressHead.state}, {COMPANY.addressHead.country}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin size={14} className="mt-0.5 shrink-0 text-ocean-700" strokeWidth={2} />
              <div>
                <div className="font-medium text-ink-700">{COMPANY.addressBranch.label}</div>
                <div>
                  {COMPANY.addressBranch.city}, {COMPANY.addressBranch.state}, {COMPANY.addressBranch.country}
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/contact?intent=partnership"
            className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-ocean-700 hover:text-ocean-900"
          >
            Partner with Velnox
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="lg:col-span-2">
          <FooterCol title="Company" links={ABOUT_LINKS} />
        </div>
        <div className="lg:col-span-3">
          <FooterCol
            title="Services"
            links={topServices.map((s) => ({ label: s.title, href: `/services#${s.slug}` }))}
          />
        </div>
        <div className="lg:col-span-3">
          <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-800">
            Partner with us
          </div>
          <ul className="grid gap-2 text-[13.5px] text-ink-500">
            {PARTNERS.map((p) => (
              <li key={p} className="flex items-start gap-2">
                <span aria-hidden className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-ocean-600" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-ink-100">
        <Container className="flex flex-col items-start gap-4 py-6 text-[12.5px] text-ink-300 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-ink-500">© {new Date().getFullYear()} {COMPANY.legalName}</span>
            <span className="text-ink-200">·</span>
            <span>All rights reserved</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            <Link href={`mailto:${COMPANY.emailGeneral}`} className="inline-flex items-center gap-1.5 hover:text-ocean-700">
              <Mail size={13} /> {COMPANY.emailGeneral}
            </Link>
            <Link href={`tel:${COMPANY.phoneMain.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 hover:text-ocean-700">
              <Phone size={13} /> <span className="tabular">{COMPANY.phoneMain}</span>
            </Link>
            <span className="inline-flex items-center gap-1.5">
              <Globe size={13} /> {COMPANY.website}
            </span>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-800">
        {title}
      </div>
      <ul className="flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-[13.5px] text-ink-500 transition-colors hover:text-ocean-700">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
