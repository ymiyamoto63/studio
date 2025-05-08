import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ServiceWorkerRegistrar } from '@/components/service-worker-registrar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Personal Color Analyzer',
  description: 'Upload an image and analyze colors to find your personal color season.',
  manifest: '/manifest.json',
  applicationName: 'Personal Color Analyzer',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'ColorAnalyzer', // Should match short_name in manifest.json
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: '#008080', // Should match theme_color in manifest.json
  other: {
    "mobile-web-app-capable": "yes", // For Android PWA behavior
    "msapplication-TileColor": "#008080",
    "msapplication-tap-highlight": "no",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      {/* Next.js handles injecting meta tags from the metadata object into the <head> */}
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <ServiceWorkerRegistrar />
        <Toaster />
      </body>
    </html>
  );
}
