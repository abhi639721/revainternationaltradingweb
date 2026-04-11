import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ShieldCheck, Award, Leaf, FileCheck, CheckCircle } from "lucide-react";

const certifications = [
  { icon: ShieldCheck, title: "FSSAI Certified", desc: "Food Safety and Standards Authority of India approved for quality assurance." },
  { icon: Award, title: "APEDA Registered", desc: "Agricultural and Processed Food Products Export Development Authority registered." },
  { icon: Leaf, title: "Global GAP", desc: "Good Agricultural Practices certification for sustainable farming standards." },
  { icon: FileCheck, title: "Phytosanitary Certificate", desc: "Plant health certificates issued meeting international standards." },
  { icon: CheckCircle, title: "ISO 22000", desc: "International standard for food safety management systems." },
];

// Double the array for seamless loop
const doubled = [...certifications, ...certifications];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [paused, setPaused] = useState(false);

  return (
    <section className="section-padding bg-background overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-accent font-body font-semibold text-sm tracking-[0.15em] uppercase">
            Trust & Quality
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Our Certifications
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto">
            We adhere to the highest international food safety and quality standards, ensuring every shipment meets global compliance requirements.
          </p>
        </motion.div>
      </div>

      {/* Sliding track */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              duration: 25,
              repeat: Infinity,
              ease: "linear",
              ...(paused && { duration: 0 }),
            },
          }}
          style={paused ? { animationPlayState: "paused" } : {}}
        >
          {doubled.map((cert, i) => (
            <motion.div
              key={`${cert.title}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: (i % certifications.length) * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all text-center group flex-shrink-0 w-[280px]"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <cert.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{cert.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{cert.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
