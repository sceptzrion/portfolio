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

  experience: {
    title: string;
    description: string;
  };

  projects: {
    title: string;
    description: string;
  };

  resume: {
    title: string;
    description: string;
  };

  contact: {
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

    experience: {
      title:
        "Experience | Muhamad Ikhsan Rizqi Yanuar's Portfolio",

      description:
        "Explore the professional and project-based experience of Muhamad Ikhsan Rizqi Yanuar across frontend web development and business intelligence.",
    },

    projects: {
      title:
        "Projects | Muhamad Ikhsan Rizqi Yanuar's Portfolio",

      description:
        "Explore selected full-stack, frontend, and data projects by Muhamad Ikhsan Rizqi Yanuar across academic, professional, collaborative, and personal work.",
    },

    resume: {
      title:
        "Resume | Muhamad Ikhsan Rizqi Yanuar's Portfolio",

      description:
        "Preview the latest resume of Muhamad Ikhsan Rizqi Yanuar, Full-Stack Web Developer.",
    },

    contact: {
      title:
        "Contact | Muhamad Ikhsan Rizqi Yanuar's Portfolio",

      description:
        "Get in touch with Muhamad Ikhsan Rizqi Yanuar for full-time opportunities, collaborations, and conversations around web development and digital products.",
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

    experience: {
      title:
        "Pengalaman | Portofolio Muhamad Ikhsan Rizqi Yanuar",

      description:
        "Pengalaman profesional dan project-based Muhamad Ikhsan Rizqi Yanuar di bidang frontend web development dan business intelligence.",
    },

    projects: {
      title:
        "Proyek | Portofolio Muhamad Ikhsan Rizqi Yanuar",

      description:
        "Jelajahi proyek pilihan Muhamad Ikhsan Rizqi Yanuar di bidang full-stack development, frontend, dan data melalui karya akademik, profesional, kolaboratif, dan personal.",
    },

    resume: {
      title:
        "Resume | Portofolio Muhamad Ikhsan Rizqi Yanuar",

      description:
        "Lihat resume terbaru Muhamad Ikhsan Rizqi Yanuar, Full-Stack Web Developer.",
    },

    contact: {
      title:
        "Kontak | Portofolio Muhamad Ikhsan Rizqi Yanuar",

      description:
        "Hubungi Muhamad Ikhsan Rizqi Yanuar untuk peluang full-time, kolaborasi, dan diskusi seputar web development serta produk digital.",
    },
  },
} satisfies Record<
  Locale,
  MetadataDictionary
>;