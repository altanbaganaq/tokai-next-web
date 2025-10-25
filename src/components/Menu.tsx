"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import OrderModal from "./OrderModal";
import { useLanguage } from "@/config/i18n";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
}

const menuImages = {
  popular: [
    "/images/menu-popular-1.webp",
    "/images/menu-popular-2.webp",
    "/images/menu-popular-3.webp",
    "/images/menu-popular-4.webp",
  ],
  sushi: [
    "/images/menu-sushi-1.webp",
    "/images/menu-sushi-2.webp",
    "/images/menu-sushi-3.webp",
    "/images/menu-sushi-4.webp",
  ],
  burrito: [
    "/images/menu-burrito-1.webp",
    "/images/menu-burrito-2.webp",
    "/images/menu-burrito-3.webp",
    "/images/menu-burrito-4.webp",
  ],
  special: [
    "/images/menu-special-1.webp",
    "/images/menu-special-2.webp",
    "/images/menu-special-3.webp",
    "/images/menu-special-4.webp",
  ],
};

export default function Menu() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("sushi");
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const menuCategories = [
    {
      id: "popular",
      name: t.menu.categories.popular,
      items: t.menu.items.popular.map((item: MenuItem, index: number) => ({
        ...item,
        image: menuImages.popular[index],
      })),
    },
    {
      id: "sushi",
      name: t.menu.categories.sushi,
      items: t.menu.items.sushi.map((item: MenuItem, index: number) => ({
        ...item,
        image: menuImages.sushi[index],
      })),
    },
    {
      id: "burrito",
      name: t.menu.categories.burrito,
      items: t.menu.items.burrito.map((item: MenuItem, index: number) => ({
        ...item,
        image: menuImages.burrito[index],
      })),
    },
    {
      id: "special",
      name: t.menu.categories.special,
      items: t.menu.items.special.map((item: MenuItem, index: number) => ({
        ...item,
        image: menuImages.special[index],
      })),
    },
  ];

  const currentCategory = menuCategories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <section id="menu" className="section-padding bg-[--color-light-gray] overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 lg:px-8 max-w-7xl"
      >
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="text-[--color-accent] text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase">
            {t.menu.tag}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-3 md:mt-4 mb-3 md:mb-4">
            {t.menu.title}
          </h2>
          <div className="w-12 md:w-16 h-0.5 bg-[--color-accent] mx-auto mb-4 md:mb-6"></div>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto px-4">
            {t.menu.description}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-medium tracking-wider uppercase transition-all duration-300 ease-in-out cursor-pointer ${
                activeCategory === category.id
                  ? "border-2 border-gray-700 text-gray-700"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {currentCategory?.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              className="bg-white overflow-hidden hover:shadow-xl transition-all duration-300 group border-[1px] border-gray-200"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between items-end">
                    <h3 className="text-xl font-bold text-white">
                      {item.name}
                    </h3>
                    <div className="text-white font-bold text-lg">
                      {item.price}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:p-5">
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center mt-8 md:mt-12">
          <button
            onClick={() => setIsOrderModalOpen(true)}
            className="inline-block text-gray-700 border-2 border-gray-900 hover:bg-gray-900 hover:text-white px-6 md:px-10 py-3 md:py-4 text-xs md:text-sm font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer"
          >
            {t.menu.button}
          </button>
        </div>
      </motion.div>

      {/* Order Modal */}
      <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
    </section>
  );
}

