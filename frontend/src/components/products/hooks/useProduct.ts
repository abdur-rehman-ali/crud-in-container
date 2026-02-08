import { useQuery } from "@tanstack/react-query";
import { productsAPI } from "../../../services/productAPI";
import { productKeys } from "./useProducts";
import type { IProduct } from "../types/product";

export const useProduct = (id: string) => {
  return useQuery<IProduct>({
    queryKey: [...productKeys.list, id],
    queryFn: () => productsAPI.getProduct(id),
    enabled: !!id,
  });
};

