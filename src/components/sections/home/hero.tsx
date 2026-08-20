import Link from "next/link";

import { siteConfig } from "@/data/site";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-4"
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

function ArrowDownIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="m7 14 5 5 5-5" />
    </svg>
  );
}

function PortraitPlaceholder() {
  return (
    <div
      aria-label="Portrait placeholder for Rizqi"
      className="relative aspect-5/6 w-full overflow-hidden bg-muted"
    >
      {/* Decorative portrait placeholder */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_68%_20%,color-mix(in_srgb,var(--primary)_18%,transparent),transparent_34%),linear-gradient(145deg,var(--muted),var(--tertiary))]"
      />

      <div
        aria-hidden="true"
        className="absolute right-[-15%] top-[10%] size-[70%] rounded-full border border-primary/20"
      />

      <div
        aria-hidden="true"
        className="absolute left-[-12%] bottom-[8%] size-[58%] rounded-full bg-primary/10 blur-3xl"
      />

      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <span className="font-display text-[clamp(5rem,12vw,9rem)] font-extrabold tracking-[-0.08em] text-foreground/10">
            {siteConfig.monogram}
          </span>

          <p className="mono mt-3 text-muted-foreground">
            Portrait coming later
          </p>
        </div>
      </div>

      {/* Bottom identity */}
      <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgb(0_0_0/0.55),transparent)] px-5 pb-5 pt-16">
        <p className="font-display text-lg font-semibold text-white">
          {siteConfig.fullName}
        </p>

        <p className="mt-1 text-xs text-white/75">
          {siteConfig.role}
        </p>
      </div>
    </div>
  );
}

