import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

export default function ExperienceNext() {
  return (
    <section className="relative overflow-hidden bg-tertiary">
      <div
        aria-hidden="true"
        className="warm-veil pointer-events-none absolute inset-0 opacity-55"
      />

      <div className="shell section relative">
        <div
          data-reveal
          className="reveal-on-scroll grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16"
        >
          <div>
            <div className="section-label">
              Next
            </div>

            <h2 className="mt-5 max-w-3xl text-balance font-display text-[clamp(2.6rem,5vw,4.6rem)] font-bold leading-[0.99] tracking-tighter">
              See how those
              experiences shaped{" "}
              <span className="text-primary">
                my projects.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-muted-foreground">
              I’m currently open to
              full-time opportunities
              in web development,
              particularly frontend and
              full-stack roles.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              href="/projects"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-[transform,opacity] duration-300 hover:-translate-y-0.5 hover:opacity-90"
            >
              Explore Projects
              <ArrowIcon />
            </Link>

            <Link
              href="/resume"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border-strong bg-background/40 px-5 text-sm font-semibold text-foreground transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary-soft"
            >
              View Resume
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}