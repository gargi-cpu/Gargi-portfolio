import Image from "next/image";
import SkillBadge from "@/components/SkillBadge";
import { skillGroups } from "@/data/skills";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";

export default function Home() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <section className="panel rounded-2xl p-6 lg:col-span-2">
        <p className="panel-title">Home</p>
        <div className="mt-4 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-3">
            <h1 className="text-2xl font-semibold text-white">
              Gargi Singh
            </h1>
            <p className="text-sm text-[color:var(--text-muted)]">
              Software Developer (Fresher)
            </p>
            <p className="text-sm text-[color:var(--text-soft)]">
              Java &amp; Python Backend
            </p>
            <p className="text-sm text-[color:var(--text-soft)]">
              RESTful APIs • Cloud Fundamentals
            </p>
            <div className="pt-2 text-sm text-[color:var(--text-muted)]">
              <p>Internships:</p>
              <p>EY Global Delivery Services</p>
              <p>Microsoft × SAP</p>
            </div>
            <a
              className="mt-4 inline-flex rounded-md border border-[color:var(--panel-accent)] px-4 py-2 text-xs font-medium text-[color:var(--text-muted)] hover:border-[color:var(--accent)] hover:text-white"
              href="/Gargi_Singh_Resume.pdf"
            >
              View Resume
            </a>
          </div>
          <div className="flex items-start justify-start">
            <Image
              src="/images/gargi-profile.jpg"
              alt="Gargi Singh"
              width={240}
              height={280}
              className="h-48 w-40 rounded-xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="panel rounded-2xl p-6">
        <p className="panel-title">About</p>
        <div className="mt-4 space-y-3 text-sm text-[color:var(--text-muted)]">
          <p>B.Tech Computer Science (2026) — Anand Engineering College</p>
          <p>Internships at Microsoft × SAP and EY GDS</p>
          <p>Oracle OCI Developer (2025)</p>
          <p>Learning: Kubernetes, Microservices, Async &amp; streaming systems</p>
        </div>
      </section>

      <section className="panel rounded-2xl p-6">
        <p className="panel-title">Experience</p>
        <div className="mt-4 space-y-4 text-sm text-[color:var(--text-muted)]">
          <div>
            <p className="text-white">EY Global Delivery Services</p>
            <p>Full-Stack Intern | Feb–Mar 2025</p>
            <p>• REST API integration</p>
            <p>• Bug fixing &amp; testing (~10% stability gain)</p>
          </div>
          <div>
            <p className="text-white">Microsoft × SAP (TechSaksham AI)</p>
            <p>AI Intern | Jan–Feb 2025</p>
            <p>• Backend API assistance</p>
            <p>• Testing &amp; documentation</p>
          </div>
        </div>
      </section>

      <section className="panel rounded-2xl p-6 lg:col-span-2">
        <p className="panel-title">Projects</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--bg-maroon)] p-4"
            >
              <p className="text-sm font-semibold text-white">
                {project.title} — {project.subtitle}
              </p>
              <p className="mt-2 text-xs text-[color:var(--text-soft)]">
                Tech: {project.tech.join(", ")}
              </p>
              <p className="mt-2 text-xs text-[color:var(--text-muted)]">
                Problem: {project.problem}
              </p>
              <p className="mt-1 text-xs text-[color:var(--text-muted)]">
                Solution: {project.solution}
              </p>
              <p className="mt-1 text-xs text-[color:var(--text-muted)]">
                Highlight: {project.highlights[2] ?? project.highlights[0]}
              </p>
              {project.github ? (
                <a
                  className="mt-3 inline-flex text-xs text-[color:var(--text-muted)] hover:text-white"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="panel rounded-2xl p-6">
        <p className="panel-title">Skills</p>
        <div className="mt-4 space-y-4 text-sm text-[color:var(--text-muted)]">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <p className="text-white">{group.title}</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="panel rounded-2xl p-6 lg:col-span-3">
        <p className="panel-title">Contact</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3 text-sm text-[color:var(--text-muted)]">
          <div>
            <p className="text-white">Email</p>
            <a className="hover:text-white" href="mailto:gargi9608@gmail.com">
              gargi9608@gmail.com
            </a>
          </div>
          <div>
            <p className="text-white">LinkedIn</p>
            <a
              className="hover:text-white"
              href="https://www.linkedin.com/in/gargi-singh-62ab82315/"
              target="_blank"
              rel="noreferrer"
            >
              Profile
            </a>
          </div>
          <div>
            <p className="text-white">GitHub</p>
            <a
              className="hover:text-white"
              href="https://github.com/gargi-cpu"
              target="_blank"
              rel="noreferrer"
            >
              github.com/gargi-cpu
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
