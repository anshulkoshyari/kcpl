import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engagement Models – Your Company Name",
  description:
    "Discover onshore, offshore, and hybrid virtual CFO and accounting outsourcing models tailored to your organisation.",
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
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
            <h2 className="text-base font-semibold text-slate-900">
              Onshore Model
            </h2>
            <p>
              Your finance and compliance work is managed from your home country
              by a dedicated team that closely interfaces with business
              stakeholders.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs">
              <li>Ideal for early-stage or highly regulated environments</li>
              <li>Strong proximity to management and operating teams</li>
              <li>Easy collaboration for cross-functional initiatives</li>
            </ul>
          </div>

          <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
            <h2 className="text-base font-semibold text-slate-900">
              Offshore / Hybrid Model
            </h2>
            <p>
              A blended team structure, with core relationship and governance
              onshore, and transaction-heavy activities handled from an offshore
              delivery centre.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs">
              <li>Cost-efficient access to trained finance talent</li>
              <li>24x5 coverage for global operations, if required</li>
              <li>Standardised processes and centralised controls</li>
            </ul>
          </div>
        </section>

        <section className="mt-10 space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">
            How We Work With You
          </h2>
          <p>
            We start with a discovery and assessment phase to understand your
            current finance, accounting, and compliance landscape. Based on
            this, we co-create an operating model that defines roles,
            responsibilities, SLAs, and governance structures.
          </p>
          <p>
            Use this section to add details about your typical timelines,
            implementation approach, tools and technologies used, and any
            transition methodology.
          </p>
        </section>
      </div>
    </div>
  );
}


