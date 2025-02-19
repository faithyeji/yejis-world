import { Newsreader } from "next/font/google";
import { DM_Mono } from "next/font/google";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

import Navbar from "./components/Navbar";
import { AudioProvider } from "./components/AudioContext";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const elza = localFont({
  src: "./elza-light.woff2",
  variable: "--font-elza",
});

const dmMono = DM_Mono({
  weight: ["300"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-dmMono",
});

export const metadata = {
  title: "Yeji's World",
  description: "Yeji Seo's collection of work.",
};

export default function RootLayout({ children }) {
  return (
    <AudioProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body
          className={`${elza.variable} ${newsreader.variable} ${dmMono.variable} antialiased`}
        >
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </AudioProvider>
  );
}
