import { Newsreader } from "next/font/google";
import { DM_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "./components/Navbar";

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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${elza.variable} ${newsreader.variable} ${dmMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
