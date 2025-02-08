import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Providers } from "#/src/components/Providers";
import favicon from "#/public/images/favicon.png";
import SummaryLargeImage from "#/public/images/summary_large_image.png";
import Cookie from "../components/Cookie";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

import "./globals.scss";
import Footer from "../components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export const viewport: Viewport = {
  themeColor: "#e141c0",
  colorScheme: "light",
  initialScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  title: {
    template: "DestinAI | %s",
    default: "DestinAI | Unlock Your True Potential",
  },
  description:
    "DestinAI uses AI to analyze your personality and provide tailored insights, helping you unlock your strengths and achieve your goals.",
  icons: [{ rel: "icon", url: favicon.src }],
  // metadataBase: new URL("https://stargate.nfteam.eu/"),
  openGraph: {
    title: "DestinAI | Unlock Your True Potential",
    siteName: "DestinAI | Unlock Your True Potential",
    description:
      "DestinAI uses AI to analyze your personality and provide tailored insights, helping you unlock your strengths and achieve your goals.",
    // url: "https://stargate.nfteam.eu/",
    type: "website",
    locale: "hu_HU",
    images: [
      {
        url: SummaryLargeImage.src,
        width: SummaryLargeImage.width,
        height: SummaryLargeImage.height,
        alt: "DestinAI | Unlock Your True Potential",
      },
    ],
  },
  twitter: {
    title: "DestinAI | Unlock Your True Potential",
    creator: "Rishabh",
    // site: "@nfteam_eu",
    description:
      "DestinAI uses AI to analyze your personality and provide tailored insights, helping you unlock your strengths and achieve your goals.",
    card: "summary_large_image",
    images: [
      {
        url: SummaryLargeImage.src,
        width: SummaryLargeImage.width,
        height: SummaryLargeImage.height,
        alt: "Stargate | NextJS SaaS Landing",
      },
    ],
  },
  alternates: {
    // canonical: "https://stargate.nfteam.eu/",
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Cookie />
          <Banner />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
