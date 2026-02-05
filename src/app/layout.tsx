// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Consulting Services | LeadGen Pro",
  description:
    "Explore our growth-focused consulting services for local businesses. From audits to full automation.",
  openGraph: {
    title: "LeadGen Pro | High-Impact Business Consulting",
    description: "Scale your business with expert-led strategy.",
    url: "https://your-domain.com/services",
    siteName: "LeadGen Pro",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg", // Always provide a social share image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-white text-slate-900 antialiased`}
      >
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
