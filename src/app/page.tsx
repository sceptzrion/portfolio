import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import MotionObserver from "@/components/motion/motion-observer";
import AboutPreview from "@/components/sections/home/about-preview";
import Capabilities from "@/components/sections/home/capabilities";
import ContactCTA from "@/components/sections/home/contact-cta";
import ExperiencePreview from "@/components/sections/home/experience-preview";
import Hero from "@/components/sections/home/hero";
import SelectedWork from "@/components/sections/home/selected-work";

export default function Home() {
  return (
    <>
      <MotionObserver />

      <Navbar />

      <main>
        <Hero />
        <SelectedWork />
        <AboutPreview />
        <ExperiencePreview />
        <Capabilities />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}