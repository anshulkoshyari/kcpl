import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Engagement Models" },
  { href: "/insights", label: "Insights" },
];

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-slate-900 text-xs font-semibold text-white flex items-center justify-center">
            {/* Placeholder logo initials */}
            YC
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-900">
              Koshyari Consultants Pvt. Ltd.
            </span>
            <span className="text-xs text-slate-500">
              Your Virtual CFO &amp; Outsourcing Partner
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800 md:inline-block"
        >
          Talk to an Expert
        </Link>
      </div>
    </header>
  );
}


