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
        "group relative overflow-hidden rounded-2xl bg-white ring-1 ring-inset ring-ink-100",
        "shadow-card",
        hover &&
          "transition-all duration-300 hover:shadow-cardHover hover:ring-ocean-200 hover:-translate-y-1",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-px",
          "bg-gradient-to-r from-transparent via-ocean-300/40 to-transparent",
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
