import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import GlobalReach from "@/components/GlobalReach";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Fruity Motion Studio | Home"
        description="India's leading exporter of premium bananas, mangoes, grapes, and fresh vegetables. Sourcing the finest produce for global markets."
      />
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WhyUs />
      <GlobalReach />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
