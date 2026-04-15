import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Building2 } from "lucide-react";

const DubaiOffice = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02] pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-foreground fill-current">
          <path d="M45.7,-76.4C58.9,-69.3,69.1,-55.3,77.5,-40.5C85.9,-25.7,92.5,-10.1,91.3,4.8C90.1,19.7,81.1,34,71.1,46.5C61.1,59,50.1,69.7,36.5,76C22.9,82.3,6.7,84.2,-8.1,81.4C-22.9,78.6,-36.3,71.1,-48.5,61.9C-60.7,52.7,-71.7,41.8,-79.1,28.6C-86.5,15.4,-90.3,0,-87.6,-13.9C-84.9,-27.8,-75.7,-40,-63.9,-48.6C-52.1,-57.2,-37.7,-62.2,-24.1,-68.8C-10.5,-75.4,2.3,-83.6,16.4,-84C30.5,-84.4,45.7,-76.4,45.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-accent font-body font-semibold text-sm tracking-[0.15em] uppercase mb-4 inline-block"
          >
            International Presence
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Global Reach, Local Setup
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground font-body text-lg leading-relaxed"
          >
            Expanding our footprint to better serve our global partners from the heart of the Middle East.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-4xl mx-auto bg-card rounded-3xl p-8 md:p-12 border border-border relative overflow-hidden group"
          style={{ boxShadow: "var(--card-shadow)" }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150"></div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-primary/10 rounded-2xl mb-6 sm:mb-8">
                <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2 sm:mb-4">
                Dubai Regional Office
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                Our strategic hub in Dubai enables seamless operations and robust supply chain management across the Middle East and global markets.
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center shrink-0 shadow-sm">
                    <Building2 className="w-4 h-4 text-foreground/70" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-body mb-0.5 sm:mb-1">Legal Entity</div>
                    <div className="text-foreground font-semibold font-body text-sm sm:text-base">TATVA International Trading FZC</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-4 h-4 text-foreground/70" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-body mb-1">Address</div>
                    <div className="text-foreground font-medium font-body leading-relaxed">
                      Business Center, Sharjah Publishing City Free Zone<br />
                      Sharjah, United Arab Emirates
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-4 h-4 text-foreground/70" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-body mb-1">Phone</div>
                    <a href="tel:+971555400347" className="text-foreground font-semibold font-body hover:text-primary transition-colors">
                      +971 55 540 0347
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[300px] md:h-full min-h-[300px] rounded-2xl overflow-hidden border border-border">
               <img 
                 src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" 
                 alt="Dubai skyline" 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"></div>
               <div className="absolute bottom-6 left-6 right-6">
                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur border border-border/50 shadow-sm">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                   <span className="text-xs font-semibold uppercase tracking-wider text-foreground">Operational Hub</span>
                 </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DubaiOffice;
