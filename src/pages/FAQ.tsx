import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Plus, Minus, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "../constants";

const FAQS = [
  {
    q: "How do I place an order?",
    a: "Contact us on WhatsApp at +234 706 880 2515 or call directly. Send your photo/design and specify your requirements, and we'll take it from there."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bank transfers, mobile money (Opay, PalmPay, Kuda), local card payments, and cash on delivery (for specific Maraba/Makurdi locations)."
  },
  {
    q: "How long does production take?",
    a: "Standard frames typically take 2-3 days. Custom personalization services like shirts or mugs take 3-5 days depending on the quantity and complexity."
  },
  {
    q: "Do you deliver nationwide in Nigeria?",
    a: "Yes! We deliver across Nigeria. Delivery within Abuja takes 1-2 days, while nationwide delivery to other states takes 3-7 days."
  },
  {
    q: "What are your delivery charges?",
    a: "Delivery within Abuja and Nasarawa outskirts ranges from ₦1,500 to ₦2,500. Charges for delivery to other states vary based on the courier service and location."
  },
  {
    q: "Can I customize any design I see online?",
    a: "Absolutely! Send us your design, photo, or an inspiration link (like Pinterest) and we'll work with you to make it happen."
  },
  {
    q: "What is your return policy?",
    a: "We guarantee satisfaction. If your frame arrives damaged or if you're not happy with the quality, contact us within 7 days for a resolution or replacement."
  },
  {
    q: "What frame materials do you use?",
    a: "We use high-quality wood for the frame body, clear polished glass for the front, and durable backing materials for long-lasting protection."
  },
  {
    q: "Can I see my design mockup before production?",
    a: "Yes, for all custom services (shirts, mugs, etc.), we send digital mockups for your approval before final production begins."
  },
  {
    q: "Do you have a physical store?",
    a: "Yes, visit us at Maraba roundabout, Makurdi Road. We'll be happy to show you our samples and take your order in person."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

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
            Common <span className="text-gold">Questions</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Everything you need to know about our frames, services, and delivery process in Nigeria.
          </p>
        </div>
      </header>

      <section className="py-24 max-w-4xl mx-auto px-4">
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
              >
                <h3 className={`text-lg md:text-xl font-bold transition-colors ${openIdx === idx ? "text-burgundy" : "text-gray-700"}`}>
                  {faq.q}
                </h3>
                <div className={`p-2 rounded-full transition-all ${openIdx === idx ? "bg-burgundy text-white rotate-180" : "bg-gray-50 text-gray-400 group-hover:text-burgundy"}`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 bg-gray-50/50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Support Banner */}
        <div className="mt-20 bg-burgundy rounded-[3rem] p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -mr-16 -mt-16" />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">Still have questions?</h2>
            <p className="text-gray-400">Our customer support is always ready to help you on WhatsApp.</p>
          </div>
          <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} className="btn-primary group">
            <MessageCircle className="group-hover:rotate-12 transition-transform" /> Chat with Us Now
          </a>
        </div>
      </section>
    </div>
  );
}
