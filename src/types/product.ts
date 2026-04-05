export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string; 
  rating: number;  
}

export type ProductResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}