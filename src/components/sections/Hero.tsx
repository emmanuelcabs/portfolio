import { ArrowDown, Download } from "lucide-react";
import { site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProfileCard } from "@/components/ui/ProfileCard";
import { SocialLinks } from "@/components/ui/SocialLinks";

const headline = ["Educator.", "Developer.", "Technology Enthusiast."];

/**
 * Server Component: no interactivity, so it ships no JavaScript.
 * The only motion on the page is this one entrance: the three headline
 * lines rise in sequence, then the ID card settles in.
 */
export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="flex min-h-svh items-center pt-28 pb-20 lg:pt-24"
    >
      <Container className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <h1 id="hero-title">
            <span className="block animate-rise font-display text-xl font-medium text-muted sm:text-2xl">
              {site.name}
            </span>
            <span className="mt-5 block text-display-xl font-semibold">
              {headline.map((line, i) => (
                <span
                  key={line}
                  className="block animate-rise"
                  style={{ animationDelay: `${120 + i * 110}ms` }}
                >
                  {line}
                </span>
              ))}
            </span>
          </h1>

          <div
            className="animate-rise"
            style={{ animationDelay: "480ms" }}
          >
            <p className="mt-8 max-w-[34rem] text-xl leading-relaxed text-muted">
              <span className="text-fg">
                Over a decade in the classroom, a coder at heart.
              </span>{" "}
              I teach students to build real software, and I never stopped
              building it myself.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <ButtonLink href="#projects" size="lg">
                Explore My Work
                <ArrowDown size={18} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href={site.cvPath} download variant="secondary" size="lg">
                <Download size={18} aria-hidden="true" />
                Download CV
              </ButtonLink>
            </div>

            <SocialLinks className="mt-10" />
          </div>
        </div>

        <div
          className="flex animate-rise justify-center lg:col-span-5 lg:justify-end"
          style={{ animationDelay: "600ms" }}
        >
          <ProfileCard />
        </div>
      </Container>
    </section>
  );
}
