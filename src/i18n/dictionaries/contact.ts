import type { Locale } from "@/i18n/config";

type ContactDictionary = {
  label: string;

  hero: {
    headline: {
      introduction: string;
      emphasis: string;
    };
    description: string;
  };

  cards: {
    email: string;
    emailCopy: string;
    emailCopied: string;
    linkedin: string;
    resume: string;
    resumeValue: string;
    location: string;
  };

  panel: {
    label: string;
    title: string;
    description: string;
    emailAction: string;
    resumeAction: string;
    note: string;
  };
};

export const contactDictionary = {
  en: {
    label: "Contact",

    hero: {
      headline: {
        introduction:
          "Let’s talk about",
        emphasis:
          "what’s next.",
      },

      description:
        "Have an opportunity, collaboration, or idea in mind? Feel free to reach out through the channels below.",
    },

    cards: {
        email: "Email",
        emailCopy: "Copy",
        emailCopied: "Copied",
        linkedin: "LinkedIn",
        resume: "Resume",
        resumeValue: "View Curriculum Vitae",
        location: "Location",
    },

    panel: {
      label: "Availability",
      title:
        "Open to opportunities.",
      description:
        "I’m currently open to full-time roles, collaborations, and relevant opportunities in web development and digital products.",
      emailAction:
        "Send an Email",
      resumeAction:
        "View Resume",
      note:
        "Email is the best way to start a conversation.",
    },
  },

  id: {
    label: "Kontak",

    hero: {
      headline: {
        introduction:
          "Mari bahas",
        emphasis:
          "langkah berikutnya.",
      },

      description:
        "Punya peluang, kolaborasi, atau ide yang ingin dibahas? Anda dapat menghubungi saya melalui beberapa kanal berikut.",
    },

    cards: {
        email: "Email",
        emailCopy: "Salin",
        emailCopied: "Tersalin",
        linkedin: "LinkedIn",
        resume: "Resume",
        resumeValue: "Lihat Curriculum Vitae",
        location: "Lokasi",
    },

    panel: {
      label: "Ketersediaan",
      title:
        "Terbuka untuk peluang baru.",
      description:
        "Saat ini saya terbuka untuk posisi full-time, kolaborasi, dan peluang yang relevan di bidang web development serta produk digital.",
      emailAction:
        "Kirim Email",
      resumeAction:
        "Lihat Resume",
      note:
        "Email adalah cara terbaik untuk memulai percakapan.",
    },
  },
} satisfies Record<
  Locale,
  ContactDictionary
>;