import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X } from "lucide-react";
import { BUSINESS_INFO } from "../constants";

const GALLERY_ITEMS = [
  { id: 1, category: "Photo Frames", title: "Wedding Frame 20x24", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop" },
  { id: 2, category: "Mugs", title: "Anniversary Mug", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop" },
  { id: 3, category: "T-Shirts", title: "Custom Print Tee", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop" },
  { id: 4, category: "Photo Frames", title: "Acrylic Portrait", img: "https://images.unsplash.com/photo-1544450297-6b4733a2a742?q=80&w=800&auto=format&fit=crop" },
  { id: 5, category: "Pillows", title: "Custom Cushion", img: "https://images.unsplash.com/photo-1584102002363-3dc829ff271a?q=80&w=800&auto=format&fit=crop" },
  { id: 6, category: "Journals", title: "Personalized Diary", img: "https://images.unsplash.com/photo-1544816153-097305943060?q=80&w=800&auto=format&fit=crop" },
  { id: 7, category: "Photo Frames", title: "Family Gallery Wall", img: "https://images.unsplash.com/photo-1522819121272-3522eb1f736a?q=80&w=800&auto=format&fit=crop" },
  { id: 8, category: "Other", title: "Sign-out Sash", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState<{title: string, img: string} | null>(null);

  const categories = ["All", "Photo Frames", "T-Shirts", "Mugs", "Pillows", "Journals", "Other"];
  const filteredItems = filter === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter(i => i.category === filter);

  return (
    <div className="pb-24">
      {/* Header */}
      <header className="bg-burgundy text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Our <span className="text-gold">Portfolio</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            A showcase of our recent frames and custom personalization projects for our valued Nigerian customers.
          </p>
        </div>
      </header>

      {/* Gallery Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                filter === cat ? "bg-gold text-burgundy shadow-md scale-105" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedImg({title: item.title, img: item.img})}
              >
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute inset-x-2 bottom-2 bg-white/90 backdrop-blur-md p-3 rounded-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <p className="text-[10px] uppercase tracking-widest text-gold font-bold">{item.category}</p>
                  <p className="text-burgundy font-bold text-sm truncate">{item.title}</p>
                  <div className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-burgundy rounded-full text-white">
                    <Maximize2 size={12} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-8 right-8 text-white p-4 hover:bg-white/10 rounded-full transition">
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img src={selectedImg.img} alt={selectedImg.title} className="w-full rounded-2xl shadow-2xl" />
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImg.title}</h3>
                <a 
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I saw your ${selectedImg.title} in the gallery and want something similar.`}
                  className="inline-flex items-center gap-2 bg-gold text-burgundy px-8 py-3 rounded-xl font-bold hover:bg-gold-dark transition"
                >
                  Request Similar Design
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
