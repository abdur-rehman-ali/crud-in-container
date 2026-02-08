import { Container, Box, Heading, Text, Badge, Button } from "@radix-ui/themes";
import { useParams, useNavigate } from "react-router";
import { useProduct } from "../../hooks/useProduct";

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
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          style={{ marginBottom: "2rem" }}
        >
          ← Back to Products
        </Button>

        <Box style={{ marginBottom: "2rem" }}>
          <Heading size="8" style={{ marginBottom: "1rem" }}>
            {product.name}
          </Heading>
          <Badge color={product.in_stock ? "green" : "red"} style={{ marginBottom: "1rem" }}>
            {product.in_stock ? "In Stock" : "Out of Stock"}
          </Badge>
        </Box>

        <Box style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Box>
            <Text weight="bold" size="3">ID:</Text>
            <Text size="3" style={{ marginLeft: "0.5rem" }}>{product.id}</Text>
          </Box>

          <Box>
            <Text weight="bold" size="3">Price:</Text>
            <Text size="3" style={{ marginLeft: "0.5rem" }}>${product.price}</Text>
          </Box>

          <Box>
            <Text weight="bold" size="3">Category:</Text>
            <Text size="3" style={{ marginLeft: "0.5rem" }}>{product.category}</Text>
          </Box>

          <Box>
            <Text weight="bold" size="3">Description:</Text>
            <Text size="3" style={{ marginLeft: "0.5rem", marginTop: "0.5rem", display: "block" }}>
              {product.description || "No description available"}
            </Text>
          </Box>

          <Box>
            <Text weight="bold" size="3">Created:</Text>
            <Text size="3" style={{ marginLeft: "0.5rem" }}>
              {new Date(product.created_at).toLocaleDateString()}
            </Text>
          </Box>

          <Box>
            <Text weight="bold" size="3">Last Updated:</Text>
            <Text size="3" style={{ marginLeft: "0.5rem" }}>
              {new Date(product.updated_at).toLocaleDateString()}
            </Text>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetail;

