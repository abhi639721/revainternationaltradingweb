import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, TrendingUp, Users, Shield, Leaf, Droplets, PackageCheck, Truck, Package, Globe2, FileCheck, Target } from "lucide-react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import mango from "@/assets/mango.webp";
import vegetables from "@/assets/vegetables.webp";
import grapes from "@/assets/grapes.webp";
import orange from "@/assets/orange.webp";
import farmSourcingImg from "@/assets/farm_sourcing.webp";
import cleaningStorageImg from "@/assets/cleaning_storage.webp";
import qualityControlImg from "@/assets/quality_control.webp";
import globalDeliveryImg from "@/assets/global_delivery.webp";

const stats = [
  { icon: Award, label: "Years Experience", value: "10+" },
  { icon: TrendingUp, label: "Countries Served", value: "25+" },
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Shield, label: "Satisfaction Rate", value: "95%" },
];

const processSteps = [
  { step: "01", icon: Leaf, title: "Strategic Farm Sourcing", desc: "Our journey begins at the roots. We partner directly with dedicated farmers utilizing sustainable practices, ensuring our fresh fruits and vegetables are cultivated under ideal conditions.", image: farmSourcingImg },
  { step: "02", icon: Droplets, title: "Advanced Cleaning & Storage", desc: "Post-harvest, every batch is swiftly transported to our facilities. Produce undergoes rigorous cleaning and is stored in climate-controlled environments to preserve profound freshness.", image: cleaningStorageImg },
  { step: "03", icon: PackageCheck, title: "Stringent Quality Control", desc: "Quality isn't an afterthought. Our certified inspectors conduct thorough multi-point checks—analyzing size, color, firmness, and phytosanitary metrics—ensuring flawless compliance.", image: qualityControlImg },
  { step: "04", icon: Truck, title: "Global Cold Chain Delivery", desc: "Using advanced cold chain logistics in sea and air freight, we ensure that the micro-climate is perfectly maintained, delivering farm-fresh produce directly to your international doorstep.", image: globalDeliveryImg },
];

const services = [
  { icon: Package, title: "Import & Export of FMCG Products", desc: "Delivering premium FMCG solutions with consistent quality, reliable logistics, and global market access." },
  { icon: Globe2, title: "Global Sourcing & Procurement", desc: "Reliable sourcing from trusted producers across Asia and the Middle East at competitive prices." },
  { icon: FileCheck, title: "International Trade Compliance", desc: "Complete support with trade documents and certifications for smooth cross-border movement." },
  { icon: Target, title: "Private Label & Packaging Solutions", desc: "Custom branding, packaging, and regional marketing support to launch your F&B products." },
];

const AboutPage = () => {
  const storyRef = useRef(null);
  const processRef = useRef(null);
  const servicesRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-80px" });
  const processInView = useInView(processRef, { once: true, margin: "-80px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen">
      <SEO 
        title="About Us | Global Agro Export Experts"
        description="Learn more about Reva International Trading LLP, our farm-to-table process, and our commitment to supplying premium Indian produce worldwide."
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
      <section className="section-padding bg-secondary/30 relative" ref={processRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-20"
          >
            <span className="text-accent font-body font-semibold text-sm tracking-[0.15em] uppercase">Our Process</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3">
              From Farm to Your Table
            </h2>
            <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed px-2">
              We ensure flawless quality at every step — orchestrating a seamless flow from cultivating the freshest produce to delivering it globally.
            </p>
          </motion.div>

          {/* ── MOBILE layout: vertical stepper ── */}
          <div className="lg:hidden relative max-w-xl mx-auto">
            {/* Vertical connector line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-10">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative pl-16"
                >
                  {/* Step badge */}
                  <div className="absolute left-0 top-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg z-10 border-4 border-background">
                    <span className="font-display font-bold text-primary-foreground text-sm">{step.step}</span>
                  </div>

                  {/* Image */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-md border border-border/50 mb-4">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                    <div className="absolute top-3 right-3 w-9 h-9 bg-background rounded-xl flex items-center justify-center shadow-sm">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── DESKTOP layout: alternating left/right ── */}
          <div className="hidden lg:block relative max-w-6xl mx-auto">
            {/* Vertical Flow Line */}
            <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-border -translate-x-1/2"></div>
            
            <div className="space-y-24">
              {processSteps.map((step, i) => (
                <div key={step.step} className={`flex flex-row items-center gap-16 ${i % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                  
                  {/* Image Block */}
                  <motion.div 
                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                    animate={processInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: i * 0.2 }}
                    className="w-1/2"
                  >
                    <div className="relative rounded-3xl overflow-hidden group aspect-[4/3] shadow-lg border border-border/50">
                      <img src={step.image} alt={step.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                      <div className="absolute top-6 left-6 w-16 h-16 bg-background rounded-2xl flex items-center justify-center shadow-md">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Center Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-background border-4 border-primary rounded-full flex items-center justify-center shadow-xl z-10 hover:scale-110 transition-transform duration-300">
                    <span className="font-display font-bold text-primary">{step.step}</span>
                  </div>

                  {/* Text Block */}
                  <motion.div 
                    initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                    animate={processInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: i * 0.2 + 0.1 }}
                    className={`w-1/2 ${i % 2 === 0 ? 'pl-8' : 'pr-8'}`}
                  >
                    <h3 className="font-display text-3xl font-bold text-foreground mb-4">{step.title}</h3>
                    <p className="text-muted-foreground font-body text-lg leading-relaxed">{step.desc}</p>
                  </motion.div>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background" ref={servicesRef}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-accent font-body font-semibold text-sm tracking-[0.15em] uppercase">Our Capabilities</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Our Services
            </h2>
            <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto text-lg hover:text-accent transition-colors">
              We serve high-volume customers across multiple sectors with tailored solutions to meet their specific produce needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 group"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <svc.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{svc.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{svc.desc}</p>
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
