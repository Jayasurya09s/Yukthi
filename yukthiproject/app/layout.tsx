import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function getAppUrl() {
  if (process.env.NODE_ENV !== "production") {
    return process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  }

  return (
    process.env.NEXT_PUBLIC_APP_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000")
  );
}

export const metadata: Metadata = {
  title: "Yukthi - AI Infrastructure Cost Optimization",

  description:
    "Analyze and optimize your AI infrastructure spending across ChatGPT, Claude, Cursor, Copilot, Gemini, and more. Discover 20-40% savings with deterministic pricing intelligence.",

  keywords: "AI cost optimization, ChatGPT, Claude, Cursor, pricing analysis, cost reduction",

  metadataBase: new URL(getAppUrl()),

  openGraph: {
    title: "Yukthi - Stop Overpaying for AI Tools",

    description:
      "AI infrastructure cost optimization platform with deterministic pricing analysis.",

    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yukthi - AI Cost Optimization",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Yukthi - Stop Overpaying for AI Tools",
    description: "AI infrastructure cost optimization platform",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-blue-500/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}