import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  metadataBase: new URL("https://seadhasanovic.com"),
  title: {
    default: "Sead Hasanović — Professional Practical Shooter",
    template: "%s | Sead Hasanović",
  },
  description:
    "Sead Hasanović — Professional practical pistol shooter from Bosnia & Herzegovina. Official portfolio.",
  keywords: [
    "IDPA",
    "IPSC",
    "Sead Hasanović",
    "Sead Hasanovic",
    "Bosnia",
    "Practical Shooting",
    "Practiscore",
    "Defensive Pistol",
    "Carry Optics",
  ],
  authors: [{ name: "Sead Hasanović" }],
  openGraph: {
    title: "Sead Hasanović — Professional Practical Shooter",
    description: "Match results, gear and gallery from the line.",
    url: "https://seadhasanovic.com",
    siteName: "seadhasanovic.com",
    locale: "en_US",
    alternateLocale: ["bs_BA"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sead Hasanović — Practical Shooter",
    description: "Professional practical pistol shooter portfolio.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-ink-950 font-sans text-white/90 antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
