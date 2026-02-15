import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-6">
      <section className="panel gradient-border rounded-2xl p-6">
        <p className="panel-title">Projects</p>
        <h1 className="section-heading mt-3">Engineering case studies</h1>
        <p className="mt-2 max-w-3xl text-sm text-[color:var(--text-muted)]">
          Each project is documented with problem framing, architecture decisions, implementation ownership, and measurable outcomes.
        </p>
      </section>
      <section className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>
    </div>
  );
}
