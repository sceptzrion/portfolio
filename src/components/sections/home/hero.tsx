import Image from "next/image";
import Link from "next/link";

import { profileImages } from "@/data/assets";
import { siteConfig } from "@/data/site";
import { homeDictionary } from "@/i18n/dictionaries/home";
import { sharedDictionary } from "@/i18n/dictionaries/shared";
import { getLocale } from "@/i18n/get-locale";

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

function PortraitImage({
  ariaLabel,
}: {
  ariaLabel: string;
}) {
  return (
    <div className="relative aspect-5/6 w-full overflow-hidden bg-[#f4eee6]">
      {/* Warm base */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(145deg,#f7f2eb_0%,#f2e8de_58%,#eee3d7_100%)]"
      />

      {/* Large orange focal shape */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[46%] size-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/82"
      />

      {/* Soft orange halo */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[46%] size-[91%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/25"
      />

      {/* Technical texture */}
      <div
        aria-hidden="true"
        className="tech-grid absolute inset-0 opacity-[0.08]"
      />

      {/* Small glow */}
      <div
        aria-hidden="true"
        className="absolute right-[-18%] top-[-10%] size-[58%] rounded-full bg-primary/20 blur-3xl"
      />

      {/* Portrait */}
      <Image
        src={
          profileImages.secondary
        }
        alt={ariaLabel}
        fill
        priority
        sizes="(max-width: 639px) 320px, (max-width: 1023px) 430px, 430px"
        className="z-20 origin-bottom object-contain object-bottom scale-[1.16] sm:scale-[1.20] lg:scale-[1.22]"
      />

      {/* Bottom readability fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[27%] bg-[linear-gradient(to_top,rgb(24_20_17/0.58),transparent)]"
      />

      {/* Identity */}
      <div className="absolute inset-x-0 bottom-0 z-40 px-5 pb-5 pt-14">
        <p className="font-display text-[17px] font-semibold text-white sm:text-lg">
          {siteConfig.fullName}
        </p>

        <p className="mt-1 text-xs text-white/75">
          {siteConfig.role}
        </p>
      </div>
    </div>
  );
}

function ProjectPreview({
  label,
}: {
  label: string;
}) {
  return (
    <div
      aria-hidden="true"
      className="absolute -bottom-7 -left-5 z-40 hidden w-55 rotate-[-4deg] overflow-hidden rounded-xl border border-border-strong bg-card shadow-[0_20px_55px_rgb(33_30_26/0.22)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:rotate-0 hover:shadow-[0_26px_65px_rgb(33_30_26/0.26)] sm:block lg:-left-10"
    >
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

      <div className="relative aspect-16/10 overflow-hidden bg-feature">
        <div className="tech-grid-feature absolute inset-0 opacity-60" />

        <div className="absolute inset-3 rounded-lg border border-feature-border bg-feature">
          <div className="p-3">
            <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-primary">
              {label}
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

export default async function Hero() {
  const locale =
    await getLocale();

  const copy =
    homeDictionary[locale].hero;

  const shared =
    sharedDictionary[locale];

  return (
    <section
      id="home"
      className="relative min-h-svh overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="warm-veil pointer-events-none absolute inset-0 opacity-60"
      />

      <div
        aria-hidden="true"
        className="tech-grid pointer-events-none absolute inset-0 opacity-25 mask-[radial-gradient(ellipse_at_top_right,black,transparent_68%)]"
      />

      <div
        aria-hidden="true"
        className="absolute right-[7%] top-[18%] hidden grid-cols-4 gap-2 opacity-45 xl:grid"
      >
        {Array.from({
          length: 16,
        }).map((_, index) => (
          <span
            key={index}
            className="size-1 rounded-full bg-primary"
          />
        ))}
      </div>

      <div className="shell relative flex min-h-svh items-center pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40">
        <div className="grid w-full items-center gap-12 sm:gap-16 lg:grid-cols-[1.06fr_0.94fr] lg:gap-12 xl:gap-20">
          <div>
            <div
              className="reveal flex flex-wrap items-center gap-x-4 gap-y-2 text-sm"
              style={{
                animationDelay:
                  "0ms",
              }}
            >
              <span className="inline-flex items-center gap-2 font-medium text-foreground">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />

                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>

                {
                  copy.availability
                }
              </span>

              <span
                aria-hidden="true"
                className="text-muted-foreground"
              >
                ·
              </span>

              <span className="text-muted-foreground">
                {shared.location}
              </span>
            </div>

            <h1
              className="reveal mt-7 max-w-190 text-balance font-display text-[clamp(3.15rem,7vw,5.5rem)] font-extrabold leading-[0.97] tracking-[-0.055em]"
              style={{
                animationDelay:
                  "80ms",
              }}
            >
              {
                copy.headline
                  .introduction
              }

              <span className="mt-3 block font-semibold text-muted-foreground">
                {
                  copy.headline
                    .statement
                }{" "}
                <span className="relative whitespace-nowrap text-foreground">
                  {
                    copy.headline
                      .emphasis
                  }

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
                {
                  copy.headline
                    .continuation
                }
              </span>
            </h1>

            <p
              className="reveal mt-8 max-w-152.5 text-[16px] leading-7 text-muted-foreground sm:text-[17px] sm:leading-8"
              style={{
                animationDelay:
                  "160ms",
              }}
            >
              {copy.description}
            </p>

            <div
              className="reveal mt-9 flex flex-wrap items-center gap-3 sm:gap-4"
              style={{
                animationDelay:
                  "240ms",
              }}
            >
              <Link
                href={
                  siteConfig.hero
                    .primaryAction.href
                }
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_8px_22px_rgb(221_95_34/0.12)] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_12px_28px_rgb(221_95_34/0.20)]"
              >
                {
                  copy.actions
                    .primary
                }

                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowIcon />
                </span>
              </Link>

              <Link
                href={
                  siteConfig.hero
                    .secondaryAction
                    .href
                }
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-strong bg-background/30 px-5 text-sm font-semibold text-foreground transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary-soft"
              >
                {
                  copy.actions
                    .secondary
                }
              </Link>
            </div>

            <dl
              className="reveal mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-7 sm:flex sm:flex-wrap sm:gap-x-10"
              style={{
                animationDelay:
                  "320ms",
              }}
            >
              {siteConfig.stats.map(
                (stat) => (
                  <div
                    key={stat.key}
                    className="flex flex-col"
                  >
                    <dt className="order-2 mt-1 text-xs text-muted-foreground">
                      {
                        copy.stats[
                          stat.key
                        ]
                      }
                    </dt>

                    <dd className="order-1 font-display text-[1.4rem] font-bold tracking-[-0.035em]">
                      {stat.value}

                      {stat.suffix ? (
                        <span className="ml-1 text-[11px] font-medium tracking-normal text-muted-foreground">
                          {
                            stat.suffix
                          }
                        </span>
                      ) : null}
                    </dd>
                  </div>
                ),
              )}
            </dl>
          </div>

          <div
            className="reveal relative mx-auto w-full max-w-[20rem] sm:max-w-107.5 lg:mr-0"
            style={{
              animationDelay:
                "300ms",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-4xl bg-primary-soft/70"
            />

            <div
              aria-hidden="true"
              className="absolute -right-7 top-[22%] hidden h-[46%] w-px bg-border-strong sm:block"
            />

            <div
              aria-hidden="true"
              className="absolute -right-7.75 top-[21%] hidden size-2 rounded-full border border-primary bg-background sm:block"
            />

            <div className="relative z-10 overflow-hidden rounded-[1.75rem] border border-border-strong bg-card shadow-[0_24px_60px_rgb(33_30_26/0.12)]">
              <PortraitImage
                ariaLabel={
                  copy.portraitLabel
                }
              />
            </div>

            <ProjectPreview
              label={
                copy.featuredProject
              }
            />

            <div className="absolute -right-3 top-7 z-50 rounded-full border border-border-strong bg-card/95 px-4 py-2 text-xs font-medium shadow-lg backdrop-blur-md sm:-right-5">
              <span
                aria-hidden="true"
                className="mr-1.5 text-primary"
              >
                ✦
              </span>

              {siteConfig.domain}
            </div>

            <div className="absolute bottom-8 -right-2.5 z-50 hidden rounded-full border border-border-strong bg-card/95 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground shadow-lg backdrop-blur-md md:block lg:-right-6">
              Full-stack / web
            </div>
          </div>
        </div>
      </div>

      <div className="shell pointer-events-none absolute inset-x-0 bottom-7 hidden lg:block">
        <div className="flex items-center gap-3">
          <span className="mono text-muted-foreground">
            {copy.scrollHint}
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