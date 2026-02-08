import { createBrowserRouter, RouterProvider } from "react-router";
import Products from "./components/products/Products";
import ProductDetail from "./components/products/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/products/:id",
    element: <ProductDetail />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
