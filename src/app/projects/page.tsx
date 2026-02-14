import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="panel rounded-2xl p-6">
        <p className="panel-title">Projects</p>
        <h1 className="mt-4 text-xl font-semibold text-white">
          Case studies with clean architecture.
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-[color:var(--text-muted)]">
          Each project is structured around real problems, layered architecture,
          and the engineering choices that mattered.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
