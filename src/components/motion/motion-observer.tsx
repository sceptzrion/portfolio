"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal]";
const VISIBLE_CLASS = "is-visible";
const MOTION_READY_CLASS = "motion-ready";

export default function MotionObserver() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        REVEAL_SELECTOR,
      ),
    );

    if (elements.length === 0) {
      return;
    }

    const root = document.documentElement;

    const prefersReducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

    if (prefersReducedMotion) {
      elements.forEach((element) => {
        element.classList.add(
          VISIBLE_CLASS,
        );
      });

      return;
    }

    /*
     * Mark elements already inside the initial viewport
     * before enabling the hidden motion state.
     *
     * This avoids an unnecessary flash from visible → hidden.
     */
    elements.forEach((element) => {
      const rect =
        element.getBoundingClientRect();

      const initiallyVisible =
        rect.top <
          window.innerHeight * 0.92 &&
        rect.bottom > 0;

      if (initiallyVisible) {
        element.classList.add(
          VISIBLE_CLASS,
        );
      }
    });

    root.classList.add(
      MOTION_READY_CLASS,
    );

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            const element =
              entry.target as HTMLElement;

            element.classList.add(
              VISIBLE_CLASS,
            );

            observer.unobserve(element);
          });
        },
        {
          threshold: 0.12,
          rootMargin:
            "0px 0px -8% 0px",
        },
      );

    elements.forEach((element) => {
      if (
        !element.classList.contains(
          VISIBLE_CLASS,
        )
      ) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();

      root.classList.remove(
        MOTION_READY_CLASS,
      );
    };
  }, []);

  return null;
}