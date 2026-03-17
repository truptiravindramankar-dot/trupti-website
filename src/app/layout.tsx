import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tru Nutrition | TruSeeds – 7 Day Smart Seed Routine",
  description:
    "Simplify healthy eating with TruSeeds — a nutritionist-inspired 7-day seed nutrition system. 5 super seeds, pre-portioned sachets, one healthy habit.",
  keywords: [
    "TruSeeds",
    "Tru Nutrition",
    "seed nutrition",
    "healthy eating",
    "super seeds",
    "daily nutrition",
    "flax seeds",
    "pumpkin seeds",
    "sunflower seeds",
    "wellness",
  ],
  openGraph: {
    title: "Tru Nutrition | TruSeeds – 7 Day Smart Seed Routine",
    description:
      "7 Days. 7 Sachets. One Healthy Habit. Nutritionist-inspired daily seed nutrition.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
