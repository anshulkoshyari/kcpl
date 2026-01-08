import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights – Your Company Name",
  description:
    "Placeholder hub for Your Company Name articles, tax alerts, and insights on virtual CFO and outsourcing topics.",
};

export default function InsightsPage() {
  return (
    <div className="bg-white flex-1 w-full">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <header className="max-w-3xl space-y-3 text-sm text-slate-700">
          <h1 className="text-2xl font-semibold text-slate-900">Insights</h1>
          <p>
            This section is a placeholder for your articles, tax alerts, thought
            leadership pieces, and guides—similar to the News &amp; Articles
            section on SP Global (
            <span className="underline">spglobale.com</span>) and the Insights
            area on DHC (<span className="underline">dhc.co.in</span>).
          </p>
        </header>

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-700">
            <p className="font-semibold text-slate-900">
              Placeholder Article Title 1
            </p>
            <p className="mt-1 text-slate-500">5 min read · Month DD, YYYY</p>
            <p className="mt-2">
              Replace this card with a real article or tax alert that your firm
              publishes for clients.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-700">
            <p className="font-semibold text-slate-900">
              Placeholder Article Title 2
            </p>
            <p className="mt-1 text-slate-500">7 min read · Month DD, YYYY</p>
            <p className="mt-2">
              Use this area to host budget analyses, regulatory updates, or
              sector-specific insights.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-700">
            <p className="font-semibold text-slate-900">
              Placeholder Article Title 3
            </p>
            <p className="mt-1 text-slate-500">10 min read · Month DD, YYYY</p>
            <p className="mt-2">
              You can later convert this into a dynamic blog powered by a CMS or
              markdown files.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}


