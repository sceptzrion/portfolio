import type { Metadata } from "next";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import MotionObserver from "@/components/motion/motion-observer";
import ProjectFilterGrid from "@/components/sections/projects/project-filter-grid";
import ProjectsHero from "@/components/sections/projects/projects-hero";

export const metadata: Metadata = {
  title:
    "Projects | Muhamad Ikhsan Rizqi Yanuar's Portfolio",

  description:
    "Explore selected web development, frontend, full-stack, and data projects by Muhamad Ikhsan Rizqi Yanuar.",
};

export default function ProjectsPage() {
  return (
    <>
      <MotionObserver />

      <Navbar />

      <main>
        <ProjectsHero />
        <ProjectFilterGrid />
      </main>

      <Footer />
    </>
  );
}