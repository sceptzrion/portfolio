import Link from "next/link";

import type {
  Project,
} from "@/data/projects";
import type {
  Locale,
} from "@/i18n/config";
import {
  projectDetailsDictionary,
  type ProjectDetailProjectCopy,
  type ProjectScreenLayout,
} from "@/i18n/dictionaries/project-details";
import {
  projectsIdContent,
} from "@/i18n/dictionaries/projects";

function ArrowIcon({
  reverse = false,
}: {
  reverse?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={
        reverse
          ? "size-4 rotate-180 transition-transform duration-300 group-hover:-translate-x-1"
          : "size-4 transition-transform duration-300 group-hover:translate-x-1"
      }
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

function SectionLabel({
  children,
}: {
  children: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className="h-px w-6 bg-primary"
      />

      <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-muted-foreground">
        {children}
      </p>
    </div>
  );
}

function Chip({
  children,
}: {
  children: string;
}) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-background/65 px-3 py-1.5 font-mono text-[9px] tracking-[0.06em] text-muted-foreground">
      {children}
    </span>
  );
}

function getDisplayContent(
  project: Project,
  locale: Locale,
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

function ProjectMeta({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-32">
      <dt className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </dt>

      <dd className="mt-2 text-sm font-medium text-foreground">
        {value}
      </dd>
    </div>
  );
}

function screenLayoutClass(
  layout: ProjectScreenLayout,
) {
  if (layout === "portrait") {
    return "mx-auto aspect-4/5 w-full max-w-sm";
  }

  if (layout === "wide") {
    return "aspect-16/9 sm:col-span-2";
  }

  return "aspect-4/3";
}

function PlaceholderContent({
  index,
}: {
  index: number;
}) {
  return (
    <div className="relative flex h-full flex-col justify-between p-4 sm:p-5">
      <div>
        <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-primary">
          Visual {String(
            index,
          ).padStart(
            2,
            "0",
          )}
        </p>

        <div className="mt-3 h-3 w-[42%] rounded-full bg-foreground/75" />

        <div className="mt-2 h-1.5 w-[62%] rounded-full bg-foreground/12" />
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3].map(
          (item) => (
            <div
              key={item}
              className="rounded-lg border border-border bg-background/70 p-2"
            >
              <span className="block h-1.5 w-1/2 rounded-full bg-primary/45" />

              <span className="mt-2 block h-3 w-3/4 rounded bg-foreground/15" />
            </div>
          ),
        )}
      </div>
    </div>
  );
}

function DesktopMockup({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div className="absolute inset-[7%] overflow-hidden rounded-xl border border-border-strong bg-card shadow-[0_20px_55px_rgb(33_30_26/0.10)] transition-transform duration-700 group-hover:-translate-y-1">
      <div className="flex h-9 items-center gap-1.5 border-b border-border px-3">
        <span className="size-1.5 rounded-full bg-primary/75" />

        <span className="size-1.5 rounded-full bg-border-strong" />

        <span className="size-1.5 rounded-full bg-border-strong" />

        <div className="ml-2 min-w-0 flex-1 rounded-md bg-secondary px-2 py-1">
          <p className="truncate font-mono text-[7px] text-muted-foreground">
            {project.slug +
              " / desktop"}
          </p>
        </div>
      </div>

      <div className="relative h-[calc(100%-36px)] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_82%_15%,color-mix(in_srgb,var(--primary)_12%,transparent),transparent_35%)]"
        />

        <PlaceholderContent
          index={index}
        />
      </div>
    </div>
  );
}

