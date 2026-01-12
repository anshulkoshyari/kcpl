"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  const handleServicesLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/services") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <footer className="bg-[var(--color-brand-bg)]">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-6">
        <div className="h-px bg-[var(--color-brand-border)]"></div>
      </div>
      <div className="mx-auto max-w-screen-2xl px-4 py-10 md:px-6 md:py-12">
        {/* Top Section: Logo on left, Navigation columns on right */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand Logo and Name */}
          <div className="flex items-center">
            <Image
              src="/kc-logo-text.png"
              alt="Koshyari Consultants Pvt. Ltd."
              width={600}
              height={60}
              className="h-14 w-auto"
            />
          </div>

          {/* Navigation Links Section */}
          <div className="flex flex-wrap gap-8 sm:justify-end">
          <div className="flex flex-col">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-4">
              About Us
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <Link href="/about" className="hover:text-[var(--color-primary)] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
            <li>
                <Link href="/services" onClick={handleServicesLinkClick} className="hover:text-[var(--color-primary)] transition-colors">
                Financial and Management Accounting Services
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={handleServicesLinkClick} className="hover:text-[var(--color-primary)] transition-colors">
                  Business Setup and Secretarial Compliance
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={handleServicesLinkClick} className="hover:text-[var(--color-primary)] transition-colors">
                  Payroll Management
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={handleServicesLinkClick} className="hover:text-[var(--color-primary)] transition-colors">
                  Management Consulting
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={handleServicesLinkClick} className="hover:text-[var(--color-primary)] transition-colors">
                  IT Services
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={handleServicesLinkClick} className="hover:text-[var(--color-primary)] transition-colors">
                  ISO Certification
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <Link href="/privacy-policy" className="hover:text-[var(--color-primary)] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-[var(--color-primary)] transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>
        </div>

        <div className="my-8 h-px bg-[var(--color-brand-border)]"></div>

        <div className="mt-8 text-xs text-slate-500">
          <p>
            © 2025 Koshyari Consultants Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


