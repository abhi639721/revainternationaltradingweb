import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { products } from "@/data/products";

const categories = [
  { key: "all", label: "All Products" },
  { key: "fruits", label: "Fresh Fruits" },
  { key: "vegetables", label: "Fresh Vegetables" },
  { key: "spices", label: "Spices & Chili" },
];

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const filtered = products
    .filter((p) => activeCategory === "all" || p.category === activeCategory)
    .filter((p) => searchQuery === "" || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.desc.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="min-h-screen">
      <SEO 
        title="Our Products | Fresh Fruits & Vegetables for Export"
        description="Explore our range of premium Indian export products — Cavendish bananas, Alphonso mangoes, pomegranates, drumsticks, and more."
      />
      <Navbar />
      <PageHero
        title="Our Products"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Products" }]}
      />

      <section className="section-padding bg-background" ref={ref}>
        <div className="container mx-auto">
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="max-w-md mx-auto mb-6"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full border border-input bg-background text-foreground font-body text-sm focus:ring-2 focus:ring-primary/30 outline-none transition"
              />
            </div>
          </motion.div>

          {/* Category Tabs — scrollable */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex overflow-x-auto scrollbar-hide justify-start md:justify-center gap-3 mb-12 pb-2 -mx-4 px-4"
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-6 py-2.5 rounded-full font-body text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat.key
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
            {filtered.map((product, i) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-card rounded-xl sm:rounded-2xl overflow-hidden group"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <Link to={`/products/${product.slug}`}>
                  <div className="h-28 sm:h-40 md:h-48 bg-secondary/80 flex items-center justify-center p-2 sm:p-4 md:p-6 relative overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36 object-contain group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent" />
                  </div>
                  <div className="p-2.5 sm:p-4 md:p-5">
                    <span className="text-[10px] sm:text-xs font-semibold text-accent font-body uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="font-display text-sm sm:text-base md:text-lg font-bold text-foreground mt-0.5 sm:mt-1 mb-1 sm:mb-2 line-clamp-1">{product.name}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground font-body leading-relaxed mb-1.5 sm:mb-3 line-clamp-2">{product.desc}</p>
                    <span className="text-primary font-body text-xs sm:text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Details <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
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

export default ProductsPage;