function MobileMockup({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div className="absolute inset-0 flex items-start justify-center pt-[7%]">
      <div className="relative h-[72%] aspect-9/19.5 overflow-hidden rounded-4xl border-[6px] border-foreground/85 bg-card shadow-[0_22px_55px_rgb(0_0_0/0.22)] transition-transform duration-700 group-hover:-translate-y-1">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1.5 z-20 h-3.5 w-14 -translate-x-1/2 rounded-full bg-foreground/85"
        />

        <div className="absolute inset-x-0 top-0 z-10 flex h-7 items-center justify-between px-3 font-mono text-[5px] text-muted-foreground">
          <span>
            9:41
          </span>

          <span>
            {project.index}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 top-7 overflow-hidden bg-[linear-gradient(145deg,var(--tertiary),var(--secondary))]">
          <div
            aria-hidden="true"
            className="tech-grid absolute inset-0 opacity-20"
          />

          <PlaceholderContent
            index={index}
          />
        </div>
      </div>
    </div>
  );
}

function ScreenPlaceholder({
  project,
  screen,
  index,
  primary = false,
}: {
  project: Project;
  screen:
    ProjectDetailProjectCopy["screens"][number];
  index: number;
  primary?: boolean;
}) {
  const layoutClass =
    primary
      ? "aspect-16/9"
      : screenLayoutClass(
          screen.layout,
        );

  const mobileMockup =
    !primary &&
    screen.layout ===
      "portrait";

  return (
    <div
      className={
        "group relative overflow-hidden rounded-2xl border border-border bg-[linear-gradient(145deg,var(--tertiary),var(--secondary))] " +
        layoutClass
      }
    >
      <div
        aria-hidden="true"
        className="tech-grid absolute inset-0 opacity-25"
      />

      <div
        aria-hidden="true"
        className="absolute right-[-10%] top-[-18%] size-[48%] rounded-full bg-primary/10 blur-3xl"
      />

      {mobileMockup ? (
        <MobileMockup
          project={project}
          index={index}
        />
      ) : (
        <DesktopMockup
          project={project}
          index={index}
        />
      )}

      <div className="absolute inset-x-0 bottom-0 z-30 bg-[linear-gradient(to_top,rgb(0_0_0/0.78),transparent)] px-5 pb-5 pt-16 text-white">
        <p className="font-display text-base font-semibold sm:text-lg">
          {screen.label}
        </p>

        <p className="mt-1 max-w-xl text-xs leading-5 text-white/70">
          {screen.detail}
        </p>
      </div>
    </div>
  );
}

