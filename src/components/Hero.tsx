import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 md:flex-row md:items-center md:gap-12 md:px-6 md:py-20">
        <div className="flex-1 space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
            Virtual CFO for Startups &amp; MNCs
          </p>
          <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
            Virtual CFO &amp; Accounting Outsourcing for High-Growth Businesses
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-200 md:text-base">
            With startups and MNCs growing rapidly, there is a rising need for
            accounting and consulting firms specializing in accounting and
            allied services. We step in as your{" "}
            <span className="font-semibold">virtual CFO and accounts team</span>{" "}
            through flexible onshore and offshore models.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-100"
            >
              Talk to an Expert
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2 text-sm font-semibold text-white transition hover:border-slate-300 hover:bg-slate-900"
            >
              View Services
            </Link>
          </div>
        </div>
        <div className="flex-1 space-y-4 text-sm text-slate-100">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
            <h2 className="text-sm font-semibold text-white">
              Your Virtual CFO &amp; Accounts Department
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              We hire talented and skilled resources and train them extensively
              to take over your company&apos;s cumbersome compliance processes,
              freeing up your internal teams. Our services not only drive
              day-to-day efficiencies but also foster far-sighted
              decision-making.
            </p>
          </div>
          <div className="grid gap-3 text-xs md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-3">
              <p className="text-2xl font-semibold">XX+</p>
              <p className="mt-1 text-slate-300">
                Clients served (local and global)
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-3">
              <p className="text-2xl font-semibold">YY+</p>
              <p className="mt-1 text-slate-300">
                Industries supported with tailored solutions
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-3">
              <p className="text-2xl font-semibold">ZZ</p>
              <p className="mt-1 text-slate-300">
                Years of combined finance and compliance experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


