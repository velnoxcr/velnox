"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

export function Marquee({
  items,
  className,
  pauseOnHover = true,
}: {
  items: React.ReactNode[];
  className?: string;
  pauseOnHover?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden mask-fade-x", className)}>
      <div
        className={cn(
          "flex w-max gap-4 animate-marquee will-change-transform",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
        aria-hidden
      >
        {[...items, ...items].map((item, i) => (
          <React.Fragment key={i}>{item}</React.Fragment>
        ))}
      </div>
    </div>
  );
}
