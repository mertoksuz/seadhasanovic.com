# seadhasanovic.com — Sead Hasanović

Professional practical pistol shooter portfolio. Bilingual (EN / BS).

## Stack
Next.js 15 (App Router, static export) · Tailwind · Framer Motion · Lucide.

## Dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build   # outputs to /out
```

## Deploy (Cloudflare Pages)
```bash
CLOUDFLARE_API_TOKEN=... CLOUDFLARE_ACCOUNT_ID=... \
  npx wrangler@latest pages deploy out \
  --project-name=seadhasanovic-com --branch=main
```

## TODO — content to fill in
- [ ] Replace photos in `public/images/` with Sead's match photos
- [ ] Update `components/Results.tsx` `matches` array with real Practiscore data
- [ ] Update Gear strings in `lib/i18n.tsx` (`gear.pistolName1/2`, `summary`, specs)
- [ ] Add Practiscore profile URL in Results (if available)
- [ ] Add Instagram / YouTube to Navbar + Footer if desired (see mertoksuz.com for pattern)
