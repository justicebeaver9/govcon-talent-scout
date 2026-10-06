# GovCon Talent Scout

Beta matching console for government-contractor recruiting. Ghostwork Labs.

Live search works immediately against a labeled synthetic cleared-talent pool (DC / National Capital Region). Stripe checkout, Greenhouse sync, and external sourcing turn on when environment variables are set. Nothing here invents real clearances or real people.

## Environment variables

Set these in Vercel → Project → Settings → Environment Variables.

| Name | Required | Purpose |
|---|---|---|
| `STRIPE_SECRET_KEY` | No | Stripe secret key. Enables checkout. |
| `STRIPE_PRICE_BASIC` | No | Price ID for $99/mo Basic. |
| `STRIPE_PRICE_PRO` | No | Price ID for $199/mo Professional. |
| `STRIPE_PRICE_ENTERPRISE` | No | Price ID for $399/mo Enterprise. |
| `LEAD_WEBHOOK_URL` | No | POST target for beta signups (Zapier, Make, Slack). |
| `GREENHOUSE_HARVEST_KEY` | No | Greenhouse Harvest API key. Syncs a shortlist on demand. |
| `RAPIDAPI_KEY` | No | Reserved for a sourcing connector. Unused until you add a provider. |

## Local

```bash
npx --yes serve public -p 3000
```

API routes need Vercel (`vercel dev`) or the deployed site. The page falls back to an in-browser matcher if `/api/search` is unreachable.
