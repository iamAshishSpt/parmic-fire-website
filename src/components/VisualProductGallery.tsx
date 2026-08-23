"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  // Water Systems
  {
    id: "1",
    title: "Automatic Sprinklers",
    category: "Water Systems",
    image:
      "https://www.thoughtco.com/thmb/5GpVfa5ZU7ptX6TCo48YzPm_x-I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sprinkler-58e2afea5f9b58ef7eb86178.jpg",
  },
  {
    id: "2",
    title: "Wall Wetting & Deluge",
    category: "Water Systems",
    image:
      "https://images.squarespace-cdn.com/content/v1/5d8b43ea97883858e22ec39b/1593915007813-RKZQ48SLLS96P8NIJDX4/31+Wall-wetting+sprinkler+and+drencher+systems.jpg",
  },
  {
    id: "3",
    title: "Water Mist Systems",
    category: "Water Systems",
    image:
      "https://wormald.com.au/wp-content/uploads/2020/02/WD_FST_Water-Standard-Spray-Image_resized.jpg",
  },
  {
    id: "4",
    title: "Hydrant & Hose Reels",
    category: "Water Systems",
    image:
      "https://www.progressfire.com.au/wp-content/uploads/2019/08/solutions-img-box2.jpg",
  },
  {
    id: "5",
    title: "Fire Pumps & Static Tanks",
    category: "Water Systems",
    image: "https://alliedpumps.com.au/wp-content/uploads/2021/04/1.jpg",
  },

  // Detection
  {
    id: "6",
    title: "Early Warning Smoke Detection",
    category: "Detection",
    image:
      "https://images.squarespace-cdn.com/content/v1/605ddd84bda4c7530c793abc/1620261294898-3BGPTCIHB7I05LSKKWZ8/BOSSBuildingMaintenance-News-SmokeAlarm.jpg",
  },
  {
    id: "7",
    title: "Thermal Detection",
    category: "Detection",
    image:
      "https://res.cloudinary.com/rspoc/image/upload/f_auto/q_auto/v1664958827/RS%20CONTENTFUL/Italy/Discovery/Idee-Suggerimenti/R8773141-03.jpg",
  },
  {
    id: "8",
    title: "Flame Detection",
    category: "Detection",
    image:
      "https://ifpmag.com/wp-content/uploads/2021/06/IFP86_Jun21_FGD_ES_1.jpg",
  },
  {
    id: "9",
    title: "Domestic Alarms",
    category: "Detection",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5JtWIcyG9cdAlYMcp2JwjcQkOhB-UvxM1og7Y1dgPJA&s=10",
  },
  {
    id: "10",
    title: "EWIS & BOWS",
    category: "Detection",
    image:
      "https://i0.wp.com/c-fireprotection.com.au/wp-content/uploads/2023/12/Automatic-Fire-Detection-Systems-2.jpg?fit=1024%2C684&ssl=1",
  },

  // Passive Fire
  {
    id: "11",
    title: "Fire Doors",
    category: "Passive Fire",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoXWCvdo12NVIzpxo0cwRpUumlDTN-MRJ-qeswWGyEGA&s=10",
  },
  {
    id: "12",
    title: "Fire Separation",
    category: "Passive Fire",
    image:
      "https://images.unsplash.com/photo-1505587043598-a6da7089b3ab?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "13",
    title: "Fire Shutters",
    category: "Passive Fire",
    image:
      "https://www.abledoors.com.au/wp-content/uploads/2018/09/fire_shutter1-v2.jpg",
  },

  // Suppression
  {
    id: "14",
    title: "Argonite Gas",
    category: "Suppression",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW4RQWMbGZd1JFFOqcONDsmXfFu8lQ_EK4CRyrgLGXAwZKocRB2Ubz14pT&s=10",
  },
  {
    id: "15",
    title: "FM200 Systems",
    category: "Suppression",
    image:
      "https://firesystems.net/wp-content/uploads/2025/02/AdobeStock_279066006-scaled.jpeg",
  },
  {
    id: "16",
    title: "CO2 (Low & High Pressure)",
    category: "Suppression",
    image:
      "https://sas-se.com/wp-content/uploads/2023/02/c2e1cb97a33a2400b4d54e4b31892a6e.jpg",
  },
  {
    id: "17",
    title: "VESDA",
    category: "Suppression",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfp_eS5i4WDUPl4k2MnU-b4ztvmw7R9oKQMMMpv8Su-g&s=10",
  },
  {
    id: "18",
    title: "Pyrogen",
    category: "Suppression",
    image:
      "https://www.pyrogen.com/assets/images/EXA-aerosol-systems_resized.png",
  },
  {
    id: "19",
    title: "Chemical Powder & Foam",
    category: "Suppression",
    image:
      "https://www.majesticfire.com.au/wp-content/uploads/2024/05/fire-extinguisher-service-majestic-fire-protection-sydney-1.jpg",
  },
  {
    id: "20",
    title: "Marine & Vehicle Suppression",
    category: "Suppression",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxVh9aMhqNj8w2I30HrQCNUW9faNQPWE_v3QBYpBa-Iw&s=10",
  },
  {
    id: "21",
    title: "Portable Extinguishers",
    category: "Suppression",
    image:
      "https://flamestopau.b-cdn.net/15453-large_default/flamestop-25kg-be-powder-type-portable-fire-extinguisher.jpg",
  },
];

const tabs = [
  "All",
  "Water Systems",
  "Detection",
  "Suppression",
  "Passive Fire",
];

export default function VisualProductGallery() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((product) => product.category === activeTab);

  return (
    <section className="pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-foreground mb-8">
          Hardware & Systems Overview
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={
                activeTab === tab
                  ? "bg-[#F46707] text-white px-6 py-2 rounded-full font-bold shadow-md transition-colors"
                  : "bg-surface border border-border text-foreground/70 hover:text-foreground hover:border-[#F46707]/50 px-6 py-2 rounded-full font-medium transition-colors"
              }
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12"
        >
          <AnimatePresence mode="popLayout">
            {/* 1. Add 'index' to the map function */}
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-xl bg-[#1A1A1A] border border-white/5 hover:border-[#F46707] transition-all duration-300 group cursor-pointer aspect-[4/3]"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  // 2. THE FIX: This tells Next.js to load the first 4 images instantly
                  priority={index < 4}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                <h4 className="absolute bottom-6 left-6 right-6 text-white font-bold tracking-wide text-lg z-20 leading-snug">
                  {product.title}
                </h4>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
