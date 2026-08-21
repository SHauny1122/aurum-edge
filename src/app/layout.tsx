import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { product } from "@/lib/config";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: product.title,
  description: product.description,
  keywords: ["XAUUSD", "Gold trading", "TradingView indicator", "market analysis"],
  openGraph: {
    title: product.title,
    description: product.description,
    type: "website",
    siteName: product.name,
  },
  twitter: { card: "summary_large_image", title: product.title, description: product.description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}><body>{children}</body></html>;
}
