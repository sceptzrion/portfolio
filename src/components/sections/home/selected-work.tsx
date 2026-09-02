import Image from "next/image";
import Link from "next/link";

import {
  featuredProjects,
  type FeaturedProject,
} from "@/data/projects";
import { projectImages } from "@/data/assets";
import { homeDictionary } from "@/i18n/dictionaries/home";
import { getLocale } from "@/i18n/get-locale";

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
   REAL PROJECT VISUALS
   Uses each featured project's curated primary screenshot.
   ========================================================= */

const homeProjectImageKeys: Record<
  string,
  string
> = {
  edubidan: "landing-page",
  "disarpus-bekasi": "homepage",
  "lestari-waste-bank":
    "statistics-reporting",
};

function HomeProjectVisual({
  project,
  featured = false,
}: {
  project: FeaturedProject;
  featured?: boolean;
}) {
  const imageKey =
    homeProjectImageKeys[
      project.slug
    ];

  const imageSrc =
    imageKey
      ? projectImages[
          project.slug
        ]?.[imageKey]
      : undefined;

  const layoutClass =
    featured
      ? "h-full min-h-80 sm:min-h-97.5"
      : project.slug ===
          "disarpus-bekasi"
        ? "aspect-video"
        : "aspect-16/10";

  if (!imageSrc) {
    return (
      <div
        className={`relative overflow-hidden bg-[linear-gradient(145deg,var(--secondary),var(--tertiary))] ${layoutClass}`}
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

  const sizes =
    featured
      ? "(min-width: 1024px) 54vw, 100vw"
      : project.slug ===
          "disarpus-bekasi"
        ? "(min-width: 768px) 60vw, 100vw"
        : "(min-width: 768px) 40vw, 100vw";

  return (
    <div
      className={[
        "relative overflow-hidden",
        featured
          ? "bg-white"
          : "bg-secondary",
        layoutClass,
      ].join(" ")}
    >
      <Image
        src={imageSrc}
        alt=""
        fill
        sizes={sizes}
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

function SecondaryProjectCard({
  project,
  visual,
  tagline,
  viewProjectLabel,
}: {
  project: FeaturedProject;
  visual: React.ReactNode;
  tagline: string;
  viewProjectLabel: string;
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
          {tagline}
        </p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tech
            .slice(0, 3)
            .map(
              (technology) => (
                <ProjectChip
                  key={
                    technology
                  }
                >
                  {technology}
                </ProjectChip>
              ),
            )}
        </div>

        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          {viewProjectLabel}
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}

export default async function SelectedWork() {
  const locale =
    await getLocale();

  const copy =
    homeDictionary[locale]
      .selectedWork;

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
              {copy.label}
            </div>

            <h2 className="mt-5 text-balance font-display text-[clamp(2.6rem,5vw,4.6rem)] font-bold leading-[0.99] tracking-tighter">
              {
                copy.headline
                  .introduction
              }{" "}
              <span className="text-primary">
                {
                  copy.headline
                    .emphasis
                }
              </span>
            </h2>
          </div>

          <div className="max-w-sm lg:text-right">
            <p className="text-sm leading-6 text-muted-foreground">
              {copy.description}
            </p>

            <Link
              href="/projects"
              className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              {
                copy.actions
                  .allProjects
              }
              <ArrowIcon />
            </Link>
          </div>
        </div>

        {/* Flagship */}
        <div
          data-reveal
          className="reveal-on-scroll reveal-delay-1 mt-10 sm:mt-12"
        >
          <Link
            href={`/projects/${flagship.slug}`}
            className="group block overflow-hidden rounded-[1.75rem] border border-border bg-card transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_24px_60px_rgb(33_30_26/0.09)]"
          >
            <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
              <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-11 xl:p-12">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-primary px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-primary-foreground">
                    {
                      copy.flagshipLabel
                    }
                  </span>

                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                    {flagship.index} /{" "}
                    {flagship.year}
                  </span>
                </div>

                <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {flagship.category}
                </p>

                <h3 className="mt-3 font-display text-[clamp(2.5rem,5vw,4.3rem)] font-bold leading-[0.98] tracking-[-0.055em] transition-colors duration-300 group-hover:text-primary">
                  {flagship.title}
                </h3>

                <p className="mt-5 max-w-lg text-[15px] leading-7 text-muted-foreground">
                  {
                    copy.projects
                      .edubidan
                      .tagline
                  }
                </p>

                <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 border-t border-border pt-6 sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      {
                        copy.details
                          .role
                      }
                    </dt>

                    <dd className="mt-1.5 font-medium">
                      {flagship.role}
                    </dd>
                  </div>

                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      {
                        copy.details
                          .context
                      }
                    </dt>

                    <dd className="mt-1.5 font-medium">
                      {
                        copy.projects
                          .edubidan
                          .context
                      }
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {flagship.tech.map(
                    (technology) => (
                      <ProjectChip
                        key={
                          technology
                        }
                      >
                        {technology}
                      </ProjectChip>
                    ),
                  )}
                </div>

                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  {
                    copy.actions
                      .readCaseStudy
                  }
                  <ArrowIcon />
                </span>
              </div>

              <div aria-hidden="true">
                <HomeProjectVisual
                  project={flagship}
                  featured
                />
              </div>
            </div>
          </Link>
        </div>

        {/* Secondary Projects */}
        <div className="mt-6 grid gap-6 md:grid-cols-5">
          <div
            data-reveal
            className="reveal-on-scroll reveal-delay-1 md:col-span-3"
          >
            <SecondaryProjectCard
              project={disarpus}
              visual={
                <HomeProjectVisual
                  project={disarpus}
                />
              }
              tagline={
                copy.projects
                  .disarpus
                  .tagline
              }
              viewProjectLabel={
                copy.actions
                  .viewProject
              }
            />
          </div>

          <div
            data-reveal
            className="reveal-on-scroll reveal-delay-2 md:col-span-2"
          >
            <SecondaryProjectCard
              project={lestari}
              visual={
                <HomeProjectVisual
                  project={lestari}
                />
              }
              tagline={
                copy.projects
                  .lestari
                  .tagline
              }
              viewProjectLabel={
                copy.actions
                  .viewProject
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}