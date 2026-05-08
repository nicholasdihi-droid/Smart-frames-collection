import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { BUSINESS_INFO } from "../constants";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group active:scale-95 transition-transform"
      whileHover={{ scale: 1.1 }}
    >
      <MessageCircle size={32} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 font-bold whitespace-nowrap">
        Order on WhatsApp
      </span>
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
    </motion.a>
  );
}
