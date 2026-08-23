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
  title: "Parmic | Engineered Fire Protection",
  description: "Design, Fabrication, Installation, and Servicing of advanced fire detection and suppression systems in Tasmania.",
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
