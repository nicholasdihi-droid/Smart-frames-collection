import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Star, ShieldCheck, Truck, Zap, Plus } from "lucide-react";
import { BUSINESS_INFO, FRAME_SIZES, SERVICES, TESTIMONIALS } from "../constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center luxury-gradient text-white m-4 md:m-8 rounded-2xl overflow-hidden p-8 md:p-16">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold opacity-10 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold opacity-5 rounded-full -ml-20 -mb-20"></div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[2px] w-12 bg-gold" />
              <span className="text-gold font-bold tracking-widest uppercase text-xs">Elegant Memories</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
              Preserve Your Precious <br className="hidden md:block" /><span className="text-gold">Memories</span>
            </h1>
            <p className="text-xl mb-10 text-white/90 leading-relaxed font-light">
              Premium photo frames and custom personalization services based in Nigeria. We bring quality craftsmanship
              to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} className="btn-primary">
                Order on WhatsApp
              </a>
              <Link to="/frames" className="btn-outline">
                View Price List
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-cream/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-burgundy mb-4">Our Popular Sizes</h2>
              <p className="text-text/70 max-w-lg">
                Choose from our standard sizes or request a custom dimension. Perfect for homes, offices, and gifts.
              </p>
            </div>
            <Link to="/frames" className="text-burgundy font-bold flex items-center gap-2 group">
              View all sizes
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {FRAME_SIZES.slice(0, 6).map((frame) => (
              <motion.div key={frame.id} variants={item} className="luxury-card group overflow-hidden">
                <div className="h-64 bg-gray-100 relative overflow-hidden border-b border-gold/10">
                  <img
                    src={`https://images.unsplash.com/photo-1544450297-6b4733a2a742?q=80&w=1000&auto=format&fit=crop`}
                    alt={frame.size}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-burgundy/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 right-4 bg-cream text-burgundy font-mono font-bold px-3 py-1 rounded-sm shadow border border-gold/40">
                    ₦{frame.price.toLocaleString()}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-burgundy mb-2">{frame.size}</h3>
                  <p className="text-text/60 text-sm mb-6">Standard frames with high-quality glass and wood finish.</p>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi, I want to order the ${frame.size} frame.`}
                    className="w-full btn-secondary text-xs"
                  >
                    <Plus size={16} /> Order This Size
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-burgundy mb-6">Customization Services</h2>
          <p className="text-text/70 max-w-2xl mx-auto font-sans">
            Beyond frames, we offer a wide range of personalized items to celebrate life's milestones.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              to="/services"
              className="p-6 bg-white border border-[#D4AF37]/20 rounded-lg hover:border-gold hover:shadow-md transition-all group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-[#FFF8E7] rounded-full flex items-center justify-center text-burgundy mb-4 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                <Plus size={24} />
              </div>
              <h3 className="font-serif font-bold text-sm text-burgundy uppercase mb-1">{service.title}</h3>
              <p className="text-[10px] text-text/60">{service.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-burgundy text-white overflow-hidden relative border-y border-gold/30">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border-2 border-gold rounded-full bg-gold/5" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border-8 border-gold rounded-full bg-gold/5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-20">Why Smart Frames?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gold text-burgundy rounded-sm border-2 border-[#D4AF37] mx-auto flex items-center justify-center mb-8 rotate-3 group-hover:rotate-12 transition-transform shadow-lg">
                <ShieldCheck size={32} />
              </div>
              <h3 className="font-serif font-bold mb-4 uppercase text-sm tracking-wider">Quality Craftsmanship</h3>
              <p className="text-white/80 text-xs leading-relaxed">Premium materials (wood, acrylic, glass) for durability and elegance.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gold text-burgundy rounded-sm border-2 border-[#D4AF37] mx-auto flex items-center justify-center mb-8 -rotate-3 group-hover:-rotate-12 transition-transform shadow-lg">
                <Star size={32} />
              </div>
              <h3 className="font-serif font-bold mb-4 uppercase text-sm tracking-wider">Affordable Pricing</h3>
              <p className="text-white/80 text-xs leading-relaxed">We offer the best rates in Nigeria without compromising on quality.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gold text-burgundy rounded-sm border-2 border-[#D4AF37] mx-auto flex items-center justify-center mb-8 rotate-6 group-hover:rotate-0 transition-transform shadow-lg">
                <Truck size={32} />
              </div>
              <h3 className="font-serif font-bold mb-4 uppercase text-sm tracking-wider">Fast Delivery</h3>
              <p className="text-white/80 text-xs leading-relaxed">Quick turnaround times with nationwide delivery across Nigeria.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gold text-burgundy rounded-sm border-2 border-[#D4AF37] mx-auto flex items-center justify-center mb-8 -rotate-6 group-hover:rotate-0 transition-transform shadow-lg">
                <Zap size={32} />
              </div>
              <h3 className="font-serif font-bold mb-4 uppercase text-sm tracking-wider">Expert Service</h3>
              <p className="text-white/80 text-xs leading-relaxed">A professional team dedicated to making your vision a reality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-cream rounded-2xl p-12 md:p-20 relative overflow-hidden border-2 border-dashed border-[#D4AF37]/40">
            <div className="max-w-xl">
              <p className="text-xs font-bold text-burgundy uppercase mb-2 tracking-widest">Simple Process</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-burgundy mb-10">How to Order</h2>
              <div className="space-y-6">
                {[
                  "Choose your product or frame size",
                  "Contact us on WhatsApp +234 706 880 2515",
                  "Send your photo or design requirements",
                  "Make payment through bank transfer",
                  "Receive your order delivered to you",
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-burgundy text-gold flex items-center justify-center font-bold shrink-0 text-sm">
                      {idx + 1}
                    </div>
                    <p className="text-sm font-semibold text-text/80 pt-1">{step}</p>
                  </div>
                ))}
              </div>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} className="btn-secondary mt-10 w-fit text-xs px-6 py-2">
                START CHAT
              </a>
            </div>

            <div className="hidden lg:block absolute right-0 bottom-0 w-1/2 h-full opacity-60">
              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000&auto=format&fit=crop"
                alt="Framing process"
                className="w-full h-full object-cover"
                style={{ clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-burgundy mb-16">Trusted by Nigerians</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white p-6 border border-[#D4AF37]/10 rounded shadow-sm text-left flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-gold mb-4">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-text/80 font-bold mb-4 text-sm">"{t.content}"</p>
                </div>
                <div className="pt-4 border-t border-gold/10">
                  <p className="font-bold text-xs text-burgundy">- {t.name}</p>
                  <p className="text-[10px] text-text/50 uppercase tracking-widest">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-16 bg-cream border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 bg-burgundy text-white p-10 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold opacity-10 rounded-full -mr-10 -mt-10"></div>
          <div className="text-center md:text-left relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">Have Custom Questions?</h2>
            <p className="text-sm opacity-80 font-medium font-mono uppercase tracking-widest text-gold text-left">We're available 9am - 6pm on WhatsApp</p>
          </div>
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
            className="btn-primary"
          >
            <MessageCircle size={20} /> Chat with a Consultant
          </a>
        </div>
      </section>
    </div>
  );
}
