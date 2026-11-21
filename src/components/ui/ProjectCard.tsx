import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import { ButtonLink } from "@/components/ui/Button";
import { GitHubIcon } from "@/components/ui/BrandIcons";
import { Tag } from "@/components/ui/Tag";

const kindLabel: Record<Project["kind"], string> = {
  software: "Software project",
  academic: "Academic initiative",
};

/**
 * One project, laid out as a wide row: screenshot on the left, details on
 * the right. Every optional field (image, tech, links) simply disappears
 * when it's missing, so a project can be added with only the basics.
 */
export function ProjectCard({ project }: { project: Project }) {
  const meta = [kindLabel[project.kind], project.status, project.year].filter(Boolean);

  return (
    <article
      aria-labelledby={`project-${project.slug}`}
      className="grid gap-8 lg:grid-cols-12 lg:gap-12"
    >
      <div className="lg:col-span-7">
        <div className="overflow-hidden rounded-xl border border-line bg-surface">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.imageAlt ?? ""}
              width={1600}
              height={1000}
              sizes="(min-width: 1152px) 640px, (min-width: 1024px) 56vw, 100vw"
              className="aspect-[16/10] w-full object-cover object-left-top"
            />
          ) : (
            <div className="grid aspect-[16/10] place-items-center text-subtle">
              Screenshot coming soon
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col lg:col-span-5">
        <p className="text-sm text-subtle">{meta.join(", ")}</p>
        <h3
          id={`project-${project.slug}`}
          className="mt-2 text-display-md font-semibold"
        >
          {project.title}
        </h3>
        <p className="mt-4 text-muted">{project.summary}</p>

        <h4 className="mt-7 text-base font-medium text-fg">Key features</h4>
        <ul className="mt-3 space-y-2 text-[0.95rem] text-muted">
          {project.features.map((feature) => (
            <li key={feature} className="relative pl-5">
              <span
                aria-hidden="true"
                className="absolute top-[0.7em] left-0 h-px w-2.5 bg-accent"
              />
              {feature}
            </li>
          ))}
        </ul>

        {project.tech.length ? (
          <ul className="mt-7 flex flex-wrap gap-2" aria-label="Technologies used">
            {project.tech.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
        ) : null}

        {project.repoUrl || project.liveUrl ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <ButtonLink
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="md"
              >
                <ExternalLink size={16} aria-hidden="true" />
                View live demo
                <span className="sr-only"> of {project.title}</span>
              </ButtonLink>
            ) : null}
            {project.repoUrl ? (
              <ButtonLink
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="md"
              >
                <GitHubIcon size={16} />
                View code
                <span className="sr-only"> for {project.title} on GitHub</span>
              </ButtonLink>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
