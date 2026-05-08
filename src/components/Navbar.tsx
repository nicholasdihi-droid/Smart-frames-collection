import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Menu, X, Frame } from "lucide-react";
import { BUSINESS_INFO } from "../constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Photo Frames", path: "/frames" },
    { name: "Custom Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-burgundy text-gold px-8 py-1.5 text-xs hidden md:flex justify-between items-center">
        <div className="flex space-x-6">
          <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-2 hover:text-white transition">
            <Phone size={14} /> {BUSINESS_INFO.phone}
          </a>
          <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center gap-2 hover:text-white transition">
            <Mail size={14} /> {BUSINESS_INFO.email}
          </a>
        </div>
        <p className="font-semibold uppercase tracking-widest">Nigeria's Premier Frame Boutique</p>
      </div>

      {/* Main Nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 border-b border-gold/30 px-4 md:px-8 py-4 flex justify-between items-center ${
          isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 border-2 border-gold-dark flex items-center justify-center rounded-sm bg-burgundy group-hover:scale-105 transition-transform duration-300">
              <span className="text-gold font-serif text-xl font-bold">SF</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-serif font-bold text-burgundy tracking-tight">
                SMART FRAMES <span className="text-gold-dark">COLLECTIONS</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 text-sm font-semibold uppercase tracking-wide text-text/70">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`hover:text-burgundy cursor-pointer transition-colors ${
                  location.pathname === link.path ? "text-burgundy border-b-2 border-gold-dark" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="bg-gold text-burgundy px-6 py-2 rounded-md font-bold hover:bg-gold-dark transition shadow-lg text-xs"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-burgundy" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="p-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg font-bold text-gray-700 hover:text-burgundy flex items-center justify-between"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                {location.pathname === link.path && <div className="w-2 h-2 rounded-full bg-gold" />}
              </Link>
            ))}
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 bg-burgundy text-white py-4 rounded-xl flex items-center justify-center font-bold gap-2 text-lg active:scale-95 transition"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
