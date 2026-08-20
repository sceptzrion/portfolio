export type Experience = {
  slug: string;
  index: string;
  role: string;
  organization: string;
  period: string;
  type: string;
  summary: string;
  highlights: readonly string[];
  tools: readonly string[];
};

export const experiences = [
  {
    slug: "diskominfosantik-bekasi",
    index: "01",
    role: "Web Developer Intern",
    organization:
      "Dinas Komunikasi Informatika Persandian dan Statistik Kabupaten Bekasi",
    period: "Nov 2025 — Jan 2026",
    type: "Internship",
    summary:
      "Developed responsive frontend pages for the Disarpus Kabupaten Bekasi website, translating approved Figma designs into functional Next.js interfaces and resolving layout issues across breakpoints.",
    highlights: [
      "Developed responsive frontend pages using Next.js based on Figma designs.",
      "Implemented key sections including the homepage, navigation, and news pages.",
      "Collaborated with development and design teams to translate approved designs into functional interfaces.",
      "Fixed layout and responsive UI issues during development.",
    ],
    tools: [
      "Next.js",
      "Figma",
    ],
  },
  {
    slug: "bank-muamalat",
    index: "02",
    role: "Business Intelligence Analyst Intern",
    organization: "Bank Muamalat",
    period: "Jan 2025 — Feb 2025",
    type: "Project-Based Internship",
    summary:
      "Analyzed relational sales data in Google BigQuery and translated it into structured master tables, interactive Looker Studio dashboards, and data-driven business recommendations.",
    highlights: [
      "Analyzed relational database structures and data relationships using Google BigQuery.",
      "Created master tables for customer, product, and transaction data.",
      "Designed interactive sales dashboards using Looker Studio.",
      "Provided data-driven recommendations based on sales performance and regional trends.",
    ],
    tools: [
      "Google BigQuery",
      "Looker Studio",
    ],
  },
] as const satisfies readonly Experience[];