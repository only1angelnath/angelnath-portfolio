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
  title: "Adediran Nathaniel - Blockchain data analyst and researcher",
  description: "I am a dedicated Blockchain Data analyst and Researcher with a Bachelor of Technology Degree in Statistics and over 3 years of experience in Web3.",
  keywords: [
    "Adediran Nathaniel",
    "Blockchain Researcher",
    "Blockchain Data Analyst",
  ],
  authors: [{ name: "Adediran Nathaniel" }],
  creator: "Adediran Nathaniel",
  publisher: "Adediran Nathaniel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dune.com/angelnath",
    title: "Adediran Nathaniel - Blockchain data analyst and researcher",
    description: "I am a dedicated Blockchain Data analyst and Researcher with a Bachelor of Technology Degree in Statistics and over 3 years of experience in Web3.",
    siteName: "Adediran Nathaniel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibrahim Memon - Blockchain data analyst and researcher",
    description: "A self-taught UI/UX designer and Software Engineer at WebHR.",
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
      <head>
        <link rel="canonical" href="https://dune.com/angelnath" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
