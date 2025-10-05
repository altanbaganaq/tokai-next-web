"use client";

import { motion } from "framer-motion";

export default function Locations() {
  const locations = [
    {
      name: "Telefonplan, Stockholm",
      address: "Telefonvägen 30, 126 37 Hägersten",
      phone: "+46 8-744 88 68",
      hours: [
        { days: "Mon-Fri", time: "11:00 - 21:00" },
        { days: "Sat-Sun", time: "12:00 - 21:00" },
      ],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2037.3547219999999!2d17.9825!3d59.2975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTnCsDE3JzUxLjAiTiAxN8KwNTgnNTcuMCJF!5e0!3m2!1sen!2sse!4v1234567890",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Enköping",
      address: "Kungsgatan 35, 745 31 Enköping",
      phone: "+46 171-44 71 88",
      hours: [
        { days: "Mon-Fri", time: "11:00 - 20:30" },
        { days: "Sat-Sun", time: "12:00 - 20:30" },
      ],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2016.5547219999999!2d17.0758!3d59.6357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTnCsDM4JzA4LjUiTiAxN8KwMDQnMzIuOSJF!5e0!3m2!1sen!2sse!4v1234567890",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section id="locations" className="section-padding bg-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="container mx-auto px-6 lg:px-12 max-w-7xl"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[--color-accent] text-xs font-medium tracking-[0.3em] uppercase">
            Visit Us
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold text-black mt-6 mb-6">
            Our Locations
          </h2>
          <div className="w-16 h-0.5 bg-[--color-accent] mx-auto mb-8"></div>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Find us at either of our two convenient locations in Stockholm and Enköping
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut" 
              }}
              className="bg-white overflow-hidden hover:shadow-2xl transition-all duration-300 border border-[--color-border]"
            >
              {/* Location Image */}
              <div className="relative h-72 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${location.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-8 left-8 text-4xl font-bold text-white">
                  {location.name}
                </h3>
              </div>

              {/* Location Details */}
              <div className="p-10">
                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[--color-accent] mr-4 mt-1 flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <div className="font-bold text-black mb-2 text-sm uppercase tracking-wider">Address</div>
                      <p className="text-gray-600 text-sm">{location.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[--color-accent] mr-4 mt-1 flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <div className="font-bold text-black mb-2 text-sm uppercase tracking-wider">Phone</div>
                      <a
                        href={`tel:${location.phone.replace(/\s/g, "")}`}
                        className="text-[--color-accent] hover:text-[--color-accent-dark] transition-colors text-sm"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[--color-accent] mr-4 mt-1 flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="flex-1">
                      <div className="font-bold text-black mb-3 text-sm uppercase tracking-wider">Opening Hours</div>
                      {location.hours.map((hour, idx) => (
                        <div key={idx} className="flex justify-between text-gray-600 mb-2 text-sm">
                          <span className="font-medium">{hour.days}</span>
                          <span>{hour.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Map Link */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    location.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 block w-full bg-[--color-accent] hover:bg-[--color-accent-dark] text-white text-center px-8 py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300"
                >
                  View on Google Maps
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

