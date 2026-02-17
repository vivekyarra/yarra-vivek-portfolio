# Yarra Vivek Portfolio

Personal portfolio website built with Next.js 15, Tailwind CSS 4, and OpenNext for Cloudflare Workers deployment.

## Tech Stack

- Next.js (App Router)
- React 19
- Tailwind CSS 4
- Motion
- OpenNext + Wrangler (Cloudflare Workers)

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

3. Open:

`http://localhost:3000`

## Production Build (Local)

```bash
npm run build
npm run start
```

## Environment Variables

Create `.env.local` for local runs:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=
```

`NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` are optional.

## Cloudflare Workers Deployment

### Manual deploy

```bash
npm run deploy
```

### GitHub Actions deploy

Workflow file: `.github/workflows/deploy-cf-workers.yaml`

Required GitHub repository secrets:

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_POSTHOG_KEY` (optional)
- `NEXT_PUBLIC_POSTHOG_HOST` (optional)

Push to `main` (or trigger workflow manually) to deploy.

