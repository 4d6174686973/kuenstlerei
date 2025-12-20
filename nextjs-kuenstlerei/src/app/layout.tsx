import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const arialNarrow = localFont({
  src: [
    {
      path: "../public/fonts/Arial-Narrow.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Arial-Narrow-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Arial-Narrow-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Arial-Narrow-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-arial-narrow",
});

export const metadata: Metadata = {
  title: "Künstlerei",
  description: "Kunstakademie Würselen e.V.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={arialNarrow.variable}>
      <body
        className="font-sans antialiased bg-white min-h-screen flex flex-col"
      >
        <Header />
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}