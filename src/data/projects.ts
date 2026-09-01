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
  liveUrl?: string;
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
      "Cloudinary",
    ],
    liveUrl:
      "https://edubidan.my.id",
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
      "Responsive frontend implementation for a regional government archives and library website.",
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
      "TypeScript",
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
      "A collaborative digital waste-bank platform for waste services, points, rewards, educational content, and management flows.",
    category:
      "Frontend Development",
    context:
      "MSIB Kampus Merdeka Project",
    role:
      "Frontend Developer",
    year: "2024",
    tech: [
      "Laravel",
      "PHP",
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
      "A Streamlit-based gold price prediction app using linear regression, live gold and exchange-rate data, and manual simulation.",
    category:
      "Data / Machine Learning",
    context:
      "Machine Learning Course Project",
    tech: [
      "Python",
      "Streamlit",
      "scikit-learn",
      "Linear Regression",
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
      "A responsive tourism landing page with curated destinations, travel guidance, and supporting travel information.",
    category:
      "Frontend Development",
    context:
      "Personal Project",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    liveUrl:
      "https://healingaja.vercel.app",
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