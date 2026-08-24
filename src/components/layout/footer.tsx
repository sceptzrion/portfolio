import Link from "next/link";

import { siteConfig } from "@/data/site";
import { sharedDictionary } from "@/i18n/dictionaries/shared";
import { getLocale } from "@/i18n/get-locale";

function ExternalArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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

export default async function Footer() {
  const currentYear =
    new Date().getFullYear();

  const locale =
    await getLocale();

  const copy =
    sharedDictionary[locale];

  return (
    <footer className="border-t border-border bg-background">
      <div className="shell py-10 md:py-12">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-[1.35fr_0.8fr_0.8fr] md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              aria-label={`${siteConfig.shortName} — ${copy.navigation.home}`}
              className="group inline-flex items-center gap-2.5"
            >
              <span className="grid size-8 place-items-center rounded-[8px] bg-primary font-brand text-[13px] font-bold tracking-tighter text-primary-foreground transition-transform duration-300 group-hover:-rotate-6">
                {siteConfig.monogram}
              </span>

              <span className="font-display text-xl font-semibold tracking-[-0.04em]">
                {siteConfig.shortName}
                <span className="text-primary">
                  .
                </span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              {
                copy.footer
                  .description
              }
            </p>

            <p className="mt-5 font-mono text-[10px] lowercase tracking-[0.14em] text-primary">
              {siteConfig.domain}
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              {
                copy.footer
                  .navigation
              }
            </p>

            <nav
              aria-label={
                copy.footer
                  .navigationLabel
              }
              className="mt-4"
            >
              <ul className="space-y-2.5">
                {siteConfig.navigation.map(
                  (item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-foreground transition-colors duration-300 hover:text-primary"
                      >
                        {
                          copy
                            .navigation[
                            item.key
                          ]
                        }
                      </Link>
                    </li>
                  ),
                )}

                <li>
                  <Link
                    href={
                      siteConfig
                        .resume.href
                    }
                    className="text-sm text-foreground transition-colors duration-300 hover:text-primary"
                  >
                    {copy.resume.label}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              {
                copy.footer
                  .elsewhere
              }
            </p>

            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="group inline-flex items-center gap-1.5 text-sm text-foreground transition-colors duration-300 hover:text-primary"
                >
                  Email
                  <ExternalArrowIcon />
                </a>
              </li>

              {siteConfig.socials.map(
                (social) => (
                  <li
                    key={
                      social.label
                    }
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm text-foreground transition-colors duration-300 hover:text-primary"
                    >
                      {
                        social.label
                      }
                      <ExternalArrowIcon />
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="shell flex flex-col gap-2 py-4 font-mono text-[10px] uppercase tracking-[0.11em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear}{" "}
            {siteConfig.fullName}
          </p>

          <p>
            {
              copy.footer
                .bottomNote
            }
          </p>
        </div>
      </div>
    </footer>
  );
}