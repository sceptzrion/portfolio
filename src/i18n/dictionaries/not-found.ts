import type { Locale } from "@/i18n/config";

type NotFoundDictionary = {
  label: string;
  title: string;
  description: string;
  action: string;
};

export const notFoundDictionary = {
  en: {
    label: "404 / Page Not Found",

    title:
      "Uh-oh! You seem to be lost.",

    description:
      "The page you’re looking for may not be available yet, may have moved, or the address might be incorrect.",

    action:
      "Back to Home",
  },

  id: {
    label:
      "404 / Halaman Tidak Ditemukan",

    title:
      "Uh-oh! Sepertinya Anda tersesat.",

    description:
      "Halaman yang Anda cari mungkin belum tersedia, telah dipindahkan, atau alamatnya tidak tepat.",

    action:
      "Kembali ke Beranda",
  },
} satisfies Record<
  Locale,
  NotFoundDictionary
>;