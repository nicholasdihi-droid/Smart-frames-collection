import { motion } from "motion/react";
import { MessageCircle, Info, Maximize, Plus } from "lucide-react";
import { BUSINESS_INFO, FRAME_SIZES } from "../constants";

export default function Frames() {
  return (
    <div className="pb-24">
      {/* Header */}
      <header className="bg-burgundy text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Photo Frame <span className="text-gold">Pricing</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Quality craftsmanship at prices that respect your budget. Explore our range of premium sizes.
          </p>
        </div>
      </header>

      {/* Pricing Table Section */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 mb-24">
          <div className="bg-burgundy p-6 text-white text-center">
            <h2 className="text-2xl font-bold">Standard Size Price List</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-8 py-6 font-bold text-burgundy">Frame Size</th>
                  <th className="px-8 py-6 font-bold text-burgundy">Price</th>
                  <th className="px-8 py-6 font-bold text-burgundy hidden md:table-cell">Ideal For</th>
                  <th className="px-8 py-6 font-bold text-burgundy text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {FRAME_SIZES.map((f, idx) => (
                  <tr
                    key={f.id}
                    className={`border-b border-gray-50 hover:bg-cream/20 transition-colors ${
                      idx % 2 === 1 ? "bg-gray-50/30" : ""
                    }`}
                  >
                    <td className="px-8 py-8 font-bold text-lg">{f.size}</td>
                    <td className="px-8 py-8 font-bold text-2xl text-burgundy">₦{f.price.toLocaleString()}</td>
                    <td className="px-8 py-8 text-gray-500 hidden md:table-cell">
                      {idx < 2 ? "Table top, Shelf" : idx < 4 ? "Wall portraits, Office" : "Large wall art, Living room"}
                    </td>
                    <td className="px-8 py-8 text-right">
                      <a
                        href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I'd like to order the ${f.size} frame.`}
                        className="inline-flex items-center gap-2 bg-gold text-burgundy px-6 py-2 rounded-lg font-bold hover:bg-gold-dark transition"
                      >
                        <MessageCircle size={18} /> Order
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Product Details Grid */}
        <div className="space-y-32">
          {FRAME_SIZES.map((f, idx) => (
            <div
              key={f.id}
              className={`flex flex-col ${idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center`}
            >
              <div className="w-full md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="rounded-3xl overflow-hidden shadow-2xl relative group"
                >
                  <img
                    src={`https://images.unsplash.com/photo-1544450297-6b4733a2a742?q=80&w=1200&auto=format&fit=crop`}
                    alt={f.size}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-burgundy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize className="text-white" size={48} />
                  </div>
                </motion.div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="bg-cream px-4 py-1 text-burgundy font-bold rounded-full w-fit text-sm">
                  Smart Frames Quality
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-burgundy">{f.size} Photo Frame</h2>
                <div className="text-3xl font-bold text-gold-dark">₦{f.price.toLocaleString()}</div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our {f.size} premium photo frames are crafted with high-grade Nigeria-sourced wood and clear polished
                  glass. Perfect for preserving your most cherished moments with a touch of elegance. Includes mounting
                  hardware for easy wall installation.
                </p>
                <div className="grid grid-cols-2 gap-4 pb-4">
                  <div className="flex items-center gap-2 text-gray-500">
                    <ShieldCheck className="text-burgundy" size={18} /> Premium Wood
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <ShieldCheck className="text-burgundy" size={18} /> Clear Glass
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <ShieldCheck className="text-burgundy" size={18} /> Wall Mountable
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <ShieldCheck className="text-burgundy" size={18} /> Table Stand
                  </div>
                </div>
                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Order ${f.size}`} className="btn-secondary w-fit">
                  Order This Size
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frame Types */}
      <section className="py-24 bg-gray-50 mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-burgundy mb-4">Other Frame Types</h2>
            <p className="text-gray-600">We offer specialized framing styles to match your modern home decor needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center text-burgundy mb-6 group-hover:bg-gold transition-colors">
                <Info size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Acrylic Frames</h3>
              <p className="text-gray-500 mb-6">
                Modern, frameless look using thick high-gloss acrylic. Floating effect perfect for contemporary spaces.
              </p>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Quote for Acrylic Frame`} className="text-burgundy font-bold hover:underline">
                Request Quote →
              </a>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center text-burgundy mb-6 group-hover:bg-gold transition-colors">
                <Info size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Pinterest Frames</h3>
              <p className="text-gray-500 mb-6">
                Trendy collage-style frames inspired by global designs. Make your wall look like a curated social feed.
              </p>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Pinterest Style Frames`} className="text-burgundy font-bold hover:underline">
                Request Quote →
              </a>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center text-burgundy mb-6 group-hover:bg-gold transition-colors">
                <Info size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Box Frames</h3>
              <p className="text-gray-500 mb-6">
                Shadow boxes for 3D items, memorabilia, or deep-set photo presentations. Adds profound depth to your display.
              </p>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Box Frame Inquiry`} className="text-burgundy font-bold hover:underline">
                Request Quote →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-burgundy rounded-[2rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop')] bg-cover opacity-10" />
            <h2 className="text-4xl font-bold mb-6 relative z-10">Ready to Frame Your Memories?</h2>
            <p className="text-xl text-gray-300 mb-10 relative z-10">
              Contact us on WhatsApp now and get a quick quote for your custom dimensions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} className="btn-primary">
                <MessageCircle size={20} /> Order on WhatsApp
              </a>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-secondary border border-white/20">
                Call Us Directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ShieldCheck(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
