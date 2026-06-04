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
        scrolled ? "glass-light border-b border-ink-50 shadow-card" : "bg-white/0 border-b border-transparent",
      )}
    >
      <Container className="flex h-[68px] items-center justify-between gap-6">
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
                      active ? "text-ocean-900" : "text-ink-500 hover:text-ocean-900",
                    )}
                  >
                    <span>{item.label}</span>
                    {hasChildren && (
                      <ChevronDown
                        size={13}
                        className={cn("transition-transform duration-200", openIndex === i && "rotate-180")}
                      />
                    )}
                    {active && (
                      <span
                        aria-hidden
                        className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-ocean-gradient"
                      />
                    )}
                  </Link>
                  {hasChildren && openIndex === i && (
                    <div className="absolute left-1/2 top-full z-40 w-72 -translate-x-1/2 pt-3">
                      <div className="overflow-hidden rounded-2xl bg-white shadow-cardHover ring-1 ring-inset ring-ink-100">
                        <ul className="p-2">
                          {item.children!.map((c) => (
                            <li key={c.href}>
                              <Link
                                href={c.href}
                                className="group flex flex-col gap-0.5 rounded-xl px-3.5 py-2.5 transition-colors hover:bg-ocean-50"
                              >
                                <span className="flex items-center justify-between text-[13.5px] font-medium text-ink-700">
                                  {c.label}
                                  <ArrowUpRight
                                    size={14}
                                    className="text-ocean-600 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                                  />
                                </span>
                                {c.description && (
                                  <span className="text-[12px] text-ink-300">{c.description}</span>
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
          className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-lg bg-white text-ink-700 ring-1 ring-inset ring-ink-100 shadow-card"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] z-40 max-h-[calc(100vh-68px)] overflow-y-auto border-t border-ink-50 bg-white/98 backdrop-blur-xl">
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
                          ? "bg-ocean-50 text-ocean-900 ring-1 ring-inset ring-ocean-200"
                          : "text-ink-600 hover:bg-ink-50",
                      )}
                    >
                      {item.label}
                      <ArrowUpRight size={16} className="text-ink-300" />
                    </Link>
                    {item.children && (
                      <ul className="ml-3 mt-1 flex flex-col gap-0.5 border-l border-ink-100 pl-3">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              className="block rounded-lg px-3 py-2 text-[13.5px] text-ink-400 hover:bg-ink-50 hover:text-ocean-800"
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
