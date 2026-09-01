import type { Locale } from "@/i18n/config";

type ResumeDictionary = {
  label: string;
  title: string;
  description: string;

  preview: {
    label: string;
    hint: string;
    source: string;
    open: string;
    frameTitle: string;
    unavailable: string;
  };
};

export const resumeDictionary = {
  en: {
    label: "Resume",

    title:
      "Curriculum Vitae",

    description:
      "A compact preview of my latest CV. Select the document preview to open the full version in Google Drive.",

    preview: {
      label:
        "CV Preview",

      hint:
        "Select the preview to view the full document.",

      source:
        "Google Drive",

      open:
        "Open Full CV",

      frameTitle:
        "Curriculum Vitae preview",

      unavailable:
        "The latest CV is currently unavailable.",
    },
  },

  id: {
    label: "Resume",

    title:
      "Curriculum Vitae",

    description:
      "Preview ringkas CV terbaru saya. Klik preview dokumen untuk membuka versi lengkap di Google Drive.",

    preview: {
      label:
        "Preview CV",

      hint:
        "Klik preview untuk melihat dokumen lengkap.",

      source:
        "Google Drive",

      open:
        "Buka CV Lengkap",

      frameTitle:
        "Preview Curriculum Vitae",

      unavailable:
        "CV terbaru saat ini belum tersedia.",
    },
  },
} satisfies Record<
  Locale,
  ResumeDictionary
>;
