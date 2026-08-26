import type { Metadata } from "next";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import MotionObserver from "@/components/motion/motion-observer";
import ContactContent from "@/components/sections/contact/contact-content";
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
      .contact;

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
      url: `${siteConfig.url}/contact`,
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

export default function ContactPage() {
  return (
    <>
      <MotionObserver />

      <Navbar />

      <main>
        <ContactContent />
      </main>

      <Footer />
    </>
  );
}