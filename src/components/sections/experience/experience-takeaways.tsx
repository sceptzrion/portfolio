const takeaways = [
  {
    index: "01",
    title: "Implementation",
    description:
      "Turning requirements and approved designs into clear, functional outputs.",
  },
  {
    index: "02",
    title: "Structure",
    description:
      "Keeping interfaces, application data, and analysis organized and understandable.",
  },
  {
    index: "03",
    title: "Collaboration",
    description:
      "Working through feedback, implementation details, and technical decisions as part of a broader process.",
  },
] as const;

export default function ExperienceTakeaways() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-background">
      <div
        aria-hidden="true"
        className="tech-dots pointer-events-none absolute right-0 top-0 hidden h-[70%] w-[30%] opacity-[0.08] mask-[linear-gradient(to_left,black,transparent)] md:block"
      />

      <div className="shell section relative">
        <div
          data-reveal
          className="reveal-on-scroll grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end lg:gap-20"
        >
          <div>
            <div className="section-label">
              What I Took Forward
            </div>

            <h2 className="mt-5 max-w-xl text-balance font-display text-[clamp(2.6rem,5vw,4.6rem)] font-bold leading-[0.99] tracking-tighter">
              Different contexts,{" "}
              <span className="text-primary">
                shared fundamentals.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-[15px] leading-7 text-muted-foreground lg:justify-self-end">
            Working across web
            development and business
            intelligence reinforced a
            practical way of approaching
            technical work: understand
            the problem, keep the
            implementation structured,
            and communicate clearly
            throughout the process.
          </p>
        </div>

        <div
          data-reveal
          className="reveal-on-scroll reveal-delay-1 mt-10 grid border-y border-border md:grid-cols-3 sm:mt-12"
        >
          {takeaways.map(
            (item, index) => (
              <article
                key={item.title}
                className={[
                  "py-6 md:px-7 md:py-8",
                  index > 0
                    ? "border-t border-border md:border-l md:border-t-0"
                    : "",
                  index === 0
                    ? "md:pl-0"
                    : "",
                  index ===
                  takeaways.length - 1
                    ? "md:pr-0"
                    : "",
                ].join(" ")}
              >
                <p className="font-mono text-[8px] tracking-[0.13em] text-primary">
                  {item.index}
                </p>

                <h3 className="mt-4 font-display text-xl font-bold tracking-[-0.035em]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}