export default function ContactPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="panel rounded-2xl p-6">
        <p className="panel-title">Contact</p>
        <h1 className="mt-4 text-xl font-semibold text-white">
          Ready for backend work that scales.
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-[color:var(--text-muted)]">
          For Summer Bitcoin roles, global internships, or backend collaborations,
          reach out directly.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="panel rounded-2xl p-6">
          <p className="panel-title">Email</p>
          <a
            className="mt-3 inline-flex text-lg font-semibold text-white"
            href="mailto:gargi9608@gmail.com"
          >
            gargi9608@gmail.com
          </a>
        </div>
        <div className="panel rounded-2xl p-6">
          <p className="panel-title">Links</p>
          <div className="mt-3 flex flex-col gap-3 text-sm text-[color:var(--text-muted)]">
            <a
              className="transition hover:text-white"
              href="https://github.com/gargi-cpu"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="transition hover:text-white"
              href="https://www.linkedin.com/in/gargi-singh-62ab82315/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a className="transition hover:text-white" href="/Gargi_Singh_Resume.pdf">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
