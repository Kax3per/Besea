import React from "react";
import news1 from "./assets/images/images.02.jpg";
import news2 from "./assets/images/images.03.jpg";
import news3 from "./assets/images/images.04.jpg";
import { motion } from "framer-motion";

export default function News() {
  const newsItems = [
    {
      img: news1,
      category: "OPERATIONS",
      title: "Safe And Reliable",
      text: "Besea Operations component is designed to ensure safe and reliable operations while maintaining low cost and low carbon through reporting facility events and hazard.",
    },
    {
      img: news2,
      category: "MAINT SYSTEM",
      title: "Maintenance Efficiency",
      text: "Besea Maintenance system delivers total lifecycle facility maintenance solution from Maintenance Strategy to planning, resourcing and execution of Work Request.",
    },
    {
      img: news3,
      category: "ENGINEERING",
      title: "Technical Changes",
      text: "Besea Technical Change System provide complete solution to manage site mods and deviations, equipment upgrades, approvals and risk assessment.",
    },
  ];

  const goToNewsSection = () => {
    const section = document.getElementById("news");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-white px-6 md:px-12 lg:px-20 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {newsItems.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="cursor-pointer bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300"
            onClick={goToNewsSection}
          >
            {/* Zdjęcie z małym białym wcięciem w rogu */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
              />

              {/* Małe białe wcięcie w rogu */}
              <div className="absolute top-0 left-0 bg-white px-4 py-2 rounded-br-2xl shadow-md">
                <p className="text-[10px] md:text-xs tracking-widest text-green-600 font-semibold">
                  {item.category}
                </p>
                <h3 className="text-sm md:text-base font-bold text-gray-800">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Opis pod spodem */}
            <div className="p-6">
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
