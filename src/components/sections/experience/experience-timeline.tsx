import type { ReactNode } from "react";

import { experiences } from "@/data/experience";

function BrowserVisual() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-2xl border border-border bg-secondary/45"
    >
      <div className="flex h-9 items-center gap-1.5 border-b border-border px-4">
        <span className="size-1.5 rounded-full bg-primary/70" />
        <span className="size-1.5 rounded-full bg-border-strong" />
        <span className="size-1.5 rounded-full bg-border-strong" />

        <div className="ml-3 h-1.5 w-20 rounded-full bg-border-strong/60" />
      </div>

      <div className="grid min-h-52 grid-cols-[0.28fr_1fr] sm:min-h-56">
        <div className="border-r border-border p-4">
          <div className="h-1.5 w-9 rounded-full bg-primary/45" />

          <div className="mt-5 space-y-3">
            <div className="h-1.5 w-full rounded-full bg-border" />
            <div className="h-1.5 w-4/5 rounded-full bg-border" />
            <div className="h-1.5 w-3/5 rounded-full bg-border" />
          </div>
        </div>

        <div className="relative p-5">
          <div className="h-1.5 w-14 rounded-full bg-primary/45" />

          <div className="mt-5 h-5 w-4/5 rounded-sm bg-foreground/10" />
          <div className="mt-2 h-5 w-3/5 rounded-sm bg-foreground/10" />

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="h-16 rounded-lg border border-border bg-background/65" />
            <div className="h-16 rounded-lg border border-border bg-background/65" />
          </div>

          <p className="absolute bottom-4 right-4 font-mono text-[7px] uppercase tracking-[0.15em] text-muted-foreground">
            Responsive interface
          </p>
        </div>
      </div>
    </div>
  );
}

