"use client";

export function ContactForm() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
      <form
        className="space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          alert(
            "This is a placeholder form handler. Replace with your own submission logic or integration."
          );
        }}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-semibold uppercase tracking-wide text-slate-500"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-0 transition focus:border-slate-900"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-xs font-semibold uppercase tracking-wide text-slate-500"
            >
              Company
            </label>
            <input
              id="company"
              name="company"
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-slate-900"
              placeholder="Your Company Name"
            />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-wide text-slate-500"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-slate-900"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold uppercase tracking-wide text-slate-500"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-slate-900"
              placeholder="+91-00000-00000"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="service"
            className="block text-xs font-semibold uppercase tracking-wide text-slate-500"
          >
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-slate-900"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            <option value="finance">
              Financial &amp; Management Accounting
            </option>
            <option value="budget">
              Budgetary Management &amp; MIS Reporting
            </option>
            <option value="audit">Audit Assistance &amp; Support</option>
            <option value="secretarial">Company Secretary Compliance</option>
            <option value="hrpayroll">HR &amp; Payroll Services</option>
            <option value="other">Other / Combination</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-wide text-slate-500"
          >
            Brief Description
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-slate-900"
            placeholder="Share a short note on your current setup, challenges, and what you are looking for."
          />
        </div>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
        >
          Submit Enquiry
        </button>
      </form>
    </section>
  );
}


