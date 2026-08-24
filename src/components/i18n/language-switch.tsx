"use client";

import {
  useRouter,
} from "next/navigation";
import {
  useState,
} from "react";

import {
  useLocale,
} from "@/components/i18n/locale-provider";
import {
  locales,
  type Locale,
} from "@/i18n/config";
import { sharedDictionary } from "@/i18n/dictionaries/shared";

type LanguageSwitchProps = {
  variant?:
    | "default"
    | "inverse";
};

function EnglishFlag() {
  return (
    <svg
      viewBox="0 0 60 36"
      aria-hidden="true"
      className="h-2.5 w-4 shrink-0 overflow-hidden rounded-[2px]"
    >
      <rect
        width="60"
        height="36"
        fill="#012169"
      />

      <path
        d="M0 0 60 36M60 0 0 36"
        stroke="#fff"
        strokeWidth="8"
      />

      <path
        d="M0 0 60 36M60 0 0 36"
        stroke="#C8102E"
        strokeWidth="4"
      />

      <path
        d="M30 0v36M0 18h60"
        stroke="#fff"
        strokeWidth="12"
      />

      <path
        d="M30 0v36M0 18h60"
        stroke="#C8102E"
        strokeWidth="7"
      />
    </svg>
  );
}

function IndonesianFlag() {
  return (
    <svg
      viewBox="0 0 3 2"
      aria-hidden="true"
      className="h-2.5 w-4 shrink-0 overflow-hidden rounded-[2px]"
    >
      <rect
        width="3"
        height="1"
        fill="#CE1126"
      />

      <rect
        y="1"
        width="3"
        height="1"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function LocaleFlag({
  locale,
}: {
  locale: Locale;
}) {
  return locale === "en"
    ? <EnglishFlag />
    : <IndonesianFlag />;
}

export default function LanguageSwitch({
  variant = "default",
}: LanguageSwitchProps) {
  const router =
    useRouter();

  const {
    locale,
    setLocale,
  } = useLocale();

  const copy =
    sharedDictionary[locale];

  const [
    switchingTo,
    setSwitchingTo,
  ] = useState<Locale | null>(
    null,
  );

  const changeLocale = async (
    nextLocale: Locale,
  ) => {
    if (
      nextLocale === locale ||
      switchingTo
    ) {
      return;
    }

    setSwitchingTo(
      nextLocale,
    );

    try {
      const response =
        await fetch(
          "/api/locale",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body:
              JSON.stringify({
                locale:
                  nextLocale,
              }),
          },
        );

      if (!response.ok) {
        throw new Error(
          "Failed to update locale.",
        );
      }

      setLocale(
        nextLocale,
      );

      document.documentElement.lang =
        nextLocale;

      router.refresh();
    } finally {
      setSwitchingTo(null);
    }
  };

  const inverse =
    variant === "inverse";

  return (
    <div
      role="group"
      aria-label={
        copy.language.label
      }
      className={[
        "flex h-10 items-center rounded-full border p-1 transition-colors duration-300",
        inverse
          ? "border-feature-border bg-feature-foreground/5"
          : "border-border bg-background/40",
      ].join(" ")}
    >
      {locales.map(
        (item) => {
          const active =
            locale === item;

          return (
            <button
              key={item}
              type="button"
              aria-pressed={active}
              aria-label={
                item === "en"
                ? copy.language.switchToEnglish
                : copy.language.switchToIndonesian
              }
              disabled={switchingTo !== null}
              onClick={() =>
                changeLocale(item)
              }
              className={[
                "flex h-8 min-w-8 items-center justify-center gap-1.5 rounded-full px-2 font-mono text-[9px] font-medium uppercase tracking-[0.08em] transition-[background-color,color,opacity] duration-300 sm:px-2.5",
                active
                ? "bg-primary text-primary-foreground"
                : inverse
                    ? "text-feature-muted hover:text-feature-foreground"
                    : "text-muted-foreground hover:text-foreground",
                switchingTo
                ? "cursor-wait"
                : "",
              ].join(" ")}
              >
              <LocaleFlag locale={item} />

              <span className="hidden sm:inline">
                {item}
              </span>
            </button>
          );
        },
      )}
    </div>
  );
}