"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils/cn";

export function TocRail({
  items,
}: {
  items: { id: string; title: string }[];
}) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const headings = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => !!el);
    if (!headings.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0));
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-110px 0px -65% 0px", threshold: [0, 1] },
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page" className="sticky top-24 hidden lg:block">
      <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-graphite-300">
        On this page
      </div>
      <ul className="flex flex-col gap-1.5">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              className={cn(
                "block rounded-lg border-l-2 px-3 py-1.5 text-[13px] leading-snug transition-colors",
                active === i.id
                  ? "border-l-teal-400 bg-white/[0.04] text-white"
                  : "border-l-transparent text-graphite-200 hover:border-l-white/30 hover:text-white",
              )}
            >
              {i.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
