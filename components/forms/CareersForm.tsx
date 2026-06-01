"use client";

import { useState } from "react";
import { Input, Textarea, Select, Label } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ROLES } from "@/lib/content/careers";
import { CheckCircle2, Send, AlertCircle } from "lucide-react";

type Status = "idle" | "submitting" | "submitted" | "error";

export function CareersForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [consent, setConsent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) return;
    setStatus("submitting");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // TODO: Velnox to supply — wire to real careers inbox (Resend / Formspree / Workmail).
    // eslint-disable-next-line no-console
    console.log("[careers] submission", data);
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
          <div className="font-display text-[18px] font-semibold text-white">
            Thank you — application received.
          </div>
          <p className="mt-2 text-[14px] leading-relaxed text-graphite-100">
            The Velnox People Team will review your details and respond within five business days. We retain
            applications under the Velnox Confidentiality SOP, aligned with the DPDP Act 2023.
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
        <Field id="email" label="Email" required>
          <Input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
        </Field>
        <Field id="phone" label="Phone" required>
          <Input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="+91 ..." />
        </Field>
        <Field id="qualification" label="Highest qualification" required>
          <Input id="qualification" name="qualification" required placeholder="e.g. M.Pharm" />
        </Field>
        <Field id="experience" label="Years of CR experience">
          <Input id="experience" name="experience" type="number" min={0} step={1} placeholder="0" />
        </Field>
        <Field id="role" label="Preferred role" required>
          <Select id="role" name="role" required defaultValue="">
            <option value="" disabled>Select a role</option>
            {ROLES.map((r) => (
              <option key={r.title} value={r.title}>{r.title}</option>
            ))}
            <option value="other">Other (mention below)</option>
          </Select>
        </Field>
      </div>

      <div className="mt-5">
        <Field id="message" label="Why Velnox?" hint="Optional — a paragraph on what brings you here.">
          <Textarea id="message" name="message" rows={4} placeholder="Tell us briefly about your interest in clinical research and Velnox." />
        </Field>
      </div>

      <div className="mt-5">
        <Field id="resume" label="Resume" hint="PDF preferred. We&apos;ll request the full document if shortlisted." required>
          <Input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" required className="cursor-pointer file:mr-3 file:rounded-md file:border-0 file:bg-graphite-800 file:px-3 file:py-1.5 file:text-graphite-100" />
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
          I consent to Velnox processing the personal data in this application for the purpose of recruitment, in
          line with the DPDP Act 2023 and the Velnox Confidentiality SOP.
        </span>
      </label>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === "submitting" || !consent}>
          {status === "submitting" ? "Submitting…" : "Apply"}
          <Send size={15} />
        </Button>
        {!consent && (
          <span className="inline-flex items-center gap-1.5 text-[12.5px] text-graphite-300">
            <AlertCircle size={13} /> Consent is required to apply.
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
