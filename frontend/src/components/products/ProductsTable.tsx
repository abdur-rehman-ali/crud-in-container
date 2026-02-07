import { Table, Box, Text } from "@radix-ui/themes";
import { useRef, useCallback } from "react";
import type { IProduct } from "../../types/product";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

interface ProductsTableProps {
  products?: IProduct[];
  isLoading?: boolean;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  fetchNextPage: () => void;
}

const TableHeader = () => {
  return (
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeaderCell style={{ width: '350px', maxWidth: '350px' }}>ID</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Category</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>In Stock</Table.ColumnHeaderCell>
      </Table.Row>
    </Table.Header>
  )
}

const TableRow = ({ product }: { product: IProduct }) => {
  return (
    <Table.Row key={product.id}>
      <Table.Cell style={{ width: '350px', maxWidth: '350px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {product.id}
      </Table.Cell>
      <Table.RowHeaderCell>{product.name}</Table.RowHeaderCell>
      <Table.Cell>${product.price}</Table.Cell>
      <Table.Cell>{product.category}</Table.Cell>
      <Table.Cell>{product.in_stock ? "Yes" : "No"}</Table.Cell>
    </Table.Row>
  )
}

const EmptyTable = () => {
  return (
    <Table.Body>
      <Table.Row>
        <Table.Cell colSpan={5} style={{ textAlign: 'center' }}>
          No products found
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  )
}

const LoadingTable = () => {
  return (
    <Table.Body>
      <Table.Row>
        <Table.Cell colSpan={5} style={{ textAlign: 'center' }}>
          Loading...
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  )
}

const ProductsTable = ({
  products,
  isLoading,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: ProductsTableProps) => {
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const handleIntersect = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  useIntersectionObserver(loadMoreRef, handleIntersect, {
    enabled: hasNextPage === true && !isFetchingNextPage,
  });

  const renderTableBody = () => {
    if (isLoading && !products) {
      return <LoadingTable />;
    }

    if (products && products.length === 0) {
      return <EmptyTable />;
    }

    if (!products) {
      return null;
    }

    return (
      <Table.Body>
        {products.map((product) => (
          <TableRow product={product} key={product.id} />
        ))}
      </Table.Body>
    )
  }

  return (
    <Box>
      <Table.Root variant="surface">
        <TableHeader />
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
  )
}

export default ProductsTable
