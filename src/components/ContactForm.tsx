"use client";

import { useState, useRef, useEffect } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const accessKey = process.env.NEXT_PUBLIC_SILENTFORMS_ACCESS_KEY || "";

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      setIsSubmitting(false);
      try {
        // Try to read the iframe content to check for success/error
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (iframeDoc) {
          const bodyText = iframeDoc.body?.innerText || "";
          // SilentForms typically returns JSON or a success message
          if (bodyText.includes("success") || bodyText.includes("Thank you") || bodyText === "") {
            setSubmitStatus({
              type: "success",
              message:
                "Thank you! Your enquiry has been submitted successfully. We'll get back to you soon.",
            });
            formRef.current?.reset();
          } else if (bodyText.includes("error") || bodyText.includes("Error")) {
            setSubmitStatus({
              type: "error",
              message:
                "Something went wrong. Please try again or contact us directly.",
            });
          } else {
            // If we can't determine, assume success (SilentForms usually succeeds)
            setSubmitStatus({
              type: "success",
              message:
                "Thank you! Your enquiry has been submitted successfully. We'll get back to you soon.",
            });
            formRef.current?.reset();
          }
        }
      } catch (e) {
        // Cross-origin restrictions - assume success if iframe loaded
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your enquiry has been submitted successfully. We'll get back to you soon.",
        });
        formRef.current?.reset();
      }
    };

    iframe.addEventListener("load", handleLoad);
    return () => iframe.removeEventListener("load", handleLoad);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!accessKey) {
      event.preventDefault();
      setSubmitStatus({
        type: "error",
        message:
          "Form is not configured. Please set NEXT_PUBLIC_SILENTFORMS_ACCESS_KEY environment variable.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });
    // Form will submit normally to the iframe, bypassing CORS
  };

  return (
    <section className="rounded-2xl border border-[var(--color-brand-border)] bg-[var(--color-brand-bg)] p-5 text-sm text-slate-700">
      <form
        ref={formRef}
        action="https://silentforms.com/api/submit"
        method="POST"
        target="silentforms-iframe"
        className="space-y-4"
        onSubmit={handleSubmit}
      >
        {/* Hidden iframe for form submission (bypasses CORS) */}
        <iframe
          ref={iframeRef}
          name="silentforms-iframe"
          style={{ display: "none" }}
          title="Form submission"
        />
        
        {/* Hidden access key field */}
        <input type="hidden" name="accessKey" value={accessKey} />
        
        {/* Honeypot field for spam protection */}
        <input
          type="text"
          name="honeypot"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-semibold uppercase tracking-wide text-slate-500"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-0 transition focus:border-[var(--color-primary)]"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-xs font-semibold uppercase tracking-wide text-slate-500"
            >
              Company
            </label>
            <input
              id="company"
              name="company"
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[var(--color-primary)]"
              placeholder="Your Company Name"
            />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-wide text-slate-500"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[var(--color-primary)]"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold uppercase tracking-wide text-slate-500"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[var(--color-primary)]"
              placeholder="+91-00000-00000"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="service"
            className="block text-xs font-semibold uppercase tracking-wide text-slate-500"
          >
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-2 py-2 text-sm outline-none focus:border-[var(--color-primary)]"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            <option value="finance">
              Financial &amp; Management Accounting
            </option>
            <option value="budget">
              Budgetary Management &amp; MIS Reporting
            </option>
            <option value="audit">Audit Assistance &amp; Support</option>
            <option value="secretarial">Company Secretary Compliance</option>
            <option value="hrpayroll">HR &amp; Payroll Services</option>
            <option value="other">Other / Combination</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-wide text-slate-500"
          >
            Brief Description
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[var(--color-primary)]"
            placeholder="Share a short note on your current setup, challenges, and what you are looking for."
          />
        </div>
        {/* Status Messages */}
        {submitStatus.type && (
          <div
            className={`rounded-md p-3 text-sm ${
              submitStatus.type === "success"
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-800"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit Enquiry"}
        </button>
      </form>
    </section>
  );
}


