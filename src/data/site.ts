export const siteConfig = {
  shortName: "Rizqi",
  siteName: "Rizqi Yanuar",
  fullName:
    "Muhamad Ikhsan Rizqi Yanuar",
  monogram: "RY",

  role: "Full-Stack Web Developer",
  location:
    "Karawang, West Java, Indonesia",

  domain: "rizqiyr.id",
  url: "https://rizqiyr.id",

  hero: {
    primaryAction: {
      href: "#selected-work",
    },

    secondaryAction: {
      href: "#about",
    },
  },

  stats: [
    {
      key: "gpa",
      value: "3.93",
      suffix: "/ 4.00",
    },
    {
      key: "honours",
      value: "Cum Laude",
      suffix: "",
    },
    {
      key: "internships",
      value: "02",
      suffix: "",
    },
    {
      key: "selectedProjects",
      value: "05",
      suffix: "",
    },
  ],

  navigation: [
    {
      key: "home",
      href: "/",
    },
    {
      key: "about",
      href: "/about",
    },
    {
      key: "experience",
      href: "/experience",
    },
    {
      key: "projects",
      href: "/projects",
    },
    {
      key: "contact",
      href: "/contact",
    },
  ],

  resume: {
    href: "/resume",
  },

  contact: {
    email: "rizqi.iry@gmail.com",

    headline: {
      introduction:
        "Have an opportunity",
      emphasis:
        "worth exploring?",
    },

    description:
      "I’m open to full-time opportunities, collaborations, and conversations around web development and digital products.",

    primaryAction: {
      label: "Get in Touch",
      href: "/contact",
    },
  },

  socials: [
    {
      label: "LinkedIn",
      href:
        "https://linkedin.com/in/ikhsanry",
    },
    {
      label: "GitHub",
      href:
        "https://github.com/sceptzrion",
    },
  ],
} as const;