type SkillBadgeProps = {
  label: string;
};

export default function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="rounded-md border border-[color:var(--panel-border)] bg-[color:var(--bg-maroon)] px-2 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[color:var(--text-soft)]">
      {label}
    </span>
  );
}
