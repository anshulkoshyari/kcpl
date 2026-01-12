import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Engagement Models – Koshyari Consultants Pvt. Ltd.",
  description:
    "Koshyari Consultants Pvt. Ltd. – Expert Virtual CFO, accounting, tax compliance & company secretarial services in Mumbai. Trusted financial solutions for startups, SMEs & MNCs.",
};

export default function SolutionsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <header className="max-w-3xl space-y-3 text-sm text-slate-700">
          <h1 className="text-2xl font-semibold text-slate-900">
            Engagement Models &amp; Solutions
          </h1>
          <p>
            We step in as your virtual CFO and accounts department through{" "}
            <span className="font-semibold">onshore and offshore models</span>,
            tailored to your stage of growth, industry, and geographic spread.
          </p>
          <p>
            Our goal is to design a stable, scalable operating model that
            delivers day-to-day efficiency while enabling far-sighted
            decision-making.
          </p>
        </header>

        <section className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="space-y-3 rounded-2xl border border-[var(--color-brand-border)] bg-white p-5 text-sm shadow-sm">
            <h2 className="text-base font-semibold text-[var(--color-primary)]">
              Onshore Model
            </h2>
            <p className="text-slate-600">
              Your finance and compliance work is managed from your home country
              by a dedicated team that closely interfaces with business
              stakeholders.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-slate-600">
              <li>Ideal for early-stage or highly regulated environments</li>
              <li>Strong proximity to management and operating teams</li>
              <li>Easy collaboration for cross-functional initiatives</li>
            </ul>
          </div>

          <div className="space-y-3 rounded-2xl border border-[var(--color-brand-border)] bg-white p-5 text-sm shadow-sm">
            <h2 className="text-base font-semibold text-[var(--color-primary)]">
              Offshore / Hybrid Model
            </h2>
            <p className="text-slate-600">
              A blended team structure, with core relationship and governance
              onshore, and transaction-heavy activities handled from an offshore
              delivery centre.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-slate-600">
              <li>Cost-efficient access to trained finance talent</li>
              <li>24x5 coverage for global operations, if required</li>
              <li>Standardised processes and centralised controls</li>
            </ul>
          </div>
        </section>

        <section className="mt-10 space-y-3 rounded-2xl border border-[var(--color-brand-border)] bg-white p-5 text-sm shadow-sm">
          <h2 className="text-base font-semibold text-[var(--color-primary)]">
            How We Work With You
          </h2>
          <p className="text-slate-600">
            We start with a discovery and assessment phase to understand your
            current finance, accounting, and compliance landscape. Based on
            this, we co-create an operating model that defines roles,
            responsibilities, SLAs, and governance structures.
          </p>
          <p className="text-slate-600">
            Use this section to add details about your typical timelines,
            implementation approach, tools and technologies used, and any
            transition methodology.
          </p>
        </section>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600 mb-4">
            Ready to discuss how our engagement models can be tailored to your organization&apos;s needs?{" "}
            <Link
              href="/contact"
              className="font-semibold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent)] transition-colors"
            >
              Get in Touch
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}


