import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.webp";
import revaWordmark from "@/assets/reva.webp";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Why Us", to: "/why-us" },
  { label: "Contact Us", to: "/contact" },
];

const productLinks = [
  { label: "Bananas", to: "/products/banana" },
  { label: "Mangoes", to: "/products/mango" },
  { label: "Drumsticks", to: "/products/drumstick" },
  { label: "Onions", to: "/products/onion" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Brand & About */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Reva International Trading LLP" className="h-10 w-10 brightness-200" />
              <div className="flex flex-col items-start leading-none gap-0.5">
                <img src={revaWordmark} alt="Reva International Trading LLP" className="h-7 object-contain brightness-200" />
                <span
                  style={{ fontFamily: "'Rajdhani', sans-serif", color: "hsl(100 55% 60%)", letterSpacing: "0.2em" }}
                  className="text-[0.7rem] font-semibold uppercase"
                >
                  INTERNATIONAL TRADING LLP
                </span>
              </div>
            </Link>
            <p className="text-background/60 font-body text-sm leading-relaxed">
              Your trusted partner for premium Indian fresh produce exports to global markets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-background mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((l) => (
                <Link key={l.label} to={l.to} className="text-background/60 hover:text-background transition-colors font-body text-sm">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-bold text-background mb-4">Our Products</h4>
            <div className="flex flex-col gap-2">
              {productLinks.map((p) => (
                <Link key={p.label} to={p.to} className="text-background/60 hover:text-background transition-colors font-body text-sm">{p.label}</Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-background mb-4">Contact Us</h4>
            
            {/* HQ */}
            <div className="mb-6">
              <h5 className="text-background font-semibold font-body text-xs uppercase tracking-wider mb-3 opacity-80 border-b border-background/20 pb-1">India Headquarters</h5>
              <div className="flex flex-col gap-3">
                <a href="tel:+919033203330" className="flex items-start gap-2.5 text-background/60 hover:text-background transition-colors group">
                  <Phone size={15} className="mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
                  <span className="font-body text-sm">+91 9033203330</span>
                </a>
                <a href="mailto:info@revaitrading.com" className="flex items-start gap-2.5 text-background/60 hover:text-background transition-colors group">
                  <Mail size={15} className="mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
                  <span className="font-body text-sm">info@revaitrading.com</span>
                </a>
                <div className="flex items-start gap-2.5 text-background/60">
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span className="font-body text-sm leading-relaxed">
                    A-1, Uttkrash Society, Near Avdhoot Society,<br />
                    Ardhoot Nagar, Bholav, Bharuch, Gujarat 392001
                  </span>
                </div>
              </div>
            </div>

            {/* Dubai */}
            <div>
              <h5 className="text-background font-semibold font-body text-xs uppercase tracking-wider mb-3 opacity-80 border-b border-background/20 pb-1">Dubai Regional Office</h5>
              <div className="flex flex-col gap-3">
                <a href="tel:+971555400347" className="flex items-start gap-2.5 text-background/60 hover:text-background transition-colors group">
                  <Phone size={15} className="mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
                  <span className="font-body text-sm">+971 55 540 0347</span>
                </a>
                <div className="flex items-start gap-2.5 text-background/60">
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span className="font-body text-sm leading-relaxed">
                    TATVA International Trading FZC,<br />
                    Sharjah Publishing City Free Zone,<br />
                    Sharjah, UAE
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-background/10 pt-6 text-center">
          <p className="text-background/40 text-sm font-body">
            © {new Date().getFullYear()} Reva International Trading LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
