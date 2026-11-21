import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  /** Used by the parent <section aria-labelledby> */
  id: string;
  title: string;
  intro?: ReactNode;
  className?: string;
}

/**
 * The heading block that opens every content section.
 * Deliberately plain: a strong title and an optional one-paragraph intro.
 */
export function SectionHeading({
  id,
  title,
  intro,
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn("max-w-2xl", className)}>
      <h2 id={id} className="text-display-lg font-semibold">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 max-w-prose text-lg text-muted">{intro}</p>
      ) : null}
    </header>
  );
}
