import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, TrendingUp, Users, Shield, Leaf, Droplets, PackageCheck, Truck } from "lucide-react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import mango from "@/assets/mango.webp";
import vegetables from "@/assets/vegetables.webp";
import grapes from "@/assets/grapes.webp";
import orange from "@/assets/orange.webp";

const stats = [
  { icon: Award, label: "Years Experience", value: "10+" },
  { icon: TrendingUp, label: "Countries Served", value: "25+" },
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Shield, label: "Satisfaction Rate", value: "95%" },
];

const process = [
  { icon: Leaf, title: "Farm Sourcing", desc: "Our success starts with a network of dedicated farmers. Their expertise and commitment to sustainable practices ensure the finest fruits and vegetables are cultivated under ideal conditions.", image: grapes },
  { icon: Droplets, title: "Cleaning & Storage", desc: "We meticulously clean and store our produce in cool, hygienic environments, preserving its freshness and maximizing its lifespan for export.", image: vegetables },
  { icon: PackageCheck, title: "Quality Control", desc: "We adhere to rigorous quality control procedures, ensuring every shipment meets our clients' exacting international standards.", image: orange },
  { icon: Truck, title: "Cold Chain Delivery", desc: "Our advanced cold chain logistics ensure produce reaches global destinations in pristine condition, maintaining freshness from farm to table.", image: mango },
];

const countries = [
  "United Kingdom", "Canada", "Germany", "Spain", "UAE (Dubai)", "Qatar",
  "Singapore", "Malaysia", "Japan", "South Korea", "New Zealand", "South Africa",
  "Belgium", "Hong Kong", "Norway", "Sweden",
];

const AboutPage = () => {
  const storyRef = useRef(null);
  const processRef = useRef(null);
  const countriesRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-80px" });
  const processInView = useInView(processRef, { once: true, margin: "-80px" });
  const countriesInView = useInView(countriesRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen">
      <SEO 
        title="About Us | Global Agro Export Experts"
        description="Learn more about Reva International Trading, our farm-to-table process, and our commitment to supplying premium Indian produce worldwide."
      />
      <Navbar />
      <PageHero
        title="About Us"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
      />

      {/* Story Section */}
      <section className="section-padding bg-background" ref={storyRef}>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden bg-secondary p-8 relative">
                <img src={mango} alt="Fresh mango" className="w-full max-w-sm mx-auto floating-fruit" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-accent/20" />
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-primary/10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-accent font-body font-semibold text-sm tracking-[0.15em] uppercase">About Us</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Your Trusted Partner for Premium Agro Products
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Welcome to <strong className="text-foreground">Reva International LLP</strong>, your trusted partner for premium-quality fresh fruits and vegetable exports. 
                We have proudly served as a leading supplier of top-tier agro products, driven by a passion for excellence 
                and committed to ensuring unparalleled customer satisfaction.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Freshness is our ultimate goal throughout the entire supply chain. We have a rigorous selection process, 
                hand-picking only the most impeccable fresh fruits and vegetables that meet our strict standards. 
                Our vision extends to implementing sustainable harvesting, sustainable farming practices, and meticulous 
                handling after the harvest.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                Our produce undergoes thorough cleansing and is secured in cool, hygienic facilities to guarantee peak 
                freshness upon arrival. We utilize eco-friendly, high-quality packaging to ensure your deliveries reach 
                you in pristine condition.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={storyInView ? { opacity: 1, y: 0 } : {}}
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

      {/* Process Section */}
      <section className="section-padding bg-secondary/50" ref={processRef}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-accent font-body font-semibold text-sm tracking-[0.15em] uppercase">Our Process</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              From Farm to Your Table
            </h2>
            <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto">
              We ensure quality at every step — from sourcing the freshest produce to delivering it across the globe.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {process.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-card rounded-2xl overflow-hidden border border-border group"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-40 h-40 sm:h-auto bg-secondary/80 flex items-center justify-center p-4 shrink-0">
                    <img src={step.image} alt={step.title} className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="section-padding bg-background" ref={countriesRef}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={countriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-accent font-body font-semibold text-sm tracking-[0.15em] uppercase">Global Reach</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Countries We Export To
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {countries.map((country, i) => (
              <motion.div
                key={country}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={countriesInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-card rounded-xl p-4 text-center border border-border hover:border-primary/30 transition-colors cursor-default"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <span className="text-2xl mb-2 block">🌍</span>
                <span className="font-body text-sm font-medium text-foreground">{country}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
