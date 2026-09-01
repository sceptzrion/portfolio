import type { Metadata } from "next";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { siteConfig } from "@/data/site";
import { metadataDictionary } from "@/i18n/dictionaries/metadata";
import { resumeDictionary } from "@/i18n/dictionaries/resume";
import { getLocale } from "@/i18n/get-locale";

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-4"
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

export async function generateMetadata(): Promise<Metadata> {
  const locale =
    await getLocale();

  const siteCopy =
    metadataDictionary[locale].site;

  const copy =
    metadataDictionary[locale]
      .resume;

  return {
    title: {
      absolute: copy.title,
    },

    description:
      copy.description,

    openGraph: {
      type: "website",
      locale:
        siteCopy.openGraphLocale,
      url:
        siteConfig.url +
        "/resume",
      siteName:
        siteConfig.siteName,
      title:
        copy.title,
      description:
        copy.description,
    },

    twitter: {
      card: "summary",
      title:
        copy.title,
      description:
        copy.description,
    },
  };
}

export default async function ResumePage() {
  const locale =
    await getLocale();

  const copy =
    resumeDictionary[locale];

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-background pt-28 sm:pt-32">
        <div
          aria-hidden="true"
          className="warm-veil pointer-events-none absolute inset-x-0 top-0 h-100 opacity-45"
        />

        <section className="shell relative pb-10 sm:pb-12">
          <div className="max-w-2xl">
            <div className="section-label">
              {copy.label}
            </div>

            <h1 className="mt-5 font-display text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[0.96] tracking-[-0.055em]">
              {copy.title}
            </h1>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted-foreground sm:text-base">
              {
                copy.description
              }
            </p>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/35">
          <div className="shell py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-xl">
              <div className="mb-5 flex items-end justify-between gap-5">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-primary">
                    {
                      copy.preview
                        .label
                    }
                  </p>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {
                      copy.preview
                        .hint
                    }
                  </p>
                </div>

                <p className="shrink-0 font-mono text-[8px] uppercase tracking-[0.12em] text-muted-foreground">
                  {
                    copy.preview
                      .source
                  }
                </p>
              </div>

              {siteConfig.resume
                .available ? (
                <a
                  href={
                    siteConfig.resume
                      .externalHref
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    copy.preview
                      .open
                  }
                  className="group block rounded-[1.75rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                >
                  <div className="relative mx-auto aspect-4/5 w-full max-w-88 overflow-hidden rounded-[1.75rem] border border-border bg-card p-3 shadow-[0_22px_65px_rgb(33_30_26/0.10)] transition-[transform,border-color,box-shadow] duration-500 group-hover:-translate-y-1 group-hover:border-primary/35 group-hover:shadow-[0_28px_75px_rgb(33_30_26/0.14)] sm:p-4">
                    <div className="relative size-full overflow-hidden rounded-2xl border border-border bg-white">
                      <iframe
                        src={
                          siteConfig.resume
                            .previewHref
                        }
                        title={
                          copy.preview
                            .frameTitle
                        }
                        loading="lazy"
                        tabIndex={-1}
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 size-full border-0 bg-white"
                      />

                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5"
                      />

                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(to_top,rgb(22_19_17/0.82),transparent)]"
                      />

                      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-5 text-white">
                        <span className="text-sm font-semibold">
                          {
                            copy.preview
                              .open
                          }
                        </span>

                        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/25 bg-black/20 backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          <ExternalIcon />
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="rounded-3xl border border-border bg-card px-6 py-14 text-center text-sm leading-7 text-muted-foreground">
                  {
                    copy.preview
                      .unavailable
                  }
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
