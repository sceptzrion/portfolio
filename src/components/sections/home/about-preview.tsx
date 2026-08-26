import Image from "next/image";
import Link from "next/link";

import { profileImages } from "@/data/assets";
import { profile } from "@/data/profile";
import { siteConfig } from "@/data/site";
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

function PortraitVisual({
  educationLabel,
  degree,
}: {
  educationLabel: string;
  degree: string;
}) {
  return (
    <div className="relative">
      {/* Offset background plate */}
      <div
        aria-hidden="true"
        className="absolute -bottom-4 -right-4 h-[94%] w-[94%] rounded-4xl bg-primary-soft sm:-bottom-5 sm:-right-5"
      />

      {/* Decorative technical label */}
      <div
        aria-hidden="true"
        className="absolute -left-4 top-8 z-10 hidden -rotate-90 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground lg:block"
      >
        Profile / 2026
      </div>

      {/* Portrait */}
      <div className="group relative aspect-4/5 overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-[0_22px_55px_rgb(33_30_26/0.08)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_65%_20%,color-mix(in_srgb,var(--primary)_20%,transparent),transparent_32%),linear-gradient(145deg,var(--secondary),var(--tertiary))]"
        />

        <div
          aria-hidden="true"
          className="tech-grid absolute inset-0 opacity-25 transition-transform duration-700 group-hover:scale-105"
        />

        <div
          aria-hidden="true"
          className="absolute right-[-18%] top-[14%] size-[70%] rounded-full border border-primary/20"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-[-12%] left-[-15%] size-[65%] rounded-full bg-primary/10 blur-3xl"
        />

        <div className="absolute inset-3 z-10 overflow-hidden rounded-[1.35rem] bg-secondary sm:inset-4">
          {/* Theme-aware warm mat */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(145deg,var(--secondary),var(--tertiary))]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-3 rounded-2xl border border-border"
          />

          {/* Square source photo inside its own rounded frame */}
          <div className="absolute inset-x-0 top-1/2 z-10 aspect-square -translate-y-1/2 overflow-hidden rounded-[1.1rem]">
            <Image
              src={profileImages.about}
              alt={siteConfig.fullName}
              fill
              sizes="(max-width: 639px) 280px, 400px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-3 bottom-3 z-20 h-[16%] rounded-b-[1.35rem] bg-[linear-gradient(to_top,color-mix(in_srgb,var(--foreground)_10%,transparent),transparent)] sm:inset-x-4 sm:bottom-4"
        />
      </div>

      {/* Education floating card */}
      <div className="absolute -bottom-7 left-4 z-30 max-w-57.5 rounded-2xl border border-border-strong bg-card p-4 shadow-[0_18px_42px_rgb(0_0_0/0.16)] sm:left-7">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
          {educationLabel}
        </p>

        <p className="mt-2 font-display text-sm font-semibold leading-snug">
          {degree}
        </p>

        <p className="mt-1 text-[11px] leading-4 text-muted-foreground">
          {profile.education.university}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <span className="rounded-full bg-primary-soft px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
            {profile.education.honour}
          </span>

          <span className="font-mono text-[10px] text-muted-foreground">
            {
              profile.education
                .graduationYear
            }
          </span>
        </div>
      </div>
    </div>
  );
}

export default async function AboutPreview() {
  const locale =
    await getLocale();

  const copy =
    homeDictionary[locale]
      .aboutPreview;

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border bg-background"
    >
      <div
        aria-hidden="true"
        className="warm-veil pointer-events-none absolute inset-0 opacity-25"
      />

      <div
        aria-hidden="true"
        className="tech-dots pointer-events-none absolute right-0 top-0 hidden h-[55%] w-[38%] opacity-[0.14] mask-[linear-gradient(to_left,black,transparent)] sm:block"
      />

      <div className="shell section relative">
        <div className="grid items-center gap-12 sm:gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 xl:gap-20">
          <div
            data-reveal
            className="reveal-on-scroll reveal-from-left mx-auto w-full max-w-76 pb-8 sm:max-w-107.5 lg:mx-0"
          >
            <PortraitVisual
              educationLabel={
                copy.education.label
              }
              degree={
                copy.education.degree
              }
            />
          </div>

          <div
            data-reveal
            className="reveal-on-scroll reveal-from-right reveal-delay-1"
          >
            <div className="section-label">
              {copy.label}
            </div>

            <h2 className="mt-5 max-w-195 text-balance font-display text-[clamp(2.6rem,5vw,4.6rem)] font-bold leading-[0.99] tracking-tighter">
              {
                copy.headline
                  .introduction
              }{" "}
              <span className="text-primary">
                {
                  copy.headline
                    .emphasis
                }
              </span>{" "}
              {
                copy.headline
                  .continuation
              }
            </h2>

            <div className="mt-8 grid gap-5 text-[15px] leading-7 text-muted-foreground sm:text-base sm:leading-8">
              <p>
                {copy.introduction}
              </p>

              <p>
                {copy.perspective}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href="/about"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-[transform,opacity] duration-300 hover:-translate-y-0.5 hover:opacity-90"
              >
                {copy.action}
                <ArrowIcon />
              </Link>

              <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-muted-foreground">
                {siteConfig.domain} / profile
              </p>
            </div>
          </div>
        </div>

        {/* Approach */}
        <div
          data-reveal
          className="reveal-on-scroll mt-12 grid gap-6 border-t border-border pt-6 sm:mt-16 lg:grid-cols-[0.3fr_1fr] lg:items-start"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
              {copy.approach.label}
            </p>
          </div>

          <p className="max-w-4xl text-balance font-display text-[clamp(1.5rem,3vw,2.4rem)] font-semibold leading-[1.15] tracking-[-0.035em] text-foreground">
            {
              copy.approach
                .description
            }
          </p>
        </div>
      </div>
    </section>
  );
}