"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import OrderModal from "./OrderModal";
import { useLanguage } from "@/config/i18n";

const heroImages = [
  "/images/hero-1.jpeg",
  "/images/hero-2.jpeg"
];

export default function Hero() {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Images with Overlay */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${image}')`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto py-20 md:py-28 lg:py-32">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 md:mb-6"
        >
          <div className="text-white/80 text-[10px] md:text-xs font-medium tracking-[0.3em] md:tracking-[0.4em] uppercase">
            {t.hero.subtitle}
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 leading-none"
          style={{ fontFamily: 'var(--font-logo)' }}
        >
          <span className="tracking-normal">
            TOKAI SUSHI
          </span>
        </motion.h1>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-0.5 bg-[--color-accent] mx-auto mb-4 md:mb-6"
        ></motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => setIsOrderModalOpen(true)}
            className="bg-[--color-accent] hover:bg-[--color-accent-dark] text-white px-6 md:px-10 py-3 md:py-4 font-medium text-xs md:text-sm tracking-wider uppercase transition-all duration-300 w-full sm:w-auto"
          >
            {t.hero.delivery}
          </button>
          <button
            onClick={() => {
              const element = document.getElementById("menu");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="border-2 border-white hover:bg-white hover:text-black text-white px-6 md:px-10 py-3 md:py-4 font-medium text-xs md:text-sm tracking-wider uppercase transition-all duration-300 w-full sm:w-auto"
          >
            {t.hero.menu}
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block"
        >
          <div className="flex flex-col items-center">
            <span className="text-white/60 text-xs uppercase tracking-widest mb-2">{t.hero.scrollDown}</span>
            <svg
              className="w-5 h-5 text-white/60"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Order Modal */}
      <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
    </section>
  );
}

