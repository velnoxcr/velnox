"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Input, Textarea, Select, Label } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2, AlertCircle, XCircle } from "lucide-react";
import { submitFormspreeJson } from "@/lib/forms/submit";

type Status = "idle" | "submitting" | "submitted" | "error";

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
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const q = params.get("intent");
    if (q) setIntent(q);
  }, [params]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) return;
    setStatus("submitting");
    setErrorMsg(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Anti-spam honeypot — bots fill hidden inputs; humans don't.
    if ((fd.get("_gotcha") as string)?.length) {
      setStatus("submitted");
      return;
    }

    const intentLabel = INTENTS.find((i) => i.value === fd.get("intent"))?.label ?? "Enquiry";
    const name = (fd.get("name") as string) || "";
    const org = (fd.get("organisation") as string) || "";

    const payload: Record<string, unknown> = {
      _subject: `Velnox enquiry — ${intentLabel}${name ? " · " + name : ""}${org ? " (" + org + ")" : ""}`,
      _replyto: fd.get("email"),
      source: "velnoxcr · contact form",
      submittedAt: new Date().toISOString(),
      name: fd.get("name"),
      organisation: fd.get("organisation"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      country: fd.get("country"),
      intent: fd.get("intent"),
      intentLabel,
      subject: fd.get("subject"),
      message: fd.get("message"),
      consent: "I consent per DPDP Act 2023 and Velnox Confidentiality SOP",
    };

    const result = await submitFormspreeJson(payload);
    if (result.ok) {
      setStatus("submitted");
      form.reset();
      setConsent(false);
    } else {
      setStatus("error");
      setErrorMsg(result.error);
    }
  }

  if (status === "submitted") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl bg-teal-50 p-7 ring-1 ring-inset ring-teal-200 shadow-card">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-teal-100 text-teal-700 ring-1 ring-inset ring-teal-300">
          <CheckCircle2 size={22} strokeWidth={2} />
        </span>
        <div>
          <div className="font-display text-[18px] font-semibold text-ink-700">Thank you — message received.</div>
          <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
            We&apos;ve routed your enquiry to the appropriate team. Expect a response within one business day.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-[12.5px] font-semibold text-teal-700 underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      action="https://formspree.io/f/mzdwlapy"
      method="POST"
      className="rounded-2xl bg-white p-7 ring-1 ring-inset ring-ink-100 shadow-card lg:p-8"
    >
      {/* Honeypot — hidden from users, visible to spam bots */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

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

      <label className="mt-6 flex items-start gap-3 text-[13px] text-ink-500">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
          className="mt-1 h-4 w-4 rounded border-ink-300 bg-white text-ocean-600 focus:ring-ocean-500"
        />
        <span>
          I consent to Velnox processing the personal data above for the purpose of this enquiry, in line with the
          DPDP Act 2023 and the Velnox Confidentiality SOP.
        </span>
      </label>

      {status === "error" && (
        <div className="mt-5 flex items-start gap-3 rounded-xl bg-amber-50 p-4 ring-1 ring-inset ring-amber-200">
          <XCircle size={18} className="mt-0.5 shrink-0 text-amber-600" strokeWidth={1.8} />
          <div className="text-[13px] text-ink-500">
            <div className="font-semibold text-ink-700">We couldn&apos;t send your message.</div>
            <div className="mt-0.5">{errorMsg ?? "Please try again, or email contact@velnoxcr.com directly."}</div>
          </div>
        </div>
      )}

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === "submitting" || !consent}>
          {status === "submitting" ? "Sending…" : "Send enquiry"}
          <Send size={15} />
        </Button>
        {!consent && (
          <span className="inline-flex items-center gap-1.5 text-[12.5px] text-ink-300">
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
