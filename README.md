# NOIR Restaurant & Lounge (demo)

A fictional restaurant website built by KOVA Technologies as a demonstration.
Next.js (App Router), React, TypeScript, Tailwind CSS.

## Run it
    npm install
    npm run dev      # http://localhost:3000
    npm run build    # production check

## Where to edit things
- src/lib/config.ts    name, address, hours, WhatsApp number, disclosure wording
- src/data/menu.ts     dishes and prices
- src/data/gallery.ts  gallery photos and captions
- src/data/reviews.ts  illustrative reviews
- public/images        photos (AI-generated)

## Deploy
Push to its own GitHub repo, import it as a new Vercel project, then paste the
live URL into `href` of the restaurant demo in KOVA's src/lib/content.ts.
