/**
 * Joins class names and drops falsy values.
 * cn("a", isActive && "b", undefined) → "a b"
 * A tiny stand-in for clsx so the project needs one fewer dependency.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
