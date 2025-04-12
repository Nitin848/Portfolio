import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from 'react';
import Header from "@/components/layout/Header";
import GlobalUI from "@/components/layout/GlobalUI";
import LoadingSpinner from "@/components/layout/LoadingSpinner";
import ScrollRestoration from "@/components/layout/ScrollRestoration";
import LoadingScreen from "@/components/layout/LoadingScreen";
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
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: "Nitin Kumar Reddy | Software Developer",
    description: "Invest with Confidence, Grow with Purpose.",
    type: "website",
    locale: "en_US",
    siteName: "Nitin Kumar Reddy Portfolio",
    images: [
      {
        url: '/nkr logo.png',
        width: 800,
        height: 600,
        alt: 'Nitin Kumar Reddy Logo'
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitin Kumar Reddy | Software Developer",
    description: "Software developer specializing in Python, AI/ML, and web development",
    images: ['/nkr logo.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
        suppressHydrationWarning
      >
        <LoadingScreen>
          <Suspense fallback={<LoadingSpinner />}>
            <ScrollRestoration />
            <Header />
            <GlobalUI />
            {children}
          </Suspense>
        </LoadingScreen>
      </body>
    </html>
  );
}
