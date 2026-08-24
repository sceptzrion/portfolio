import { profile } from "@/data/profile";

function ExternalArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

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

                <div>
                  <p className="max-w-xl text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>

                  {item.stages.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.stages.map(
                        (stage) => (
                          <li
                            key={stage}
                            className="rounded-full border border-border bg-secondary/50 px-2.5 py-1.5 font-mono text-[10px] uppercase leading-none tracking-widest text-muted-foreground"
                          >
                            {stage}
                          </li>
                        ),
                      )}
                    </ul>
                  )}

                  {item.certificates.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                      {item.certificates.map(
                        (certificate) => (
                          <a
                            key={
                              certificate.href
                            }
                            href={
                              certificate.href
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors duration-300 hover:text-primary"
                          >
                            {
                              certificate.label
                            }

                            <ExternalArrowIcon />
                          </a>
                        ),
                      )}
                    </div>
                  )}
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}