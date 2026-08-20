import Link from "next/link";

import { siteConfig } from "@/data/site";

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

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border bg-tertiary"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="warm-veil pointer-events-none absolute inset-0 opacity-80"
      />

      <div
        aria-hidden="true"
        className="tech-grid pointer-events-none absolute inset-0 opacity-[0.12] mask-[radial-gradient(ellipse_at_center,black,transparent_72%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-60 left-1/2 size-140 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
      />

      <div className="shell section relative">
        <div className="mx-auto max-w-225 text-center">
          {/* Section label */}
          <div className="flex justify-center">
            <div className="section-label">
              <span className="section-label-number">
                05
              </span>

              Contact
            </div>
          </div>

          {/* Headline */}
          <h2 className="mx-auto mt-6 max-w-212.5 text-balance font-display text-[clamp(3rem,6vw,5.6rem)] font-extrabold leading-[0.97] tracking-[-0.055em]">
            {siteConfig.contact.headline.introduction}{" "}
            <span className="relative text-primary">
              {siteConfig.contact.headline.emphasis}

              <svg
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[0.18em] w-full text-primary/50"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M2 6C30 3 64 3 98 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-152.5 text-[15px] leading-7 text-muted-foreground sm:text-base sm:leading-8">
            {siteConfig.contact.description}
          </p>

          {/* Main actions */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={siteConfig.contact.primaryAction.href}
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_14px_35px_rgb(221_95_34/0.20)]"
            >
              {siteConfig.contact.primaryAction.label}

              <ArrowIcon />
            </Link>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border-strong bg-background/40 px-6 text-sm font-semibold text-foreground backdrop-blur-sm transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary-soft"
            >
              {siteConfig.contact.email}

              <ExternalArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}