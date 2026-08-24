import { profile } from "@/data/profile";
import { aboutDictionary } from "@/i18n/dictionaries/about";
import { getLocale } from "@/i18n/get-locale";

export default async function AboutFocus() {
  const locale =
    await getLocale();

  const copy =
    aboutDictionary[locale].focus;

  return (
    <section
      id="focus"
      className="relative overflow-hidden bg-background"
    >
      <div
        aria-hidden="true"
        className="tech-dots pointer-events-none absolute right-0 top-0 hidden h-[60%] w-[32%] opacity-[0.1] mask-[linear-gradient(to_left,black,transparent)] md:block"
      />

      <div className="shell section relative">
        <div
          data-reveal
          className="reveal-on-scroll grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end lg:gap-20"
        >
          <div>
            <div className="section-label">
              {copy.label}
            </div>

            <h2 className="mt-5 max-w-xl text-balance font-display text-[clamp(2.6rem,5vw,4.6rem)] font-bold leading-[0.99] tracking-tighter">
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

          <p className="max-w-md text-[15px] leading-7 text-muted-foreground lg:justify-self-end">
            {copy.description}
          </p>
        </div>

        <div className="mt-10 border-y border-border sm:mt-12">
          {profile.focusAreas.map(
            (area) => (
              <article
                key={area.title}
                data-reveal
                className="reveal-on-scroll group grid gap-4 border-b border-border py-7 last:border-b-0 sm:py-8 lg:grid-cols-[0.75fr_1fr] lg:items-center lg:gap-16"
              >
                <h3 className="font-display text-[clamp(1.6rem,3vw,2.5rem)] font-bold tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-1">
                  {area.title}
                </h3>

                <p className="max-w-xl text-sm leading-7 text-muted-foreground">
                  {
                    copy.descriptions[
                      area.title
                    ]
                  }
                </p>
              </article>
            ),
          )}
        </div>

        <p
          data-reveal
          className="reveal-on-scroll mt-7 max-w-xl text-sm text-muted-foreground"
        >
          {copy.closingNote}
        </p>
      </div>
    </section>
  );
}