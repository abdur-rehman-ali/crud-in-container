import { Container } from "@radix-ui/themes";
import ProductsTable from "./components/ProductsTable/ProductsTable";
import ProductsHeader from "./components/ProductsHeader/ProductsHeader";
import { useProducts } from "./hooks/useProducts";
import DialogDemo from "../../shared/dialog/DialogDemo";

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
      <ProductsHeader />
      <DialogDemo />
      <ProductsTable
        products={products}
        isLoading={isLoading}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
    </Container>
  );
};

export default Products;