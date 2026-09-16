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

The App Router in `src/app` defines pages and route segments. Pages are Server Components by default and consume typed data modules directly; no backend, database, CMS, authentication, API routes, or client-side state library is used.

Portfolio content has one source of truth under `src/data`. Each entry separates concise `summary` data for the CV from optional `details` for dedicated pages. This avoids copying the same experience or project content between routes.

## Important folders

| Path | Purpose |
| --- | --- |
| `src/app` | App Router routes, shared root layout, and global styles. |
| `src/components` | Reusable presentational components, currently focused on the shared layout and CV sections. |
| `src/data` | Typed, structured portfolio content. Add professional details here rather than directly in page components. |
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
