"use client";

import dynamic from "next/dynamic";

import type { Locale } from "@/i18n/config";
import { resumeDictionary } from "@/i18n/dictionaries/resume";

const ResumeViewer = dynamic(
  () => import("./resume-viewer"),
  {
    ssr: false,

    loading: () => (
      <div className="grid min-h-80 place-items-center rounded-3xl border border-border bg-card sm:min-h-96">
        <div className="text-center">
          <span className="mx-auto block size-5 animate-spin rounded-full border-2 border-border border-t-primary" />

          <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.13em] text-muted-foreground">
            Loading resume...
          </p>
        </div>
      </div>
    ),
  },
);

type ResumeViewerLoaderProps = {
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

export default function ResumeViewerLoader({
  file,
  locale,
  available,
}: ResumeViewerLoaderProps) {
  const copy =
    resumeDictionary[locale].viewer;

  /*
   * Do not load react-pdf at all
   * while the actual resume file
   * is not available.
   */
  if (!available) {
    return (
      <div className="grid min-h-80 place-items-center rounded-3xl border border-border bg-card/65 px-6 py-12 text-center sm:min-h-96">
        <div className="max-w-md">
          <div className="mx-auto grid size-14 place-items-center rounded-2xl border border-border bg-secondary text-primary">
            <DocumentIcon />
          </div>

          <p className="mt-6 font-mono text-[9px] uppercase tracking-[0.14em] text-primary">
            {copy.unavailable.label}
          </p>

          <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
            {copy.unavailable.title}
          </h2>

          <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
            {copy.unavailable.description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <ResumeViewer
      file={file}
      locale={locale}
      available={available}
    />
  );
}