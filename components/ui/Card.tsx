import * as React from "react";
import { cn } from "@/lib/utils/cn";

export function Card({
  className,
  children,
  as: Tag = "div",
  hover = true,
}: {
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  hover?: boolean;
}) {
  return (
    <Tag
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-graphite-900/60 ring-1 ring-inset ring-white/5",
        "shadow-elev backdrop-blur-sm",
        hover &&
          "transition-all duration-300 hover:bg-graphite-900 hover:ring-teal-400/40 hover:-translate-y-0.5",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-px",
          "bg-gradient-to-r from-transparent via-teal-400/30 to-transparent",
          hover && "opacity-50 transition-opacity duration-300 group-hover:opacity-100",
        )}
      />
      {children}
    </Tag>
  );
}

export function CardBody({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("p-6 sm:p-7", className)}>{children}</div>;
}
