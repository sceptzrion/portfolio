export type Capability = {
  index: string;
  title: string;
  description: string;
  skills: readonly string[];
};

export const capabilities = [
  {
    index: "01",
    title: "Frontend Engineering",
    description:
      "Translating interface designs into responsive, structured, and maintainable web experiences.",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    index: "02",
    title: "Full-Stack Applications",
    description:
      "Connecting application logic, data access, and user flows into functional web products.",
    skills: [
      "Node.js",
      "Laravel",
      "PHP",
      "Prisma ORM",
    ],
  },
  {
    index: "03",
    title: "Data & Database",
    description:
      "Working with relational data from application storage through analysis and dashboarding.",
    skills: [
      "MySQL",
      "SQL",
      "Python",
      "Google BigQuery",
      "Looker Studio",
    ],
  },
  {
    index: "04",
    title: "Workflow & Delivery",
    description:
      "Supporting development from design handoff and collaboration through testing and deployment.",
    skills: [
      "Git",
      "GitHub",
      "Figma",
      "Postman",
      "Vercel",
      "Cloudinary",
    ],
  },
] as const satisfies readonly Capability[];