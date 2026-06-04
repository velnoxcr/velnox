"use client";

import { useState } from "react";
import { Input, Textarea, Select, Label } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ROLES } from "@/lib/content/careers";
import { CheckCircle2, Send, AlertCircle, XCircle } from "lucide-react";
import { submitFormspreeMultipart } from "@/lib/forms/submit";

type Status = "idle" | "submitting" | "submitted" | "error";

export function CareersForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) return;
    setStatus("submitting");
    setErrorMsg(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot — bots tend to fill hidden fields
    if ((fd.get("_gotcha") as string)?.length) {
      setStatus("submitted");
      return;
    }

    const name = (fd.get("name") as string) || "";
    const role = (fd.get("role") as string) || "Velnox role";
    fd.set("_subject", `Velnox Careers — ${name || "Applicant"} · ${role}`);
    fd.set("_replyto", (fd.get("email") as string) || "");
    fd.set("source", "velnoxcr · careers form");
    fd.set("submittedAt", new Date().toISOString());
    fd.set("consentNote", "I consent per DPDP Act 2023 and Velnox Confidentiality SOP");

    const result = await submitFormspreeMultipart(fd);
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
          <div className="font-display text-[18px] font-semibold text-ink-700">
            Thank you — application received.
          </div>
          <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
            The Velnox People Team will review your details and respond within five business days. We retain
            applications under the Velnox Confidentiality SOP, aligned with the DPDP Act 2023.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-[12.5px] font-semibold text-teal-700 underline-offset-4 hover:underline"
        >
          Apply for another role
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      action="https://formspree.io/f/mzdwlapy"
      method="POST"
      encType="multipart/form-data"
      className="rounded-2xl bg-white p-7 ring-1 ring-inset ring-ink-100 shadow-card lg:p-8"
    >
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
            <option value="Other">Other (mention below)</option>
          </Select>
        </Field>
      </div>

      <div className="mt-5">
        <Field id="message" label="Why Velnox?" hint="Optional — a paragraph on what brings you here.">
          <Textarea id="message" name="message" rows={4} placeholder="Tell us briefly about your interest in clinical research and Velnox." />
        </Field>
      </div>

      <div className="mt-5">
        <Field id="resume" label="Resume" hint="PDF preferred. Sent to the People Team along with your application." required>
          <Input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" required className="cursor-pointer file:mr-3 file:rounded-md file:border-0 file:bg-ocean-50 file:px-3 file:py-1.5 file:text-ocean-800 file:font-semibold" />
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
          I consent to Velnox processing the personal data in this application for the purpose of recruitment, in
          line with the DPDP Act 2023 and the Velnox Confidentiality SOP.
        </span>
      </label>

      {status === "error" && (
        <div className="mt-5 flex items-start gap-3 rounded-xl bg-amber-50 p-4 ring-1 ring-inset ring-amber-200">
          <XCircle size={18} className="mt-0.5 shrink-0 text-amber-600" strokeWidth={1.8} />
          <div className="text-[13px] text-ink-500">
            <div className="font-semibold text-ink-700">We couldn&apos;t send your application.</div>
            <div className="mt-0.5">{errorMsg ?? "Please try again, or email careers@velnoxcr.com directly."}</div>
          </div>
        </div>
      )}

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === "submitting" || !consent}>
          {status === "submitting" ? "Submitting…" : "Apply"}
          <Send size={15} />
        </Button>
        {!consent && (
          <span className="inline-flex items-center gap-1.5 text-[12.5px] text-ink-300">
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
