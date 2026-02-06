import ProductsTable from "./ProductsTable"

const DUMMY_PRODUCTS = [
  {
    "id": "9a4ade5e-dba1-4416-9782-a21bd85d59e2",
    "name": "New Product From Container",
    "description": "New Product From Container DESCRIPTION",
    "price": "123.00",
    "category": "Sports",
    "in_stock": true,
    "created_at": "2026-02-04T17:28:52.194323Z",
    "updated_at": "2026-02-04T17:28:52.194381Z"
  },
  {
    "id": "b201de02-daa2-4e17-9976-fe1191bdb505",
    "name": "New Product",
    "description": "New Product description",
    "price": "123.00",
    "category": "Books",
    "in_stock": true,
    "created_at": "2026-02-04T14:49:25.260413Z",
    "updated_at": "2026-02-04T14:49:25.260461Z"
  }
]



const Products = () => {
  return (
    <ProductsTable products={DUMMY_PRODUCTS}/>
  )
}

export default Products