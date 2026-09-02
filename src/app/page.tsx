import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import MotionObserver from "@/components/motion/motion-observer";
import AboutPreview from "@/components/sections/home/about-preview";
import Capabilities from "@/components/sections/home/capabilities";
import ContactCTA from "@/components/sections/home/contact-cta";
import ExperiencePreview from "@/components/sections/home/experience-preview";
import Hero from "@/components/sections/home/hero";
import SelectedWork from "@/components/sections/home/selected-work";
import { siteConfig } from "@/data/site";

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.siteName,
  alternateName: [
    siteConfig.shortName,
    siteConfig.domain,
  ],
  url: siteConfig.url,
};

const websiteStructuredDataJson =
  JSON.stringify(websiteStructuredData).replace(
    /</g,
    "\\u003c",
  );

export default function Home() {
  return (
    <>
      <script
        id="website-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            websiteStructuredDataJson,
        }}
      />

      <MotionObserver />

      <Navbar />

      <main id="main-content" tabIndex={-1}>
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