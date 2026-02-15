import { normalizeText } from "@/lib/normalizeText";

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

function extractMetric(values: string[]): string {
  const found = values.find((item) => /(\d+%|latency|throughput|stability|performance)/i.test(item));
  return found ? normalizeText(found) : "Metric details are available on request.";
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
    <article className="panel gradient-border rounded-2xl p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="panel-title">Project</p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            {normalizeText(title)}
          </h3>
          <p className="mt-1 text-sm text-[color:var(--text-muted)]">
            {normalizeText(subtitle)}
          </p>
        </div>
        {github ? (
          <a
            className="rounded-md border border-[color:var(--panel-accent)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--text-primary)] transition hover:border-[color:var(--accent)]"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        ) : null}
      </div>

      <div className="mt-5 grid gap-4">
        <section className="rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--panel-soft)] p-4 text-sm">
          <p className="font-semibold text-white">Short problem statement</p>
          <p className="mt-1 text-[color:var(--text-muted)]">
            {normalizeText(problem)}
          </p>
        </section>
        <section className="rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--panel-soft)] p-4 text-sm">
          <p className="font-semibold text-white">Solution and architecture</p>
          <p className="mt-1 text-[color:var(--text-muted)]">
            {normalizeText(solution)}
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.1em] text-[color:var(--text-soft)]">
            Core flow: {architecture.map(normalizeText).join(" -> ")}
          </p>
        </section>
        <section className="rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--panel-soft)] p-4 text-sm text-[color:var(--text-muted)]">
          <p className="font-semibold text-white">What I personally implemented</p>
          <ul className="mt-2 space-y-1">
            {highlights.map((item) => (
              <li key={item}>- {normalizeText(item)}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--panel-soft)] p-4 text-sm text-[color:var(--text-muted)]">
          <p className="font-semibold text-white">Key metrics</p>
          <p className="mt-1">{extractMetric(highlights)}</p>
          <p className="mt-3 font-semibold text-white">Key tech</p>
          <p className="mt-1">{tech.map(normalizeText).join(", ")}</p>
          <p className="mt-3 font-semibold text-white">Skills demonstrated</p>
          <p className="mt-1">{skills.map(normalizeText).join(", ")}</p>
        </section>
      </div>
    </article>
  );
}
