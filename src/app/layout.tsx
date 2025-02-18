import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

// Import font Pixel
const pixelFont = Press_Start_2P({
  variable: "--font-pixel",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Escape Room Quiz",
  description: "Jawab semua pertanyaan untuk melarikan diri!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pixelFont.variable} font-pixel antialiased`}>
        {children}
      </body>
    </html>
  );
}
