/**
 * Shared types for the portfolio's content.
 * Data files in src/data/ are checked against these, so a typo or a
 * missing field fails the build instead of breaking the page.
 */

export interface SiteConfig {
  name: string;
  shortName: string;
  credentials?: string;
  role: string;
  location: string;
  description: string;
  email: string;
  socials: {
    github: string;
    /** Leave empty until you have a URL; the LinkedIn link is hidden while empty */
    linkedin?: string;
  };
  cvPath: string;
}

export interface ExperienceItem {
  id: string;
  position: string;
  organization: string;
  /** One or more terms, written as they should appear, e.g. "Jun 2016 – Aug 2024" */
  periods: string[];
  current?: boolean;
  /** Short line under the title, e.g. an added role */
  note?: string;
  /** Day-to-day duties */
  responsibilities: string[];
  /** Leadership work and outcomes beyond regular duties */
  contributions?: string[];
  /** Courses or subjects handled, shown as tags */
  courses?: string[];
}

export type SkillCategoryId =
  | "languages"
  | "frontend"
  | "backend"
  | "databases"
  | "tools"
  | "edtech"
  | "teaching";

export interface SkillCategory {
  id: SkillCategoryId;
  title: string;
  description?: string;
  skills: string[];
}

/** "software" for things you built; "academic" for technology initiatives you led */
export type ProjectKind = "software" | "academic";

export interface Project {
  slug: string;
  title: string;
  kind: ProjectKind;
  /** Short state label, e.g. "Working prototype" or "Live" */
  status?: string;
  summary: string;
  features: string[];
  tech: string[];
  /** Path under /public, e.g. "/images/projects/report-cards.png" */
  image?: string;
  imageAlt?: string;
  repoUrl?: string;
  liveUrl?: string;
  year?: string;
}
