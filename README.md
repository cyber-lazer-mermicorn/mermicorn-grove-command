# Mermicorn Grove Command

Operator console for **Cyber Lazer Mermicorn**. Operator: **Cherry**.

The gate, verticals, health, quality, and rights pages read live hosts. Status words are only `ready`, `partial`, `missing`, and `unreachable`. Nothing on the dashboard is a hardcoded health badge.

## What is live

| Surface | Host |
| --- | --- |
| Rental | https://cherry-rental-engine-o7.vercel.app (`/api/health`) |
| Portfolio | https://cherry-portfolio.vercel.app |
| Deal finder | https://ai-deal-finder.vercel.app |
| Auto matchmaker | https://cherry-auto-matchmaker.vercel.app |
| Rift | https://cherry-rift-lab.vercel.app |
| Ravewear | https://cherry-ravewear-studio.vercel.app |
| Numismatic | https://cherry-numismatic-auction-lab.vercel.app |
| Chance | https://cherry-chance-game-lab.vercel.app |
| Operator apprenticeship | https://cherry-operator-apprenticeship.vercel.app |
| Commerce | https://mermicorn-commerce-ai.vercel.app |

Commerce is listed because the deploy is part of the constellation. When it 404s, the chip says `missing`.

Rental rollup is `ready` when every connector is ready, or when the only non-ready connector is Google Calendar at `partial`.

## Routes

- `/` — gate and constellation map
- `/verticals` — cards, with a client-side lane and text filter
- `/health` — rental connector rows from `/api/health`
- `/quality` — the 9+ bar and open residuals
- `/rights` — proprietary short form

## Runtime

This command surface ships on **TanStack Start** (React 19, file routes, Tailwind 4) because that is the publishable runtime of this builder. The rental engine remains the Next.js app. Migrating those Next apps to Next 16 before **2026-10-21** is an open residual, not work this surface pretends to have finished.

Health and host checks run on the server, with a 4 second timeout. A timeout or network failure renders `unreachable`. The page does not crash.

Upstream health notes are redacted for email addresses, Stripe account ids, key-shaped tokens, and Supabase project hosts before display.

## Environment

See [.env.example](./.env.example). Only public names:

- `RENTAL_HEALTH_URL`
- `HEALTH_TIMEOUT_MS`

No API keys, Stripe secrets, or private records belong in source.

## Rights

Proprietary. No open license. See `/rights` and the Grove [RIGHTS.md](https://github.com/cyber-lazer-mermicorn/mermicorn-grove/blob/main/RIGHTS.md).
