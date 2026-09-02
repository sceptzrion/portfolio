import Link from "next/link";

import { notFoundDictionary } from "@/i18n/dictionaries/not-found";
import { getLocale } from "@/i18n/get-locale";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 12H5" />
      <path d="m10 7-5 5 5 5" />
    </svg>
  );
}

function LostRouteIllustration() {
  return (
    <div className="relative mx-auto h-28 w-40 sm:h-32 sm:w-48">
      <svg
        viewBox="0 0 240 160"
        aria-hidden="true"
        className="size-full"
        fill="none"
      >
        <rect
          x="28"
          y="20"
          width="184"
          height="120"
          rx="26"
          className="fill-card stroke-border"
          strokeWidth="1.5"
        />

        <path
          d="M72 54h56"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          className="text-foreground/14"
        />

        <path
          d="M72 74h88"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          className="text-foreground/10"
        />

        <path
          d="M72 94h64"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          className="text-foreground/10"
        />

        <circle
          cx="150"
          cy="78"
          r="26"
          className="fill-background stroke-border-strong"
          strokeWidth="4"
        />

        <path
          d="M167 95l16 16"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          className="text-primary"
        />

        <path
          d="M145.5 69.5C145.5 64.8056 149.306 61 154 61C158.694 61 162.5 64.8056 162.5 69.5C162.5 73.0594 160.184 75.2647 157.449 77.1664C155.441 78.5627 154 79.7559 154 82"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        />

        <circle
          cx="154"
          cy="91"
          r="3.8"
          className="fill-primary"
        />

        <circle
          cx="62"
          cy="110"
          r="5"
          className="fill-primary/85"
        />

        <path
          d="M56 42L66 32"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          className="text-foreground/14"
        />
        <path
          d="M66 42L56 32"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          className="text-foreground/14"
        />

        <path
          d="M182 48L192 38"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          className="text-foreground/14"
        />
        <path
          d="M192 48L182 38"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          className="text-foreground/14"
        />
      </svg>
    </div>
  );
}

export default async function NotFound() {
  const locale = await getLocale();
  const copy = notFoundDictionary[locale];

  return (
    <main id="main-content" tabIndex={-1} className="relative grid min-h-dvh overflow-x-hidden bg-background px-6 py-16 sm:py-20">
      <div
        aria-hidden="true"
        className="warm-veil pointer-events-none absolute inset-0 opacity-45"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/4.5 blur-3xl sm:size-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 translate-y-[-58%] select-none font-display text-[12rem] font-bold leading-none tracking-[-0.08em] text-foreground/[0.035] sm:block lg:text-[15rem]"
      >
        404
      </div>

      <div className="relative m-auto w-full max-w-2xl text-center">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground sm:text-[10px]">
            <span className="h-px w-5 bg-primary" />
            {copy.label}
          </span>
        </div>

        <div className="mt-7">
          <LostRouteIllustration />
        </div>

        <h1 className="mx-auto mt-7 max-w-xl text-balance font-display text-[clamp(2.25rem,5vw,3.8rem)] font-bold leading-[1.02] tracking-[-0.055em]">
          {copy.title}
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-balance text-sm leading-7 text-muted-foreground sm:text-[15px]">
          {copy.description}
        </p>

        <div className="mt-7 flex justify-center">
          <Link
            href="/"
            className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-[transform,opacity] duration-300 hover:-translate-y-0.5 hover:opacity-90"
          >
            <ArrowIcon />
            {copy.action}
          </Link>
        </div>
      </div>
    </main>
  );
}