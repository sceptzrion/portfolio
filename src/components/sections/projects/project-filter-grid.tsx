"use client";

import Image from "next/image";
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
import { projectImages } from "@/data/assets";

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
   REAL PROJECT VISUALS
   Uses each project's curated primary screenshot.
   ========================================================= */

const projectIndexImageKeys: Record<
  string,
  string
> = {
  edubidan: "landing-page",
  "disarpus-bekasi": "homepage",
  "lestari-waste-bank":
    "statistics-reporting",
  "gold-price-prediction":
    "prediction-dashboard",
  healingaja: "landing-page",
};

function ProjectVisual({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const imageKey =
    projectIndexImageKeys[
      project.slug
    ];

  const imageSrc =
    imageKey
      ? projectImages[
          project.slug
        ]?.[imageKey]
      : undefined;

  if (!imageSrc) {
    return (
      <div
        className={[
          "relative overflow-hidden bg-[linear-gradient(145deg,var(--secondary),var(--tertiary))]",
          featured
            ? "h-full min-h-64"
            : "aspect-16/10",
        ].join(" ")}
      >
        <div
          aria-hidden="true"
          className="tech-grid absolute inset-0 opacity-30"
        />

        <div className="absolute inset-5 flex flex-col justify-between rounded-2xl border border-border bg-card/80 p-5">
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

  return (
    <div
      className={[
        "relative overflow-hidden",
        featured
          ? "h-full min-h-64 bg-white"
          : "aspect-16/10 bg-secondary",
      ].join(" ")}
    >
      <Image
        src={imageSrc}
        alt={`${project.title} interface preview`}
        fill
        sizes={
          featured
            ? "(min-width: 1024px) 54vw, 100vw"
            : "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
        }
        className={[
          "transition-transform duration-700 group-hover:scale-[1.015]",
          featured
            ? "object-contain object-center"
            : "object-cover object-top",
        ].join(" ")}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5"
      />
    </div>
  );
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
        <Link
          href={`/projects/${project.slug}`}
          aria-label={`${copy.actions.viewCaseStudy}: ${project.title}`}
          className="block min-h-64 overflow-hidden border-b border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary lg:border-b-0 lg:border-r"
        >
          <ProjectVisual
            project={project}
            featured
          />
        </Link>

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
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`${copy.actions.viewCaseStudy}: ${project.title}`}
        className="block overflow-hidden border-b border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
      >
        <ProjectVisual
          project={project}
        />
      </Link>

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