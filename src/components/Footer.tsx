import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Heart } from "lucide-react";
import { BUSINESS_INFO, FRAME_SIZES } from "../constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#D4AF37]/30 text-text/80">
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Info */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-burgundy mb-6">
              SMART <span className="text-gold-dark">FRAMES</span>
            </h2>
            <p className="mb-6 leading-relaxed text-sm font-medium">
              Nigeria's premium choice for elegant photo frames and professional personalization services. We turn your
              memories into timeless art.
            </p>
            <div className="flex gap-4">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center hover:bg-gold hover:text-burgundy transition"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-burgundy font-bold text-xs mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4 text-sm font-semibold">
              <li>
                <Link to="/" className="hover:text-gold-dark transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/frames" className="hover:text-gold-dark transition">
                  Photo Frames
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-dark transition">
                  Custom Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold-dark transition">
                  Our Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-dark transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="text-burgundy font-bold text-xs mb-6 uppercase tracking-wider">Frame Sizes</h3>
            <ul className="space-y-4 text-sm font-semibold">
              {FRAME_SIZES.slice(0, 5).map((f) => (
                <li key={f.id}>
                  <Link to="/frames" className="hover:text-gold-dark transition flex justify-between">
                    <span>{f.size}</span>
                    <span className="text-burgundy">₦{f.price.toLocaleString()}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-burgundy font-bold text-xs mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-6 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold-dark shrink-0" size={18} />
                <span>{BUSINESS_INFO.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold-dark shrink-0" size={18} />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-gold-dark transition">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold-dark shrink-0" size={18} />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-gold-dark transition break-all">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-md font-bold text-xs uppercase tracking-widest hover:scale-105 transition"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#D4AF37]/30 pt-4 mt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest font-semibold gap-4">
          <div className="text-burgundy">© {currentYear} Smart Frames Collections. All Rights Reserved.</div>
          <div className="flex space-x-6 text-text/60">
            <span className="cursor-pointer hover:text-burgundy">Privacy Policy</span>
            <span className="cursor-pointer hover:text-burgundy">Terms of Service</span>
            <span className="cursor-pointer hover:text-burgundy">FAQ</span>
            <span className="text-burgundy">Made with ❤️ in Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
