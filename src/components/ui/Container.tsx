import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/** Centres content and applies the site's horizontal gutters. */
export function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-page px-6 sm:px-8", className)}
      {...props}
    />
  );
}
