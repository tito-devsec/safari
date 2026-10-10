# islandBoy — Zanzibar tours

React + Vite frontend for islandBoy Zanzibar Travel, built from the design mockup and animated with GSAP.

## Stack

- React 18 + Vite
- GSAP 3 (hero entrance, scroll reveals, card carousels, offcanvas menu)
- Plain CSS with the design's tokens: Lora, Caveat, Poppins and Montserrat; yellow `#F4E90F`, cream `#FCF1E7`, red `#B51B1B`, dark `#272727`

## Sections

Header · Hero with video background and experience carousel · About + "Why choosing islandBoy" · Premium 8-day package with day-by-day carousel (static background image) · Handpicked tours · Airport transfers banner · Footer

## Run it

```bash
npm install
npm run dev
```

Build for production with `npm run build` (output in `dist/`).

## Notes

- Images live in `public/images`; the logo is `islandboy-logo.png`.
- The hero plays a muted YouTube clip (0:15–1:20 on a loop) over a poster image.
- Days 2–8 of the package are suggested itinerary text and should be confirmed before launch.
