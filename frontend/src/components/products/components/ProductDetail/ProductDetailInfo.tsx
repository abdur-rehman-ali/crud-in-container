import { Box, Text } from "@radix-ui/themes";

interface ProductDetailInfoProps {
  id: string;
  price: string;
  category: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

const ProductDetailInfo = ({
  id,
  price,
  category,
  description,
  createdAt,
  updatedAt,
}: ProductDetailInfoProps) => {
  return (
    <Box style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Box>
        <Text weight="bold" size="3">ID:</Text>
        <Text size="3" style={{ marginLeft: "0.5rem" }}>{id}</Text>
      </Box>

      <Box>
        <Text weight="bold" size="3">Price:</Text>
        <Text size="3" style={{ marginLeft: "0.5rem" }}>${price}</Text>
      </Box>

      <Box>
        <Text weight="bold" size="3">Category:</Text>
        <Text size="3" style={{ marginLeft: "0.5rem" }}>{category}</Text>
      </Box>

      <Box>
        <Text weight="bold" size="3">Description:</Text>
        <Text size="3" style={{ marginLeft: "0.5rem", marginTop: "0.5rem", display: "block" }}>
          {description || "No description available"}
        </Text>
      </Box>

      <Box>
        <Text weight="bold" size="3">Created:</Text>
        <Text size="3" style={{ marginLeft: "0.5rem" }}>
          {new Date(createdAt).toLocaleDateString()}
        </Text>
      </Box>

      <Box>
        <Text weight="bold" size="3">Last Updated:</Text>
        <Text size="3" style={{ marginLeft: "0.5rem" }}>
          {new Date(updatedAt).toLocaleDateString()}
        </Text>
      </Box>
    </Box>
  );
};

export default ProductDetailInfo;

