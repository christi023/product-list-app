import {useQuery} from '@tanstack/react-query';
import type { Product } from '../types/product';

const fetchProducts = async (): Promise<Product[]> => {
//  const res = await fetch("https://fakestoreapi.com/products");
const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = await res.json();
  return data.products ;
};

export const useProducts = () => {
    return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5
  });
};

 