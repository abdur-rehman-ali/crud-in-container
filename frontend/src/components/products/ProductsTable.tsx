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


const ProductsTable = ({ products }: { products: ProductTable[] }) => {
  return (
    <Box px="6">
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell style={{ width: '350px', maxWidth: '350px' }}>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Category</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>In Stock</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((product) => (
            <Table.Row key={product.id}>
              <Table.Cell style={{ width: '350px', maxWidth: '350px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {product.id}
              </Table.Cell>
              <Table.RowHeaderCell>{product.name}</Table.RowHeaderCell>
              <Table.Cell>${product.price}</Table.Cell>
              <Table.Cell>{product.category}</Table.Cell>
              <Table.Cell>{product.in_stock ? "Yes" : "No"}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  )
}

export default ProductsTable