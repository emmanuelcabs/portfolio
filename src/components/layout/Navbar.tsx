"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { buttonStyles } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

/**
 * Client Component because it reacts to the browser: scroll position,
 * which section is on screen, and the mobile menu's open state.
 */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");

  // Solid background once the page has scrolled past the top
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link for the section crossing the middle of the viewport
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape or when the screen widens to desktop
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const desktop = window.matchMedia("(min-width: 768px)");
    const onResize = () => desktop.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        open
          ? "border-line bg-base"
          : scrolled
            ? "border-line bg-base/85 backdrop-blur-md"
            : "border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-page items-center justify-between px-6 sm:px-8"
      >
        <a
          href="#home"
          aria-label={`${site.shortName}, ${site.name}, back to top`}
          className="group flex items-center gap-1 font-display text-xl font-bold tracking-tight text-fg"
          onClick={() => setOpen(false)}
        >
          {site.shortName}
          {/* A text cursor: the developer half of the identity */}
          <span
            aria-hidden="true"
            className="h-5 w-2 translate-y-px bg-accent transition-opacity group-hover:opacity-60"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm transition-colors duration-200",
                    isActive ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-3.5 -bottom-0.5 h-px bg-accent transition-transform duration-300 ease-out-quart",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          {/* Wrapper owns the visibility so it can't clash with inline-flex */}
          <div className="hidden md:block">
            <a
              href={site.cvPath}
              download
              className={buttonStyles({ variant: "secondary", size: "sm" })}
            >
              <Download size={15} aria-hidden="true" />
              Download CV
            </a>
          </div>

          <button
            type="button"
            className="grid size-10 place-items-center rounded-full text-fg md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open ? (
        <div id="mobile-menu" className="animate-menu border-t border-line md:hidden">
          <ul className="mx-auto max-w-page px-6 py-4 sm:px-8">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between border-b border-line py-4 font-display text-2xl font-medium",
                      isActive ? "text-fg" : "text-muted",
                    )}
                  >
                    {link.label}
                    {isActive ? (
                      <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mx-auto max-w-page px-6 pb-6 sm:px-8">
            <a
              href={site.cvPath}
              download
              className={buttonStyles({ variant: "primary", size: "lg", className: "w-full" })}
            >
              <Download size={18} aria-hidden="true" />
              Download CV
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
