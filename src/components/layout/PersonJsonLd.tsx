import { site } from "@/data/site";
import { siteUrl } from "@/lib/site-url";

/**
 * Structured data (schema.org Person) so search engines can connect this
 * site with your name, role and profiles.
 */
export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: siteUrl,
    image: `${siteUrl}/images/profile.png`,
    jobTitle: site.role,
    email: `mailto:${site.email}`,
    worksFor: {
      "@type": "CollegeOrUniversity",
      name: "Philippine Women’s College of Davao",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "AMA Computer College of Davao",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Davao City",
      addressCountry: "PH",
    },
    sameAs: [site.socials.github, site.socials.linkedin].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: the data is our own, and "<"
      // is escaped so it can never close the script tag early.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
