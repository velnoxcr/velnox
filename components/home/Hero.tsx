"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/site/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowRight, ShieldCheck, Play } from "lucide-react";
import { HERO_VIDEO } from "@/lib/content/assets";
import { COMPANY } from "@/lib/content/nav";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  // Honour basePath on production (GitHub Pages serves under /velnox)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const videoSrc = HERO_VIDEO.src.startsWith("/") ? `${basePath}${HERO_VIDEO.src}` : HERO_VIDEO.src;

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const tryPlay = () => v.play().catch(() => { /* poster fallback is fine */ });
    if (v.readyState >= 2) tryPlay(); else v.addEventListener("loadeddata", tryPlay, { once: true });
  }, []);

  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden bg-ink-900">
      {/* Poster is always painted underneath; video paints over when available */}
      <img
        src={HERO_VIDEO.poster}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {!videoFailed && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-center"
          poster={HERO_VIDEO.poster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden
          onLoadedData={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(110deg,rgba(15,23,42,0.85)_0%,rgba(15,23,42,0.6)_50%,rgba(30,58,138,0.6)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_50%_at_15%_25%,rgba(13,148,136,0.18),transparent_70%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-white"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.45) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />

      <Container className="relative grid min-h-[88vh] grid-cols-1 items-center gap-12 pb-24 pt-12 lg:grid-cols-12 lg:pb-32 lg:pt-20">
        <div className="lg:col-span-7 xl:col-span-8">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white ring-1 ring-inset ring-white/25 glass-on-hero">
              <span aria-hidden className="inline-block h-1.5 w-1.5 animate-pulse-slow rounded-full bg-teal-300" />
              Clinical Research Service Organisation · SMO / CRSO
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display text-display-2xl font-bold tracking-tightest text-white text-balance text-shadow-soft">
              Advancing Healthcare
              <br className="hidden sm:block" />
              <span className="block bg-gradient-to-r from-teal-200 via-white to-teal-100 bg-clip-text text-transparent">
                Through Research Excellence.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-white/85 text-pretty sm:text-[18px]">
              <span className="font-semibold text-white">{COMPANY.legalName}</span> is dedicated
              to supporting Sponsors, CROs, Hospitals, Investigators, Pharmaceutical and Medical
              Device companies, and Academic Researchers — with end-to-end clinical research
              solutions across India.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href="/contact?intent=partnership" size="lg" variant="white">
                Partner with Velnox
                <ArrowRight size={16} />
              </Button>
              <Button href="/services" size="lg" variant="ghost" className="text-white hover:bg-white/10 hover:text-white ring-1 ring-inset ring-white/30">
                <Play size={14} fill="currentColor" /> Explore our services
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-3 text-[12px] uppercase tracking-[0.14em] text-white/75 sm:flex sm:flex-wrap sm:items-center">
              {["GCP-trained", "Phase I–IV", "Pollachi · Mysuru", "Pan-India network"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-teal-300" strokeWidth={2} />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.22} direction="left" className="lg:col-span-5 xl:col-span-4">
          <HeroPanel videoReady={videoReady} />
        </Reveal>
      </Container>
    </section>
  );
}

function HeroPanel({ videoReady }: { videoReady: boolean }) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-px rounded-3xl bg-gradient-to-br from-teal-300/30 via-white/10 to-ocean-300/20 opacity-90 blur-[1.5px]"
      />
      <div className="relative overflow-hidden rounded-3xl glass-on-hero ring-1 ring-inset ring-white/25 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/15 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="relative inline-flex h-2 w-2">
              <span className={`absolute inset-0 rounded-full bg-teal-300 ${videoReady ? "animate-ping" : ""}`} />
              <span className="absolute inset-0 rounded-full bg-teal-300" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white">Engagement Lifecycle</span>
          </div>
          <span className="text-[11px] tabular text-white/70">End-to-end</span>
        </div>
        <ol className="divide-y divide-white/10">
          {[
            { n: "01", label: "Feasibility", note: "Confidential protocol review" },
            { n: "02", label: "Site Activation", note: "EC dossier & set-up" },
            { n: "03", label: "Initiation & Enrolment", note: "Investigator training" },
            { n: "04", label: "Conduct & Monitoring", note: "Source-supported execution" },
            { n: "05", label: "Safety & Reporting", note: "Pharmacovigilance", accent: true as const },
            { n: "06", label: "Close-out & Archival", note: "Controlled retention" },
          ].map((step) => (
            <li key={step.n} className="flex items-center gap-4 px-5 py-3.5">
              <span className="font-display tabular text-[12px] text-white/65 w-7">{step.n}</span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[13.5px] font-semibold text-white">{step.label}</span>
                  {step.accent && (
                    <span className="rounded-full bg-amber-400/20 px-1.5 py-0.5 text-[9.5px] font-semibold uppercase tracking-[0.14em] text-amber-200 ring-1 ring-inset ring-amber-300/40">
                      PV
                    </span>
                  )}
                </div>
                <div className="text-[12px] text-white/70">{step.note}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
