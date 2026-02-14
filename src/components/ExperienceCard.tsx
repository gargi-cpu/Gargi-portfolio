type ExperienceCardProps = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export default function ExperienceCard({
  company,
  role,
  period,
  highlights,
}: ExperienceCardProps) {
  return (
    <div className="panel rounded-2xl p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="panel-title">
            {company}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-white">
            {role}
          </h3>
        </div>
        <span className="rounded-md border border-[color:var(--panel-border)] bg-[color:var(--bg-maroon)] px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--text-soft)]">
          {period}
        </span>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-[color:var(--text-muted)]">
        {highlights.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
