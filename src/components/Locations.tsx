"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/config/i18n";

export default function Locations() {
  const { t } = useLanguage();
  const locations = [
    {
      name: "Enköping",
      address: "Kungsgatan 35, 745 31 Enköping",
      phone: "+46 1-712 44 44",
      hours: [
        { days: "Mon-Fri", time: "11:00 - 20:00" },
        { days: "Sat-Sun", time: "12:00 - 19:00" },
      ],
      mapUrl: "https://www.google.com/maps?q=Tokai+sushi,+%C3%85gatan+19,+749+35+Enk%C3%B6ping&ftid=0x465e51cb26c417d1:0x37d790f8dd459bc3&entry=gps&lucs=,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjM1LjAuNzk5MDg4MzU1MBgAIIgnKlosOTQyMjQ4MjUsOTQyMjcyNDcsOTQyMjcyNDgsOTQyMzExODgsNDcwNzE3MDQsNDcwNjk1MDgsOTQyMTg2NDEsOTQyODIxMzQsOTQyMDMwMTksNDcwODQzMDRCAlNF&skid=14db933d-49ed-4127-bc0f-93766e403e04&g_st=ifm",
      image: "/images/enkoping-location.png",
    },
    {
      name: "Telefonplan, Stockholm",
      address: "Tellusgången 27, 126 26 Hägersten",
      phone: "+46 8-754 44 522",
      hours: [
        { days: "Mon", time: "11:00 - 15:00" },
        { days: "Tue-Fri", time: "11:00 - 20:00" },
        { days: "Sat", time: "12:00 - 19:00" },
        { days: "Sun", time: "Closed" },
      ],
      mapUrl: "https://www.google.com/maps?q=Tokai+sushi,+Tellusg%C3%A5ngen+27,+126+26+H%C3%A4gersten&ftid=0x465f776b0821378b:0xed381d6890feba55&entry=gps&lucs=,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjM1LjAuNzk5MDg4MzU1MBgAIIgnKlosOTQyMjQ4MjUsOTQyMjcyNDcsOTQyMjcyNDgsOTQyMzExODgsNDcwNzE3MDQsNDcwNjk1MDgsOTQyMTg2NDEsOTQyODIxMzQsOTQyMDMwMTksNDcwODQzMDRCAlNF&skid=54b2db6f-a863-4b8c-a4b7-9444debf3e39&g_st=ifm",
      image: "/images/telefonplan-location.png",
    }
  ];

  return (
    <section id="locations" className="section-padding bg-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="container mx-auto px-4 lg:px-8 max-w-7xl"
      >
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="text-[--color-accent] text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase">
            {t.locations.tag}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] mt-3 md:mt-4 mb-3 md:mb-4">
            {t.locations.title}
          </h2>
          <div className="w-12 md:w-16 h-0.5 bg-[--color-accent] mx-auto mb-4 md:mb-6"></div>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto px-4">
            {t.locations.description}
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
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
              className="bg-white overflow-hidden transition-all duration-300 border border-gray-200 flex flex-col h-full"
            >
              {/* Location Image */}
              <div className="relative h-52 md:h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${location.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/70 to-transparent" />
                <h3 className="absolute bottom-3 left-4 md:bottom-4 md:left-5 text-xl md:text-2xl font-bold text-white">
                  {location.name}
                </h3>
              </div>

              {/* Location Details */}
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <div className="space-y-4 md:space-y-5 flex-grow">
                  {/* Address */}
                  <div className="flex items-start">
                    <div>
                      <div className="font-bold text-[#1F1F1F] mb-1 text-xs uppercase tracking-wider">{t.locations.address}</div>
                      <p className="text-gray-600 text-xs md:text-sm">{location.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <div>
                      <div className="font-bold text-[#1F1F1F] mb-1 text-xs uppercase tracking-wider">{t.locations.phone}</div>
                      <a
                        href={`tel:${location.phone.replace(/\s/g, "")}`}
                        className="text-[--color-accent] hover:text-[--color-accent-dark] transition-colors text-xs md:text-sm"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start">
                    <div className="flex-1">
                      <div className="font-bold text-[#1F1F1F] mb-2 text-xs uppercase tracking-wider">{t.locations.openingHours}</div>
                      {location.hours.map((hour, idx) => (
                        <div key={idx} className="flex justify-between text-gray-600 mb-1 text-xs md:text-sm">
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
                  className="mt-5 md:mt-6 block w-full text-gray-900 border-1 border-gray-900 hover:bg-gray-900 hover:text-white text-center px-5 md:px-6 py-2.5 md:py-3 text-xs font-medium tracking-wider uppercase transition-all duration-300"
                >
                  {t.locations.viewMap}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

