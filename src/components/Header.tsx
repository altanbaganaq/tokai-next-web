"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import OrderModal from "./OrderModal";
import { useLanguage } from "@/config/i18n";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="text-xl lg:text-2xl font-bold" style={{ fontFamily: 'var(--font-logo)' }}>
              <span
                className={`transition-colors ${
                  isScrolled
                    ? "text-[--color-accent]"
                    : "text-white"
                }`}
              >
                TOKAI
              </span>
              <span
                className={`ml-2 transition-colors ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                SUSHI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection("about")}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-[--color-accent] cursor-pointer ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              {t.header.about}
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-[--color-accent] cursor-pointer ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              {t.header.menu}
            </button>
            <button
              onClick={() => scrollToSection("locations")}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-[--color-accent] cursor-pointer ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              {t.header.locations}
            </button>
            <button
              onClick={() => scrollToSection("footer")}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-[--color-accent] cursor-pointer ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              {t.header.contact}
            </button>

            <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsOrderModalOpen(true)}
              className={`px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 border-1 ${
                isScrolled ? "text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white" : "text-white border-white hover:bg-white hover:text-black"
              }`}
            >
              {t.header.delivery}
            </button>
            
            {/* Language Switcher */}
            <div className={`flex items-center border-1 ${isScrolled ? "border-gray-900" : "border-white"} border-opacity-50 overflow-hidden`}>
              <button
                onClick={() => setLanguage("se")}
                className={`px-4 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                  language === "se"
                    ? isScrolled
                      ? "bg-gray-900 text-white"
                      : "bg-white text-black"
                    : isScrolled
                    ? "text-gray-900 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                SE
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-4 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                  language === "en"
                    ? isScrolled
                      ? "bg-gray-900 text-white"
                      : "bg-white text-black"
                    : isScrolled
                    ? "text-gray-900 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                EN
              </button>
            </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[--color-accent]"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-800 hover:text-[--color-accent] font-medium transition-colors px-4 py-2 text-left"
              >
                {t.header.about}
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-gray-800 hover:text-[--color-accent] font-medium transition-colors px-4 py-2 text-left"
              >
                {t.header.menu}
              </button>
              <button
                onClick={() => scrollToSection("locations")}
                className="text-gray-800 hover:text-[--color-accent] font-medium transition-colors px-4 py-2 text-left"
              >
                {t.header.locations}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-800 hover:text-[--color-accent] font-medium transition-colors px-4 py-2 text-left"
                >
                  {t.header.contact}
                </button>
                <button
                  onClick={() => {
                    setIsOrderModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-[--color-accent] hover:bg-[--color-accent-dark] text-white px-6 py-3 font-medium transition-all duration-300 mx-4 text-center"
                >
                  {t.header.delivery}
                </button>
                
                {/* Mobile Language Switcher */}
                <div className="flex items-center justify-center space-x-2 px-4 pt-2">
                  <button
                    onClick={() => setLanguage("se")}
                    className={`flex-1 px-4 py-2 text-sm font-medium tracking-wider uppercase transition-all duration-300 border-1 ${
                      language === "se"
                        ? "bg-gray-900 text-white border-gray-900"
                        : "text-gray-900 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    SE
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`flex-1 px-4 py-2 text-sm font-medium tracking-wider uppercase transition-all duration-300 border-1 ${
                      language === "en"
                        ? "bg-gray-900 text-white border-gray-900"
                        : "text-gray-900 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    EN
                  </button>
                </div>
            </div>
          </div>
        )}
      </nav>

      {/* Order Modal */}
      <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
    </header>
  );
}

