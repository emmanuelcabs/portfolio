import type { SkillCategory } from "@/types";

/**
 * Skills grouped by category. Order here is the order on the page.
 * Keep each list to things you'd be comfortable teaching or using in an
 * interview; add or remove freely.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming languages",
    description: "Languages I write and teach.",
    skills: ["Java", "Python", "JavaScript", "C#"],
  },
  {
    id: "frontend",
    title: "Frontend development",
    skills: ["HTML", "CSS", "JavaScript", "Web design"],
  },
  {
    id: "backend",
    title: "Backend development",
    skills: ["Django", "ASP.NET"],
  },
  {
    id: "databases",
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "Database design and concepts"],
  },
  {
    id: "tools",
    title: "Development tools",
    // PLACEHOLDER: add the editors and tools you use (e.g. your IDE, Git)
    skills: ["GitHub", "Microsoft Office Suite"],
  },
  {
    id: "edtech",
    title: "Educational technology",
    description: "Running the systems that classes depend on.",
    skills: [
      "Learning management systems",
      "Google Classroom",
      "Flexible learning delivery",
      "Instructional technology integration",
      "Digital content creation",
    ],
  },
  {
    id: "teaching",
    title: "Teaching and leadership",
    skills: [
      "Curriculum and syllabus development",
      "Project-based learning",
      "Student assessment",
      "Classroom management",
      "Teacher evaluation",
      "Communication and leadership",
    ],
  },
];
