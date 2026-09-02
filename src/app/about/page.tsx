import type { Metadata } from "next";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import MotionObserver from "@/components/motion/motion-observer";
import AboutAchievement from "@/components/sections/about/about-achievement";
import AboutEducation from "@/components/sections/about/about-education";
import AboutFocus from "@/components/sections/about/about-focus";
import AboutHero from "@/components/sections/about/about-hero";
import AboutLearning from "@/components/sections/about/about-learning";
import AboutNext from "@/components/sections/about/about-next";
import AboutStory from "@/components/sections/about/about-story";
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
      .about;

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
      url: `${siteConfig.url}/about`,
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

export default function AboutPage() {
  return (
    <>
      <MotionObserver />

      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <AboutHero />
        <AboutStory />
        <AboutEducation />
        <AboutLearning />
        <AboutAchievement />
        <AboutFocus />
        <AboutNext />
      </main>

      <Footer />
    </>
  );
}