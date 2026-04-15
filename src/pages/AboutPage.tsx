import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, TrendingUp, Users, Shield, Leaf, Droplets, PackageCheck, Truck, Package, Globe2, FileCheck, Target, Quote } from "lucide-react";
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

const teamMembers = [
  {
    name: "Jaydev Patel",
    role: "Founder & Managing Director",
    initials: "JP",
    gradient: "from-primary/80 to-accent/80",
  },
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
  const teamRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-80px" });
  const processInView = useInView(processRef, { once: true, margin: "-80px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-80px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-80px" });

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

      {/* Our Team Section */}
      <section className="section-padding bg-background relative overflow-hidden" ref={teamRef}>
        {/* Decorative background blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

        <div className="container mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4 border border-primary/20">
              Our Team
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
              Meet the Leadership
            </h2>
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary to-accent mx-auto mb-5" />
            <p className="text-muted-foreground font-body max-w-xl mx-auto text-lg leading-relaxed">
              The passionate individuals behind every shipment, every relationship, and every milestone at Reva International.
            </p>
          </motion.div>

          {/* Team Cards */}
          <div className="flex flex-wrap justify-center gap-8 mb-20">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative group w-72"
              >
                {/* Glow border on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

                <div className="bg-card rounded-3xl border border-border group-hover:border-primary/30 transition-all duration-400 overflow-hidden"
                  style={{ boxShadow: "var(--card-shadow)" }}>
                  {/* Top gradient strip */}
                  <div className={`h-2 w-full bg-gradient-to-r ${member.gradient}`} />

                  <div className="p-8 text-center">
                    {/* Avatar Ring */}
                    <div className="relative inline-block mb-6">
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.gradient} blur-md opacity-40 scale-110`} />
                      <div className={`relative w-28 h-28 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-xl ring-4 ring-background`}>
                        <span className="font-display text-4xl font-bold text-white">{member.initials}</span>
                      </div>
                    </div>

                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{member.name}</h3>

                    {/* Role badge */}
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-body text-xs font-semibold tracking-wide border border-primary/20">
                      {member.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Founder's Message */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative bg-card rounded-3xl border border-border overflow-hidden"
              style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.12)" }}>

              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary to-accent" />

              {/* Large decorative quote */}
              <div className="absolute top-6 right-8 font-display text-[10rem] leading-none text-primary/5 font-bold select-none pointer-events-none">"</div>

              <div className="relative z-10 p-10 md:p-14">
                {/* Label */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent">A Message from Our Founder</p>
                  </div>
                </div>

                {/* Quote text */}
                <blockquote className="space-y-5 text-muted-foreground font-body leading-relaxed text-base md:text-lg">
                  <p>
                    When I founded <strong className="text-foreground">Reva International Trading LLP</strong>, my goal was straightforward — to bring India's finest produce to tables across the world, without compromise on quality or integrity.
                  </p>
                  <p>
                    Agriculture is the soul of our nation, and we saw an opportunity to honour that by creating a bridge between hardworking Indian farmers and global buyers who value freshness, consistency, and trust. Every crate we ship carries the effort of those farmers and our promise to our clients.
                  </p>
                  <p>
                    Over the years, what has kept us going is not just business growth, but the satisfaction of a buyer who receives exactly what they expected — or better. That trust is what drives every decision we make, every partnership we forge, and every standard we set.
                  </p>
                  <p className="text-foreground font-semibold text-lg">
                    We are just getting started. Thank you for being part of this journey.
                  </p>
                </blockquote>

                {/* Divider */}
                <div className="mt-10 mb-8 h-px bg-gradient-to-r from-border via-primary/20 to-border" />

                {/* Signature */}
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-md" />
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg ring-2 ring-primary/30">
                      <span className="font-display font-bold text-white text-lg">JP</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground text-lg">Jaydev Patel</p>
                    <p className="text-sm text-muted-foreground font-body mt-0.5">Founder & Managing Director</p>
                    <p className="text-xs text-primary font-body font-semibold mt-0.5 tracking-wide">Reva International Trading LLP</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
