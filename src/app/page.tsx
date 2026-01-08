import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Your Company Name – Virtual CFO & Accounting Outsourcing",
  description:
    "Virtual CFO for startups and MNCs. We provide end-to-end finance, compliance, and staffing solutions through onshore and offshore models.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <section className="bg-[var(--color-brand-bg)]">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-10 md:grid-cols-[2fr,3fr] md:items-start">
            <div className="space-y-4 text-sm text-slate-700">
              <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                End to End Virtual CFO &amp; Accounting Support
              </h2>
              <p>
                With start ups and multinational corporations growing, there is
                a pressing need for accounting and consulting firms
                specializing in accounting and allied services such as
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
                that drive day to day efficiencies and support far sighted
                decision making.
              </p>
              <Link
                href="/solutions"
                className="inline-flex text-sm font-semibold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent)] transition-colors"
              >
                Explore onshore &amp; offshore models
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <ServiceCard
                title="Financial & Management Accounting"
                description="Robust books of account, management reporting, and actionable financial insights for busy founders and CFOs."
                items={[
                  "Day to day bookkeeping and accounting",
                  "Month end and year end closing support",
                  "Management reporting and analytics",
                ]}
              />
              <ServiceCard
                title="Business Setup and Secretarial Compliance"
                description="Complete support for company formation, registration, and ongoing secretarial compliance to keep your business legally compliant."
                items={[
                  "Company formation and registration",
                  "Secretarial compliance and filings",
                  "Board meetings and corporate governance",
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
              <ServiceCard
                title="Management Consulting"
                description="Strategic advisory services to help businesses optimize operations, improve performance, and achieve growth objectives."
                items={[
                  "Strategic planning and business advisory",
                  "Process optimization and efficiency improvement",
                  "Financial modeling and business analysis",
                ]}
              />
              <ServiceCard
                title="IT Services"
                description="Comprehensive IT solutions and technology services to support your business operations and digital transformation."
                items={[
                  "IT infrastructure setup and management",
                  "Software implementation and support",
                  "Cybersecurity and data protection",
                ]}
              />
              <ServiceCard
                title="ISO Certification"
                description="Expert guidance and support for ISO certification processes to enhance your business quality standards and credibility."
                items={[
                  "ISO certification consulting and preparation",
                  "Quality management system implementation",
                  "Audit support and compliance documentation",
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-brand-bg)] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div 
              className="rounded-2xl bg-cover bg-center bg-no-repeat px-8 py-12 md:px-10 md:py-16" 
              style={{
                backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.90), rgba(30, 58, 138, 0.85)), url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'
              }}
            >
              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl" style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>
                Local and Global Outsourcing, Built for Scale
              </h2>
              <p className="mt-4 text-base leading-relaxed text-blue-50">
                We provide{" "}
                <span className="font-semibold text-white">
                  end to end outsourcing services
                </span>{" "}
                to clients, both local and global. Our flexible engagement
                models ensure you get the right blend of onshore expertise and
                offshore efficiency.
              </p>
            </div>
            <div 
              className="rounded-2xl bg-cover bg-center bg-no-repeat px-8 py-12 md:px-10 md:py-16" 
              style={{
                backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.90), rgba(30, 58, 138, 0.85)), url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'
              }}
            >
              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl mb-4" style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>
                Tailored Solutions for Every Stage
              </h2>
              <p className="text-base leading-relaxed text-blue-50">
                Whether you are setting up a new entity, consolidating
                multiple locations, or transforming your finance function, we
                help design and operate a model that fits your pace of growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

