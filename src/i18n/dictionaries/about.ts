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
        "Saya tertarik mengubah ide dan desain antarmuka menjadi produk yang fungsional, terutama melalui frontend engineering, full-stack development, integrasi database, serta pengembangan aplikasi yang terstruktur.",

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
  },
} satisfies Record<
  Locale,
  AboutDictionary
>;