import { useInfiniteQuery } from "@tanstack/react-query";
import { productsAPI } from "../services/productAPI";
import type { IProduct } from "../types/product";

export interface PaginatedProductsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IProduct[];
}

export const productKeys = {
  list: ['products']
}

export const useProducts = () => {
      
  return useInfiniteQuery<PaginatedProductsResponse>({
    queryKey: productKeys.list,
    queryFn: ({ pageParam }) => productsAPI.list({ pageParam: pageParam as number }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      // Extract page number from next URL if available
      if (!lastPage.next) {return undefined;}
      const url = new URL(lastPage.next);
      const page = url.searchParams.get("page");

      return page ? parseInt(page, 10) : undefined;
    },
  });
};
