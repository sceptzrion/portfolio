export type FeaturedProject = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  category: string;
  context: string;
  role: string;
  year: string;
  tech: readonly string[];
  featured?: boolean;
};

export const featuredProjects = [
  {
    slug: "edubidan",
    index: "01",
    title: "EduBidan",
    tagline:
      "A role-based Learning Management System for midwifery education with interactive modules, randomized quizzes, and progress tracking.",
    category: "Full-Stack Web Development",
    context: "Bachelor's Thesis Project",
    role: "Full-Stack Developer",
    year: "2026",
    tech: [
      "Next.js",
      "TypeScript",
      "Prisma ORM",
      "MySQL",
      "Tailwind CSS",
    ],
    featured: true,
  },
  {
    slug: "disarpus-bekasi",
    index: "02",
    title: "Disarpus Kabupaten Bekasi",
    tagline:
      "Responsive frontend development for the revitalization of a regional government archives and library website.",
    category: "Frontend Development",
    context: "Professional Internship",
    role: "Web Developer Intern",
    year: "2025",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Figma",
    ],
  },
  {
    slug: "lestari-waste-bank",
    index: "03",
    title: "Lestari Waste Bank",
    tagline:
      "A collaborative digital platform for waste pickup, point tracking, educational content, and community rewards.",
    category: "Frontend Development",
    context: "Kampus Merdeka MSIB Project",
    role: "Frontend Developer",
    year: "2024",
    tech: [
      "Laravel",
      "PHP",
      "Tailwind CSS",
    ],
  },
] as const satisfies readonly FeaturedProject[];