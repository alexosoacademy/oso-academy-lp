# OSO Academy — Landing Page

Static HTML landing page. No build step.

## Deploy
- Connect repo to Vercel → Framework Preset: **Other** → Deploy.
- `index.html` is served from the root.

## Local preview
Open `index.html` directly, or run any static server:
```
npx serve .
```

## Structure
- `index.html` — entry, fonts, design tokens
- `src/` — JSX modules (loaded via Babel-standalone)
- `assets/` — images
- `tweaks-panel.jsx` — in-page tweak controls
