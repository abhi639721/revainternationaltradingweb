import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import GlobalReach from "@/components/GlobalReach";
import Certifications from "@/components/Certifications";
import DubaiOffice from "@/components/DubaiOffice";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Reva International Trading LLP",
  "alternateName": ["Reva", "Reva International", "Reva Trading"],
  "url": "https://revaitrading.com",
  "logo": "https://revaitrading.com/favicon.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 9033203330",
    "contactType": "customer service",
    "areaServed": "Worldwide",
    "availableLanguage": ["English", "Hindi"]
  },
  "sameAs": [
    "https://www.facebook.com/revaitrading",
    "https://www.instagram.com/revaitrading",
    "https://www.linkedin.com/company/reva-international-trading"
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Reva International Trading LLP",
  "image": "https://revaitrading.com/favicon.png",
  "@id": "https://revaitrading.com",
  "url": "https://revaitrading.com",
  "telephone": "+91 9033203330",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Main Market",
    "addressLocality": "Surat",
    "addressRegion": "Gujarat",
    "postalCode": "395003",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 21.1702,
    "longitude": 72.8311
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  }
};

import InstagramStrip from "@/components/InstagramStrip";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Reva International Trading LLP | Home"
        description="India's leading exporter of premium bananas, mangoes, grapes, and fresh vegetables. Sourcing the finest produce for global markets."
        structuredData={[businessSchema, localBusinessSchema]}
      />
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WhyUs />
      <GlobalReach />
      <DubaiOffice />
      <Certifications />
      <Contact />
      <InstagramStrip />
      <Footer />
    </div>
  );
};

export default Index;
