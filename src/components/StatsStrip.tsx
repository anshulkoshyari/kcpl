export function StatsStrip() {
  return (
    <section className="bg-[var(--color-brand-bg)] py-8 md:py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div 
            className="rounded-2xl bg-cover bg-center bg-no-repeat px-6 py-8 md:px-8 md:py-10" 
            style={{
              backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.90), rgba(30, 58, 138, 0.85)), url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'
            }}
          >
            <p className="text-lg font-bold text-white">
              500+ clients across 10+ countries
            </p>
            <p className="mt-1 text-sm text-blue-100">
              We have served clients across various industries and geographies.
            </p>
          </div>
          <div 
            className="rounded-2xl bg-cover bg-center bg-no-repeat px-6 py-8 md:px-8 md:py-10" 
            style={{
              backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.90), rgba(30, 58, 138, 0.85)), url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'
            }}
          >
            <p className="text-lg font-bold text-white">
              End to end outsourcing
            </p>
            <p className="mt-1 text-sm text-blue-100">
              From company formation to ongoing finance &amp; compliance.
            </p>
          </div>
          <div 
            className="rounded-2xl bg-cover bg-center bg-no-repeat px-6 py-8 md:px-8 md:py-10" 
            style={{
              backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.90), rgba(30, 58, 138, 0.85)), url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'
            }}
          >
            <p className="text-lg font-bold text-white">
              Onshore and offshore models
            </p>
            <p className="mt-1 text-sm text-blue-100">
              Build your ideal virtual CFO &amp; accounts department.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}