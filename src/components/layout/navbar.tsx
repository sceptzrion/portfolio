"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useState,
} from "react";

import ThemeToggle from "@/components/theme/theme-toggle";
import { siteConfig } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] =
    useState(false);

  const [menuOpen, setMenuOpen] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
        <nav
          aria-label="Primary navigation"
          className={[
            "mx-auto flex h-14.5 max-w-6xl items-center justify-between rounded-full border px-3 transition-all duration-500 sm:px-4",
            scrolled
              ? "border-border bg-background/80 shadow-[0_8px_30px_rgb(0_0_0/0.06)] backdrop-blur-xl"
              : "border-transparent bg-transparent",
          ].join(" ")}
        >
          {/* Brand */}
          <Link
            href="/"
            aria-label={`${siteConfig.shortName} — Home`}
            className="group flex items-center gap-2.5"
          >
            <span className="grid size-8 place-items-center rounded-lg bg-primary font-display text-xs font-bold text-primary-foreground transition-transform duration-300 group-hover:-rotate-6">
              {siteConfig.monogram}
            </span>

            <span className="font-display text-[17px] font-semibold tracking-[-0.035em]">
              {siteConfig.shortName}

              <span className="text-primary">
                .
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-0.5 md:flex">
            {siteConfig.navigation.map(
              (item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(
                        item.href,
                      );

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "group relative rounded-full px-3.5 py-2 text-[13px] transition-colors duration-300",
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground",
                    ].join(" ")}
                  >
                    {item.label}

                    <span
                      className={[
                        "absolute inset-x-3.5 bottom-1 h-px origin-center bg-primary transition-transform duration-300",
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100",
                      ].join(" ")}
                    />
                  </Link>
                );
              },
            )}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Link
              href="/resume"
              className="hidden min-h-9 items-center rounded-full bg-foreground px-4 text-[13px] font-medium text-background transition-transform duration-300 hover:-translate-y-0.5 md:inline-flex"
            >
              Resume
            </Link>

            {/* Mobile menu trigger */}
            <button
              type="button"
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              onClick={() =>
                setMenuOpen(
                  (current) => !current,
                )
              }
              className="relative grid size-9 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-primary md:hidden"
            >
              <span
                className={[
                  "absolute h-px w-4.5 bg-current transition-transform duration-300",
                  menuOpen
                    ? "rotate-45"
                    : "-translate-y-0.75",
                ].join(" ")}
              />

              <span
                className={[
                  "absolute h-px w-4.5 bg-current transition-transform duration-300",
                  menuOpen
                    ? "-rotate-45"
                    : "translate-y-0.75",
                ].join(" ")}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        aria-hidden={!menuOpen}
        className={[
          "fixed inset-0 z-40 overflow-hidden bg-background transition-[opacity,visibility] duration-500 md:hidden",
          menuOpen
            ? "visible pointer-events-auto opacity-100"
            : "invisible pointer-events-none opacity-0",
        ].join(" ")}
      >
        <div
          aria-hidden="true"
          className="tech-grid pointer-events-none absolute inset-0 opacity-50"
        />

        <div
          aria-hidden="true"
          className="warm-veil pointer-events-none absolute inset-0"
        />

        <div className="shell relative flex min-h-dvh flex-col pb-7 pt-24">
          <nav
            aria-label="Mobile navigation"
            className="flex flex-1 flex-col"
          >
            {siteConfig.navigation.map(
              (item, index) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(
                        item.href,
                      );

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    tabIndex={
                      menuOpen ? 0 : -1
                    }
                    style={{
                      transitionDelay:
                        menuOpen
                          ? `${
                              80 +
                              index * 45
                            }ms`
                          : "0ms",
                    }}
                    className={[
                      "group flex items-baseline gap-5 border-b border-border py-4 transition-[opacity,transform,color] duration-500",
                      menuOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-3 opacity-0",
                      isActive
                        ? "text-primary"
                        : "text-foreground",
                    ].join(" ")}
                  >
                    <span className="mono w-6 shrink-0 text-muted-foreground">
                      {String(
                        index + 1,
                      ).padStart(2, "0")}
                    </span>

                    <span className="font-display text-[clamp(2rem,9vw,3.1rem)] font-semibold leading-none tracking-[-0.045em] transition-transform duration-300 group-hover:translate-x-1">
                      {item.label}
                    </span>
                  </Link>
                );
              },
            )}
          </nav>

          <div
            className={[
              "mt-8 transition-[opacity,transform] duration-500",
              menuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0",
            ].join(" ")}
            style={{
              transitionDelay: menuOpen
                ? "380ms"
                : "0ms",
            }}
          >
            <div className="flex items-center justify-between border-t border-border pt-5">
              <div>
                <p className="mono text-primary">
                  {siteConfig.domain}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  {
                    siteConfig.location
                  }
                </p>
              </div>

              <span className="size-2 rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}