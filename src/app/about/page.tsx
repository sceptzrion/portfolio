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

const aboutTitle =
  `About | ${siteConfig.fullName}'s Portfolio`;

const aboutDescription =
  `Learn more about ${siteConfig.fullName}, a fresh Informatics graduate and ${siteConfig.role} focused on web application development, frontend engineering, and practical full-stack development.`;

export const metadata: Metadata = {
  title: {
    absolute: aboutTitle,
  },
  description: aboutDescription,
};

export default function AboutPage() {
  return (
    <>
      <MotionObserver />

      <Navbar />

      <main>
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