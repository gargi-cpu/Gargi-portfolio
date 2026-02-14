type ProjectCardProps = {
  title: string;
  subtitle: string;
  tech: string[];
  problem: string;
  solution: string;
  architecture: string[];
  highlights: string[];
  skills: string[];
  github?: string;
};

function ArchitectureDiagram({ nodes }: { nodes: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-rose-800/80">
      {nodes.map((node, index) => (
        <div key={`${node}-${index}`} className="flex items-center gap-2">
          <span className="rounded-full border border-rose-200/80 bg-white/70 px-3 py-1 font-semibold uppercase tracking-[0.2em]">
            {node}
          </span>
          {index < nodes.length - 1 ? (
            <span className="text-rose-400">→</span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default function ProjectCard({
  title,
  subtitle,
  tech,
  problem,
  solution,
  architecture,
  highlights,
  skills,
  github,
}: ProjectCardProps) {
  return (
    <article className="glass rounded-[36px] p-8">
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-600/70">
          {subtitle}
        </p>
        <h3 className="text-2xl font-[var(--font-display)] text-rose-950">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-700/70">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-rose-200/70 bg-white/70 px-3 py-1"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-2xl border border-rose-100/80 bg-white/70 p-5 text-sm text-rose-900/80">
          <p className="font-semibold text-rose-700">Problem</p>
          <p className="mt-2">{problem}</p>
        </div>
        <div className="rounded-2xl border border-rose-100/80 bg-white/70 p-5 text-sm text-rose-900/80">
          <p className="font-semibold text-rose-700">Solution</p>
          <p className="mt-2">{solution}</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-600/70">
          Architecture
        </p>
        <ArchitectureDiagram nodes={architecture} />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-rose-100/80 bg-white/70 p-5 text-sm text-rose-900/80">
          <p className="font-semibold text-rose-700">Engineering Highlights</p>
          <ul className="mt-2 space-y-2">
            {highlights.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-rose-100/80 bg-white/70 p-5 text-sm text-rose-900/80">
          <p className="font-semibold text-rose-700">Skills Proved</p>
          <ul className="mt-2 space-y-2">
            {skills.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          {github ? (
            <a
              className="mt-4 inline-flex rounded-full border border-rose-200/80 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-rose-700 transition hover:border-rose-300"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
