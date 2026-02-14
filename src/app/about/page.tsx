import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="panel rounded-2xl p-6 lg:row-span-2">
        <p className="panel-title">About</p>
        <div className="mt-4 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--bg-maroon)] p-3">
          <Image
            src="/images/gargi-casual.jpg"
            alt="Gargi Singh in a casual setting"
            width={640}
            height={900}
              className="h-full w-full rounded-lg object-cover"
          />
          </div>
          <div className="space-y-3 text-sm text-[color:var(--text-muted)]">
            <p className="text-white">Backend-first engineer with enterprise context.</p>
            <p>
              I focus on clean architecture, dependable APIs, and systems that
              withstand real traffic. My internships emphasized production
              standards, structured data flows, and disciplined engineering.
            </p>
          </div>
        </div>
      </section>

      <section className="panel rounded-2xl p-6">
        <p className="panel-title">Education</p>
        <ul className="mt-4 space-y-2 text-sm text-[color:var(--text-muted)]">
          <li>• B.Tech Computer Science (2026) — Anand Engineering College</li>
        </ul>
      </section>
      <section className="panel rounded-2xl p-6">
        <p className="panel-title">Internships</p>
        <ul className="mt-4 space-y-2 text-sm text-[color:var(--text-muted)]">
          <li>• Microsoft × SAP (TechSaksham AI) — AI Intern</li>
          <li>• EY Global Delivery Services — Full-Stack Intern</li>
        </ul>
      </section>
      <section className="panel rounded-2xl p-6">
        <p className="panel-title">Certifications</p>
        <ul className="mt-4 space-y-2 text-sm text-[color:var(--text-muted)]">
          <li>• Oracle OCI Developer (2025)</li>
        </ul>
      </section>
      <section className="panel rounded-2xl p-6">
        <p className="panel-title">Currently Learning</p>
        <ul className="mt-4 space-y-2 text-sm text-[color:var(--text-muted)]">
          <li>• Kubernetes</li>
          <li>• Microservices</li>
          <li>• Async &amp; streaming systems</li>
        </ul>
      </section>
    </div>
  );
}
