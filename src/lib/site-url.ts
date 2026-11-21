/**
 * The site's absolute URL, used for metadata, the sitemap and link previews.
 *
 * - NEXT_PUBLIC_SITE_URL: set this in Vercel if you add a custom domain.
 * - VERCEL_PROJECT_PRODUCTION_URL: provided by Vercel automatically, e.g.
 *   "emmanuelcabs-portfolio.vercel.app", so the free address works with
 *   no configuration.
 * - Falls back to localhost for local development.
 */
export const siteUrl: string =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
