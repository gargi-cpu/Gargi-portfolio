export default function ContactPage() {
  return (
    <div className="flex flex-col gap-6">
      <section className="panel gradient-border rounded-2xl p-6">
        <p className="panel-title">Contact</p>
        <h1 className="section-heading mt-3">Contact and resume</h1>
        <p className="mt-2 max-w-3xl text-sm text-[color:var(--text-muted)]">
          Open to backend engineering roles, internships, and collaborative projects involving Java, Python, REST APIs, and cloud systems.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="panel gradient-border rounded-2xl p-6">
          <p className="panel-title">Direct contact</p>
          <div className="mt-4 space-y-3 text-sm text-[color:var(--text-muted)]">
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a className="hover:text-white" href="mailto:gargi9608@gmail.com">
                gargi9608@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-white">LinkedIn:</span>{" "}
              <a
                className="hover:text-white"
                href="https://www.linkedin.com/in/gargi-singh-62ab82315/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/gargi-singh-62ab82315
              </a>
            </p>
            <p>
              <span className="font-semibold text-white">GitHub:</span>{" "}
              <a
                className="hover:text-white"
                href="https://github.com/gargi-cpu"
                target="_blank"
                rel="noreferrer"
              >
                github.com/gargi-cpu
              </a>
            </p>
          </div>
        </article>

        <article className="panel gradient-border rounded-2xl p-6">
          <p className="panel-title">Resume</p>
          <p className="mt-4 text-sm text-[color:var(--text-muted)]">
            Download the latest resume PDF here.
          </p>
          <a
            className="mt-4 inline-flex rounded-md border border-[color:var(--panel-accent)] bg-[color:var(--panel-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--text-primary)] transition hover:border-[color:var(--accent)]"
            href="/Gargi_Singh_Resume.pdf"
          >
            Open Resume PDF
          </a>
        </article>
      </section>
    </div>
  );
}
