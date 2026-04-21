High-fidelity static export of the current React app.

What this is:
- A direct production build of the live React/Vite project
- Plain HTML, CSS, and JavaScript output inside this folder
- Assets copied with relative paths so the export can live in the repo

How to open:
- Open index.html directly in Firefox or Safari
- Chrome/Edge may block ES modules from file:// URLs; if so, run:
    python3 -m http.server 8080
  then open http://localhost:8080/export-html/

Notes:
- The main React/TypeScript source remains unchanged in src/
- This folder is regenerated from the React app to stay visually aligned with the live version
