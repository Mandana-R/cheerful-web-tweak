Cheerful Logistics — High-Fidelity Static Export
=================================================

This folder is a pixel-accurate, production build of the live site.
It contains exactly the same HTML, CSS, and JavaScript that the
deployed site uses — same layout, colors, fonts, sections, animations,
and components. Nothing was simplified or redesigned.

HOW TO OPEN
-----------

Option A — Double-click index.html
  Works in Firefox out of the box.
  Works in Safari out of the box.

Option B — Chrome / Edge
  Chrome blocks ES modules from file:// URLs by default.
  Easiest fix: run a one-line local server in this folder.

    Python 3:   python3 -m http.server 8080
    Node:       npx serve .

  Then open http://localhost:8080

WHAT'S INSIDE
-------------
  index.html              -> the app entry
  assets/index-*.js       -> the full app bundle (all pages, routing, components)
  assets/index-*.css      -> the full design system + Tailwind output
  truck-rate-map.html     -> standalone map widget loaded by the Shippers page
  favicon.ico, robots.txt, placeholder.svg

DEPLOY
------
This folder is a complete static site. Drop it into Netlify, Vercel,
S3, Cloudflare Pages, GitHub Pages, or any static host.
