# Yukthi
Yukthi Analytics - A website that tells startups whether they are wasting money on AI subscriptions and shows how to save money intelligently

## 🚀 Live Deployment

**Production URL:** https://yukthi-one.vercel.app/

## 📋 Environment Configuration

The application uses dynamic URL configuration to work seamlessly across development and production environments.

### Development (Local)
- **URL:** http://localhost:3000
- **Config:** `.env.local`
- **Command:** `npm run dev`

### Production (Vercel)
- **URL:** https://yukthi-one.vercel.app
- **Config:** `.env.production` + Vercel Environment Variables

### How It Works
The app automatically selects the correct environment based on where it's running:
- Uses `NEXT_PUBLIC_APP_URL` environment variable
- Falls back to `http://localhost:3000` if not set
- All internal links, shares, and QR codes use the correct domain

## 📁 Project Structure

- `yukthiproject/` - Next.js application (see yukthiproject/README.md for details)
- `vercel.json` - Monorepo deployment configuration
- `package.json` - Workspace root configuration

## 🔧 Environment Variables Required

For production deployment on Vercel, set these in your Vercel dashboard:
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
OPENROUTER_API_KEY
EMAIL_USER
EMAIL_PASS
NEXT_PUBLIC_APP_URL (https://yukthi-one.vercel.app)
```
