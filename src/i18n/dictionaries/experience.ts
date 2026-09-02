import type { Locale } from "@/i18n/config";

type ExperienceDictionary = {
  hero: {
    label: string;

    headline: {
      introduction: string;
      emphasis: string;
      continuation: string;
    };

    description: string;

    stats: {
      internships: string;
      areas: string;
    };
  };

  timeline: {
    label: string;
    title: string;
    latestFirst: string;
    mostRecent: string;
    earlier: string;
    workedOn: string;

    items: {
      "diskominfosantik-bekasi": {
        category: string;
        type: string;

        headline: {
          introduction: string;
          emphasis: string;
        };

        description: string;
        highlights: readonly [
          string,
          string,
          string,
          string,
        ];
      };

      "bank-muamalat": {
        category: string;
        type: string;

        headline: {
          introduction: string;
          emphasis: string;
        };

        description: string;
        highlights: readonly [
          string,
          string,
          string,
          string,
        ];
      };
    };

    visuals: {
      stepCountLabel: string;

      frontendFlow: string;

      frontendFlowSteps: readonly [
        string,
        string,
        string,
        string,
      ];

      analysisFlow: string;

      analysisFlowSteps: readonly [
        string,
        string,
        string,
        string,
      ];
    };
  };

  takeaways: {
    label: string;

    headline: {
      introduction: string;
      emphasis: string;
    };

    description: string;

    items: readonly [
      {
        title: string;
        description: string;
      },
      {
        title: string;
        description: string;
      },
      {
        title: string;
        description: string;
      },
    ];
  };

  next: {
    label: string;

    headline: {
      introduction: string;
      emphasis: string;
    };

    description: string;

    actions: {
      projects: string;
      resume: string;
    };
  };
};

