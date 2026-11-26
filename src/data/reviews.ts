/**
 * ILLUSTRATIVE reviews, written for the demo. They are not real customer feedback,
 * so there are no names, no star ratings and every card is labelled as an example.
 */
export type Review = { id: string; occasion: string; quote: string };

export const reviews: Review[] = [
  {
    id: "date-night",
    occasion: "Date night",
    quote:
      "The jollof arrived smoky and glossy, and the candlelit corner booth made the evening feel unhurried.",
  },
  {
    id: "team-dinner",
    occasion: "Team dinner",
    quote:
      "We shared grilled prawns and herb-butter chicken across the table. Easy to order, easy to book for a group.",
  },
  {
    id: "birthday",
    occasion: "Birthday celebration",
    quote:
      "Signature mocktails for the whole table, then dessert. It felt like an occasion without being stuffy.",
  },
];
