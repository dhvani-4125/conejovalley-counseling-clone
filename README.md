# Conejo Valley Family Counseling — Next.js + Tailwind CSS

This conversion preserves the original HTML markup, stylesheet, assets, copy, section order, and vanilla JavaScript interactions to minimize visual changes. The page markup is rendered by the Next.js App Router; Tailwind CSS is configured and only its utilities layer is enabled so its preflight reset does not unintentionally change the original styling.

## Requirements
- Node.js 18.17+

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production build
```bash
npm run build
npm start
```

## Structure
- `src/app/page.js`: Next.js page shell
- `src/app/content.html`: original page body markup
- `src/app/globals.css`: original CSS, with asset paths adjusted
- `public/assets/`: original images and font files
- `public/site.js`: original interactions with safe initialization for Next.js loading
- `tailwind.config.js`: Tailwind configuration

No visual redesign or content rewrite was intended in this conversion.
