import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LocomotiveScrollProvider } from "@/components/LocomotiveScrollProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Parmic | Commercial Fire Protection & Engineering Tasmania',
    template: '%s | Parmic Fire Protection'
  },
  description: 'Tasmania\'s vertically integrated fire protection specialists. In-house CAD design, local Mornington workshop fabrication, and 24/7 AS1851 maintenance.',
  keywords: [
    'Commercial fire protection Tasmania',
    'AS1851 fire maintenance Hobart',
    'Fire system engineering CAD',
    'Fire sprinkler fabrication Tasmania',
    'Fire detection systems',
    'Parmic Fire Protection'
  ],
  authors: [{ name: 'Parmic Fire Protection' }],
  creator: 'Parmic Fire Protection',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://parmic.com.au', // Update if domain differs
    title: 'Parmic | Commercial Fire Protection & Engineering',
    description: 'End-to-end fire infrastructure across Tasmania. In-house design, fabrication, and AS1851 compliance.',
    siteName: 'Parmic Fire Protection',
    images: [
      {
        url: '/parmic-logo.webp', // Fallback social sharing image
        width: 1200,
        height: 630,
        alt: 'Parmic Fire Protection Tasmania',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/fire.png',
    apple: '/fire.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans bg-background text-foreground overflow-x-hidden transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LocomotiveScrollProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </LocomotiveScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
