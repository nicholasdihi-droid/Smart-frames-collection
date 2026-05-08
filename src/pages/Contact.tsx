import React from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { BUSINESS_INFO } from "../constants";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Note: In production, this would send an email or store in a DB)");
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <header className="bg-burgundy text-white py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Get In <span className="text-gold">Touch</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Questions, orders, or a custom request? We are here to help you preserve your memories.
          </p>
        </div>
      </header>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 group hover:border-gold transition-all duration-300">
              <div className="w-14 h-14 bg-cream text-burgundy rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                <Phone size={24} />
              </div>
              <p className="text-sm font-bold uppercase text-gray-400 mb-2">Phone Call</p>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="text-2xl font-bold text-burgundy hover:text-gold transition break-all">
                {BUSINESS_INFO.phone}
              </a>
            </div>

            <div className="bg-[#25D366]/10 p-8 rounded-3xl shadow-sm border border-[#25D366]/20 group hover:bg-[#25D366] transition-all duration-500">
              <div className="w-14 h-14 bg-white text-[#25D366] rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle size={24} />
              </div>
              <p className="text-sm font-bold uppercase text-gray-400 group-hover:text-white/70 mb-2">WhatsApp</p>
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} 
                target="_blank" 
                rel="noreferrer" 
                className="text-2xl font-bold text-burgundy group-hover:text-white transition break-all"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 group hover:border-gold transition-all duration-300">
              <div className="w-14 h-14 bg-cream text-burgundy rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                <Mail size={24} />
              </div>
              <p className="text-sm font-bold uppercase text-gray-400 mb-2">Email Address</p>
              <a href={`mailto:${BUSINESS_INFO.email}`} className="text-2xl font-bold text-burgundy hover:text-gold transition break-all">
                {BUSINESS_INFO.email}
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-gray-100">
              <h2 className="text-3xl font-bold text-burgundy mb-8">Send Us a Message</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400">Full Name</label>
                  <input type="text" required className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-gold outline-none transition" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400">Email Address</label>
                  <input type="email" required className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-gold outline-none transition" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400">Phone</label>
                  <input type="tel" required className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-gold outline-none transition" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400">Inquiry Type</label>
                  <select className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-gold outline-none transition appearance-none">
                    <option>General Inquiry</option>
                    <option>Place Order</option>
                    <option>Bulk/Business Request</option>
                    <option>Support</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400">Message</label>
                  <textarea rows={5} required className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-gold outline-none transition"></textarea>
                </div>
                <button className="md:col-span-2 btn-secondary py-5 text-xl rounded-2xl group flex justify-center items-center gap-3">
                  Send Message <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours & Map */}
      <section className="py-24 bg-cream/30">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl font-bold text-burgundy">Business Hours & Location</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-burgundy shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Our Workshop</h4>
                  <p className="text-gray-500 text-lg leading-relaxed">{BUSINESS_INFO.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-burgundy shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Working Hours</h4>
                  <p className="text-gray-500 text-lg leading-relaxed">{BUSINESS_INFO.hours}</p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-burgundy rounded-[2rem] text-white flex items-center justify-between shadow-xl">
              <div>
                <p className="text-gold font-bold mb-1 uppercase tracking-widest text-xs">Direct Support</p>
                <p className="text-2xl font-bold">Need help now?</p>
              </div>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} className="w-16 h-16 bg-gold text-burgundy rounded-full flex items-center justify-center hover:scale-110 transition shadow-2xl">
                <MessageCircle size={32} />
              </a>
            </div>
          </div>
          <div className="h-[600px] bg-gray-200 rounded-[3rem] overflow-hidden shadow-inner grayscale opacity-60 pointer-events-none">
            <img src="https://images.unsplash.com/photo-1544450297-6b4733a2a742?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
