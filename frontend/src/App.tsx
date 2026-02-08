import { createBrowserRouter, RouterProvider } from "react-router";
import { Products, ProductDetail } from "./components/products";

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
