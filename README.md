# Portfolio — Jenushan

Personal portfolio site for Jenushan, a Full-Stack Developer & Creative Technologist. A fast, single-page React app showcasing work, background, and contact info.

## Tech Stack

- **Vite** — build tooling & dev server
- **React 18** + **TypeScript**
- **React Router** — client-side routing
- **Tailwind CSS** + **shadcn/ui** (Radix primitives)
- **TanStack Query** — data fetching/caching
- **Supabase** — backend (contact, data)
- **React Hook Form** + **Zod** — forms & validation

## Pages

- `/` — Home
- `/about` — About
- `/projects` — Projects
- `/contact` — Contact
- `*` — 404 Not Found

## Getting Started

Requires [Node.js](https://nodejs.org) (or [Bun](https://bun.sh) — a `bun.lockb` is included).

```sh
# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app runs at the URL printed in your terminal.

## Environment Variables

Create a `.env` file in the project root:

```sh
VITE_SUPABASE_PROJECT_ID=your-project-id
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
```

These are read in `src/integrations/supabase/client.ts`. Never commit real keys.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Production build to `dist/` |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── pages/         # Route components (Home, About, Projects, Contact, NotFound)
├── components/
│   ├── layout/    # Navbar, Footer, PageLayout
│   ├── projects/  # ProjectCard
│   └── ui/        # shadcn/ui + custom components (GlowButton, SectionTitle)
├── integrations/
│   └── supabase/  # Supabase client & generated types
├── hooks/         # Custom hooks (use-mobile, use-toast)
├── lib/           # Utilities
└── App.tsx        # Routing & providers
```

## Deployment

Build with `npm run build` and serve the static `dist/` directory on any static host (Vercel, Netlify, Cloudflare Pages, etc.). Configure the Supabase environment variables on your host.

## Contact

- GitHub: [@jenushan04](https://github.com/jenushan04)
- LinkedIn: [jenushan-pavananthan](https://linkedin.com/in/jenushan-pavananthan)
