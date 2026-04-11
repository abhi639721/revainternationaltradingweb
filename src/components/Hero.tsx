import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import mango from "@/assets/mango.webp";
import orange from "@/assets/orange.webp";
import grapes from "@/assets/grapes.webp";
import leaf from "@/assets/leaf.webp";
import banana from "@/assets/banana.webp";
import drumstick from "@/assets/drumstick.webp";
import vegetables from "@/assets/vegetables.webp";

const heroSlides = [
  {
    tagline: "India's Premium Banana & Fresh Produce Exporter",
    heading: <>Specializing in{" "}<span className="text-accent">Premium Bananas</span></>,
    description: "REVA INTERNATIONAL TRADING has gained immense expertise in supplying & trading of Cavendish bananas, exotic tropical fruits, premium table grapes, pomegranates, fresh drumsticks & more to global markets.",
    cta: { label: "Our Bananas", to: "/products/banana" },
    image: banana,
    imageAlt: "Premium Indian Bananas — Reva International",
  },
  {
    tagline: "Exotic Tropical Fruits from India",
    heading: <>Farm Fresh{" "}<span className="text-accent">Indian Mangoes</span></>,
    description: "We export the finest Alphonso, Kesar, and Totapuri mangoes, handpicked from the best orchards across India. Experience the king of fruits at its premium best.",
    cta: { label: "Explore Mangoes", to: "/products/mango" },
    image: mango,
    imageAlt: "Premium Indian Mangoes — Reva International",
  },
  {
    tagline: "Premium Table Grapes & Pomegranates",
    heading: <>World-Class{" "}<span className="text-accent">Fresh Grapes</span></>,
    description: "Our premium table grapes and pomegranates meet the highest international quality standards. Sourced from Nashik and Maharashtra's finest vineyards.",
    cta: { label: "View Grapes", to: "/products/grapes" },
    image: grapes,
    imageAlt: "Premium Indian Grapes — Reva International",
  },
  {
    tagline: "Fresh Vegetables & Moringa Export",
    heading: <>Premium{" "}<span className="text-accent">Fresh Drumsticks</span></>,
    description: "We export top-quality moringa drumsticks from Tamil Nadu and Karnataka. Rich in nutrients, our drumsticks are packed fresh with export-grade quality for international markets.",
    cta: { label: "View Drumsticks", to: "/products/drumstick" },
    image: drumstick,
    imageAlt: "Fresh Indian Drumsticks — Reva International",
  },
  {
    tagline: "India's Finest Vegetables for Global Markets",
    heading: <>Farm Fresh{" "}<span className="text-accent">Indian Vegetables</span></>,
    description: "Premium onions, potatoes, and seasonal vegetables sourced from India's best growing regions. Quality checked and export-ready for your markets.",
    cta: { label: "View Vegetables", to: "/products/onion" },
    image: vegetables,
    imageAlt: "Fresh Indian Vegetables — Reva International",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[current];

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      {/* Floating accent fruits */}
      <motion.img
        src={mango}
        alt=""
        className="absolute top-[8%] right-[3%] w-24 md:w-32 floating-fruit opacity-70"
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
        width={128}
        height={128}
      />
      <motion.img
        src={orange}
        alt=""
        className="absolute bottom-[20%] right-[8%] w-20 md:w-28 floating-fruit-delayed opacity-60"
        initial={{ scale: 0, rotate: 20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
        loading="lazy"
        width={112}
        height={112}
      />
      <motion.img
        src={grapes}
        alt=""
        className="absolute top-[25%] left-[2%] w-20 md:w-28 floating-fruit-slow opacity-60 hidden md:block"
        initial={{ scale: 0, x: -50 }}
        animate={{ scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1, type: "spring" }}
        loading="lazy"
        width={112}
        height={112}
      />
      <motion.img
        src={leaf}
        alt=""
        className="absolute -top-10 -right-10 w-48 md:w-72 opacity-20 animate-spin-slow"
        loading="lazy"
        width={288}
        height={288}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left text */}
          <div className="max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-accent font-body font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                  {slide.tagline}
                </p>
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
                  {slide.heading}
                </h1>
                <p className="text-primary-foreground/80 text-lg md:text-xl font-body mb-8 max-w-lg">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to={slide.cta.to}
                    className="bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-semibold font-body hover:brightness-110 transition-all shadow-lg inline-flex items-center gap-2"
                  >
                    {slide.cta.label} <ArrowRight size={18} />
                  </Link>
                  <Link
                    to="/products"
                    className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold font-body hover:bg-primary-foreground/10 transition-all"
                  >
                    All Products
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide indicators */}
            <div className="flex gap-2 mt-8">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    idx === current ? "w-8 bg-accent" : "w-2 bg-primary-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right — Hero image showcase */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl scale-110" />
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="relative z-10 w-64 md:w-80 lg:w-96 object-contain drop-shadow-2xl floating-fruit"
                  width={384}
                  height={384}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,60 1440,80 L1440,120 L0,120 Z"
            fill="hsl(120 20% 98%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
