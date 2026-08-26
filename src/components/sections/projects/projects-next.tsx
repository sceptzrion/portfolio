import Link from "next/link";

import { projectsDictionary } from "@/i18n/dictionaries/projects";
import { getLocale } from "@/i18n/get-locale";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

export default async function ProjectsNext() {
  const locale =
    await getLocale();

  const copy =
    projectsDictionary[locale].next;

  return (
    <section className="relative overflow-hidden border-t border-border bg-tertiary">
      <div
        aria-hidden="true"
        className="warm-veil pointer-events-none absolute inset-0 opacity-55"
      />

      <div
        aria-hidden="true"
        className="tech-dots pointer-events-none absolute right-0 top-0 hidden h-full w-[32%] opacity-[0.07] mask-[linear-gradient(to_left,black,transparent)] md:block"
      />

      <div className="shell section relative">
        <div
          data-reveal
          className="reveal-on-scroll grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16"
        >
          <div>
            <div className="section-label">
              {copy.label}
            </div>

            <h2 className="mt-5 max-w-3xl text-balance font-display text-[clamp(2.6rem,5vw,4.6rem)] font-bold leading-[0.99] tracking-tighter">
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

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-muted-foreground">
              {copy.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-[transform,opacity] duration-300 hover:-translate-y-0.5 hover:opacity-90"
            >
              {
                copy.actions
                  .contact
              }

              <ArrowIcon />
            </Link>

            <Link
              href="/experience"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border-strong bg-background/40 px-5 text-sm font-semibold text-foreground transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary-soft"
            >
              {
                copy.actions
                  .experience
              }

              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}