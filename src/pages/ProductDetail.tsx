import { useParams, Link, Navigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Send } from "lucide-react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { getProductBySlug, getRelatedProducts } from "@/data/products";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const tableRef = useRef(null);
  const relatedRef = useRef(null);
  const tableInView = useInView(tableRef, { once: true, margin: "-60px" });
  const relatedInView = useInView(relatedRef, { once: true, margin: "-60px" });

  if (!product) return <Navigate to="/products" replace />;

  const related = getRelatedProducts(product.slug);

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": product.longDesc,
    "brand": {
      "@type": "Brand",
      "name": "Fruity Motion Studio"
    },
    "category": product.category
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title={`${product.name} Exporter`}
        description={`Exporting premium quality ${product.name} from India. ${product.desc}`}
        ogImage={product.image}
        structuredData={productSchema}
      />
      <Navbar />
      <PageHero
        title={product.name}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Products", to: "/products" },
          { label: product.name },
        ]}
      />

      {/* Product Main */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="bg-secondary/60 rounded-2xl p-10 flex items-center justify-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-72 h-72 object-contain floating-fruit"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-accent font-body font-semibold text-sm tracking-[0.15em] uppercase">
                {product.category}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                {product.name}
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                {product.longDesc}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold font-body hover:opacity-90 transition-opacity"
              >
                <Send size={18} /> Get a Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Varieties Table */}
      {product.varieties && product.varieties.length > 0 && (
        <section className="section-padding bg-secondary/50" ref={tableRef}>
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={tableInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <span className="text-accent font-body font-semibold text-sm tracking-[0.15em] uppercase">Varieties</span>
              <h2 className="font-display text-3xl font-bold text-foreground mt-2">
                Available {product.name} Varieties
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={tableInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl overflow-hidden border border-border"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary/5">
                      <th className="text-left px-6 py-4 font-display font-bold text-foreground text-sm">Variety</th>
                      <th className="text-left px-6 py-4 font-display font-bold text-foreground text-sm">Regional Origin</th>
                      <th className="text-left px-6 py-4 font-display font-bold text-foreground text-sm">Peak Availability</th>
                      <th className="text-left px-6 py-4 font-display font-bold text-foreground text-sm">Tasting Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.varieties.map((v, i) => (
                      <motion.tr
                        key={v.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={tableInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                        className="border-t border-border hover:bg-secondary/30 transition-colors"
                      >
                        <td className="px-6 py-4 font-body font-semibold text-foreground text-sm">{v.name}</td>
                        <td className="px-6 py-4 font-body text-muted-foreground text-sm">{v.origin}</td>
                        <td className="px-6 py-4 font-body text-muted-foreground text-sm">{v.availability}</td>
                        <td className="px-6 py-4 font-body text-muted-foreground text-sm">{v.notes}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Products */}
      <section className="section-padding bg-background" ref={relatedRef}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={relatedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="text-accent font-body font-semibold text-sm tracking-[0.15em] uppercase">Explore More</span>
            <h2 className="font-display text-3xl font-bold text-foreground mt-2">
              Related Products
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((rp, i) => (
              <motion.div
                key={rp.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={relatedInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-card rounded-2xl overflow-hidden group"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <Link to={`/products/${rp.slug}`}>
                  <div className="h-40 bg-secondary/80 flex items-center justify-center p-4">
                    <img src={rp.image} alt={rp.name} className="h-28 w-28 object-contain group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-base font-bold text-foreground mb-1">{rp.name}</h3>
                    <span className="text-primary font-body text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      View <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
