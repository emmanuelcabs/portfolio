import { cacheLife } from "next/cache";
import { ArrowUp } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";

export async function Footer() {
  const year = await copyrightYear();

  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="flex items-center gap-1 font-display text-lg font-bold tracking-tight text-fg">
            {site.shortName}
            <span aria-hidden="true" className="h-4 w-1.5 bg-accent" />
          </p>
          <p className="mt-2 text-sm text-subtle">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <SocialLinks />
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
          >
            Back to top
            <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  );
}

/**
 * The page is prerendered at build time, so this is the year of the
 * latest deploy. Cache Components requires time-based values to opt in
 * to caching; "max" keeps the page fully static between deploys.
 */
async function copyrightYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}
