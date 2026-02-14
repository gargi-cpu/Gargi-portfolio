import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="panel rounded-2xl p-6">
        <p className="panel-title">Experience</p>
        <h1 className="mt-4 text-xl font-semibold text-white">
          Internships with production standards.
        </h1>
        <p className="mt-2 text-sm text-[color:var(--text-muted)]">
          Focused on backend APIs, system reliability, and shipping with clear
          ownership.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.company} {...experience} />
        ))}
      </div>
    </div>
  );
}
