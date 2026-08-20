import Link from "next/link";

import { experiences } from "@/data/experience";

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

export default function ExperiencePreview() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-feature text-feature-foreground"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="tech-grid-feature pointer-events-none absolute inset-0 opacity-40"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-30 size-130 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="shell section relative">
        {/* =================================================
            Header
            ================================================= */}

        <div className="grid gap-8 lg:grid-cols-[1fr_0.48fr] lg:items-end lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2.5 font-mono text-[0.7rem] font-medium uppercase leading-none tracking-[0.13em] text-feature-muted">
              <span className="text-primary">
                03
              </span>

              Experience
            </div>

            <h2 className="mt-5 max-w-190 text-balance font-display text-[clamp(2.7rem,5vw,4.8rem)] font-bold leading-[0.99] tracking-tighter">
              Experience across{" "}
              <span className="text-primary">
                web and data.
              </span>
            </h2>
          </div>

          <div className="max-w-sm lg:justify-self-end">
            <p className="text-sm leading-6 text-feature-muted sm:text-[15px] sm:leading-7">
              Hands-on experience across web development and
              business intelligence in professional and
              project-based environments.
            </p>

            <Link
              href="/experience"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-feature-foreground transition-colors duration-300 hover:text-primary"
            >
              View full experience
              <ArrowIcon />
            </Link>
          </div>
        </div>

        {/* =================================================
            Experience Cards
            Desktop: compact + hover/focus reveal
            Mobile: content always visible
            ================================================= */}

        <div className="mt-12 grid gap-4 lg:grid-cols-2 lg:gap-5">
          {experiences.map((experience) => (
            <Link
              key={experience.slug}
              href={`/experience#${experience.slug}`}
              className="group relative flex min-h-full flex-col overflow-hidden rounded-[1.6rem] border border-feature-border bg-feature-foreground/[0.035] p-6 transition-[background-color,border-color,transform,box-shadow] duration-500 hover:-translate-y-1 hover:border-primary/45 hover:bg-feature-foreground/6 hover:shadow-[0_24px_65px_rgb(0_0_0/0.18)] focus-visible:-translate-y-1 focus-visible:border-primary/45 focus-visible:bg-feature-foreground/6 sm:p-7 lg:p-8"
            >
              {/* Accent glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-primary/0 blur-3xl transition-colors duration-500 group-hover:bg-primary/10 group-focus-visible:bg-primary/10"
              />

              {/* Top metadata */}
              <div className="relative flex items-start justify-between gap-6">
                <span className="font-display text-[2.8rem] font-extrabold leading-none tracking-[-0.065em] text-feature-border transition-[color,transform] duration-500 group-hover:-translate-y-1 group-hover:text-primary group-focus-visible:-translate-y-1 group-focus-visible:text-primary">
                  {experience.index}
                </span>

                <div className="text-right">
                  <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-feature-muted">
                    {experience.period}
                  </p>

                  <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.13em] text-primary">
                    {experience.type}
                  </p>
                </div>
              </div>

              {/* Main identity */}
              <div className="relative mt-8">
                <h3 className="max-w-130 font-display text-[clamp(1.55rem,2.5vw,2.05rem)] font-bold leading-[1.08] tracking-[-0.04em]">
                  {experience.role}
                </h3>

                <p className="mt-3 max-w-140 text-sm font-medium leading-6 text-feature-muted">
                  {experience.organization}
                </p>
              </div>

              {/* 
                Mobile/tablet:
                Always visible.

                Desktop:
                Compact by default and revealed on hover/focus.
              */}
              <div className="relative mt-6 grid grid-rows-[1fr] opacity-100 transition-[grid-template-rows,opacity,margin] duration-500 ease-out lg:mt-0 lg:grid-rows-[0fr] lg:opacity-0 lg:group-hover:mt-6 lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100 lg:group-focus-visible:mt-6 lg:group-focus-visible:grid-rows-[1fr] lg:group-focus-visible:opacity-100">
                <div className="overflow-hidden">
                  <p className="border-t border-feature-border pt-5 text-sm leading-7 text-feature-muted lg:transition-colors lg:duration-500 lg:group-hover:text-feature-foreground/80 lg:group-focus-visible:text-feature-foreground/80">
                    {experience.summary}
                  </p>
                </div>
              </div>

              {/* Bottom affordance */}
              <div className="relative mt-auto flex items-end justify-between gap-5 pt-7">
                <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-feature-muted">
                  Experience / {experience.index}
                </span>

                <span
                  aria-hidden="true"
                  className="grid size-9 shrink-0 place-items-center rounded-full border border-feature-border text-feature-muted transition-[color,border-color,transform,background-color] duration-300 group-hover:translate-x-1 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-focus-visible:translate-x-1 group-focus-visible:border-primary group-focus-visible:bg-primary group-focus-visible:text-primary-foreground"
                >
                  <ArrowIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile interaction note is intentionally unnecessary:
            important content is already visible without interaction. */}
      </div>
    </section>
  );
}