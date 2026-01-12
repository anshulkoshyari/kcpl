import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact – Koshyari Consultants Pvt. Ltd.",
  description:
    "Get in touch with Koshyari Consultants Pvt. Ltd. to discuss virtual CFO, accounting, and outsourcing services for your organisation.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-[2fr,2fr]">
          <section className="space-y-4 text-sm text-slate-700">
            <h1 className="text-2xl font-semibold text-[var(--color-primary)]">
              Contact Us
            </h1>
            <p>
              Share a few details about your organisation and requirements, and
              our team will reach out with next steps.
            </p>
          </section>

          <ContactForm />
        </div>

        <div className="mt-12 border-t border-[var(--color-brand-border)] pt-12">
          <div className="space-y-2 text-sm text-slate-900">
            <p>
              Email:{" "}
              <a
                href="mailto:contact@yourcompany.com"
                className="font-semibold text-[var(--color-primary)] underline hover:text-[var(--color-accent)] transition-colors"
              >
                kamla@koshyari.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+910000000000"
                className="font-semibold text-[var(--color-primary)] underline hover:text-[var(--color-accent)] transition-colors"
              >
                +91-9869236515
              </a>
            </p>
            <p>
              Address: A1804 Raheja Serenity, Kandivali East, Mumbai, Maharashtra, India, 400101
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


