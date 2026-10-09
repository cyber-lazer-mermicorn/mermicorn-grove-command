# STATUS — Mermicorn Grove Command

Operator: Cherry · Cyber Lazer Mermicorn

Live chips are computed per request. This file records what was true when the surface was built, not a substitute for `/health`.

## Live

- Routes `/`, `/verticals`, `/health`, `/quality`, `/rights` are part of this surface.
- Rental connector health is fetched from `https://cherry-rental-engine-o7.vercel.app/api/health`.
- On the authoring check (2026-10-09), that endpoint returned HTTP 200 with connectors supabase, stripe, resend, calendly, ical, and cron at `ready`, and google_calendar at `partial`. Under the rollup rule, that reading is **ready**.
- These hosts returned HTTP 200 on the same check: portfolio, deal finder, auto matchmaker, rift lab, ravewear studio, numismatic auction lab, chance game lab, operator apprenticeship.
- The rental page at `cherry-rental-engine.vercel.app` is a different document (Liliha Home). This surface links the o7 host named by the operator.

## Residual

- Next 16 migration for the Next apps, before 2026-10-21. Not done here.
- `https://mermicorn-commerce-ai.vercel.app` returned HTTP 404. Rechecked on `/quality`.
- Rotate any key that has left the secret store. This repository does not contain secret values.
- `lazermermicorn.com` and the product subdomains from the August 2026 upgrade note did not resolve (NXDOMAIN). Links use the vercel.app hosts that answer.
- This surface runs on TanStack Start in the builder. It is not a Next.js App Router rewrite of the rental engine.

## Not claimed

No charge amounts, no private guest data, no invented connector states, no open-source license.
