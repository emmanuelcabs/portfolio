import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/data/site";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

// Both families come from Google Fonts (SIL Open Font License) and are
// self-hosted from src/app/fonts. next/font/local still subsets, preloads
// and prevents layout shift, but the build never depends on reaching
// fonts.googleapis.com.

// Display face: Bricolage Grotesque has optical sizing and a slightly
// irregular, hand-drawn quality, which keeps large headings from feeling
// like a stock SaaS template.
const display = localFont({
  src: "./fonts/BricolageGrotesque-Variable.woff2",
  variable: "--font-bricolage",
  weight: "200 800",
  display: "swap",
});

// Body face: Hanken Grotesk is calm and very legible at paragraph sizes,
// a quiet counterpart to the display face.
const body = localFont({
  src: "./fonts/HankenGrotesk-Variable.woff2",
  variable: "--font-hanken",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  keywords: [
    site.name,
    "ICT educator",
    "college instructor",
    "software developer",
    "Davao City",
    "Philippine Women's College of Davao",
    "Java",
    "Python",
    "Django",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "/",
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.description,
    // The image comes from src/app/opengraph-image.png (file convention)
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only rounded-full bg-accent px-4 py-2 font-medium text-accent-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60]"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
