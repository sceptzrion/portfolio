"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
} from "react";

import LanguageSwitch from "@/components/i18n/language-switch";
import { useLocale } from "@/components/i18n/locale-provider";
import ThemeToggle from "@/components/theme/theme-toggle";
import { siteConfig } from "@/data/site";
import { sharedDictionary } from "@/i18n/dictionaries/shared";

const MOBILE_MENU_ID =
  "mobile-navigation";

const DARK_SURFACE_SELECTOR =
  '[data-navbar-surface="dark"]';

const NAVBAR_SURFACE_PROBE_Y = 44;

function isRouteActive(
  pathname: string,
  href: string,
) {
  if (href === "/") {
    return pathname === "/";
  }

  return (
    pathname === href ||
    pathname.startsWith(`${href}/`)
  );
}

export default function Navbar() {
  const pathname = usePathname();

  const { locale } = useLocale();
  const copy =
    sharedDictionary[locale];

  const [scrolled, setScrolled] =
    useState(false);

  const [
    overDarkSurface,
    setOverDarkSurface,
  ] = useState(false);

  const [menuOpen, setMenuOpen] =
    useState(false);

  const menuButtonRef =
    useRef<HTMLButtonElement>(null);

  const mobileMenuRef =
    useRef<HTMLDivElement>(null);

  /* -------------------------------------------------------
     Scroll + surface state
     ------------------------------------------------------- */

  useEffect(() => {
    const darkSurfaces =
      Array.from(
        document.querySelectorAll<HTMLElement>(
          DARK_SURFACE_SELECTOR,
        ),
      );

    const updateNavbarState =
      () => {
        setScrolled(
          window.scrollY > 24,
        );

        const isOverDarkSurface =
          darkSurfaces.some(
            (surface) => {
              const rect =
                surface.getBoundingClientRect();

              return (
                rect.top <=
                  NAVBAR_SURFACE_PROBE_Y &&
                rect.bottom >=
                  NAVBAR_SURFACE_PROBE_Y
              );
            },
          );

        setOverDarkSurface(
          isOverDarkSurface,
        );
      };

    updateNavbarState();

    window.addEventListener(
      "scroll",
      updateNavbarState,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      updateNavbarState,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateNavbarState,
      );

      window.removeEventListener(
        "resize",
        updateNavbarState,
      );
    };
  }, []);

  /* -------------------------------------------------------
     Close mobile menu if viewport becomes desktop
     ------------------------------------------------------- */

  useEffect(() => {
    const mediaQuery =
      window.matchMedia(
        "(min-width: 1024px)",
      );

    const handleChange = (
      event: MediaQueryListEvent,
    ) => {
      if (event.matches) {
        setMenuOpen(false);
      }
    };

    mediaQuery.addEventListener(
      "change",
      handleChange,
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleChange,
      );
    };
  }, []);

  /* -------------------------------------------------------
     Body scroll lock
     ------------------------------------------------------- */

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [menuOpen]);

  /* -------------------------------------------------------
     Mobile menu keyboard / focus management
     ------------------------------------------------------- */

  useEffect(() => {
    if (!menuOpen) return;

    const menu =
      mobileMenuRef.current;

    if (!menu) return;

    const focusableSelector = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(",");

    const getFocusableElements =
      () =>
        Array.from(
          menu.querySelectorAll<HTMLElement>(
            focusableSelector,
          ),
        );

    const focusableElements =
      getFocusableElements();

    focusableElements[0]?.focus();

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        event.preventDefault();

        setMenuOpen(false);

        requestAnimationFrame(
          () => {
            menuButtonRef.current?.focus();
          },
        );

        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const elements =
        getFocusableElements();

      if (elements.length === 0) {
        return;
      }

      const firstElement =
        elements[0];

      const lastElement =
        elements[
          elements.length - 1
        ];

      if (
        event.shiftKey &&
        document.activeElement ===
          firstElement
      ) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement ===
          lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
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

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  /*
   * The mobile overlay uses the normal page surface,
   * so the navbar returns to its default treatment
   * while the menu is open.
   */
  const useDarkSurface =
    overDarkSurface && !menuOpen;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
        <nav
          aria-label={
            copy.navbar.primaryLabel
          }
          className={[
            "mx-auto flex h-14 w-full max-w-270 items-center justify-between rounded-full border px-3 transition-[background-color,border-color,box-shadow,backdrop-filter,color] duration-500 sm:px-4",
            useDarkSurface
              ? "border-feature-border bg-feature/90 shadow-[0_10px_35px_rgb(0_0_0/0.22)] backdrop-blur-xl"
              : scrolled
                ? "border-border bg-background/80 shadow-[0_8px_30px_rgb(0_0_0/0.06)] backdrop-blur-xl"
                : "border-transparent bg-transparent",
          ].join(" ")}
        >
          {/* Brand */}
          <Link
            href="/"
            onClick={
              closeMobileMenu
            }
            aria-label={`${siteConfig.shortName} — ${copy.navigation.home}`}
            className="group flex shrink-0 items-center gap-2.5"
          >
            <span className="grid size-8 place-items-center rounded-[8px] bg-primary font-brand text-[13px] font-bold tracking-tighter text-primary-foreground transition-transform duration-300 group-hover:-rotate-6">
              {
                siteConfig.monogram
              }
            </span>

            <span
              className={[
                "font-display text-[17px] font-semibold tracking-[-0.035em] transition-colors duration-500",
                useDarkSurface
                  ? "text-feature-foreground"
                  : "text-foreground",
              ].join(" ")}
            >
              {
                siteConfig.shortName
              }

              <span className="text-primary">
                .
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {siteConfig.navigation.map(
              (item) => {
                const active =
                  isRouteActive(
                    pathname,
                    item.href,
                  );

                return (
                  <Link
                    key={
                      item.href
                    }
                    href={
                      item.href
                    }
                    aria-current={
                      active
                        ? "page"
                        : undefined
                    }
                    className={[
                      "group relative rounded-full px-3.5 py-2 text-[13px] transition-colors duration-300",
                      active
                        ? "text-primary"
                        : useDarkSurface
                          ? "text-feature-muted hover:text-feature-foreground"
                          : "text-muted-foreground hover:text-foreground",
                    ].join(" ")}
                  >
                    {
                      copy
                        .navigation[
                        item.key
                      ]
                    }

                    <span
                      aria-hidden="true"
                      className={[
                        "absolute inset-x-3.5 bottom-1 h-px origin-center bg-primary transition-transform duration-300",
                        active
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
          <div className="flex shrink-0 items-center gap-2">
            <LanguageSwitch
              variant={
                useDarkSurface
                  ? "inverse"
                  : "default"
              }
            />

            <ThemeToggle
              variant={
                useDarkSurface
                  ? "inverse"
                  : "default"
              }
            />

            <Link
              href={
                siteConfig.resume.href
              }
              className={[
                "hidden min-h-10 items-center justify-center rounded-full px-4 text-[13px] font-semibold transition-[transform,opacity,background-color,color] duration-300 hover:-translate-y-0.5 hover:opacity-90 lg:inline-flex",
                useDarkSurface
                  ? "bg-feature-foreground text-feature"
                  : "bg-foreground text-background",
              ].join(" ")}
            >
              {copy.resume.label}
            </Link>

            {/* Mobile menu trigger */}
            <button
              ref={menuButtonRef}
              type="button"
              aria-label={
                menuOpen
                  ? copy.navbar
                      .closeMenu
                  : copy.navbar
                      .openMenu
              }
              aria-expanded={
                menuOpen
              }
              aria-controls={
                MOBILE_MENU_ID
              }
              onClick={() =>
                setMenuOpen(
                  (current) =>
                    !current,
                )
              }
              className={[
                "relative grid size-10 shrink-0 place-items-center rounded-full border transition-colors duration-300 lg:hidden",
                useDarkSurface
                  ? "border-feature-border bg-feature-foreground/5 text-feature-foreground hover:border-primary hover:text-primary"
                  : "border-border bg-background/40 text-foreground hover:border-primary hover:text-primary",
              ].join(" ")}
            >
              <span
                aria-hidden="true"
                className={[
                  "absolute h-px w-4.5 bg-current transition-transform duration-300",
                  menuOpen
                    ? "rotate-45"
                    : "-translate-y-0.75",
                ].join(" ")}
              />

              <span
                aria-hidden="true"
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

      {/* Mobile Navigation */}
      <div
        id={MOBILE_MENU_ID}
        ref={mobileMenuRef}
        role="dialog"
        aria-modal={
          menuOpen
            ? true
            : undefined
        }
        aria-label={
          copy.navbar.mobileLabel
        }
        aria-hidden={!menuOpen}
        className={[
          "fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-background transition-[opacity,visibility] duration-500 lg:hidden",
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
            aria-label={
              copy.navbar
                .mobileLinksLabel
            }
            className="flex flex-1 flex-col"
          >
            {siteConfig.navigation.map(
              (
                item,
                index,
              ) => {
                const active =
                  isRouteActive(
                    pathname,
                    item.href,
                  );

                return (
                  <Link
                    key={
                      item.href
                    }
                    href={
                      item.href
                    }
                    onClick={
                      closeMobileMenu
                    }
                    tabIndex={
                      menuOpen
                        ? 0
                        : -1
                    }
                    aria-current={
                      active
                        ? "page"
                        : undefined
                    }
                    style={{
                      transitionDelay:
                        menuOpen
                          ? `${
                              80 +
                              index *
                                45
                            }ms`
                          : "0ms",
                    }}
                    className={[
                      "group flex items-baseline gap-4 border-b border-border py-3.5 transition-[opacity,transform,color] duration-500 sm:gap-5 sm:py-4",
                      menuOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-3 opacity-0",
                      active
                        ? "text-primary"
                        : "text-foreground",
                    ].join(" ")}
                  >
                    <span className="mono w-6 shrink-0 text-muted-foreground">
                      {String(
                        index + 1,
                      ).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    <span className="font-display text-[clamp(1.85rem,7vw,2.75rem)] font-semibold leading-none tracking-[-0.045em] transition-transform duration-300 group-hover:translate-x-1">
                      {
                        copy
                          .navigation[
                          item.key
                        ]
                      }
                    </span>
                  </Link>
                );
              },
            )}

            {/* Resume as mobile CTA */}
            <Link
              href={
                siteConfig.resume.href
              }
              onClick={
                closeMobileMenu
              }
              tabIndex={
                menuOpen ? 0 : -1
              }
              className={[
                "mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-[opacity,transform] duration-500",
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0",
              ].join(" ")}
              style={{
                transitionDelay:
                  menuOpen
                    ? "340ms"
                    : "0ms",
              }}
            >
              {copy.resume.view}
            </Link>
          </nav>

          <div
            className={[
              "mt-6 transition-[opacity,transform] duration-500",
              menuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0",
            ].join(" ")}
            style={{
              transitionDelay:
                menuOpen
                  ? "400ms"
                  : "0ms",
            }}
          >
            <div className="flex items-center justify-between border-t border-border pt-5">
              <div>
                <p className="mono text-primary">
                  {
                    siteConfig.domain
                  }
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  {copy.location}
                </p>
              </div>

              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}