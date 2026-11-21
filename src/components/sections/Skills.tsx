import { skillCategories } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

/**
 * Skills laid out like a reference table: category on the left, tags on
 * the right, one row per category. Easier to scan than a grid of cards,
 * and it lets categories of very different lengths sit together.
 */
export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="border-t border-line py-24 md:py-32"
    >
      <Container>
        <SectionHeading
          id="skills-title"
          title="Skills and tools"
          intro="What I build with, and what I bring to a classroom or a department."
        />

        <div className="mt-14 border-t border-line md:mt-16">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="grid gap-4 border-b border-line py-7 md:grid-cols-[16rem_1fr] md:gap-12 lg:grid-cols-[20rem_1fr]"
            >
              <div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
                {category.description ? (
                  <p className="mt-1 text-sm text-subtle">{category.description}</p>
                ) : null}
              </div>
              <ul className="flex flex-wrap content-start gap-2" aria-label={category.title}>
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <Tag>{skill}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
