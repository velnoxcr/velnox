import * as React from "react";
import { cn } from "@/lib/utils/cn";

const FIELD_BASE =
  "block w-full rounded-xl border-0 bg-white px-4 py-3 text-sm text-ink-700 " +
  "ring-1 ring-inset ring-ink-200 placeholder:text-ink-300 " +
  "focus:ring-2 focus:ring-ocean-500 focus:bg-white focus:outline-none " +
  "transition-shadow duration-150";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...props }, ref) {
    return <input ref={ref} className={cn(FIELD_BASE, className)} {...props} />;
  },
);

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ className, rows = 4, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(FIELD_BASE, "resize-y leading-relaxed", className)}
      {...props}
    />
  );
});

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(function Select({ className, children, ...props }, ref) {
  return (
    <select
      ref={ref}
      className={cn(FIELD_BASE, "cursor-pointer appearance-none bg-[length:14px_14px] bg-no-repeat bg-[right_14px_center]", className)}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%2364748B'><path d='M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.4a.75.75 0 01-1.08 0l-4.25-4.4a.75.75 0 01.02-1.06z'/></svg>\")",
      }}
      {...props}
    >
      {children}
    </select>
  );
});

export function Label({
  children,
  htmlFor,
  required,
  className,
}: {
  children: React.ReactNode;
  htmlFor: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-500", className)}
    >
      {children}
      {required ? <span className="ml-1 text-amber-600">*</span> : null}
    </label>
  );
}
