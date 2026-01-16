import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Künstlerei',
  description: 'Kunstakademie Würselen e.V.',

  appleWebApp: {
    title: "Künstlerei",
    statusBarStyle: "default",
    capable: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },                 // Klassisch (Fallback)
      { url: '/icon1.png', type: 'image/png' }, // Desktop PNG 
      { url: '/icon0.svg', type: 'image/svg+xml' }, // SVG 
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
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