function ProjectPreview() {
  return (
    <div
      aria-hidden="true"
      className="absolute -bottom-7 -left-5 hidden w-55 rotate-[-4deg] overflow-hidden rounded-xl border border-border-strong bg-card shadow-[0_20px_55px_rgb(33_30_26/0.18)] transition-transform duration-500 hover:rotate-0 sm:block lg:-left-10"
    >
      {/* Browser toolbar */}
      <div className="flex items-center border-b border-border px-3 py-2">
        <div className="flex items-center gap-1">
          <span className="size-1.5 rounded-full bg-primary/70" />
          <span className="size-1.5 rounded-full bg-border-strong" />
          <span className="size-1.5 rounded-full bg-border-strong" />
        </div>

        <span className="ml-2 truncate font-mono text-[9px] text-muted-foreground">
          edubidan · thesis
        </span>
      </div>

      {/* Temporary project visual */}
      <div className="relative aspect-16/10 overflow-hidden bg-feature">
        <div className="tech-grid-feature absolute inset-0 opacity-60" />

        <div className="absolute inset-3 rounded-lg border border-feature-border bg-feature">
          <div className="p-3">
            <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-primary">
              Featured project
            </p>

            <p className="mt-2 font-display text-sm font-semibold leading-tight text-feature-foreground">
              EduBidan Learning
              <br />
              Management System
            </p>

            <div className="mt-3 flex gap-1">
              <span className="h-1.5 w-12 rounded-full bg-primary/70" />
              <span className="h-1.5 w-6 rounded-full bg-feature-border" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-svh overflow-hidden"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="warm-veil pointer-events-none absolute inset-0 opacity-70"
      />

      <div
        aria-hidden="true"
        className="tech-grid pointer-events-none absolute inset-0 opacity-40 mask-[radial-gradient(ellipse_at_top_right,black,transparent_68%)]"
      />

      {/* Small decorative marker */}
      <div
        aria-hidden="true"
        className="absolute right-[7%] top-[18%] hidden grid-cols-4 gap-2 opacity-45 xl:grid"
      >
        {Array.from({ length: 16 }).map((_, index) => (
          <span
            key={index}
            className="size-1 rounded-full bg-primary"
          />
        ))}
      </div>

      <div className="shell relative flex min-h-svh items-center pb-20 pt-32 sm:pt-36 lg:pb-24 lg:pt-40">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.06fr_0.94fr] lg:gap-12 xl:gap-20">
          {/* =================================================
              Left Content
              ================================================= */}

          <div>
            {/* Availability */}
            <div
              className="reveal flex flex-wrap items-center gap-x-4 gap-y-2 text-sm"
              style={{
                animationDelay: "0ms",
              }}
            >
              <span className="inline-flex items-center gap-2 font-medium text-foreground">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />

                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>

                {siteConfig.hero.availability}
              </span>

              <span
                aria-hidden="true"
                className="text-muted-foreground"
              >
                ·
              </span>

              <span className="text-muted-foreground">
                {siteConfig.location}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="reveal mt-7 max-w-190 text-balance font-display text-[clamp(3.15rem,7vw,5.5rem)] font-extrabold leading-[0.97] tracking-[-0.055em]"
              style={{
                animationDelay: "80ms",
              }}
            >
              {siteConfig.hero.headline.introduction}

              <span className="mt-3 block font-semibold text-muted-foreground">
                {siteConfig.hero.headline.statement}{" "}
                <span className="relative whitespace-nowrap text-foreground">
                  {siteConfig.hero.headline.emphasis}

                  <svg
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-[0.22em] w-full text-primary"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path
                      d="M2 7C29 3 62 2 98 5"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                {siteConfig.hero.headline.continuation}
              </span>
            </h1>

            {/* Description */}
            <p
              className="reveal mt-8 max-w-152.5 text-[16px] leading-7 text-muted-foreground sm:text-[17px] sm:leading-8"
              style={{
                animationDelay: "160ms",
              }}
            >
              {siteConfig.hero.description}
            </p>

            {/* Actions */}
            <div
              className="reveal mt-9 flex flex-wrap items-center gap-3 sm:gap-4"
              style={{
                animationDelay: "240ms",
              }}
            >
              <Link
                href={siteConfig.hero.primaryAction.href}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-accent"
              >
                {siteConfig.hero.primaryAction.label}

                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowIcon />
                </span>
              </Link>

              <Link
                href={siteConfig.hero.secondaryAction.href}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-strong bg-background/30 px-5 text-sm font-semibold text-foreground transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary-soft"
              >
                {siteConfig.hero.secondaryAction.label}
              </Link>

              <Link
                href={siteConfig.resume.href}
                className="group inline-flex min-h-12 items-center gap-2 px-2 text-sm font-medium text-foreground transition-colors duration-300 hover:text-primary"
              >
                Résumé

                <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                  <ArrowDownIcon />
                </span>
              </Link>
            </div>

            {/* Stats */}
            <dl
              className="reveal mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-7 sm:flex sm:flex-wrap sm:gap-x-10"
              style={{
                animationDelay: "320ms",
              }}
            >
              {siteConfig.stats.map((stat) => (
                <div key={stat.label}>
                  <dd className="font-display text-[1.4rem] font-bold tracking-[-0.035em]">
                    {stat.value}

                    {stat.suffix ? (
                      <span className="ml-1 text-[11px] font-medium tracking-normal text-muted-foreground">
                        {stat.suffix}
                      </span>
                    ) : null}
                  </dd>

                  <dt className="mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          {/* =================================================
              Right Visual
              ================================================= */}

          <div
            className="reveal relative mx-auto w-full max-w-107.5 lg:mr-0"
            style={{
              animationDelay: "300ms",
            }}
          >
            {/* Offset soft plate */}
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-4xl bg-primary-soft/70"
            />

            {/* Side technical line */}
            <div
              aria-hidden="true"
              className="absolute -right-7 top-[22%] hidden h-[46%] w-px bg-border-strong sm:block"
            />

            <div
              aria-hidden="true"
              className="absolute -right-7.75 top-[21%] hidden size-2 rounded-full border border-primary bg-background sm:block"
            />

            {/* Main portrait shell */}
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border-strong bg-card shadow-[0_30px_70px_rgb(33_30_26/0.13)]">
              <PortraitPlaceholder />
            </div>

            {/* Floating preview */}
            <ProjectPreview />

            {/* Domain chip */}
            <div className="absolute -right-3 top-7 rounded-full border border-border-strong bg-card/90 px-4 py-2 text-xs font-medium shadow-lg backdrop-blur-md sm:-right-5">
              <span
                aria-hidden="true"
                className="mr-1.5 text-primary"
              >
                ✦
              </span>

              {siteConfig.domain}
            </div>

            {/* Role chip */}
            <div className="absolute bottom-8 -right-2.5 hidden rounded-full border border-border-strong bg-card/90 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground shadow-lg backdrop-blur-md md:block lg:-right-6">
              Full-stack / web
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="shell pointer-events-none absolute inset-x-0 bottom-7 hidden lg:block">
        <div className="flex items-center gap-3">
          <span className="mono text-muted-foreground">
            Scroll to explore
          </span>

          <span
            aria-hidden="true"
            className="h-px w-10 bg-border-strong"
          />
        </div>
      </div>
    </section>
  );
}