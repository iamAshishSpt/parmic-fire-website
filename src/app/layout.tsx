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
  title: "Parmic | Commercial Fire Protection & Engineering Tasmania",
  description: "Tasmania's vertically integrated fire protection specialists. In-house CAD design, local Mornington workshop fabrication, and 24/7 AS1851 maintenance.",
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
