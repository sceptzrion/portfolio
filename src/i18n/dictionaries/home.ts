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

  selectedWork: {
    label: string;

    headline: {
      introduction: string;
      emphasis: string;
    };

    description: string;

    actions: {
      allProjects: string;
      viewProject: string;
      readCaseStudy: string;
    };

    flagshipLabel: string;

    details: {
      role: string;
      context: string;
    };

    projects: {
      edubidan: {
        tagline: string;
        context: string;
      };

      disarpus: {
        tagline: string;
      };

      lestari: {
        tagline: string;
      };
    };
  };

  aboutPreview: {
  label: string;

  headline: {
    introduction: string;
    emphasis: string;
    continuation: string;
  };

  introduction: string;
  perspective: string;

  education: {
    label: string;
    degree: string;
  };

  portraitPlaceholder: string;

  action: string;

  approach: {
    label: string;
    description: string;
  };
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
        statement:
          "I build",
        emphasis:
          "useful",
        continuation:
          "digital experiences for the web.",
      },

      description:
        "A Full-Stack Web Developer and fresh Informatics graduate focused on turning interface designs and ideas into responsive, maintainable, and functional web applications.",

      actions: {
        primary:
          "View My Work",
        secondary:
          "About Me",
      },

      stats: {
        gpa: "GPA",
        honours: "Honours",
        internships:
          "Internships",
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

    selectedWork: {
      label: "Selected Work",

      headline: {
        introduction:
          "Projects built through",
        emphasis:
          "design and implementation.",
      },

      description:
        "A selection of academic and professional work across full-stack development, frontend implementation, and collaborative product development.",

      actions: {
        allProjects:
          "All projects",
        viewProject:
          "View project",
        readCaseStudy:
          "Read case study",
      },

      flagshipLabel:
        "Flagship Project",

      details: {
        role: "Role",
        context: "Context",
      },

      projects: {
        edubidan: {
          tagline:
            "A role-based Learning Management System for midwifery education with interactive modules, randomized quizzes, and progress tracking.",
          context:
            "Bachelor's Thesis Project",
        },

        disarpus: {
          tagline:
            "Responsive frontend development for the revitalization of a regional government archives and library website.",
        },

        lestari: {
          tagline:
            "A collaborative digital platform for waste pickup, point tracking, educational content, and community rewards.",
        },
      },
    },

    aboutPreview: {
        label: "About",

        headline: {
            introduction:
            "Building technology with",
            emphasis:
            "functionality",
            continuation:
            "and people in mind.",
        },

        introduction:
            "I’m a fresh Informatics graduate with hands-on experience building responsive interfaces and web applications through internships, academic projects, and collaborative development.",

        perspective:
            "I enjoy translating ideas and interface designs into functional products, with particular interest in frontend engineering, full-stack development, database integration, and maintainable application development.",

        education: {
            label: "Education",
            degree:
            "Bachelor of Informatics",
        },

        portraitPlaceholder:
            "Portrait placeholder",

        action:
            "More About Me",

        approach: {
            label: "Approach",
            description:
            "From interface decisions to implementation, I aim to build digital products that are clear to use, practical to maintain, and purposeful in what they solve.",
        },
        },
  },

  id: {
    hero: {
      availability:
        "Terbuka untuk peluang baru",

      headline: {
        introduction:
          "Halo, saya Rizqi.",
        statement:
          "Membangun pengalaman digital yang",
        emphasis:
          "bermanfaat",
        continuation:
          "untuk web.",
      },

      description:
        "Full-Stack Web Developer dan Fresh Graduate Informatika yang berfokus mengubah desain antarmuka dan ide menjadi aplikasi web yang responsif, terstruktur, dan fungsional.",

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

    selectedWork: {
      label: "Proyek Pilihan",

      headline: {
        introduction:
          "Proyek yang dibangun dari",
        emphasis:
          "desain hingga implementasi.",
      },

      description:
        "Pilihan proyek akademik dan profesional yang mencakup full-stack development, implementasi frontend, serta pengembangan produk secara kolaboratif.",

      actions: {
        allProjects:
          "Semua Proyek",
        viewProject:
          "Lihat Proyek",
        readCaseStudy:
          "Lihat Studi Kasus",
      },

      flagshipLabel:
        "Flagship Project",

      details: {
        role: "Peran",
        context: "Konteks",
      },

      projects: {
        edubidan: {
          tagline:
            "Learning Management System untuk pendidikan kebidanan dengan sistem berbasis role, modul interaktif, kuis teracak, dan pelacakan progres.",
          context:
            "Proyek Skripsi",
        },

        disarpus: {
          tagline:
            "Pengembangan frontend responsif untuk revitalisasi website arsip dan perpustakaan Kabupaten Bekasi.",
        },

        lestari: {
          tagline:
            "Platform digital kolaboratif untuk layanan penjemputan sampah, pencatatan poin, konten edukasi, dan reward komunitas.",
        },
      },
    },

    aboutPreview: {
        label: "Tentang",

        headline: {
            introduction:
            "Membangun teknologi dengan mengutamakan",
            emphasis:
            "fungsionalitas",
            continuation:
            "dan kebutuhan pengguna.",
        },

        introduction:
            "Saya adalah Fresh Graduate Informatika dengan pengalaman praktis dalam membangun antarmuka responsif dan aplikasi web melalui magang, proyek akademik, serta pengembangan kolaboratif.",

        perspective:
            "Saya tertarik mengubah ide dan desain antarmuka menjadi produk yang fungsional, terutama melalui frontend engineering, full-stack development, integrasi database, serta pengembangan aplikasi yang terstruktur.",

        education: {
            label: "Pendidikan",
            degree:
            "Sarjana Informatika",
        },

        portraitPlaceholder:
            "Portrait akan ditambahkan",

        action:
            "Selengkapnya",

        approach: {
            label: "Approach",
            description:
            "Dari keputusan antarmuka hingga implementasi, saya berupaya membangun produk digital yang jelas digunakan, mudah dikembangkan, dan tepat guna dalam menyelesaikan masalah.",
        },
        },
  },
} satisfies Record<
  Locale,
  HomeDictionary
>;