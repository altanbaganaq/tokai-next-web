"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/config/i18n";

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 lg:px-8 max-w-7xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=2232&auto=format&fit=crop')`,
              }}
            />
          </div>

          {/* Content Side */}
          <div>
            <div className="mb-4">
              <span className="text-[--color-accent] text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase">
                {t.about.tag}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text mb-4 md:mb-6">
              {t.about.title}
              <br />
              <span className="text-[--color-accent]">{t.about.titleAccent}</span>
            </h2>
            
            <div className="w-12 md:w-16 h-0.5 bg-[--color-accent] mb-4 md:mb-6"></div>
            
            <div className="space-y-4 md:space-y-5 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                {t.about.description1}
              </p>
              
              <p>
                {t.about.description2}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-10 pt-8 md:pt-10 border-t border-gray-200">
              <div className="flex flex-col items-center justify-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[--color-accent] mb-1 md:mb-2">10+</div>
                <div className="text-gray-600 text-[10px] md:text-xs uppercase tracking-wider leading-tight text-center">{t.about.stats.years}</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[--color-accent] mb-1 md:mb-2">2</div>
                <div className="text-gray-600 text-[10px] md:text-xs uppercase tracking-wider text-center">{t.about.stats.locations}</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[--color-accent] mb-1 md:mb-2">50+</div>
                <div className="text-gray-600 text-[10px] md:text-xs uppercase tracking-wider leading-tight text-center">{t.about.stats.menuItems}</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

