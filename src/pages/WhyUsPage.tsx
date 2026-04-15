import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Leaf, Globe, ShieldCheck, Truck, BadgeCheck, 
  Handshake, CheckCircle2, Target, Heart, Scale, Sparkles 
} from "lucide-react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Certifications from "@/components/Certifications";
import mango from "@/assets/mango.webp";
import grapes from "@/assets/grapes.webp";
import pomegranate from "@/assets/pomegranate.webp";

const features = [
  {
    icon: Leaf,
    title: "Eco-Friendly Sourcing",
    desc: "We partner with farmers who prioritize sustainable and organic-friendly cultivation methods. Every piece of fruit and vegetable is a testament to the purity of nature.",
    color: "from-emerald-500/20 to-green-500/10",
    iconColor: "text-emerald-600",
  },
  {
    icon: Globe,
    title: "The Spirit of Export",
    desc: "A massive distribution network spanning 25+ countries across Europe, Asia, and the Middle East. We don't just export produce; we export the finest flavors of India.",
    color: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "Unmatched Safety",
    desc: "FSSAI, APEDA, ISO certified. Our quality control isn't just a process; it's our promise of safety and health for every consumer globally.",
    color: "from-amber-500/20 to-yellow-500/10",
    iconColor: "text-amber-600",
  },
  {
    icon: Truck,
    title: "Precision Logistics",
    desc: "End-to-end cold chain management that ensures a temperature-controlled environment from farm to shipping container, maximizing freshness upon arrival.",
    color: "from-purple-500/20 to-violet-500/10",
    iconColor: "text-purple-600",
  },
  {
    icon: BadgeCheck,
    title: "Honest Pricing",
    desc: "By eliminating unnecessary intermediaries and sourcing directly from farmers, we offer the most competitive market rates without compromising on quality.",
    color: "from-rose-500/20 to-pink-500/10",
    iconColor: "text-rose-600",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    desc: "We believe in building relationships, not just closing sales. Our dedicated support team handles documentation and logistics with absolute transparency.",
    color: "from-teal-500/20 to-emerald-500/10",
    iconColor: "text-teal-600",
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    desc: "Striving for the highest quality in every single shipment, every single day.",
  },
  {
    icon: Heart,
    title: "Compassion",
    desc: "Supporting the hard-working farming communities that are the backbone of our business.",
  },
  {
    icon: Scale,
    title: "Integrity",
    desc: "Transparent business practices and honest communication with our global partners.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    desc: "Constantly upgrading our cold storage and logistics technology for better results.",
  },
];

const WhyUsPage = () => {
  const introRef = useRef(null);
  const featureRef = useRef(null);
  const valuesRef = useRef(null);
  
  const introInView = useInView(introRef, { once: true, margin: "-80px" });
  const featureInView = useInView(featureRef, { once: true, margin: "-80px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen">
      <SEO 
        title="Why Us | Our Commitment to Quality"
        description="Discover why Reva International Trading LLP is the preferred global partner for premium agro exports. Sustainability, Quality, and Trust."
      />
      <Navbar />
      <PageHero
        title="Why Choose Us"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Why Us" }]}
      />

      {/* Intro Section */}
      <section className="section-padding bg-background relative overflow-hidden" ref={introRef}>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent font-body font-semibold text-sm tracking-[0.25em] uppercase">The R E V Λ Advantage</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2 mb-6 leading-tight">
                Setting New Standards in <span className="text-primary italic">Global Agro Export</span>
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-6 text-lg">
                At <strong className="text-foreground tracking-wide font-display">R E V Λ INTERNATIONAL TRADING</strong>, we don't just export products; we curate experiences of freshness and health. Our journey is rooted in the fertile lands of India and our destination is the global dinner table.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Direct partnerships with 500+ certified farmers.",
                  "24/7 Temperature monitoring during transit.",
                  "Zero Compromise on international food safety.",
                  "Eco-friendly packaging that maintains produce vigor."
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={introInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3 text-foreground font-body font-medium"
                  >
                    <CheckCircle2 className="text-primary" size={20} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={introInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden bg-secondary/50 p-12 border border-primary/10">
                <img src={pomegranate} alt="Healthy Pomegranate" className="w-full max-w-sm mx-auto floating-fruit" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-xl border border-border max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <ShieldCheck className="text-primary w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Certified</span>
                </div>
                <p className="text-sm font-display font-bold text-foreground">100% Quality Assurance Guaranteed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Features Grid */}
      <section className="section-padding bg-secondary/30" ref={featureRef}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featureInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">What Sets Us Apart</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto mt-6 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                animate={featureInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{ y: -8 }}
                className="bg-card rounded-3xl p-8 border border-border hover:border-primary/30 transition-all duration-300 relative group overflow-hidden"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10 text-center sm:text-left">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto sm:mx-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <f.icon className={`w-8 h-8 ${f.iconColor}`} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">{f.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background relative overflow-hidden" ref={valuesRef}>
        <div className="absolute -top-10 -right-10 opacity-10">
          <img src={grapes} alt="" className="w-64 rotate-12" />
        </div>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-accent font-body font-semibold text-sm tracking-[0.15em] uppercase">Our DNA</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2 mb-6">Values That Drive Us</h2>
            <p className="text-muted-foreground font-body text-lg">
              Behind every shipment of fresh produce lies a core set of values that define our identity and our commitment to our partners.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={valuesInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-secondary/40 rounded-2xl p-6 text-center border border-transparent hover:border-primary/20 hover:bg-white transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="text-primary w-6 h-6" />
                </div>
                <h4 className="font-display text-xl font-bold text-foreground mb-2">{v.title}</h4>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reuse Certifications for Trust */}
      <Certifications />

      {/* CTA Section */}
      <section className="section-padding px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden"
          >
            <img src={mango} alt="" className="absolute -top-10 -left-10 w-40 opacity-20 -rotate-12 floating-fruit" />
            <div className="relative z-10 text-primary-foreground max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Experience the R E V Λ Quality Difference</h2>
              <p className="font-body text-lg opacity-90 mb-10">
                Join our network of satisfied global partners. Let's grow together with freshness and trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white text-primary px-10 py-4 rounded-xl font-display font-bold text-lg hover:bg-accent hover:text-white transition-all duration-300"
                >
                  Request A Quote
                </a>
                <a 
                  href="/products" 
                  className="bg-primary-foreground/10 backdrop-blur-sm border border-white/20 text-white px-10 py-4 rounded-xl font-display font-bold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  Our Range
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyUsPage;
