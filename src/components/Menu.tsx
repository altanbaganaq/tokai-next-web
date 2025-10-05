"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const menuCategories = [
  {
    id: "sushi",
    name: "Sushi Rolls",
    items: [
      {
        name: "California Roll",
        description: "Crab, avocado, cucumber, sesame seeds",
        price: "89 kr",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=400&auto=format&fit=crop",
      },
      {
        name: "Spicy Tuna Roll",
        description: "Fresh tuna, spicy mayo, cucumber, scallions",
        price: "95 kr",
        image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?q=80&w=400&auto=format&fit=crop",
      },
      {
        name: "Dragon Roll",
        description: "Eel, cucumber, avocado, tobiko",
        price: "125 kr",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=400&auto=format&fit=crop",
      },
      {
        name: "Rainbow Roll",
        description: "California roll topped with assorted fish",
        price: "135 kr",
        image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?q=80&w=400&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "nigiri",
    name: "Nigiri & Sashimi",
    items: [
      {
        name: "Salmon Nigiri",
        description: "Fresh Norwegian salmon on seasoned rice",
        price: "45 kr",
        image: "https://images.unsplash.com/photo-1564489563601-c53cfc451e93?q=80&w=400&auto=format&fit=crop",
      },
      {
        name: "Tuna Nigiri",
        description: "Premium bluefin tuna on seasoned rice",
        price: "55 kr",
        image: "https://images.unsplash.com/photo-1615361200098-aa3465d2f5a5?q=80&w=400&auto=format&fit=crop",
      },
      {
        name: "Sashimi Platter",
        description: "Chef's selection of fresh fish (12 pieces)",
        price: "245 kr",
        image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=400&auto=format&fit=crop",
      },
      {
        name: "Eel Nigiri",
        description: "Grilled eel with sweet glaze",
        price: "50 kr",
        image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=400&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "special",
    name: "Chef's Special",
    items: [
      {
        name: "Omakase Experience",
        description: "Chef's choice tasting menu (10 pieces)",
        price: "395 kr",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=400&auto=format&fit=crop",
      },
      {
        name: "Tokai Deluxe Platter",
        description: "Mixed selection of our finest sushi",
        price: "495 kr",
        image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=400&auto=format&fit=crop",
      },
      {
        name: "Salmon Lover's Box",
        description: "All things salmon - rolls, nigiri, sashimi",
        price: "295 kr",
        image: "https://images.unsplash.com/photo-1564489563601-c53cfc451e93?q=80&w=400&auto=format&fit=crop",
      },
      {
        name: "Vegetarian Delight",
        description: "Assorted vegetable sushi and rolls",
        price: "185 kr",
        image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?q=80&w=400&auto=format&fit=crop",
      },
    ],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("sushi");

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
        <div className="text-center mb-16">
          <span className="text-[--color-accent] text-xs font-medium tracking-[0.3em] uppercase">
            Our Menu
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold text-black mt-6 mb-6">
            Exquisite Flavors
          </h2>
          <div className="w-16 h-0.5 bg-[--color-accent] mx-auto mb-8"></div>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Discover our carefully curated menu featuring traditional Japanese dishes 
            and innovative creations
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 ease-in-out cursor-pointer ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              className="bg-white overflow-hidden hover:shadow-xl transition-all duration-300 group border-[1px] border-gray-300"
            >
              <div className="relative h-56 overflow-hidden">
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
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center mt-16">
          <a
            href="https://onlinedelivery.tokaisushi.se"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-gray-700 border-2 border-gray-900 hover:bg-gray-900 hover:text-white px-12 py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300"
          >
            View Full Menu & Order Online
          </a>
        </div>
      </motion.div>
    </section>
  );
}

