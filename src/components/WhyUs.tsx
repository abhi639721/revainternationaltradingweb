import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Globe, ShieldCheck, Truck, BadgeCheck, Handshake, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Farm Fresh Quality",
    desc: "Sourced directly from the finest farms across India with strict quality controls at every step.",
    color: "from-emerald-500/20 to-green-500/10",
    iconColor: "text-emerald-600",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Exporting to 25+ countries across Europe, Asia, Middle East, and beyond.",
    color: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "Quality Certified",
    desc: "FSSAI, APEDA, ISO certified — meeting the highest international food safety standards.",
    color: "from-amber-500/20 to-yellow-500/10",
    iconColor: "text-amber-600",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    desc: "End-to-end cold chain management ensuring maximum freshness on delivery.",
    color: "from-purple-500/20 to-violet-500/10",
    iconColor: "text-purple-600",
  },
  {
    icon: BadgeCheck,
    title: "Competitive Pricing",
    desc: "Best value without compromising on quality — direct from farm to your market.",
    color: "from-rose-500/20 to-pink-500/10",
    iconColor: "text-rose-600",
  },
  {
    icon: Handshake,
    title: "Dedicated Support",
    desc: "Personalized service, seamless documentation, and hassle-free export processes.",
    color: "from-teal-500/20 to-emerald-500/10",
    iconColor: "text-teal-600",
  },
];

const stats = [
  { value: "25+", label: "Countries Served" },
  { value: "500+", label: "Happy Clients" },
  { value: "10K+", label: "Tons Exported" },
  { value: "100%", label: "Quality Assured" },
];

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-body font-semibold text-sm tracking-[0.15em] uppercase">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            What Sets Us <span className="text-primary">Apart</span>
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto text-lg">
            With years of expertise in fresh produce exports, we deliver excellence at every step — from farm to your doorstep.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="bg-primary/5 border border-primary/10 rounded-2xl p-5 text-center"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-muted-foreground font-body text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative bg-card rounded-2xl p-7 border border-border hover:border-primary/30 transition-all duration-300 group overflow-hidden"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              {/* Gradient bg on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <f.icon className={`w-7 h-7 ${f.iconColor}`} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{f.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-6 text-muted-foreground font-body text-sm"
        >
          {["FSSAI Certified", "APEDA Registered", "ISO Compliant", "Phytosanitary Approved"].map((label) => (
            <span key={label} className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-primary" />
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
