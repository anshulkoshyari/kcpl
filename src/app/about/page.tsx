import type { Metadata } from "next";
import FounderSection from "@/components/FounderSection";

export const metadata: Metadata = {
  title: "About – Koshyari Consultants Pvt. Ltd.",
  description:
    "Learn more about Koshyari Consultants Pvt. Ltd. your virtual CFO and accounting outsourcing partner for startups and MNCs.",
};

export default function AboutPage() {
  return (
    <div className="bg-white flex-1 w-full">
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <section className="space-y-6 text-center md:text-left">
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            About Us
          </h1>
          
          <div className="space-y-5 text-sm leading-relaxed text-slate-700 md:text-base">
            <p>
            Koshyari Consultants Pvt. Ltd. is a specialised finance and compliance partner
            for high growth startups and multinational corporations. We operate
            as your Virtual CFO and Allied Services through onshore and offshore delivery models.
          </p>
          
          <p>
            With startups and MNCs growing rapidly, there is a rising need for accounting and
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
            in providing customised staffing and outsourcing solutions
            across functions, entities, and geographies.
          </p>
          </div>
        </section>
      </div>
      
      <FounderSection />
    </div>
  );
}