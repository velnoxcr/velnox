import { cn } from "@/lib/utils/cn";

export function Container({
  className,
  children,
  as: Tag = "div",
}: {
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1240px] px-5 sm:px-7 lg:px-10", className)}>
      {children}
    </Tag>
  );
}
