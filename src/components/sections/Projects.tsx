import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { buttonStyles } from "@/components/ui/Button";
import { GitHubIcon } from "@/components/ui/BrandIcons";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Renders every entry in src/data/projects.ts, separated by hairlines. */
export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="border-t border-line py-24 md:py-32"
    >
      <Container>
        <SectionHeading
          id="projects-title"
          title="Selected projects"
          intro="Software I’ve built and technology initiatives I’ve led, mostly for the schools I teach in."
        />

        <div className="mt-14 divide-y divide-line md:mt-20">
          {projects.map((project) => (
            <div key={project.slug} className="py-14 first:pt-0 last:pb-0 md:py-20">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start gap-4 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted">More of my code lives on GitHub.</p>
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles({ variant: "secondary" })}
          >
            <GitHubIcon size={16} />
            Visit my GitHub
          </a>
        </div>
      </Container>
    </section>
  );
}
