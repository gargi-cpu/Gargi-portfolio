import Hero from "@/components/Hero";
import SkillBadge from "@/components/SkillBadge";
import { powerStats, skillGroups } from "@/data/skills";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />

      <section className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="glass rounded-[32px] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-600/70">
            About
          </p>
          <h2 className="mt-3 text-2xl font-[var(--font-display)] text-rose-950">
            Engineer-first, not influencer-style.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-rose-900/75">
            Internships at Microsoft × SAP and EY GDS shaped my approach to
            systems: clear contracts, stable data flows, and measurable outcomes.
            I prioritize reliability and clean architecture over shortcuts.
          </p>
          <a
            className="mt-6 inline-flex rounded-full border border-rose-200/80 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-rose-700 transition hover:border-rose-300"
            href="/about"
          >
            Read More
          </a>
        </div>
        <div className="glass rounded-[32px] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-600/70">
            Experience
          </p>
          <h2 className="mt-3 text-2xl font-[var(--font-display)] text-rose-950">
            Real-world systems, real-world standards.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-rose-900/75">
            I&apos;ve shipped across enterprise environments, supporting API
            stability, debugging workflows, and production quality gates.
          </p>
          <a
            className="mt-6 inline-flex rounded-full border border-rose-200/80 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-rose-700 transition hover:border-rose-300"
            href="/experience"
          >
            View Timeline
          </a>
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-600/70">
            Power Stats
          </p>
          <h2 className="mt-3 text-3xl font-[var(--font-display)] text-rose-950">
            Focused strengths, production-ready skills.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {powerStats.map((stat) => (
            <div
              key={stat.title}
              className="glass rounded-[28px] p-6 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-lg font-[var(--font-display)] text-rose-950">
                {stat.title}
              </p>
              <p className="mt-2 text-sm text-rose-900/75">{stat.detail}</p>
            </div>
          ))}
        </div>
        <div className="glass rounded-[28px] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-600/70">
            Skills
          </p>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <p className="text-sm font-semibold text-rose-900">
                  {group.title}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillBadge key={skill} label={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="glass rounded-[32px] p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-600/70">
          Projects
        </p>
        <h2 className="mt-3 text-2xl font-[var(--font-display)] text-rose-950">
          Case studies over demos.
        </h2>
        <p className="mt-3 text-sm text-rose-900/75">
          Each project is structured like a system design review: problem,
          solution, architecture, and engineering highlights.
        </p>
        <a
          className="mt-6 inline-flex rounded-full border border-rose-200/80 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-rose-700 transition hover:border-rose-300"
          href="/projects"
        >
          Explore Projects
        </a>
      </section>
    </div>
  );
}
