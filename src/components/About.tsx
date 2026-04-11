import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, TrendingUp, Users, Shield } from "lucide-react";
import vegetables from "@/assets/vegetables.webp";

const stats = [
  { icon: Award, label: "Years Experience", value: "10+" },
  { icon: TrendingUp, label: "Countries Served", value: "25+" },
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Shield, label: "Quality Certified", value: "100%" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden bg-secondary p-8 relative">
              <img src={vegetables} alt="Fresh vegetables" className="w-full max-w-md mx-auto floating-fruit" loading="lazy" width={640} height={512} />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-accent/20" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-primary/10" />
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-accent font-body font-semibold text-sm tracking-[0.15em] uppercase">About Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Your Trusted Partner for Premium Agro Products
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Welcome to Reva International LLP, your trusted partner for premium-quality fresh fruits and vegetable exports. 
              We have proudly served as a leading supplier of top-tier agro products, driven by a passion for excellence 
              and committed to ensuring unparalleled customer satisfaction.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Our dedicated team ensures the freshest produce reaches global markets with rigorous quality control, 
              competitive pricing, and seamless export processes.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="bg-secondary rounded-xl p-4 text-center"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-body">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
