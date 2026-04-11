import { Link } from "react-router-dom";
import logo from "@/assets/logo.webp";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Contact Us", to: "/contact" },
];

const productLinks = [
  { label: "Bananas", to: "/products/banana" },
  { label: "Mangoes", to: "/products/mango" },
  { label: "Grapes", to: "/products/grapes" },
  { label: "Pomegranates", to: "/products/pomegranate" },
  { label: "Drumsticks", to: "/products/drumstick" },
  { label: "Onions", to: "/products/onion" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Reva International LLP" className="h-10 w-10 brightness-200" />
              <div>
                <span className="font-display text-lg font-bold text-background block">REVA INTERNATIONAL</span>
                <span className="text-xs tracking-[0.2em] text-background/50 font-body">TRADING</span>
              </div>
            </Link>
            <p className="text-background/60 font-body text-sm leading-relaxed">
              Your trusted partner for premium Indian fresh produce exports to global markets.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold text-background mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((l) => (
                <Link key={l.label} to={l.to} className="text-background/60 hover:text-background transition-colors font-body text-sm">{l.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-background mb-4">Products</h4>
            <div className="flex flex-col gap-2">
              {productLinks.map((p) => (
                <Link key={p.label} to={p.to} className="text-background/60 hover:text-background transition-colors font-body text-sm">{p.label}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 text-center">
          <p className="text-background/40 text-sm font-body">
            © {new Date().getFullYear()} Reva International LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
