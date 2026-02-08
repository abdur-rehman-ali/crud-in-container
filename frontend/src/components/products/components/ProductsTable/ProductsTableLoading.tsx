import { Table } from "@radix-ui/themes";

const ProductsTableLoading = () => {
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

export default ProductsTableLoading

