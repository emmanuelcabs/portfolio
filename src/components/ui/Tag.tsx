import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Small label for skills, courses and project technologies. */
export function Tag({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-line bg-surface px-2.5 py-1 text-sm leading-snug text-fg/90",
        className,
      )}
    >
      {children}
    </span>
  );
}
