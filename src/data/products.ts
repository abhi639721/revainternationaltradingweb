import mango from "@/assets/mango.webp";
import pomegranate from "@/assets/pomegranate.webp";
import grapes from "@/assets/grapes.webp";
import orange from "@/assets/orange.webp";
import banana from "@/assets/banana.webp";
import chili from "@/assets/chili.webp";
import vegetables from "@/assets/vegetables.webp";
import drumstick from "@/assets/drumstick.webp";
import onion from "@/assets/onion.webp";
import potato from "@/assets/potato.webp";
// New fruits
import watermelon from "@/assets/watermelon.webp";
import papaya from "@/assets/papaya.webp";
import guava from "@/assets/guava.webp";
import pineapple from "@/assets/pineapple.webp";
import lemon from "@/assets/lemon.webp";
import coconut from "@/assets/coconut.webp";
import chikoo from "@/assets/chikoo.webp";
import dragonFruit from "@/assets/dragon-fruit.webp";
import custardApple from "@/assets/custard-apple.webp";
import fig from "@/assets/fig.webp";
// New vegetables
import tomato from "@/assets/tomato.webp";
import okra from "@/assets/okra.webp";
import bitterGourd from "@/assets/bitter-gourd.webp";
import eggplant from "@/assets/eggplant.webp";
import cauliflower from "@/assets/cauliflower.webp";
import cabbage from "@/assets/cabbage.webp";
import ginger from "@/assets/ginger.webp";
import garlic from "@/assets/garlic.webp";
import bottleGourd from "@/assets/bottle-gourd.webp";
import spinach from "@/assets/spinach.webp";

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
    slug: "watermelon",
    name: "Watermelon",
    category: "fruits",
    desc: "Juicy, refreshing watermelons with vibrant red flesh.",
    image: watermelon,
    longDesc:
      "Reva International LLP exports premium Indian watermelons known for their high sugar content, crisp red flesh, and refreshing taste. Sourced from the fertile regions of Andhra Pradesh, Karnataka, and Rajasthan, our watermelons are carefully graded and packed in export-grade conditions to maintain freshness during transit.",
    varieties: [
      { name: "Sugar Baby", origin: "Andhra Pradesh / Karnataka", availability: "Mar – Jun", notes: "Small, dark green rind, sweet red flesh." },
      { name: "Crimson Sweet", origin: "Rajasthan / Gujarat", availability: "Apr – Jul", notes: "Large, striped, high sugar content." },
      { name: "Seedless Hybrid", origin: "Maharashtra", availability: "Mar – Jun", notes: "Seedless variety with tender, juicy flesh." },
    ],
  },
  {
    slug: "papaya",
    name: "Papaya",
    category: "fruits",
    desc: "Sweet, golden papayas rich in vitamins and enzymes.",
    image: papaya,
    longDesc:
      "Indian papayas are globally recognized for their vibrant orange flesh, natural sweetness, and rich nutritional profile. Reva International LLP sources premium papayas from Gujarat, Andhra Pradesh, and Maharashtra. Our papayas are harvested at optimal ripeness and packed with care to maintain quality across international markets.",
    varieties: [
      { name: "Red Lady", origin: "Maharashtra / Gujarat", availability: "Year-round", notes: "Sweet, firm flesh, excellent export quality." },
      { name: "Taiwan 786", origin: "Andhra Pradesh", availability: "Year-round", notes: "High yield, long shelf life, widely exported." },
      { name: "Coorg Honey Dew", origin: "Karnataka", availability: "Year-round", notes: "Aromatic, sweet, ideal for fresh consumption." },
    ],
  },
  {
    slug: "guava",
    name: "Guava",
    category: "fruits",
    desc: "Fresh, fragrant guavas — high in Vitamin C and fiber.",
    image: guava,
    longDesc:
      "India is the world's largest producer of guava, and Reva International LLP exports premium varieties sourced from Allahabad, Nashik, and Bengaluru. Known for their refreshing taste and high Vitamin C content, our guavas are packed fresh and meet international phytosanitary standards for export.",
    varieties: [
      { name: "Allahabad Safeda", origin: "Uttar Pradesh", availability: "Sep – Dec", notes: "White flesh, sweet, most popular variety." },
      { name: "Lalit", origin: "Maharashtra", availability: "Year-round", notes: "Pinkish flesh, high sugar content." },
      { name: "Lucknow 49", origin: "Uttar Pradesh", availability: "Sep – Dec", notes: "Soft, white flesh, highly aromatic." },
    ],
  },
  {
    slug: "pineapple",
    name: "Pineapple",
    category: "fruits",
    desc: "Tropical golden pineapples, sweet and tangy.",
    image: pineapple,
    longDesc:
      "Reva International LLP exports fresh, premium-quality Indian pineapples sourced from the tropical belts of Kerala, Assam, and West Bengal. Our pineapples are known for their high juice content, balanced sweetness, and rich tropical flavor, making them a favorite in international markets.",
    varieties: [
      { name: "Kew", origin: "Kerala / West Bengal", availability: "May – Aug", notes: "Large, cylindrical, high juice yield." },
      { name: "Queen", origin: "Assam / West Bengal", availability: "Apr – Jul", notes: "Small, golden, intensely sweet." },
      { name: "Mauritius", origin: "Kerala", availability: "Jun – Sep", notes: "Medium size, firm, good shelf life." },
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
    slug: "coconut",
    name: "Coconut",
    category: "fruits",
    desc: "Fresh Indian coconuts — tender water and dried copra.",
    image: coconut,
    longDesc:
      "India is the third largest producer of coconuts in the world. Reva International LLP exports premium fresh coconuts, tender coconuts, and copra sourced from Kerala, Karnataka, and Tamil Nadu. Our coconuts are cleaned, graded, and packed to meet the quality requirements of international buyers.",
    varieties: [
      { name: "West Coast Tall", origin: "Kerala / Karnataka", availability: "Year-round", notes: "Most common, high water content, great for fresh use." },
      { name: "Dwarf (Tender Coconut)", origin: "Tamil Nadu / Kerala", availability: "Year-round", notes: "Sweet water, ideal for direct consumption." },
      { name: "Hybrid (COD × WCT)", origin: "Karnataka", availability: "Year-round", notes: "High yield, rich copra, dual-purpose variety." },
    ],
  },
  {
    slug: "chikoo",
    name: "Chikoo (Sapota)",
    category: "fruits",
    desc: "Sweet, caramel-flavored sapota — a tropical delight.",
    image: chikoo,
    longDesc:
      "Chikoo (Sapota) is a beloved tropical fruit known for its malty, caramel-like sweetness and smooth brown flesh. Reva International LLP sources premium chikoo from Gujarat and Maharashtra, ensuring export-grade quality with proper sizing, cleaning, and packaging for international shipment.",
    varieties: [
      { name: "Kalipatti", origin: "Maharashtra / Gujarat", availability: "Oct – Feb", notes: "Oval, smooth skin, excellent sweet flavor." },
      { name: "Cricket Ball", origin: "Maharashtra", availability: "Sep – Jan", notes: "Round, large, sugary and soft." },
      { name: "Dwarapudi", origin: "Andhra Pradesh", availability: "Year-round", notes: "High yield, popular commercial variety." },
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
    slug: "custard-apple",
    name: "Custard Apple",
    category: "fruits",
    desc: "Creamy, custard-flavored sitaphal — nature's dessert.",
    image: custardApple,
    longDesc:
      "Custard apple (Sitaphal / Sharifa) is prized for its creamy texture and distinctive sweet flavor. Reva International LLP sources premium custard apples from Maharashtra and Andhra Pradesh. This exotic fruit is hand-harvested at peak ripeness and carefully packed to preserve its delicate texture during export.",
    varieties: [
      { name: "Balanagar", origin: "Andhra Pradesh", availability: "Sep – Nov", notes: "Smooth skin, creamy flesh, high yield variety." },
      { name: "Mammoth", origin: "Maharashtra", availability: "Oct – Dec", notes: "Large sized, sweet, fewer seeds." },
      { name: "Red Sitaphal", origin: "Maharashtra", availability: "Oct – Nov", notes: "Reddish skin, rich flavor, premium export quality." },
    ],
  },
  {
    slug: "fig",
    name: "Fresh Figs",
    category: "fruits",
    desc: "Soft, honey-sweet fresh figs — a gourmet export fruit.",
    image: fig,
    longDesc:
      "India produces premium fresh and dried figs, particularly from Pune and Nashik in Maharashtra. Reva International LLP exports export-grade figs known for their natural sweetness, soft texture, and rich antioxidant content. Our figs are carefully harvested, sorted, and packed in modified atmosphere packaging for international shipment.",
    varieties: [
      { name: "Poona Fig", origin: "Maharashtra", availability: "Jun – Aug", notes: "Greenish-yellow, soft, highly sweet." },
      { name: "Brown Turkey", origin: "Maharashtra / Karnataka", availability: "May – Jul", notes: "Purple-brown skin, mild, honey-sweet flesh." },
      { name: "Dinkar", origin: "Maharashtra", availability: "Jun – Sep", notes: "Large, green, popular commercial variety." },
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
  {
    slug: "potato",
    name: "Potatoes",
    category: "vegetables",
    desc: "Fresh potatoes sourced from the best growing regions.",
    image: potato,
    longDesc:
      "We export top-quality potatoes from India's prime potato-growing belts including Uttar Pradesh, Gujarat, and Punjab. Our potatoes are carefully graded, cleaned, and packed for export to ensure freshness and long shelf life.",
    varieties: [
      { name: "Jyoti", origin: "Gujarat / UP", availability: "Nov – Apr", notes: "Versatile, great for frying and boiling." },
      { name: "Kufri Badshah", origin: "Uttar Pradesh", availability: "Dec – Mar", notes: "Large, smooth, ideal for chips." },
      { name: "Lady Rosetta", origin: "Gujarat", availability: "Jan – Mar", notes: "Processing variety, high dry matter." },
    ],
  },
  {
    slug: "tomato",
    name: "Tomatoes",
    category: "vegetables",
    desc: "Fresh, vine-ripened Indian tomatoes for global markets.",
    image: tomato,
    longDesc:
      "India is one of the largest tomato producers in the world. Reva International LLP exports premium-quality fresh tomatoes sourced from Andhra Pradesh, Karnataka, and Maharashtra. Our tomatoes are harvested at peak ripeness, graded for size and quality, and packed in ventilated export-grade boxes.",
    varieties: [
      { name: "Hybrid Tomato", origin: "Andhra Pradesh / Karnataka", availability: "Year-round", notes: "Firm, red, excellent shelf life for export." },
      { name: "Cherry Tomato", origin: "Maharashtra / Himachal Pradesh", availability: "Oct – Mar", notes: "Small, sweet, premium gourmet variety." },
      { name: "Roma (Plum) Tomato", origin: "Andhra Pradesh", availability: "Year-round", notes: "Low moisture, ideal for processing and fresh use." },
    ],
  },
  {
    slug: "okra",
    name: "Okra (Bhindi)",
    category: "vegetables",
    desc: "Tender green okra pods, fresh and export-grade quality.",
    image: okra,
    longDesc:
      "Okra (Bhindi / Lady's Finger) is a nutritious vegetable widely consumed across Asia, Africa, and the Middle East. Reva International LLP exports tender, fresh okra sourced from Andhra Pradesh, Gujarat, and Maharashtra. Our okra is harvested young for maximum tenderness and packed in modified atmosphere packaging for long-distance shipping.",
    varieties: [
      { name: "Parbhani Kranti", origin: "Maharashtra", availability: "Year-round", notes: "High yield, disease-resistant, widely exported." },
      { name: "Arka Anamika", origin: "Karnataka", availability: "Year-round", notes: "Spineless pods, tender, excellent taste." },
      { name: "VRO-6", origin: "Andhra Pradesh", availability: "Year-round", notes: "Dark green, uniform pods, good shelf life." },
    ],
  },
  {
    slug: "bitter-gourd",
    name: "Bitter Gourd (Karela)",
    category: "vegetables",
    desc: "Fresh bitter gourd rich in health benefits and nutrients.",
    image: bitterGourd,
    longDesc:
      "Bitter gourd (Karela) is a highly valued vegetable in Asian and Southeast Asian cuisines and is known for its exceptional medicinal properties. Reva International LLP exports fresh, export-grade bitter gourd sourced from Andhra Pradesh, Maharashtra, and Tamil Nadu.",
    varieties: [
      { name: "Pusa Do Mausami", origin: "Maharashtra / UP", availability: "Year-round", notes: "Medium-sized, deep green ridges, widely popular." },
      { name: "Arka Harit", origin: "Karnataka", availability: "Year-round", notes: "Smooth, green, high-yield variety." },
      { name: "Konkan Tara", origin: "Maharashtra", availability: "Jun – Oct", notes: "White-green pods, mild bitterness." },
    ],
  },
  {
    slug: "eggplant",
    name: "Eggplant (Brinjal)",
    category: "vegetables",
    desc: "Glossy purple brinjals — versatile and export-ready.",
    image: eggplant,
    longDesc:
      "Eggplant (Brinjal / Baingan) is a widely consumed vegetable across global cuisines. Reva International LLP exports premium-quality fresh brinjal sourced from Andhra Pradesh, Maharashtra, and Gujarat. Our brinjals are known for their deep purple color, firm texture, and excellent taste.",
    varieties: [
      { name: "Pusa Purple Long", origin: "Maharashtra / AP", availability: "Year-round", notes: "Long, dark purple, popular export variety." },
      { name: "Green Brinjal", origin: "Gujarat", availability: "Year-round", notes: "Tender, mild flavor, good for cooking." },
      { name: "Round Brinjal", origin: "Rajasthan / UP", availability: "Year-round", notes: "Globe-shaped, meaty, used in traditional dishes." },
    ],
  },
  {
    slug: "cauliflower",
    name: "Cauliflower",
    category: "vegetables",
    desc: "Crisp, white cauliflower heads — premium export quality.",
    image: cauliflower,
    longDesc:
      "Cauliflower is a highly demanded vegetable in Middle Eastern and European markets. Reva International LLP exports premium fresh cauliflower sourced from Bihar, Uttar Pradesh, and Punjab. Our cauliflower is tightly curded, snow-white, and packed in export-grade packaging.",
    varieties: [
      { name: "Pusa Snowball K-1", origin: "Punjab / UP", availability: "Oct – Feb", notes: "Compact white curd, very popular export variety." },
      { name: "Early Kunwari", origin: "Bihar", availability: "Sep – Nov", notes: "Early maturing, medium-sized, tender." },
      { name: "Hybrid White", origin: "Maharashtra / Gujarat", availability: "Nov – Feb", notes: "Uniform shape, long shelf life, export-grade." },
    ],
  },
  {
    slug: "cabbage",
    name: "Cabbage",
    category: "vegetables",
    desc: "Fresh, firm cabbage heads from India's best growing regions.",
    image: cabbage,
    longDesc:
      "Cabbage is one of the most widely consumed vegetables globally and a key export commodity for India. Reva International LLP exports fresh, tightly packed cabbage heads sourced from Himachal Pradesh, Maharashtra, and Karnataka. Our cabbage is graded for size, trimmed, and packed to maintain freshness.",
    varieties: [
      { name: "Golden Acre", origin: "Maharashtra / Karnataka", availability: "Oct – Mar", notes: "Round, compact, excellent storage quality." },
      { name: "Pride of India", origin: "Uttar Pradesh / HP", availability: "Sep – Feb", notes: "Medium head, crisp leaves, widely exported." },
      { name: "Green Coronet", origin: "Maharashtra", availability: "Year-round", notes: "Hybrid variety, uniform size, high yield." },
    ],
  },
  {
    slug: "ginger",
    name: "Fresh Ginger",
    category: "vegetables",
    desc: "Aromatic Indian ginger — a global culinary essential.",
    image: ginger,
    longDesc:
      "India is the world's largest producer of ginger, contributing nearly 35% of global production. Reva International LLP exports premium fresh ginger sourced from Kerala, Meghalaya, and Andhra Pradesh. Our ginger is known for its high pungency, strong aroma, and excellent oleoresin content.",
    varieties: [
      { name: "Maran", origin: "Kerala / Meghalaya", availability: "Jan – Mar", notes: "High fiber content, strong pungency, widely exported." },
      { name: "Rio de Janeiro", origin: "Kerala", availability: "Jan – Apr", notes: "Pale yellow flesh, less fiber, superior quality." },
      { name: "China", origin: "Andhra Pradesh / HP", availability: "Dec – Mar", notes: "Large rhizomes, popular across Asian markets." },
    ],
  },
  {
    slug: "garlic",
    name: "Fresh Garlic",
    category: "vegetables",
    desc: "Pungent Indian garlic with strong aroma and high allicin content.",
    image: garlic,
    longDesc:
      "India is one of the top garlic-exporting nations in the world. Reva International LLP exports premium fresh garlic sourced from Madhya Pradesh, Gujarat, and Rajasthan. Known for its strong pungency, high allicin content, and long shelf life, our garlic meets strict international quality standards.",
    varieties: [
      { name: "Yamuna Safed (G-1)", origin: "Madhya Pradesh / UP", availability: "Mar – May", notes: "White bulb, strong flavor, most exported variety." },
      { name: "Agrifound White (G-41)", origin: "Gujarat / Rajasthan", availability: "Mar – Jun", notes: "Large cloves, good storage, widely popular." },
      { name: "Godavari", origin: "Andhra Pradesh", availability: "Feb – Apr", notes: "Red-white bulb, high allicin, premium export grade." },
    ],
  },
  {
    slug: "bottle-gourd",
    name: "Bottle Gourd (Lauki)",
    category: "vegetables",
    desc: "Fresh, tender bottle gourds known for their health benefits.",
    image: bottleGourd,
    longDesc:
      "Bottle gourd (Lauki / Dudhi) is a popular vegetable across South Asia, the Middle East, and Southeast Asia. Reva International LLP exports premium fresh bottle gourd sourced from Andhra Pradesh, Maharashtra, and Uttar Pradesh. Our bottle gourds are harvested young, ensuring maximum tenderness.",
    varieties: [
      { name: "Pusa Naveen", origin: "UP / Maharashtra", availability: "Year-round", notes: "Light green, medium-sized, tender flesh." },
      { name: "Round Lauki", origin: "Gujarat / Rajasthan", availability: "Year-round", notes: "Globe-shaped, mild flavor, widely consumed." },
      { name: "Long Green", origin: "Andhra Pradesh", availability: "Year-round", notes: "Long cylindrical pods, high water content." },
    ],
  },
  {
    slug: "spinach",
    name: "Spinach (Palak)",
    category: "vegetables",
    desc: "Fresh, nutrient-rich spinach leaves for global markets.",
    image: spinach,
    longDesc:
      "Spinach (Palak) is a nutrient-dense leafy vegetable in high demand across global markets. Reva International LLP exports fresh, vibrant spinach sourced from Punjab, Uttar Pradesh, and Maharashtra. Our spinach is harvested young, washed, and packed to maintain its freshness and bright green color.",
    varieties: [
      { name: "All Green", origin: "Punjab / Haryana", availability: "Oct – Feb", notes: "Dark green, smooth leaves, widely exported." },
      { name: "Viroflay", origin: "Maharashtra / Gujarat", availability: "Nov – Feb", notes: "Large leaves, tender, excellent for cooking." },
      { name: "Bloomsdale", origin: "UP / Maharashtra", availability: "Oct – Mar", notes: "Crinkled leaves, sweet flavor, gourmet variety." },
    ],
  },

  // ── SPICES & OTHERS ─────────────────────────────────────────────────────
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
