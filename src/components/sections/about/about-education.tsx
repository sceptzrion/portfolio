import { profile } from "@/data/profile";

export default function AboutEducation() {
  const [gpa, scale] =
    profile.education.gpa.split(" / ");

  return (
    <section
      id="education"
      className="relative overflow-hidden border-y border-border bg-secondary/45"
    >
      <div
        aria-hidden="true"
        className="tech-grid pointer-events-none absolute inset-0 opacity-[0.08]"
      />

      <div className="shell section relative">
        <div
          data-reveal
          className="reveal-on-scroll section-label"
        >
          Education
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:items-end lg:gap-20">
          <div
            data-reveal
            className="reveal-on-scroll"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              Academic result
            </p>

            <div className="mt-3 flex items-end gap-3">
              <span className="font-display text-[clamp(5rem,12vw,9rem)] font-bold leading-[0.78] tracking-[-0.075em] text-primary">
                {gpa}
              </span>

              <span className="pb-1 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground sm:pb-2">
                / {scale}
              </span>
            </div>

            <p className="mt-6 inline-flex rounded-full border border-primary/25 bg-primary-soft px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
              {profile.education.honour}
            </p>
          </div>

          <div
            data-reveal
            className="reveal-on-scroll reveal-delay-1 border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
              {profile.education.period}
            </p>

            <h2 className="mt-4 max-w-xl font-display text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.02] tracking-[-0.045em]">
              {profile.education.degree}
            </h2>

            <p className="mt-4 max-w-xl text-lg font-medium leading-7 text-foreground">
              {profile.education.university}
            </p>

            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.13em] text-muted-foreground">
              {profile.education.location}
            </p>

            <p className="mt-7 max-w-xl text-[15px] leading-7 text-muted-foreground">
              {profile.education.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}