import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer – Koshyari Consultants Pvt. Ltd.",
  description:
    "Disclaimer for Koshyari Consultants Pvt. Ltd.",
};

export default function DisclaimerPage() {
  return (
    <div className="bg-white flex-1 w-full">
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <h1 className="text-2xl font-semibold text-slate-900">
          Disclaimer
        </h1>
        
        <div className="mt-8 text-sm text-slate-700 leading-relaxed">
          <p>
            Koshyari Consultants Pvt. Ltd. is a Private Limited firm which was
            incorporated in India. The KCPL web pages have been carefully
            prepared, but it has been written in general terms and should be
            seen as broad guidance only. The web pages cannot be relied upon to
            cover specific situations and you should not act, or refrain from
            acting, upon the information contained therein without obtaining
            specific professional advice. Please contact KCPL to discuss these
            matters in the context of your particular circumstances. KCPL, its
            partners, employees and agents do not accept or assume any liability
            or duty of care for any loss arising from any action taken or not
            taken by anyone in reliance on the information in these web pages or
            for any decision based on it.
          </p>
        </div>
      </div>
    </div>
  );
}

