import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Your Company Name – Virtual CFO & Accounting Outsourcing",
  description:
    "Virtual CFO and accounting outsourcing partner for startups and MNCs. We provide end-to-end finance, compliance, and staffing solutions through onshore and offshore models.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-10 md:grid-cols-[2fr,3fr] md:items-start">
            <div className="space-y-4 text-sm text-slate-700">
              <h2 className="text-xl font-semibold text-slate-900">
                End-to-End Virtual CFO &amp; Accounting Support
              </h2>
              <p>
                With start-ups and multinational corporations growing, there is
                a pressing need for accounting and consulting firms
                specializing in accounting and allied services &mdash;
                including formation and registration of new companies,
                bookkeeping, payroll processing, secretarial compliance,
                reconciliations, and physical verification of large-scale
                inventory and fixed assets.
              </p>
              <p>
                We come in as your{" "}
                <span className="font-semibold">
                  virtual CFO and complete accounts department
                </span>{" "}
                through onshore and offshore models, tailored to your growth
                stage and geography.
              </p>
              <p>
                Our teams take over your cumbersome compliance processes,
                freeing internal stakeholders to focus on strategy, growth,
                and innovation.
              </p>
              <p>
                We understand the industry&apos;s growing challenges and
                specialize in{" "}
                <span className="font-semibold">
                  customized staffing and outsourcing solutions
                </span>{" "}
                that drive day-to-day efficiencies and support far-sighted
                decision-making.
              </p>
              <Link
                href="/solutions"
                className="inline-flex text-sm font-semibold text-slate-900 underline underline-offset-4"
              >
                Explore onshore &amp; offshore models
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <ServiceCard
                title="Financial & Management Accounting"
                description="Robust books of account, management reporting, and actionable financial insights for busy founders and CFOs."
                items={[
                  "Day-to-day bookkeeping and accounting",
                  "Month-end and year-end closing support",
                  "Management reporting and analytics",
                ]}
              />
              <ServiceCard
                title="Budgetary Management & MIS Reporting"
                description="Forward-looking budgets, forecasts, and MIS dashboards that guide decisions rather than just record history."
                items={[
                  "Budget preparation and tracking",
                  "Variance analysis and forecasting",
                  "Custom MIS dashboards and packs",
                ]}
              />
              <ServiceCard
                title="Audit Assistance & Support"
                description="End-to-end coordination with auditors and preparation of robust audit-ready documentation."
                items={[
                  "Audit schedules and reconciliations",
                  "Support for statutory and internal audits",
                  "Coordination with local and global audit teams",
                ]}
              />
              <ServiceCard
                title="Compliance, HR & Payroll"
                description="Company secretary, HR, and payroll compliance handled seamlessly by a specialized team."
                items={[
                  "Company secretary compliance services",
                  "Payroll processing and statutory filings",
                  "Support with HR and employee lifecycle data",
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-8 md:grid-cols-[3fr,2fr] md:items-center">
            <div className="space-y-4 text-sm text-slate-700">
              <h2 className="text-xl font-semibold text-slate-900">
                Local and Global Outsourcing, Built for Scale
              </h2>
              <p>
                We provide{" "}
                <span className="font-semibold">
                  end-to-end outsourcing services
                </span>{" "}
                to clients, both local and global. Our flexible engagement
                models ensure you get the right blend of onshore expertise and
                offshore efficiency.
              </p>
              <p>
                Whether you are setting up a new entity, consolidating
                multiple locations, or transforming your finance function, we
                help design and operate a model that fits your pace of growth.
              </p>
            </div>
            <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-xs text-slate-700">
              <p className="font-semibold text-slate-900">
                Replace this panel with your key differentiators:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Years of experience and leadership profiles</li>
                <li>Sector focus (e.g., SaaS, manufacturing, retail)</li>
                <li>Number of countries / entities supported</li>
              </ul>
              <p className="text-slate-500">
                These are placeholders to be updated with your own story,
                numbers, and proof points.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

