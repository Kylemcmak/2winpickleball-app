import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "2WinPickleball — Train With The Pickleball Cowboy",
  description:
    "Home training videos, organized and tracked — the Pickleball Cowboy's coaching, between camps.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
        <body className="min-h-screen bg-cream text-ink antialiased">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
