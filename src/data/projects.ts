import type { Project } from "@/types";

/**
 * Projects shown in the Selected Projects section, in display order.
 *
 * To add one:
 *   1. Put a screenshot in public/images/projects/ (16:10 works best).
 *   2. Copy an object below and fill it in.
 *   3. Leave repoUrl or liveUrl out if there isn't one; the buttons hide.
 * Use kind: "academic" for technology initiatives you led (an LMS rollout,
 * a curriculum programme) rather than software you wrote.
 */
export const projects: Project[] = [
  {
    slug: "report-card-system",
    title: "Digitalized Report Card Generation System",
    kind: "software",
    status: "Working prototype",
    summary:
      "Replaces manual report card preparation with one guided workflow: subject teachers encode component scores, class advisers generate the report card, and the principal or subject coordinator reviews and approves it.",
    features: [
      "Separate workspaces for subject teachers, class advisers, and the principal or subject coordinator",
      "Three-step generation: check grades, add attendance and observed values, then submit",
      "Report card preview in the DepEd Senior High School format, including core values ratings",
      "Per-learner status tracking from not ready through approved or returned",
      "Evaluation mode and resettable demo data with fictional learners",
    ],
    // PLACEHOLDER: list the technologies this prototype is built with
    tech: [],
    image: "/images/projects/report-card-system.png",
    imageAlt:
      "The Generate Report Card screen, showing a list of learners with approval statuses beside a preview of an approved report card.",
    // PLACEHOLDER: add the repository URL, e.g. "https://github.com/emmanuelcabs/<repo-name>"
    // repoUrl: "",
    // liveUrl: "",
  },
  {
    slug: "portfolio",
    title: "This portfolio",
    kind: "software",
    status: "Live",
    liveUrl: "https://portfolio-gilt-ten-8ftoff0ngt.vercel.app",
    summary:
      "A single-page portfolio built with the Next.js App Router. Content lives in typed data files, so adding a role or a project is a one-file edit, and most of the page ships no JavaScript at all.",
    features: [
      "Server Components by default; client code only where the page reacts to the visitor",
      "Experience, skills and projects driven by typed data files",
      "Keyboard-friendly navigation with a skip link and visible focus states",
      "Respects reduced-motion settings and self-hosts its fonts",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/images/projects/portfolio.png",
    imageAlt:
      "The portfolio's hero section: the headline “Educator. Developer. Technology Enthusiast.” beside a faculty ID card.",
    repoUrl: "https://github.com/emmanuelcabs/portfolio",
    // Add once deployed, e.g. "https://<your-project>.vercel.app"
    // liveUrl: "https://portfolio-gilt-ten-8ftoff0ngt.vercel.app",
    year: "2026",
  },
];
