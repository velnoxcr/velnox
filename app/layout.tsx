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
  metadataBase: new URL("https://www.velnoxresearch.com"),
  title: {
    default: "Velnox Clinical Research & Solutions — Advancing Healthcare Through Research Excellence",
    template: "%s · Velnox Clinical Research & Solutions",
  },
  description:
    "Velnox Clinical Research & Solutions is a Clinical Research Service Organisation (SMO/CRSO) supporting Sponsors, CROs, Hospitals, Investigators, Pharmaceutical Companies, Medical Device Companies and Academic Researchers with end-to-end clinical research services across India. Head office: Pollachi, Tamil Nadu. Operational site: Mysuru, Karnataka.",
  keywords: [
    "Clinical Research Service Organization",
    "SMO India",
    "CRSO India",
    "Clinical Trial Site Management",
    "Patient Recruitment",
    "Pharmacovigilance",
    "Clinical Data Management",
    "Medical Writing",
    "GCP",
    "Pollachi clinical research",
    "Mysuru clinical research",
    "Velnox",
  ],
  authors: [{ name: "Velnox Clinical Research & Solutions" }],
  openGraph: {
    type: "website",
    title: "Velnox Clinical Research & Solutions",
    description:
      "Advancing Healthcare Through Research Excellence. End-to-end clinical research services across India.",
    siteName: "Velnox Clinical Research & Solutions",
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