export const experienceDictionary = {
  en: {
    hero: {
      label: "Experience",

      headline: {
        introduction: "Professional",
        emphasis: "chapters",
        continuation: "so far.",
      },

      description:
        "Two internships that shaped how I approach technical work. One focused on frontend delivery, while the other involved turning relational data into useful business insights.",

      stats: {
        internships: "02 Internships",
        areas:
          "Web Development + Business Intelligence",
      },
    },

    timeline: {
      label: "Timeline",
      title: "Experience",
      latestFirst: "Latest first",
      mostRecent: "Most Recent",
      earlier: "Earlier",
      workedOn: "What I worked on",

      items: {
        "diskominfosantik-bekasi": {
          category:
            "Frontend Development",

          type: "Internship",

          headline: {
            introduction:
              "From approved designs to",
            emphasis:
              "responsive web pages.",
          },

          description:
            "At Diskominfosantik Kabupaten Bekasi, I worked on the frontend of the Disarpus Kabupaten Bekasi website. My focus was implementing approved Figma designs in Next.js, developing key pages, and resolving responsive layout issues across different breakpoints.",

          highlights: [
            "Developed responsive frontend pages using Next.js based on Figma designs.",
            "Implemented key sections including the homepage, navigation, and news pages.",
            "Collaborated with development and design teams to translate approved designs into functional interfaces.",
            "Fixed layout and responsive UI issues during development.",
          ],
        },

        "bank-muamalat": {
          category:
            "Business Intelligence",

          type:
            "Project-Based Internship",

          headline: {
            introduction:
              "Turning relational data into",
            emphasis:
              "clearer business insights.",
          },

          description:
            "During a project-based internship with Bank Muamalat, I worked with relational sales data in Google BigQuery, organized it into structured master tables, built interactive Looker Studio dashboards, and developed recommendations based on the analysis.",

          highlights: [
            "Analyzed relational database structures and data relationships using Google BigQuery.",
            "Created master tables for customer, product, and transaction data.",
            "Designed interactive sales dashboards using Looker Studio.",
            "Provided data-driven recommendations based on sales performance and regional trends.",
          ],
        },
      },

      visuals: {
        stepCountLabel:
          "Steps",

        frontendFlow:
          "Frontend delivery flow",

        frontendFlowSteps: [
          "Approved Figma Design",
          "Next.js Implementation",
          "Responsive UI",
          "QA & UI Fixes",
        ],

        analysisFlow:
          "Data analysis flow",

        analysisFlowSteps: [
          "Google BigQuery",
          "Master tables",
          "Looker Studio",
          "Insights",
        ],
      },
    },

    takeaways: {
      label:
        "What I Took Forward",

      headline: {
        introduction:
          "Different contexts,",
        emphasis:
          "shared fundamentals.",
      },

      description:
        "Working across web development and business intelligence reinforced the same fundamentals: understand the problem, keep the work structured, and communicate clearly throughout the process.",

      items: [
        {
          title:
            "Implementation",
          description:
            "Turning requirements and approved designs into working, functional outputs.",
        },
        {
          title:
            "Structure",
          description:
            "Organizing interfaces, data, and analysis so the work stays clear and easier to work with.",
        },
        {
          title:
            "Collaboration",
          description:
            "Working through feedback and implementation details as part of a broader development process.",
        },
      ],
    },

    next: {
      label: "Next",

      headline: {
        introduction:
          "See how those experiences shaped",
        emphasis:
          "my projects.",
      },

      description:
        "I’m currently open to full-time opportunities in web development, particularly frontend and full-stack roles.",

      actions: {
        projects:
          "Explore Projects",
        resume:
          "View Resume",
      },
    },
  },

  id: {
    hero: {
      label: "Pengalaman",

      headline: {
        introduction:
          "Perjalanan",
        emphasis:
          "profesional",
        continuation:
          "sejauh ini.",
      },

      description:
        "Dua pengalaman magang yang membentuk cara saya mengerjakan pekerjaan teknis. Satu berfokus pada implementasi frontend, sementara yang lain pada pengolahan data relasional menjadi insight bisnis yang berguna.",

      stats: {
        internships: "02 Magang",
        areas:
          "Web Development + Business Intelligence",
      },
    },

    timeline: {
      label: "Timeline",
      title: "Pengalaman",
      latestFirst:
        "Terbaru dulu",
      mostRecent:
        "Terbaru",
      earlier: "Lebih Awal",
      workedOn:
        "Yang Saya Kerjakan",

      items: {
        "diskominfosantik-bekasi": {
          category:
            "Frontend Development",

          type: "Magang",

          headline: {
            introduction:
              "Dari desain yang disetujui menjadi",
            emphasis:
              "halaman web responsif.",
          },

          description:
            "Di Diskominfosantik Kabupaten Bekasi, saya mengerjakan frontend website Disarpus Kabupaten Bekasi. Fokus saya adalah mengimplementasikan desain Figma yang telah disetujui dengan Next.js, mengembangkan halaman utama, serta memperbaiki masalah layout responsif di berbagai breakpoint.",

          highlights: [
            "Mengembangkan halaman frontend responsif menggunakan Next.js berdasarkan desain Figma.",
            "Mengimplementasikan bagian utama website termasuk homepage, navigasi, dan halaman berita.",
            "Berkolaborasi dengan tim development dan design dalam mengimplementasikan desain menjadi antarmuka yang fungsional.",
            "Memperbaiki masalah layout dan UI responsif selama proses development.",
          ],
        },

        "bank-muamalat": {
          category:
            "Business Intelligence",

          type:
            "Project-Based Internship",

          headline: {
            introduction:
              "Mengubah data relasional menjadi",
            emphasis:
              "insight bisnis yang lebih jelas.",
          },

          description:
            "Dalam project-based internship bersama Bank Muamalat, saya mengolah data penjualan relasional di Google BigQuery, menyusunnya menjadi master table terstruktur, membangun dashboard interaktif di Looker Studio, dan menyusun rekomendasi berdasarkan hasil analisis.",

          highlights: [
            "Menganalisis struktur database relasional dan hubungan antar data menggunakan Google BigQuery.",
            "Membuat master table untuk data customer, product, dan transaction.",
            "Membangun dashboard penjualan interaktif menggunakan Looker Studio.",
            "Menyusun rekomendasi berbasis data berdasarkan performa penjualan dan tren regional.",
          ],
        },
      },

      visuals: {
        stepCountLabel:
          "Tahap",

        frontendFlow:
          "Alur implementasi frontend",

        frontendFlowSteps: [
          "Desain Figma Disetujui",
          "Implementasi Next.js",
          "UI Responsif",
          "QA & Perbaikan UI",
        ],

        analysisFlow:
          "Alur analisis data",

        analysisFlowSteps: [
          "Google BigQuery",
          "Master table",
          "Looker Studio",
          "Insight",
        ],
      },
    },

    takeaways: {
      label:
        "Yang Saya Pelajari",

      headline: {
        introduction:
          "Konteks berbeda,",
        emphasis:
          "fundamental yang sama.",
      },

      description:
        "Pengalaman di web development dan business intelligence memperkuat fundamental yang sama dalam cara saya bekerja: memahami masalah, menjaga pekerjaan tetap terstruktur, dan berkomunikasi dengan jelas sepanjang proses.",

      items: [
        {
          title:
            "Implementasi",
          description:
            "Mengubah kebutuhan dan desain yang telah disetujui menjadi hasil yang fungsional dan dapat digunakan.",
        },
        {
          title:
            "Struktur",
          description:
            "Menata antarmuka, data, dan analisis agar pekerjaan tetap jelas dan mudah dikembangkan.",
        },
        {
          title:
            "Kolaborasi",
          description:
            "Menindaklanjuti feedback dan detail implementasi sebagai bagian dari proses development yang lebih luas.",
        },
      ],
    },

    next: {
      label: "Selanjutnya",

      headline: {
        introduction:
          "Lihat bagaimana pengalaman tersebut membentuk",
        emphasis:
          "proyek yang saya kerjakan.",
      },

      description:
        "Saat ini saya terbuka untuk peluang full-time di web development, khususnya pada role frontend dan full-stack.",

      actions: {
        projects:
          "Jelajahi Proyek",
        resume:
          "Lihat Resume",
      },
    },
  },
} satisfies Record<
  Locale,
  ExperienceDictionary
>;