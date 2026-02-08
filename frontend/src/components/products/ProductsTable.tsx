import { Table, Box, Text, Badge } from "@radix-ui/themes";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router";
import type { IProduct } from "../../types/product";

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
        <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
      </Table.Row>
    </Table.Header>
  )
}

const TableRow = ({ product }: { product: IProduct }) => {
  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <Table.Row
      key={product.id}
      onClick={handleRowClick}
      style={{ cursor: "pointer" }}
    >
      <Table.Cell style={{ width: '350px', maxWidth: '350px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {product.id}
      </Table.Cell>
      <Table.RowHeaderCell>{product.name}</Table.RowHeaderCell>
      <Table.Cell>${product.price}</Table.Cell>
      <Table.Cell>{product.category}</Table.Cell>
      <Table.Cell>
        <Badge color={product.in_stock ? "green" : "red"}>
          {product.in_stock ? "In Stock" : "Out of Stock"}
        </Badge>
      </Table.Cell>
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
