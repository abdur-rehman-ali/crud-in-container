import { Container } from "@radix-ui/themes"
import ProductsTable from "./ProductsTable"
import Header from "./Header"
import { useEffect, useState } from "react"
import { productsAPI } from "../../services/productAPI"

interface Products {
  id: string
  name: string
  description: string
  price: string
  category: string
  in_stock: boolean
  created_at: string
  updated_at: string
}


const Products = () => {
  const [products, setProducts] = useState<Products[]>()

  useEffect(() => {
    (async () => {
      const response = await productsAPI.getProducts()
      setProducts(response)
    })()

  }, [])

  return (
    <Container>
      <Header />
      <ProductsTable products={products} />
    </Container>
  )
}

export default Products