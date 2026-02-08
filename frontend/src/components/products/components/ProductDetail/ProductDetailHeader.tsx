import { Box, Heading, Badge, Button } from "@radix-ui/themes";
import { useNavigate } from "react-router";

interface ProductDetailHeaderProps {
  name: string;
  inStock: boolean;
}

const ProductDetailHeader = ({ name, inStock }: ProductDetailHeaderProps) => {
  const navigate = useNavigate();

  return (
    <>
      <Button
        variant="ghost"
        onClick={() => navigate("/")}
        style={{ marginBottom: "2rem" }}
      >
        ← Back to Products
      </Button>

      <Box style={{ marginBottom: "2rem" }}>
        <Heading size="8" style={{ marginBottom: "1rem" }}>
          {name}
        </Heading>
        <Badge color={inStock ? "green" : "red"} style={{ marginBottom: "1rem" }}>
          {inStock ? "In Stock" : "Out of Stock"}
        </Badge>
      </Box>
    </>
  );
};

export default ProductDetailHeader;

