import Link from "next/link";

import {
  featuredProjects,
  type FeaturedProject,
} from "@/data/projects";

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

function ProjectChip({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
      {children}
    </span>
  );
}

/* =========================================================
   Temporary Project Visuals

   These are intentionally CSS-based placeholders.
   Real screenshots will replace them later.
   ========================================================= */

function EduBidanVisual() {
  return (
    <div className="relative h-full min-h-80 overflow-hidden bg-[linear-gradient(145deg,var(--tertiary),var(--secondary))] p-4 sm:min-h-97.5 sm:p-8 lg:p-10">
      <div
        aria-hidden="true"
        className="tech-grid absolute inset-0 opacity-35"
      />

      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 size-72 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto flex h-full max-w-155 items-center">
        <div className="w-full overflow-hidden rounded-2xl border border-border-strong bg-card shadow-[0_25px_70px_rgb(33_30_26/0.16)] transition-transform duration-700 group-hover:-translate-y-1">
          {/* Browser chrome */}
          <div className="flex items-center gap-3 border-b border-border px-4 py-3">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-primary/70" />
              <span className="size-2 rounded-full bg-border-strong" />
              <span className="size-2 rounded-full bg-border-strong" />
            </div>

            <div className="min-w-0 flex-1 rounded-md bg-secondary px-3 py-1.5">
              <p className="truncate font-mono text-[9px] text-muted-foreground">
                edubidan / learning-dashboard
              </p>
            </div>
          </div>

          {/* Dashboard */}
          <div className="grid min-h-64 grid-cols-[64px_1fr] sm:min-h-75 sm:grid-cols-[92px_1fr]">
            <aside className="border-r border-border bg-secondary/55 p-3">
              <div className="size-8 rounded-lg bg-primary" />

              <div className="mt-7 space-y-3">
                <span className="block h-2 w-full rounded-full bg-foreground/15" />
                <span className="block h-2 w-4/5 rounded-full bg-foreground/10" />
                <span className="block h-2 w-3/5 rounded-full bg-foreground/10" />
                <span className="block h-2 w-5/6 rounded-full bg-foreground/10" />
              </div>
            </aside>

            <div className="p-4 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-primary">
                    Student Dashboard
                  </p>

                  <div className="mt-2 h-4 w-36 rounded-full bg-foreground/80 sm:w-44" />

                  <div className="mt-2 h-2 w-28 rounded-full bg-foreground/15" />
                </div>

                <span className="size-8 shrink-0 rounded-full bg-primary-soft" />
              </div>

              <div className="mt-7 grid grid-cols-3 gap-2.5">
                <div className="rounded-xl border border-border bg-background p-3">
                  <span className="block h-2 w-10 rounded-full bg-primary/65" />
                  <span className="mt-3 block h-5 w-8 rounded bg-foreground/75" />
                </div>

                <div className="rounded-xl border border-border bg-background p-3">
                  <span className="block h-2 w-9 rounded-full bg-foreground/15" />
                  <span className="mt-3 block h-5 w-10 rounded bg-foreground/75" />
                </div>

                <div className="rounded-xl border border-border bg-background p-3">
                  <span className="block h-2 w-11 rounded-full bg-foreground/15" />
                  <span className="mt-3 block h-5 w-7 rounded bg-foreground/75" />
                </div>
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-[1.4fr_0.6fr]">
                <div className="rounded-xl border border-border bg-background p-4">
                  <div className="flex items-center justify-between">
                    <span className="h-2.5 w-24 rounded-full bg-foreground/20" />
                    <span className="h-5 w-12 rounded-full bg-primary-soft" />
                  </div>

                  <div className="mt-5 space-y-3">
                    {[75, 58, 86].map((width) => (
                      <div
                        key={width}
                        className="rounded-lg bg-secondary p-3"
                      >
                        <span className="block h-2 w-1/3 rounded-full bg-foreground/20" />

                        <span
                          className="mt-3 block h-1.5 rounded-full bg-primary/60"
                          style={{
                            width: `${width}%`,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden rounded-xl bg-feature p-4 text-feature-foreground sm:block">
                  <p className="font-mono text-[8px] uppercase tracking-widest text-primary">
                    Progress
                  </p>

                  <div className="mx-auto mt-5 grid size-20 place-items-center rounded-full border-[7px] border-primary/80">
                    <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-feature-muted">
                        Learning
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span className="absolute bottom-5 right-5 rounded-full border border-border bg-card/90 px-3 py-1.5 font-mono text-[9px] text-muted-foreground backdrop-blur">
        UI PREVIEW / PLACEHOLDER
      </span>
    </div>
  );
}

function DisarpusVisual() {
  return (
    <div className="relative aspect-video overflow-hidden bg-[linear-gradient(145deg,var(--secondary),var(--tertiary))]">
      <div
        aria-hidden="true"
        className="tech-grid absolute inset-0 opacity-30"
      />

      <div className="absolute inset-x-[7%] bottom-[-12%] top-[12%] overflow-hidden rounded-t-2xl border border-border-strong bg-card shadow-[0_20px_55px_rgb(33_30_26/0.13)] transition-transform duration-700 group-hover:-translate-y-2">
        <div className="flex h-10 items-center border-b border-border px-4">
          <span className="size-5 rounded-md bg-primary" />

          <div className="ml-auto flex gap-3">
            <span className="h-1.5 w-8 rounded-full bg-foreground/20" />
            <span className="h-1.5 w-8 rounded-full bg-foreground/20" />
            <span className="h-1.5 w-8 rounded-full bg-foreground/20" />
          </div>
        </div>

        <div className="relative h-32 overflow-hidden bg-feature">
          <div className="tech-grid-feature absolute inset-0 opacity-50" />

          <div className="absolute inset-x-5 bottom-5">
            <span className="block h-2 w-20 rounded-full bg-primary" />
            <span className="mt-3 block h-5 w-56 max-w-full rounded bg-feature-foreground/85" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 p-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-border p-2.5"
            >
              <div className="aspect-4/3 rounded-md bg-secondary" />
              <span className="mt-2 block h-1.5 w-4/5 rounded-full bg-foreground/20" />
              <span className="mt-1.5 block h-1.5 w-1/2 rounded-full bg-foreground/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LestariVisual() {
  return (
    <div className="relative aspect-16/10 overflow-hidden bg-feature">
      <div
        aria-hidden="true"
        className="tech-grid-feature absolute inset-0 opacity-55"
      />

      <div
        aria-hidden="true"
        className="absolute -right-10 top-5 size-44 rounded-full bg-primary/15 blur-3xl"
      />

      <div className="absolute inset-5 flex gap-3">
        <div className="flex w-[42%] flex-col justify-between rounded-2xl border border-feature-border bg-feature/70 p-4">
          <div>
            <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-primary">
              Waste Pickup
            </span>

            <div className="mt-3 h-5 w-3/4 rounded bg-feature-foreground/80" />

            <div className="mt-2 h-2 w-full rounded-full bg-feature-border" />
            <div className="mt-1.5 h-2 w-3/4 rounded-full bg-feature-border" />
          </div>

          <div className="rounded-xl bg-primary p-3">
            <span className="block h-2 w-1/2 rounded-full bg-primary-foreground/80" />

            <span className="mt-2 block h-5 w-3/4 rounded bg-primary-foreground" />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-3">
          <div className="grid flex-1 grid-cols-2 gap-3">
            <div className="rounded-2xl border border-feature-border bg-feature/70 p-3">
              <span className="font-mono text-[7px] uppercase tracking-widest text-feature-muted">
                Points
              </span>

              <div className="mt-4 space-y-2">
                <span className="block h-2 w-3/4 rounded-full bg-feature-foreground/75" />
                <span className="block h-2 w-1/2 rounded-full bg-primary/75" />
              </div>
            </div>

            <div className="rounded-2xl border border-feature-border bg-feature/70 p-3">
              <span className="font-mono text-[7px] uppercase tracking-widest text-feature-muted">
                Rewards
              </span>

              <div className="mt-4 flex gap-1.5">
                <span className="size-7 rounded-lg bg-primary/80" />
                <span className="size-7 rounded-lg bg-feature-border" />
              </div>
            </div>
          </div>

          <div className="h-[42%] rounded-2xl bg-[linear-gradient(135deg,var(--primary),#b94a1b)] p-4">
            <p className="font-mono text-[7px] uppercase tracking-widest text-primary-foreground/70">
              Community impact
            </p>

            <span className="mt-3 block h-4 w-3/4 rounded bg-primary-foreground/90" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SecondaryProjectCard({
  project,
  visual,
}: {
  project: FeaturedProject;
  visual: React.ReactNode;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_20px_50px_rgb(33_30_26/0.08)]"
    >
      <div aria-hidden="true">
        {visual}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-7">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
          <span className="text-primary">
            {project.index}
          </span>

          <span aria-hidden="true">
            /
          </span>

          <span>
            {project.category}
          </span>
        </div>

        <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.035em] transition-colors duration-300 group-hover:text-primary sm:text-[1.75rem]">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
          {project.tagline}
        </p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((technology) => (
            <ProjectChip key={technology}>
              {technology}
            </ProjectChip>
          ))}
        </div>

        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          View project
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}

export default function SelectedWork() {
  const [
    flagship,
    disarpus,
    lestari,
  ] = featuredProjects;

  return (
    <section
      id="selected-work"
      className="relative border-t border-border bg-secondary/45"
    >
      <div
        aria-hidden="true"
        className="tech-grid pointer-events-none absolute inset-0 opacity-[0.10]"
      />

      <div className="shell section relative">
        {/* Section header */}
        <div
            data-reveal
            className="reveal-on-scroll flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <div className="section-label">
              <span className="section-label-number">
                01
              </span>

              Selected Work
            </div>

            <h2 className="mt-5 text-balance font-display text-[clamp(2.6rem,5vw,4.6rem)] font-bold leading-[0.99] tracking-tighter">
              Products built from{" "}
              <span className="text-primary">
                idea to implementation.
              </span>
            </h2>
          </div>

          <div className="max-w-sm lg:text-right">
            <p className="text-sm leading-6 text-muted-foreground">
              A selection of academic and professional work
              across full-stack development, frontend
              implementation, and collaborative product
              development.
            </p>

            <Link
              href="/projects"
              className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              All projects
              <ArrowIcon />
            </Link>
          </div>
        </div>

        {/* =================================================
            Flagship
            ================================================= */}

        <Link
            data-reveal
            href={`/projects/${flagship.slug}`}
            className="reveal-on-scroll reveal-delay-1 group mt-10 block overflow-hidden rounded-[1.75rem] border border-border bg-card transition-[opacity,transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_24px_60px_rgb(33_30_26/0.09)] sm:mt-12"
        >
          <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
            {/* Project information */}
            <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-11 xl:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-primary-foreground">
                  Flagship Project
                </span>

                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  {flagship.index} / {flagship.year}
                </span>
              </div>

              <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {flagship.category}
              </p>

              <h3 className="mt-3 font-display text-[clamp(2.5rem,5vw,4.3rem)] font-bold leading-[0.98] tracking-[-0.055em] transition-colors duration-300 group-hover:text-primary">
                {flagship.title}
              </h3>

              <p className="mt-5 max-w-lg text-[15px] leading-7 text-muted-foreground">
                {flagship.tagline}
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-border pt-6 text-sm">
                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                    Role
                  </dt>

                  <dd className="mt-1.5 font-medium">
                    {flagship.role}
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                    Context
                  </dt>

                  <dd className="mt-1.5 font-medium">
                    {flagship.context}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {flagship.tech.map((technology) => (
                  <ProjectChip key={technology}>
                    {technology}
                  </ProjectChip>
                ))}
              </div>

              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Read case study
                <ArrowIcon />
              </span>
            </div>

            {/* Decorative project preview */}
            <div aria-hidden="true">
              <EduBidanVisual />
            </div>
          </div>
        </Link>

        {/* =================================================
            Secondary Projects
            Intentionally asymmetric.
            ================================================= */}

        <div className="mt-6 grid gap-6 md:grid-cols-5">
          <div
            data-reveal
            className="reveal-on-scroll reveal-delay-1 md:col-span-3"
        >
            <SecondaryProjectCard
              project={disarpus}
              visual={<DisarpusVisual />}
            />
          </div>

          <div
            data-reveal
            className="reveal-on-scroll reveal-delay-2 md:col-span-2"
          >
            <SecondaryProjectCard
              project={lestari}
              visual={<LestariVisual />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}