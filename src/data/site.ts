import type { SiteConfig } from "@/types";

/**
 * Single source of truth for personal details used across the site
 * (navbar, hero, contact, footer, metadata).
 *
 * Values marked PLACEHOLDER should be filled in when you have them.
 * The site's URL is detected automatically: see src/lib/site-url.ts.
 */
export const site: SiteConfig = {
  name: "Emmanuel Cabuloy",
  shortName: "EC",
  credentials: "LPT",
  role: "ICT Educator and Software Developer",
  location: "Davao City, Philippines",
  description:
    "Emmanuel Cabuloy is an ICT educator, college instructor, and software developer in Davao City with more than a decade of teaching programming, databases, and web development.",
  email: "cabuloyemmanuel@gmail.com",
  socials: {
    github: "https://github.com/emmanuelcabs",
    // PLACEHOLDER: add your LinkedIn URL; the link stays hidden until then
    linkedin: "",
  },
  // Drop the PDF at public/documents/Emmanuel-Cabuloy-CV.pdf
  cvPath: "/documents/Emmanuel-Cabuloy-CV.pdf",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;
