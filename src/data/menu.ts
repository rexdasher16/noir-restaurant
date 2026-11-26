/**
 * Menu content. Every dish and price here is ILLUSTRATIVE (fictional demo values).
 * Pages read from this file only, so editing a name or price updates the menu,
 * the featured dishes and the WhatsApp order message together.
 *
 * Allergen rule: we only note what is obvious from the dish itself (for example
 * "Contains shellfish" on prawns). We never claim a dish is free of anything.
 */

export type MenuCategoryId =
  | "starters"
  | "mains"
  | "nigerian-favourites"
  | "desserts"
  | "drinks";

export const menuCategories: { id: MenuCategoryId; label: string }[] = [
  { id: "starters", label: "Starters" },
  { id: "mains", label: "Main courses" },
  { id: "nigerian-favourites", label: "Nigerian favourites" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" },
];

/** Crop a photo so two dishes can share one image: x/y are percentages, zoom is a multiplier. */
export type ImageFocus = { x: number; y: number; zoom?: number };

export type MenuItem = {
  id: string;
  category: MenuCategoryId;
  name: string;
  description: string;
  /** Price in US dollars. */
  price: number;
  /** Dishes without a photo show a refined icon panel instead. */
  image?: { src: string; alt: string; focus?: ImageFocus };
  /** Only where the fact is obvious from the dish. Never an assurance. */
  note?: string;
  available?: boolean;
};

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: "peppered-chicken-wings",
    category: "starters",
    name: "Signature peppered chicken wings",
    description: "Crisp wings tossed in our house pepper glaze with charred onion.",
    price: 14,
  },
  {
    id: "grilled-prawns",
    category: "starters",
    name: "Grilled prawns",
    description: "Jumbo prawns grilled over open flame with garlic, lime and a smoky pepper sauce.",
    price: 22,
    note: "Contains shellfish",
    image: {
      src: "/images/grilled-seafood.jpg",
      alt: "Grilled prawns and a whole grilled fish on a wooden board with pepper sauce and charred lemon.",
      focus: { x: 22, y: 55, zoom: 1.35 },
    },
  },
  {
    id: "plantain-bites",
    category: "starters",
    name: "Spiced plantain bites",
    description: "Golden plantain, lightly spiced and fried, served with a smoky chilli dip.",
    price: 9,
  },
  {
    id: "pepper-soup",
    category: "starters",
    name: "Nigerian-style pepper soup",
    description: "A fragrant, peppery broth with traditional spices, served steaming hot.",
    price: 12,
  },

  // Main courses
  {
    id: "signature-jollof",
    category: "mains",
    name: "NOIR signature jollof rice",
    description: "Smoky party-style jollof, slow-cooked in a rich pepper and tomato base, with fried plantain.",
    price: 24,
    image: {
      src: "/images/jollof-rice.jpg",
      alt: "Smoky Nigerian jollof rice in a bronze bowl with fried plantain and a sprig of thyme.",
    },
  },
  {
    id: "herb-butter-chicken",
    category: "mains",
    name: "Grilled chicken with herb butter",
    description: "Flame-grilled chicken, golden and juicy, finished with herb butter and roasted vegetables.",
    price: 26,
    image: {
      src: "/images/grilled-chicken.jpg",
      alt: "Herb-butter grilled chicken with roasted vegetables on a dark plate.",
    },
  },
  {
    id: "beef-steak",
    category: "mains",
    name: "Premium beef steak",
    description: "Chargrilled premium cut, rested and served with our house pepper sauce.",
    price: 38,
  },
  {
    id: "seafood-fried-rice",
    category: "mains",
    name: "Seafood fried rice",
    description: "Wok-fried rice with prawns, squid and vegetables, finished with a hint of suya spice.",
    price: 28,
    note: "Contains seafood",
  },

  // Nigerian favourites
  {
    id: "seafood-okra",
    category: "nigerian-favourites",
    name: "Seafood okra with swallow",
    description: "Rich okra soup loaded with prawns and fish, served with your choice of swallow.",
    price: 29,
    note: "Contains seafood",
  },
  {
    id: "native-rice",
    category: "nigerian-favourites",
    name: "Native rice with assorted protein",
    description: "Palm-oil native rice cooked with smoked fish, crayfish and assorted meats.",
    price: 25,
    note: "Contains fish and shellfish",
  },
  {
    id: "catfish-pepper-soup",
    category: "nigerian-favourites",
    name: "Nigerian catfish pepper soup",
    description: "Tender catfish in a fiery, aromatic pepper soup with scent leaf.",
    price: 22,
    note: "Contains fish",
  },
  {
    id: "ofada-ayamase",
    category: "nigerian-favourites",
    name: "Ofada rice with ayamase sauce",
    description: "Local ofada rice with ayamase, the bold green-pepper stew with assorted meats.",
    price: 24,
  },

  // Desserts
  {
    id: "chocolate-fondant",
    category: "desserts",
    name: "Chocolate fondant",
    description: "Warm dark chocolate fondant with a molten centre and vanilla cream.",
    price: 12,
  },
  {
    id: "classic-cheesecake",
    category: "desserts",
    name: "Classic cheesecake",
    description: "Silky baked cheesecake on a buttery biscuit base with berry compote.",
    price: 11,
  },
  {
    id: "coconut-cream",
    category: "desserts",
    name: "Coconut cream dessert",
    description: "Chilled coconut cream with toasted coconut and tropical fruit.",
    price: 10,
  },

  // Drinks
  {
    id: "noir-mocktails",
    category: "drinks",
    name: "Signature NOIR mocktails",
    description: "Passion fruit and hibiscus, shaken with mint and lime. Alcohol-free.",
    price: 9,
    image: {
      src: "/images/signature-drinks.jpg",
      alt: "A passion fruit mocktail garnished with a red hibiscus flower and mint.",
      focus: { x: 80, y: 38, zoom: 1.7 },
    },
  },
  {
    id: "premium-cocktails",
    category: "drinks",
    name: "Premium cocktails",
    description: "The bar's signatures, such as an orange and rosemary old-fashioned. Ask for tonight's list.",
    price: 14,
    note: "Contains alcohol",
    image: {
      src: "/images/signature-drinks.jpg",
      alt: "An orange old-fashioned cocktail with a dehydrated orange slice and rosemary on a marble bar.",
      focus: { x: 24, y: 62, zoom: 1.6 },
    },
  },
  {
    id: "tropical-juices",
    category: "drinks",
    name: "Fresh tropical juices",
    description: "Pressed to order: pineapple, watermelon or passion fruit.",
    price: 7,
  },
  {
    id: "soft-drinks-water",
    category: "drinks",
    name: "Soft drinks and water",
    description: "Chilled soft drinks, still and sparkling water.",
    price: 4,
  },
];

/** Dishes shown on the homepage, in this order. */
export const featuredDishIds = [
  "signature-jollof",
  "herb-butter-chicken",
  "grilled-prawns",
  "premium-cocktails",
];

export function getMenuItem(id: string): MenuItem | undefined {
  return menuItems.find((item) => item.id === id);
}
