export type Category = 

  | "all"
  | "beauty"
  | "fragrances"
  | "furniture"
  | "groceries"
 ;

export const CATEGORY_LIST: { label: string; value: Category }[] = [
  { label: "All Products", value: "all" }, 
  { label: "Fragrances", value: "fragrances" },
  { label: "Beauty", value: "beauty" },
  { label: "Groceries", value: "groceries" },
  { label: "Furniture", value: "furniture" },

];
