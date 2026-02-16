import { Table, Badge } from "@radix-ui/themes";
import { useNavigate } from "react-router";
import  type { IProduct } from "../../types/product";


interface ProductsTableRowProps {
  product: IProduct;
}

const ProductsTableRow = ({ product }: ProductsTableRowProps) => {
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
  );
};

export default ProductsTableRow;

