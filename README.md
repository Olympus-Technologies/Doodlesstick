# Doodlesstick Limited — Website

Specialist healthcare company website for **Doodlesstick Limited** (Northampton). Delivers supported living, domiciliary care, live-in care, children care services, healthcare recruitment, training, and CQC business consultancy.

## Stack

- **React 18** + **Vite 5** (SPA)
- **React Router v6** (`createBrowserRouter` + `AppLayout`)
- **Tailwind CSS 3** (utilities) + hand-written component CSS
- **react-slick** (hero + mission + training sliders)
- **react-head** (head management)
- Deploy target: **Netlify** (`netlify.toml` + `public/_redirects`)

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm start` / `npm run dev` | Start dev server (http://localhost:5173) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | ESLint over the whole project |

## Folder structure

```
src/
  components/        AppLayout, Navbar, Footer, Seo, Reveal, ScrollToTop,
                     BackToTop, training_products (slider + coming-soon)
  data/site.js       SITE constants (phone, email, address) + nav/service links
  images/            All page/brand assets (webp preferred)
  pages/             Home, About, Contact, Bookings, Vacancies (Job detail +
                     per-role job cards), Services (landing + 7 service pages)
  main.jsx           Router definition + entry
index.html           SEO meta, OG tags, structured data (JSON-LD)
netlify.toml         Build, SPA redirect, caching, security headers
public/              favicon, application form PDF, robots.txt, sitemap.xml,
                     _redirects
```

## Conventions

- One source of truth for contact/company details: `src/data/site.js`.
- Each page sets its own SEO via the `<Seo>` component (title, description,
  canonical, optional JSON-LD).
- Scroll animations via the `<Reveal>` component; respects
  `prefers-reduced-motion`.
- Sticky navbar has its own mobile drawer — no separate MobileNav component.
- Service pages share the `.care` layout block in `src/index.css`.

## Deployment (Netlify)

- Build command `npm run build`, publish directory `dist`.
- SPA fallback: `/* → /index.html` (also mirrored in `public/_redirects`).
- Security headers (CSP, HSTS, X-Frame-Options, etc.) are set in
  `netlify.toml` — keep CSP in sync when adding third-party resources.
- Hashed assets under `/assets/*` are cached long-term.

## Gotchas

- `npm start` must exist (aliased to `vite`) — Netlify and local tooling use it.
- Keep `index.html` canonical URL and `sitemap.xml` in sync with the live domain.
- Do not commit secrets; the Google Maps embed used on Contact needs no API key.
