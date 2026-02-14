type SkillBadgeProps = {
  label: string;
};

export default function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="rounded-full border border-rose-200/70 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-rose-700/80">
      {label}
    </span>
  );
}
