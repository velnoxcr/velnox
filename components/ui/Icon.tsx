import {
  ClipboardCheck,
  Telescope,
  ScrollText,
  ShieldCheck,
  Rocket,
  FolderLock,
  Users,
  Mic,
  FileCheck2,
  Thermometer,
  TestTubes,
  Archive,
  Beaker,
  Building2,
  Stethoscope,
  Leaf,
  Sparkles,
  Wheat,
  UserRound,
  GraduationCap,
  Square,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

const ICON_MAP: Record<string, LucideIcon> = {
  ClipboardCheck,
  Telescope,
  ScrollText,
  ShieldCheck,
  Rocket,
  FolderLock,
  Users,
  Mic,
  FileCheck2,
  Thermometer,
  TestTubes,
  Archive,
  Beaker,
  Building2,
  Stethoscope,
  Leaf,
  Sparkles,
  Wheat,
  UserRound,
  GraduationCap,
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
