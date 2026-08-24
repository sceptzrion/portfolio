import { profile } from "@/data/profile";
import { aboutDictionary } from "@/i18n/dictionaries/about";
import { getLocale } from "@/i18n/get-locale";

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

export default async function AboutAchievement() {
  const locale =
    await getLocale();

  const copy =
    aboutDictionary[locale]
      .achievement;

  const achievement =
    profile.achievements[0];

  return (
    <section
      id="achievement"
      data-navbar-surface="dark"
      className="relative overflow-hidden bg-feature text-feature-foreground"
    >
      <div
        aria-hidden="true"
        className="tech-grid-feature pointer-events-none absolute inset-0 opacity-25"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-130 rounded-full bg-primary/12 blur-3xl"
      />

      <div className="shell section relative">
        <div
          data-reveal
          className="reveal-on-scroll section-label section-label-inverse"
        >
          {copy.label}
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-end lg:gap-20">
          <div
            data-reveal
            className="reveal-on-scroll"
          >
            <p className="font-display text-[clamp(4.8rem,11vw,8rem)] font-extrabold leading-[0.8] tracking-[-0.07em] text-primary">
              2nd
            </p>

            <p className="mt-6 font-display text-2xl font-bold tracking-[-0.035em] sm:text-3xl">
              Place
            </p>
          </div>

          <div
            data-reveal
            className="reveal-on-scroll reveal-delay-1 border-t border-feature-border pt-7"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
              {achievement.period}
            </p>

            <h2 className="mt-4 max-w-2xl text-balance font-display text-[clamp(2rem,4.5vw,3.8rem)] font-bold leading-[1.02] tracking-[-0.045em]">
              {achievement.title}
            </h2>

            <p className="mt-4 font-display text-lg font-semibold text-feature-muted">
              {achievement.event}
            </p>

            <p className="mt-2 text-sm leading-6 text-feature-muted">
              {
                achievement.organizer
              }
            </p>

            <p className="mt-7 max-w-xl text-[15px] leading-7 text-feature-muted">
              {copy.description}
            </p>

            {achievement.certificates
              .length > 0 && (
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                {achievement.certificates.map(
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
                      className="group inline-flex items-center gap-1.5 text-sm font-semibold text-feature-foreground transition-colors duration-300 hover:text-primary"
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
        </div>
      </div>
    </section>
  );
}