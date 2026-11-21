# Emmanuel Cabuloy — Portfolio

Personal portfolio built with Next.js (App Router), React, TypeScript and Tailwind CSS v4.

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Where things live

| Path | Purpose |
| --- | --- |
| `src/data/site.ts` | Name, email, social links, CV path — edit this first |
| `src/data/experience.ts` | Work history (timeline) |
| `src/data/skills.ts` | Skill categories and tags |
| `src/data/projects.ts` | Selected projects |
| `src/types/index.ts` | Types every data file must satisfy |
| `src/app/globals.css` | Design tokens (`@theme`) and base styles |
| `src/app/layout.tsx` | Fonts, SEO and Open Graph metadata |
| `src/app/opengraph-image.png` | Link preview image (source: `docs/brand/og.html`) |
| `src/app/icon.png`, `apple-icon.png`, `favicon.ico` | Site icons (source: `docs/brand/icon.html`) |
| `src/app/robots.ts`, `sitemap.ts` | Search engine files |
| `src/lib/site-url.ts` | Works out the site's URL (see Deploying) |
| `src/components/` | `layout/`, `sections/` and reusable `ui/` components |
| `public/documents/` | Downloadable CV |
| `public/images/` | Profile photo and project screenshots |
| `docs/cv/cv.html` | Source of the CV PDF |

Search for `PLACEHOLDER` to find details still to fill in.

## Adding content

- **A project:** add a screenshot to `public/images/projects/` (16:10 works
  best), then add an entry to `src/data/projects.ts`. Leave out `repoUrl` or
  `liveUrl` if there isn't one; their buttons hide automatically.
- **A role:** add an entry at the top of `src/data/experience.ts`.
- **A skill:** add it to the right list in `src/data/skills.ts`.

## Updating the CV

The downloadable PDF is generated from `docs/cv/cv.html`. This public
version leaves out the home address, phone number and references.

1. Edit `docs/cv/cv.html`.
2. Open it in Chrome and choose Print → Save as PDF
   (paper size Letter, margins None, Background graphics on).
3. Save it over `public/documents/Emmanuel-Cabuloy-CV.pdf`.

## Publishing to GitHub

Create an empty repository named `portfolio` on GitHub (no README, no
.gitignore), then from this folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/emmanuelcabs/portfolio.git
git push -u origin main
```

## Deploying to Vercel

1. Sign in at vercel.com with your GitHub account.
2. Choose **Add New → Project**, then import `emmanuelcabs/portfolio`.
3. Keep the detected settings (Framework: Next.js) and click **Deploy**.

No environment variables are needed. Vercel provides
`VERCEL_PROJECT_PRODUCTION_URL`, and the site uses it for its canonical
URL, sitemap and link previews. If you later add a custom domain, set
`NEXT_PUBLIC_SITE_URL` (e.g. `https://example.com`) in the project's
environment variables and redeploy.

Every push to `main` redeploys the site automatically.

To check the link preview after deploying, paste your URL into
<https://www.opengraph.xyz> or share it in Messenger or LinkedIn.
