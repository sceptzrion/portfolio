export const profileImages = {
  primary:
    "/images/profile/rizqi-portrait-primary.webp",

  secondary:
    "/images/profile/rizqi-portrait-secondary.png",

  hero: "/images/profile/rizqi-portrait-secondary.png",
  about: "/images/profile/rizqi-portrait-primary.webp",
} as const;


export const projectImages: Record<
  string,
  readonly string[]
> = {
  edubidan: [
    "/images/projects/edubidan/landing-page.webp",
    "/images/projects/edubidan/hero-dashboard.webp",
    "/images/projects/edubidan/modules.webp",
    "/images/projects/edubidan/quiz.webp",
    "/images/projects/edubidan/lecturer-analytics.webp",
    "/images/projects/edubidan/mobile-module.webp",
  ],
};
