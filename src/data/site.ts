export const siteConfig = {
  shortName: "Rizqi",
  fullName: "Muhamad Ikhsan Rizqi Yanuar",
  monogram: "RY",

  role: "Full-Stack Web Developer",
  location: "Karawang, West Java, Indonesia",

  domain: "rizqiyr.id",
  url: "https://rizqiyr.id",

  hero: {
    availability: "Available for opportunities",

    headline: {
      introduction: "Hi, I’m Rizqi.",
      statement: "I build",
      emphasis: "useful",
      continuation: "digital experiences for the web.",
    },

    description:
      "Full-Stack Web Developer and fresh Informatics graduate focused on turning interface designs and ideas into responsive, maintainable, and functional web products.",

    primaryAction: {
      label: "View My Work",
      href: "#selected-work",
    },

    secondaryAction: {
      label: "About Me",
      href: "#about",
    },
  },

  stats: [
    {
      value: "3.93",
      suffix: "/ 4.00",
      label: "GPA",
    },
    {
      value: "Cum Laude",
      suffix: "",
      label: "Honours",
    },
    {
      value: "02",
      suffix: "",
      label: "Internships",
    },
    {
      value: "05",
      suffix: "",
      label: "Selected Projects",
    },
  ],

  navigation: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Experience",
      href: "/experience",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  resume: {
    label: "Resume",
    href: "/resume",
  },

  contact: {
    email: "rizqi.iry@gmail.com",

    headline: {
      introduction: "Have an opportunity",
      emphasis: "worth building?",
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
      href: "https://linkedin.com/in/ikhsanry",
    },
    {
      label: "GitHub",
      href: "https://github.com/sceptzrion",
    },
  ],
} as const;