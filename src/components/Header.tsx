"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/insights", label: "Resources" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-brand-border)] bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8 lg:px-12">
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-[var(--color-primary)] text-xs font-semibold text-white flex items-center justify-center">
            {/* Placeholder logo initials */}
            YC
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-[var(--color-primary)]">
              Koshyari Consultants Pvt. Ltd.
            </span>
            <span className="text-xs text-slate-500">
              Your Virtual CFO
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-10">
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-[var(--color-primary)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden rounded-full bg-[var(--color-primary)] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[var(--color-accent)] md:inline-block"
          >
            Get in Touch
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col gap-1.5 p-2 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 bg-[var(--color-primary)] transition-all ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-[var(--color-primary)] transition-all ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-[var(--color-primary)] transition-all ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-[var(--color-brand-border)] bg-white md:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium text-slate-700 transition-colors hover:text-[var(--color-primary)]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-full bg-[var(--color-primary)] px-4 py-2 text-center text-xs font-semibold text-white shadow-sm transition hover:bg-[var(--color-accent)]"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}


