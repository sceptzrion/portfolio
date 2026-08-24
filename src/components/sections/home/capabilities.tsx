import { capabilities } from "@/data/capabilities";
import { homeDictionary } from "@/i18n/dictionaries/home";
import { getLocale } from "@/i18n/get-locale";

export default async function Capabilities() {
  const locale =
    await getLocale();

  const copy =
    homeDictionary[locale]
      .capabilities;

  return (
    <section
      id="capabilities"
      className="relative overflow-hidden border-t border-border bg-background"
    >
      <div
        aria-hidden="true"
        className="tech-dots pointer-events-none absolute right-0 top-0 hidden h-[62%] w-[34%] opacity-[0.11] mask-[linear-gradient(to_left,black,transparent)] md:block"
      />

      <div className="shell section-compact relative">
        <div
          data-reveal
          className="reveal-on-scroll grid gap-7 lg:grid-cols-[1fr_0.58fr] lg:items-end lg:gap-16"
        >
          <div>
            <div className="section-label">
              {copy.label}
            </div>

            <h2 className="mt-5 max-w-190 text-balance font-display text-[clamp(2.6rem,5vw,4.6rem)] font-bold leading-[0.99] tracking-tighter">
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

          <p className="max-w-md text-sm leading-6 text-muted-foreground sm:text-[15px] sm:leading-7 lg:justify-self-end">
            {copy.description}
          </p>
        </div>

        <div className="mt-10 border-y border-border lg:mt-12">
          {capabilities.map(
            (
              capability,
              index,
            ) => (
              <article
                key={
                  capability.title
                }
                data-reveal
                className={[
                  "reveal-on-scroll group relative",
                  index === 1
                    ? "reveal-delay-1"
                    : "",
                  index === 2
                    ? "reveal-delay-2"
                    : "",
                  index === 3
                    ? "reveal-delay-3"
                    : "",
                  index <
                  capabilities.length -
                    1
                    ? "border-b border-border"
                    : "",
                ].join(" ")}
              >
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 top-0 w-0.5 origin-bottom scale-y-0 bg-primary transition-transform duration-500 group-hover:scale-y-100"
                />

                <div className="grid grid-cols-[36px_1fr] gap-x-3 gap-y-4 py-6 pl-4 sm:grid-cols-[44px_1fr] sm:gap-x-5 sm:py-7 sm:pl-6 md:grid-cols-[54px_1fr] md:gap-x-7 lg:grid-cols-[60px_0.85fr_1.15fr] lg:items-center lg:gap-10">
                  <span className="font-mono text-[10px] font-medium tracking-[0.12em] text-primary">
                    {
                      capability.index
                    }
                  </span>

                  <div>
                    <h3 className="font-display text-[1.4rem] font-bold leading-tight tracking-[-0.035em] transition-transform duration-300 group-hover:translate-x-1 sm:text-[1.55rem]">
                      {
                        capability.title
                      }
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground lg:hidden">
                      {
                        copy
                          .descriptions[
                          capability
                            .index
                        ]
                      }
                    </p>
                  </div>

                  <div className="col-start-2 lg:col-start-auto">
                    <p className="hidden max-w-xl text-sm leading-6 text-muted-foreground lg:block">
                      {
                        copy
                          .descriptions[
                          capability
                            .index
                        ]
                      }
                    </p>

                    <ul
                      aria-label={`${copy.technologiesLabel} ${capability.title}`}
                      className="mt-4 flex flex-wrap gap-2"
                    >
                      {capability.skills.map(
                        (skill) => (
                          <li
                            key={
                              skill
                            }
                            className="rounded-full border border-border bg-secondary/50 px-2.5 py-1.5 font-mono text-[10px] uppercase leading-none tracking-widest text-muted-foreground"
                          >
                            {
                              skill
                            }
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>

        <div
          data-reveal
          className="reveal-on-scroll mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-muted-foreground">
            {copy.toolkitNote}
          </p>

          <p className="hidden text-xs text-muted-foreground sm:block">
            {copy.closingNote}
          </p>
        </div>
      </div>
    </section>
  );
}