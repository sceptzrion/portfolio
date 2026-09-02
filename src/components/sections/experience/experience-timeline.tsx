import type { ReactNode } from "react";

import { experiences } from "@/data/experience";
import { experienceDictionary } from "@/i18n/dictionaries/experience";
import { getLocale } from "@/i18n/get-locale";

type WorkflowVariant =
  | "frontend"
  | "data";

function WorkflowVisual({
  label,
  steps,
  variant,
}: {
  label: string;
  steps: readonly string[];
  variant: WorkflowVariant;
}) {
  const marker =
    variant === "frontend"
      ? "WEB"
      : "DATA";

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden rounded-2xl border border-border bg-secondary/45"
    >
      <div
        className="tech-grid pointer-events-none absolute inset-0 opacity-[0.045]"
      />

      <div className="relative p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted-foreground">
            {label}
          </p>

          <span className="rounded-full border border-primary/20 bg-primary-soft px-2.5 py-1 font-mono text-[7px] font-semibold uppercase tracking-[0.14em] text-primary">
            {marker}
          </span>
        </div>

        <div className="relative mt-5">
          <span className="absolute bottom-4 left-3.75 top-4 w-px bg-border-strong" />

          <div className="space-y-3">
            {steps.map(
              (
                step,
                index,
              ) => (
                <div
                  key={step}
                  className="relative grid grid-cols-[30px_1fr] items-center gap-3"
                >
                  <span
                    className={[
                      "relative z-10 grid size-7.5 place-items-center rounded-full border bg-background font-mono text-[8px] tracking-widest",
                      index === 0
                        ? "border-primary/45 text-primary"
                        : "border-border-strong text-muted-foreground",
                    ].join(" ")}
                  >
                    {String(
                      index + 1,
                    ).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <div
                    className={[
                      "rounded-xl border px-4 py-3.5",
                      variant ===
                      "frontend"
                        ? "border-border bg-background/80"
                        : "border-primary/15 bg-primary-soft/25",
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-semibold leading-5 text-foreground">
                        {step}
                      </p>

                      {index <
                        steps.length -
                          1 && (
                        <span className="shrink-0 font-mono text-[10px] text-primary/65">
                          ↓
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
          <span className="size-1.5 rounded-full bg-primary" />

          <span className="h-px flex-1 bg-border" />

          <span className="font-mono text-[7px] uppercase tracking-[0.13em] text-muted-foreground">
            04 Steps
          </span>
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({
  experience,
  category,
  type,
  headline,
  description,
  highlights,
  workedOnLabel,
  mostRecentLabel,
  visual,
  mostRecent = false,
}: {
  experience: (typeof experiences)[number];
  category: string;
  type: string;
  headline: ReactNode;
  description: string;
  highlights: readonly string[];
  workedOnLabel: string;
  mostRecentLabel: string;
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
                  {mostRecentLabel}
                </span>
              )}
            </div>

            <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
              {type}
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
            {workedOnLabel}
          </p>

          <div className="mt-5 grid border-y border-border md:grid-cols-2">
            {highlights.map((highlight, index) => (
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

export default async function ExperienceTimeline() {
  const locale =
    await getLocale();

  const copy =
    experienceDictionary[locale].timeline;

  const webExperience =
    experiences[0];

  const dataExperience =
    experiences[1];

  const webCopy =
    copy.items["diskominfosantik-bekasi"];

  const dataCopy =
    copy.items["bank-muamalat"];

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
                {copy.label}
              </p>

              <p className="mt-2 font-display text-sm font-semibold">
                {copy.title}
              </p>

              <p className="mt-4 font-mono text-[7px] uppercase leading-5 tracking-[0.13em] text-primary">
                {copy.latestFirst}
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
                  category={webCopy.category}
                  type={webCopy.type}
                  mostRecent
                  mostRecentLabel={
                    copy.mostRecent
                  }
                  workedOnLabel={
                    copy.workedOn
                  }
                  headline={
                    <>
                      {
                        webCopy
                          .headline
                          .introduction
                      }{" "}
                      <span className="text-primary">
                        {
                          webCopy
                            .headline
                            .emphasis
                        }
                      </span>
                    </>
                  }
                  description={
                    webCopy.description
                  }
                  highlights={
                    webCopy.highlights
                  }
                  visual={
                    <WorkflowVisual
                      label={
                        copy.visuals
                          .frontendFlow
                      }
                      steps={
                        copy.visuals
                          .frontendFlowSteps
                      }
                      variant="frontend"
                    />
                  }
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
                  category={dataCopy.category}
                  type={dataCopy.type}
                  mostRecentLabel={
                    copy.mostRecent
                  }
                  workedOnLabel={
                    copy.workedOn
                  }
                  headline={
                    <>
                      {
                        dataCopy
                          .headline
                          .introduction
                      }{" "}
                      <span className="text-primary">
                        {
                          dataCopy
                            .headline
                            .emphasis
                        }
                      </span>
                    </>
                  }
                  description={
                    dataCopy.description
                  }
                  highlights={
                    dataCopy.highlights
                  }
                  visual={
                    <WorkflowVisual
                      label={
                        copy.visuals
                          .analysisFlow
                      }
                      steps={
                        copy.visuals
                          .analysisFlowSteps
                      }
                      variant="data"
                    />
                  }
                />
              </div>

              <div
                aria-hidden="true"
                className="relative hidden h-5 sm:block"
              >
                <span className="absolute left-0 top-1/2 size-2.75 -translate-y-1/2 rounded-full border-2 border-border-strong bg-secondary" />

                <span className="absolute left-10 top-1/2 -translate-y-1/2 font-mono text-[7px] uppercase tracking-[0.14em] text-muted-foreground">
                  {copy.earlier}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}