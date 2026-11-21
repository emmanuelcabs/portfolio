import { experience } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/cn";

/**
 * A timeline: dates in the left column, the role in the right.
 * The vertical rule and dots show the sequence; the lime dot marks the
 * current role. Content comes from src/data/experience.ts.
 */
export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="border-t border-line py-24 md:py-32"
    >
      <Container>
        <SectionHeading
          id="experience-title"
          title="Experience"
          intro="Teaching and academic leadership roles across three Davao institutions, most recent first."
        />

        <ol className="mt-16 md:mt-20">
          {experience.map((item, index) => {
            const isLast = index === experience.length - 1;
            return (
              <li
                key={item.id}
                className="grid gap-x-12 md:grid-cols-[11rem_1fr] lg:grid-cols-[14rem_1fr]"
              >
                {/* Dates */}
                <div className="pb-4 md:pt-1 md:pb-0 md:text-right">
                  {item.periods.map((period) => (
                    <p key={period} className="text-sm text-muted tabular-nums">
                      {period}
                    </p>
                  ))}
                  {item.current ? (
                    <p className="mt-2 inline-flex items-center gap-2 text-sm text-accent">
                      <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                      Current role
                    </p>
                  ) : null}
                </div>

                {/* Role */}
                <article
                  className={cn(
                    "relative md:border-l md:border-line md:pl-12",
                    isLast ? "pb-0" : "pb-14 md:pb-20",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute top-2 -left-[5px] hidden size-2.5 rounded-full ring-4 ring-base md:block",
                      item.current ? "bg-accent" : "bg-line-strong",
                    )}
                  />

                  <h3 className="text-display-md font-semibold">{item.position}</h3>
                  <p className="mt-1.5 text-muted">{item.organization}</p>
                  {item.note ? (
                    <p className="mt-1 text-sm text-fg">{item.note}</p>
                  ) : null}

                  {item.contributions?.length ? (
                    <div className="mt-6">
                      <h4 className="text-base font-medium text-fg">Key contributions</h4>
                      <BulletList items={item.contributions} accent />
                    </div>
                  ) : null}

                  <div className="mt-6">
                    <h4 className="text-base font-medium text-fg">Responsibilities</h4>
                    <BulletList items={item.responsibilities} />
                  </div>

                  {item.courses?.length ? (
                    <div className="mt-6">
                      <h4 className="sr-only">Courses handled</h4>
                      <ul className="flex flex-wrap gap-2" aria-label="Courses handled">
                        {item.courses.map((course) => (
                          <li key={course}>
                            <Tag>{course}</Tag>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </article>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

function BulletList({ items, accent = false }: { items: string[]; accent?: boolean }) {
  return (
    <ul className="mt-3 max-w-prose space-y-2.5 text-muted">
      {items.map((text) => (
        <li key={text} className="relative pl-5">
          <span
            aria-hidden="true"
            className={cn(
              "absolute top-[0.7em] left-0 h-px w-2.5",
              accent ? "bg-accent" : "bg-line-strong",
            )}
          />
          {text}
        </li>
      ))}
    </ul>
  );
}
