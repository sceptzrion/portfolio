import { experienceDictionary } from "@/i18n/dictionaries/experience";
import { getLocale } from "@/i18n/get-locale";

export default async function ExperienceHero() {
  const locale =
    await getLocale();

  const copy =
    experienceDictionary[locale].hero;

  return (
    <section className="relative overflow-hidden border-b border-border bg-background pt-32 sm:pt-36 lg:pt-40">
      <div
        aria-hidden="true"
        className="warm-veil pointer-events-none absolute inset-0 opacity-45"
      />

      <div
        aria-hidden="true"
        className="tech-dots pointer-events-none absolute right-0 top-0 hidden h-[80%] w-[38%] opacity-[0.1] mask-[linear-gradient(to_left,black,transparent)] md:block"
      />

      <div className="shell relative pb-14 sm:pb-16 lg:pb-20">
        <div
          data-reveal
          className="reveal-on-scroll"
        >
          <div className="section-label">
            {copy.label}
          </div>

          <h1 className="mt-7 max-w-4xl text-balance font-display text-[clamp(3.2rem,7vw,6.3rem)] font-bold leading-[0.95] tracking-[-0.06em]">
            {copy.headline.introduction}{" "}
            <span className="text-primary">
              {copy.headline.emphasis}
            </span>{" "}
            {copy.headline.continuation}
          </h1>

          <p className="mt-8 max-w-2xl text-[17px] leading-8 text-muted-foreground sm:text-lg sm:leading-9">
            {copy.description}
          </p>
        </div>

        <div
          data-reveal
          className="reveal-on-scroll reveal-delay-1 mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-5"
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
            2025 — 2026
          </p>

          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
            {copy.stats.internships}
          </p>

          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
            {copy.stats.areas}
          </p>
        </div>
      </div>
    </section>
  );
}