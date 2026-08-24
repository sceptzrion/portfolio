import type { Locale } from "@/i18n/config";

type SharedDictionary = {
  location: string;

  navigation: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    contact: string;
  };

  resume: {
    label: string;
    view: string;
  };

  language: {
    label: string;
    switchToEnglish: string;
    switchToIndonesian: string;
  };

  theme: {
    toggle: string;
    switchToDark: string;
    switchToLight: string;
  };

  navbar: {
    primaryLabel: string;
    mobileLabel: string;
    mobileLinksLabel: string;
    openMenu: string;
    closeMenu: string;
  };

  footer: {
    navigation: string;
    elsewhere: string;
    navigationLabel: string;
    description: string;
    bottomNote: string;
  };
};

export const sharedDictionary = {
  en: {
    location:
      "Karawang, West Java, Indonesia",

    navigation: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },

    resume: {
      label: "Resume",
      view: "View Resume",
    },

    language: {
      label: "Language",
      switchToEnglish:
        "Switch to English",
      switchToIndonesian:
        "Switch to Bahasa Indonesia",
    },

    theme: {
      toggle: "Toggle color theme",
      switchToDark:
        "Switch to dark mode",
      switchToLight:
        "Switch to light mode",
    },

    navbar: {
      primaryLabel:
        "Primary navigation",
      mobileLabel:
        "Mobile navigation",
      mobileLinksLabel:
        "Mobile navigation links",
      openMenu:
        "Open navigation menu",
      closeMenu:
        "Close navigation menu",
    },

    footer: {
      navigation: "Sitemap",
      elsewhere: "Elsewhere",
      navigationLabel:
        "Footer navigation",
      description:
        "Full-Stack Web Developer based in Karawang, West Java, Indonesia, building useful web experiences from interface to implementation.",
      bottomNote:
        "Designed & built with care · Karawang, ID",
    },
  },

  id: {
    location:
      "Karawang, Jawa Barat, Indonesia",

    navigation: {
      home: "Beranda",
      about: "Tentang",
      experience: "Pengalaman",
      projects: "Proyek",
      contact: "Kontak",
    },

    resume: {
      label: "Resume",
      view: "Lihat Resume",
    },

    language: {
      label: "Bahasa",
      switchToEnglish:
        "Ganti ke bahasa Inggris",
      switchToIndonesian:
        "Ganti ke bahasa Indonesia",
    },

    theme: {
      toggle: "Ubah tema warna",
      switchToDark:
        "Ganti ke mode gelap",
      switchToLight:
        "Ganti ke mode terang",
    },

    navbar: {
      primaryLabel:
        "Navigasi utama",
      mobileLabel:
        "Navigasi mobile",
      mobileLinksLabel:
        "Link navigasi mobile",
      openMenu:
        "Buka menu navigasi",
      closeMenu:
        "Tutup menu navigasi",
    },

    footer: {
      navigation: "Navigasi",
      elsewhere: "Lainnya",
      navigationLabel:
        "Navigasi footer",
      description:
        "Full-Stack Web Developer berdomisili di Karawang, Jawa Barat, Indonesia, dengan fokus membangun pengalaman web yang fungsional dari interface hingga implementasi.",
      bottomNote:
        "Designed & built with care · Karawang, ID",
    },
  },
} satisfies Record<
  Locale,
  SharedDictionary
>;