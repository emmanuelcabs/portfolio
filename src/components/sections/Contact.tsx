import { Download } from "lucide-react";
import { site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { Container } from "@/components/ui/Container";

/**
 * Contact without a form: visitors reach out through links that open
 * their own email app or profile, so no messages are collected or
 * stored by this site and no third-party service is needed.
 */
export function Contact() {
  const [emailUser, emailDomain] = site.email.split("@");
  const profiles = [
    { label: "GitHub", href: site.socials.github, icon: <GitHubIcon size={18} /> },
    ...(site.socials.linkedin
      ? [{ label: "LinkedIn", href: site.socials.linkedin, icon: <LinkedInIcon size={18} /> }]
      : []),
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-t border-line py-24 md:py-32"
    >
      <Container>
        <h2 id="contact-title" className="text-display-lg font-semibold">
          Let’s work together
        </h2>
        <p className="mt-5 max-w-prose text-lg text-muted">
          Open to teaching roles, academic collaborations and software
          projects. Email is the best way to reach me.
        </p>

        {/* The address itself is the call to action */}
        <a
          href={`mailto:${site.email}`}
          className="group mt-12 inline-block font-display text-[clamp(1.5rem,0.9rem+3.2vw,3.25rem)] leading-tight font-semibold tracking-tight text-fg"
        >
          {/* Lets small screens wrap after the @ instead of mid-word */}
          {emailUser}@<wbr />
          {emailDomain}
          <span
            aria-hidden="true"
            className="mt-2 block h-0.5 origin-left scale-x-[0.15] bg-accent transition-transform duration-500 ease-out-quart group-hover:scale-x-100"
          />
        </a>

        <div className="mt-14 flex flex-wrap items-center gap-3">
          {profiles.map((p) => (
            <ButtonLink
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              {p.icon}
              {p.label}
            </ButtonLink>
          ))}
          <ButtonLink href={site.cvPath} download variant="ghost">
            <Download size={18} aria-hidden="true" />
            Download CV
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
