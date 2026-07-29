# Playmates

Nepal's sports & fitness ecosystem — a marketing site connecting players, venues, coaches, academies, and events on one platform.

This repo is the marketing/landing site for the Playmates mobile app (screenshots shown on the site live under `public/screens/`).

## What is Playmates?

Playmates is a mobile app and platform that brings together athletes, sports enthusiasts, coaches, venues, event organizers, and fitness communities in one place. It's built around two sides of the same ecosystem:

**For players**, the app helps you:
- Book sports venues instantly
- Discover nearby games and activities
- Find teammates and opponents by location and skill level
- Join tournaments, leagues, and sporting events
- Explore gyms, fitness centres, and coaching programmes
- Connect with sports communities and clubs
- Build a personal sporting profile and track your activity

**For sports businesses** (venues, academies, gyms), it provides:
- Online booking management
- Facility scheduling and membership management
- Event promotion and performance insights
- Increased visibility across Nepal

Core feature areas surfaced in the app: venue discovery & booking, coaches & trainers, tournaments/events, finding playmates by skill level, marathon/race registration, and secure bookings.

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
