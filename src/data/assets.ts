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
  Record<string, string>
> = {
  edubidan: {
    "landing-page":
      "/images/projects/edubidan/landing-page.webp",

    "student-dashboard":
      "/images/projects/edubidan/hero-dashboard.webp",

    modules:
      "/images/projects/edubidan/modules.webp",

    quiz:
      "/images/projects/edubidan/quiz.webp",

    "lecturer-analytics":
      "/images/projects/edubidan/lecturer-analytics.webp",

    "mobile-module":
      "/images/projects/edubidan/mobile-module.webp",
  },
};
