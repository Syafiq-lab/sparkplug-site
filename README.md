@font-face {
font-family: 'SuperClarendon';
src: url('/assets/Fonts/SuperClarendon.ttc') format('truetype-collection');
font-weight: normal;
font-style: normal;
font-display: swap;
}

@font-face {
font-family: 'SuperClarendon';
src: url('/assets/Fonts/SuperClarendon.ttc') format('truetype-collection');
font-weight: bold;
font-style: normal;
font-display: swap;
}

/* Base styles */
* {
  font-family: 'SuperClarendon', ui-serif, Georgia, serif;
  }

/* Utility classes */
.brand {
color: #DC143C;
font-weight: bold;
}

/* Background styles */
.bg-radial-mask {
background:
radial-gradient(circle at 20% 50%, rgba(220, 20, 60, 0.15) 0%, transparent 50%),
radial-gradient(circle at 80% 50%, rgba(220, 20, 60, 0.15) 0%, transparent 50%),
radial-gradient(circle at 40% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
#000000;
}

.bg-star {
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-image: url('/assets/bg-star.png');
background-repeat: no-repeat;
background-position: center;
background-size: cover;
opacity: 0.1;
pointer-events: none;
}

.layer {
position: relative;
z-index: 10;
}# 5parkplug — Website (React + Vite + Tailwind CDN)

This project recreates the provided AI/PDF design using **React (framework)** and **Vite**. Styling is done with utility classes via **Tailwind Play CDN** (easy to swap for full Tailwind/PostCSS later).

## Quickstart
```bash
# 1) Install deps
npm install

# 2) Run dev server
npm run dev

# 3) Build for production (optional)
npm run build
npm run preview
```

## Where to edit
- Text & layout: `src/App.jsx`
- Global tokens & extras: `src/app.css`
- Images: `public/assets/` (replace with your exported slices)
- Brand color: `--brand` in `src/app.css` (Crimson #DC143C)

## Notes
- The design copy and assets are taken from the provided references.
- If you have licensed fonts (e.g., Superclarendon), place them in `public/fonts` and update CSS font stacks.
