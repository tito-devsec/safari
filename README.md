# Royal Flame Safari — React frontend

A React + Vite rebuild of the Royal Flame Safari homepage ([royalflamesafari.com](https://royalflamesafari.com/)), animated with GSAP.

## Stack

- React 18 + Vite
- GSAP 3 (ScrollTrigger reveals, parallax sketches, hero entrance, offcanvas and accordion motion)
- Plain CSS with the site's own design tokens (Poppins, Outfit, Syne, Montserrat and Segoe Print; gold `#D3B578`, cream `#F7F0E5`, maroon `#35090D`)

## Sections

Header with offcanvas menu · Hero (YouTube video background) · Our Most Popular Experiences · About · Most Visited Safaris (static background image) · Why You Should Work With Us · What Our Guests Say · FAQ accordion · Gallery · Footer · Scroll-to-top

## Run it

```bash
npm install
npm run dev
```

Build for production with `npm run build` (output in `dist/`).

## Notes

- Images live in `public/images`, the script font in `public/fonts`.
- The hero plays the same YouTube clip as the live site (muted, 0:15–1:20 on a loop) over a poster image. The middle sections use static background images.
