"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Document,
  Page,
  pdfjs,
} from "react-pdf";

import type { Locale } from "@/i18n/config";
import { resumeDictionary } from "@/i18n/dictionaries/resume";

pdfjs.GlobalWorkerOptions.workerSrc =
  new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url,
  ).toString();

type ResumeViewerProps = {
  file: string;
  locale: Locale;
  available: boolean;
};

function DocumentIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h4" />
    </svg>
  );
}

export default function ResumeViewer({
  file,
  locale,
  available,
}: ResumeViewerProps) {
  const copy =
    resumeDictionary[locale].viewer;

  const containerRef =
    useRef<HTMLDivElement>(null);

  const [numPages, setNumPages] =
    useState<number | null>(null);

  const [pageWidth, setPageWidth] =
    useState(760);

  const updateWidth =
    useCallback(() => {
      const container =
        containerRef.current;

      if (!container) return;

      setPageWidth(
        Math.min(
          container.clientWidth,
          820,
        ),
      );
    }, []);

  useEffect(() => {
    if (!available) return;

    updateWidth();

    const container =
      containerRef.current;

    if (!container) return;

    const observer =
      new ResizeObserver(
        updateWidth,
      );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [
    available,
    updateWidth,
  ]);

  if (!available) {
    return (
      <div className="grid min-h-80 place-items-center rounded-3xl border border-border bg-card/65 px-6 py-12 text-center sm:min-h-96">
        <div className="max-w-md">
          <div className="mx-auto grid size-14 place-items-center rounded-2xl border border-border bg-secondary text-primary">
            <DocumentIcon />
          </div>

          <p className="mt-6 font-mono text-[9px] uppercase tracking-[0.14em] text-primary">
            {
              copy.unavailable
                .label
            }
          </p>

          <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
            {
              copy.unavailable
                .title
            }
          </h2>

          <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
            {
              copy.unavailable
                .description
            }
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full"
    >
      <Document
        file={file}
        onLoadSuccess={({
          numPages:
            loadedPages,
        }) => {
          setNumPages(
            loadedPages,
          );
        }}
        loading={
          <div className="grid min-h-100 place-items-center rounded-3xl border border-border bg-card">
            <div className="text-center">
              <span className="mx-auto block size-5 animate-spin rounded-full border-2 border-border border-t-primary" />

              <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.13em] text-muted-foreground">
                {copy.loading}
              </p>
            </div>
          </div>
        }
        error={
          <div className="grid min-h-100 place-items-center rounded-3xl border border-border bg-card px-6">
            <div className="max-w-md text-center">
              <div className="mx-auto grid size-12 place-items-center rounded-2xl border border-border bg-secondary font-display text-xl font-semibold text-primary">
                !
              </div>

              <h2 className="mt-5 font-display text-2xl font-semibold tracking-[-0.035em]">
                {
                  copy.error
                    .title
                }
              </h2>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {
                  copy.error
                    .description
                }
              </p>
            </div>
          </div>
        }
        className="space-y-8"
      >
        {numPages &&
          Array.from(
            {
              length:
                numPages,
            },
            (_, index) => {
              const pageNumber =
                index + 1;

              return (
                <article
                  key={
                    pageNumber
                  }
                  className="mx-auto w-fit max-w-full"
                >
                  <p className="mb-2 px-1 font-mono text-[8px] uppercase tracking-[0.13em] text-muted-foreground">
                    {
                      copy.page
                    }{" "}
                    {
                      pageNumber
                    }{" "}
                    {copy.of}{" "}
                    {
                      numPages
                    }
                  </p>

                  <div className="max-w-full overflow-hidden rounded-sm border border-border bg-white shadow-[0_20px_60px_rgb(33_30_26/0.10)]">
                    <Page
                      pageNumber={
                        pageNumber
                      }
                      width={
                        pageWidth
                      }
                      renderAnnotationLayer={
                        false
                      }
                      renderTextLayer={
                        false
                      }
                      devicePixelRatio={
                        Math.min(
                          typeof window !==
                            "undefined"
                            ? window
                                .devicePixelRatio
                            : 1,
                          2,
                        )
                      }
                    />
                  </div>
                </article>
              );
            },
          )}
      </Document>
    </div>
  );
}