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
    <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-[color:var(--text-soft)]">
      {nodes.map((node, index) => (
        <div key={`${node}-${index}`} className="flex items-center gap-2">
          <span className="rounded-md border border-[color:var(--panel-border)] bg-[color:var(--bg-maroon)] px-3 py-1 font-medium uppercase tracking-[0.2em]">
            {node}
          </span>
          {index < nodes.length - 1 ? (
            <span className="text-[color:var(--text-soft)]">→</span>
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
    <article className="panel rounded-2xl p-6">
      <div className="flex flex-col gap-3">
        <p className="panel-title">
          {subtitle}
        </p>
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--text-soft)]">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-md border border-[color:var(--panel-border)] bg-[color:var(--bg-maroon)] px-3 py-1"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--bg-maroon)] p-4 text-sm text-[color:var(--text-muted)]">
          <p className="font-semibold text-white">Problem</p>
          <p className="mt-2">{problem}</p>
        </div>
        <div className="rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--bg-maroon)] p-4 text-sm text-[color:var(--text-muted)]">
          <p className="font-semibold text-white">Solution</p>
          <p className="mt-2">{solution}</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="panel-title">
          Architecture
        </p>
        <ArchitectureDiagram nodes={architecture} />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--bg-maroon)] p-4 text-sm text-[color:var(--text-muted)]">
          <p className="font-semibold text-white">Engineering Highlights</p>
          <ul className="mt-2 space-y-2">
            {highlights.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--bg-maroon)] p-4 text-sm text-[color:var(--text-muted)]">
          <p className="font-semibold text-white">Skills Proved</p>
          <ul className="mt-2 space-y-2">
            {skills.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          {github ? (
            <a
              className="mt-4 inline-flex rounded-md border border-[color:var(--panel-accent)] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--text-muted)] transition hover:border-[color:var(--accent)] hover:text-white"
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
