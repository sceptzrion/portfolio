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

  experiencePreview: {
    label: string;

    headline: {
      introduction: string;
      emphasis: string;
    };

    description: string;
    action: string;
    itemLabel: string;

    summaries: {
      "diskominfosantik-bekasi": string;
      "bank-muamalat": string;
    };
  };

  capabilities: {
    label: string;

    headline: {
        introduction: string;
        emphasis: string;
    };

    description: string;

    descriptions: {
        "01": string;
        "02": string;
        "03": string;
        "04": string;
    };

    technologiesLabel: string;
    toolkitNote: string;
    closingNote: string;
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
      label:
        "Selected Work",

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

    experiencePreview: {
      label: "Experience",

      headline: {
        introduction:
          "Experience across",
        emphasis:
          "web and data.",
      },

      description:
        "Hands-on experience across web development and business intelligence in professional and project-based environments.",

      action:
        "View full experience",

      itemLabel:
        "Experience",

      summaries: {
        "diskominfosantik-bekasi":
          "Developed responsive frontend pages for the Disarpus Kabupaten Bekasi website, translating approved Figma designs into functional Next.js interfaces and resolving layout issues across breakpoints.",

        "bank-muamalat":
          "Analyzed relational sales data in Google BigQuery and translated it into structured master tables, interactive Looker Studio dashboards, and data-driven business recommendations.",
      },
    },

    capabilities: {
    label: "Capabilities",

    headline: {
        introduction:
        "From interface to",
        emphasis:
        "data layer.",
    },

    description:
        "A selected overview of the areas and technologies I work with across modern web development, application development, and data.",

    descriptions: {
        "01":
        "Translating interface designs into responsive, structured, and maintainable web experiences.",

        "02":
        "Connecting application logic, data access, and user flows into functional web products.",

        "03":
        "Working with relational data from application storage through analysis and dashboarding.",

        "04":
        "Supporting development from design handoff and collaboration through testing and deployment.",
    },

    technologiesLabel:
        "Technologies for",

    toolkitNote:
        "Selected toolkit / not exhaustive",

    closingNote:
        "Technologies evolve. Fundamentals stay useful.",
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
      label:
        "Proyek Pilihan",

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

    experiencePreview: {
      label: "Pengalaman",

      headline: {
        introduction:
          "Pengalaman di bidang",
        emphasis:
          "web dan data.",
      },

      description:
        "Pengalaman praktis di bidang web development dan business intelligence melalui lingkungan profesional dan project-based.",

      action:
        "Lihat Pengalaman Lengkap",

      itemLabel:
        "Pengalaman",

      summaries: {
        "diskominfosantik-bekasi":
          "Mengembangkan halaman frontend responsif untuk website Disarpus Kabupaten Bekasi dengan menerapkan desain Figma yang telah disetujui menjadi antarmuka Next.js yang fungsional serta memperbaiki masalah layout di berbagai breakpoint.",

        "bank-muamalat":
          "Menganalisis data penjualan relasional di Google BigQuery dan mengolahnya menjadi master table terstruktur, dashboard interaktif di Looker Studio, serta rekomendasi bisnis berbasis data.",
      },
    },

    capabilities: {
    label: "Keahlian",

    headline: {
        introduction:
        "Dari antarmuka hingga",
        emphasis:
        "data layer.",
    },

    description:
        "Ringkasan area dan teknologi yang saya gunakan dalam web development, pengembangan aplikasi, dan data.",

    descriptions: {
        "01":
        "Menerjemahkan desain antarmuka menjadi pengalaman web yang responsif, terstruktur, dan mudah dikembangkan.",

        "02":
        "Menghubungkan logika aplikasi, akses data, dan alur pengguna menjadi produk web yang fungsional.",

        "03":
        "Mengelola data relasional mulai dari penyimpanan aplikasi hingga analisis dan visualisasi dashboard.",

        "04":
        "Mendukung proses development dari design handoff dan kolaborasi hingga testing dan deployment.",
    },

    technologiesLabel:
        "Teknologi untuk",

    toolkitNote:
        "Toolkit pilihan / bukan daftar lengkap",

    closingNote:
        "Technologies evolve. Fundamentals stay useful.",
    },
  },
} satisfies Record<
  Locale,
  HomeDictionary
>;