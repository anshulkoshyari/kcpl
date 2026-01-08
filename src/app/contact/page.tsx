import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact – Your Company Name",
  description:
    "Get in touch with Your Company Name to discuss virtual CFO, accounting, and outsourcing services for your organisation.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-[2fr,2fr]">
          <section className="space-y-4 text-sm text-slate-700">
            <h1 className="text-2xl font-semibold text-slate-900">
              Contact &amp; Enquiry
            </h1>
            <p>
              Share a few details about your organisation and requirements, and
              our team will reach out with next steps. All fields below use
              placeholder values—update email addresses, phone numbers, and
              addresses to match your firm.
            </p>
            <div className="space-y-2 text-sm">
              <p>
                Email:{" "}
                <a
                  href="mailto:contact@yourcompany.com"
                  className="font-semibold text-slate-900 underline"
                >
                  contact@yourcompany.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+910000000000"
                  className="font-semibold text-slate-900 underline"
                >
                  +91-00000-00000
                </a>
              </p>
              <p>
                Address: Your Office Address, City, State, Country, PIN/ZIP
              </p>
            </div>
          </section>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}


