import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { products } from "@/data/products";

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const bananaProduct = products.find((p) => p.slug === "banana")!;
  const otherProducts = products.filter((p) => p.slug !== "banana");

  return (
    <section id="products" className="section-padding bg-secondary/50" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-accent font-body font-semibold text-sm tracking-[0.15em] uppercase">Our Products</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Quality You Can Trust, Delivered Fresh
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto">
            We implement stringent quality control measures throughout the entire supply chain, 
            from sourcing the finest produce to meticulous handling and secure transportation.
          </p>
        </motion.div>

        {/* Banana Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <Link to="/products/banana">
            <div
              className="bg-card rounded-2xl overflow-hidden group relative"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="grid md:grid-cols-2 items-center">
                <div className="h-64 md:h-80 bg-gradient-to-br from-accent/10 to-secondary/80 flex items-center justify-center p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-accent/5 rounded-full blur-3xl scale-75" />
                  <motion.img
                    src={bananaProduct.image}
                    alt={bananaProduct.name}
                    className="h-52 md:h-64 w-auto object-contain group-hover:scale-110 transition-transform duration-500 relative z-10 drop-shadow-xl"
                    loading="lazy"
                    width={256}
                    height={256}
                  />
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Star size={16} className="text-accent fill-accent" />
                    <span className="text-xs font-bold text-accent font-body uppercase tracking-wider">
                      Our Specialization
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                    Premium Indian Bananas
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed mb-4 line-clamp-3">
                    {bananaProduct.longDesc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {bananaProduct.varieties?.slice(0, 4).map((v) => (
                      <span key={v.name} className="text-xs bg-accent/10 text-accent font-semibold px-3 py-1 rounded-full">
                        {v.name}
                      </span>
                    ))}
                  </div>
                  <span className="text-primary font-body font-semibold inline-flex items-center gap-1 group-hover:gap-3 transition-all text-sm">
                    Explore Bananas <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Other Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {otherProducts.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-card rounded-2xl overflow-hidden group cursor-pointer"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <Link to={`/products/${product.slug}`}>
                <div className="h-48 bg-secondary/80 flex items-center justify-center p-6 relative overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="h-36 w-36 object-contain group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    width={144}
                    height={144}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-3">{product.desc}</p>
                  <span className="text-primary font-body text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
