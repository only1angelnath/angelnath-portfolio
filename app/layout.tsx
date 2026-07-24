import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nathaniel Adediran — Blockchain Data Analyst & On-Chain Researcher",
  description:
    "Blockchain data analyst and Python Developer. I use SQL on Dune Analytics and Python in production to turn raw on-chain data into decisions people can act on — across Ethereum, Base, Solana, and Arbitrum. Creator of PrivaScan and Angelnath On-chain Diary.",
  keywords: [
    "Nathaniel Adediran",
    "Angelnath",
    "Blockchain Data Analyst",
    "On-Chain Researcher",
    "Dune Analytics",
    "SQL Analytics",
    "Python Development",
    "Python Data Analyst",
    "Web3 Data Analyst",
    "DeFi Analytics",
    "On-Chain Analytics",
    "Ethereum Analytics",
    "Base Blockchain",
    "Solana Analytics",
    "Privacy Protocols",
    "ZK Proofs",
    "PrivaScan",
    "Blockchain Research",
    "Smart Contract Analytics",
    "Web3 Research",
    "Crypto Data Analyst",
  ],
  authors: [{ name: "Nathaniel Adediran" }],
  creator: "Nathaniel Adediran",
  publisher: "Nathaniel Adediran",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://angelnath.vercel.app/",
    title: "Nathaniel Adediran — Blockchain Data Analyst & On-Chain Researcher",
    description:
      "Blockchain data analyst and Python Developer. SQL on Dune Analytics, Python in production, research published with verified on-chain data. Creator of PrivaScan.",
    siteName: "Angelnath — On-chain Diary",
    images: [
      {
        url: "https://angelnath.vercel.app/assets/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Nathaniel Adediran — Blockchain Data Analyst",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@_angelnath",
    creator: "@_angelnath",
    title: "Nathaniel Adediran — Blockchain Data Analyst & On-Chain Researcher",
    description:
      "Blockchain data analyst and Python Developer. SQL on Dune Analytics, Python in production, research published with verified on-chain data. Creator of PrivaScan.",
    images: ["https://angelnath.vercel.app/assets/thumbnail.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://angelnath.vercel.app/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
