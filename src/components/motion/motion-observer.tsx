"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR =
  "[data-reveal]";

const VISIBLE_CLASS =
  "is-visible";

const MOTION_READY_CLASS =
  "motion-ready";

export default function MotionObserver() {
  useEffect(() => {
    const root =
      document.documentElement;

    const prefersReducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

    let intersectionObserver:
      | IntersectionObserver
      | null = null;

    const revealOrObserve = (
      element: HTMLElement,
    ) => {
      if (
        element.classList.contains(
          VISIBLE_CLASS,
        )
      ) {
        return;
      }

      if (prefersReducedMotion) {
        element.classList.add(
          VISIBLE_CLASS,
        );

        return;
      }

      const rect =
        element.getBoundingClientRect();

      const alreadyVisible =
        rect.top <
          window.innerHeight *
            0.92 &&
        rect.bottom > 0;

      if (alreadyVisible) {
        element.classList.add(
          VISIBLE_CLASS,
        );

        return;
      }

      intersectionObserver?.observe(
        element,
      );
    };

    const collectRevealElements = (
      node: Node,
    ) => {
      const result:
        HTMLElement[] = [];

      if (
        node instanceof HTMLElement
      ) {
        if (
          node.matches(
            REVEAL_SELECTOR,
          )
        ) {
          result.push(node);
        }

        result.push(
          ...Array.from(
            node.querySelectorAll<HTMLElement>(
              REVEAL_SELECTOR,
            ),
          ),
        );
      }

      return result;
    };

    if (!prefersReducedMotion) {
      intersectionObserver =
        new IntersectionObserver(
          (entries) => {
            entries.forEach(
              (entry) => {
                if (
                  !entry.isIntersecting
                ) {
                  return;
                }

                const element =
                  entry.target as HTMLElement;

                element.classList.add(
                  VISIBLE_CLASS,
                );

                intersectionObserver?.unobserve(
                  element,
                );
              },
            );
          },
          {
            threshold: 0.12,
            rootMargin:
              "0px 0px -8% 0px",
          },
        );
    }

    const initialElements =
      Array.from(
        document.querySelectorAll<HTMLElement>(
          REVEAL_SELECTOR,
        ),
      );

    initialElements.forEach(
      revealOrObserve,
    );

    root.classList.add(
      MOTION_READY_CLASS,
    );

    /*
     * router.refresh() can replace Server Component
     * DOM without remounting this component.
     *
     * Watch for those newly inserted reveal elements
     * so locale changes never leave them hidden.
     */
    const pendingRevealElements =
      new Set<HTMLElement>();

    let mutationFrameId:
      number | null = null;

    const flushPendingRevealElements =
      () => {
        mutationFrameId = null;

        pendingRevealElements.forEach(
          revealOrObserve,
        );

        pendingRevealElements.clear();
      };

    const scheduleRevealElements = (
      node: Node,
    ) => {
      collectRevealElements(
        node,
      ).forEach(
        (element) => {
          pendingRevealElements.add(
            element,
          );
        },
      );

      if (
        pendingRevealElements.size ===
          0 ||
        mutationFrameId !== null
      ) {
        return;
      }

      mutationFrameId =
        window.requestAnimationFrame(
          flushPendingRevealElements,
        );
    };

    const mutationObserver =
      new MutationObserver(
        (records) => {
          records.forEach(
            (record) => {
              record.addedNodes.forEach(
                scheduleRevealElements,
              );
            },
          );
        },
      );

    mutationObserver.observe(
      document.body,
      {
        childList: true,
        subtree: true,
      },
    );

    return () => {
      mutationObserver.disconnect();

      intersectionObserver?.disconnect();

      if (
        mutationFrameId !== null
      ) {
        window.cancelAnimationFrame(
          mutationFrameId,
        );
      }

      pendingRevealElements.clear();

      root.classList.remove(
        MOTION_READY_CLASS,
      );
    };
  }, []);

  return null;
}
