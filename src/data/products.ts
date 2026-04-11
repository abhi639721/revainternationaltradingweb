import mango from "@/assets/mango.webp";
import pomegranate from "@/assets/pomegranate.webp";
import grapes from "@/assets/grapes.webp";
import orange from "@/assets/orange.webp";
import banana from "@/assets/banana.webp";
import chili from "@/assets/chili.webp";
import vegetables from "@/assets/vegetables.webp";
import drumstick from "@/assets/drumstick.webp";

export interface ProductVariety {
  name: string;
  origin: string;
  availability: string;
  notes: string;
}

export interface Product {
  slug: string;
  name: string;
  category: "fruits" | "vegetables" | "spices";
  desc: string;
  image: string;
  longDesc: string;
  varieties?: ProductVariety[];
}

export const products: Product[] = [
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
    slug: "grapes",
    name: "Grapes",
    category: "fruits",
    desc: "Fresh green and black grapes, carefully selected and packed.",
    image: grapes,
    longDesc:
      "India is among the top grape-exporting nations, and Reva International LLP sources the finest table grapes from Nashik and Sangli regions. Our grapes are grown under controlled conditions and processed in state-of-the-art pack houses to meet international quality standards.",
    varieties: [
      { name: "Thompson Seedless", origin: "Maharashtra", availability: "Jan – Apr", notes: "Light green, crisp, and seedless." },
      { name: "Sharad Seedless", origin: "Maharashtra", availability: "Feb – Apr", notes: "Dark purple, sweet, and firm." },
      { name: "Crimson Seedless", origin: "Maharashtra", availability: "Feb – May", notes: "Red-pink color with a mild, sweet taste." },
    ],
  },
  {
    slug: "pomegranate",
    name: "Pomegranates",
    category: "fruits",
    desc: "Ruby-red seeds packed with antioxidants and natural sweetness.",
    image: pomegranate,
    longDesc:
      "India is one of the largest producers of pomegranates globally. We source the finest Bhagwa variety from Maharashtra, known for its deep red arils, soft seeds, and exceptional sweetness. Our pomegranates undergo rigorous quality checks before export.",
    varieties: [
      { name: "Bhagwa", origin: "Maharashtra", availability: "Sep – Feb", notes: "Deep red arils, soft seeds, very sweet." },
      { name: "Ganesh", origin: "Maharashtra", availability: "Aug – Nov", notes: "Pink-white arils, mildly sweet, few seeds." },
      { name: "Arakta", origin: "Maharashtra", availability: "Sep – Jan", notes: "Dark red, juicy, slightly tart." },
    ],
  },
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
    image: vegetables,
    longDesc:
      "India is one of the world's top onion exporters. Reva International LLP supplies high-quality onions sourced from Nashik, Pune, and other key growing regions. We offer various grades and packaging options customized to buyer requirements.",
    varieties: [
      { name: "Red Onion", origin: "Maharashtra / Karnataka", availability: "Year-round", notes: "Sharp, pungent flavor; ideal for cooking." },
      { name: "White Onion", origin: "Gujarat / Maharashtra", availability: "Oct – Mar", notes: "Milder taste, commonly used raw." },
      { name: "Rose / Pink Onion", origin: "Maharashtra", availability: "Year-round", notes: "Balanced flavor, versatile use." },
    ],
  },
  {
    slug: "potato",
    name: "Potatoes",
    category: "vegetables",
    desc: "Fresh potatoes sourced from the best growing regions.",
    image: vegetables,
    longDesc:
      "We export top-quality potatoes from India's prime potato-growing belts including Uttar Pradesh, Gujarat, and Punjab. Our potatoes are carefully graded, cleaned, and packed for export to ensure freshness and long shelf life.",
    varieties: [
      { name: "Jyoti", origin: "Gujarat / UP", availability: "Nov – Apr", notes: "Versatile, great for frying and boiling." },
      { name: "Kufri Badshah", origin: "Uttar Pradesh", availability: "Dec – Mar", notes: "Large, smooth, ideal for chips." },
      { name: "Lady Rosetta", origin: "Gujarat", availability: "Jan – Mar", notes: "Processing variety, high dry matter." },
    ],
  },
  {
    slug: "green-chili",
    name: "Green Chili & Spices",
    category: "spices",
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
