export type Category =
  | "all"
  | "beauty"
  | "fragrances"
  | "furniture"
  | "groceries"
  | "kitchen-accessories"
  | "home-decoration"
  | "laptops"
  | "mens-shirts"
  | "mens-shoes"
  | "mens-watches"
  |"mobile-accessories"
  

export const CATEGORY_LIST: { label: string; value: Category }[] = [
  { label: "All Products", value: "all" },
  { label: "Fragrances", value: "fragrances" },
  { label: "Beauty", value: "beauty" },
  { label: "Groceries", value: "groceries" },
  { label: "Furniture", value: "furniture" },
  { label: "Kitchen Accessories", value: "kitchen-accessories" },
  { label: "Home Decoration", value: "home-decoration" },
  { label: "Laptops", value: "laptops" },
  { label: "Men's Shirts", value: "mens-shirts" },
  { label: "Men's Shoes", value: "mens-shoes" },
  { label: "Men's Watches", value: "mens-watches" },
  { label: "Mobile Accessories", value: "mobile-accessories" },
];
