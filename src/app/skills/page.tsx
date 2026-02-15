import SkillBadge from "@/components/SkillBadge";
import { powerStats, skillGroups } from "@/data/skills";
import { normalizeText } from "@/lib/normalizeText";

export default function SkillsPage() {
  return (
    <div className="flex flex-col gap-6">
      <section className="panel gradient-border rounded-2xl p-6">
        <p className="panel-title">Skills</p>
        <h1 className="section-heading mt-3">Technical skills</h1>
        <p className="mt-2 max-w-3xl text-sm text-[color:var(--text-muted)]">
          Skills grouped by backend development, systems design, cloud fundamentals, and frontend support.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.title} className="panel gradient-border rounded-2xl p-6">
            <p className="panel-title">{normalizeText(group.title)}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <SkillBadge key={`${group.title}-${skill}`} label={normalizeText(skill)} />
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="panel gradient-border rounded-2xl p-6">
        <p className="panel-title">Engineering strengths</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {powerStats.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--panel-soft)] p-4"
            >
              <p className="font-semibold text-white">{normalizeText(item.title)}</p>
              <p className="mt-2 text-sm text-[color:var(--text-muted)]">{normalizeText(item.detail)}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
