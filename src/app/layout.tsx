import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const sans = Geist({
  variable: "--font-primary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gargi | Backend & Full-Stack Developer",
  description:
    "Barbie-inspired, backend-first portfolio featuring systems, case studies, and engineering focus.",
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
          <div className="pointer-events-none absolute left-[-10%] top-[-15%] h-[420px] w-[420px] rounded-full bg-pink-200/40 blur-3xl" />
          <div className="pointer-events-none absolute right-[-5%] top-[10%] h-[360px] w-[360px] rounded-full bg-rose-200/50 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-10%] left-[20%] h-[420px] w-[420px] rounded-full bg-violet-200/40 blur-3xl" />

          <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-6 pt-8 lg:px-10">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
              <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
              Gargi Singh
            </div>
            <nav className="hidden items-center gap-8 text-sm font-medium text-rose-200/80 md:flex">
              <a className="transition hover:text-white" href="/">
                Home
              </a>
              <a className="transition hover:text-white" href="/about">
                About
              </a>
              <a className="transition hover:text-white" href="/experience">
                Experience
              </a>
              <a className="transition hover:text-white" href="/projects">
                Projects
              </a>
              <a className="transition hover:text-white" href="/contact">
                Contact
              </a>
            </nav>
            <a
              className="rounded-full border border-rose-900/60 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-200 transition hover:border-rose-700 hover:text-white"
              href="/contact"
            >
              Let&apos;s Build
            </a>
          </header>

          <main className="relative mx-auto w-full max-w-6xl px-6 pb-24 lg:px-10">
            {children}
          </main>

          <footer className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-6 pb-12 text-xs text-rose-200/60 lg:px-10">
            <span>Designed with restraint and engineering rigor.</span>
            <span>© 2026 Gargi Singh. All rights reserved.</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
