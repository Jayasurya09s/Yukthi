# Yukthi

Yukthi Analytics — a small monorepo containing a Next.js web app that helps startups discover wasted spend on AI subscriptions and suggests savings.

## Live Deployment

- Production: https://yukthi001.vercel.app

## Quick overview

- Primary app: the Next.js application lives in the `yukthiproject/` folder.
- This repository is structured as a simple monorepo containing the web app and supporting docs/tools.

## Quick start (development)

1. Install dependencies at the repo or app level:

```bash
npm install
# then for the Next.js app
cd yukthiproject
npm install
```

2. Run the app locally:

```bash
cd yukthiproject
npm run dev
# Open http://localhost:3000
```

3. Build for production:

```bash
cd yukthiproject
npm run build
npm start
```

## Environment configuration

- Local development config file: `.env.local` inside `yukthiproject/` (or root, if you prefer).
- Production: configure environment variables in Vercel (or your hosting provider).

Recommended environment variables (set these for production):

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
OPENROUTER_API_KEY
EMAIL_USER
EMAIL_PASS
NEXT_PUBLIC_APP_URL=https://yukthi001.vercel.app
```

If `NEXT_PUBLIC_APP_URL` is not set the app falls back to http://localhost:3000 for generated links.

## Project structure (important paths)

- `yukthiproject/` — Next.js application
	- `app/` — Next 13+ app routes and pages
	- `components/` — shared UI components
	- `lib/` — utilities, API clients, and services
	- `data/` — mock and pricing data
	- `tests/` — unit/integration tests
- `vercel.json` — deployment settings for Vercel
- `package.json` — root workspace scripts and dependencies

See `yukthiproject/README.md` for app-specific details and contributors notes.

## Running tests

From the `yukthiproject/` folder run the test runner (this repo uses Vitest):

```bash
cd yukthiproject
npm test
```

## Contributing

- Fork the repo, create a branch for your change, and open a pull request.
- Keep changes focused to a single area (UI, engine, data, or infra).

## Troubleshooting

- If you see environment-related behavior, confirm `NEXT_PUBLIC_APP_URL` and Supabase keys are present.

## License

This project is available under the terms of the repository `LICENSE` file.

---

If you'd like, I can also update `yukthiproject/README.md` with matching developer notes and example `.env.local` contents.
