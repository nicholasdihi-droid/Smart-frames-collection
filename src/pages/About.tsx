import { motion } from "motion/react";
import { ShieldCheck, Users, Target, Heart } from "lucide-react";
import { BUSINESS_INFO } from "../constants";

export default function About() {
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
            About <span className="text-gold">Us</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Defining elegance in Nigerian homes and offices since our inception.
          </p>
        </div>
      </header>

      {/* Story Section */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-burgundy">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Smart Frames Collections began with a simple vision: to provide Nigerians with high-quality, elegant, and affordable photo framing solutions that stand the test of time. Based at the bustling Maraba roundabout on Makurdi Road, we've grown from a small workshop into a leading name in personalization services.
              </p>
              <p>
                We understand that every photo tells a story, and every gift carries an emotion. That's why we pour our heart into every frame we build and every item we customize. Our commitment to quality craftsmanship and customer satisfaction has made us a trusted partner for hundreds of families and businesses across Nigeria.
              </p>
              <p>
                Whether it's a simple 8x10 frame for a bedside table or a massive 20x30 gallery piece for a corporate boardroom, we treat every project with the same level of precision and respect.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="p-4 bg-cream rounded-2xl border border-gold/20">
                <p className="text-burgundy font-bold text-4xl">500+</p>
                <p className="text-gray-500 text-sm font-medium">Happy Customers</p>
              </div>
              <div className="p-4 bg-cream rounded-2xl border border-gold/20">
                <p className="text-burgundy font-bold text-4xl">1000+</p>
                <p className="text-gray-500 text-sm font-medium">Frames Delivered</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10"
            >
              <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200" alt="Smart Frames Collections Workshop" className="w-full" />
            </motion.div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold rounded-full opacity-20 blur-3xl" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-burgundy rounded-full opacity-20 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="p-10 bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:bg-burgundy hover:text-white transition-all duration-500">
              <div className="w-16 h-16 bg-cream text-burgundy rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold transition-colors">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="opacity-80 leading-relaxed">To provide world-class framing and personalization services that celebrate Nigerian culture and memories.</p>
            </div>
            <div className="p-10 bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:bg-burgundy hover:text-white transition-all duration-500">
              <div className="w-16 h-16 bg-cream text-burgundy rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold transition-colors">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quality First</h3>
              <p className="opacity-80 leading-relaxed">We never compromise on materials. Every frame uses premium wood and polished glass for a lifetime of beauty.</p>
            </div>
            <div className="p-10 bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:bg-burgundy hover:text-white transition-all duration-500">
              <div className="w-16 h-16 bg-cream text-burgundy rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold transition-colors">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Customer Care</h3>
              <p className="opacity-80 leading-relaxed">Your satisfaction is our primary goal. We listen, adapt, and deliver exactly what you envision.</p>
            </div>
            <div className="p-10 bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:bg-burgundy hover:text-white transition-all duration-500">
              <div className="w-16 h-16 bg-cream text-burgundy rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold transition-colors">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nigerian Roots</h3>
              <p className="opacity-80 leading-relaxed">Proudly serving the Nigerian market with an understanding of local trends, needs, and beauty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-burgundy text-white rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-4xl font-bold mb-8">Visit Our Studio</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Experience our quality in person. Visit our workshop at Maraba roundabout on Makurdi Road to see our frames and personalization samples.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-gold" size={20} />
                  </div>
                  <div>
                    <p className="font-bold">Location</p>
                    <p className="text-gray-400">{BUSINESS_INFO.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-gold" size={20} />
                  </div>
                  <div>
                    <p className="font-bold">Opening Hours</p>
                    <p className="text-gray-400">{BUSINESS_INFO.hours}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[400px] bg-white/5 rounded-3xl overflow-hidden relative group">
               <img src="https://images.unsplash.com/photo-1544450297-6b4733a2a742?q=80&w=1000" alt="Map View" className="w-full h-full object-cover opacity-50 contrast-125" />
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                 <div className="w-16 h-16 bg-gold text-burgundy rounded-full flex items-center justify-center animate-bounce shadow-2xl">
                   <Target size={32} />
                 </div>
                 <p className="mt-4 font-bold text-gold drop-shadow-lg">We are here!</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
