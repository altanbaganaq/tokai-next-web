"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const heroImages = [
  "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=2400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=2400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1564489563601-c53cfc451e93?q=80&w=2400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=2400&auto=format&fit=crop",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto py-32">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="text-white/80 text-xs md:text-sm font-medium tracking-[0.4em] uppercase">
            Authentic Japanese Cuisine
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-none"
        >
          TOKAI
          <br />
          <span className="text-[--color-accent]">SUSHI</span>
        </motion.h1>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-0.5 bg-[--color-accent] mx-auto mb-8"
        ></motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base md:text-lg lg:text-xl text-white/90 mb-12 max-w-2xl mx-auto font-light tracking-wide"
        >
          Where tradition meets excellence. Crafted with passion, served with pride.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://onlinedelivery.tokaisushi.se"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[--color-accent] hover:bg-[--color-accent-dark] text-white px-10 py-4 font-medium text-sm tracking-wider uppercase transition-all duration-300 w-full sm:w-auto"
          >
            Order Online
          </a>
          <button
            onClick={() => {
              const element = document.getElementById("menu");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="border-2 border-white hover:bg-white hover:text-black text-white px-10 py-4 font-medium text-sm tracking-wider uppercase transition-all duration-300 w-full sm:w-auto"
          >
            Explore Menu
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
            <span className="text-white/60 text-xs uppercase tracking-widest mb-2">Scroll</span>
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
    </section>
  );
}

