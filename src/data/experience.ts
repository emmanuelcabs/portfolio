import type { ExperienceItem } from "@/types";

/**
 * Work history, most recent first. Content comes from the résumé.
 * To add a role, copy an object and edit it; the Experience section
 * renders whatever is in this array.
 */
export const experience: ExperienceItem[] = [
  {
    id: "pwc-ict-coordinator",
    position: "ICT Coordinator",
    organization: "Philippine Women’s College of Davao",
    periods: ["Jun 2026 – Present", "Jun 2016 – Aug 2024"],
    current: true,
    note: "Also Flexible Learning Coordinator since June 2026",
    // PLACEHOLDER: add one or two lines on your Flexible Learning Coordinator duties
    contributions: [
      "Led the Senior High School ICT department, supervising five teachers and overseeing the TVL-ICT strands: Computer Programming, Computer Systems Servicing and Animation.",
      "Conducted teacher evaluations through classroom observations, performance reviews and document checks to support quality instruction and DepEd compliance.",
      "Designed and implemented project-based, skills-focused lessons to strengthen students’ practical ICT competencies.",
    ],
    responsibilities: [
      "Taught Empowerment Technology, covering web design, digital content creation, online collaboration and digital productivity tools.",
      "Delivered specialized ICT instruction in Java, Python, HTML, CSS, JavaScript and Django.",
    ],
    courses: ["Empowerment Technology"],
  },
  {
    id: "pwc-faculty",
    position: "SHS ICT Faculty and Part-time College IT Faculty",
    organization: "Philippine Women’s College of Davao",
    periods: ["Jun 2025 – Apr 2026"],
    responsibilities: [
      "Taught education courses for BSEd and BEEd students, and Media and Information Literacy in the Senior High School program.",
      "Handled Computer Programming 2 and BSIT subjects from introductory computing to advanced database systems.",
    ],
    contributions: [
      "Designed, prepared and updated the syllabi and learning plans for every course handled, aligned with curricular and instructional requirements.",
    ],
    courses: [
      "Technology for Teaching and Learning 2",
      "Computer Programming 2",
      "Media and Information Literacy",
      "Introduction to Computing",
      "Complex Systems",
      "Advanced Database Systems 2",
      "Human-Computer Interaction",
    ],
  },
  {
    id: "addu-instructor",
    position: "Information Systems Part-time Instructor",
    organization: "Ateneo de Davao University",
    periods: ["Jun 2015 – Jun 2016"],
    responsibilities: [
      "Taught EDP 111 to first- and second-year Accountancy and Accounting Technology students.",
      "Handled programming and database courses for first- and third-year college students.",
    ],
    courses: [
      "Fundamentals of Computer Software and Applications (EDP 111)",
      "Fundamentals of Programming",
      "Database Theory and Applications",
    ],
  },
  {
    id: "ama-instructor",
    position: "IT and CS Instructor",
    organization: "AMA Computer College of Davao",
    periods: ["Jun 2013 – Jun 2015"],
    responsibilities: [
      "Delivered Information Technology and Computer Science courses through lectures and hands-on practical activities.",
    ],
    courses: [
      "Introduction to Information Systems",
      "Object-Oriented Programming",
      "Introduction to the World Wide Web",
      "Computer Programming I",
      "Web Programming",
      "Systems Analysis and Design",
    ],
  },
];
