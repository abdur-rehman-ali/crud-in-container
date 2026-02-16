import { Table, Box, Text } from "@radix-ui/themes";
import { useInView } from "react-intersection-observer";
import type { IProduct } from "../../types/product";
import ProductsTableHeader from "./ProductsTableHeader";
import ProductsTableRow from "./ProductsTableRow";
import ProductsTableEmpty from "./ProductsTableEmpty";
import ProductsTableLoading from "./ProductsTableLoading";

interface ProductsTableProps {
  products?: IProduct[];
  isLoading?: boolean;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  fetchNextPage: () => void;
}

const ProductsTable = ({
  products,
  isLoading,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: ProductsTableProps) => {
  const { ref: loadMoreRef } = useInView({
    threshold: 0.1,
    onChange: (inView: boolean) => {
      if (inView && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    skip: !hasNextPage || isFetchingNextPage,
  });

  const renderTableBody = () => {
    if (isLoading && !products) {
      return <ProductsTableLoading />;
    }

    if (products && products.length === 0) {
      return <ProductsTableEmpty />;
    }

    if (!products) {
      return null;
    }

    return (
      <Table.Body>
        {products.map((product) => (
          <ProductsTableRow product={product} key={product.id} />
        ))}
      </Table.Body>
    );
  };

  return (
    <Box>
      <Table.Root variant="surface">
        <ProductsTableHeader />
        {renderTableBody()}
      </Table.Root>
      {hasNextPage && (
        <Box ref={loadMoreRef} style={{ padding: "1rem", textAlign: "center" }}>
          {isFetchingNextPage && (
            <Text size="2" color="gray">
              Loading...
            </Text>
          )}
        </Box>
      )}
    </Box>
  );
};

export default ProductsTable;

