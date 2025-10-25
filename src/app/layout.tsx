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
  title: "Tokai Sushi - Autentisk Japansk Mat i Stockholm & Enköping",
  description: "Upplev den finaste sushin och japanska köket på Tokai Sushi. Besök våra restauranger i Telefonplan (Stockholm) och Enköping. Beställ online för hemkörning.",
  keywords: ["sushi", "japansk restaurang", "telefonplan", "enköping", "stockholm", "sushi hemkörning", "japanese restaurant", "sushi delivery"],
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
