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

  "disarpus-bekasi": {
    homepage:
      "/images/projects/disarpus-bekasi/homepage.webp",

    "news-listing":
      "/images/projects/disarpus-bekasi/news-listing.webp",

    "mobile-news":
      "/images/projects/disarpus-bekasi/mobile-news.webp",
  },

  "lestari-waste-bank": {
    "statistics-reporting":
      "/images/projects/lestari-waste-bank/statistics-reporting.webp",

    "waste-reception":
      "/images/projects/lestari-waste-bank/waste-reception.webp",

    "mobile-waste-categories":
      "/images/projects/lestari-waste-bank/mobile-waste-categories.webp",
  },

  "gold-price-prediction": {
    "prediction-dashboard":
      "/images/projects/gold-price-prediction/prediction-dashboard.webp",

    "manual-simulation":
      "/images/projects/gold-price-prediction/manual-simulation.webp",
  },
};
