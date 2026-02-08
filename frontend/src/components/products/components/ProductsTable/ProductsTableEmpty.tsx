import { Table } from "@radix-ui/themes";

const ProductsTableEmpty = () => {
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

export default ProductsTableEmpty

