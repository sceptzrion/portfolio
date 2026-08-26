import type { Locale } from "@/i18n/config";

type ResumeDictionary = {
  label: string;
  title: string;
  description: string;

  actions: {
    open: string;
    download: string;
  };

  viewer: {
    label: string;
    loading: string;

    unavailable: {
      label: string;
      title: string;
      description: string;
    };

    error: {
      title: string;
      description: string;
    };

    page: string;
    of: string;
  };
};

export const resumeDictionary = {
  en: {
    label: "Resume",

    title: "Curriculum Vitae",

    description:
      "Preview my latest resume directly here, or open the original PDF when needed.",

    actions: {
      open: "Open PDF",
      download: "Download PDF",
    },

    viewer: {
      label: "Resume Preview",

      loading:
        "Loading resume...",

      unavailable: {
        label: "Preparing",
        title:
          "The latest resume is being prepared.",
        description:
          "The preview will be available here once the latest version is ready.",
      },

      error: {
        title:
          "The resume preview could not be loaded.",
        description:
          "You can still open or download the original PDF using the options above.",
      },

      page: "Page",
      of: "of",
    },
  },

  id: {
    label: "Resume",

    title: "Curriculum Vitae",

    description:
      "Lihat resume terbaru saya langsung di halaman ini, atau buka file PDF aslinya jika diperlukan.",

    actions: {
      open: "Buka PDF",
      download: "Unduh PDF",
    },

    viewer: {
      label: "Preview Resume",

      loading:
        "Memuat resume...",

      unavailable: {
        label: "Sedang Disiapkan",
        title:
          "Resume terbaru sedang disiapkan.",
        description:
          "Preview akan tersedia di sini setelah versi terbaru selesai disiapkan.",
      },

      error: {
        title:
          "Preview resume tidak dapat dimuat.",
        description:
          "Anda tetap dapat membuka atau mengunduh file PDF asli melalui opsi di atas.",
      },

      page: "Halaman",
      of: "dari",
    },
  },
} satisfies Record<
  Locale,
  ResumeDictionary
>;