import type { Metadata } from "next";
import Script from "next/script";
import {
  Inter,
  JetBrains_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { siteConfig } from "@/data/site";

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

const siteTitle =
  `${siteConfig.siteName} | ${siteConfig.role}`;

const siteDescription =
  `Portfolio of ${siteConfig.fullName}, a ${siteConfig.role} with hands-on experience building responsive web applications and data projects.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  applicationName: siteConfig.siteName,

  title: {
    default: siteTitle,
    template: `%s | ${siteConfig.siteName}`,
  },

  description: siteDescription,

  authors: [
    {
      name: siteConfig.fullName,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.fullName,

  publisher: siteConfig.fullName,

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.siteName,
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