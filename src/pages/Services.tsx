import React, { useState } from "react";
import { motion } from "motion/react";
import { MessageCircle, Shirt, Square, Coffee, Book, CupSoda, Award, Layout, Upload } from "lucide-react";
import { BUSINESS_INFO, SERVICES } from "../constants";

export default function Services() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "Photo Frames",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Order Inquiry from ${formData.name} (%2B${formData.phone}): Product: ${formData.product}. Message: ${formData.message}`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${text}`, "_blank");
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Shirt": return <Shirt size={32} />;
      case "Square": return <Square size={32} />;
      case "Coffee": return <Coffee size={32} />;
      case "Book": return <Book size={32} />;
      case "CupSoda": return <CupSoda size={32} />;
      case "Award": return <Award size={32} />;
      case "Layout": return <Layout size={32} />;
      default: return <motion.div className="w-8 h-8 bg-burgundy rounded" />;
    }
  };

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
            Custom <span className="text-gold">Services</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Beyond frames, we personalize your life. High-quality customization for gifts, events, and everyday use.
          </p>
        </div>
      </header>

      {/* Services List */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="luxury-card p-10 flex flex-col md:flex-row gap-8 items-start group hover:border-gold transition-all"
            >
              <div className="w-20 h-20 bg-cream rounded-2xl flex items-center justify-center text-burgundy group-hover:bg-gold transition-colors shrink-0">
                {getIcon(service.icon)}
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-burgundy">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.description} We use premium materials and high-resolution printing to ensure your {service.title.toLowerCase()} looks stunning and lasts for years.
                </p>
                <div className="pt-4 flex flex-wrap gap-3">
                  <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Inquiry for ${service.title}`} className="btn-primary py-2 px-6 text-sm">
                    Request Quote
                  </a>
                  <button className="text-burgundy font-bold hover:underline">Learn More →</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-burgundy mb-20">Simple Customization Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Upload />, title: "Send Design", desc: "Upload or send your design/photo via WhatsApp." },
              { icon: <Layout />, title: "Approve Mockup", desc: "We create a digital mockup for your approval." },
              { icon: <Award />, title: "Production", desc: "Our experts produce your custom item with care." },
              { icon: <MessageCircle />, title: "Receive Order", desc: "Your item is delivered to your preferred location." },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-white shadow-md rounded-full flex items-center justify-center text-burgundy mx-auto mb-6 border border-gold/20">
                  {step.icon}
                </div>
                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-gray-500">{step.desc}</p>
                {idx < 3 && <div className="hidden md:block h-0.5 bg-gold/30 mt-8 w-1/2 mx-auto" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-24 max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold text-burgundy text-center mb-4">Start Your Custom Order</h2>
          <p className="text-gray-500 text-center mb-12">Fill out the form below and we'll contact you on WhatsApp.</p>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase text-gray-400">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-gold outline-none transition" 
                  placeholder="John Doe" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase text-gray-400">Phone (WhatsApp)</label>
                <input 
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-gold outline-none transition" 
                  placeholder="+234..." 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase text-gray-400">Product Category</label>
              <select 
                value={formData.product}
                onChange={(e) => setFormData({...formData, product: e.target.value})}
                className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-gold outline-none transition appearance-none"
              >
                {SERVICES.map(s => <option key={s.id}>{s.title}</option>)}
                <option>Other / Special Request</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase text-gray-400">Special Instructions</label>
              <textarea 
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-gold outline-none transition"
                placeholder="Give us details about your design or specific needs..."
              ></textarea>
            </div>
            
            <button type="submit" className="w-full btn-secondary py-5 text-xl rounded-2xl group">
              Submit Inquiry & Chat <MessageCircle className="group-hover:rotate-12 transition-transform" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
