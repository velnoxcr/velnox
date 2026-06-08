import {
  Activity,
  AlertTriangle,
  Archive,
  BadgeCheck,
  Beaker,
  Building2,
  ClipboardCheck,
  Database,
  FileCog,
  FileText,
  GraduationCap,
  HeartHandshake,
  Mic,
  Network,
  Rocket,
  ScrollText,
  ShieldCheck,
  Stethoscope,
  Telescope,
  TrendingDown,
  Users,
  Workflow,
  Square,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

const ICON_MAP: Record<string, LucideIcon> = {
  Activity,
  AlertTriangle,
  Archive,
  BadgeCheck,
  Beaker,
  Building2,
  ClipboardCheck,
  Database,
  FileCog,
  FileText,
  GraduationCap,
  HeartHandshake,
  Mic,
  Network,
  Rocket,
  ScrollText,
  ShieldCheck,
  Stethoscope,
  Telescope,
  TrendingDown,
  Users,
  Workflow,
};

export function Icon({
  name,
  size = 20,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Component = ICON_MAP[name] ?? Square;
  return <Component size={size} strokeWidth={1.6} className={cn("shrink-0", className)} />;
}
