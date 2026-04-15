import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.webp";
import revaWordmark from "@/assets/reva.webp";

const isActiveLink = (href: string, pathname: string) => {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return pathname === "/";
  return pathname.startsWith(href);
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2 hidden md:block">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> India
            </span>
            <a href="tel:+919033203330" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Phone size={14} /> +91 90332 03330
            </a>
          </div>
          <a href="mailto:info@revaitrading.com" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <Mail size={14} /> info@revaitrading.com
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
      >
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Reva International Trading LLP" className="h-12 w-12 object-contain" />
            <div className="flex flex-col items-start leading-none gap-0.5">
              <img src={revaWordmark} alt="Reva International Trading LLP" className="h-8 object-contain" />
              <span
                style={{ fontFamily: "'Rajdhani', sans-serif", color: "hsl(100 55% 38%)", letterSpacing: "0.2em" }}
                className="text-[0.7rem] font-semibold tracking-widest uppercase"
              >
                INTERNATIONAL TRADING LLP
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-medium transition-colors relative group font-body ${isActiveLink(link.href, location.pathname) ? "text-primary font-bold" : "text-foreground/80 hover:text-primary"
                  }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity font-body"
            >
              Get A Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-card border-t border-border"
            >
              <div className="flex flex-col px-4 py-4 gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`py-2 font-body ${isActiveLink(link.href, location.pathname) ? "text-primary font-bold" : "text-foreground/80 hover:text-primary"}`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link to="/contact" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center font-body">
                  Get A Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
