import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-6">
      <section className="panel gradient-border rounded-2xl p-6">
        <p className="panel-title">Experience</p>
        <h1 className="section-heading mt-3">Professional experience</h1>
        <p className="mt-2 max-w-3xl text-sm text-[color:var(--text-muted)]">
          Internship work focused on backend API integration, reliability improvements, testing, and engineering collaboration.
        </p>
      </section>
      <section className="grid gap-6">
        {experiences.map((experience) => (
          <ExperienceCard key={`${experience.company}-${experience.role}`} {...experience} />
        ))}
      </section>
    </div>
  );
}
