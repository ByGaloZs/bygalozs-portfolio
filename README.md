# bygalozs.dev

Personal portfolio for Mario Padilla Franco. The project is a static-first Next.js site designed to deploy on Vercel. Its first full feature will be a dynamic CV page; visual design and portfolio content are intentionally still in progress.

## Local setup

Requirements: Node.js 20.19 or later and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Development commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
```

## Architecture

The App Router in `src/app` defines pages and route segments. Pages are Server Components by default and consume typed content modules directly. GitHub OAuth is used only by the private CMS editor; no database is required.

Portfolio content has one source of truth in `content/portfolio.json`. Each entry separates concise `summary` data for the CV from optional `details` for dedicated pages. This avoids copying the same experience or project content between routes.

## CMS and content

Professional content is stored in `content/portfolio.json`. The TypeScript modules under `src/data` expose that content to all pages, including the web CV, detail pages and PDF print view.

The private editor is available at `/admin`. It uses GitHub OAuth and only accepts the `ByGaloZs` account. Saving in the CMS creates a commit on the `master` branch; Vercel then redeploys the website.

### One-time setup

1. In GitHub, create an OAuth App under **Settings > Developer settings > OAuth Apps**.
2. Set the homepage URL to `https://bygalozs.dev/admin`.
3. Set the authorization callback URL to `https://bygalozs.dev/api/cms/callback`.
4. In Vercel, add `GITHUB_OAUTH_CLIENT_ID` and `GITHUB_OAUTH_CLIENT_SECRET` from the OAuth App as environment variables for the Production environment.
5. In GitHub **Settings > Actions > General**, set **Workflow permissions** to **Read and write permissions** so the PDF workflow can commit the generated file.
6. Redeploy the site, then visit `https://bygalozs.dev/admin` and sign in with `ByGaloZs`.

For a different production domain, update `base_url` and `site_url` in `public/admin/config.yml`, then use matching GitHub OAuth App URLs.

### PDF updates

`npm run generate:cv` builds the printable `/cv/print` route with Chrome and writes `public/cv/mario-padilla-franco-cv.pdf`.

The GitHub Actions workflow `.github/workflows/generate-cv.yml` runs this command after changes to the content or print layout, then commits the refreshed PDF. The subsequent Vercel deployment serves the updated download.

## Important folders

| Path | Purpose |
| --- | --- |
| `src/app` | App Router routes, shared root layout, and global styles. |
| `src/components` | Reusable presentational components, currently focused on the shared layout and CV sections. |
| `content/portfolio.json` | Editable source of truth for professional content. |
| `src/data` | Typed adapters that expose the portfolio content to pages and components. |
| `src/types` | Shared TypeScript models for portfolio data. |
| `public/cv` | Future downloadable CV PDF. |
| `public/images` | Future portfolio images. |
| `public/icons` | Future standalone icons. |

## Routes

- `/` - Portfolio landing placeholder
- `/cv` - Data-driven CV skeleton
- `/experience` and `/experience/[slug]` - Experience overview and detail pages
- `/projects` and `/projects/[slug]` - Project overview and detail pages
- `/education` - Education overview
- `/certifications` - Certifications overview
