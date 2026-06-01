import { Card, CardBody } from "@/components/ui/Card";
import type { Leader } from "@/lib/content/leadership";
import { Mail } from "lucide-react";

export function LeadershipCard({ leader }: { leader: Leader }) {
  return (
    <Card>
      <CardBody>
        <div className="flex items-start gap-5">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-teal-400/30 via-teal-500/10 to-teal-700/10 font-display text-[15.5px] font-semibold text-teal-200 ring-1 ring-inset ring-teal-400/30">
            {leader.initials}
          </span>
          <div className="min-w-0">
            <div className="font-display text-[18px] font-semibold text-white">{leader.name}</div>
            <div className="text-[12.5px] uppercase tracking-[0.12em] text-teal-300">{leader.role}</div>
            {leader.email && (
              <a
                href={`mailto:${leader.email}`}
                className="mt-2 inline-flex items-center gap-1.5 text-[12.5px] text-graphite-300 hover:text-white"
              >
                <Mail size={12} /> {leader.email}
              </a>
            )}
          </div>
        </div>
        <p className="mt-5 text-[14px] leading-relaxed text-graphite-200">{leader.bio}</p>
      </CardBody>
    </Card>
  );
}
