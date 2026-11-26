import type { ImageFocus } from "./menu";

export type GalleryCategory = "Food" | "Drinks" | "Interior" | "Experiences";

export const galleryCategories: GalleryCategory[] = ["Food", "Drinks", "Interior", "Experiences"];

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  /** Large photo shown in the lightbox. */
  src: string;
  alt: string;
  caption: string;
  /** Optional close-up crop used for the grid thumbnail. */
  focus?: ImageFocus;
};

const A = {
  hero: "A plate of smoky jollof rice, grilled chicken and fried plantain on a candlelit marble table, with an orange cocktail and the NOIR lounge behind.",
  jollof: "Smoky Nigerian jollof rice in a bronze bowl with fried plantain and a sprig of thyme.",
  seafood: "Grilled prawns and a whole grilled fish on a wooden board with pepper sauce and charred lemon.",
  chicken: "Herb-butter grilled chicken with roasted vegetables on a dark plate.",
  drinks: "Two signature drinks on a marble bar: an orange old-fashioned and a passion fruit cocktail with a hibiscus flower.",
  interior: "The NOIR dining room with olive velvet booths, burnt-orange chairs, marble tables and a glowing bar.",
  toast: "Four hands raising cocktails and a glass of wine in a toast over a candlelit table of NOIR dishes.",
  chef: "A chef in a black NOIR jacket garnishing grilled fish on jollof rice with micro herbs.",
};

export const galleryItems: GalleryItem[] = [
  { id: "jollof", category: "Food", src: "/images/jollof-rice.jpg", alt: A.jollof, caption: "Signature jollof with fried plantain" },
  { id: "seafood", category: "Food", src: "/images/grilled-seafood.jpg", alt: A.seafood, caption: "Grilled prawns and whole fish" },
  { id: "chicken", category: "Food", src: "/images/grilled-chicken.jpg", alt: A.chicken, caption: "Herb-butter grilled chicken" },
  { id: "plantain", category: "Food", src: "/images/jollof-rice.jpg", alt: A.jollof, caption: "Fried plantain detail", focus: { x: 82, y: 40, zoom: 1.9 } },
  { id: "prawns", category: "Food", src: "/images/grilled-seafood.jpg", alt: A.seafood, caption: "Char-grilled prawns", focus: { x: 18, y: 58, zoom: 1.7 } },

  { id: "drinks", category: "Drinks", src: "/images/signature-drinks.jpg", alt: A.drinks, caption: "Signature drinks at the bar" },
  { id: "old-fashioned", category: "Drinks", src: "/images/signature-drinks.jpg", alt: A.drinks, caption: "Orange and rosemary old-fashioned", focus: { x: 24, y: 64, zoom: 1.8 } },
  { id: "hibiscus", category: "Drinks", src: "/images/signature-drinks.jpg", alt: A.drinks, caption: "Passion fruit and hibiscus", focus: { x: 80, y: 36, zoom: 1.8 } },

  { id: "dining-room", category: "Interior", src: "/images/interior.jpg", alt: A.interior, caption: "The dining room" },
  { id: "bar", category: "Interior", src: "/images/interior.jpg", alt: A.interior, caption: "The lit bar", focus: { x: 92, y: 40, zoom: 1.9 } },
  { id: "booths", category: "Interior", src: "/images/interior.jpg", alt: A.interior, caption: "Velvet booths and marble tables", focus: { x: 22, y: 72, zoom: 1.7 } },

  { id: "toast", category: "Experiences", src: "/images/experience-toast.jpg", alt: A.toast, caption: "A toast across the table" },
  { id: "chef", category: "Experiences", src: "/images/experience-chef.jpg", alt: A.chef, caption: "Plated by hand" },
  { id: "candlelit", category: "Experiences", src: "/images/hero.jpg", alt: A.hero, caption: "Candlelit dinner" },
];

export function getGalleryItem(id: string): GalleryItem {
  const item = galleryItems.find((entry) => entry.id === id);
  if (!item) throw new Error(`Unknown gallery item: ${id}`);
  return item;
}
