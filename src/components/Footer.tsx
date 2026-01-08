import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3 md:col-span-2">
            <h3 className="text-sm font-semibold text-slate-900">
              Koshyari Consultants Pvt. Ltd.
            </h3>
            <p className="text-sm text-slate-600">
              Placeholder description for Your Company Name. Replace this text
              with a short summary of your Virtual CFO, accounting, and
              outsourcing services.
            </p>
            <p className="text-sm text-slate-500">
              Registered address: Your Office Address, City, State, Country,
              PIN/ZIP.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/" className="hover:text-slate-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-slate-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-slate-900">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-slate-900">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-900">
                  Enquiry
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Contact
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                Email:{" "}
                <a
                  href="mailto:contact@yourcompany.com"
                  className="hover:text-slate-900"
                >
                  contact@yourcompany.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+910000000000"
                  className="hover:text-slate-900"
                >
                  +91-00000-00000
                </a>
              </li>
              <li>Alternate email: info@yourcompany.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-4 text-xs text-slate-500 md:flex-row md:items-center">
          <p>
            © 2025 Koshyari Consultants Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy" className="hover:text-slate-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-900">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


