import { Table } from "@radix-ui/themes";

const ProductsTableHeader = () => {
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
  );
};

export default ProductsTableHeader;