function DataFlowVisual() {
  const steps = [
    "Relational data",
    "Master tables",
    "Dashboards",
    "Recommendations",
  ];

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-2xl border border-border bg-secondary/45 p-5"
    >
      <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted-foreground">
        Analysis flow
      </p>

      <div className="mt-4 border-y border-border">
        {steps.map((step, index) => (
          <div
            key={step}
            className={[
              "grid grid-cols-[auto_1fr_auto] items-center gap-4 py-3.5",
              index < steps.length - 1
                ? "border-b border-border"
                : "",
            ].join(" ")}
          >
            <span className="font-mono text-[8px] tracking-[0.12em] text-primary">
              0{index + 1}
            </span>

            <p className="text-sm font-semibold text-foreground">
              {step}
            </p>

            {index < steps.length - 1 && (
              <span className="text-xs text-muted-foreground">
                ↓
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({
  experience,
  category,
  headline,
  description,
  visual,
  mostRecent = false,
}: {
  experience: (typeof experiences)[number];
  category: string;
  headline: ReactNode;
  description: string;
  visual: ReactNode;
  mostRecent?: boolean;
}) {
  return (
    <article
      id={experience.slug}
      className="relative overflow-hidden rounded-[1.75rem] border border-border bg-background"
    >
      <div
        aria-hidden="true"
        className="tech-grid pointer-events-none absolute inset-0 opacity-[0.035]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-12 font-display text-[9rem] font-bold leading-none tracking-[-0.08em] text-foreground/2.5 sm:text-[12rem]"
      >
        {experience.index}
      </div>

      <div className="relative p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-primary">
                {experience.index} / {category}
              </p>

              {mostRecent && (
                <span className="rounded-full border border-primary/25 bg-primary-soft px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.12em] text-primary">
                  Most Recent
                </span>
              )}
            </div>

            <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
              {experience.type}
            </p>
          </div>

          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
            {experience.period}
          </p>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.56fr] lg:items-start lg:gap-14">
          <div>
            <h2 className="max-w-3xl font-display text-[clamp(2.4rem,4.5vw,4.2rem)] font-bold leading-[0.98] tracking-[-0.055em]">
              {experience.role}
            </h2>

            <p className="mt-4 max-w-2xl text-[15px] font-medium leading-7 text-foreground">
              {experience.organization}
            </p>

            <h3 className="mt-9 max-w-2xl text-balance font-display text-[clamp(1.7rem,3vw,2.6rem)] font-bold leading-[1.04] tracking-[-0.045em]">
              {headline}
            </h3>

            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-muted-foreground">
              {description}
            </p>
          </div>

          <div className="lg:pt-1">
            {visual}

            <div className="mt-4 flex flex-wrap gap-2">
              {experience.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-border bg-secondary/35 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.11em] text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-7">
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-primary">
            What I worked on
          </p>

          <div className="mt-5 grid border-y border-border md:grid-cols-2">
            {experience.highlights.map((highlight, index) => (
              <div
                key={highlight}
                className={[
                  "grid grid-cols-[auto_1fr] gap-4 py-5",
                  index % 2 === 0
                    ? "md:pr-7"
                    : "md:border-l md:border-border md:pl-7",
                  index < 2
                    ? "border-b border-border"
                    : "",
                ].join(" ")}
              >
                <span className="font-mono text-[8px] tracking-[0.12em] text-primary">
                  0{index + 1}
                </span>

                <p className="text-sm leading-6 text-muted-foreground">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ExperienceTimeline() {
  const webExperience = experiences[0];
  const dataExperience = experiences[1];

  return (
    <section className="relative overflow-hidden bg-secondary/35">
      <div
        aria-hidden="true"
        className="warm-veil pointer-events-none absolute inset-0 opacity-30"
      />

      <div className="shell section relative">
        <div className="grid gap-8 lg:grid-cols-[110px_1fr] lg:gap-10">
          <div
            data-reveal
            className="reveal-on-scroll hidden lg:block"
          >
            <div className="sticky top-28">
              <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-muted-foreground">
                Timeline
              </p>

              <p className="mt-2 font-display text-sm font-semibold">
                Experience
              </p>

              <p className="mt-4 font-mono text-[7px] uppercase leading-5 tracking-[0.13em] text-primary">
                Latest first
                <br />
                ↓
              </p>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-6 left-1.25 top-10 hidden w-px bg-border-strong sm:block"
            />

            <div className="space-y-10 lg:space-y-12">
              <div
                data-reveal
                className="reveal-on-scroll relative sm:pl-10"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-10 hidden size-2.75 rounded-full border-2 border-primary bg-secondary sm:block"
                />

                <span
                  aria-hidden="true"
                  className="absolute left-2.75 top-11.25 hidden h-px w-7.25 bg-border-strong sm:block"
                />

                <ExperienceCard
                  experience={webExperience}
                  category="Frontend Development"
                  mostRecent
                  headline={
                    <>
                      From approved
                      designs to{" "}
                      <span className="text-primary">
                        responsive web
                        pages.
                      </span>
                    </>
                  }
                  description="At Diskominfosantik Kabupaten Bekasi, I worked on the frontend of the Disarpus Kabupaten Bekasi website. My focus was implementing approved Figma designs in Next.js, developing key pages, and resolving responsive layout issues across different breakpoints."
                  visual={<BrowserVisual />}
                />
              </div>

              <div
                data-reveal
                className="reveal-on-scroll relative sm:pl-10"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-10 hidden size-2.75 rounded-full border-2 border-primary bg-secondary sm:block"
                />

                <span
                  aria-hidden="true"
                  className="absolute left-2.75 top-11.25 hidden h-px w-7.25 bg-border-strong sm:block"
                />

                <ExperienceCard
                  experience={dataExperience}
                  category="Business Intelligence"
                  headline={
                    <>
                      Turning relational
                      data into{" "}
                      <span className="text-primary">
                        clearer business
                        insights.
                      </span>
                    </>
                  }
                  description="During a project-based internship with Bank Muamalat, I worked with relational sales data in Google BigQuery, organized it into structured master tables, built interactive Looker Studio dashboards, and developed recommendations based on the analysis."
                  visual={<DataFlowVisual />}
                />
              </div>

              <div
                aria-hidden="true"
                className="relative hidden h-5 sm:block"
              >
                <span className="absolute left-0 top-1/2 size-2.75 -translate-y-1/2 rounded-full border-2 border-border-strong bg-secondary" />

                <span className="absolute left-10 top-1/2 -translate-y-1/2 font-mono text-[7px] uppercase tracking-[0.14em] text-muted-foreground">
                  Earlier
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}