import type { Locale } from "@/i18n/config";

type AboutDictionary = {
  hero: {
    label: string;

    headline: {
      introduction: string;
      emphasis: string;
    };

    introduction: string;
    perspective: string;

    quickFacts: {
      "Based in": string;
      "Current focus": string;
      "Career stage": string;
    };
  };

  story: {
    label: string;

    headline: {
      introduction: string;
      emphasis: string;
    };

    paragraphs: readonly [
      string,
      string,
    ];
  };

  education: {
    label: string;
    resultLabel: string;
    degree: string;
    location: string;
    description: string;
  };

  learning: {
    label: string;

    headline: {
      introduction: string;
      emphasis: string;
    };

    description: string;

    items: readonly [
      {
        period: string;
        description: string;
        stagePeriods: readonly [];
      },
      {
        period: string;
        description: string;
        stagePeriods: readonly [
          string,
          string,
        ];
      },
    ];
  };

  achievement: {
    label: string;
    description: string;
  };

  focus: {
    label: string;

    headline: {
      introduction: string;
      emphasis: string;
    };

    description: string;

    descriptions: {
      "Frontend Engineering": string;
      "Full-Stack Development": string;
      "Database Integration": string;
    };

    closingNote: string;
  };

  next: {
    label: string;

    headline: {
      introduction: string;
      emphasis: string;
    };

    actions: {
      experience: string;
      projects: string;
    };
  };
};

