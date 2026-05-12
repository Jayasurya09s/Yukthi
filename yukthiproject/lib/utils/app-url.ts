export function getAppUrl() {
  if (process.env.NODE_ENV !== "production") {
    return process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  }

  const deployedUrl =
    process.env.VERCEL_ENV === "preview"
      ? process.env.VERCEL_URL
      : process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;

  return deployedUrl
    ? `https://${deployedUrl}`
    : process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
}