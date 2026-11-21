import type { ReactNode } from "react";
import { Mail } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";

interface SocialLink {
  label: string;
  href: string;
  icon: ReactNode;
  external: boolean;
}

function getSocialLinks(): SocialLink[] {
  const links: SocialLink[] = [
    {
      label: "GitHub",
      href: site.socials.github,
      icon: <GitHubIcon size={18} />,
      external: true,
    },
  ];

  // LinkedIn only appears once a real URL is set in src/data/site.ts
  if (site.socials.linkedin) {
    links.push({
      label: "LinkedIn",
      href: site.socials.linkedin,
      icon: <LinkedInIcon size={18} />,
      external: true,
    });
  }

  links.push({
    label: "Email",
    href: `mailto:${site.email}`,
    icon: <Mail size={18} aria-hidden="true" />,
    external: false,
  });

  return links;
}

/** Icon links to GitHub, LinkedIn and email. Reused in the hero and footer. */
export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {getSocialLinks().map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            aria-label={link.label}
            title={link.label}
            {...(link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors duration-200 hover:border-line-strong hover:text-fg"
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
