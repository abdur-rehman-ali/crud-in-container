import { Table, Box } from "@radix-ui/themes"

interface ProductTable {
  id: string
  name: string
  description: string
  price: string
  category: string
  in_stock: boolean
  created_at: string
  updated_at: string
}

interface ProductsTableProps {
  products?: ProductTable[]
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

const TableRow = ({ product }: { product: ProductTable }) => {
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

const ProductsTable = ({ products }: ProductsTableProps) => {
  const renderTableBody = () => {
    if (!products) { return <LoadingTable /> }

    if (products.length === 0) { return <EmptyTable />}

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
    </Box>
  )
}

export default ProductsTable
