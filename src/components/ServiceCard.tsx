type ServiceCardProps = {
  title: string;
  description: string;
  items?: string[];
};

export function ServiceCard({ title, description, items }: ServiceCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-[var(--color-brand-border)] bg-white p-5 text-sm shadow-sm">
      <h3 className="text-base font-semibold text-[var(--color-primary)]">{title}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
      {items && items.length > 0 && (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-slate-600">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}


