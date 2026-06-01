"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PRIMARY_NAV, PRIMARY_CTA } from "@/lib/content/nav";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenIndex(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "glass border-b border-white/5" : "bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:flex items-center">
          <ul className="flex items-center gap-1">
            {PRIMARY_NAV.map((item, i) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");
              const hasChildren = !!item.children?.length;
              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasChildren && setOpenIndex(i)}
                  onMouseLeave={() => hasChildren && setOpenIndex(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13.5px] font-medium transition-colors duration-200",
                      active ? "text-white" : "text-graphite-100 hover:text-white",
                    )}
                  >
                    <span>{item.label}</span>
                    {hasChildren && (
                      <ChevronDown
                        size={13}
                        className={cn(
                          "transition-transform duration-200",
                          openIndex === i && "rotate-180",
                        )}
                      />
                    )}
                    {active && (
                      <span
                        aria-hidden
                        className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"
                      />
                    )}
                  </Link>
                  {hasChildren && openIndex === i && (
                    <div className="absolute left-1/2 top-full z-40 w-72 -translate-x-1/2 pt-3">
                      <div className="overflow-hidden rounded-2xl bg-graphite-900/95 ring-1 ring-inset ring-white/10 shadow-elev backdrop-blur-md">
                        <ul className="p-2">
                          {item.children!.map((c) => (
                            <li key={c.href}>
                              <Link
                                href={c.href}
                                className="group flex flex-col gap-0.5 rounded-xl px-3.5 py-2.5 transition-colors hover:bg-white/5"
                              >
                                <span className="flex items-center justify-between text-[13.5px] font-medium text-white">
                                  {c.label}
                                  <ArrowUpRight
                                    size={14}
                                    className="opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 text-teal-300"
                                  />
                                </span>
                                {c.description && (
                                  <span className="text-[12px] text-graphite-300">{c.description}</span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href={PRIMARY_CTA.href} size="sm">
            {PRIMARY_CTA.label}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-lg bg-graphite-800/70 text-graphite-50 ring-1 ring-inset ring-white/10"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/5 bg-graphite-950/95 backdrop-blur-xl">
          <Container className="py-6">
            <ul className="flex flex-col gap-1">
              {PRIMARY_NAV.map((item) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium transition-colors",
                        active
                          ? "bg-teal-400/10 text-white ring-1 ring-inset ring-teal-400/30"
                          : "text-graphite-100 hover:bg-white/5",
                      )}
                    >
                      {item.label}
                      <ArrowUpRight size={16} className="text-graphite-300" />
                    </Link>
                    {item.children && (
                      <ul className="ml-3 mt-1 flex flex-col gap-0.5 border-l border-white/10 pl-3">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              className="block rounded-lg px-3 py-2 text-[13.5px] text-graphite-200 hover:bg-white/5 hover:text-white"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="mt-5">
              <Button href={PRIMARY_CTA.href} size="lg" className="w-full">
                {PRIMARY_CTA.label}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
