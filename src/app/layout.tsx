import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBarComponent from "@/components/landing-page/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haibu",
  description: "This is Haibu's Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <link rel="icon" href="/icons/haibu-imagotipo.svg" sizes="any" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="mb-[10rem]">
          <NavBarComponent />
        </header>
        {children}
      </body>
    </html>
  );
}
