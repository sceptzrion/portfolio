"use client";

import { useState } from "react";

type CopyEmailCardProps = {
  email: string;
  label: string;
  copyLabel: string;
  copiedLabel: string;
};

function CopyIcon() {
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
      <rect
        x="8"
        y="8"
        width="11"
        height="11"
        rx="2"
      />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
    </svg>
  );
}

function CheckIcon() {
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
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function CopyEmailCard({
  email,
  label,
  copyLabel,
  copiedLabel,
}: CopyEmailCardProps) {
  const [copied, setCopied] =
    useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        email,
      );

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`${copyLabel}: ${email}`}
      className="group flex min-h-22 w-full items-center justify-between gap-6 rounded-2xl border border-border bg-card px-5 py-4 text-left transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary-soft/35"
    >
      <div className="min-w-0">
        <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted-foreground">
          {label}
        </p>

        <p className="mt-2 truncate text-sm font-medium text-foreground sm:text-[15px]">
          {email}
        </p>
      </div>

      <span
        className={[
          "flex shrink-0 items-center gap-2 font-mono text-[8px] uppercase tracking-widest transition-colors duration-300",
          copied
            ? "text-primary"
            : "text-muted-foreground group-hover:text-primary",
        ].join(" ")}
      >
        <span className="hidden sm:inline">
          {copied
            ? copiedLabel
            : copyLabel}
        </span>

        {copied ? (
          <CheckIcon />
        ) : (
          <CopyIcon />
        )}
      </span>
    </button>
  );
}