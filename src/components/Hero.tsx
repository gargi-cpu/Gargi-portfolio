import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="flex flex-col gap-6">
        <p className="w-fit rounded-full border border-rose-200/80 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-rose-700">
          Backend-first. Product-aware.
        </p>
        <h1 className="text-4xl font-[var(--font-display)] leading-tight text-rose-950 md:text-5xl">
          Hi, I&apos;m Gargi — Backend &amp; Full-Stack Developer
        </h1>
        <p className="text-base font-semibold text-rose-900/80 md:text-lg">
          Cloud-Native Systems | AI Backends
        </p>
        <p className="max-w-xl text-base leading-relaxed text-rose-900/75">
          I build scalable backend systems with real data, real APIs, and a
          production mindset.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            className="rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-300/60 transition hover:-translate-y-0.5 hover:bg-rose-500"
            href="/projects"
          >
            View Projects
          </a>
          <a
            className="rounded-full border border-rose-200/80 bg-white/70 px-6 py-3 text-sm font-semibold text-rose-700 transition hover:-translate-y-0.5 hover:border-rose-300"
            href="/contact"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <div className="glass relative flex h-[380px] w-full max-w-sm items-end justify-center overflow-hidden rounded-[32px] border border-white/60 bg-white/60 p-3">
          <Image
            src="/images/gargi-profile.jpg"
            alt="Portrait of Gargi Singh"
            width={520}
            height={720}
            priority
            className="h-full w-full rounded-[26px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
