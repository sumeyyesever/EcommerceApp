import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import ProductList from "./pages/productlist/ProductList";
import SingleProduct from "./pages/singleproduct/SingleProduct";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/products/:id",
    element: <ProductList />
  },
  {
    path:"/product/:id",
    element: <SingleProduct />
  },
  {
    path:"/cart",
    element: <Cart />
  },
  {
    path:"/login",
    element: <Login />
  },
  {
    path:"/register",
    element: <Register />
  }
]);



const App = () => {
  return <div>
   <RouterProvider router={router} />
  </div>;
};

export default App;