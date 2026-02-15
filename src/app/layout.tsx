import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const sans = Geist({
  variable: "--font-primary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gargi | Backend & Full-Stack Developer",
  description:
    "Developer portfolio focused on backend engineering, project architecture, and measurable impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} antialiased`}>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-[-8%] top-[-12%] h-[360px] w-[360px] rounded-full bg-sky-500/20 blur-3xl" />
          <div className="pointer-events-none absolute right-[-6%] top-[8%] h-[320px] w-[320px] rounded-full bg-blue-400/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-15%] left-[24%] h-[380px] w-[380px] rounded-full bg-cyan-400/10 blur-3xl" />

          <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-6 pt-8 lg:px-10">
            <Link
              href="/"
              className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]"
            >
              <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
              Gargi Singh
            </Link>
            <nav className="hidden items-center gap-6 text-sm font-medium text-[color:var(--text-muted)] md:flex">
              <Link className="transition hover:text-white" href="/">
                Home
              </Link>
              <Link className="transition hover:text-white" href="/about">
                About
              </Link>
              <Link className="transition hover:text-white" href="/experience">
                Experience
              </Link>
              <Link className="transition hover:text-white" href="/projects">
                Projects
              </Link>
              <Link className="transition hover:text-white" href="/skills">
                Skills
              </Link>
              <Link className="transition hover:text-white" href="/contact">
                Contact
              </Link>
            </nav>
            <Link
              className="rounded-full border border-[color:var(--panel-accent)] bg-[color:var(--panel-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--text-primary)] transition hover:border-[color:var(--accent)]"
              href="/Gargi_Singh_Resume.pdf"
            >
              Resume
            </Link>
          </header>

          <div className="mx-auto flex w-full max-w-6xl gap-3 overflow-x-auto px-6 pb-6 text-xs text-[color:var(--text-muted)] md:hidden lg:px-10">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Experience", "/experience"],
              ["Projects", "/projects"],
              ["Skills", "/skills"],
              ["Contact", "/contact"],
              ["Resume", "/Gargi_Singh_Resume.pdf"],
            ].map(([label, href]) => (
              <Link
                key={label}
                className="rounded-full border border-[color:var(--panel-border)] bg-[color:var(--panel)] px-3 py-1.5 whitespace-nowrap"
                href={href}
              >
                {label}
              </Link>
            ))}
          </div>

          <main className="relative mx-auto w-full max-w-6xl px-6 pb-24 lg:px-10">
            {children}
          </main>

          <footer className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-6 pb-12 text-xs text-[color:var(--text-soft)] lg:px-10">
            <span>Backend engineering portfolio.</span>
            <span>Copyright 2026 Gargi Singh. All rights reserved.</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
