import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

const inter = Inter({
  display: "swap",
  variable: "--font-inter",
});
const me_quran = localFont({
  src: "../fonts/me_quran.ttf",
  variable: "--font-me-quran",
});

export const metadata: Metadata = {
  title: "Dua &amp; Ruqyah | All Duas Collection - assignment",
  description: "IRD Foundation - assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${me_quran.variable} antialiased bg-light-blue p-10`}
      >
        {children}
      </body>
    </html>
  );
}
