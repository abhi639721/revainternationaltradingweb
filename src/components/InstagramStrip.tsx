import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import banana from "@/assets/banana.webp";
import apple from "@/assets/apple.webp";
import mango from "@/assets/mango.webp";

const InstagramStrip = () => {
  return (
    <section className="py-12 bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-12 bg-background p-4 md:p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Branding */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white shadow-lg">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <p className="font-display font-bold text-foreground text-sm leading-none">revainternationaltradingllp</p>
              <p className="text-[10px] text-muted-foreground font-body mt-1 uppercase tracking-wider">Official Instagram</p>
            </div>
          </div>

          {/* Tiny Preview Grid */}
          <div className="flex gap-2">
            {[banana, apple, mango].map((img, i) => (
              <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden border border-border">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* CTA */}
          <a 
            href="https://www.instagram.com/revainternationaltradingllp?utm_source=qr&igsh=cXRyczhzNzJrZ3hm"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-2.5 bg-foreground text-background rounded-full font-display font-bold text-sm hover:bg-primary hover:text-white transition-all shadow-sm"
          >
            Follow Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramStrip;
