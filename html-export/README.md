# Smart Expedite - Static HTML/CSS/JS Export

This folder contains a complete static HTML/CSS/JavaScript export of the Smart Expedite website.

## Files Structure

```
html-export/
├── css/
│   └── styles.css       # Complete CSS styles
├── js/
│   └── main.js          # JavaScript for interactivity
├── assets/              # Copy images from public/assets here
│   ├── Logo.jpg
│   ├── homepage_hero.jpg
│   ├── shipper_hero.jpg
│   ├── carrier_hero.png
│   ├── services_hero.png
│   ├── Cargo_van.jpg
│   ├── Ford Cargo van.jpg
│   ├── Full size Van.jpg
│   ├── 16_footer.jpg
│   ├── Inside the Dock.jpg
│   ├── 26 on the road.jpg
│   ├── carrier_road_video.mp4
│   └── Founder.jpg
├── index.html           # Homepage
├── about.html           # About page
├── shippers.html        # Shippers page
├── carriers.html        # Carriers page
├── services.html        # Services page
├── contact.html         # Contact page
├── account.html         # Account login/signup page
│   (Rate calculator is embedded in shippers.html#rate-calculator)
└── README.md            # This file
```

## Setup Instructions

1. **Copy Assets**: Copy all images and videos from the React project's `public/assets/` folder into the `assets/` folder here.

2. **Open in Browser**: Simply open `index.html` in any web browser to view the site.

3. **Deploy**: Upload all files to any static hosting service (Netlify, Vercel, GitHub Pages, etc.)

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Mobile navigation menu
- ✅ Scroll animations
- ✅ Equipment image slider with auto-play
- ✅ FAQ accordion
- ✅ Form handling with success messages
- ✅ Active navigation highlighting

## Browser Support

- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome for Android)

## Notes

- Forms display a success message but don't submit to a server (add your own backend integration)
- All links are relative and work with the static file structure
