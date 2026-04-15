import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subjectRaw = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent(subjectRaw || `Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:info@revaitrading.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0" style={{ background: "var(--hero-gradient)", opacity: 0.05 }} />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-accent font-body font-semibold text-sm tracking-[0.15em] uppercase">Get In Touch</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Ready to Partner With Us?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            <div className="space-y-6">
              {[
                { icon: Phone, label: "HQ (India)", value: "+91 98123 45757", href: "tel:+919812345757" },
                { icon: Phone, label: "Dubai Office", value: "+971 55 540 0347", href: "tel:+971555400347" },
                { icon: Mail, label: "Email", value: "info@revaitrading.com", href: "mailto:info@revaitrading.com" },
              ].map((item) => (
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

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 border border-border"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium text-foreground font-body mb-1.5 block">Name</label>
                <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:ring-2 focus:ring-primary/30 outline-none transition" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground font-body mb-1.5 block">Email</label>
                <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:ring-2 focus:ring-primary/30 outline-none transition" />
              </div>
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium text-foreground font-body mb-1.5 block">Subject</label>
              <input type="text" name="subject" required className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:ring-2 focus:ring-primary/30 outline-none transition" />
            </div>
            <div className="mb-6">
              <label className="text-sm font-medium text-foreground font-body mb-1.5 block">Message</label>
              <textarea name="message" rows={4} required className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:ring-2 focus:ring-primary/30 outline-none transition resize-none" />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold font-body flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              {submitted ? "Message Drafted! ✓" : <><Send size={18} /> Send Message</>}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
