"use client";

import Link from "next/link";
import Image from "next/image";
import { PhoneCall, Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 h-20 px-6 md:px-12 lg:px-24 flex items-center justify-between bg-[#1A0F66] text-white border-b border-[#2d1f92]"
      >
        {/* Left: Logo */}
        <Link href="/" className="flex items-center z-50 flex-shrink-0">
          <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm flex items-center justify-center">
            <Image 
              src="/parmic-logo.webp" 
              alt="Parmic Fire Protection" 
              width={200} 
              height={60} 
              className="h-8 md:h-10 w-auto object-contain" 
              priority 
            />
          </div>
        </Link>

        {/* Center: Desktop Links */}
        {/* THE FIX: Added z-[60] to this nav container so it strictly sits ABOVE the massive logo's invisible bounding box */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium absolute left-1/2 -translate-x-1/2 z-[60]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[#F46707] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        {/* Also added z-[60] here just to be safe, ensuring the right buttons are never blocked */}
        <div className="flex items-center gap-3 md:gap-6 z-[60]">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-white/10 transition-colors hidden md:block"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}

          {/* Desktop 24/7 Button */}
          <a
            href="tel:0362450776"
            className="hidden md:flex items-center gap-3 px-5 py-2 bg-[#F46707] hover:bg-[#d95a06] text-white rounded-md transition-all shadow-lg"
          >
            <PhoneCall size={24} />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider leading-none mb-1">
                Call us 24/7
              </span>
              <span className="text-sm font-bold leading-none">
                0362 450 776
              </span>
            </div>
          </a>

          {/* Mobile Condensed 24/7 Button */}
          <a
            href="tel:0362450776"
            className="flex md:hidden items-center gap-2 px-3 py-2 bg-[#F46707] hover:bg-[#d95a06] text-white rounded-md transition-all shadow-md"
          >
            <PhoneCall size={18} />
            <span className="text-xs font-bold">0362 450 776</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 -mr-2 text-white hover:text-[#F46707] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#1A0F66] text-white pt-24 px-6 flex flex-col"
          >
            <nav className="flex flex-col gap-8 text-2xl font-semibold mt-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#F46707] transition-colors border-b border-white/10 pb-4"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pb-10 flex items-center justify-between">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex items-center gap-3 hover:text-[#F46707] transition-colors"
                >
                  {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
                  <span className="font-medium">Toggle Theme</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
