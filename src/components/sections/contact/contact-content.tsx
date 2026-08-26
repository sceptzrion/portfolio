import Link from "next/link";

import { siteConfig } from "@/data/site";
import { contactDictionary } from "@/i18n/dictionaries/contact";
import { sharedDictionary } from "@/i18n/dictionaries/shared";
import { getLocale } from "@/i18n/get-locale";
import CopyEmailCard from "@/components/sections/contact/copy-email-card";

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

function ExternalIcon() {
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

type ContactCardProps = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

function ContactCard({
  label,
  value,
  href,
  external = false,
}: ContactCardProps) {
  const content = (
    <>
      <div className="min-w-0">
        <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted-foreground">
          {label}
        </p>

        <p className="mt-2 truncate text-sm font-medium text-foreground sm:text-[15px]">
          {value}
        </p>
      </div>

      {href && (
        <span className="shrink-0 text-primary">
          {external ? (
            <ExternalIcon />
          ) : (
            <ArrowIcon />
          )}
        </span>
      )}
    </>
  );

  const className =
    "group flex min-h-22 items-center justify-between gap-6 rounded-2xl border border-border bg-card px-5 py-4 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary-soft/35";

  if (!href) {
    return (
      <div className={className}>
        {content}
      </div>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
    >
      {content}
    </Link>
  );
}

export default async function ContactContent() {
  const locale =
    await getLocale();

  const copy =
    contactDictionary[locale];

  const shared =
    sharedDictionary[locale];

  const linkedIn =
    siteConfig.socials.find(
      (social) =>
        social.label ===
        "LinkedIn",
    );

  return (
    <>
      <section className="relative overflow-hidden bg-background pt-32 sm:pt-36 lg:pt-40">
        <div
          aria-hidden="true"
          className="warm-veil pointer-events-none absolute inset-0 opacity-50"
        />

        <div
          aria-hidden="true"
          className="tech-dots pointer-events-none absolute right-0 top-0 hidden h-full w-[34%] opacity-[0.07] mask-[linear-gradient(to_left,black,transparent)] md:block"
        />

        <div className="shell relative pb-12 sm:pb-14 lg:pb-16">
          <div
            data-reveal
            className="reveal-on-scroll"
          >
            <div className="section-label">
              {copy.label}
            </div>

            <h1 className="mt-6 max-w-4xl text-balance font-display text-[clamp(3rem,6vw,5.7rem)] font-bold leading-[0.95] tracking-[-0.06em]">
              {
                copy.hero
                  .headline
                  .introduction
              }{" "}
              <span className="relative inline-block text-primary">
                {
                  copy.hero
                    .headline
                    .emphasis
                }

                <svg
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-[0.15em] w-full text-primary/45"
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
            </h1>

            <p className="mt-7 max-w-2xl text-[16px] leading-8 text-muted-foreground sm:text-[17px]">
              {
                copy.hero
                  .description
              }
            </p>
          </div>
        </div>
      </section>

      <section className="relative border-y border-border bg-tertiary">
        <div
          aria-hidden="true"
          className="warm-veil pointer-events-none absolute inset-0 opacity-35"
        />

        <div className="shell relative py-12 sm:py-14 lg:py-16">
          <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:gap-6">
            <div
              data-reveal
              className="reveal-on-scroll grid gap-3"
            >
              <CopyEmailCard
                email={siteConfig.contact.email}
                label={copy.cards.email}
                copyLabel={
                    copy.cards.emailCopy
                }
                copiedLabel={
                    copy.cards.emailCopied
                }
              />

              {linkedIn && (
                <ContactCard
                  label={
                    copy.cards
                      .linkedin
                  }
                  value="linkedin.com/in/ikhsanry"
                  href={
                    linkedIn.href
                  }
                  external
                />
              )}

              <ContactCard
                label={
                  copy.cards.resume
                }
                value={
                  copy.cards
                    .resumeValue
                }
                href={
                  siteConfig.resume
                    .href
                }
              />

              <ContactCard
                label={
                  copy.cards
                    .location
                }
                value={
                  shared.location
                }
              />
            </div>

            <article
              data-reveal
              className="reveal-on-scroll reveal-delay-1 relative flex min-h-105 overflow-hidden rounded-[1.75rem] border border-border bg-card p-6 sm:p-8 lg:p-9"
            >
              <div
                aria-hidden="true"
                className="tech-grid pointer-events-none absolute inset-0 opacity-[0.045]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 -right-24 size-72 rounded-full bg-primary/12 blur-3xl"
              />

              <div className="relative flex w-full flex-col">
                <div className="flex items-center justify-between gap-6">
                  <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-primary">
                    {
                      copy.panel
                        .label
                    }
                  </p>

                  <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.12em] text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-primary" />

                    Available
                  </span>
                </div>

                <div className="my-auto py-10">
                  <h2 className="max-w-xl text-balance font-display text-[clamp(2.3rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.055em]">
                    {
                      copy.panel
                        .title
                    }
                  </h2>

                  <p className="mt-5 max-w-lg text-[15px] leading-7 text-muted-foreground">
                    {
                      copy.panel
                        .description
                    }
                  </p>
                </div>

                <div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-accent"
                    >
                      {
                        copy.panel
                          .emailAction
                      }

                      <ArrowIcon />
                    </a>

                    <Link
                      href={
                        siteConfig.resume
                          .href
                      }
                      className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border-strong bg-background/50 px-6 text-sm font-semibold transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary-soft"
                    >
                      {
                        copy.panel
                          .resumeAction
                      }

                      <ArrowIcon />
                    </Link>
                  </div>

                  <p className="mt-5 font-mono text-[8px] leading-5 uppercase tracking-[0.11em] text-muted-foreground">
                    {
                      copy.panel
                        .note
                    }
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}