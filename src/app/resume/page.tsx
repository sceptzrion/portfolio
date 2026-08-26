import type { Metadata } from "next";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import ResumeViewerLoader from "@/components/sections/resume/resume-viewer-loader";
import { siteConfig } from "@/data/site";
import { metadataDictionary } from "@/i18n/dictionaries/metadata";
import { resumeDictionary } from "@/i18n/dictionaries/resume";
import { getLocale } from "@/i18n/get-locale";

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-3.5"
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

function DownloadIcon() {
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
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
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
      url: `${siteConfig.url}/resume`,
      siteName:
        siteConfig.siteName,
      title: copy.title,
      description:
        copy.description,
    },

    twitter: {
      card: "summary",
      title: copy.title,
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

        <section className="shell relative pb-9 sm:pb-11">
          <div className="grid gap-7 border-b border-border pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
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

            {siteConfig.resume
              .available && (
              <div className="flex flex-wrap gap-3">
                <a
                  href={
                    siteConfig.resume
                      .fileHref
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border-strong bg-background px-5 text-sm font-semibold transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary-soft"
                >
                  {
                    copy.actions
                      .open
                  }

                  <ExternalIcon />
                </a>

                <a
                  href={
                    siteConfig.resume
                      .fileHref
                  }
                  download
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-[transform,opacity] duration-300 hover:-translate-y-0.5 hover:opacity-90"
                >
                  <DownloadIcon />

                  {
                    copy.actions
                      .download
                  }
                </a>
              </div>
            )}
          </div>
        </section>

        <section className="border-t border-border bg-secondary/35">
          <div className="shell py-8 sm:py-10 lg:py-12">
            <div className="mx-auto max-w-230">
              <div className="mb-4 flex items-center justify-between gap-6">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                  {
                    copy.viewer
                      .label
                  }
                </p>

                <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-muted-foreground">
                  PDF
                </p>
              </div>

              <ResumeViewerLoader
                file={
                    siteConfig.resume
                    .fileHref
                }
                locale={locale}
                available={
                    siteConfig.resume
                    .available
                }
                />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}