import Image from "next/image";
import Link from "next/link";

export default function FounderSection() {
  return (
    <section className="mt-12 bg-white py-12 md:mt-16 md:py-16">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12 md:justify-center">
          {/* Portrait Image */}
          <div className="flex-shrink-0 md:w-48">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-sm">
              <Image
                src="/founder.jpg"
                alt="Mrs. Kamla Singh, Associate Chartered Accountant and Founder"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 192px"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-semibold text-[var(--color-primary)] md:text-3xl">
                Our Founder
              </h2>
              <p className="mt-2 text-lg text-slate-700">
                Mrs. Kamla Singh
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Associate Chartered Accountant (ACA), Institute of Chartered Accountants of India
              </p>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-slate-600 md:text-base">
              <p>
                With over 30 years of experience in finance and compliance, Mrs. Kamla Singh brings deep expertise in managing accounts and advising Indian subsidiaries of multinational companies. An Associate Chartered Accountant (ACA) from the Institute of Chartered Accountants of India, she has built a distinguished career specializing in Virtual CFO services, setting up new verticals, and comprehensive project & team management.
              </p>

              <p>
                Her core expertise spans accounts outsourcing, payroll processing, company incorporation & secretarial compliances, and direct & indirect tax compliance. With extensive experience in investigation audits, due diligence, and statutory & tax audits, Mrs. Kamla Singh leads Virtual CFO, accounting, payroll & compliance projects for foreign clients&apos; Indian operations, serving as a critical bridge between foreign headquarters, Indian subsidiaries, and local consultants.
              </p>

              <p>
                Known for her proactive approach, perseverance, client-centric attitude, and strong relationship management, she has successfully managed and transitioned projects across India, including non-Mumbai clients.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2 flex justify-center md:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--color-accent)]"
              >
                Learn how we can support your Indian operations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

