/**
 * Formspree endpoint that receives every inquiry from the Velnox site.
 * Email delivery goes to the address linked to this Formspree form.
 * Swap this single constant to repoint every form on the site.
 */
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzdwlapy";

export type SubmitResult =
  | { ok: true }
  | { ok: false; error: string };

/**
 * POST a FormData payload to Formspree.
 * Use this when the form contains a file upload (multipart required).
 */
export async function submitFormspreeMultipart(
  formData: FormData,
): Promise<SubmitResult> {
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });
    if (res.ok) return { ok: true };
    const data = await res.json().catch(() => ({} as { errors?: { message: string }[] }));
    const msg = data?.errors?.[0]?.message ?? `Submission failed (HTTP ${res.status}).`;
    return { ok: false, error: msg };
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Network error.";
    return { ok: false, error: msg };
  }
}

/**
 * POST a JSON payload to Formspree.
 * Use this when the form has no file upload — cleaner email body.
 */
export async function submitFormspreeJson(
  payload: Record<string, unknown>,
): Promise<SubmitResult> {
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (res.ok) return { ok: true };
    const data = await res.json().catch(() => ({} as { errors?: { message: string }[] }));
    const msg = data?.errors?.[0]?.message ?? `Submission failed (HTTP ${res.status}).`;
    return { ok: false, error: msg };
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Network error.";
    return { ok: false, error: msg };
  }
}
