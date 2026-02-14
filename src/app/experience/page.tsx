import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-600/70">
          Experience
        </p>
        <h1 className="mt-3 text-3xl font-[var(--font-display)] text-rose-950">
          Internships with production standards.
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-rose-900/75">
          Focused on backend APIs, system reliability, and shipping with clear
          ownership.
        </p>
      </div>
      <div className="grid gap-6">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.company} {...experience} />
        ))}
      </div>
    </div>
  );
}
