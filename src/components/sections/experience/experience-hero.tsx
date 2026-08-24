export default function ExperienceHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background pt-32 sm:pt-36 lg:pt-40">
      <div
        aria-hidden="true"
        className="warm-veil pointer-events-none absolute inset-0 opacity-45"
      />

      <div
        aria-hidden="true"
        className="tech-dots pointer-events-none absolute right-0 top-0 hidden h-[80%] w-[38%] opacity-[0.1] mask-[linear-gradient(to_left,black,transparent)] md:block"
      />

      <div className="shell relative pb-14 sm:pb-16 lg:pb-20">
        <div
          data-reveal
          className="reveal-on-scroll"
        >
          <div className="section-label">
            Experience
          </div>

          <h1 className="mt-7 max-w-4xl text-balance font-display text-[clamp(3.2rem,7vw,6.3rem)] font-bold leading-[0.95] tracking-[-0.06em]">
            Professional{" "}
            <span className="text-primary">
              chapters
            </span>{" "}
            so far.
          </h1>

          <p className="mt-8 max-w-2xl text-[17px] leading-8 text-muted-foreground sm:text-lg sm:leading-9">
            Two internships that
            shaped how I approach
            technical work. One
            focused on frontend
            delivery, while the other
            involved turning relational
            data into useful business
            insights.
          </p>
        </div>

        <div
          data-reveal
          className="reveal-on-scroll reveal-delay-1 mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-5"
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
            2025 — 2026
          </p>

          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
            02 Internships
          </p>

          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
            Web Development +
            Business Intelligence
          </p>
        </div>
      </div>
    </section>
  );
}