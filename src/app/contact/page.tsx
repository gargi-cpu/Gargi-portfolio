export default function ContactPage() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-600/70">
          Contact
        </p>
        <h1 className="mt-3 text-3xl font-[var(--font-display)] text-rose-950">
          Ready for backend work that scales.
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-rose-900/75">
          For Summer Bitcoin roles, global internships, or backend collaborations,
          reach out directly.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass rounded-[28px] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-600/70">
            Email
          </p>
          <a
            className="mt-3 inline-flex text-lg font-semibold text-rose-950"
            href="mailto:gargi9608@gmail.com"
          >
            gargi9608@gmail.com
          </a>
        </div>
        <div className="glass rounded-[28px] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-600/70">
            Links
          </p>
          <div className="mt-3 flex flex-col gap-3 text-sm text-rose-900/80">
            <a
              className="transition hover:text-rose-600"
              href="https://github.com/gargi-cpu"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="transition hover:text-rose-600"
              href="https://www.linkedin.com/in/gargi-singh-62ab82315/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="transition hover:text-rose-600"
              href="/Gargi_Singh_Resume.pdf"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
