import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services – Your Company Name",
  description:
    "Explore virtual CFO, accounting, budgeting, audit assistance, company secretary, and HR & payroll outsourcing services.",
};

const services = [
  {
    title: "Financial and Management Accounting Services",
    description:
      "Comprehensive accounting support designed for growing startups and complex MNC structures.",
    items: [
      "Day-to-day accounting and bookkeeping",
      "Finalisation of accounts and financial reporting",
      "Management accounting and analytical reviews",
    ],
  },
  {
    title: "Budgetary Management and MIS Reporting",
    description:
      "Forward-looking budgets, forecasts, and MIS packs for better visibility and control.",
    items: [
      "Budget preparation and revisions",
      "Variance analysis and scenario planning",
      "Board-ready MIS reports and dashboards",
    ],
  },
  {
    title: "Audit Assistance and Support",
    description:
      "End-to-end assistance for statutory, internal, and group audits.",
    items: [
      "Preparing audit schedules and reconciliations",
      "Responding to auditor queries",
      "Supporting local and global audit requirements",
    ],
  },
  {
    title: "Company Secretary Compliance Services",
    description:
      "Secretarial support for entity formation, governance, and recurring compliances.",
    items: [
      "Formation and registration of new companies",
      "ROC and other statutory filings",
      "Board and shareholder meeting documentation",
    ],
  },
  {
    title: "HR and Payroll Services",
    description:
      "End-to-end payroll processing and HR data support, including statutory compliance.",
    items: [
      "Payroll processing and payslip generation",
      "PF/ESI and other statutory compliances",
      "TDS on salaries and related filings",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <header className="max-w-3xl space-y-3 text-sm text-slate-700">
          <h1 className="text-2xl font-semibold text-slate-900">Our Services</h1>
          <p>
            We provide end-to-end outsourcing services to clients, local and
            global. Our comprehensive, customised offerings are designed to
            operate as your virtual CFO and accounts department, freeing your
            teams to focus on growth.
          </p>
          <p>
            Our core service lines span financial and management accounting,
            budgeting and MIS, audit assistance, company secretary compliance,
            and HR &amp; payroll services including statutory compliances.
          </p>
        </header>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              items={service.items}
            />
          ))}
        </section>
      </div>
    </div>
  );
}


