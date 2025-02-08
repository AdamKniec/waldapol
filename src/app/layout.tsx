import type { Metadata } from "next";
import "./globals.css";
import { BarlowFont500 } from "./fonts";

export const metadata: Metadata = {
  title: "Waldapol",
  description: "Zbiorniki do samochodów ciężarowych",
  keywords: [
    "Zbiorniki do samochodów ciężarowych",
    "Zbiorniki do Ciężarówek",
    "Zbiorniki",
    "zbiornik paliwa",
    "Zbiornik do Autobusu",
    "Zbiornik do sprzętów specjalistycznych",
    "Zbiorniki do ciągników rolniczych",
    "zbiornik na zamówienie",
    "Zbiornik do busa",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${BarlowFont500.className}`}>{children}</body>
    </html>
  );
}
