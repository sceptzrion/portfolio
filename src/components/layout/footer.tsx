import Link from "next/link";

import { siteConfig } from "@/data/site";

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

export default function Footer() {
  const currentYear =
    new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="shell py-10 md:py-12">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-[1.35fr_0.8fr_0.8fr] md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              aria-label={`${siteConfig.shortName} — Home`}
              className="group inline-flex items-center gap-2.5"
            >
              <span className="grid size-8 place-items-center rounded-lg bg-primary font-display text-xs font-bold text-primary-foreground transition-transform duration-300 group-hover:-rotate-6">
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
              {siteConfig.role} based in{" "}
              {siteConfig.location}, building useful web
              experiences from interface to implementation.
            </p>

            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
              {siteConfig.domain}
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              Sitemap
            </p>

            <nav
              aria-label="Footer navigation"
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
                        {item.label}
                      </Link>
                    </li>
                  ),
                )}

                <li>
                  <Link
                    href={siteConfig.resume.href}
                    className="text-sm text-foreground transition-colors duration-300 hover:text-primary"
                  >
                    {siteConfig.resume.label}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Elsewhere */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              Elsewhere
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
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm text-foreground transition-colors duration-300 hover:text-primary"
                    >
                      {social.label}
                      <ExternalArrowIcon />
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="shell flex flex-col gap-2 py-4 font-mono text-[10px] uppercase tracking-[0.11em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.fullName}
          </p>

          <p>
            Designed &amp; built with care · Karawang, ID
          </p>
        </div>
      </div>
    </footer>
  );
}