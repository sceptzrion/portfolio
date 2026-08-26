"use client";

import Link from "next/link";
import {
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  projectFilterOptions,
  projects,
  type Project,
  type ProjectFilterValue,
} from "@/data/projects";

import { useLocale } from "@/components/i18n/locale-provider";
import {
  projectsDictionary,
  projectsIdContent,
} from "@/i18n/dictionaries/projects";

type ProjectGridCopy = {
  filters: Record<
    ProjectFilterValue,
    string
  >;

  labels: {
    featured: string;
    role: string;
    context: string;
    year: string;
  };

  actions: {
    viewCaseStudy: string;
    viewAllProjects: string;
  };

  empty: string;
};

function getProjectContent(
  project: Project,
  locale: "en" | "id",
) {
  if (locale === "en") {
    return {
      tagline:
        project.tagline,
      category:
        project.category,
      context:
        project.context,
      role:
        project.role,
    };
  }

  const localized =
    projectsIdContent[
      project.slug
    ];

  return {
    tagline:
      localized?.tagline ??
      project.tagline,

    category:
      localized?.category ??
      project.category,

    context:
      localized?.context ??
      project.context,

    role:
      localized?.role ??
      project.role,
  };
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
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
  children: ReactNode;
}) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-background/65 px-2.5 py-1 font-mono text-[8px] tracking-[0.06em] text-muted-foreground">
      {children}
    </span>
  );
}

/* =========================================================
   TEMPORARY PROJECT VISUALS
   Real screenshots can replace these later.
   ========================================================= */

