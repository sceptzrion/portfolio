import type { Locale } from "@/i18n/config";

type HomeDictionary = {
  hero: {
    availability: string;

    headline: {
      introduction: string;
      statement: string;
      emphasis: string;
      continuation: string;
    };

    description: string;

    actions: {
      primary: string;
      secondary: string;
    };

    stats: {
      gpa: string;
      honours: string;
      internships: string;
      selectedProjects: string;
    };

    portraitLabel: string;
    portraitComingLater: string;
    featuredProject: string;
    scrollHint: string;
  };
};

export const homeDictionary = {
  en: {
    hero: {
      availability:
        "Available for opportunities",

      headline: {
        introduction:
          "Hi, I’m Rizqi.",
        statement: "I build",
        emphasis: "useful",
        continuation:
          "digital experiences for the web.",
      },

      description:
        "A Full-Stack Web Developer and fresh Informatics graduate focused on turning interface designs and ideas into responsive, maintainable, and functional web applications.",

      actions: {
        primary: "View My Work",
        secondary: "About Me",
      },

      stats: {
        gpa: "GPA",
        honours: "Honours",
        internships: "Internships",
        selectedProjects:
          "Selected Projects",
      },

      portraitLabel:
        "Portrait placeholder for Rizqi",
      portraitComingLater:
        "Portrait coming later",
      featuredProject:
        "Featured project",
      scrollHint:
        "Scroll to explore",
    },
  },

  id: {
    hero: {
        availability:
        "Terbuka untuk peluang baru",

        headline: {
        introduction:
            "Hai, saya Rizqi.",
        statement:
            "Membangun pengalaman digital yang",
        emphasis:
            "bermanfaat",
        continuation:
            "untuk web.",
        },

        description:
        "Full-Stack Web Developer dan Fresh Graduate Informatika yang berfokus mengubah desain interface dan ide menjadi aplikasi web yang responsif, terstruktur, dan fungsional.",

        actions: {
        primary:
            "Lihat Proyek Saya",
        secondary:
            "Tentang Saya",
        },

        stats: {
        gpa: "IPK",
        honours: "Predikat",
        internships: "Magang",
        selectedProjects:
            "Proyek Pilihan",
        },

        portraitLabel:
        "Placeholder portrait Rizqi",
        portraitComingLater:
        "Portrait akan ditambahkan",
        featuredProject:
        "Proyek unggulan",
        scrollHint:
        "Scroll untuk melanjutkan",
    },
  },
} satisfies Record<
  Locale,
  HomeDictionary
>;