export const aboutDictionary = {
  en: {
    hero: {
      label: "About",

      headline: {
        introduction:
          "Building with curiosity, structure, and a",
        emphasis:
          "practical mindset.",
      },

      introduction:
        "I’m a fresh Informatics graduate with hands-on experience building responsive interfaces and web applications through internships, academic projects, and collaborative development.",

      perspective:
        "I enjoy translating ideas and interface designs into functional products, with particular interest in frontend engineering, full-stack development, database integration, and maintainable application development.",

      quickFacts: {
        "Based in":
          "Based in",
        "Current focus":
          "Current focus",
        "Career stage":
          "Career stage",
      },
    },

    story: {
      label: "Story",

      headline: {
        introduction:
          "From informatics foundations to",
        emphasis:
          "building for the web.",
      },

      paragraphs: [
        "My interest in building for the web grew from studying Informatics and turning academic concepts into working applications. I became especially interested in the point where interface decisions, application logic, and data need to work together as one product.",
        "Through academic projects and internships, I gained hands-on experience translating interface designs into responsive pages, working with application data, and collaborating throughout the development process. Those experiences shaped a practical approach to software: understand the problem, keep the implementation clear, and build with both users and maintainability in mind.",
      ],
    },

    education: {
      label: "Education",

      resultLabel:
        "Academic result",

      degree:
        "Bachelor of Informatics",

      location:
        "Karawang, West Java",

      description:
        "Built a foundation in software engineering and full-stack development through academic study, hands-on projects, and practical development experience.",
    },

    learning: {
      label:
        "Learning & Training",

      headline: {
        introduction:
          "Learning beyond the",
        emphasis:
          "classroom.",
      },

      description:
        "Structured learning experiences that complemented my academic background with practical development work and collaborative projects.",

      items: [
        {
          period:
            "Sep — Dec 2024",

          description:
            "Completed a certified independent study program focused on full-stack web development and data science.",

          stagePeriods: [],
        },
        {
          period:
            "Aug — Nov 2025",

          description:
            "Participated in Samsung Innovation Campus Batch 7 as part of a team and progressed through Stage 1 and Stage 2 of the program.",

          stagePeriods: [
            "15 Aug — 13 Sep 2025",
            "26 Sep — 1 Nov 2025",
          ],
        },
      ],
    },

    achievement: {
      label:
        "Achievement",

      description:
        "Awarded 2nd place for an innovative information technology project concept.",
    },

    focus: {
      label: "Focus",

      headline: {
        introduction:
          "The areas I keep",
        emphasis:
          "coming back to.",
      },

      description:
        "Areas that continue to shape the kind of problems I enjoy working through and the direction I want to keep developing.",

      descriptions: {
        "Frontend Engineering":
          "Translating interface designs into responsive, clear, and maintainable web experiences.",

        "Full-Stack Development":
          "Connecting interfaces, application logic, authentication, services, and data into functional web applications.",

        "Database Integration":
          "Working with structured application data and building reliable connections between products and their data layer.",
      },

      closingNote:
        "Technologies evolve. Fundamentals stay useful.",
    },

    next: {
      label: "Next",

      headline: {
        introduction:
          "See how that translates into",
        emphasis:
          "real work.",
      },

      actions: {
        experience:
          "View Experience",
        projects:
          "Explore Projects",
      },
    },
  },

  id: {
    hero: {
      label: "Tentang",

      headline: {
        introduction:
          "Membangun dengan rasa ingin tahu, terstruktur, dan",
        emphasis:
          "mindset praktis.",
      },

      introduction:
        "Saya adalah Fresh Graduate Informatika dengan pengalaman praktis dalam membangun antarmuka responsif dan aplikasi web melalui magang, proyek akademik, serta pengembangan kolaboratif.",

      perspective:
        "Tertarik mengubah ide dan desain antarmuka menjadi produk yang fungsional, terutama melalui frontend engineering, full-stack development, integrasi database, serta pengembangan aplikasi yang terstruktur.",

      quickFacts: {
        "Based in":
          "Berdomisili di",
        "Current focus":
          "Fokus saat ini",
        "Career stage":
          "Tahap karier",
      },
    },

    story: {
      label: "Story",

      headline: {
        introduction:
          "Dari fondasi Informatika hingga",
        emphasis:
          "membangun untuk web.",
      },

      paragraphs: [
        "Ketertarikan saya pada pengembangan web tumbuh selama mempelajari Informatika dan mengubah konsep akademik menjadi aplikasi yang dapat digunakan. Saya semakin tertarik pada bagaimana antarmuka, logika aplikasi, dan data perlu bekerja bersama sebagai satu produk.",
        "Melalui proyek akademik dan magang, saya memperoleh pengalaman praktis dalam mengimplementasikan desain antarmuka menjadi halaman responsif, bekerja dengan data aplikasi, serta berkolaborasi sepanjang proses development. Pengalaman tersebut membentuk pendekatan saya dalam software development: memahami masalah, menjaga implementasi tetap jelas, serta membangun dengan mempertimbangkan pengguna dan kemudahan pengembangan.",
      ],
    },

    education: {
      label: "Pendidikan",

      resultLabel:
        "Capaian Akademik",

      degree:
        "Sarjana Informatika",

      location:
        "Karawang, Jawa Barat",

      description:
        "Membangun fondasi dalam software engineering dan full-stack development melalui pembelajaran akademik, proyek praktik, serta pengalaman development secara langsung.",
    },

    learning: {
      label:
        "Pembelajaran & Pelatihan",

      headline: {
        introduction:
          "Belajar di luar",
        emphasis:
          "ruang kelas.",
      },

      description:
        "Pengalaman belajar terstruktur yang melengkapi latar belakang akademik saya melalui praktik development dan proyek kolaboratif.",

      items: [
        {
          period:
            "Sep — Des 2024",

          description:
            "Menyelesaikan program studi independen bersertifikat yang berfokus pada full-stack web development dan data science.",

          stagePeriods: [],
        },
        {
          period:
            "Agu — Nov 2025",

          description:
            "Berpartisipasi dalam Samsung Innovation Campus Batch 7 sebagai bagian dari tim serta mengikuti Stage 1 dan Stage 2 dalam program.",

          stagePeriods: [
            "15 Agu — 13 Sep 2025",
            "26 Sep — 1 Nov 2025",
          ],
        },
      ],
    },

    achievement: {
      label:
        "Pencapaian",

      description:
        "Meraih 2nd Place atas konsep proyek teknologi informasi yang inovatif.",
    },

    focus: {
      label: "Fokus",

      headline: {
        introduction:
          "Area yang terus",
        emphasis:
          "saya kembangkan.",
      },

      description:
        "Area yang terus membentuk jenis masalah yang ingin saya selesaikan serta arah kemampuan yang ingin saya kembangkan.",

      descriptions: {
        "Frontend Engineering":
          "Mengimplementasikan desain antarmuka menjadi pengalaman web yang responsif, terstruktur, dan mudah dikembangkan.",

        "Full-Stack Development":
          "Menghubungkan antarmuka, logika aplikasi, autentikasi, layanan, dan data menjadi aplikasi web yang fungsional.",

        "Database Integration":
          "Mengelola data aplikasi yang terstruktur dan membangun integrasi yang andal antara produk dan data layer.",
      },

      closingNote:
        "Technologies evolve. Fundamentals stay useful.",
    },

    next: {
      label: "Next",

      headline: {
        introduction:
          "Lihat bagaimana semua itu diterapkan dalam",
        emphasis:
          "karya nyata.",
      },

      actions: {
        experience:
          "Lihat Pengalaman",
        projects:
          "Jelajahi Proyek",
      },
    },
  },
} satisfies Record<
  Locale,
  AboutDictionary
>;