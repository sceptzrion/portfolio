export type ProjectFilter =
  | "full-stack"
  | "frontend"
  | "data-ml"
  | "academic"
  | "professional"
  | "personal";

export type Project = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  category: string;
  context: string;
  role?: string;
  year?: string;
  tech: readonly string[];
  filters: readonly ProjectFilter[];
  featured?: boolean;
  homeFeatured?: boolean;
};

export type FeaturedProject = Project;

export type ProjectFilterValue =
  | "all"
  | ProjectFilter;

export const projectFilterOptions: readonly {
  value: ProjectFilterValue;
  label: string;
}[] = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "full-stack",
    label: "Full-Stack",
  },
  {
    value: "frontend",
    label: "Frontend",
  },
  {
    value: "data-ml",
    label: "Data / ML",
  },
  {
    value: "academic",
    label: "Academic",
  },
  {
    value: "professional",
    label: "Professional",
  },
  {
    value: "personal",
    label: "Personal",
  },
];

export const projects: readonly Project[] = [
  {
    slug: "edubidan",
    index: "01",
    title: "EduBidan",
    tagline:
      "A role-based Learning Management System for midwifery education with interactive modules, randomized quizzes, and progress tracking.",
    category:
      "Full-Stack Web Development",
    context:
      "Bachelor's Thesis Project",
    role:
      "Full-Stack Developer",
    year: "2026",
    tech: [
      "Next.js",
      "TypeScript",
      "Prisma ORM",
      "MySQL",
      "Tailwind CSS",
    ],
    filters: [
      "full-stack",
      "academic",
    ],
    featured: true,
    homeFeatured: true,
  },

  {
    slug: "disarpus-bekasi",
    index: "02",
    title:
      "Disarpus Kabupaten Bekasi",
    tagline:
      "Responsive frontend development for the revitalization of a regional government archives and library website.",
    category:
      "Frontend Development",
    context:
      "Internship Project",
    role:
      "Web Developer Intern",
    year:
      "2025 — 2026",
    tech: [
      "Next.js",
      "Figma",
    ],
    filters: [
      "frontend",
      "professional",
    ],
    homeFeatured: true,
  },

  {
    slug: "lestari-waste-bank",
    index: "03",
    title:
      "Lestari Waste Bank",
    tagline:
      "A collaborative digital platform for waste pickup, point tracking, educational content, and community rewards.",
    category:
      "Frontend Development",
    context:
      "MSIB Kampus Merdeka Project",
    role:
      "Frontend Developer",
    year: "2024",
    tech: [
      "Laravel",
    ],
    filters: [
      "frontend",
      "academic",
    ],
    homeFeatured: true,
  },

  {
    slug:
      "gold-price-prediction",
    index: "04",
    title:
      "Gold Price Prediction System",
    tagline:
      "A prediction system using linear regression with gold price and USD/IDR data, including a manual simulation flow for exploring predicted values.",
    category:
      "Data & Prediction",
    context:
      "Prediction System",
    tech: [
      "Linear Regression",
      "Gold Price API",
      "USD/IDR API",
    ],
    filters: [
      "data-ml",
      "academic",
    ],
  },

  {
    slug: "healingaja",
    index: "05",
    title: "HealingAja!",
    tagline:
      "A tourism landing page for presenting destinations and travel information.",
    category:
      "Frontend Development",
    context:
      "Tourism Landing Page",
    tech: [],
    filters: [
      "frontend",
      "personal",
    ],
  },
];

/*
 * Existing homepage Selected Work can keep
 * using featuredProjects without changes.
 */
export const featuredProjects:
  readonly FeaturedProject[] =
  projects.filter(
    (project) =>
      project.homeFeatured,
  );