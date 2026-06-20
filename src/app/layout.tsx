import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Benit Arsene NSHUTIYIMANA | Full Stack Developer & UI/UX Designer",
  description:
    "Portfolio of Benit Arsene NSHUTIYIMANA — Full Stack Developer and UI/UX Designer crafting elegant digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-surface text-text-primary antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
