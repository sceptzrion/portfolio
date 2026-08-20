import { capabilities } from "@/data/capabilities";

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative overflow-hidden border-t border-border bg-background"
    >
      {/* Subtle background treatment */}
      <div
        aria-hidden="true"
        className="tech-dots pointer-events-none absolute right-0 top-0 h-[62%] w-[34%] opacity-[0.18] mask-[linear-gradient(to_left,black,transparent)]"
      />

      <div className="shell section-compact relative">
        {/* Header */}
        <div
          data-reveal
          className="reveal-on-scroll grid gap-7 lg:grid-cols-[1fr_0.58fr] lg:items-end lg:gap-16"
        >
          <div>
            <div className="section-label">
              <span className="section-label-number">
                04
              </span>

              Capabilities
            </div>

            <h2 className="mt-5 max-w-190 text-balance font-display text-[clamp(2.6rem,5vw,4.5rem)] font-bold leading-none tracking-tighter">
              From interface to{" "}
              <span className="text-primary">
                data layer.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-muted-foreground sm:text-[15px] sm:leading-7 lg:justify-self-end">
            A selected overview of the areas and technologies
            I work with across modern web development,
            application development, and data.
          </p>
        </div>

        {/* Capability Rows */}
        <div className="mt-10 border-y border-border lg:mt-12">
          {capabilities.map(
            (capability, index) => (
              <article
                key={capability.title}
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
                  capabilities.length - 1
                    ? "border-b border-border"
                    : "",
                ].join(" ")}
              >
                {/* Hover accent */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 top-0 w-0.5 origin-bottom scale-y-0 bg-primary transition-transform duration-500 group-hover:scale-y-100"
                />

                <div className="grid gap-4 py-6 pl-5 sm:py-7 sm:pl-6 md:grid-cols-[54px_1fr] md:gap-7 lg:grid-cols-[60px_0.85fr_1.15fr] lg:items-center lg:gap-10">
                  {/* Index */}
                  <span className="font-mono text-[10px] font-medium tracking-[0.12em] text-primary">
                    {capability.index}
                  </span>

                  {/* Capability identity */}
                  <div>
                    <h3 className="font-display text-[1.4rem] font-bold leading-tight tracking-[-0.035em] transition-transform duration-300 group-hover:translate-x-1 sm:text-[1.55rem]">
                      {capability.title}
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground lg:hidden">
                      {capability.description}
                    </p>
                  </div>

                  {/* Description + toolkit */}
                  <div className="md:col-start-2 lg:col-start-auto">
                    <p className="hidden max-w-xl text-sm leading-6 text-muted-foreground lg:block">
                      {capability.description}
                    </p>

                    <ul
                      aria-label={`${capability.title} technologies`}
                      className="mt-4 flex flex-wrap gap-2"
                    >
                      {capability.skills.map(
                        (skill) => (
                          <li
                            key={skill}
                            className="rounded-full border border-border-strong bg-secondary/55 px-2.5 py-1.5 font-mono text-[9px] uppercase leading-none tracking-widest text-muted-foreground"
                          >
                            {skill}
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

        {/* Footer note */}
        <div
          data-reveal
          className="reveal-on-scroll mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-muted-foreground">
            Selected toolkit / not exhaustive
          </p>

          <p className="text-xs text-muted-foreground">
            Technologies evolve. Fundamentals stay useful.
          </p>
        </div>
      </div>
    </section>
  );
}