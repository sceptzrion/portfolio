import type { Metadata } from "next";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import MotionObserver from "@/components/motion/motion-observer";
import ProjectFilterGrid from "@/components/sections/projects/project-filter-grid";
import ProjectsHero from "@/components/sections/projects/projects-hero";
import ProjectsNext from "@/components/sections/projects/projects-next";
import { siteConfig } from "@/data/site";
import { metadataDictionary } from "@/i18n/dictionaries/metadata";
import { getLocale } from "@/i18n/get-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale =
    await getLocale();

  const siteCopy =
    metadataDictionary[locale].site;

  const copy =
    metadataDictionary[locale]
      .projects;

  return {
    title: {
      absolute: copy.title,
    },

    description:
      copy.description,

    openGraph: {
      type: "website",
      locale:
        siteCopy.openGraphLocale,
      url: `${siteConfig.url}/projects`,
      siteName:
        siteConfig.siteName,
      title: copy.title,
      description:
        copy.description,
    },

    twitter: {
      card: "summary",
      title: copy.title,
      description:
        copy.description,
    },
  };
}

export default function ProjectsPage() {
  return (
    <>
      <MotionObserver />

      <Navbar />

      <main>
        <ProjectsHero />
        <ProjectFilterGrid />
        <ProjectsNext />
      </main>

      <Footer />
    </>
  );
}