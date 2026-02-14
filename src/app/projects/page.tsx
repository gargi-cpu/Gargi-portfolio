import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-600/70">
          Projects
        </p>
        <h1 className="mt-3 text-3xl font-[var(--font-display)] text-rose-950">
          Case studies with clean architecture.
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-rose-900/75">
          Each project is structured around real problems, layered architecture,
          and the engineering choices that mattered.
        </p>
      </div>
      <div className="grid gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
