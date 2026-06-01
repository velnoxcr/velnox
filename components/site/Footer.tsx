import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { COMPANY } from "@/lib/content/nav";
import { CAPABILITIES } from "@/lib/content/capabilities";
import { Phone, Mail, AlertTriangle } from "lucide-react";

const ABOUT_LINKS = [
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/about#leadership" },
  { label: "Advisory Committee", href: "/about/advisory" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const COMPLIANCE_LINKS = [
  { label: "Business Ethics", href: "/compliance#business-ethics" },
  { label: "Confidentiality", href: "/compliance#confidentiality" },
  { label: "Conflict of Interest", href: "/compliance#conflict-of-interest" },
  { label: "Quality Policy", href: "/compliance#quality" },
  { label: "Zero-Tolerance Misconduct", href: "/compliance#zero-tolerance" },
  { label: "SAE Workflow", href: "/compliance#sae-workflow" },
  { label: "Records & Archival", href: "/compliance#records-archival" },
];

export function SiteFooter() {
  const topCaps = CAPABILITIES.slice(0, 6);
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-graphite-950">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent"
      />
      <Container className="grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-graphite-200">
            An India-based CRO / SMO built around a documented trial lifecycle. ICH-GCP, NDCT
            Rules 2019, NABL / CAP-aligned labs, and a 24-hour SAE workflow — for trials that
            cannot afford a finding.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-xl bg-amber-500/10 px-4 py-3 ring-1 ring-inset ring-amber-500/30">
            <AlertTriangle size={18} className="text-amber-300" strokeWidth={1.8} />
            <div className="text-[12px] leading-tight">
              <div className="font-semibold uppercase tracking-[0.12em] text-amber-200">PV Hotline · 24×7</div>
              <div className="mt-0.5 text-graphite-100 tabular">{COMPANY.phonePv24x7}</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <FooterCol title="Company" links={ABOUT_LINKS} />
        </div>
        <div className="lg:col-span-3">
          <FooterCol
            title="Capabilities"
            links={topCaps.map((c) => ({ label: c.title, href: `/capabilities#${c.slug}` }))}
          />
        </div>
        <div className="lg:col-span-3">
          <FooterCol title="Compliance" links={COMPLIANCE_LINKS} />
        </div>
      </Container>

      <div className="border-t border-white/5">
        <Container className="flex flex-col items-start gap-4 py-6 text-[12.5px] text-graphite-300 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-graphite-200">© {new Date().getFullYear()} {COMPANY.legalName}</span>
            <span className="mx-2 text-graphite-500">·</span>
            <span>CIN: TODO</span>
            <span className="mx-2 text-graphite-500">·</span>
            <span>Registered office: {COMPANY.addressHead.city}, {COMPANY.addressHead.country}</span>
          </div>
          <div className="flex items-center gap-5">
            <Link href={`mailto:${COMPANY.emailGeneral}`} className="inline-flex items-center gap-1.5 hover:text-white">
              <Mail size={13} /> {COMPANY.emailGeneral}
            </Link>
            <Link href={`tel:${COMPANY.phoneMain.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 hover:text-white">
              <Phone size={13} /> {COMPANY.phoneMain}
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-graphite-300">
        {title}
      </div>
      <ul className="flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-[13.5px] text-graphite-100 transition-colors hover:text-teal-300">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
