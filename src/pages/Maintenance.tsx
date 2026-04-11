import { motion } from "framer-motion";
import { Phone, Mail, Globe, Clock } from "lucide-react";
import logo from "@/assets/logo.webp";
import mango from "@/assets/mango.webp";
import banana from "@/assets/banana.webp";
import orange from "@/assets/orange.webp";
import grapes from "@/assets/grapes.webp";

const Maintenance = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 z-0" />
      
      {/* Floating Fruits */}
      <motion.img
        src={mango}
        className="absolute top-[10%] left-[5%] w-24 md:w-32 opacity-20 pointer-events-none"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={banana}
        className="absolute bottom-[15%] right-[10%] w-28 md:w-36 opacity-20 pointer-events-none"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={orange}
        className="absolute top-[20%] right-[15%] w-20 md:w-28 opacity-20 pointer-events-none"
        animate={{ x: [0, 15, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={grapes}
        className="absolute bottom-[20%] left-[10%] w-24 md:w-32 opacity-20 pointer-events-none"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container max-w-2xl px-4 relative z-10 text-center">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <img src={logo} alt="Fruity Motion Studio Logo" className="w-48 md:w-64 mx-auto drop-shadow-xl" />
        </motion.div>

        {/* glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card/40 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]"
        >
          <span className="text-accent font-body font-bold text-sm tracking-[0.3em] uppercase mb-4 block">
            Something Fresh is Brewing
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Coming Soon
          </h1>
          <p className="text-muted-foreground font-body text-lg mb-10 leading-relaxed">
            We are hand-picking the finest digital experience for you. 
            <strong> Fruity Motion Studio</strong> is getting ready to serve premium quality produce globally.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 text-left max-w-md mx-auto mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Email Us</p>
                <p className="text-sm font-semibold text-foreground">info@revaitrading.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Call Us</p>
                <p className="text-sm font-semibold text-foreground">+91 90332 03330</p>
              </div>
            </div>
          </div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="mailto:info@revaitrading.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold font-body shadow-lg hover:shadow-primary/20 transition-all uppercase tracking-wider"
            >
              Get Notified
            </a>
          </motion.div>
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-muted-foreground/60 text-xs font-body font-semibold uppercase tracking-widest"
        >
          <div className="flex items-center gap-2"><Globe size={14} /> Global Export</div>
          <div className="flex items-center gap-2"><Clock size={14} /> Opening Soon</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Maintenance;
