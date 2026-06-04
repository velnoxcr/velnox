import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "secondary" | "ghost" | "amber" | "white";
type Size = "sm" | "md" | "lg";

const BASE =
  "inline-flex select-none items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-out " +
  "disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white " +
  "whitespace-nowrap";

const VARIANT: Record<Variant, string> = {
  primary:
    "bg-ocean-gradient text-white hover:brightness-110 active:brightness-95 shadow-oceanGlow",
  secondary:
    "bg-white text-ocean-800 ring-1 ring-inset ring-ocean-200 hover:bg-ocean-50 hover:ring-ocean-300 shadow-card",
  ghost:
    "bg-transparent text-ink-500 hover:bg-ink-50 hover:text-ocean-800",
  amber:
    "bg-amber-500 text-ink-700 hover:bg-amber-400 shadow-[0_8px_30px_-12px_rgba(245,158,11,0.55)]",
  white:
    "bg-white text-ocean-900 hover:bg-paper-100 shadow-card",
};

const SIZE: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type LinkButtonProps = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: never;
  type?: never;
  disabled?: never;
};

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export function Button(props: LinkButtonProps | ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(BASE, VARIANT[variant], SIZE[size], className);

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }
  const { onClick, type = "button", disabled, ...rest } = props as ButtonProps;
  return (
    <button {...rest} type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
