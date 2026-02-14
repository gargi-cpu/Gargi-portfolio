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
    <div className="glass rounded-[28px] p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-600/70">
            {company}
          </p>
          <h3 className="mt-2 text-xl font-[var(--font-display)] text-rose-950">
            {role}
          </h3>
        </div>
        <span className="rounded-full border border-rose-200/70 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-rose-700/80">
          {period}
        </span>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-rose-900/75">
        {highlights.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
