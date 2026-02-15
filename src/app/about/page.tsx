import Image from "next/image";
import DecorativeOrb from "@/components/DecorativeOrb";

export default function AboutPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="panel gradient-border rounded-2xl p-6">
        <p className="panel-title">About</p>
        <h1 className="section-heading mt-3">Engineering profile</h1>
        <div className="mt-4 space-y-3 text-sm text-[color:var(--text-muted)]">
          <p>
            I build backend systems with a focus on API correctness, reliability, and clean architecture.
            My internships emphasized production-ready development, testing discipline, and practical delivery.
          </p>
          <p>
            Core areas include Java and Python backend development, REST APIs, async processing, and cloud fundamentals.
          </p>
          <p>
            I am currently expanding depth in Kubernetes, microservices architecture, and resilient distributed systems.
          </p>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--panel-soft)] p-3 text-sm text-[color:var(--text-muted)]">
            <p className="font-semibold text-white">Education</p>
            <p className="mt-1">B.Tech Computer Science, Anand Engineering College (2026)</p>
          </div>
          <div className="rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--panel-soft)] p-3 text-sm text-[color:var(--text-muted)]">
            <p className="font-semibold text-white">Certification</p>
            <p className="mt-1">Oracle OCI Developer (2025)</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6">
        <div className="panel gradient-border rounded-2xl p-4">
          <Image
            src="/images/gargi-casual.jpg"
            alt="Gargi Singh"
            width={560}
            height={740}
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
        <div className="panel gradient-border flex items-center justify-center rounded-2xl p-6">
          <DecorativeOrb size={190} />
        </div>
      </section>
    </div>
  );
}