function EduBidanVisual() {
  return (
    <div className="relative h-full min-h-64 overflow-hidden bg-[linear-gradient(145deg,var(--tertiary),var(--secondary))] p-5 sm:min-h-72 sm:p-7">
      <div
        aria-hidden="true"
        className="tech-grid absolute inset-0 opacity-35"
      />

      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 size-64 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto flex h-full max-w-170 items-center">
        <div className="w-full overflow-hidden rounded-2xl border border-border-strong bg-card shadow-[0_25px_65px_rgb(33_30_26/0.14)] transition-transform duration-700 group-hover:-translate-y-1">
          <div className="flex items-center gap-3 border-b border-border px-4 py-3">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-primary/70" />
              <span className="size-2 rounded-full bg-border-strong" />
              <span className="size-2 rounded-full bg-border-strong" />
            </div>

            <div className="min-w-0 flex-1 rounded-md bg-secondary px-3 py-1.5">
              <p className="truncate font-mono text-[8px] text-muted-foreground">
                edubidan / learning-dashboard
              </p>
            </div>
          </div>

          <div className="grid min-h-60 grid-cols-[68px_1fr] sm:min-h-68 sm:grid-cols-[94px_1fr]">
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
                  <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-primary">
                    Student Dashboard
                  </p>

                  <div className="mt-3 h-4 w-32 rounded bg-foreground/80 sm:w-44" />

                  <div className="mt-2 h-2 w-24 rounded-full bg-foreground/15" />
                </div>

                <span className="size-8 rounded-full bg-primary-soft" />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2.5">
                {[1, 2, 3].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-border bg-background p-3"
                    >
                      <span className="block h-2 w-8 rounded-full bg-primary/45" />

                      <span className="mt-3 block h-5 w-8 rounded bg-foreground/75" />
                    </div>
                  ),
                )}
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-[1.45fr_0.55fr]">
                <div className="rounded-xl border border-border bg-background p-4">
                  <div className="flex items-center justify-between">
                    <span className="h-2 w-20 rounded-full bg-foreground/20" />

                    <span className="h-5 w-11 rounded-full bg-primary-soft" />
                  </div>

                  <div className="mt-4 space-y-3">
                    {[78, 55, 88].map(
                      (width) => (
                        <div
                          key={width}
                          className="rounded-lg bg-secondary p-2.5"
                        >
                          <span className="block h-1.5 w-1/3 rounded-full bg-foreground/20" />

                          <span
                            className="mt-2.5 block h-1.5 rounded-full bg-primary/60"
                            style={{
                              width: `${width}%`,
                            }}
                          />
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="hidden rounded-xl bg-feature p-3 text-feature-foreground sm:block">
                  <p className="font-mono text-[7px] uppercase tracking-widest text-primary">
                    Progress
                  </p>

                  <div className="mx-auto mt-5 grid size-16 place-items-center rounded-full border-[6px] border-primary/80">
                    <span className="font-mono text-[6px] uppercase tracking-widest text-feature-muted">
                      Learning
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EduBidanCardVisual() {
  return (
    <div className="relative aspect-16/10 overflow-hidden bg-[linear-gradient(145deg,var(--tertiary),var(--secondary))] p-5">
      <div
        aria-hidden="true"
        className="tech-grid absolute inset-0 opacity-35"
      />

      <div
        aria-hidden="true"
        className="absolute -right-12 -top-12 size-48 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative h-full overflow-hidden rounded-2xl border border-border-strong bg-card shadow-[0_18px_45px_rgb(33_30_26/0.1)] transition-transform duration-700 group-hover:-translate-y-2">
        <div className="flex h-9 items-center gap-2 border-b border-border px-3">
          <div className="flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-primary/70" />
            <span className="size-1.5 rounded-full bg-border-strong" />
            <span className="size-1.5 rounded-full bg-border-strong" />
          </div>

          <div className="ml-2 h-1.5 flex-1 rounded-full bg-secondary" />
        </div>

        <div className="grid h-[calc(100%-36px)] grid-cols-[22%_1fr]">
          <div className="border-r border-border bg-secondary/55 p-3">
            <span className="block size-6 rounded-md bg-primary" />

            <div className="mt-5 space-y-2">
              <span className="block h-1.5 w-full rounded-full bg-foreground/15" />
              <span className="block h-1.5 w-4/5 rounded-full bg-foreground/10" />
              <span className="block h-1.5 w-3/5 rounded-full bg-foreground/10" />
            </div>
          </div>

          <div className="p-3">
            <p className="font-mono text-[6px] uppercase tracking-[0.14em] text-primary">
              Student Dashboard
            </p>

            <div className="mt-2 h-3 w-2/3 rounded bg-foreground/75" />

            <div className="mt-2 h-1.5 w-1/2 rounded-full bg-foreground/15" />

            <div className="mt-4 grid grid-cols-3 gap-2">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-border bg-background p-2"
                >
                  <span className="block h-1.5 w-1/2 rounded-full bg-primary/50" />

                  <span className="mt-2 block h-3 w-2/3 rounded bg-foreground/20" />
                </div>
              ))}
            </div>

            <div className="mt-2 rounded-lg border border-border bg-background p-2">
              <div className="flex items-center justify-between">
                <span className="h-1.5 w-1/3 rounded-full bg-foreground/15" />

                <span className="h-3 w-8 rounded-full bg-primary-soft" />
              </div>

              <div className="mt-2 h-1.5 w-4/5 rounded-full bg-primary/55" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DisarpusVisual() {
  return (
    <div className="relative aspect-16/10 overflow-hidden bg-[linear-gradient(145deg,var(--secondary),var(--tertiary))]">
      <div
        aria-hidden="true"
        className="tech-grid absolute inset-0 opacity-30"
      />

      <div className="absolute inset-x-[7%] bottom-[-12%] top-[12%] overflow-hidden rounded-t-2xl border border-border-strong bg-card shadow-[0_20px_50px_rgb(33_30_26/0.12)] transition-transform duration-700 group-hover:-translate-y-2">
        <div className="flex h-9 items-center border-b border-border px-4">
          <span className="size-5 rounded-md bg-primary" />

          <div className="ml-auto flex gap-3">
            <span className="h-1.5 w-7 rounded-full bg-foreground/20" />
            <span className="h-1.5 w-7 rounded-full bg-foreground/20" />
            <span className="h-1.5 w-7 rounded-full bg-foreground/20" />
          </div>
        </div>

        <div className="relative h-28 overflow-hidden bg-feature sm:h-32">
          <div className="tech-grid-feature absolute inset-0 opacity-50" />

          <div className="absolute inset-x-5 bottom-5">
            <span className="block h-2 w-16 rounded-full bg-primary" />

            <span className="mt-3 block h-5 w-48 max-w-full rounded bg-feature-foreground/85" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2.5 p-4">
          {[1, 2, 3].map(
            (item) => (
              <div
                key={item}
                className="rounded-lg border border-border p-2"
              >
                <div className="aspect-4/3 rounded-md bg-secondary" />

                <span className="mt-2 block h-1.5 w-4/5 rounded-full bg-foreground/20" />

                <span className="mt-1.5 block h-1.5 w-1/2 rounded-full bg-foreground/10" />
              </div>
            ),
          )}
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
        <div className="flex w-[42%] flex-col justify-between rounded-2xl border border-feature-border bg-feature/70 p-3 sm:p-4">
          <div>
            <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-primary">
              Waste Pickup
            </span>

            <div className="mt-3 h-4 w-3/4 rounded bg-feature-foreground/80" />

            <div className="mt-2 h-2 w-full rounded-full bg-feature-border" />

            <div className="mt-1.5 h-2 w-3/4 rounded-full bg-feature-border" />
          </div>

          <div className="rounded-xl bg-primary p-3">
            <span className="block h-2 w-1/2 rounded-full bg-primary-foreground/80" />

            <span className="mt-2 block h-4 w-3/4 rounded bg-primary-foreground" />
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

          <div className="h-[42%] rounded-2xl bg-primary p-3 sm:p-4">
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

function GoldVisual() {
  return (
    <div className="relative aspect-16/10 overflow-hidden bg-[linear-gradient(145deg,var(--tertiary),var(--secondary))] p-5">
      <div
        aria-hidden="true"
        className="tech-grid absolute inset-0 opacity-30"
      />

      <div className="relative h-full rounded-2xl border border-border bg-card/90 p-4 shadow-[0_18px_45px_rgb(33_30_26/0.09)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[7px] uppercase tracking-[0.14em] text-primary">
              Prediction
            </p>

            <div className="mt-2 h-4 w-28 rounded bg-foreground/80" />
          </div>

          <div className="rounded-full border border-border px-2 py-1 font-mono text-[6px] uppercase tracking-widest text-muted-foreground">
            USD / IDR
          </div>
        </div>

        <div className="relative mt-5 h-28 overflow-hidden rounded-xl border border-border bg-secondary/45">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[32px_32px] opacity-40"
          />

          <svg
            viewBox="0 0 400 120"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="absolute inset-0 size-full text-primary"
          >
            <path
              d="M0 92 C45 80 60 88 95 66 C132 43 155 62 190 46 C230 27 248 55 286 34 C326 12 349 30 400 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            "Gold",
            "FX Rate",
            "Result",
          ].map((label) => (
            <div
              key={label}
              className="rounded-lg bg-secondary/70 p-2.5"
            >
              <p className="font-mono text-[6px] uppercase tracking-wider text-muted-foreground">
                {label}
              </p>

              <div className="mt-2 h-3 w-3/4 rounded bg-foreground/20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HealingVisual() {
  return (
    <div className="relative aspect-16/10 overflow-hidden bg-feature p-5">
      <div
        aria-hidden="true"
        className="tech-grid-feature absolute inset-0 opacity-45"
      />

      <div
        aria-hidden="true"
        className="absolute -left-10 -top-10 size-48 rounded-full bg-primary/15 blur-3xl"
      />

      <div className="relative h-full overflow-hidden rounded-2xl border border-feature-border bg-feature/70">
        <div className="flex items-center justify-between border-b border-feature-border px-4 py-3">
          <span className="font-display text-xs font-semibold text-feature-foreground">
            HealingAja!
          </span>

          <div className="flex gap-2">
            <span className="h-1.5 w-7 rounded-full bg-feature-border" />
            <span className="h-1.5 w-7 rounded-full bg-feature-border" />
            <span className="h-1.5 w-7 rounded-full bg-feature-border" />
          </div>
        </div>

        <div className="grid h-[calc(100%-41px)] grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col justify-center p-4">
            <p className="font-mono text-[7px] uppercase tracking-[0.14em] text-primary">
              Explore destinations
            </p>

            <div className="mt-3 h-5 w-4/5 rounded bg-feature-foreground/85" />

            <div className="mt-2 h-2 w-full rounded bg-feature-border" />

            <div className="mt-1.5 h-2 w-3/4 rounded bg-feature-border" />

            <span className="mt-5 h-7 w-20 rounded-full bg-primary" />
          </div>

          <div className="grid grid-cols-2 gap-2 p-3">
            <div className="rounded-xl bg-primary/80" />

            <div className="rounded-xl border border-feature-border bg-feature-foreground/10" />

            <div className="col-span-2 rounded-xl border border-feature-border bg-feature-foreground/5" />
          </div>
        </div>
      </div>
    </div>
  );
}

function GenericVisual({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="relative aspect-16/10 overflow-hidden bg-[linear-gradient(145deg,var(--secondary),var(--tertiary))] p-5">
      <div
        aria-hidden="true"
        className="tech-grid absolute inset-0 opacity-30"
      />

      <div className="relative flex h-full flex-col justify-between rounded-2xl border border-border bg-card/75 p-5">
        <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-primary">
          {project.category}
        </p>

        <div>
          <p className="font-display text-3xl font-bold tracking-tighter">
            {project.index}
          </p>

          <p className="mt-2 text-sm font-medium">
            {project.title}
          </p>
        </div>
      </div>
    </div>
  );
}

function ProjectVisual({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  switch (project.slug) {
    case "edubidan":
      return compact ? (
        <EduBidanCardVisual />
      ) : (
        <EduBidanVisual />
      );

    case "disarpus-bekasi":
      return <DisarpusVisual />;

    case "lestari-waste-bank":
      return <LestariVisual />;

    case "gold-price-prediction":
      return <GoldVisual />;

    case "healingaja":
      return <HealingVisual />;

    default:
      return (
        <GenericVisual
          project={project}
        />
      );
  }
}

function FeaturedProjectCard({
  project,
  locale,
  copy,
}: {
  project: Project;
  locale: "en" | "id";
  copy: ProjectGridCopy;
}) {
  const content =
    getProjectContent(
      project,
      locale,
    );

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-border bg-card transition-[border-color,box-shadow] duration-500 hover:border-primary/35 hover:shadow-[0_22px_60px_rgb(33_30_26/0.08)]">
      <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
        <div
          aria-hidden="true"
          className="min-h-64 border-b border-border lg:border-b-0 lg:border-r"
        >
          <ProjectVisual
            project={project}
          />
        </div>

        <div className="flex flex-col p-6 sm:p-8 lg:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-[8px] uppercase tracking-[0.13em] text-primary">
              {project.index} /{" "}
              {content.category}
            </p>

            <span className="rounded-full border border-primary/25 bg-primary-soft px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.12em] text-primary">
              {copy.labels.featured}
            </span>
          </div>

          <h2 className="mt-5 font-display text-[clamp(2.4rem,4vw,4rem)] font-bold leading-[0.95] tracking-[-0.055em]">
            {project.title}
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
            {content.tagline}
          </p>

          {project.tech.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.tech.map(
                (technology) => (
                  <ProjectChip
                    key={technology}
                  >
                    {technology}
                  </ProjectChip>
                ),
              )}
            </div>
          )}

          <div className="mt-auto pt-7">
            <div className="grid gap-4 border-y border-border py-4 sm:grid-cols-3">
              {content.role && (
                <div>
                  <p className="font-mono text-[7px] uppercase tracking-[0.13em] text-muted-foreground">
                    {copy.labels.role}
                  </p>

                  <p className="mt-1.5 text-xs font-medium">
                    {content.role}
                  </p>
                </div>
              )}

              <div>
                <p className="font-mono text-[7px] uppercase tracking-[0.13em] text-muted-foreground">
                  {copy.labels.context}
                </p>

                <p className="mt-1.5 text-xs font-medium">
                  {content.context}
                </p>
              </div>

              {project.year && (
                <div>
                  <p className="font-mono text-[7px] uppercase tracking-[0.13em] text-muted-foreground">
                    {copy.labels.year}
                  </p>

                  <p className="mt-1.5 text-xs font-medium">
                    {project.year}
                  </p>
                </div>
              )}
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="group mt-5 inline-flex items-center gap-2 text-xs font-semibold text-primary"
            >
              {copy.actions.viewCaseStudy}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function StandardProjectCard({
  project,
  locale,
  copy,
}: {
  project: Project;
  locale: "en" | "id";
  copy: ProjectGridCopy;
}) {
  const content =
    getProjectContent(
      project,
      locale,
    );

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-border bg-card transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_18px_45px_rgb(33_30_26/0.07)]">
      <div aria-hidden="true">
        <ProjectVisual
           project={project}
           compact
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[7px] uppercase tracking-[0.11em] text-muted-foreground">
          <span className="text-primary">
            {project.index}
          </span>

          <span aria-hidden="true">
            /
          </span>

          <span>
            {content.category}
          </span>
        </div>

        <h2 className="mt-3.5 font-display text-[1.35rem] font-bold leading-[1.05] tracking-[-0.04em] sm:text-[1.5rem]">
          {project.title}
        </h2>

        <p className="mt-3 flex-1 text-[13px] leading-[1.65] text-muted-foreground">
          {content.tagline}
        </p>

        {project.tech.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech
              .slice(0, 4)
              .map(
                (technology) => (
                  <ProjectChip
                    key={technology}
                  >
                    {technology}
                  </ProjectChip>
                ),
              )}
          </div>
        )}

        <div className="mt-5 flex items-end justify-between gap-4 border-t border-border pt-4">
          <p className="font-mono text-[7px] uppercase leading-4 tracking-[0.11em] text-muted-foreground">
            {content.context}
          </p>

          <Link
            href={`/projects/${project.slug}`}
            aria-label={`${copy.actions.viewCaseStudy}: ${project.title}`}
            className="group grid size-8 shrink-0 place-items-center rounded-full border border-border text-primary transition-[border-color,transform] duration-300 hover:translate-x-1 hover:border-primary"
          >
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function ProjectFilterGrid() {
  const { locale } =
    useLocale();

  const copy =
    projectsDictionary[locale]
      .grid;

  const [
    activeFilter,
    setActiveFilter,
  ] =
    useState<ProjectFilterValue>(
      "all",
    );

  const filteredProjects =
    useMemo(() => {
      if (
        activeFilter === "all"
      ) {
        return projects;
      }

      return projects.filter(
        (project) =>
          project.filters.includes(
            activeFilter,
          ),
      );
    }, [activeFilter]);

  const featuredProject =
    filteredProjects.find(
      (project) =>
        project.featured,
    );

  /*
   * ALL:
   * EduBidan is displayed only as Featured.
   *
   * Specific filters:
   * If EduBidan belongs to the selected filter,
   * it is shown as Featured AND as a normal card,
   * matching the Figma Make behavior.
   */
  const gridProjects =
    activeFilter === "all"
      ? filteredProjects.filter(
          (project) =>
            !project.featured,
        )
      : filteredProjects;

  return (
    <section className="relative overflow-hidden bg-secondary/35">
      <div
        aria-hidden="true"
        className="warm-veil pointer-events-none absolute inset-0 opacity-25"
      />

      <div className="shell section relative">
        <div className="border-y border-border py-4 sm:py-5">
          <div className="flex flex-wrap items-center gap-2.5">
            {projectFilterOptions.map(
              (filter) => {
                const active =
                  activeFilter ===
                  filter.value;

                return (
                  <button
                    key={filter.value}
                    type="button"
                    aria-pressed={
                      active
                    }
                    aria-controls="projects-grid"
                    onClick={() =>
                      setActiveFilter(
                        filter.value,
                      )
                    }
                    className={[
                      "inline-flex min-h-10 shrink-0 items-center justify-center rounded-full border px-4 py-2 font-mono text-[10px] font-medium tracking-[0.08em] transition-[background-color,border-color,color,transform] duration-300 sm:px-5 sm:text-[11px]",
                      active
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background/70 text-muted-foreground hover:-translate-y-0.5 hover:border-primary hover:text-foreground",
                    ].join(" ")}
                  >
                    {copy.filters[filter.value]}
                  </button>
                );
              },
            )}
          </div>
        </div>

        <div className="mt-8 space-y-6">
          {featuredProject && (
            <div
              key={`${activeFilter}-featured-${featuredProject.slug}`}
              className="animate-in fade-in duration-300"
            >
              <FeaturedProjectCard
                project={
                  featuredProject
                }
                locale={locale}
                copy={copy}
              />
            </div>
          )}

          {gridProjects.length >
            0 && (
            <div
              id="projects-grid"
              className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            >
              {gridProjects.map(
                (project) => (
                  <div
                    key={`${activeFilter}-${project.slug}`}
                    className="animate-in fade-in duration-300"
                  >
                    <StandardProjectCard
                      project={
                        project
                      }
                      locale={locale}
                      copy={copy}
                    />
                  </div>
                ),
              )}
            </div>
          )}

          {filteredProjects.length ===
            0 && (
            <div className="rounded-3xl border border-border bg-card p-8 text-center">
              <p className="font-display text-xl font-semibold">
                {copy.empty}
              </p>

              <button
                type="button"
                onClick={() =>
                  setActiveFilter(
                    "all",
                  )
                }
                className="mt-4 text-sm font-semibold text-primary"
              >
                {
                  copy.actions
                    .viewAllProjects
                }
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}