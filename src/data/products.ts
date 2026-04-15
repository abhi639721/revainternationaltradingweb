import mango from "@/assets/mango.webp";
import orange from "@/assets/orange.webp";
import banana from "@/assets/banana.webp";
import chili from "@/assets/green-chilli.webp";
import drumstick from "@/assets/drumstick.webp";
import onion from "@/assets/onion.webp";
import lemon from "@/assets/lemon_green.webp";
import dragonFruit from "@/assets/dragon-fruit.webp";
import apple from "@/assets/apple.webp";

export interface ProductVariety {
  name: string;
  origin: string;
  availability: string;
  notes: string;
}

export interface Product {
  slug: string;
  name: string;
  category: "fruits" | "vegetables";
  desc: string;
  image: string;
  longDesc: string;
  varieties?: ProductVariety[];
}

export const products: Product[] = [
  // ── FRUITS ──────────────────────────────────────────────────────────────
  {
    slug: "banana",
    name: "Bananas",
    category: "fruits",
    desc: "Our flagship export — premium Indian bananas shipped worldwide.",
    image: banana,
    longDesc:
      "Bananas are the flagship product of Reva International LLP. We are among the leading banana exporters from India, specializing in Cavendish, Robusta, and exotic Red Banana varieties. Sourced from the tropical regions of Maharashtra, Karnataka, and Tamil Nadu, our bananas undergo meticulous quality checks, proper ripening control, and export-grade packaging. With year-round availability and dedicated cold-chain logistics, we ensure consistent supply of premium bananas to global markets across the Middle East, Europe, and Asia.",
    varieties: [
      { name: "Cavendish", origin: "Tamil Nadu / Karnataka", availability: "Year-round", notes: "Most popular export variety, sweet and uniform." },
      { name: "Robusta", origin: "Maharashtra", availability: "Year-round", notes: "Firm texture, ideal for long-distance shipping." },
      { name: "Red Banana", origin: "Kerala / Tamil Nadu", availability: "Year-round", notes: "Creamy flesh with a raspberry-banana flavor." },
      { name: "Grand Naine", origin: "Maharashtra / Karnataka", availability: "Year-round", notes: "Large, sweet, excellent shelf life." },
      { name: "Yelakki (Elaichi)", origin: "Karnataka", availability: "Year-round", notes: "Small, aromatic, honey-sweet flavor." },
    ],
  },
  {
    slug: "mango",
    name: "Mango",
    category: "fruits",
    desc: "Mangoes, guavas, lychees, and seasonal favorites.",
    image: mango,
    longDesc:
      "We are one of the prominent Mango Exporters in India. Being a major Mango Exporter, we believe in providing premium quality to our clients. Mango is juicy and low in cholesterol. Unique flavor, sweet-scented taste, heady aroma, and natural fiber are key factors of our Fresh Mango Fruit. Mangoes are plucked and stored in warehouses to ensure continuous supply of this seasonal fruit. We offer mangoes in various packing options and deliver within the promised time frame.",
    varieties: [
      { name: "Alphonso (Hapus)", origin: "Maharashtra", availability: "March – June", notes: "Creamy, non-fibrous, and intensely aromatic." },
      { name: "Kesar", origin: "Gujarat", availability: "May – July", notes: "Saffron-colored flesh with a rich, sweet flavor." },
      { name: "Banganapalli (Safeda)", origin: "Andhra Pradesh", availability: "April – June", notes: "Large, firm, and fiberless with pleasant sweetness." },
      { name: "Dasheri", origin: "Uttar Pradesh", availability: "June – July", notes: "Extremely sweet and thin-skinned." },
      { name: "Langra", origin: "Uttar Pradesh / Bihar", availability: "June – August", notes: "Refreshing lemon-yellow pulp with tangy-sweetness." },
      { name: "Totapuri", origin: "South India", availability: "May – July", notes: "Distinctive beak shape; excellent for pulp and salads." },
    ],
  },
  {
    slug: "orange",
    name: "Oranges",
    category: "fruits",
    desc: "Premium oranges, lemons, and limes bursting with flavor.",
    image: orange,
    longDesc:
      "We export premium-quality Indian oranges known for their vibrant color, juicy pulp, and rich citrus flavor. Our oranges are sourced from the best orchards in Nagpur, known as the 'Orange City' of India. With stringent quality controls and proper cold-chain logistics, we ensure the freshest citrus fruits reach international markets.",
    varieties: [
      { name: "Nagpur Orange", origin: "Maharashtra", availability: "Nov – Feb", notes: "Bright orange, juicy, and mildly sweet." },
      { name: "Kinnow", origin: "Punjab / Rajasthan", availability: "Dec – Mar", notes: "High juice content with a tangy-sweet profile." },
      { name: "Coorg Orange", origin: "Karnataka", availability: "Oct – Jan", notes: "Loose-skinned mandarin with rich flavor." },
    ],
  },

  {
    slug: "lemon",
    name: "Lemon & Lime",
    category: "fruits",
    desc: "Zesty Indian lemons and limes for global culinary use.",
    image: lemon,
    longDesc:
      "India is one of the leading producers of lemons and limes globally. Reva International LLP exports premium-quality lemons sourced from Andhra Pradesh, Maharashtra, and Rajasthan. Our lemons are rich in Vitamin C, highly aromatic, and packed to ensure maximum freshness on arrival.",
    varieties: [
      { name: "Kagzi Lime", origin: "Andhra Pradesh / Maharashtra", availability: "Year-round", notes: "Thin-skinned, highly acidic, most popular for export." },
      { name: "Eureka Lemon", origin: "Maharashtra", availability: "Nov – Mar", notes: "Bright yellow, seedless, juicy." },
      { name: "Sweet Lime (Mosambi)", origin: "Gujarat / Maharashtra", availability: "Oct – Feb", notes: "Mild, sweet citrus juice." },
    ],
  },
  {
    slug: "dragon-fruit",
    name: "Dragon Fruit",
    category: "fruits",
    desc: "Exotic dragon fruit with vibrant color and mild sweetness.",
    image: dragonFruit,
    longDesc:
      "Dragon fruit is an exotic and increasingly popular export commodity from India. Reva International LLP sources premium dragon fruit from Gujarat, Andhra Pradesh, and Maharashtra. Known for its stunning appearance, mild sweetness, and nutritional benefits, dragon fruit is in high demand in Asian and European markets.",
    varieties: [
      { name: "White Flesh (H. undatus)", origin: "Gujarat / Maharashtra", availability: "Jul – Nov", notes: "Pink skin, white flesh, mild flavor." },
      { name: "Red Flesh (H. polyrhizus)", origin: "Andhra Pradesh", availability: "Aug – Nov", notes: "Deep red flesh, sweeter and more antioxidant-rich." },
      { name: "Yellow Dragon Fruit", origin: "Gujarat", availability: "Sep – Dec", notes: "Yellow skin, white flesh, intensely sweet." },
    ],
  },

  {
    slug: "apple",
    name: "Apple",
    category: "fruits",
    desc: "Premium Indian apples — crisp, sweet, and export-grade fresh.",
    image: apple,
    longDesc:
      "India produces some of the finest apples in the world, primarily from the high-altitude orchards of Himachal Pradesh, Jammu & Kashmir, and Uttarakhand. Reva International LLP exports premium-quality fresh apples known for their vibrant color, crisp texture, and natural sweetness. Our apples are carefully harvested, graded by size and color, and packed in export-grade boxes to ensure freshness during international transit.",
    varieties: [
      { name: "Shimla (Red Delicious)", origin: "Himachal Pradesh", availability: "Aug – Nov", notes: "Bright red, sweet, most popular export variety." },
      { name: "Royal Delicious", origin: "Jammu & Kashmir", availability: "Sep – Nov", notes: "Large, rich flavor, excellent shelf life." },
      { name: "Fuji", origin: "Himachal Pradesh / Uttarakhand", availability: "Oct – Dec", notes: "Crisp, very sweet, ideal for premium export markets." },
      { name: "Granny Smith (Green)", origin: "Himachal Pradesh", availability: "Sep – Nov", notes: "Tart, firm, great for fresh consumption and processing." },
    ],
  },

  // ── VEGETABLES ──────────────────────────────────────────────────────────
  {
    slug: "drumstick",
    name: "Fresh Drumsticks",
    category: "vegetables",
    desc: "Premium Indian moringa drumsticks, rich in nutrients and freshness.",
    image: drumstick,
    longDesc:
      "Fresh drumsticks (Moringa oleifera) are one of the most sought-after vegetable exports from India. Reva International LLP sources premium-quality drumsticks from the fertile regions of Tamil Nadu, Andhra Pradesh, and Karnataka. Known for their rich nutritional profile, drumsticks are packed with vitamins, minerals, and antioxidants. Our drumsticks are carefully harvested, cleaned, and packed using export-grade methods to ensure freshness and long shelf life during international transit.",
    varieties: [
      { name: "PKM-1", origin: "Tamil Nadu", availability: "Year-round", notes: "Most popular variety, long pods, high yield." },
      { name: "PKM-2", origin: "Tamil Nadu / Andhra Pradesh", availability: "Year-round", notes: "Improved variety, thicker pods, excellent taste." },
      { name: "Jaffna", origin: "South India", availability: "Year-round", notes: "Premium quality, tender flesh, highly aromatic." },
    ],
  },
  {
    slug: "onion",
    name: "Onions",
    category: "vegetables",
    desc: "Premium Indian onions in red, white, and pink varieties.",
    image: onion,
    longDesc:
      "India is one of the world's top onion exporters. Reva International LLP supplies high-quality onions sourced from Nashik, Pune, and other key growing regions. We offer various grades and packaging options customized to buyer requirements.",
    varieties: [
      { name: "Red Onion", origin: "Maharashtra / Karnataka", availability: "Year-round", notes: "Sharp, pungent flavor; ideal for cooking." },
      { name: "White Onion", origin: "Gujarat / Maharashtra", availability: "Oct – Mar", notes: "Milder taste, commonly used raw." },
      { name: "Rose / Pink Onion", origin: "Maharashtra", availability: "Year-round", notes: "Balanced flavor, versatile use." },
    ],
  },

  // ── SPICES & OTHERS ─────────────────────────────────────────────────────
  {
    slug: "green-chili",
    name: "Green Chili & Spices",
    category: "vegetables",
    desc: "Premium Indian spices and chilies for global markets.",
    image: chili,
    longDesc:
      "India is known as the spice capital of the world. Reva International LLP exports premium green chilies, red chilies, turmeric, and other spice products. Our products are sourced from trusted farms and processed under strict hygiene standards.",
    varieties: [
      { name: "Byadgi Chili", origin: "Karnataka", availability: "Oct – Feb", notes: "Deep red color, mild heat, great for sauces." },
      { name: "Guntur Chili", origin: "Andhra Pradesh", availability: "Nov – Mar", notes: "High pungency, widely exported." },
      { name: "Green Chili", origin: "Maharashtra / Rajasthan", availability: "Year-round", notes: "Fresh, spicy, used in cuisines worldwide." },
    ],
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getRelatedProducts = (slug: string, limit = 4) =>
  products.filter((p) => p.slug !== slug).slice(0, limit);

export const getProductsByCategory = (category: string) =>
  products.filter((p) => p.category === category);
