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

  grid: {
    filters: {
      all: string;
      "full-stack": string;
      frontend: string;
      "data-ml": string;
      academic: string;
      professional: string;
      personal: string;
    };

    labels: {
      featured: string;
      role: string;
      context: string;
      year: string;
    };

    actions: {
      viewCaseStudy: string;
      viewAllProjects: string;
    };

    empty: string;
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

    grid: {
      filters: {
        all: "All",
        "full-stack": "Full-Stack",
        frontend: "Frontend",
        "data-ml": "Data / ML",
        academic: "Academic",
        professional: "Professional",
        personal: "Personal",
      },

      labels: {
        featured: "Featured",
        role: "Role",
        context: "Context",
        year: "Year",
      },

      actions: {
        viewCaseStudy:
          "View Case Study",
        viewAllProjects:
          "View all projects",
      },

      empty:
        "No projects in this category yet.",
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
        contact: "Get in Touch",
        experience:
          "Lihat Pengalaman",
      },
    },

    grid: {
      filters: {
        all: "Semua",
        "full-stack": "Full-Stack",
        frontend: "Frontend",
        "data-ml": "Data / ML",
        academic: "Akademik",
        professional: "Profesional",
        personal: "Personal",
      },

      labels: {
        featured: "Unggulan",
        role: "Peran",
        context: "Konteks",
        year: "Tahun",
      },

      actions: {
        viewCaseStudy:
          "Lihat Studi Kasus",
        viewAllProjects:
          "Lihat semua proyek",
      },

      empty:
        "Belum ada proyek dalam kategori ini.",
    },
  },
} satisfies Record<
  Locale,
  ProjectsDictionary
>;

type ProjectIdContent = {
  tagline: string;
  category: string;
  context: string;
  role?: string;
};

export const projectsIdContent: Record<
  string,
  ProjectIdContent
> = {
  edubidan: {
    tagline:
      "Learning Management System untuk pendidikan kebidanan dengan sistem berbasis role, modul interaktif, kuis teracak, dan pelacakan progres.",

    category:
      "Full-Stack Web Development",

    context:
      "Proyek Skripsi",

    role:
      "Full-Stack Developer",
  },

  "disarpus-bekasi": {
    tagline:
      "Pengembangan frontend responsif untuk revitalisasi website arsip dan perpustakaan Kabupaten Bekasi.",

    category:
      "Frontend Development",

    context:
      "Proyek Magang",

    role:
      "Web Developer Intern",
  },

  "lestari-waste-bank": {
    tagline:
      "Platform digital kolaboratif untuk layanan penjemputan sampah, pencatatan poin, konten edukasi, dan reward komunitas.",

    category:
      "Frontend Development",

    context:
      "Proyek MSIB Kampus Merdeka",

    role:
      "Frontend Developer",
  },

  "gold-price-prediction": {
    tagline:
      "Sistem prediksi menggunakan linear regression dengan data harga emas dan USD/IDR, termasuk alur simulasi manual untuk mengeksplorasi nilai prediksi.",

    category:
      "Data & Prediction",

    context:
      "Sistem Prediksi",
  },

  healingaja: {
    tagline:
      "Landing page pariwisata yang berfokus menyajikan destinasi dan informasi perjalanan melalui pengalaman web yang jelas.",

    category:
      "Frontend Development",

    context:
      "Landing Page Pariwisata",
  },
};
