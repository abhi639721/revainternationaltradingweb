import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import leaf from "@/assets/leaf.webp";

interface PageHeroProps {
  title: string;
  breadcrumbs: { label: string; to?: string }[];
}

const PageHero = ({ title, breadcrumbs }: PageHeroProps) => (
  <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
    <motion.img
      src={leaf}
      alt=""
      className="absolute -top-10 -right-10 w-48 md:w-72 opacity-15 animate-spin-slow"
    />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-accent font-body font-semibold text-sm tracking-[0.15em] uppercase mb-2">
          Reva International LLP
        </p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
          {title}
        </h1>
        <div className="flex items-center gap-2 mt-4 text-primary-foreground/70 font-body text-sm">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              {crumb.to ? (
                <Link to={crumb.to} className="hover:text-primary-foreground transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-primary-foreground">{crumb.label}</span>
              )}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <path d="M0,50 C360,80 720,20 1080,50 C1260,65 1380,35 1440,50 L1440,80 L0,80 Z" fill="hsl(120 20% 98%)" />
      </svg>
    </div>
  </section>
);

export default PageHero;
