
export type Category =
  | "Home Decor"
  | "Handmade Jewellery"
  | "Accessories"
  | "Art & Crafts";

export const categories: Category[] = [
  "Home Decor",
  "Handmade Jewellery",
  "Accessories",
  "Art & Crafts",
];

export interface Product {
  slug: string;
  name: string;
  category: Category;
  short: string;
  description: string;
  ingredients: string;
  sizes: string[];
  uses: string[];
  storage: string;
  color: string;
  bestseller?: boolean;
}

const storage =
  "Keep your handmade products in a clean, dry place. Handle carefully to maintain their beauty and quality.";

const mk = (
  slug: string,
  name: string,
  category: Category,
  short: string,
  description: string,
  ingredients: string,
  uses: string[],
  color: string,
  sizes = ["Standard"],
  bestseller = false
): Product => ({
  slug,
  name,
  category,
  short,
  description,
  ingredients,
  sizes,
  uses,
  storage,
  color,
  bestseller,
});

export const products: Product[] = [
  mk(
    "handmade-wall-decor",
    "Handmade Wall Decor",
    "Home Decor",
    "Beautiful handmade art to brighten your walls.",
    "Add a creative touch to your home with unique handmade wall decorations.",
    "Craft materials and decorative elements",
    ["Living room decoration", "Bedroom decoration", "Gifting"],
    "#C58B65",
    ["Standard"],
    true
  ),
  mk(
    "artisan-jewellery",
    "Artisan Jewellery",
    "Handmade Jewellery",
    "Unique accessories crafted with creativity.",
    "Discover artistic handmade jewellery pieces for everyday styling and special occasions.",
    "Beads, threads and decorative materials",
    ["Everyday styling", "Parties", "Gifting"],
    "#B77979",
    ["Standard"],
    true
  ),
  mk(
    "handmade-tote-bag",
    "Handmade Tote Bag",
    "Accessories",
    "Creative and stylish bags for everyday use.",
    "Carry your essentials in a beautiful handmade tote bag with a creative design.",
    "Fabric and decorative materials",
    ["Shopping", "College", "Everyday use"],
    "#A58B65"
  ),
  mk(
    "decorative-candle",
    "Decorative Candle",
    "Home Decor",
    "A lovely decorative touch for your space.",
    "Beautiful decorative candles that add warmth and charm to your surroundings.",
    "Wax and decorative materials",
    ["Home decoration", "Gifting", "Special occasions"],
    "#D6A76A"
  ),
  mk(
    "handmade-greeting-card",
    "Handmade Greeting Card",
    "Art & Crafts",
    "Thoughtful cards for your special people.",
    "Send heartfelt wishes with creative greeting cards made with care and imagination.",
    "Paper, colours and decorative elements",
    ["Birthdays", "Celebrations", "Special occasions"],
    "#D18A8A"
  ),
  mk(
    "clay-art",
    "Creative Clay Art",
    "Art & Crafts",
    "Small artistic creations made with love.",
    "Explore unique clay art pieces that bring creativity and personality to your space.",
    "Clay and decorative materials",
    ["Home decoration", "Collecting", "Gifting"],
    "#B87950"
  ),
];

export interface Recipe {
  slug: string;
  title: string;
  intro: string;
  prep: number;
  cook: number;
  difficulty: "Easy" | "Medium" | "Hard";
  serves: number;
  color: string;
  ingredients: string[];
  steps: string[];
  relatedProducts: string[];
}

export const recipes: Recipe[] = [];

export const faqs = [
  {
    q: "What is Jhunuk Crafts?",
    a: "Jhunuk Crafts is a creative space showcasing beautiful handmade products, artistic decorations and unique craft items.",
  },
  {
    q: "Are your products handmade?",
    a: "Our collection focuses on handmade creations made with creativity, care and attention to detail.",
  },
  {
    q: "Can I request customised products?",
    a: "Yes! You can contact us with your ideas and preferences for customised handmade creations.",
  },
  {
    q: "How should I care for handmade products?",
    a: "Handle your products carefully and follow any specific care instructions provided with the item.",
  },
  {
    q: "Can I order online?",
    a: "This website is currently a frontend demonstration. Online ordering and payment features are not available yet.",
  },
  {
    q: "Are all handmade products exactly alike?",
    a: "Small variations in handmade products are natural and make every creation unique.",
  },
];

export const testimonials = [
  {
    name: "Meera S.",
    place: "Bhubaneswar",
    text: "The handmade decorations add such a lovely touch to my home.",
  },
  {
    name: "Arjun P.",
    place: "Pune",
    text: "I love the creativity and uniqueness of these handmade products.",
  },
  {
    name: "Kavita R.",
    place: "Jaipur",
    text: "Such thoughtful handmade creations. Perfect for gifting!",
  },
];

export const getProduct = (slug: string) =>
  products.find((product) => product.slug === slug);

export const getRecipe = (slug: string) =>
  recipes.find((recipe) => recipe.slug === slug);
