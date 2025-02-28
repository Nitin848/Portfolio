import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import GlobalUI from "@/components/layout/GlobalUI";
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
  title: "Nitin Kumar Reddy | Software Developer",
  description: "Invest with Confidence, Grow with Purpose",
  keywords: ["Nitin Kumar Reddy", "Software Developer", "Python Developer", "AI/ML Engineer", "Web Development", "Portfolio"],
  authors: [{ name: "Nitin Kumar Reddy" }],
  openGraph: {
    title: "Nitin Kumar Reddy | Software Developer",
    description: "Invest with Confidence, Grow with Purpose.",
    type: "website",
    locale: "en_US",
    siteName: "Nitin Kumar Reddy Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitin Kumar Reddy | Software Developer",
    description: "Software developer specializing in Python, AI/ML, and web development"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <Header />
        <GlobalUI />
        {children}
      </body>
    </html>
  );
}
