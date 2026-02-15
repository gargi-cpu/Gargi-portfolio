import Image from "next/image";
import Link from "next/link";
import DecorativeOrb from "@/components/DecorativeOrb";
import SkillBadge from "@/components/SkillBadge";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { normalizeText } from "@/lib/normalizeText";

export default function Home() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="grid gap-6">
      <section className="panel gradient-border grid gap-6 rounded-2xl p-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-4">
          <p className="panel-title">Home</p>
          <h1 className="section-heading">Gargi Singh</h1>
          <p className="text-sm text-[color:var(--text-muted)]">
            Backend and Full-Stack Developer focused on Java, Python, REST APIs, and cloud-native engineering.
          </p>
          <div className="grid gap-3 text-sm text-[color:var(--text-muted)] sm:grid-cols-2">
            <div className="rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--panel-soft)] p-3">
              <p className="font-semibold text-white">Primary focus</p>
              <p className="mt-1">Backend APIs, async systems, and microservice-ready architecture.</p>
            </div>
            <div className="rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--panel-soft)] p-3">
              <p className="font-semibold text-white">Current goal</p>
              <p className="mt-1">Building production-quality systems with measurable reliability improvements.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              className="rounded-md border border-[color:var(--panel-accent)] bg-[color:var(--panel-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--text-primary)] hover:border-[color:var(--accent)]"
              href="/projects"
            >
              View Projects
            </Link>
            <Link
              className="rounded-md border border-[color:var(--panel-border)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--text-muted)] hover:text-white"
              href="/contact"
            >
              Contact
            </Link>
            <Link
              className="rounded-md border border-[color:var(--panel-border)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--text-muted)] hover:text-white"
              href="/Gargi_Singh_Resume.pdf"
            >
              Resume
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--panel-soft)] p-3">
            <Image
              src="/images/gargi-profile.jpg"
              alt="Profile headshot of Gargi Singh"
              width={360}
              height={460}
              className="h-52 w-full rounded-lg object-cover"
              priority
            />
          </div>
          <div className="hidden items-center justify-center rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--panel-soft)] p-3 sm:flex">
            <DecorativeOrb size={170} />
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="panel gradient-border rounded-2xl p-6">
          <p className="panel-title">Experience</p>
          <div className="mt-4 space-y-4 text-sm text-[color:var(--text-muted)]">
            {experiences.map((item) => (
              <div key={item.company} className="rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--panel-soft)] p-3">
                <p className="font-semibold text-white">
                  {normalizeText(item.company)} - {normalizeText(item.role)} - {normalizeText(item.period)}
                </p>
                {item.highlights.slice(0, 2).map((line) => (
                  <p key={line} className="mt-1">
                    - {normalizeText(line)}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <Link className="mt-4 inline-flex text-sm text-[color:var(--text-muted)] hover:text-white" href="/experience">
            See full experience
          </Link>
        </div>

        <div className="panel gradient-border rounded-2xl p-6">
          <p className="panel-title">Skills</p>
          <div className="mt-4 space-y-4">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <p className="text-sm font-semibold text-white">{normalizeText(group.title)}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillBadge key={`${group.title}-${skill}`} label={normalizeText(skill)} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link className="mt-4 inline-flex text-sm text-[color:var(--text-muted)] hover:text-white" href="/skills">
            See full skills
          </Link>
        </div>
      </section>

      <section className="panel gradient-border rounded-2xl p-6">
        <p className="panel-title">Projects</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--panel-soft)] p-4 text-sm text-[color:var(--text-muted)]"
            >
              <p className="font-semibold text-white">{normalizeText(project.title)}</p>
              <p className="mt-1">{normalizeText(project.problem)}</p>
              <p className="mt-2 text-[color:var(--text-soft)]">
                {project.tech.map(normalizeText).join(", ")}
              </p>
            </article>
          ))}
        </div>
        <Link className="mt-4 inline-flex text-sm text-[color:var(--text-muted)] hover:text-white" href="/projects">
          See full project details
        </Link>
      </section>
    </div>
  );
}
