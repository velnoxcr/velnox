import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/Header";
import { SiteFooter } from "@/components/site/Footer";
import { TrustStrip } from "@/components/site/TrustStrip";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://velnoxcr.com"),
  title: {
    default: "Velnox Clinical Research and Solutions — Audit-ready CRO/SMO, India",
    template: "%s · Velnox Clinical Research and Solutions",
  },
  description:
    "Velnox Clinical Research and Solutions (Velnox RSCRO) — an India-based CRO/SMO delivering ICH-GCP–compliant clinical trials from feasibility to archival. Site readiness, informed consent (AV) per NDCT Rules 2019, 24-hour SAE reporting, NABL/CAP-aligned labs.",
  keywords: [
    "Clinical Research Organisation",
    "Site Management Organisation",
    "CRO India",
    "SMO India",
    "ICH-GCP",
    "New Drugs and Clinical Trials Rules 2019",
    "Pharmacovigilance",
    "Velnox",
  ],
  authors: [{ name: "Velnox Clinical Research and Solutions" }],
  openGraph: {
    type: "website",
    title: "Velnox Clinical Research and Solutions",
    description:
      "Audit-ready CRO/SMO. ICH-GCP, NDCT Rules 2019, NABL/CAP-aligned labs, 24-hour SAE workflow, 5-year archival.",
    siteName: "Velnox Clinical Research and Solutions",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1E3A8A",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${serif.variable}`}>
      <body className="min-h-screen bg-white font-sans antialiased text-ink-700">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-ocean-900 focus:px-3 focus:py-1.5 focus:text-white"
        >
          Skip to content
        </a>
        <TrustStrip />
        <SiteHeader />
        <main id="main" className="relative">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
