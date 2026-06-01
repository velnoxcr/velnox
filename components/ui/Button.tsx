import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "secondary" | "ghost" | "amber";
type Size = "sm" | "md" | "lg";

const BASE =
  "inline-flex select-none items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-out " +
  "disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-graphite-950 " +
  "whitespace-nowrap";

const VARIANT: Record<Variant, string> = {
  primary:
    "bg-teal-400 text-graphite-950 hover:bg-teal-300 active:bg-teal-500 shadow-[0_8px_30px_-12px_rgba(45,212,191,0.6)]",
  secondary:
    "bg-graphite-800/80 text-graphite-50 ring-1 ring-inset ring-white/10 hover:bg-graphite-700/80 hover:ring-white/15",
  ghost:
    "bg-transparent text-graphite-100 hover:bg-white/5",
  amber:
    "bg-amber-500 text-graphite-950 hover:bg-amber-400 shadow-[0_8px_30px_-12px_rgba(245,158,11,0.55)]",
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
  const { onClick, type = "button", disabled, ...rest } =
    props as ButtonProps;
  return (
    <button {...rest} type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
