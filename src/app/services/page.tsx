import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services – Your Company Name",
  description:
    "Explore virtual CFO, accounting, budgeting, audit assistance, company secretary, and HR & payroll outsourcing services.",
};

const services = [
  {
    title: "Financial & Management Accounting",
    description:
      "Robust books of account, management reporting, and actionable financial insights for busy founders and CFOs.",
    items: [
      "Day to day bookkeeping and accounting",
      "Month end and year end closing support",
      "Management reporting and analytics",
    ],
  },
  {
    title: "Business Setup and Secretarial Compliance",
    description:
      "Complete support for company formation, registration, and ongoing secretarial compliance to keep your business legally compliant.",
    items: [
      "Company formation and registration",
      "Secretarial compliance and filings",
      "Board meetings and corporate governance",
    ],
  },
  {
    title: "Compliance, HR & Payroll",
    description:
      "Company secretary, HR, and payroll compliance handled seamlessly by a specialized team.",
    items: [
      "Company secretary compliance services",
      "Payroll processing and statutory filings",
      "Support with HR and employee lifecycle data",
    ],
  },
  {
    title: "Management Consulting",
    description:
      "Strategic advisory services to help businesses optimize operations, improve performance, and achieve growth objectives.",
    items: [
      "Strategic planning and business advisory",
      "Process optimization and efficiency improvement",
      "Financial modeling and business analysis",
    ],
  },
  {
    title: "IT Services",
    description:
      "Comprehensive IT solutions and technology services to support your business operations and digital transformation.",
    items: [
      "IT infrastructure setup and management",
      "Software implementation and support",
      "Cybersecurity and data protection",
    ],
  },
  {
    title: "ISO Certification",
    description:
      "Expert guidance and support for ISO certification processes to enhance your business quality standards and credibility.",
    items: [
      "ISO certification consulting and preparation",
      "Quality management system implementation",
      "Audit support and compliance documentation",
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
            We provide end to end outsourcing services to clients, local and
            global. Our comprehensive, customised offerings are designed to
            operate as your virtual CFO and accounts department, freeing your
            teams to focus on growth.
          </p>
          <p>
            Our core service lines span financial and management accounting,
            business setup and secretarial compliance, HR &amp; payroll services,
            management consulting, IT services and ISO certification support.
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


