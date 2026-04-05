import {useQuery, keepPreviousData} from '@tanstack/react-query';
import type { ProductResponse } from '../types/product';

const fetchProducts = async (category: string, page: number,): Promise<ProductResponse> => {
  const limit = category === 'all' ? 100 : 8;;
  const skip = category === 'all' ? 0 : (page - 1) * limit;
  
  const baseUrl =
    category === 'all'
      ? `https://dummyjson.com/products?limit=${limit}`
      : `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
  
  const res = await fetch(baseUrl);

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
};

export const useProducts = (category: string = 'all', page: number = 1) => {
    return useQuery<ProductResponse>({
    queryKey: ['products', category, page],
    queryFn: () => fetchProducts(category, page),
    staleTime: 1000 * 60 * 5,
   placeholderData: keepPreviousData,
  });
};

 