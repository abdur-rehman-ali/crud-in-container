import { Container } from "@radix-ui/themes"
import ProductsTable from "./ProductsTable"
import Header from "./Header"
import { useProducts } from "../../hooks/useProducts"

interface Products {
  id: string
  name: string
  description: string
  price: string
  category: string
  in_stock: boolean
  created_at: string
  updated_at: string
}


const Products = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useProducts();

  // Flatten all pages into a single array
  const products = data?.pages.flatMap((page) => page.results) ?? undefined;

  return (
    <Container>
      <Header />
      <ProductsTable
        products={products}
        isLoading={isLoading}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
    </Container>
  )
}

export default Products