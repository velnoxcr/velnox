import { Card, CardBody } from "@/components/ui/Card";
import type { Leader } from "@/lib/content/leadership";
import { Mail } from "lucide-react";

export function LeadershipCard({ leader, featured = false }: { leader: Leader; featured?: boolean }) {
  return (
    <Card>
      <CardBody className={featured ? "lg:p-8" : undefined}>
        <div className="flex items-start gap-5">
          <span
            className={
              featured
                ? "grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-ocean-gradient font-display text-[17px] font-bold text-white shadow-oceanGlow"
                : "grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ocean-gradient font-display text-[15.5px] font-bold text-white shadow-oceanGlow"
            }
          >
            {leader.initials}
          </span>
          <div className="min-w-0">
            <div className={featured ? "font-display text-[20px] font-semibold text-ink-700" : "font-display text-[18px] font-semibold text-ink-700"}>
              {leader.name}
            </div>
            <div className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-ocean-700">{leader.role}</div>
            {leader.email && (
              <a
                href={`mailto:${leader.email}`}
                className="mt-2 inline-flex items-center gap-1.5 text-[12.5px] text-ink-400 hover:text-ocean-700"
              >
                <Mail size={12} /> {leader.email}
              </a>
            )}
          </div>
        </div>
        <p className={featured ? "mt-5 text-[14.5px] leading-relaxed text-ink-500" : "mt-5 text-[14px] leading-relaxed text-ink-500"}>
          {leader.bio}
        </p>
      </CardBody>
    </Card>
  );
}
