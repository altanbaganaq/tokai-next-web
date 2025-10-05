"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-6 lg:px-12 max-w-7xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <div className="relative h-[500px] lg:h-[650px] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=2232&auto=format&fit=crop')`,
              }}
            />
          </div>

          {/* Content Side */}
          <div>
            <div className="mb-6">
              <span className="text-[--color-accent] text-xs font-medium tracking-[0.3em] uppercase">
                About Us
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-black mb-8">
              The Art of
              <br />
              <span className="text-[--color-accent]">Excellence</span>
            </h2>
            
            <div className="w-16 h-0.5 bg-[--color-accent] mb-8"></div>
            
            <div className="space-y-6 text-gray-700 text-base leading-relaxed">
              <p>
                At Tokai Sushi, we believe that sushi is more than just food—it&apos;s an art form. 
                For years, we&apos;ve been dedicated to bringing authentic Japanese flavors to Sweden, 
                combining traditional techniques with the freshest local ingredients.
              </p>
              
              <p>
                Our master chefs have trained in the art of sushi-making, ensuring every roll, 
                nigiri, and sashimi plate is crafted with precision and care. We source only 
                the finest fish and ingredients, maintaining the highest standards of quality.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
              <div>
                <div className="text-5xl font-bold text-[--color-accent] mb-2">10+</div>
                <div className="text-gray-600 text-xs uppercase tracking-wider">Years of Excellence</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[--color-accent] mb-2">2</div>
                <div className="text-gray-600 text-xs uppercase tracking-wider">Locations</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[--color-accent] mb-2">50+</div>
                <div className="text-gray-600 text-xs uppercase tracking-wider">Menu Items</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

