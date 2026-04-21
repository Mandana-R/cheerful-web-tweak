# Static HTML Export

This folder contains the **production build of the React app** as a static site, with full 1:1 parity to the live preview.

## Structure

- `index.html` — entry HTML (loads the SPA bundle)
- `about.html`, `carriers.html`, `contact.html`, `services.html`, `shippers.html`, `account.html`, `rate-calculator.html`, `blog.html` — copies of `index.html` so each route has its own file
- `assets/` — bundled JS, CSS, images, and videos with content-hashed filenames
- `truck-rate-map.html` — standalone interactive truck rate map (loaded inside an iframe by the Shippers page)
- `favicon.ico`, `robots.txt`, `placeholder.svg` — public assets

## How it works

This is a **single-page application** (React + React Router). All HTML files share the same bundle; client-side routing renders the correct page based on the URL. Direct file access (e.g., opening `carriers.html`) works because each route has its own HTML file.

## Hosting

Deploy the entire folder to any static host (Netlify, Vercel, GitHub Pages, S3+CloudFront, plain Nginx, etc.). For pretty URLs (e.g. `/carriers` instead of `/carriers.html`), configure a SPA fallback so unknown paths serve `index.html`.

## Regenerating

Run `npx vite build` from the project root, then copy `dist/` into this folder and duplicate `index.html` for each route.
