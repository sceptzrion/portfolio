import Image from "next/image";

import { profileImages } from "@/data/assets";
import { siteConfig } from "@/data/site";
import { aboutDictionary } from "@/i18n/dictionaries/about";
import { getLocale } from "@/i18n/get-locale";

export default async function AboutStory() {
  const locale =
    await getLocale();

  const copy =
    aboutDictionary[locale].story;

  return (
    <section
      id="story"
      className="relative overflow-hidden bg-background"
    >
      <div className="shell section relative">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.72fr] lg:items-center lg:gap-20">
          <div
            data-reveal
            className="reveal-on-scroll"
          >
            <div className="section-label">
              {copy.label}
            </div>

            <h2 className="mt-5 max-w-3xl text-balance font-display text-[clamp(2.6rem,5vw,4.6rem)] font-bold leading-[0.99] tracking-tighter">
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

            <div className="mt-8 max-w-2xl space-y-5 text-[15px] leading-7 text-muted-foreground sm:text-base sm:leading-8">
              {copy.paragraphs.map(
                (paragraph) => (
                  <p key={paragraph}>
                    {paragraph}
                  </p>
                ),
              )}
            </div>
          </div>

          <div
            data-reveal
            className="reveal-on-scroll reveal-from-right reveal-delay-1 mx-auto w-full max-w-95 lg:mx-0 lg:justify-self-end"
          >
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 h-[94%] w-[94%] rounded-4xl bg-primary-soft"
              />

              <div className="relative aspect-4/5 overflow-hidden rounded-4xl border border-border bg-card shadow-[0_24px_60px_rgb(33_30_26/0.08)]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,color-mix(in_srgb,var(--primary)_20%,transparent),transparent_35%),linear-gradient(145deg,var(--secondary),var(--tertiary))]"
                />

                <div
                  aria-hidden="true"
                  className="tech-grid absolute inset-0 opacity-25"
                />

                <div className="absolute inset-3 z-10 overflow-hidden rounded-[1.45rem] bg-secondary sm:inset-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(145deg,var(--secondary),var(--tertiary))]"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-3 rounded-[1.05rem] border border-border"
                  />

                  <div className="absolute inset-x-0 top-1/2 z-10 aspect-square -translate-y-1/2 overflow-hidden rounded-[1.15rem]">
                    <Image
                      src={profileImages.about}
                      alt={siteConfig.fullName}
                      fill
                      sizes="(max-width: 1023px) 350px, 350px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-3 bottom-3 z-20 h-[16%] rounded-b-[1.45rem] bg-[linear-gradient(to_top,color-mix(in_srgb,var(--foreground)_8%,transparent),transparent)] sm:inset-x-4 sm:bottom-4"
                />
              </div>

              <p className="absolute -right-2 top-8 hidden rotate-90 font-mono text-[9px] uppercase tracking-[0.17em] text-muted-foreground xl:block">
                Profile / Rizqi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}