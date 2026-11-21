import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * About: a short story on the left, quick reference facts on the right.
 * Copy is drawn from the résumé; edit freely to put it in your own voice.
 */
const facts: { term: string; details: string[] }[] = [
  { term: "Based in", details: ["Davao City, Philippines"] },
  { term: "Licence", details: ["Licensed Professional Teacher (LPT)"] },
  {
    term: "Education",
    details: [
      "MS Information Technology, Ateneo de Davao University (in progress)",
      "BS Information Technology, AMA Computer College of Davao, 2013",
    ],
  },
  {
    term: "Recent training",
    details: [
      "AI & Future Skills Seminar Workshop, eduCLaaS Philippines, 2025",
      "Essentials in Handling Neurodivergent Learners in the Classroom, PWC of Davao, 2025",
    ],
  },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-t border-line py-24 md:py-32"
    >
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <SectionHeading id="about-title" title="Teaching technology since 2013" />

          <div className="mt-8 max-w-prose space-y-5 text-lg text-muted">
            <p>
              I started teaching right after finishing my BS in Information
              Technology at AMA Computer College of Davao. Since then I’ve
              taught at AMA, Ateneo de Davao University and Philippine Women’s
              College of Davao, from first programming courses to advanced
              database systems and human-computer interaction.
            </p>
            <p>
              For more than eight years I’ve served as ICT Coordinator at PWC,
              leading the Senior High School ICT department across the Computer
              Programming, Computer Systems Servicing and Animation strands. In
              2026 I also took on the role of Flexible Learning Coordinator.
            </p>
            <p>
              I teach programming the way it’s practised: through projects
              students plan, build and present. I hold myself to the same
              standard of growth, and I’m currently taking a Master of Science
              in Information Technology at Ateneo de Davao University.
            </p>
          </div>
        </div>

        <dl className="self-end border-t border-line lg:col-span-5 lg:col-start-8">
          {facts.map((fact) => (
            <div
              key={fact.term}
              className="grid gap-1 border-b border-line py-5 sm:grid-cols-[9rem_1fr] sm:gap-6"
            >
              <dt className="text-sm text-subtle">{fact.term}</dt>
              <dd className="space-y-1.5 text-[0.95rem] leading-relaxed text-fg">
                {fact.details.map((d) => (
                  <p key={d}>{d}</p>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
