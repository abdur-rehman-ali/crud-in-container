import { Container, Box, Text, Button } from "@radix-ui/themes";
import { useParams, useNavigate } from "react-router";
import { useProduct } from "../../hooks/useProduct";
import ProductDetailHeader from "./ProductDetailHeader";
import ProductDetailInfo from "./ProductDetailInfo";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: product, isLoading, error } = useProduct(id || "");

  if (isLoading) {
    return (
      <Container>
        <Box style={{ padding: "2rem",  textAlign: "center" }}>
          <Text>Loading...</Text>
        </Box>
      </Container>
    );
  }

  if (error || !product) {
    return (
      <Container>
        <Box style={{ padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
          <Text color="red">Product not found</Text>
          <Button onClick={() => navigate("/")} style={{ marginTop: "1rem" }}>
            Back to Products
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Box style={{ padding: "2rem" }}>
        <ProductDetailHeader name={product.name} inStock={product.in_stock} />
        <ProductDetailInfo
          id={product.id}
          price={product.price}
          category={product.category}
          description={product.description}
          createdAt={product.created_at}
          updatedAt={product.updated_at}
        />
      </Box>
    </Container>
  );
};

export default ProductDetail;

