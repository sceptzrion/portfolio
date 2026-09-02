import type { Metadata } from "next";
import Script from "next/script";
import {
  Inter,
  JetBrains_Mono,
  Plus_Jakarta_Sans,
  Space_Grotesk,
} from "next/font/google";

import { LocaleProvider } from "@/components/i18n/locale-provider";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { siteConfig } from "@/data/site";
import { metadataDictionary } from "@/i18n/dictionaries/metadata";
import { sharedDictionary } from "@/i18n/dictionaries/shared";
import { getLocale } from "@/i18n/get-locale";

import "./globals.css";

const displayFont =
  Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable:
      "--font-plus-jakarta",
    display: "swap",
  });

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable:
    "--font-jetbrains-mono",
  display: "swap",
});

const brandFont = Space_Grotesk({
  subsets: ["latin"],
  variable:
    "--font-space-grotesk",
  weight: ["700"],
  display: "swap",
});

const socialTitle =
  `${siteConfig.siteName} | ${siteConfig.role}`;

export async function generateMetadata(): Promise<Metadata> {
  const locale =
    await getLocale();

  const copy =
    metadataDictionary[locale].site;

  return {
    metadataBase: new URL(
      siteConfig.url,
    ),

    applicationName:
      siteConfig.siteName,

    title: {
      default: copy.title,
      template: `%s | ${siteConfig.siteName}`,
    },

    description:
      copy.description,

    authors: [
      {
        name: siteConfig.fullName,
        url: siteConfig.url,
      },
    ],

    creator:
      siteConfig.fullName,

    publisher:
      siteConfig.fullName,

    openGraph: {
      type: "website",
      locale:
        copy.openGraphLocale,
      url: siteConfig.url,
      siteName:
        siteConfig.siteName,
      title: socialTitle,
      description:
        copy.description,
    },

    twitter: {
      card: "summary",
      title: socialTitle,
      description:
        copy.description,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

const themeScript = `
(function () {
  try {
    var storedTheme = localStorage.getItem("rizqi-theme");
    var theme = storedTheme === "dark" ? "dark" : "light";
    var root = document.documentElement;

    root.classList.toggle("dark", theme === "dark");
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
  } catch (error) {}
})();
`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale =
    await getLocale();

  const sharedCopy =
    sharedDictionary[locale];

  return (
    <html
      lang={locale}
      suppressHydrationWarning
    >
      <body
        className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable} ${brandFont.variable}`}
      >
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html:
              themeScript,
          }}
        />

        <LocaleProvider
          initialLocale={
            locale
          }
        >
          <ThemeProvider>
            <a
              href="#main-content"
              className="fixed left-4 top-4 z-100 -translate-y-24 rounded-full border border-border bg-foreground px-4 py-3 text-sm font-semibold text-background shadow-lg transition-transform duration-200 focus:translate-y-0"
            >
              {
                sharedCopy
                  .accessibility
                  .skipToContent
              }
            </a>

            {children}
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}