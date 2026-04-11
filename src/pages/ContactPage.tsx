import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, Clock, Globe } from "lucide-react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 90332 03330", href: "tel:+919033203330" },
  { icon: Mail, label: "Email", value: "info@revaitrading.com", href: "mailto:info@revaitrading.com" },
  { icon: MapPin, label: "Address", value: "India" },
  { icon: Clock, label: "Business Hours", value: "Mon – Sat: 10:00 AM – 7:00 PM" },
  { icon: Globe, label: "Export Markets", value: "25+ Countries Worldwide" },
];

const countries = [
  "United Kingdom", "Canada", "Germany", "Spain", "UAE (Dubai)", "Qatar",
  "Singapore", "Malaysia", "Japan", "South Korea", "New Zealand", "South Africa",
  "Belgium", "Hong Kong", "Norway", "Sweden", "Australia", "USA",
];

const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Contact Us | Export Enquiries & Support"
        description="Get in touch with Fruity Motion Studio for export enquiries, partnership opportunities, or to request a quote for premium Indian fresh produce."
      />
      <Navbar />
      <PageHero
        title="Contact Us"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact Us" }]}
      />

      <section className="section-padding bg-background" ref={ref}>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="text-accent font-body font-semibold text-sm tracking-[0.15em] uppercase">Get In Touch</span>
              <h2 className="font-display text-3xl font-bold text-foreground mt-2 mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                Whether you're looking to source premium Indian fresh produce or explore export opportunities, 
                we'd love to hear from you. Reach out and let's build a lasting partnership.
              </p>
              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-body">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-foreground font-semibold font-body hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-foreground font-semibold font-body">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quotation Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="lg:col-span-3 bg-card rounded-2xl p-8 border border-border"
              style={{ boxShadow: "var(--card-shadow)" }}
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">Request a Quotation</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium text-foreground font-body mb-1.5 block">Name *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:ring-2 focus:ring-primary/30 outline-none transition" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground font-body mb-1.5 block">Phone Number *</label>
                  <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:ring-2 focus:ring-primary/30 outline-none transition" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium text-foreground font-body mb-1.5 block">Email *</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:ring-2 focus:ring-primary/30 outline-none transition" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground font-body mb-1.5 block">Country *</label>
                  <select required className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:ring-2 focus:ring-primary/30 outline-none transition">
                    <option value="">Select Country</option>
                    {countries.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-medium text-foreground font-body mb-1.5 block">Products of Interest *</label>
                <input type="text" required placeholder="e.g. Mangoes, Onions, Grapes" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:ring-2 focus:ring-primary/30 outline-none transition" />
              </div>
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground font-body mb-1.5 block">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:ring-2 focus:ring-primary/30 outline-none transition resize-none" placeholder="Tell us about your requirements..." />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold font-body flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                {submitted ? "Request Sent! ✓" : <><Send size={18} /> Submit Enquiry</>}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
