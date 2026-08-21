# Aurum Edge

Premium landing page for a TradingView analysis tool focused on XAUUSD / Gold scalp analysis.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production verification

```bash
npm run lint
npm run build
npm run start
```

## Product configuration

Editable product information, support email, navigation, feature copy, and FAQ content live in `src/lib/config.ts`.

The early-access CTA currently opens a `mailto:` link. Replace it with the Whop checkout URL in `src/components/marketing.tsx` when checkout is ready.
