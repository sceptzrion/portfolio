import type { Metadata } from "next";
import Script from "next/script";
import {
  Inter,
  JetBrains_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";

import { ThemeProvider } from "@/components/theme/theme-provider";

import "./globals.css";

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteName = "Rizqi Yanuar";

const siteTitle =
  "Rizqi Yanuar | Full-Stack Web Developer";

const siteDescription =
  "Portfolio of Muhamad Ikhsan Rizqi Yanuar, a Full-Stack Web Developer with hands-on experience in responsive web development, full-stack applications, and data projects.";

const siteUrl = "https://rizqiyr.id";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: siteName,

  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },

  description: siteDescription,

  authors: [
    {
      name: "Muhamad Ikhsan Rizqi Yanuar",
      url: siteUrl,
    },
  ],

  creator: "Muhamad Ikhsan Rizqi Yanuar",

  publisher: "Muhamad Ikhsan Rizqi Yanuar",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
  },

  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },

  robots: {
    index: true,
    follow: true,
  },
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  alternateName: [
    "Rizqi",
    "rizqiyr.id",
  ],
  url: siteUrl,
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              websiteStructuredData,
            ),
          }}
        />
      </head>

      <body
        className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable}`}
      >
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />

        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}