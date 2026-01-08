import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About – Koshyari Consultants Pvt. Ltd.",
  description:
    "Learn more about Koshyari Consultants Pvt. Ltd. your virtual CFO and accounting outsourcing partner for startups and MNCs.",
};

export default function AboutPage() {
  return (
    <div className="bg-white flex-1 w-full">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <section className="space-y-4 text-sm text-slate-700">
          <h1 className="text-2xl font-semibold text-slate-900">About Us</h1>
          <p>
            Koshyari Consultants Pvt. Ltd. is a specialised finance and compliance partner
            for high growth startups and multinational corporations. We operate
            as your{" "}
            <span className="font-semibold">
              virtual CFO and accounts department
            </span>{" "}
            through onshore and offshore delivery models.
          </p>
          <p>
            With start ups and MNCs growing, there is a need for accounting and
            consulting firms focusing on accounting and allied services such as
            formation and registration of new companies, accounting, payroll
            processing, secretarial compliance, reconciliations, and physical
            verification of large scale inventory and fixed assets. We are
            built to address exactly this need.
          </p>
          <p>
            We hire talented and skilled resources and train them extensively to
            take over your company&apos;s cumbersome compliance processes,
            thereby freeing up your internal teams. Our services not only drive
            day to day efficiencies but also foster far sighted decision making
            at the Board and leadership level.
          </p>
          <p>
            We understand the industry&apos;s growing challenges and specialise
            in providing{" "}
            <span className="font-semibold">
              customised staffing and outsourcing solutions
            </span>{" "}
            across functions, entities, and geographies.
          </p>
        </section>

        <section className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm">
            <h2 className="text-base font-semibold text-slate-900">
              Our Vision
            </h2>
            <p className="mt-2 text-slate-700">
              Fill Content
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm">
            <h2 className="text-base font-semibold text-slate-900">
              Our Approach
            </h2>
            <p className="mt-2 text-slate-700">
              Fill Content
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm">
            <h2 className="text-base font-semibold text-slate-900">
              Leadership &amp; Team
            </h2>
            <p className="mt-2 text-slate-700">
              Fill Content
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}


