import { profile } from "@/data/profile";
import { aboutDictionary } from "@/i18n/dictionaries/about";
import { getLocale } from "@/i18n/get-locale";

export default async function AboutHero() {
  const locale =
    await getLocale();

  const copy =
    aboutDictionary[locale].hero;

  return (
    <section className="relative overflow-hidden border-b border-border bg-background pt-32 sm:pt-36 lg:pt-40">
      <div
        aria-hidden="true"
        className="warm-veil pointer-events-none absolute inset-0 opacity-45"
      />

      <div
        aria-hidden="true"
        className="tech-dots pointer-events-none absolute right-0 top-0 hidden h-[75%] w-[38%] opacity-[0.12] mask-[linear-gradient(to_left,black,transparent)] md:block"
      />

      <div className="shell relative pb-16 sm:pb-20 lg:pb-24">
        <div
          data-reveal
          className="reveal-on-scroll"
        >
          <div className="section-label">
            {copy.label}
          </div>

          <h1 className="mt-7 max-w-5xl text-balance font-display text-[clamp(3.4rem,8vw,7rem)] font-bold leading-[0.94] tracking-[-0.06em]">
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
          </h1>
        </div>

        <div className="mt-10 grid gap-10 border-t border-border pt-7 sm:mt-12 sm:pt-8 lg:grid-cols-[1fr_0.72fr] lg:items-start lg:gap-20">
          <p
            data-reveal
            className="reveal-on-scroll max-w-2xl text-[17px] leading-8 text-muted-foreground sm:text-lg sm:leading-9"
          >
            {copy.introduction}{" "}
            {copy.perspective}
          </p>

          <dl
            data-reveal
            className="reveal-on-scroll reveal-delay-1 grid gap-5 sm:grid-cols-3 lg:grid-cols-1"
          >
            {profile.quickFacts.map(
              (fact) => (
                <div
                  key={fact.label}
                  className="border-b border-border pb-4"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {
                      copy.quickFacts[
                        fact.label
                      ]
                    }
                  </dt>

                  <dd className="mt-2 font-display text-sm font-semibold tracking-[-0.02em] text-foreground">
                    {fact.value}
                  </dd>
                </div>
              ),
            )}
          </dl>
        </div>
      </div>
    </section>
  );
}