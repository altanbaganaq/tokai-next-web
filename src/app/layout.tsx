import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/config/i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tokai Sushi - Authentic Japanese Cuisine in Stockholm & Enköping",
  description: "Experience the finest sushi and Japanese cuisine at Tokai Sushi. Visit our locations in Telefonplan (Stockholm) and Enköping. Order online for delivery.",
  keywords: ["sushi", "japanese restaurant", "telefonplan", "enköping", "stockholm", "sushi delivery"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
