# Playmates

Nepal's sports & fitness ecosystem — a marketing site connecting players, venues, coaches, academies, and events on one platform.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Framer Motion](https://motion.dev) for animation
- [Radix UI](https://radix-ui.com) + [shadcn](https://ui.shadcn.com) primitives
- [Vercel](https://vercel.com) for hosting

## Getting Started

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```text
src/
  app/                # Routes (App Router)
    page.tsx           # Home
    about/page.tsx      # About
    contact/page.tsx    # Contact
  components/
    sections/           # Page sections (navbar, hero, footer, ...)
    ui/                  # Reusable UI primitives (button, ...)
  data/                 # Static content (nav links, copy, showcase screens)
  lib/                  # Shared utilities
public/                 # Static assets (images, app screenshots)
```

Path alias `@/*` maps to `src/*`.

## Deployment

Deployed on Vercel. Pushing to `main` triggers a production deployment; other branches get preview deployments.

```bash
vercel        # preview deploy
vercel --prod # production deploy
```

## Contributing

Run `npm run lint` and make sure the build (`npm run build`) passes before opening a PR.
