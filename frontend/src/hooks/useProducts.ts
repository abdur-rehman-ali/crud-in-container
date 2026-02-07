import { useQuery } from "@tanstack/react-query"
import { productsAPI } from "../services/productAPI"

export const productKeys = {
  list: ['products']
}

export const useProducts = () => {
  return useQuery({
    queryKey: productKeys.list,
    queryFn: productsAPI.list
  })
}