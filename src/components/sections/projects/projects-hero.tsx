export default function ProjectsHero() {
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
            Projects
          </div>

          <h1 className="mt-7 max-w-5xl text-balance font-display text-[clamp(3.2rem,7vw,6.3rem)] font-bold leading-[0.95] tracking-[-0.06em]">
            Selected work, built from{" "}
            <span className="text-primary">
              idea to implementation.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-[17px] leading-8 text-muted-foreground sm:text-lg sm:leading-9">
            A curated selection of
            academic, professional, and
            collaborative projects
            across full-stack
            development, frontend
            implementation, and data.
          </p>
        </div>

        <div
          data-reveal
          className="reveal-on-scroll reveal-delay-1 mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-5"
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
            05 Projects
          </p>

          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
            Academic + Professional
          </p>

          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
            Full-Stack + Frontend + Data
          </p>
        </div>
      </div>
    </section>
  );
}