import type { Locale } from "@/i18n/config";

type ProjectsDictionary = {
  hero: {
    label: string;

    headline: {
      introduction: string;
      emphasis: string;
    };

    description: string;

    meta: {
      count: string;
      contexts: string;
      disciplines: string;
    };
  };

  next: {
    label: string;

    headline: {
      introduction: string;
      emphasis: string;
    };

    description: string;

    actions: {
      contact: string;
      experience: string;
    };
  };
};

export const projectsDictionary = {
  en: {
    hero: {
      label: "Projects",

      headline: {
        introduction:
          "Selected work, built from",
        emphasis:
          "idea to implementation.",
      },

      description:
        "A curated selection of academic, professional, collaborative, and personal projects across full-stack development, frontend implementation, and data.",

      meta: {
        count: "05 Projects",
        contexts:
          "Academic + Professional + Personal",
        disciplines:
          "Full-Stack + Frontend + Data",
      },
    },

    next: {
      label: "Next",

      headline: {
        introduction:
          "Interested in the work",
        emphasis:
          "behind these projects?",
      },

      description:
        "I’m open to discussing the implementation, technical decisions, and lessons behind the projects shown here.",

      actions: {
        contact: "Get in Touch",
        experience:
          "View Experience",
      },
    },
  },

  id: {
    hero: {
      label: "Proyek",

      headline: {
        introduction:
          "Proyek pilihan, dibangun dari",
        emphasis:
          "ide hingga implementasi.",
      },

      description:
        "Pilihan proyek akademik, profesional, kolaboratif, dan personal yang mencakup full-stack development, pengembangan frontend, serta data.",

      meta: {
        count: "05 Proyek",
        contexts:
          "Akademik + Profesional + Personal",
        disciplines:
          "Full-Stack + Frontend + Data",
      },
    },

    next: {
      label: "Selanjutnya",

      headline: {
        introduction:
          "Tertarik dengan proses",
        emphasis:
          "di balik proyek-proyek ini?",
      },

      description:
        "Saya terbuka untuk membahas implementasi, keputusan teknis, dan pembelajaran dari proyek-proyek yang ditampilkan di sini.",

      actions: {
        contact: "Hubungi Saya",
        experience:
          "Lihat Pengalaman",
      },
    },
  },
} satisfies Record<
  Locale,
  ProjectsDictionary
>;