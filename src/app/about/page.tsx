import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass rounded-[32px] p-4">
          <Image
            src="/images/gargi-casual.jpg"
            alt="Gargi Singh in a casual setting"
            width={640}
            height={900}
            className="h-full w-full rounded-[26px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-600/70">
            About Me
          </p>
          <h1 className="text-3xl font-[var(--font-display)] text-rose-950">
            Backend-first engineer with enterprise context.
          </h1>
          <p className="text-sm leading-relaxed text-rose-900/75">
            I focus on clean architecture, dependable APIs, and systems that
            withstand real traffic. My internships emphasized production
            standards, structured data flows, and disciplined engineering.
          </p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-[28px] p-6">
          <h2 className="text-lg font-[var(--font-display)] text-rose-950">
            Education
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-rose-900/75">
            <li>• B.Tech Computer Science (2026) — Anand Engineering College</li>
          </ul>
        </div>
        <div className="glass rounded-[28px] p-6">
          <h2 className="text-lg font-[var(--font-display)] text-rose-950">
            Internships
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-rose-900/75">
            <li>• Microsoft × SAP (TechSaksham AI) — AI &amp; Full-Stack Intern</li>
            <li>• EY Global Delivery Services — Full-Stack Intern</li>
          </ul>
        </div>
        <div className="glass rounded-[28px] p-6">
          <h2 className="text-lg font-[var(--font-display)] text-rose-950">
            Certifications
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-rose-900/75">
            <li>• Oracle OCI Developer (2025)</li>
          </ul>
        </div>
        <div className="glass rounded-[28px] p-6">
          <h2 className="text-lg font-[var(--font-display)] text-rose-950">
            Currently Learning
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-rose-900/75">
            <li>• Kubernetes</li>
            <li>• Microservices</li>
            <li>• Async &amp; streaming systems</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
