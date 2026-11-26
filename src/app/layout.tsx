import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import DemoBanner from "@/components/DemoBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/lib/config";
import "./globals.css";

// Fonts are stored in src/app/fonts and loaded from there (not downloaded from Google),
// so the site builds and renders the same on any network.
const display = localFont({
  src: [
    { path: "./fonts/Fraunces-Variable.woff2", style: "normal" },
    { path: "./fonts/Fraunces-Italic-Variable.woff2", style: "italic" },
  ],
  variable: "--nf-display",
  weight: "100 900",
  display: "swap",
});

const body = localFont({
  src: "./fonts/DMSans-Variable.woff2",
  variable: "--nf-body",
  weight: "100 1000",
  display: "swap",
});

// On Vercel this is filled in automatically with the site's own address.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.fullName} (demo) | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name} demo`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.fullName,
  // NOIR is fictional, so we keep it out of search results rather than let it pose as a real venue.
  robots: { index: false, follow: false },
  openGraph: {
    title: `${siteConfig.fullName} (demo)`,
    description: siteConfig.description,
    siteName: siteConfig.fullName,
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} (demo)`,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#151515",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-ember px-4 py-2 text-sm font-semibold text-charcoal focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <DemoBanner />
        <Navbar />
        <div className="flex-1 overflow-x-clip">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
