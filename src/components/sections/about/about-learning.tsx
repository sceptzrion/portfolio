import { profile } from "@/data/profile";

export default function AboutLearning() {
  return (
    <section
      id="learning"
      className="relative bg-background"
    >
      <div className="shell section">
        <div
          data-reveal
          className="reveal-on-scroll grid gap-6 lg:grid-cols-[0.65fr_1fr] lg:gap-20"
        >
          <div>
            <div className="section-label">
              Learning &amp; Training
            </div>

            <h2 className="mt-5 max-w-md text-balance font-display text-[clamp(2.5rem,4.5vw,4rem)] font-bold leading-none tracking-tighter">
              Learning beyond the{" "}
              <span className="text-primary">
                classroom.
              </span>
            </h2>
          </div>

          <p className="max-w-lg self-end text-[15px] leading-7 text-muted-foreground lg:justify-self-end">
            Structured learning experiences that
            complemented my academic background with
            practical development work and collaborative
            projects.
          </p>
        </div>

        <div className="mt-10 border-y border-border sm:mt-12">
          {profile.learning.map(
            (item, index) => (
              <article
                key={item.title}
                data-reveal
                className={[
                  "reveal-on-scroll grid gap-5 py-7 sm:py-8 lg:grid-cols-[0.22fr_0.78fr_1fr] lg:gap-10",
                  index <
                  profile.learning.length - 1
                    ? "border-b border-border"
                    : "",
                ].join(" ")}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                  {item.period}
                </p>

                <div>
                  <h3 className="max-w-md font-display text-xl font-bold leading-tight tracking-[-0.035em] sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium text-foreground">
                    {item.provider}
                  </p>

                  <p className="mt-2 font-mono text-[10px] uppercase leading-5 tracking-[0.12em] text-muted-foreground">
                    {item.type}
                  </p>
                </div>

                <p className="max-w-xl text-sm leading-7 text-muted-foreground">
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