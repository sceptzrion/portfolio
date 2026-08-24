import type { Locale } from "@/i18n/config";

type MetadataDictionary = {
  site: {
    description: string;
    openGraphLocale: string;
  };

  about: {
    title: string;
    description: string;
  };
};

export const metadataDictionary = {
  en: {
    site: {
      description:
        "Portfolio of Muhamad Ikhsan Rizqi Yanuar, a Full-Stack Web Developer with hands-on experience building responsive web applications and data projects.",

      openGraphLocale:
        "en_US",
    },

    about: {
      title:
        "About | Muhamad Ikhsan Rizqi Yanuar's Portfolio",

      description:
        "Learn more about Muhamad Ikhsan Rizqi Yanuar, a fresh Informatics graduate and Full-Stack Web Developer focused on web application development, frontend engineering, and practical full-stack development.",
    },
  },

  id: {
    site: {
      description:
        "Portfolio Muhamad Ikhsan Rizqi Yanuar, Full-Stack Web Developer dengan pengalaman praktis dalam membangun aplikasi web responsif dan proyek data.",

      openGraphLocale:
        "id_ID",
    },

    about: {
      title:
        "Tentang | Portofolio Muhamad Ikhsan Rizqi Yanuar",

      description:
        "Tentang Muhamad Ikhsan Rizqi Yanuar, Fresh Graduate Informatika dan Full-Stack Web Developer dengan fokus pada web application development, frontend engineering, dan full-stack development.",
    },
  },
} satisfies Record<
  Locale,
  MetadataDictionary
>;