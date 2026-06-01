"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Input, Textarea, Select, Label } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "submitting" | "submitted";

const INTENTS = [
  { value: "feasibility", label: "Feasibility request" },
  { value: "site-partnership", label: "Site partnership" },
  { value: "sponsor-rfp", label: "Sponsor RFP" },
  { value: "careers", label: "Careers" },
  { value: "md", label: "Speak to the Managing Director" },
  { value: "compliance-pdf", label: "Compliance one-pager (PDF)" },
  { value: "media", label: "Media / Press" },
  { value: "other", label: "Other" },
];

export function ContactForm() {
  const params = useSearchParams();
  const initialIntent = params.get("intent") ?? "feasibility";
  const [intent, setIntent] = useState(initialIntent);
  const [status, setStatus] = useState<Status>("idle");
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const q = params.get("intent");
    if (q) setIntent(q);
  }, [params]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) return;
    setStatus("submitting");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // TODO: Velnox to supply — wire to real inboxes by intent (feasibility@, pv@, careers@, contact@).
    // eslint-disable-next-line no-console
    console.log("[contact] submission", data);
    await new Promise((r) => setTimeout(r, 700));
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl bg-teal-400/10 p-7 ring-1 ring-inset ring-teal-400/40">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-teal-400/20 text-teal-300 ring-1 ring-inset ring-teal-400/40">
          <CheckCircle2 size={22} strokeWidth={1.8} />
        </span>
        <div>
          <div className="font-display text-[18px] font-semibold text-white">Thank you — message received.</div>
          <p className="mt-2 text-[14px] leading-relaxed text-graphite-100">
            We&apos;ve routed your enquiry to the appropriate team. Expect a response within one business day.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-graphite-900/60 p-7 ring-1 ring-inset ring-white/5 lg:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <Field id="name" label="Full name" required>
          <Input id="name" name="name" required autoComplete="name" placeholder="Your name" />
        </Field>
        <Field id="organisation" label="Organisation">
          <Input id="organisation" name="organisation" autoComplete="organization" placeholder="Sponsor, hospital, etc." />
        </Field>
        <Field id="email" label="Email" required>
          <Input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
        </Field>
        <Field id="phone" label="Phone">
          <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 ..." />
        </Field>
        <Field id="country" label="Country">
          <Input id="country" name="country" autoComplete="country-name" placeholder="India" />
        </Field>
        <Field id="intent" label="I'm reaching out about" required>
          <Select id="intent" name="intent" required value={intent} onChange={(e) => setIntent(e.target.value)}>
            {INTENTS.map((i) => (
              <option key={i.value} value={i.value}>{i.label}</option>
            ))}
          </Select>
        </Field>
      </div>

      <div className="mt-5">
        <Field id="subject" label="Subject" required>
          <Input id="subject" name="subject" required placeholder="Brief subject line" />
        </Field>
      </div>

      <div className="mt-5">
        <Field id="message" label="Message" required>
          <Textarea id="message" name="message" rows={5} required placeholder="Tell us briefly — under NDA, if needed." />
        </Field>
      </div>

      <label className="mt-6 flex items-start gap-3 text-[13px] text-graphite-200">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
          className="mt-1 h-4 w-4 rounded border-white/20 bg-graphite-900 text-teal-400 focus:ring-teal-400"
        />
        <span>
          I consent to Velnox processing the personal data above for the purpose of this enquiry, in line with the
          DPDP Act 2023 and the Velnox Confidentiality SOP.
        </span>
      </label>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === "submitting" || !consent}>
          {status === "submitting" ? "Sending…" : "Send enquiry"}
          <Send size={15} />
        </Button>
        {!consent && (
          <span className="inline-flex items-center gap-1.5 text-[12.5px] text-graphite-300">
            <AlertCircle size={13} /> Consent is required to send.
          </span>
        )}
      </div>
    </form>
  );
}

function Field({
  id, label, required, hint, children,
}: {
  id: string; label: string; required?: boolean; hint?: string; children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id} required={required}>{label}</Label>
      {children}
      {hint && <p className="mt-1.5 text-[11.5px] text-graphite-300">{hint}</p>}
    </div>
  );
}