export default function ProjectDetailView({
  project,
  nextProject,
  locale,
}: {
  project: Project;
  nextProject: Project;
  locale: Locale;
}) {
  const dictionary =
    projectDetailsDictionary[
      locale
    ];

  const copy =
    dictionary.ui;

  const detail =
    dictionary.projects[
      project.slug
    ];

  const display =
    getDisplayContent(
      project,
      locale,
    );

  const nextDisplay =
    getDisplayContent(
      nextProject,
      locale,
    );

  const primaryScreen =
    detail.screens[0];

  const supportingScreens =
    detail.screens.slice(1);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-background pt-32 sm:pt-36 lg:pt-40">
        <div
          aria-hidden="true"
          className="warm-veil pointer-events-none absolute inset-0 opacity-50"
        />

        <div
          aria-hidden="true"
          className="tech-dots pointer-events-none absolute right-0 top-0 hidden h-[72%] w-[34%] opacity-[0.10] mask-[linear-gradient(to_left,black,transparent)] md:block"
        />

        <div className="shell relative pb-12 sm:pb-16 lg:pb-20">
          <div
            data-reveal
            className="reveal-on-scroll"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              <ArrowIcon reverse />

              {copy.back}
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              <span className="text-primary">
                {project.index}
              </span>

              <span
                aria-hidden="true"
              >
                /
              </span>

              <span>
                {display.category}
              </span>
            </div>

            <h1 className="mt-5 max-w-5xl text-balance font-display text-[clamp(3.4rem,8vw,7rem)] font-bold leading-[0.92] tracking-[-0.06em]">
              {project.title}
            </h1>

            <p className="mt-7 max-w-2xl text-[17px] leading-8 text-muted-foreground sm:text-lg sm:leading-9">
              {display.tagline}
            </p>
          </div>

          <dl
            data-reveal
            className="reveal-on-scroll reveal-delay-1 mt-10 flex flex-wrap gap-x-12 gap-y-6 border-t border-border pt-6"
          >
            {display.role ? (
              <ProjectMeta
                label={
                  copy.labels.role
                }
                value={
                  display.role
                }
              />
            ) : null}

            <ProjectMeta
              label={
                copy.labels.context
              }
              value={
                display.context
              }
            />

            {project.year ? (
              <ProjectMeta
                label={
                  copy.labels.year
                }
                value={
                  project.year
                }
              />
            ) : null}
          </dl>
        </div>
      </section>

      {/* PRIMARY VISUAL */}
      <section className="bg-background">
        <div className="shell pb-16 pt-8 sm:pb-20 lg:pb-24">
          <div
            data-reveal
            className="reveal-on-scroll"
          >
            <div className="overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-[0_28px_80px_rgb(33_30_26/0.10)] sm:p-3">
              <div className="flex items-center gap-1.5 px-3 py-2.5">
                <span className="size-2 rounded-full bg-primary/75" />
                <span className="size-2 rounded-full bg-border-strong" />
                <span className="size-2 rounded-full bg-border-strong" />

                <span className="ml-3 truncate font-mono text-[9px] text-muted-foreground">
                  {project.slug +
                    " / " +
                    copy.primaryScreen}
                </span>
              </div>

              <ScreenPlaceholder
                project={project}
                screen={
                  primaryScreen
                }
                index={1}
                primary
              />
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="border-y border-border bg-tertiary">
        <div className="shell section">
          <div className="grid gap-12 lg:grid-cols-[1.14fr_0.86fr] lg:gap-20">
            <div
              data-reveal
              className="reveal-on-scroll"
            >
              <SectionLabel>
                {copy.overview}
              </SectionLabel>

              <p className="mt-6 max-w-3xl font-display text-[clamp(1.4rem,2.35vw,2.2rem)] font-semibold leading-[1.22] tracking-[-0.03em]">
                {detail.overview}
              </p>
            </div>

            <div
              data-reveal
              className="reveal-on-scroll reveal-from-right reveal-delay-1 space-y-5"
            >
              <div className="rounded-3xl border border-border bg-card p-6 sm:p-7">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-primary">
                  {copy.focus}
                </p>

                <ul className="mt-5 space-y-4">
                  {detail.focus.map(
                    (item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-muted-foreground"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />

                        <span>
                          {item}
                        </span>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {project.tech.length >
              0 ? (
                <div className="rounded-3xl border border-border bg-card p-6 sm:p-7">
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                    {
                      copy.technology
                    }
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map(
                      (item) => (
                        <Chip
                          key={item}
                        >
                          {item}
                        </Chip>
                      ),
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative overflow-hidden border-b border-feature-border bg-feature text-feature-foreground">
        <div
          aria-hidden="true"
          className="tech-grid-feature pointer-events-none absolute inset-0 opacity-30"
        />

        <div
          aria-hidden="true"
          className="absolute -right-20 top-0 size-96 rounded-full bg-primary/10 blur-3xl"
        />

        <div className="shell section relative">
          <div
            data-reveal
            className="reveal-on-scroll"
          >
            <SectionLabel>
              {copy.keyFeatures}
            </SectionLabel>

            <h2 className="mt-5 max-w-3xl text-balance font-display text-[clamp(2.4rem,5vw,4.4rem)] font-bold leading-[0.98] tracking-tighter">
              {project.title}
              <span className="text-primary">
                {" / "}
                {
                  copy.keyFeatures
                }
              </span>
            </h2>
          </div>

          <div className="mt-10 grid overflow-hidden rounded-3xl border border-feature-border sm:grid-cols-2 lg:grid-cols-3">
            {detail.features.map(
              (feature, index) => (
                <article
                  key={
                    feature.title
                  }
                  data-reveal
                  className="reveal-on-scroll border-b border-feature-border p-6 last:border-b-0 sm:border-r sm:last:border-r-0 lg:p-7"
                >
                  <p className="font-mono text-[9px] tracking-[0.15em] text-primary">
                    {String(
                      index + 1,
                    ).padStart(
                      2,
                      "0",
                    )}
                  </p>

                  <h3 className="mt-4 font-display text-xl font-semibold">
                    {
                      feature.title
                    }
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-feature-muted">
                    {
                      feature.detail
                    }
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION */}
      {detail.implementation ? (
        <section className="border-b border-border bg-background">
          <div className="shell section">
            <div className="grid gap-10 lg:grid-cols-[0.34fr_1fr] lg:gap-16">
              <div
                data-reveal
                className="reveal-on-scroll"
              >
                <SectionLabel>
                  {
                    copy.implementation
                  }
                </SectionLabel>
              </div>

              <div className="divide-y divide-border border-y border-border">
                {detail.implementation.map(
                  (
                    item,
                    index,
                  ) => (
                    <div
                      key={
                        item.title
                      }
                      data-reveal
                      className="reveal-on-scroll grid gap-3 py-6 sm:grid-cols-[48px_0.48fr_1fr] sm:items-start sm:gap-6"
                    >
                      <span className="font-mono text-[9px] text-primary">
                        {String(
                          index + 1,
                        ).padStart(
                          2,
                          "0",
                        )}
                      </span>

                      <h3 className="font-display text-lg font-semibold">
                        {
                          item.title
                        }
                      </h3>

                      <p className="text-sm leading-6 text-muted-foreground">
                        {
                          item.detail
                        }
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* SCREENS */}
      <section className="bg-tertiary">
        <div className="shell section">
          <div
            data-reveal
            className="reveal-on-scroll flex flex-col gap-5 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <SectionLabel>
                {copy.screens}
              </SectionLabel>

              <h2 className="mt-5 max-w-3xl text-balance font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.98] tracking-tighter">
                {
                  copy.screens
                }
                <span className="text-primary">
                  .
                </span>
              </h2>
            </div>

            <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
              {String(
                detail.screens.length,
              ).padStart(
                2,
                "0",
              ) +
                " " +
                copy.selectedScreens}
            </p>
          </div>

          {supportingScreens.length >
          0 ? (
            <div className="mt-8 grid items-start gap-5 sm:grid-cols-2">
              {supportingScreens.map(
                (
                  screen,
                  index,
                ) => (
                  <div
                    key={
                      screen.label
                    }
                    data-reveal
                    className="reveal-on-scroll"
                  >
                    <ScreenPlaceholder
                      project={
                        project
                      }
                      screen={
                        screen
                      }
                      index={
                        index + 2
                      }
                    />
                  </div>
                ),
              )}
            </div>
          ) : null}
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className="border-t border-border bg-background">
        <div className="shell py-16 sm:py-20">
          <div
            data-reveal
            className="reveal-on-scroll"
          >
            <Link
              href={
                "/projects/" +
                nextProject.slug
              }
              className="group block rounded-3xl border border-border bg-card p-7 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_60px_rgb(33_30_26/0.10)] sm:p-9"
            >
              <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                    {
                      copy.nextProject
                    }
                  </p>

                  <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.6rem)] font-bold tracking-[-0.045em] transition-colors duration-300 group-hover:text-primary">
                    {
                      nextProject.title
                    }
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                    {
                      nextDisplay.tagline
                    }
                  </p>
                </div>

                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-border-strong text-primary transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </div>
            </Link>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/projects"
                className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                <ArrowIcon reverse />

                {
                  copy.actions
                    .allProjects
                }
              </Link>

              <Link
                href="/contact"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-border-strong bg-background px-5 text-sm font-semibold text-foreground transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary-soft"
              >
                {
                  copy.actions
                    .contact
                }

                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
