"use client";

import { useTheme } from "@/components/theme/theme-provider";

type ThemeToggleProps = {
  variant?: "default" | "inverse";
};

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    >
      <circle
        cx="12"
        cy="12"
        r="4"
      />

      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4 12H2" />
      <path d="M22 12h-2" />

      <path d="M5 5l1.5 1.5" />
      <path d="M17.5 17.5 19 19" />
      <path d="M19 5l-1.5 1.5" />
      <path d="M6.5 17.5 5 19" />
    </svg>
  );
}

export default function ThemeToggle({
  variant = "default",
}: ThemeToggleProps) {
  const {
    theme,
    mounted,
    toggleTheme,
  } = useTheme();

  const inverse =
    variant === "inverse";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        mounted
          ? `Switch to ${
              theme === "light"
                ? "dark"
                : "light"
            } mode`
          : "Toggle color theme"
      }
      title={
        mounted
          ? `Switch to ${
              theme === "light"
                ? "dark"
                : "light"
            } mode`
          : "Toggle color theme"
      }
      className={[
        "grid size-10 shrink-0 place-items-center rounded-full border transition-[color,border-color,background-color,transform] duration-300 hover:-translate-y-0.5",
        inverse
          ? "border-feature-border bg-feature-foreground/5 text-feature-muted hover:border-primary hover:bg-primary/10 hover:text-primary"
          : "border-border bg-background/40 text-muted-foreground hover:border-primary hover:bg-primary-soft hover:text-primary",
      ].join(" ")}
    >
      {!mounted ? (
        <span
          aria-hidden="true"
          className="size-3.5 rounded-full border border-current"
        />
      ) : theme === "light" ? (
        <MoonIcon />
      ) : (
        <SunIcon />
      )}
    </button>
  );
}